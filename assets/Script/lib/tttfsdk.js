if (window.tt) {
(function() {
let t = {
api_url: "https://ad-server.xinghejoy.com",
channel: 302,
game_id: 0,
package_id: 9999,
platform: "android",
sdk_version: "1.1.0",
is_init: !1,
is_load: !1,
common_params: {},
requesting_api: []
};
window.tttfSDK = t;
t.setStorage = function(t, e) {
tt.setStorageSync("___wxtfsdk___" + t, e);
};
t.getStorage = function(t) {
return tt.getStorageSync("___wxtfsdk___" + t);
};
t.requestCheck = function(e) {
return t.requesting_api[e];
};
t.requestStart = function(e) {
t.requesting_api[e] = 1;
setTimeout(function() {
t.requestEnd(e);
}, 3e3);
};
t.requestEnd = function(e) {
t.requesting_api[e] = 0;
};
t.log = function() {
console.log(arguments);
};
t.commonSet = function(e) {
console.log(e);
e.query.package_id && (t.common_params.package_id = e.query.package_id);
let o = encodeURIComponent(Object.keys(e.query).map(t => t + "=" + e.query[t]).join("&"));
o && (t.common_params.query_info = o);
};
t.load = function() {
if (t.is_load) return !1;
console.log("wxtfsdk.load----start");
t.is_load = !0;
let e = t.getStorage("uuid");
if (!e) {
const o = () => (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
e = o() + o() + "-" + o() + "-" + o() + "-" + o() + "-" + o() + o() + o();
t.setStorage("uuid", e);
}
let o = tt.getSystemInfoSync();
t.platform = o.platform;
t.common_params = {
game_id: t.game_id,
channel: t.channel,
package_id: t.package_id,
sdk_version: t.sdk_version + "-" + o.SDKVersion + "-" + o.version,
device_type: 3,
device_screen: o.screenWidth + " x " + o.screenHeight,
device_os: o.brand,
device_factory: o.model,
device_system: o.system.replace(/[a-zA-Z]+\s*/, ""),
uuid: e,
system: o.system,
platform: o.platform,
wx_language: o.language
};
let n = tt.getLaunchOptionsSync();
t.commonSet(n);
console.log("wxtfsdk.load----end");
};
t.init = function(e, o) {
if (t.is_init) return !1;
console.log("wxtfsdk.init----start");
t.is_init = !0;
t.game_id = e;
t.common_params.game_id = e;
t.common_params.game_version = o;
console.log("wxtfsdk.init----end");
t.firstup();
};
t.ajax = function(e, o, n, a, i) {
if (0 == t.is_init) {
tt.showToast({
title: "请先初始化",
icon: "none",
duration: 2e3
});
return !1;
}
for (let e in t.common_params) o[e] = t.common_params[e];
let r = e + JSON.stringify(o);
if (t.requestCheck(r)) return !1;
t.requestStart(r);
console.log("wxtfsdk.ajax-start", e, JSON.stringify(o));
tt.request({
url: t.api_url + e,
data: o,
method: "POST",
success: o => {
t.requestEnd(r);
console.log("wxtfsdk.ajax-success", e, JSON.stringify(o));
1 === a && tt.hideLoading();
if (o && 200 == o.statusCode) {
if (0 != o.data.code) return !1;
n && n(o.data);
} else i && i();
},
fail: n => {
t.requestEnd(r);
1 === a && tt.hideLoading();
t.log("ajax-url", t.api_url + e);
t.log("ajax-params", o);
t.log("ajax-error", n);
i && i(n);
}
});
};
t.firstup = function() {
if ("1" != t.getStorage("first_up")) {
t.ajax("/api/report/act", {}, function(t) {});
t.setStorage("first_up", "1");
}
};
t.reg = function(e) {
t.ajax("/api/report/reg", e, function(t) {});
};
t.login = function(e) {
t.ajax("/api/report/login", e, function(t) {});
};
t.pay = function(e) {
t.ajax("/api/report/pay", e, function(t) {});
};
t.roleCreate = function(e) {
t.ajax("/api/report/role_create", e, function(t) {});
};
t.roleUpgrade = function(e) {
t.ajax("/api/report/role_upgrade", e, function(t) {});
};
t.load();
tt.getNetworkType({
complete(e) {
t.common_params.net_work = e.networkType;
}
});
tt.onNetworkStatusChange(function(e) {
t.common_params.net_work = e.networkType;
});
})();
window.GameLogic.tttfSDK = window.tttfSDK;
}