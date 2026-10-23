(function(e) {
"use strict";
console.log("HabbyWxLogin!");
var t = "wxgame", n = "monstermustdie", r = "/api/v1/user/login", o = 15e3;
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
var o = a(n).replace(/^\/+|\/+$/g, ""), u = a(r);
"/" !== u.charAt(0) && (u = "/" + u);
return t + "/" + o + u;
}
var c = {
VERSION: "4.1.0",
GAME_ID: n,
LOGIN_PATH: r,
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
loginByAuthCode: function(n, r, c) {
return new Promise(function(l) {
var d = a(n);
if (d) {
var p = a(r);
if (p) if (c && "object" == typeof c) {
var R = e.wx;
if (R && "function" == typeof R.request) {
var f = i(p), g = {
accountType: t,
thirdpartyCode: d,
clientData: c
};
try {
R.request({
url: f,
method: "POST",
header: {
"Content-Type": "application/json"
},
data: g,
timeout: o,
success: function(e) {
try {
if (!e) {
l(s("NETWORK_ERROR", "响应为空"));
return;
}
if (e.statusCode < 200 || e.statusCode >= 300) {
l(s("HTTP_" + e.statusCode, "http error"));
return;
}
var t = e.data;
if ("string" == typeof t) try {
t = JSON.parse(t);
} catch (e) {
l(s("NETWORK_ERROR", "响应 JSON 解析失败"));
return;
}
if (!t || "object" != typeof t) {
l(s("SERVER_ERROR", "响应格式错误"));
return;
}
0 === t.code || "0" === t.code ? l(u(t.data || {})) : l(s(void 0 !== t.code && null !== t.code ? t.code : -1, a(t.message || t.msg) || "server error"));
} catch (e) {
l(s("INTERNAL_ERROR", e && e.message || "parse response failed"));
}
},
fail: function(e) {
l(s("NETWORK_ERROR", a(e && e.errMsg) || "network error"));
}
});
} catch (e) {
l(s("INTERNAL_ERROR", e && e.message || "wx.request throw"));
}
} else l(s("ENV_ERROR", "wx.request 不可用，须在微信小游戏环境运行"));
} else l(s("PARAM_INVALID", "config 不能为空（预制 clientData）")); else l(s("PARAM_INVALID", "accountUrl 不能为空（如 https://dev-habby-account.lezuan1.com）"));
} else l(s("PARAM_INVALID", "code 不能为空"));
});
}
};
e.HabbyWxLoginCore = c;
"undefined" != typeof module && module.exports && (module.exports = c);
})("undefined" != typeof globalThis ? globalThis : this);