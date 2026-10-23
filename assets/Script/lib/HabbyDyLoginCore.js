(function(e) {
"use strict";
console.log("HabbyDyLogin!");
var t = "douyin", n = "monstermustdie", o = "/api/v1/user/login", r = 15e3;
function a(e) {
return null === e || void 0 === e ? "" : String(e).trim();
}
function u(e) {
return {
ok: !0,
code: 0,
message: "",
data: e || {}
};
}
function s(e, t) {
return {
ok: !1,
code: e,
message: t || "",
data: null
};
}
function i(e) {
var t = a(e).replace(/\/+$/, "");
if (!t) return "";
var r = a(n).replace(/^\/+|\/+$/g, ""), u = a(o);
"/" !== u.charAt(0) && (u = "/" + u);
return t + "/" + r + u;
}
var c = {
VERSION: "1.0.0",
GAME_ID: n,
LOGIN_PATH: o,
ACCOUNT_TYPE: t,
OS: {
IOS: "1",
ANDROID: "2",
PC: "3",
HARMONY: "4"
},
createClientData: function(e) {
var t = e && "object" == typeof e ? e : {};
return {
deviceId: null != t.deviceId ? a(t.deviceId) : "",
os: null != t.os ? a(t.os) : "",
appBundle: null != t.appBundle ? a(t.appBundle) : "",
channelId: null != t.channelId ? a(t.channelId) : "",
appVersion: null != t.appVersion ? a(t.appVersion) : ""
};
},
loginByAuthCode: function(n, o, c, l) {
return new Promise(function(d) {
var p = a(n), R = a(l);
if (p || R) {
var f = a(o);
if (f) if (c && "object" == typeof c) {
var y = e.tt && "function" == typeof e.tt.request ? e.tt : null;
if (y) {
var O = i(f), I = {
accountType: t,
clientData: c
};
p && (I.thirdpartyCode = p);
R && (I.anonymousCode = R);
try {
y.request({
url: O,
method: "POST",
header: {
"Content-Type": "application/json"
},
data: I,
timeout: r,
success: function(e) {
try {
if (!e) {
d(s("NETWORK_ERROR", "响应为空"));
return;
}
if (e.statusCode < 200 || e.statusCode >= 300) {
d(s("HTTP_" + e.statusCode, "http error"));
return;
}
var t = e.data;
if ("string" == typeof t) try {
t = JSON.parse(t);
} catch (e) {
d(s("NETWORK_ERROR", "响应 JSON 解析失败"));
return;
}
if (!t || "object" != typeof t) {
d(s("SERVER_ERROR", "响应格式错误"));
return;
}
0 === t.code || "0" === t.code ? d(u(t.data || {})) : d(s(void 0 !== t.code && null !== t.code ? t.code : -1, a(t.message || t.msg) || "server error"));
} catch (e) {
d(s("INTERNAL_ERROR", e && e.message || "parse response failed"));
}
},
fail: function(e) {
d(s("NETWORK_ERROR", a(e && e.errMsg) || "network error"));
}
});
} catch (e) {
d(s("INTERNAL_ERROR", e && e.message || "tt.request throw"));
}
} else d(s("ENV_ERROR", "tt.request 不可用，须在抖音小游戏环境运行"));
} else d(s("PARAM_INVALID", "config 不能为空（预制 clientData）")); else d(s("PARAM_INVALID", "accountUrl 不能为空（如 https://dev-habby-account.lezuan1.com）"));
} else d(s("PARAM_INVALID", "code 与 anonymousCode 不能同时为空"));
});
}
};
e.HabbyDyLoginCore = c;
"undefined" != typeof module && module.exports && (module.exports = c);
})("undefined" != typeof globalThis ? globalThis : this);