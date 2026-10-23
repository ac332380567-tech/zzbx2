if (window.wx) {
(function() {
let e = {
api_url: "https://ad-server.xinghejoy.com",
channel: 301,
game_id: 0,
package_id: 9999,
platform: "android",
sdk_version: "1.1.0",
is_init: !1,
is_load: !1,
wxlog: null,
common_params: {},
requesting_api: []
};
window.wxtfSDK = e;
e.setStorage = function(e, t) {
wx.setStorageSync("___wxtfsdk___" + e, t);
};
e.getStorage = function(e) {
return wx.getStorageSync("___wxtfsdk___" + e);
};
e.requestCheck = function(t) {
return e.requesting_api[t];
};
e.requestStart = function(t) {
e.requesting_api[t] = 1;
setTimeout(function() {
e.requestEnd(t);
}, 3e3);
};
e.requestEnd = function(t) {
e.requesting_api[t] = 0;
};
e.log = function() {
if (e.wxlog) {
e.wxlog.info.apply(e.wxlog, arguments);
console.log(arguments);
}
};
e.commonSet = function(t) {
t.query.package_id && (e.common_params.package_id = t.query.package_id);
let o = encodeURIComponent(Object.keys(t.query).map(e => e + "=" + t.query[e]).join("&"));
o && (e.common_params.query_info = o);
};
e.load = function() {
if (e.is_load) return !1;
console.log("wxtfsdk.load----start");
e.is_load = !0;
e.wxlog = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;
let t = e.getStorage("uuid");
if (!t) {
const o = () => (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
t = o() + o() + "-" + o() + "-" + o() + "-" + o() + "-" + o() + o() + o();
e.setStorage("uuid", t);
}
let o = wx.getSystemInfoSync();
e.platform = o.platform;
e.common_params = {
game_id: e.game_id,
channel: e.channel,
package_id: e.package_id,
sdk_version: e.sdk_version + "-" + o.SDKVersion + "-" + o.version,
device_type: 3,
device_screen: o.screenWidth + " x " + o.screenHeight,
device_os: o.brand,
device_factory: o.model,
device_system: o.system.replace(/[a-zA-Z]+\s*/, ""),
uuid: t,
system: o.system,
platform: o.platform,
wx_language: o.language
};
let n = wx.getLaunchOptionsSync();
e.commonSet(n);
console.log("wxtfsdk.load----end");
};
e.init = function(t, o) {
if (e.is_init) return !1;
console.log("wxtfsdk.init----start");
e.is_init = !0;
e.game_id = t;
e.common_params.game_id = t;
e.common_params.game_version = o;
console.log("wxtfsdk.init----end");
e.firstup();
};
e.ajax = function(t, o, n, a, i) {
if (0 == e.is_init) {
wx.showToast({
title: "请先初始化",
icon: "none",
duration: 2e3
});
return !1;
}
for (let t in e.common_params) o[t] = e.common_params[t];
let r = wx.getBatteryInfoSync();
void 0 != r.level && (o.battery_level = r.level);
o.is_charging = 0;
r.isCharging && (o.is_charging = 1);
let s = t + JSON.stringify(o);
if (e.requestCheck(s)) return !1;
e.requestStart(s);
console.log("wxtfsdk.ajax-start", t, JSON.stringify(o));
wx.request({
url: e.api_url + t,
data: o,
method: "POST",
success: o => {
e.requestEnd(s);
console.log("wxtfsdk.ajax-success", t, JSON.stringify(o));
1 === a && wx.hideLoading();
if (o && 200 == o.statusCode) {
if (0 != o.data.code) return !1;
n && n(o.data);
} else i && i();
},
fail: n => {
e.requestEnd(s);
1 === a && wx.hideLoading();
e.log("ajax-url", e.api_url + t);
e.log("ajax-params", o);
e.log("ajax-error", n);
i && i(n);
}
});
};
e.firstup = function() {
if ("1" != e.getStorage("first_up")) {
e.ajax("/api/report/act", {}, function(e) {});
e.setStorage("first_up", "1");
}
};
e.reg = function(t) {
e.ajax("/api/report/reg", t, function(e) {});
};
e.login = function(t) {
e.ajax("/api/report/login", t, function(e) {});
};
e.pay = function(t) {
e.ajax("/api/report/pay", t, function(e) {});
};
e.roleCreate = function(t) {
e.ajax("/api/report/role_create", t, function(e) {});
};
e.roleUpgrade = function(t) {
e.ajax("/api/report/role_upgrade", t, function(e) {});
};
e.load();
wx.getNetworkType({
complete(t) {
e.common_params.net_work = t.networkType;
}
});
wx.onNetworkStatusChange(function(t) {
e.common_params.net_work = t.networkType;
});
})();
window.GameLogic.wxtfSDK = window.wxtfSDK;
}