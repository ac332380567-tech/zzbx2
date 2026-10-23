(function(e) {
"use strict";
var r = 15e3, t = {
1: "1",
2: "2",
4: "4",
ios: "1",
iphone: "1",
ipad: "1",
android: "2",
harmony: "4",
harmonyos: "4"
}, n = {
initialized: !1,
gameId: "",
accountBaseUrl: "",
liveOpsBaseUrl: "",
timeoutMs: r,
throwOnError: !1,
logger: null,
clientData: {},
clientDataProvider: null,
transport: null,
debug: !1,
lastRequest: null
};
function o(e) {
return e + "-" + Date.now();
}
function i(e) {
return null === e || void 0 === e ? "" : String(e).trim();
}
function a(e) {
return e && "object" == typeof e ? {
info: "function" == typeof e.info ? e.info.bind(e) : function() {},
warn: "function" == typeof e.warn ? e.warn.bind(e) : function() {},
error: "function" == typeof e.error ? e.error.bind(e) : function() {}
} : console;
}
function c(e, r, t) {
var o = n.logger || console;
try {
"info" === e && o.info && o.info(r, t || {});
"warn" === e && o.warn && o.warn(r, t || {});
"error" === e && o.error && o.error(r, t || {});
} catch (e) {}
}
function u() {
try {
if (e.cc && e.cc.sys) {
var r = i(e.cc.sys.os).toLowerCase();
if (r) {
if (r.indexOf("android") >= 0) return "2";
if (r.indexOf("ios") >= 0 || r.indexOf("iphone") >= 0 || r.indexOf("ipad") >= 0) return "1";
if (r.indexOf("harmony") >= 0) return "4";
}
}
} catch (e) {}
try {
var t = i(e.navigator && e.navigator.userAgent).toLowerCase();
if (!t) return "";
if (t.indexOf("harmony") >= 0 || t.indexOf("hongmeng") >= 0) return "4";
if (t.indexOf("android") >= 0) return "2";
if (t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 || t.indexOf("ios") >= 0) return "1";
} catch (e) {}
return "";
}
function s(e) {
var r = i(e).toLowerCase();
return r ? t[r] || "" : u();
}
function l(e) {
var r, t = {};
for (r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
return t;
}
function d() {
var e = {};
if ("function" == typeof n.clientDataProvider) try {
var r = n.clientDataProvider();
r && "object" == typeof r && (e = l(r));
} catch (e) {} else e = l(n.clientData || {});
return e;
}
function f(e) {
if ("number" == typeof e && isFinite(e)) return Math.trunc(e);
var r = i(e);
if (!r) return null;
if (!/^-?\d+$/.test(r)) return null;
var t = Number(r);
return isFinite(t) ? Math.trunc(t) : null;
}
function p(r, t, n) {
var o = l(d());
if (r && "object" == typeof r) {
var a;
for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (o[a] = r[a]);
}
if (!i(o.appLanguage)) try {
e.cc && e.cc.sys && i(e.cc.sys.language) && (o.appLanguage = i(e.cc.sys.language));
} catch (e) {}
if (!i(o.osVersion)) try {
e.cc && e.cc.sys && i(e.cc.sys.osVersion) && (o.osVersion = i(e.cc.sys.osVersion));
} catch (e) {}
var c = s(o.os);
if (i(o.os) && !c) throw h("clientData.os is invalid", t);
if (!c) throw h("clientData.os is required", t);
o.os = c;
if (!i(o.deviceId)) throw h("clientData.deviceId is required", t);
if (!i(o.channelId)) throw h("clientData.channelId is required", t);
o.deviceId = i(o.deviceId);
if ("liveops" === n) {
var u = f(o.channelId);
if (null === u) throw h("clientData.channelId must be integer for liveops", t);
var p = f(o.os);
if (null === p) throw h("clientData.os must be integer for liveops", t);
o.channelId = u;
o.os = p;
} else {
o.channelId = i(o.channelId);
o.os = i(o.os);
}
return o;
}
function h(e, r) {
return {
ok: !1,
code: "PARAM_INVALID",
message: e,
retryable: !1,
requestId: o(r || "param")
};
}
function y(e, r) {
return i(e) ? null : h(r + " is required", "init");
}
function v(e, r) {
if (e && !1 === e.ok && e.code) {
e.requestId = e.requestId || r;
return e;
}
return {
ok: !1,
code: "NETWORK_ERROR",
message: i(e && e.message) || "network error",
retryable: !0,
requestId: r
};
}
function m(e) {
if (!n.throwOnError || e.ok) return e;
var r = new Error(e.message || "request failed");
r.code = e.code;
r.ok = e.ok;
r.retryable = e.retryable;
r.requestId = e.requestId;
r.raw = e.raw;
throw r;
}
function g(e) {
var r = e && "undefined" != typeof e.code ? e.code : -1;
return 0 === r ? {
ok: !0,
code: 0,
data: e && "undefined" != typeof e.data ? e.data : {}
} : {
ok: !1,
code: r,
message: i(e && (e.message || e.msg || e.error)) || "server error",
retryable: !1,
data: e && e.data
};
}
function b(e) {
try {
return JSON.stringify(e || {});
} catch (e) {
return "{}";
}
}
function k(e) {
var r = l(e.headers || {}), t = e.body && "object" == typeof e.body ? l(e.body) : e.body;
return {
requestId: e.requestId,
method: e.method,
url: e.url,
timeoutMs: e.timeoutMs,
headers: r,
body: t,
bodyText: e.bodyText
};
}
function P(e) {
var t = o(e.requestIdPrefix || "req"), a = i(e.method || "POST").toUpperCase(), u = i(e.url), s = e.body || null, l = Number(e.timeoutMs || n.timeoutMs || r), d = "GET" === a ? null : b(s), f = {
requestId: t,
method: a,
url: u,
timeoutMs: l,
headers: {
"Content-Type": "application/json"
},
body: s,
bodyText: d
};
n.debug && (n.lastRequest = k(f));
c("info", "[HabbyHttp] request.start", {
requestId: t,
method: a,
url: u
});
return q(f).then(function(e) {
var r;
try {
r = e && "object" == typeof e ? e : e ? JSON.parse(e) : {};
} catch (e) {
return m({
ok: !1,
code: "NETWORK_ERROR",
message: "json parse error",
retryable: !0,
requestId: t
});
}
var n = g(r);
n.requestId = t;
n.raw = r;
n.ok || 20009 !== n.code && 20040 !== n.code || (n.retryable = !1);
c(n.ok ? "info" : "warn", "[HabbyHttp] request.done", {
requestId: t,
ok: n.ok,
code: n.code
});
return m(n);
}).catch(function(e) {
var r = v(e, t);
c("error", "[HabbyHttp] request.fail", {
requestId: t,
code: r.code,
message: r.message
});
return m(r);
});
}
function q(e) {
return "function" == typeof n.transport ? Promise.resolve(n.transport(e)) : T(e.method, e.url, e.bodyText, e.timeoutMs);
}
function T(r, t, n, o) {
if ("function" == typeof e.fetch) {
var i = null, a = null;
if ("function" == typeof e.AbortController) {
i = new e.AbortController();
a = e.setTimeout(function() {
try {
i.abort();
} catch (e) {}
}, o);
}
var c = {
method: r,
headers: {
"Content-Type": "application/json"
}
};
null !== n && (c.body = n);
i && (c.signal = i.signal);
return e.fetch(t, c).then(function(r) {
a && e.clearTimeout(a);
return r.text().then(function(e) {
if (!r.ok) throw new Error("http_" + r.status);
return e;
});
});
}
return new Promise(function(i, a) {
var c = e.XMLHttpRequest;
if ("function" == typeof c) {
var u = new c();
u.open(r, t, !0);
u.timeout = o;
u.setRequestHeader("Content-Type", "application/json");
u.onreadystatechange = function() {
4 === u.readyState && (u.status >= 200 && u.status < 300 ? i(u.responseText || "") : a(new Error("http_" + u.status)));
};
u.onerror = function() {
a(new Error("network error"));
};
u.ontimeout = function() {
a(new Error("timeout"));
};
try {
u.send(n);
} catch (e) {
a(e);
}
} else a(new Error("NOT_SUPPORTED"));
});
}
function D() {
var e = y(n.accountBaseUrl, "accountBaseUrl");
return e || null;
}
function I() {
var e = y(n.liveOpsBaseUrl, "liveOpsBaseUrl");
return e || (i(n.gameId) ? null : h("gameId is required", "init"));
}
function w(e, r, t) {
var o = D();
return o ? Promise.resolve(m(o)) : P({
requestIdPrefix: t,
method: "POST",
url: i(n.accountBaseUrl).replace(/\/+$/, "") + e,
body: r
});
}
function C(e, r, t) {
var o = I();
return o ? Promise.resolve(m(o)) : P({
requestIdPrefix: t,
method: "POST",
url: i(n.liveOpsBaseUrl).replace(/\/+$/, "") + e,
body: r
});
}
var O = {
init: function(e) {
var t = e || {};
n.gameId = i(t.gameId);
n.accountBaseUrl = i(t.accountBaseUrl);
n.liveOpsBaseUrl = i(t.liveOpsBaseUrl);
n.timeoutMs = Number(t.timeoutMs || r);
n.throwOnError = Boolean(t.throwOnError);
n.logger = a(t.logger || console);
n.clientDataProvider = "function" == typeof t.clientData ? t.clientData : null;
n.clientData = t.clientData && "object" == typeof t.clientData ? l(t.clientData) : {};
n.transport = "function" == typeof t.transport ? t.transport : null;
n.debug = Boolean(t.debug);
n.lastRequest = null;
n.initialized = !0;
return {
ok: !0
};
},
setClientDataProvider: function(e) {
if ("function" != typeof e) {
return m(h("setClientDataProvider requires function", "setClientDataProvider"));
}
n.clientDataProvider = e;
return {
ok: !0
};
},
setLogger: function(e) {
n.logger = a(e || console);
return {
ok: !0
};
},
setTransport: function(e) {
if (null !== e && "function" != typeof e) {
return m(h("setTransport requires function|null", "setTransport"));
}
n.transport = e;
return {
ok: !0
};
},
setDebug: function(e) {
n.debug = Boolean(e);
n.debug || (n.lastRequest = null);
return {
ok: !0
};
},
getLastRequest: function() {
return n.lastRequest ? l(n.lastRequest) : null;
},
login: {
guest: function(e) {
var r, t = e || {};
try {
r = p(t.clientData, "login-guest", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/login", {
accountType: "dv",
clientData: r
}, "login-guest");
},
phone: function(e) {
var r, t = e || {};
if (!i(t.phone)) return Promise.resolve(m(h("phone is required", "login-phone")));
if (!i(t.captcha)) return Promise.resolve(m(h("captcha is required", "login-phone")));
try {
r = p(t.clientData, "login-phone", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/login", {
accountType: "phone",
phone: i(t.phone),
captcha: i(t.captcha),
clientData: r
}, "login-phone");
},
token: function(e) {
var r, t = e || {};
if (!i(t.accountType)) return Promise.resolve(m(h("accountType is required", "login-token")));
if (!i(t.token)) return Promise.resolve(m(h("token is required", "login-token")));
try {
r = p(t.clientData, "login-token", "account");
} catch (e) {
return Promise.resolve(m(e));
}
var n = {
accountType: i(t.accountType),
token: i(t.token),
clientData: r
};
i(t.phone) && (n.phone = i(t.phone));
return w("/user/login", n, "login-token");
},
qq: function(e) {
var r, t = e || {};
if (!i(t.accessToken)) return Promise.resolve(m(h("accessToken is required", "login-qq")));
try {
r = p(t.clientData, "login-qq", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/login", {
accountType: "qq",
accessToken: i(t.accessToken),
clientData: r
}, "login-qq");
},
wechat: function(e) {
var r, t = e || {};
if (!i(t.thirdpartyCode)) return Promise.resolve(m(h("thirdpartyCode is required", "login-wechat")));
try {
r = p(t.clientData, "login-wechat", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/login", {
accountType: "weixin",
thirdpartyCode: i(t.thirdpartyCode),
clientData: r
}, "login-wechat");
},
shanyan: function(e) {
var r, t = e || {};
if (!i(t.mobileToken)) return Promise.resolve(m(h("mobileToken is required", "login-shanyan")));
try {
r = p(t.clientData, "login-shanyan", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/login", {
accountType: "phonefast",
mobileToken: i(t.mobileToken),
clientData: r
}, "login-shanyan");
},
appleId: function(e) {
var r, t = e || {}, n = i(t.identityToken), o = i(t.token);
if (!n && !o) return Promise.resolve(m(h("identityToken or token is required", "login-appleId")));
try {
r = p(t.clientData, "login-appleId", "account");
} catch (e) {
return Promise.resolve(m(e));
}
var a = {
accountType: "appleid",
clientData: r
};
n && (a.identityToken = n);
i(t.authorizationCode) && (a.authorizationCode = i(t.authorizationCode));
o && (a.token = o);
return w("/user/login", a, "login-appleId");
}
},
account: {
sendCaptcha: function(e) {
var r = e || {};
return i(r.phone) ? w("/user/captcha", {
phone: i(r.phone)
}, "account-sendCaptcha") : Promise.resolve(m(h("phone is required", "account-sendCaptcha")));
},
realName: function(e) {
var r, t = e || {};
if (!i(t.token)) return Promise.resolve(m(h("token is required", "account-realName")));
if (!i(t.idCardName)) return Promise.resolve(m(h("idCardName is required", "account-realName")));
if (!i(t.idCardNumber)) return Promise.resolve(m(h("idCardNumber is required", "account-realName")));
try {
r = p(t.clientData, "account-realName", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/idcard/validate", {
token: i(t.token),
idCardName: i(t.idCardName),
idCardNumber: i(t.idCardNumber),
clientData: r
}, "account-realName");
},
bindPhoneByCaptcha: function(e) {
var r, t = e || {};
if (!i(t.token)) return Promise.resolve(m(h("token is required", "account-bindPhoneByCaptcha")));
if (!i(t.phone)) return Promise.resolve(m(h("phone is required", "account-bindPhoneByCaptcha")));
if (!i(t.captcha)) return Promise.resolve(m(h("captcha is required", "account-bindPhoneByCaptcha")));
try {
r = p(t.clientData, "account-bindPhoneByCaptcha", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/bind", {
token: i(t.token),
phone: i(t.phone),
captcha: i(t.captcha),
clientData: r
}, "account-bindPhoneByCaptcha");
},
bindPhoneByMobileToken: function(e) {
var r, t = e || {};
if (!i(t.token)) return Promise.resolve(m(h("token is required", "account-bindPhoneByMobileToken")));
if (!i(t.mobileToken)) return Promise.resolve(m(h("mobileToken is required", "account-bindPhoneByMobileToken")));
try {
r = p(t.clientData, "account-bindPhoneByMobileToken", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/bind", {
token: i(t.token),
mobileToken: i(t.mobileToken),
clientData: r
}, "account-bindPhoneByMobileToken");
},
unbindPhone: function(e) {
var r, t = e || {};
if (!i(t.token)) return Promise.resolve(m(h("token is required", "account-unbindPhone")));
try {
r = p(t.clientData, "account-unbindPhone", "account");
} catch (e) {
return Promise.resolve(m(e));
}
return w("/user/unbind", {
token: i(t.token),
clientData: r
}, "account-unbindPhone");
}
},
cloudConfig: {
get: function(e) {
var r, t = e || {};
try {
r = p(t.clientData, "cloudConfig-get", "liveops");
} catch (e) {
return Promise.resolve(m(e));
}
var o = i(n.gameId);
if (!o) return Promise.resolve(m(h("gameId is required", "cloudConfig-get")));
var a = {
clientData: r
};
"boolean" == typeof t.printAccessLog && (a.printAccessLog = t.printAccessLog);
if (void 0 !== t.object && null !== t.object) {
var c = f(t.object);
if (null === c) return Promise.resolve(m(h("cloudConfig.object must be integer", "cloudConfig-get")));
a.object = c;
}
i(t.roleId) && (a.userId = i(t.roleId));
return C("/" + encodeURIComponent(o) + "/api/v1/config", a, "cloudConfig-get").then(function(e) {
if (!e.ok) return e;
var r = e.data;
if (r && "object" == typeof r && "string" == typeof r.jsonStr) try {
r.json = JSON.parse(r.jsonStr);
} catch (e) {}
return e;
});
}
}
};
e.HabbyHttp = O;
})("undefined" != typeof globalThis ? globalThis : this);