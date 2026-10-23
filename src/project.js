window.__require = function e(t, n, o) {
function i(a, s) {
if (!n[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
}
var l = n[a] = {
exports: {}
};
t[a][0].call(l.exports, function(e) {
return i(t[a][1][e] || e);
}, l, l.exports, e, t, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
"3DCamera": [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f7b35jgUZdGorkk9XPMUfR8", "3DCamera");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.adjustViewPort();
window.GameLogic || (window.GameLogic = {});
var e = this;
window.GameLogic.adjust3DCamera = function() {
e.adjustViewPort();
};
},
adjustViewPort: function() {
var e = cc.view.getCanvasSize();
e.width /= cc.view.getScaleX();
e.height /= cc.view.getScaleY();
var t = this.node.z / 800 * e.height;
this.node.z = t;
this.node.is3DNode = !0;
console.log("[3DCamera] ", e, t);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Entry: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e8175O/dcRBF4KjZ3tFPt5A", "Entry");
cc.Class({
extends: cc.Component,
properties: {
progressBar: cc.ProgressBar,
progressText: cc.Label,
bgSprite: cc.Sprite,
logoName: cc.Sprite,
bgChar: cc.Sprite,
logText: cc.Label,
bgMask: cc.Sprite,
spineNode: cc.Node
},
checkServerAvailable: function(e, t) {
var n = window.GameLogic.getChannel(), o = window.GameLogic.getSubChannel(), i = (window.GameLogic.getApkVersion(), 
"");
i = "td_openew_aborad" == n ? "https://rings.aborad1.openew.com:5010/server_status/fetch?channel=" + n + "&subChannel=" + o + "&timestamp=" + Date.now() : "td_openew_jp" == n ? "https://rings.jpapi.openew.com:5010/server_status/fetch?channel=" + n + "&subChannel=" + o + "&timestamp=" + Date.now() : "xgw_habby" == n && window.GameLogic.isHabby ? "https://gameapi-xgwhb.openew.com/server_status/fetch?channel=" + n + "&subChannel=" + o + "&timestamp=" + Date.now() : "https://gameapi.jinhaibuluo2.com/server_status/fetch?channel=" + n + "&subChannel=" + o + "&timestamp=" + Date.now();
var r = cc.sys.localStorage.getItem("TapTrackId"), a = cc.sys.localStorage.getItem("__LoginParams"), s = cc.sys.localStorage.getItem("__hasActive");
s || (s = r || a) && cc.sys.localStorage.setItem("__hasActive", "1");
var c = cc.sys.os == cc.sys.OS_ANDROID && "taptap" == o;
if (!s && t && (c || cc.sys.os == cc.sys.OS_IOS)) {
i += "&idfa=";
if (cc.sys.os == cc.sys.OS_IOS) {
var u = jsb.reflection.callStaticMethod("AppController", "getIDFA");
if (u) {
i += u;
console.log("curIDFA: " + u);
cc.sys.localStorage.setItem("idfa", u);
}
}
i += "&idfv=";
if (cc.sys.os == cc.sys.OS_IOS) {
var l = jsb.reflection.callStaticMethod("AppController", "getIDFV");
if (l) {
i += l;
console.log("curIDFV: " + l);
cc.sys.localStorage.setItem("idfv", l);
}
}
i += "&imei=";
if (cc.sys.os == cc.sys.OS_ANDROID) {
var d = jsb.reflection.callStaticMethod("com/openew/game/utils/NativeCall", "getIMEI", "()Ljava/lang/String;");
i += d;
console.log("curIMEI: " + d);
cc.sys.localStorage.setItem("imei", d);
}
i += "&oaid=";
if (cc.sys.os == cc.sys.OS_ANDROID) {
var p = jsb.reflection.callStaticMethod("com/openew/game/utils/NativeCall", "getOAID", "()Ljava/lang/String;");
i += p;
console.log("curOAID: " + p);
cc.sys.localStorage.setItem("oaid", p);
}
i += "&device=";
if (cc.sys.os == cc.sys.OS_ANDROID) {
i += "0";
cc.sys.localStorage.setItem("device", "0");
} else if (cc.sys.os == cc.sys.OS_IOS) {
i += "1";
cc.sys.localStorage.setItem("device", "1");
}
i += "&device_model=";
if (cc.sys.os == cc.sys.OS_ANDROID) {
var g = jsb.reflection.callStaticMethod("com/openew/game/utils/NativeCall", "getDeviceModel", "()Ljava/lang/String;");
i += g;
console.log("curDeviceModel: " + g);
cc.sys.localStorage.setItem("device_model", g);
}
i += "&device_brand=";
if (cc.sys.os == cc.sys.OS_ANDROID) {
var f = jsb.reflection.callStaticMethod("com/openew/game/utils/NativeCall", "getDeviceBrand", "()Ljava/lang/String;");
i += f;
console.log("curDeviceBrand: " + f);
cc.sys.localStorage.setItem("device_brand", f);
}
i += "&android_id=";
if (cc.sys.os == cc.sys.OS_ANDROID) {
var m = jsb.reflection.callStaticMethod("com/openew/game/utils/NativeCall", "getDeviceIdSync", "()Ljava/lang/String;");
i += m;
console.log("curAndroidId: " + m);
cc.sys.localStorage.setItem("android_id", m);
}
i += "&os_version=" + cc.sys.osVersion;
cc.sys.localStorage.setItem("os_version", cc.sys.osVersion);
var _ = window.GameLogic.getPackageName();
i += "&package_name=" + _;
cc.sys.localStorage.setItem("package_name", _);
console.log("check url: " + i);
}
var v = cc.loader.getXMLHttpRequest();
v.open("GET", i);
v.responseType = "text";
v.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
v.onreadystatechange = function() {
if (4 == v.readyState) {
if (v.status >= 200 && v.status < 300) {
var n = JSON.parse(v.responseText);
if (0 == n.status) {
if (!s && t) {
console.log("response.tapTrackId: " + n.tapTrackId);
console.log("response.tapProjectId: " + n.tapProjectId);
console.log("response.tapDeepCallbackUrl: " + n.tapDeepCallbackUrl);
cc.sys.localStorage.setItem("TapTrackId", n.tapTrackId || "");
cc.sys.localStorage.setItem("TapProjectId", n.tapProjectId || "");
cc.sys.localStorage.setItem("TapDeepCallbackUrl", n.tapDeepCallbackUrl || "");
cc.sys.localStorage.setItem("__LoginParams", n.loginparams || "");
cc.sys.localStorage.setItem("__hasActive", "1");
}
window.GameLogic.userVars = n.vars;
window.GameLogic.loginParams = n.loginparams || "";
e(!0, "");
} else {
var o = n.lang2Messages;
console.log(o);
for (var i = window.GameLogic.getLocale(), r = 0; r < o.length; ++r) if (o[r].lang == i) {
e(!1, o[r].message);
return;
}
var a = window.GameLogic.confirmLoginFailed().confirMessage;
e(!1, a);
}
}
console.log("checkServerAvailable request error status: ", v.status);
}
};
v.onload = function() {};
v.ontimeout = function() {
var t = window.GameLogic.confirmLoginFailed().noNetwork;
e(!1, t);
};
v.onerror = function() {
var t = window.GameLogic.confirmLoginFailed().noNetwork;
e(!1, t);
};
v.send();
},
showResetResDialog: function() {
if (cc.sys.os == cc.sys.OS_ANDROID) {
var e = function() {
jsb.reflection.callStaticMethod("com/openew/game/utils/NativeCall", "cleanRes", "()V");
setTimeout(function() {
cc.audioEngine.stopAll();
cc.game.restart();
}, 1e3);
};
cc.loader.loadRes("Prefabs/alertPanel", function(t, n) {
if (t) {
cc.log("载入预制资源失败, 原因:" + t);
e();
} else if (n instanceof cc.Prefab) {
var o = cc.instantiate(n);
o.x = 0;
o.y = 0;
cc.find("Canvas").addChild(o);
var i = o.getComponent("alertPanel");
i.setHint("确定");
i.setTitle("游戏资源加载失败，现进行清除缓存并重新启动？(如果资源加载依然失败，请先退出游戏，并且进行手动清除缓存操作)");
i.setCallback(e);
if (cc.sys.platform != cc.sys.WECHAT_GAME) {
o.scale = 0;
var r = cc.scaleTo(.4, .5).easing(cc.easeBackOut());
o.runAction(r);
}
} else {
cc.log("你载入的不是预制资源!");
e();
}
});
}
},
showServerUnavailbleAlertPanel: function(e, t, n) {
cc.loader.loadRes("Prefabs/alertPanel", function(o, i) {
if (o) {
cc.log("载入预制资源失败, 原因:" + o);
n(!0);
} else if (i instanceof cc.Prefab) {
var r = cc.instantiate(i);
r.x = 0;
r.y = 0;
cc.find("Canvas").addChild(r);
var a = r.getComponent("alertPanel"), s = window.GameLogic.confirmLoginFailed().tip;
a.setHint(e);
a.setTitle(t);
a.setCallback(n);
a.setTip(s);
if (cc.sys.platform != cc.sys.WECHAT_GAME) {
r.scale = 0;
var c = cc.scaleTo(.4, .5).easing(cc.easeBackOut());
r.runAction(c);
}
} else {
cc.log("你载入的不是预制资源!");
n(!0);
}
});
},
wxLoadSubpackage: function(t) {
this.updateLoadingProgress(0, "载入中");
var n = this;
(function(t, o) {
if (wx.loadSubpackage) wx.loadSubpackage({
name: t,
success: function(e) {
o && o();
},
fail: function(e) {
console.error(e);
}
}).onProgressUpdate(function(e) {
console.log("下载进度", t, e.progress);
console.log("已经下载的数据长度", t, e.totalBytesWritten);
console.log("预期需要下载的数据总长度", t, e.totalBytesExpectedToWrite);
n.updateLoadingProgress(e.progress / 100, "载入中");
}); else {
e("subpackages/" + t + "/game.js");
o && o();
}
})("GameLogic", function() {
n.updateLoadingProgress(0, "载入完成");
t();
});
},
checkSvrAndLoadGame: function() {
var e = this;
this.checkServerAvailable(function(t, n) {
console.log("检测服务器状态：", t, n);
try {
if (t) e.startGame(); else {
var o = window.GameLogic.confirmLoginFailed().confirTitle;
e.showServerUnavailbleAlertPanel(o, n, function() {
cc.audioEngine.stopAll();
cc.game.restart();
});
}
} catch (e) {
console.log("checkSvrAndLoadGame js error!" + e);
window.GameLogic.showResetResDialog && window.GameLogic.showResetResDialog();
} finally {
console.log("checkSvrAndLoadGame js finish!");
}
}, !1);
},
startGame: function() {
console.log("startGame....");
this.updateLoadingProgress(0);
if ((!cc.sys.isNative || cc.sys.platform == cc.sys.OPPO_GAME || cc.sys.platform == cc.sys.HUAWEI_GAME || cc.sys.platform == cc.sys.VIVO_GAME) && cc.sys.platform == cc.sys.WECHAT_GAME) {
cc.macro.ENABLE_CULLING = !1;
cc.game.once(cc.game.EVENT_RENDERER_INITED, function() {
var e = cc.Texture2D.prototype.handleLoadedTexture;
cc.Texture2D.prototype.handleLoadedTexture = function(t) {
e.call(this, t);
this._image.src = "";
};
});
}
window.GameLogic.entry();
},
shouldLoadSubPackage: function() {
return cc.sys.platform == cc.sys.WECHAT_GAME && !(window.GameLogic && window.GameLogic.isTTGame && window.GameLogic.isTTGame());
},
uploadLaunchOptions: function() {},
fillLogo: function(e) {
var t = this, n = e;
n || (n = window.GameLogic.getLocale());
var o = window.GameLogic.getChannel();
if ("td_openew_aborad" == o) {
var i = "logo/logo_openew_en";
"hk" == n && (n = "tw");
"tw" != n && "kr" != n || (i = "logo/logo_openew_" + n);
cc.loader.loadRes(i, cc.SpriteFrame, function(e, n) {
if (e) console.error(e); else {
t.logoName.spriteFrame = n;
t.logoName.node.opacity = 255;
console.log(n);
}
});
} else if ("td_openew_jp" == o) {
i = "logo/logo_openew_jp";
cc.loader.loadRes(i, cc.SpriteFrame, function(e, n) {
if (e) console.error(e); else {
t.logoName.spriteFrame = n;
t.logoName.node.opacity = 255;
console.log(n);
}
});
} else if ("td_openew_dameng" == o) {
var r = this, a = window.GameLogic.getExtraGameId();
if ("openew" == a || "mofa" == a) {
i = "logo/logo_" + a;
cc.loader.loadRes(i, cc.SpriteFrame, function(e, t) {
if (e) console.error(e); else {
r.logoName.spriteFrame = t;
r.logoName.node.opacity = 255;
console.log(t);
}
});
} else r.logoName.node.opacity = 255;
} else if ("td_openew_tianjing" == o) {
r = this, i = "logo/logo_tianjing_xiaoxiao";
var s = window.GameLogic.getGameId();
console.log("gameId: " + s);
if (s) if ("20085" == s || "20094" == s || "20097" == s || "20100" == s || "20112" == s || "20115" == s || "20142" == s) {
i = "logo/logo_tianjing_xiaoxiao";
r.bgSprite.node.opacity = 255;
} else if ("20088" == s || "20091" == s || "20109" == s) {
i = "logo/logo_tianjing_shilaimu";
r.bgSprite.node.opacity = 255;
} else if ("20118" == s || "20124" == s || "20130" == s || "20136" == s) {
i = "logo/logo_tianjing_zhijian";
r.bgSprite.node.opacity = 255;
} else if ("20121" == s || "20127" == s || "20133" == s || "20139" == s) {
i = "logo/logo_tianjing_baowei";
r.bgSprite.node.opacity = 255;
} else if ("20175" == s) {
i = "logo/logo_tianjing_mofawudi";
cc.loader.loadRes("logo/loading_tianjing_mofawudi", cc.SpriteFrame, function(e, t) {
if (e) console.error(e); else {
r.bgSprite.spriteFrame = t;
r.bgSprite.node.opacity = 255;
console.log(t);
}
});
} else r.bgSprite.node.opacity = 255;
cc.loader.loadRes(i, cc.SpriteFrame, function(e, t) {
if (e) console.error(e); else {
r.logoName.spriteFrame = t;
r.logoName.node.opacity = 255;
console.log(t);
}
});
} else if ("td_openew_qianguo" == o) {
window.GameLogic.getApkVersion() > 200 && (this.logoName.node.opacity = 255);
} else if (("xgw_habby" == o || "debug" == o) && "cn" != n) {
i = "logo/logo_openew_" + n;
cc.loader.loadRes(i, cc.SpriteFrame, function(e, n) {
if (e) console.error(e); else {
t.logoName.spriteFrame = n;
t.logoName.node.opacity = 255;
console.log(n);
}
});
}
this.checkSvrAndLoadGame();
},
onLoad: function() {
this.uploadLaunchOptions();
cc.sys.HUAWEI_GAME || (cc.sys.HUAWEI_GAME = 110);
cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && (cc.sys.mainLoopUpdate = jsb.mainLoopUpdate);
this.updateLoadingProgress(0);
this.adjustBg();
cc.sys.os == cc.sys.OS_ANDROID ? setTimeout(function() {
var e = JSON.stringify({
msg: "onShowLoading",
args: {}
});
cc.native.callNative(e);
}, 2e3) : setTimeout(function() {
var e = JSON.stringify({
msg: "onShowLoading",
args: {}
});
cc.native.callNative(e);
}, 1);
window.GameLogic || (window.GameLogic = {});
window.GameLogic.updateLoadingProgress = this.updateLoadingProgress.bind(this);
window.GameLogic.updateLoadingHint = this.updateLoadingHint.bind(this);
window.GameLogic.destroyLoading = this.destroyLoading.bind(this);
window.GameLogic.checkServerAvailable = this.checkServerAvailable.bind(this);
window.GameLogic.showResetResDialog = this.showResetResDialog.bind(this);
window.GameLogic.HabbyID = HabbyID;
window.GameLogic.HabbyStore = HabbyStore;
if (this.shouldLoadSubPackage()) {
var e = this;
this.wxLoadSubpackage(function() {
window.GameLogic.prepareUpdate(e.fillLogo.bind(e));
});
} else window.GameLogic.prepareUpdate(this.fillLogo.bind(this));
},
start: function() {
window.GameLogic && window.GameLogic.start && window.GameLogic.start();
},
update: function(e) {
window.GameLogic && window.GameLogic.update && window.GameLogic.update(e);
},
onDestroy: function() {
window.GameLogic && window.GameLogic.destroy && window.GameLogic.destroy();
},
adjustBg: function() {
var e = cc.view.getCanvasSize();
e.width /= cc.view.getScaleX();
e.height /= cc.view.getScaleY();
var t = this.bgSprite.node.width, n = this.bgSprite.node.height, o = e.width / t, i = e.height / n, r = o > i ? o : i;
this.bgSprite.node.scaleX = r;
this.bgSprite.node.scaleY = r;
console.log(this.bgSprite, e, o, i);
var a = e.width / this.bgChar.node.width;
this.bgChar.node.scaleX = a;
this.bgChar.node.scaleY = a;
var s = cc.view.getFrameSize();
if (s.width / s.height > .6 && this.logoName && this.logoName.node) {
this.logoName.node.scaleX *= .65;
this.logoName.node.scaleY *= .65;
}
},
updateLoadingProgress: function(e, t) {
if (void 0 != e) if (e >= 1 || e <= 0) {
this.progressBar.progress = 0;
this.progressBar.node.opacity = 0;
this.progressText.string = t || "";
} else {
this.progressBar.progress = e;
this.progressBar.node.opacity = 255;
this.progressText.string = t || Math.floor(100 * e) + "%";
}
},
updateLoadingHint: function(e) {
this.progressText.string = e;
},
destroyLoading: function() {
var e = cc.find("Canvas");
if (this.progressBar) {
this.progressBar.destroy();
this.progressBar = null;
}
if (this.progressText) {
this.progressText.destroy();
this.progressText = null;
}
if (this.bgSprite) {
this.bgSprite.destroy();
this.bgSprite = null;
}
if (this.logText) {
this.logText.destroy();
this.logText = null;
}
if (this.logoName) {
this.logoName.destroy();
this.logoName = null;
}
if (this.bgChar) {
this.bgChar.destroy();
this.bgChar = null;
}
if (this.spineNode) {
this.spineNode.destroy();
this.spineNode = null;
}
if (this.bgMask) {
this.bgMask.destroy();
this.bgMask = null;
}
console.log("destroy loading " + e.children.length);
}
});
cc._RF.pop();
}, {} ],
MyLog: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7882fCVVAVC2b5+8qt2ndzs", "MyLog");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Node,
view: cc.Node
},
onLoad: function() {
console.log("查看执行顺序mylog");
window.GameLogic.addText = this.AddLog.bind(this);
},
start: function() {
cc.systemEvent.on("keydown", this.onKeyDown, this);
},
onKeyDown: function(e) {
e.keyCode == cc.macro.KEY.j && window.GameLogic.addText("----");
},
AddLog: function(e) {
if (this.label) try {
var t = cc.instantiate(this.label);
t.getComponent(cc.Label).string = e;
t.active = !0;
this.view.addChild(t);
t.setSiblingIndex(0);
this.view.setContentSize(this.view.width, t.height * this.view.childrenCount);
} catch (e) {
console.error(e);
} else console.log("没绑自己啊");
},
update: function(e) {}
});
cc._RF.pop();
}, {} ],
alertPanel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f4046kZcFdIYb/TcQLNq/1M", "alertPanel");
cc.Class({
extends: cc.Component,
properties: {
hint: cc.Label,
title: cc.Label,
tip: cc.Label,
confirmBtn: cc.Button,
_callback: Function
},
onConfirm: function() {
if (this._callback) {
this._callback();
this._callback = null;
}
this.node.parent.removeChild(this.node);
},
setHint: function(e) {
this.hint.string = e;
},
setTitle: function(e) {
this.title.string = e;
},
setCallback: function(e) {
this._callback = e;
},
setTip: function(e) {
this.tip.string = e;
}
});
cc._RF.pop();
}, {} ],
"dm_tt_mg.min": [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8912aWl8D5CDLM1KkpMK+zH", "dm_tt_mg.min");
var o = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var o = t[n];
o.enumerable = o.enumerable || !1;
o.configurable = !0;
"value" in o && (o.writable = !0);
Object.defineProperty(e, o.key, o);
}
}
return function(t, n, o) {
n && e(t.prototype, n);
o && e(t, o);
return t;
};
}(), i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
function r(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
if (window.tt) {
!function(e, o) {
"object" == ("undefined" == typeof n ? "undefined" : i(n)) && "object" == ("undefined" == typeof t ? "undefined" : i(t)) ? t.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == ("undefined" == typeof n ? "undefined" : i(n)) ? n.DM_TT_MG = o() : e.DM_TT_MG = o();
}(window, function() {
return function() {
var e = {
d: function(t, n) {
for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
enumerable: !0,
get: n[o]
});
},
o: function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
},
r: function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}
}, t = {};
e.r(t), e.d(t, {
default: function() {
return f;
}
});
var n = {}, a = Array.prototype, s = Object.prototype.toString, c = Object.prototype.hasOwnProperty, u = a.forEach, l = Array.isArray, d = {};
n.each = function(e, t, n) {
if (null === e) return !1;
if (u && e.forEach == u) e.forEach(t, n); else if (e.length === +e.length) {
for (var o = 0; o < e.length; o++) if (o in e && t.call(n, e[o], o, e) === d) return !1;
} else for (var i in e) c.call(e, i) && t.call(n, e[i], i, e);
}, n.isArray = l || function(e) {
return "[object Array]" === s.call(e);
}, n.isPromise = function(e) {
return "[object Promise]" === s.call(e) && null !== e;
}, n.isObject = function(e) {
return "[object Object]" === s.call(e) && null !== e;
}, n.isEmptyObject = function(e) {
if (!n.isObject(e)) return !1;
for (var t in e) if (c.call(e, t)) return !1;
}, n.isUndefined = function(e) {
return void 0 === e;
}, n.isString = function(e) {
return "[object String]" === s.call(e);
}, n.isDate = function(e) {
return "[object Date]" === s.call(e);
}, n.isBoolean = function(e) {
return "[object Boolean]" === s.call(e);
}, n.isNumber = function(e) {
return "[object Number]" === s.call(e) && /[\d\.]+/.test(String(e));
}, n.isJSONString = function(e) {
try {
JSON.parse(e);
} catch (e) {
return !1;
}
return !0;
}, n.decodeURIComponent = function(e) {
var t = "";
try {
t = decodeURIComponent(e);
} catch (n) {
t = e;
}
return t;
}, n.encodeDates = function(e) {
return n.each(e, function(t, o) {
n.isDate(t) ? e[o] = n.formatDate(t) : n.isObject(t) && (e[o] = n.encodeDates(t));
}), e;
}, n.formatDate = function(e) {
function t(e) {
return e < 10 ? "0" + e : e;
}
return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + ((n = e.getMilliseconds()) < 100 && n > 9 ? "0" + n : n < 10 ? "00" + n : n);
var n;
}, n.searchObjDate = function(e) {
try {
(n.isObject(e) || n.isArray(e)) && n.each(e, function(t, o) {
n.isObject(t) || n.isArray(t) ? n.searchObjDate(e[o]) : n.isDate(t) && (e[o] = n.formatDate(t));
});
} catch (e) {
p.warn(e);
}
}, n.UUID = function() {
var e = new Date().getTime();
return String(Math.random()).replace(".", "").slice(1, 11) + "-" + e;
}, n.UUIDv4 = function() {
return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
var t = 16 * Math.random() | 0;
return ("x" == e ? t : 3 & t | 8).toString(16);
});
}, n.getMpPlatform = function() {
return n.mpPlatform;
};
var p = "object" == ("undefined" == typeof p ? "undefined" : i(p)) ? p : {};
function g(e) {
return new Promise(function(t, n) {
tt.request({
url: e.url,
method: e.method || "GET",
data: e.data,
success: function(e) {
t(e);
},
fail: function(e) {
n(e);
}
});
});
}
p.info = function() {
if ("object" == ("undefined" == typeof console ? "undefined" : i(console)) && console.log && p.enabled) try {
return console.log.apply(console, arguments);
} catch (e) {
console.log(arguments[0]);
}
}, p.warn = function() {
if ("object" == ("undefined" == typeof console ? "undefined" : i(console)) && console.log && p.enabled) try {
return console.warn.apply(console, arguments);
} catch (e) {
console.warn(arguments[0]);
}
}, function() {
if (!tt.getStorageSync("uuid")) {
var e = n.UUIDv4();
tt.setStorageSync("uuid", e);
}
}();
var f = function() {
function e(t, n, o) {
r(this, e);
this.appid = t, this.base_url = n, this.coin_rate = o, this.uin = "", this.open_id = "", 
this.tt_appid = "", this.token = "";
}
o(e, [ {
key: "init",
value: function() {
this.checkUpdate();
}
}, {
key: "checkUpdate",
value: function() {
var e = tt.getUpdateManager();
e.onUpdateReady(function(t) {
tt.showModal({
title: "更新提示",
content: "新版本已经准备好，是否重启小程序？",
success: function(t) {
t.confirm && e.applyUpdate();
}
});
}), e.onUpdateFailed(function(e) {
tt.showToast({
title: "新版本下载失败，请稍后再试",
icon: "none"
});
});
}
}, {
key: "login",
value: function() {
var e = this, t = tt.getStorageSync("uuid");
return new Promise(function(n, o) {
tt.login({
success: function(i) {
e.getServiceInfo(e.appid, i.code, t).then(function(t) {
e.open_id = t.data.open_id || "", e.uin = t.data.uin || "", e.tt_appid = t.data.tt_appid || "", 
e.token = t.data.token || "", n(t.data);
}).catch(function(e) {
o(e);
});
}
});
});
}
}, {
key: "pay",
value: function(e, t, n, o) {
var i = this, r = n * i.coin_rate, a = tt.getSystemInfoSync();
console.log(a), this.createOrder(e, i.appid, i.uin, t, n, o).then(function(e) {
0 == e.data.ret ? "android" == a.platform ? tt.requestGamePayment({
mode: "game",
env: 0,
currencyType: "CNY",
platform: "android",
buyQuantity: r,
zoneId: "1",
customId: e.data.orderid,
extraInfo: i.appid,
success: function(e) {
console.log("支付成功", e);
},
fail: function(e) {
console.log("支付失败", e);
}
}) : (a.platform, tt.openAwemeCustomerService({
currencyType: "CNY",
buyQuantity: r,
zoneId: "1",
customId: e.data.orderid,
success: function(e) {
console.log("支付成功", e);
},
fail: function(e) {
console.log("支付失败", e);
}
})) : tt.showToast({
title: e.info,
icon: "none"
});
});
}
}, {
key: "getServiceInfo",
value: function(e, t, n) {
return g({
url: this.base_url + "/login/login_dymg.php",
method: "GET",
data: {
appid: e || "",
code: t || "",
uuid: n || ""
}
});
}
}, {
key: "createOrder",
value: function(e, t, n, o, i, r) {
return g({
url: this.base_url + "/charge/create_sdk_order.php",
method: "GET",
data: {
productid: e,
appid: t,
uin: n,
app_order_id: o,
price: i,
product_name: r,
from: "dy"
}
});
}
} ]);
return e;
}();
return t;
}();
});
var a = e("dm_tt_mg.min");
window.DM_TTSDK = a;
}
cc._RF.pop();
}, {
"dm_tt_mg.min": "dm_tt_mg.min"
} ],
"dm_wxmg.min": [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7fa25nRXhBKo6xBZyW2E+8C", "dm_wxmg.min");
var o = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var o = t[n];
o.enumerable = o.enumerable || !1;
o.configurable = !0;
"value" in o && (o.writable = !0);
Object.defineProperty(e, o.key, o);
}
}
return function(t, n, o) {
n && e(t.prototype, n);
o && e(t, o);
return t;
};
}(), i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
function r(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
!function(e, o) {
"object" == ("undefined" == typeof n ? "undefined" : i(n)) && "object" == ("undefined" == typeof t ? "undefined" : i(t)) ? t.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == ("undefined" == typeof n ? "undefined" : i(n)) ? n.DM_WXMG = o() : e.DM_WXMG = o();
}(window, function() {
return function() {
var e = {
d: function(t, n) {
for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
enumerable: !0,
get: n[o]
});
},
o: function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
},
r: function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}
}, t = {};
e.r(t), e.d(t, {
default: function() {
return a;
}
});
var n = "https://h5apiv2.hnlyplay.cn", i = new (function() {
function e() {
r(this, e);
}
o(e, [ {
key: "getStorage",
value: function(e) {
return wx.getStorageSync(e);
}
}, {
key: "setStorage",
value: function(e, t) {
wx.setStorage({
key: e,
data: t
});
}
}, {
key: "setStorageSync",
value: function(e, t) {
wx.setStorageSync(e, t);
}
}, {
key: "getLaunchOptionsSync",
value: function() {
return wx.getLaunchOptionsSync();
}
}, {
key: "request",
value: function(e) {
return new Promise(function(t, n) {
wx.request({
url: e.url,
data: e.data,
method: e.method,
success: function(e) {
200 == e.statusCode ? t(e) : n(e.data);
}
});
});
}
}, {
key: "login",
value: function(e) {
return wx.login(e);
}
}, {
key: "pay",
value: function(e) {
return wx.requestPayment(e);
}
}, {
key: "requestPayment",
value: function(e) {
return wx.requestPayment(e);
}
}, {
key: "showToast",
value: function(e) {
return wx.showToast(e);
}
}, {
key: "showModal",
value: function(e) {
return wx.showModal(e);
}
}, {
key: "navigateToMiniProgram",
value: function(e) {
return wx.navigateToMiniProgram(e);
}
}, {
key: "getSystemInfoSync",
value: function(e) {
return wx.getSystemInfoSync(e);
}
}, {
key: "getUpdateManager",
value: function() {
return wx.getUpdateManager();
}
}, {
key: "canIUse",
value: function(e) {
return wx.canIUse(e);
}
}, {
key: "requestMidasPayment",
value: function(e) {
return wx.requestMidasPayment(e);
}
}, {
key: "openCustomerServiceConversation",
value: function(e) {
return wx.openCustomerServiceConversation(e);
}
}, {
key: "onTouchEnd",
value: function(e) {
return wx.onTouchEnd(e);
}
}, {
key: "showLoading",
value: function(e) {
return wx.showLoading(e);
}
}, {
key: "hideLoading",
value: function() {
return wx.hideLoading();
}
} ]);
return e;
}())(), a = function() {
function e(t) {
r(this, e);
this.appid = t, this.uin = "", this.open_id = "", this.wx_appid = "", this.token = "";
}
o(e, [ {
key: "init",
value: function() {
if (this.getUpdate(), !i.getStorage("isFromAd")) {
var e = i.getLaunchOptionsSync();
"{}" === JSON.stringify(e.query) ? i.setStorageSync("isFromAd", 0) : i.setStorageSync("isFromAd", 1);
}
}
}, {
key: "login",
value: function() {
var e = this, t = i.getStorage("uuid") || "", n = i.getLaunchOptionsSync();
return new Promise(function(o, r) {
i.login({
success: function(a) {
e.getServiceInfo(e.appid, a.code, t).then(function(t) {
e.open_id = t.data.open_id || "", e.uin = t.data.uin || "", e.wx_appid = t.data.wx_appid || "", 
e.token = t.data.token || "", 1 == t.data.is_skip_game && 1 == i.getStorage("isFromAd") ? t.data.isFromAd = 1 : t.data.isFromAd = 0, 
t.data.extraData = JSON.stringify(n.query);
for (var r = Object.keys(t.data), a = 0; a < r.length; a++) t.data[r[a]] = t.data[r[a]] + "";
console.log("------sdk-----", t.data), o(JSON.stringify(t.data));
}).catch(function(e) {
r(e);
});
}
});
});
}
}, {
key: "pay",
value: function(e, t, o, r, a, s, c, u) {
var l = this, d = i.getSystemInfoSync();
this.getPayWay(e, t, a, d.platform).then(function(e) {
if (0 == e.data.ret) {
var t = e.data.wx_appid;
e.data.offer_id ? l.chargeCallback(1, 1, l.uin, a, s, o, l.appid).then(function(t) {
0 == t.data.ret && (t.data.info >= a ? l.chargeCallback(1, 2, l.uin, a, s, o, l.appid) : "windows" == d.platform || "devtools" == d.platform ? i.requestMidasPayment({
mode: "game",
env: e.data.mds_env,
offerId: e.data.offer_id,
currencyType: "CNY",
platform: "windows",
buyQuantity: a,
zoneId: 1,
success: function(e) {
l.chargeCallback(1, 2, l.uin, a, s, o, l.appid);
},
fail: function(e) {
console.log(e);
},
complete: function(e) {
console.log(e);
}
}) : i.requestMidasPayment({
mode: "game",
env: e.data.mds_env,
offerId: e.data.offer_id,
currencyType: "CNY",
platform: "android",
buyQuantity: a,
zoneId: 1,
success: function(e) {
l.chargeCallback(1, 2, l.uin, a, s, o, l.appid);
},
fail: function(e) {
console.log(e);
},
complete: function(e) {
console.log(e);
}
}));
}) : e.data.wx_appid ? i.navigateToMiniProgram({
appId: t,
path: "pages/pay/pay?platformId=" + o + "&appid=" + l.appid + "&uin=" + l.uin + "&orderId=" + s + "&price=" + Number(a) + "&goodName=" + r + "&roleName=" + c + "&serverName=" + u + "&wx_appid=" + t,
envVersion: "release",
success: function(e) {
console.log("成功跳转到小程序：", e);
},
fail: function(e) {
console.log(e);
}
}) : i.request({
url: n + "/charge/create_sdk_order.php",
method: "GET",
data: {
productid: o,
appid: l.appid,
uin: l.uin,
app_order_id: s,
price: a,
product_name: r
}
}).then(function(t) {
i.openCustomerServiceConversation({
showMessageCard: !0,
sendMessageTitle: e.data.card_title || "点我充值",
sendMessageImg: e.data.image_card_url || n + "/help/images/wxkf_charge_tip.png",
sendMessagePath: "index.html?platformId=${good_id}&appid=${that.appid}&uin=${that.uin}&orderId=${order_id}&price=${Number(price)}&goodName=${good_name}&roleName=${role_name}&serverName=${server_name}&wx_appid=${wx_appid}",
success: function(e) {
console.log(e);
},
fail: function(e) {
console.log(e);
}
});
});
} else i.showToast({
icon: "none",
title: "暂不支持支付！"
});
});
}
}, {
key: "getServiceInfo",
value: function(e, t, o) {
return i.request({
url: n + "/login/login_wxmg.php",
method: "GET",
data: {
appid: e || "",
js_code: t || "",
uuid: o || ""
}
});
}
}, {
key: "getPayWay",
value: function(e, t, o, r) {
return i.request({
url: n + "/charge/check_can_yap_type.php",
method: "GET",
data: {
appid: this.appid || "",
uin: this.uin || "",
channel: e || "",
worldid: t || "",
price: o || 0,
os: r
}
});
}
}, {
key: "rechargeInMg",
value: function(e) {
return i.requestMidasPayment(e);
}
}, {
key: "getUpdate",
value: function() {
var e = this, t = i.getUpdateManager();
t.onCheckForUpdate(function(n) {
n.hasUpdate && t.onUpdateReady(function() {
i.showModal({
title: "更新提示",
content: "新版本已经准备好，是否重启应用？",
success: function(n) {
n.confirm ? e.downLoadAndUpdate(t) : n.cancel && i.showModal({
title: "温馨提示~",
content: "本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~",
showCancel: !1,
confirmText: "确定更新",
success: function(n) {
n.confirm && e.downLoadAndUpdate(t);
}
});
}
});
});
});
}
}, {
key: "chargeCallback",
value: function(e, t, o, r, a, s, c) {
return new Promise(function(u, l) {
i.login({
success: function(d) {
i.request({
url: n + "/charge/mds/wx_mds_charge.php",
method: "get",
data: {
zone_id: e,
req_type: t,
uin: o,
price: r,
app_order_id: a,
product_id: s,
appid: c,
js_code: d.code
}
}).then(function(e) {
u(e);
}).catch(function(e) {
l(e);
});
}
});
});
}
}, {
key: "sendCode",
value: function(e) {
i.request({
url: n + "/login/login_bind_mobile_send_sms.php?mobile=" + e + "&appid=" + this.appid,
method: "get"
}).then(function(e) {
0 == e.data.ret ? i.showToast({
icon: "none",
title: "验证码发送成功!"
}) : i.showToast({
icon: "none",
title: e.data.info
});
});
}
}, {
key: "bindPhone",
value: function(e, t, o, r, a, s) {
var c = this;
return new Promise(function(u, l) {
i.request({
url: n + "/login/login_bind_mobile_h5.php?mobile=" + e + "&verify_code=" + t + "&vfy_token=" + encodeURIComponent(c.token) + "&worldid=" + o + "&roleid=" + r + "&notify_url=" + a + "&game_uin=" + s + "&appid=" + c.appid
}).then(function(e) {
u(JSON.stringify(e.data));
}).catch(function(e) {
l(e);
});
});
}
} ]);
return e;
}();
return t;
}();
});
var a = e("dm_wxmg.min");
window.DM_WXSDK = a;
cc._RF.pop();
}, {
"dm_wxmg.min": "dm_wxmg.min"
} ],
"miniwx-cn-sesdk-es": [ function(e, t, n) {
(function(e) {
"use strict";
cc._RF.push(t, "a55bdvVK3BOtK+zNZlTafbQ", "miniwx-cn-sesdk-es");
var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
if (window.wx) {
var o = function() {
return (o = Object.assign ? Object.assign.bind() : function(e) {
for (var t = 1; t < arguments.length; t++) {
var n = arguments[t];
for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
}
return e;
}).apply(null, arguments);
}, i = function(e, t) {
return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
return e.__proto__ = t, e;
})(e, t);
}, r = function() {
var e = je.Storage.getItem(je.STORAGE_EVENT_QUEUE, !0, []);
e.forEach(function(e) {
e.status = "toSubmit";
}), je.Storage.setItem(je.STORAGE_EVENT_QUEUE, e), je.getStateData("debugModel") || null === this.Storage.getItem(je.STORAGE_IS_FIRST_DAY) && this.Storage.setItem(je.STORAGE_IS_FIRST_DAY, +new Date());
}, a = function(e) {
return {
"[object Boolean]": "boolean",
"[object Number]": "number",
"[object String]": "string",
"[object Function]": "function",
"[object Array]": "array",
"[object Date]": "date",
"[object RegExp]": "regExp",
"[object Undefined]": "undefined",
"[object Null]": "null",
"[object Object]": "object",
"[object Symbol]": "symbol",
"[object BigInt]": "bigInt",
"[object Promise]": "promise"
}[Object.prototype.toString.call(e)];
}, s = function(e) {
return "object" === a(e);
}, c = function(e, t, n) {
var o, i, r = t;
!isNaN(t) && Ne[t] && (r = "[CODE: " + t + "] " + Ne[t], n && (o = n, i = function(e, t) {
r = r.replace(new RegExp(t, "g"), e);
}, Object.keys(o).forEach(function(e) {
return i(o[e], e);
}))), e || (Re.$emit("assertMsg", r), console.warn("SolarEngineSDK " + r));
}, u = function e(t) {
if (void 0 !== t && "<undefined>" !== t) return Array.isArray(t) ? t.map(function(t) {
return e(t);
}).filter(function(e) {
return void 0 !== e;
}) : t && "object" == ("undefined" == typeof t ? "undefined" : n(t)) ? Object.keys(t).reduce(function(n, o) {
var i = e(t[o]);
return void 0 !== i && (n[o] = i), n;
}, {}) : t;
}, l = function(e, t, n) {
var o = 'SolarEngineSDK (The "' + e + '" method parameters passed by the developer):', i = u(t), r = u(n);
if (void 0 !== i || void 0 !== r) return void 0 !== r ? void 0 !== i ? void Me.log(o, i, ",", r) : void Me.log(o, r) : void Me.log(o, i);
Me.log(o);
}, d = function(e, t, n) {
je.getStateData("logEnabled") && l(e, t, n);
}, p = function(e) {
return !!s(e) || (c(!1, 440120), !1);
}, g = function() {
if ("object" == ("undefined" == typeof crypto ? "undefined" : n(crypto))) {
if ("function" == typeof crypto.randomUUID) return crypto.randomUUID();
if ("function" == typeof crypto.getRandomValues && "function" == typeof Uint8Array) return ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
var t = Number(e);
return (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16);
});
}
var e = new Date().getTime(), t = "undefined" != typeof performance && performance.now && 1e3 * performance.now() || 0;
return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
var o = 16 * Math.random();
return e > 0 ? (o = (e + o) % 16 | 0, e = Math.floor(e / 16)) : (o = (t + o) % 16 | 0, 
t = Math.floor(t / 16)), ("x" === n ? o : 3 & o | 8).toString(16);
});
}, f = function(e) {
return null == e ? void 0 : e.replace(/^\s+|\s+$/g, "");
}, m = function(e, t) {
void 0 === e && (e = new Date()), void 0 === t && (t = "YYYYMMDD");
var n = {
"M+": (e = new Date(e)).getMonth() + 1,
"D+": e.getDate(),
"H+": e.getHours(),
"m+": e.getMinutes(),
"s+": e.getSeconds(),
"q+": Math.floor((e.getMonth() + 3) / 3),
S: e.getMilliseconds()
}, o = /(Y+)/;
if (o.test(t)) {
var i = o.exec(t)[1];
t = t.replace(i, (e.getFullYear() + "").substring(4 - i.length));
}
for (var r in n) {
var a = new RegExp("(" + r + ")");
if (a.test(t)) {
var s = a.exec(t)[1];
t = t.replace(s, 1 == s.length ? n[r] : ("00" + n[r]).substring(("" + n[r]).length));
}
}
return t;
}, _ = function(e) {
if (p(e)) {
var t = "boolean" == typeof e.delete && e.delete;
delete e.delete, Object.keys(e).forEach(function(n) {
var o = ot, i = n.split(".");
i.length > 1 ? i.forEach(function(r, a) {
a < i.length - 1 ? o = o[r] : t && o.hasOwnProperty(r) ? delete o[r] : o[r] = e[n];
}) : t && o.hasOwnProperty(n) ? delete ot[n] : ot[n] = e[n];
});
}
}, v = function(e) {
if (e) {
if (e.indexOf(".") < 0) return ot[e];
var t = ot, n = e.split("."), o = null;
return n.forEach(function(e, i) {
i < n.length - 1 ? t = t[e] : o = t[e];
}), o;
}
}, y = function(e, t, n) {
void 0 === n && (n = !1);
var o = n ? t >= 0 : t > 0;
"number" === a(t) && o && (it[e] = t);
}, h = function() {
it.isSass && nt.post("//" + tt.settingHost + "/rule/config/global/info", {
_appKey: v("reportData._appkey"),
_distinct_id: v("reportData._distinct_id")
}, {
timeout: 1e3 * it.settingTimeout
}).then(function(e) {
if (0 === (null == e ? void 0 : e.code)) {
var t = (null == e ? void 0 : e.data) || {}, n = t.receiverSDKLogDomain, o = t.settingPolingMinRange, i = t.settingPolingMaxRange, r = t.settingInterval, s = t.receiverDomain, c = t.ruleDomain, u = t.rulePolingMinRange, l = t.rulePolingMaxRange, d = t.ruleInterval;
rt.filter(function(e) {
return !e.condition;
}).forEach(function(e) {
return y(e.key, t[e.key], e.zero);
}), n && (it.receiverSDKLogDomain = b(n)), "number" === a(o) && "number" === a(i) && o < i && (o > 0 && (it.settingPolingMinRange = o), 
i > 0 && (it.settingPolingMaxRange = i)), "number" === a(r) && (r < it.settingPolingMinRange ? r = it.settingPolingMinRange : r > it.settingPolingMaxRange && (r = it.settingPolingMaxRange), 
it.settingInterval = r), s && (it.receiverDomain = b(s)), c && (it.ruleDomain = b(c)), 
"number" === a(u) && "number" === a(l) && u < l && (u > 0 && (it.rulePolingMinRange = u), 
l > 0 && (it.rulePolingMaxRange = l)), "number" === a(d) && (d < it.rulePolingMinRange ? d = it.rulePolingMinRange : d > it.rulePolingMaxRange && (d = it.rulePolingMaxRange), 
it.ruleInterval = d), p = rt.reduce(function(e, t) {
return e[t.skey] = it[t.key], e;
}, {}), je.Storage.setItem(Qe, Object.assign({
rcdm: it.receiverDomain,
rdm: it.ruleDomain,
oidm: it.openIdDomain
}, p));
}
var p;
S();
}).catch(function() {
S();
});
}, S = function() {
clearTimeout(it.intervalTimer), it.intervalTimer = setTimeout(function() {
return h();
}, 1e3 * it.settingInterval);
}, b = function(e) {
return e.replace(/^\s+|\s+$/g, "").replace(/^(http:\/\/|https:\/\/)/g, "").replace(/\/+$/g, "");
}, k = function(e) {
if (void 0 === e && (e = !1), !e && it.receiverApi) return it.receiverApi;
var t = "//" + (e ? it.receiverSDKLogDomain : it.receiverDomain) + "/datareceiver/receive", n = je.isKS ? t + "/v3/debugObjApi" : t + "/v1/debugApi", o = je.isKS ? t + "/v3/objApi" : t + "/v1/api";
return v("debugModel") && !e ? n : o;
}, w = function(e) {
v("isInMultilinkTest") ? Re.$on("multilinkTestResponse", function() {
"function" == typeof e && e();
}) : "function" == typeof e && e();
}, D = function(e, t) {
return ct(e, t);
}, I = function(e, t) {
return t.sort().filter(function(t) {
return e[t] || 0 === e[t];
}).map(function(t) {
return t + "=" + e[t];
}).join("&");
}, T = function(e) {
return D(I(e, [ "_appkey", "_account_id", "_distinct_id", "_event_id", "_event_name", "_session_id", "_tenant_id", "_ts", "_visitor_id" ]), ut);
}, x = function(e) {
return e.reduce(function(e, t) {
return e[t[0]] = {
keyName: t[1],
type: t[2],
isRequired: t[3]
}, e;
}, {});
}, P = function(e, t) {
var n = Object.create(null);
"object" === a(t.customProperties) && (n = t.customProperties);
var o = {};
return e.forEach(function(e) {
o[gt[e].keyName] = t[e];
}), {
properties: o,
customProperties: n
};
}, A = function(e) {
var t = qe.getCurDate() + "_" + e;
je.Storage.setItem(Be, t);
}, E = function(e) {
try {
e = [ "number", "boolean", "undefined", "null", "symbol", "bigInt", "function", "date", "regExp" ].includes(a(e)) ? String(e) : [ "object", "array" ].includes(a(e)) ? JSON.stringify(e) : String(e);
} catch (t) {
e = String(e);
}
return e;
}, L = function(e, t) {
var n = 1024e3;
return "number" === a(t) && (n = t), E(e).length >= n;
}, C = function e(t, n) {
if (L(t, 1024e3)) {
var o, i = t.pop();
et().includes(i.eventName) && 1 === (null == (o = i.params) || null == (o = o[0]) ? void 0 : o._event_type) ? t.splice(1, 0, i) : n.push(i), 
e(t, n);
}
return t;
}, O = function(e) {
var t, n, o, i = (n = null == (t = je.Storage.getItem(Be)) ? void 0 : t.split("_")[0], 
o = qe.getCurDate(), null === t || +n != +o ? 0 : Number(t.split("_")[1]) + 1);
return e[0].properties._log_count = i, i;
}, j = function(e, t, n, o) {
if (void 0 === t && (t = !1), void 0 === n && (n = 0), void 0 === o && (o = !1), 
t || !et().includes(e) || 1 !== n || !o) {
var i = "" + He + e;
je.Storage.setItem(i, e);
}
}, R = function(e, t, n) {
var o, i;
void 0 === e && (e = ""), void 0 === n && (n = !0), n && (i = O(t));
var r = {
eventName: e,
params: t,
status: "toSubmit"
}, a = je.Storage.getItem(We, !0, []);
a.unshift(r);
var s = [];
C(a, s), s.length && je.trackLogEvent({
state: 2,
message: "Events deleted when local storage is low",
event_name: s.map(function(e) {
return e.eventName;
}).join(","),
log_count: s.map(function(e) {
var t;
return null == (t = e.params) || null == (t = t[0]) || null == (t = t.properties) ? void 0 : t._log_count;
}).join(",")
});
var c = !1;
je.Storage.setItem(We, a, function() {
c = !0;
});
var u, l = null == (o = t[0]) ? void 0 : o._event_type;
return et().includes(e) && 1 === l && (je.Storage.setItem(Ye, 1), je.trackLogEvent({
state: c ? 201 : 101,
is_success: !c,
message: e + " store local",
event_name: e,
log_count: null == (u = t[0]) ? void 0 : u.properties._log_count
})), e && j(e, !1, l, c), n && A(i), c;
}, N = function(e) {
var t = Number(Ge()), n = Ze[t];
return v("isInApp") ? e : e.replace(/^_app/, n);
}, M = function(e) {
if (void 0 === e && (e = {}), it.isSass && v("isSendSDKLog") && (!v("debugModel") || [ 202, 6, 101, 201 ].includes(e.state))) {
je.isXcxEnv() && (e.env_version = null == je.getEnvVersion ? void 0 : je.getEnvVersion());
var t = v("reportData"), n = [ o({}, t, {
_ts: Date.now(),
_event_id: g(),
_appkey: tt.receiverSDKLogAppkey,
_tenant_id: tt.receiverSDKLogTenantId,
_type: "event",
_event_name: "sesdk_recordLog",
_event_type: -1,
properties: o({}, t.properties),
custom_properties: o({
user_appkey: t._appkey,
user_tenantId: t._tenant_id,
user_debugModel: v("debugModel"),
user_domain: it.receiverDomain,
isInApp: v("isInApp"),
installInsert: "1" === je.Storage.getItem(Ye),
installSend: "1" === je.Storage.getItem(Xe)
}, e)
}) ];
n[0].properties._si = T(n[0]);
var i = je.Storage.getItem($e, !0, []);
i.length && (n = n.concat(i), je.Storage.deleteItem($e)), G(n);
}
}, G = function(e, t) {
void 0 === t && (t = it.receivertRetryTimes);
var n = je.isKS ? {
list: e
} : e;
nt.post(k(!0), n, {
timeout: 1e3 * it.receiverTimeout
}).then(function(n) {
void 0 === n.status && U(e, t);
}).catch(function(n) {
U(e, t);
});
}, U = function(e, t) {
t > 0 ? G(e, --t) : (e.length > 99 && (e = e.slice(0, 99)), je.Storage.setItem($e, e, null, !0));
}, V = function(e, t) {
void 0 === t && (t = !1);
var n = je.Storage.getItem(Je, !0, {}), o = qe.getCurDate(), i = Object.keys(n).filter(function(e) {
return e !== o;
});
i.length && i.forEach(function(e) {
M({
message: "non-same-day _log_count",
log_date: e,
log_count_list: n[e]
}), delete n[e];
}), Array.isArray(e) && (e = e.sort(function(e, t) {
return e - t;
}), n[o] || (n[o] = []), e.length && n[o].push(e.length > 1 ? e.join(",") : e[0]), 
n[o].length && ((n[o].reduce(function(e, t) {
return e + String(t).split(",").length;
}, 0) >= 100 || t) && (M({
message: "same-day _log_count",
log_date: o,
log_count_list: n[o]
}), t || delete n[o]), je.Storage.setItem(Je, n)));
}, F = function() {
V(), q([ 6e4, 3e5, 18e5 ], 0);
}, q = function e(t, n) {
n > 2 || setTimeout(function() {
V([], !0), e(t, n + 1);
}, t[n]);
}, H = function(e) {
return "function" == typeof je.sanitizeReportParams && je.sanitizeReportParams(e) || e;
}, K = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, z = function(e) {
return v("isInApp") ? function(e) {
var t = [];
try {
return JSON.stringify(e, function(e, o) {
if ("bigint" == typeof o) return String(o);
if (o && "object" == ("undefined" == typeof o ? "undefined" : n(o))) {
if (t.indexOf(o) > -1) return "[Circular]";
t.push(o);
}
return o;
});
} catch (t) {
return String(e);
}
}(e) : e;
}, B = function(e, t, n, i) {
void 0 === n && (n = {}), void 0 === i && (i = {}), je.NATIVE.ready(function() {
try {
d("trackEvent called , waitToDealSend . ");
var r = N(e);
!function(e, t, n) {
if (v("debugModel")) return _({
"reportData.properties._is_first_day": !0,
"reportData.properties._is_first_time": !0
});
var o = qe.getCurDate(), i = je.Storage.getItem(Ke), r = o === qe.getCurDate(+i);
if (ze.includes(t) && 4 !== n && i > 0) {
var a = i - i % 36e5, s = +new Date();
r = s >= a - 864e5 && s <= a + 9e7;
}
_({
"reportData.properties._is_first_day": r
});
var c = "" + He + e;
_({
"reportData.properties._is_first_time": null === je.Storage.getItem(c)
});
}(r, e, i._event_type), d("trackEvent called , getStateData . ");
var a = v("reportData"), s = v("externalReportData"), c = s[e.replace(/_/, "")] || {}, u = n.isSendByBeacon;
delete n.isSendByBeacon;
var l = [ o({}, a, i, {
_ts: Date.now(),
_event_id: g(),
_type: "event",
_event_name: r,
_event_type: i._event_type || 3,
properties: o({}, a.properties, t),
custom_properties: o({}, a.custom_properties, s.superProperties, n, c)
}) ];
H(l);
var p = Ve() && u;
if (p) {
A(O(l));
var f = $(l);
d("sendBeacon start data: ", z(f)), je.sendBeacon({
url: k(),
data: f
});
}
if (Ve() && v("debugModel")) return j(r, !0), Q($(l, !1));
var m = [ 1, 2, 3 ].includes(Ge()) && v("debugModel");
if (R(r, l, -1 !== i._event_type && !m && !p) || v("isInMultilinkTest")) return l[0].properties._si = T(l[0]), 
J(k(), $(l));
W();
} catch (e) {
d("trackEvent exception", JSON.stringify(e)), M({
state: 999,
message: "report errors",
error_message: JSON.stringify(e)
});
}
});
}, W = function() {
var e = je.Storage.getItem(We, !0, []);
if (0 !== e.length) if (d("postEvent called . ", ""), !Fe() || v("quickAppAllowToSendEvents")) if (!1 !== function(e) {
if (Ue() && !v("isHasOpenId")) return c(!1, 440125), d("isCanPostEvent isHasOpenId false. "), 
!1;
var t = e.find(function(e) {
return "submitting" === e.status;
});
return void 0 !== t ? (d("isCanPostEvent isHasSubmitting", "eventItem", t), !1) : (d("isCanPostEvent check success"), 
!0);
}(e)) {
var t = e.splice(0, 100), n = [];
d("postEvent combinedEventItems called. ", "");
var o = t.map(function(e) {
e.status = "submitting", n.push(e.params[0]._event_id);
var t = e.params[0];
return (je.isXcxEnv() || Fe() || 3 === Ge()) && (null == je.setXcxEventData || je.setXcxEventData(t)), 
t._visitor_id = v("reportData._visitor_id"), "userset" !== t._type && (t.properties._group_id_list = v("reportData.properties._group_id_list"), 
t.properties._experiment_group_id_list = v("reportData.properties._experiment_group_id_list"), 
t.properties._combination_id = v("reportData.properties._combination_id")), t.properties._si = T(t), 
t;
});
H(o), e.unshift.apply(e, t), je.Storage.setItem(We, e), d("postEvent postEventRequest called. "), 
J(k(), $(o));
} else d("postEvent isCanPostEvent is false . "); else d("postEvent quickAppAllowToSendEvents . ");
}, $ = function(e, t) {
void 0 === t && (t = !0);
var n = v("isInApp"), o = v("appData.outlayerData"), i = v("appData.properties");
return n && e.length ? e.map(function(e) {
return "userset" === e._type || (e.properties._primitive_attribute = JSON.stringify(e), 
n = e.properties, mt.forEach(function(e) {
delete n[e];
}), _t.forEach(function(e) {
K(n, e) && void 0 !== n[e] || (n[e] = "");
}), vt.forEach(function(e) {
K(n, e) && void 0 !== n[e] || delete n[e];
}), (e = Object.assign(e, o)).properties = Object.assign(e.properties, i), t && (e.properties._si = T(e))), 
e;
var n;
}) : e;
}, J = function(e, t, n) {
void 0 === n && (n = it.receivertRetryTimes), n === it.receivertRetryTimes && d("report data list", z(t));
var o = je.isKS ? {
list: t
} : t;
d("postEventRequest start url: ", e), d("postEventRequest start data: ", z(t)), 
nt.post(e, o, {
timeout: 1e3 * it.receiverTimeout
}).then(function(o) {
if (d("postEventRequest finished", o), void 0 !== o.status) {
var i = t.findIndex(function(e) {
return et().includes(e._event_name);
});
if (i > -1) {
var r = t[i]._event_name, a = t[i].properties._log_count;
je.Storage.setItem(Xe, 1), je.trackLogEvent({
state: 202,
is_success: !1,
message: r + " report success",
event_name: r,
log_count: a
}), Re.$emit("install_event_send");
}
V(t.map(function(e) {
return e.properties._log_count;
}));
var s = je.Storage.getItem(We, !0, []), c = t.map(function(e) {
return e._event_id;
}), u = s.filter(function(e) {
return "toSubmit" === e.status;
}).filter(function(e) {
return !c.includes(e.params[0]._event_id);
});
if (je.Storage.setItem(We, u), v("isInMultilinkTest")) return;
W();
} else Y(e, t, n, o.msg, o.status);
}).catch(function(o) {
Y(e, t, n, (null == o ? void 0 : o.message) || o, (null == o ? void 0 : o.errorCode) || "timeout");
});
}, Y = function(e, t, n, o, i) {
if (n > 0) J(e, t, --n); else {
var r = je.Storage.getItem(We, !0, []);
r.forEach(function(e) {
e.status = "toSubmit";
}), je.Storage.setItem(We, r), M({
state: 3,
code: i,
message: "failed to report",
error_message: o,
event_name: null == t ? void 0 : t.map(function(e) {
return e._event_name;
}).join(","),
log_count: null == t ? void 0 : t.map(function(e) {
var t;
return null == (t = e.properties) ? void 0 : t._log_count;
}).join(",")
});
}
}, X = function(e, t, n, o) {
void 0 === o && (o = !0), et().includes(e) && M({
state: 6,
code: n,
message: "debug _webInstall report",
is_success: o,
error_message: t,
event_name: e
});
}, Q = function e(t, n) {
var o;
void 0 === n && (n = it.receivertRetryTimes);
var i = null == (o = t[0]) ? void 0 : o._event_name;
d("postDebugEvent start url: ", k()), d("postDebugEvent start data: ", z(t)), nt.post(k(), t, {
timeout: 1e3 * it.receiverTimeout
}).then(function(e) {
d("postDebugEvent finished", e), X(i, e.msg, e.status);
}).catch(function(o) {
d("postDebugEvent exception", JSON.stringify(o)), n > 0 ? e(t, --n) : X(i, (null == o ? void 0 : o.message) || o, (null == o ? void 0 : o.errorCode) || "timeout", !1);
});
}, Z = function e(t) {
void 0 === t && (t = it.eventPollingMaxCount), clearTimeout(yt), yt = setTimeout(function() {
--t > 0 && (W(), e(t));
}, 1e3 * it.eventPollingInterval);
}, ee = function(e, t, n) {
if (null != e && e.enable) {
if ("function" != typeof (null == t ? void 0 : t.init) && n) return c(!1, n);
t.init(e);
}
}, te = function(e, t, n) {
if (void 0 === n && (n = !1), !e || !f(e)) return c(!1, 440106);
var o, i = v("externalReportData.superProperties");
_("all" === e ? {
"externalReportData.superProperties": Object.assign(i, t)
} : ((o = {
delete: n
})["externalReportData.superProperties." + e] = t, o));
var r = je.Storage.getItem("superProperties", !0);
"all" === e ? je.Storage.setItem("superProperties", Object.assign(r, t)) : (delete r[e], 
je.Storage.setItem("superProperties", r));
}, ne = function(e, t) {
var n = v("externalReportData");
if (e === Tt[Tt.length - 1]) Tt.slice(0, Tt.length - 1).forEach(function(e) {
var o, i = null === t ? {} : Object.assign(n[e], t);
_(((o = {})["externalReportData." + e] = i, o));
}); else {
var o, i = null === t ? {} : Object.assign(n[e], t);
_(((o = {})["externalReportData." + e] = i, o));
}
}, oe = function(e, t) {
void 0 === t && (t = !0), t && d("eventStart", e), ft[e + (t ? 4 : 1)] = Date.now();
}, ie = function(e, t, n) {
if (void 0 === t && (t = {}), void 0 === n && (n = !0), n && d("eventFinish", e, t), 
p(t)) {
var o = n ? 4 : 1, i = e + o;
if (void 0 === ft[i]) return c(!1, 440604);
var r = ft[i];
B(e, {
_duration: Date.now() - r
}, t, {
_event_type: o
});
}
}, re = function() {
ie("_appEnd", v("externalReportData").appEnd, !1);
}, ae = function(e, t) {
void 0 === t && (t = {}), d(e, t), je.NATIVE.ready(function() {
var n = [ o({}, v("reportData"), {
_ts: Date.now(),
_type: "userset",
_userset_type: e,
properties: {},
custom_properties: t || {}
}) ];
if (function(e) {
"function" == typeof je.sanitizeReportParams && je.sanitizeReportParams(e);
}(n), Ve() && v("debugModel")) return Q(n);
R("", n), W();
});
}, se = function() {
return je.Storage.getItem("_uuid") || "";
}, ce = function(e) {
if ("object" !== je.getType(e) || !Object.keys(e).length) return e;
var t = {};
return Object.keys(e).forEach(function(n) {
t[n] = "" + e[n];
}), t;
}, ue = function() {
var e, t = {};
return Nt && Mt ? Gt.getLaunchOptionsSync && (t = Gt.getLaunchOptionsSync() || {}) : Gt.getEnterOptionsSync && (t = Gt.getEnterOptionsSync() || {}), 
{
scene: (e = t, Nt && Mt ? (e.from || Rt) + "" : (e.scene || Rt) + ""),
path: t.path || "",
queryInfo: ce(t.query || {}),
referrerInfo: t.referrerInfo || t.refererInfo || {}
};
}, le = function(e) {
var t, n = {
"reportData.properties._launch_scene": (t = e || ue()).scene,
"reportData.properties._path": t.path,
"reportData.properties._referrer_info": t.referrerInfo
};
Object.keys(t.queryInfo || {}).length && (n["reportData.properties._query_info"] = t.queryInfo), 
je.setStateData(n);
}, de = function(e) {
je.trackLogEvent({
state: 4,
message: "lack local storage",
stroage_key: e
});
}, pe = function() {
return (pe = Object.assign ? Object.assign.bind() : function(e) {
for (var t = 1; t < arguments.length; t++) {
var n = arguments[t];
for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
}
return e;
}).apply(null, arguments);
}, ge = function(e, t, n) {
if (null != je.getStateData && je.getStateData("logEnabled")) {
var o, i, r;
o = t, Array.isArray(o) && null != (i = o[0]) && i._event_id ? o[0]._event_id : Array.isArray(null == o ? void 0 : o.list) && null != (r = o.list[0]) && r._event_id && o.list[0]._event_id, 
null == n || n.statusCode;
null == n || n.data;
}
}, fe = function(e, t, n) {
void 0 === n && (n = je.settingData.attRetryLimit);
var o = je.getStateData("reportData._appkey"), i = je.Storage.getItem("_distinct", !0, null);
if (o && null != i && i.id && null != i && i.type) {
var r = {
_appkey: o,
_distinct_id: i.id,
_distinct_id_type: i.type
};
r.sign = function(e) {
var t = je.createSignData(e, Object.keys(e));
return je.getMD5Value(t);
}(r), je.HttpHelper.get("//" + je.settingData.openIdDomain + "/receiver/api/applet/attr", r).then(function(o) {
if ("number" == typeof (o = o || {}).status && ![ 103, 500 ].includes(o.status) || !e) {
var i, r = {
result: o.result
};
null != (i = o) && null != (i = i.data) && i.user_data && (r = Object.assign(r, o.data.user_data));
var a = 0 === o.status;
a && je.Storage.setItem("attr_res", {
s: o.status,
r: r
}), "function" == typeof t && t(r);
var s = {
state: 13,
message: a ? "att_success" : "att_fail",
isListen: e,
retry: je.settingData.attRetryLimit - n
};
a || (s.error_message = o.result), je.trackLogEvent(s);
} else me(e, t, n, o.result);
}).catch(function(o) {
e && me(e, t, n, JSON.stringify(o));
});
} else "function" == typeof t && t({
result: null
});
}, me = function(e, t, n, o) {
n > 0 ? (n--, setTimeout(function() {
fe(e, t, n);
}, 1e3 * je.settingData.attDataInterval)) : ("function" == typeof t && t({
result: o || null
}), je.trackLogEvent({
state: 13,
message: "att_fail",
isListen: e,
retry: je.settingData.attRetryLimit - n,
error_message: o
}));
}, _e = function(e) {
return new Promise(function(t) {
var n = je.Storage.getItem("attr_res", !0, null);
return 0 === (null == n ? void 0 : n.s) ? t(n.r) : "1" === je.Storage.getItem(je.STORAGE_INSTALL_SEND) ? fe(e, function(e) {
t(e);
}) : void je.customEvents.$on("install_event_send", function() {
setTimeout(function() {
fe(e, function(e) {
t(e);
});
}, 1e3 * je.settingData.attDataInterval);
});
});
}, ve = function() {
var e = je.getDistinctId();
je.setStateData({
"reportData._distinct_id": e.id,
"reportData._distinct_id_type": e.type
}), je.customEvents.$emit("ready_to_create_distinct");
}, ye = function() {
var e, t, n, o = null == (t = (n = getCurrentPages())[n.length - 1]) ? void 0 : t.route, i = "";
return (null == (e = Kt.customConfig) || null == (e = e.filter(function(e) {
var t;
return i = null == (t = Object.keys(e)) ? void 0 : t[0], null == o ? void 0 : o.includes(i);
})) || null == (e = e[0]) ? void 0 : e[i]) || {};
}, he = function(e, t, n) {
var o = "SolarEngineSDK call the " + e + " method of Tencent MiniGame Ads SDK, pass in " + t + ": " + n;
Bt.log(o);
}, Se = function(e, t) {
void 0 === t && (t = ""), $t && (e ? (Wt.setOpenId(e), he("setOpenId", "openid", e)) : t ? (Wt.setUnionId(t), 
he("setUnionId", "unionid", t)) : $t = !1);
}, be = function e(t, n) {
_e(!1).then(function(o) {
17797 == +(null == o ? void 0 : o.channel_id) ? t(!0) : n > 0 ? (n--, setTimeout(function() {
e(t);
}, 1e3 * je.settingData.tencentAttDataInterval)) : t(!1);
});
}, ke = function(e) {
return new Promise(function(t) {
var n = e;
if (1 === n) t(!0); else if (2 === n) {
var o = je.Storage.getItem("attr_res", !0, null);
if (0 === (null == o ? void 0 : o.s)) {
var i;
17797 == +(null == o || null == (i = o.r) ? void 0 : i.channel_id) ? t(!0) : t(!1);
} else {
var r = je.settingData.tencentAttRetryLimit;
2 !== Jt && r--, be(t, r);
}
} else t(!1);
});
}, we = function(e, t) {
e._is_reporting_to_tencentsdk = t;
}, De = function(e, t, n, o) {
return void 0 === o && (o = {}), new Promise(function(i) {
je.NATIVE.ready(function() {
var r = !1;
if (!$t) return we(t, r), i(!1);
var a = "_mpStart" === n ? Jt : null == e ? void 0 : e.reportingToTencentSdk;
if (![ 1, 2, 3 ].includes(a)) return je.assert(!1, 440666), we(t, r), i(!1);
ke(a).then(function(a) {
if (!a) return we(t, r), i(!1);
switch ([ "_mpPur", "_mpReg" ].includes(n) || (r = !0), n) {
case "_mpStart":
Wt.onAppStart();
break;

case "_mpPur":
1 === (null == e ? void 0 : e.payStatus) && (Wt.onPurchase(100 * ((null == e ? void 0 : e.payAmount) || 0)), 
r = !0);
break;

case "_mpReg":
"success" === (null == e ? void 0 : e.registerStatus) && (Wt.onRegister(), r = !0);
break;

case "_mpReActive":
Wt.track("RE_ACTIVE", pe({
backFlowDay: null == e ? void 0 : e.backFlowDay
}, o));
break;

case "_mpAddToWishlist":
Wt.track("ADD_TO_WISHLIST", pe({
type: null == e ? void 0 : e.addToWishlistType
}, o));
break;

case "_mpShare":
Wt.track("SHARE", pe({
target: null == e ? void 0 : e.mpShareTarget
}, o));
break;

case "_mpCreateRole":
Wt.onCreateRole(null == e ? void 0 : e.mpRoleName);
break;

case "_mpTutorialFinish":
Wt.onTutorialFinish();
break;

case "_mpUpdateLevel":
Wt.track("UPDATE_LEVEL", pe({
level: null == e ? void 0 : e.afterUpgrade
}, o));
break;

case "_mpViewContentMall":
Wt.track("VIEW_CONTENT", pe({
item: "Mall"
}, o));
break;

case "_mpViewContentActivity":
Wt.track("VIEW_CONTENT", pe({
item: "Activity"
}, o));
}
we(t, r), i(!0);
});
});
});
}, Ie = function(e, t) {
void 0 === t && (t = []);
for (var n = function(e, t) {
var n = [];
for (var o in e) "function" != typeof e[o] || en[o] || t.includes(o) || n.push(o);
return n;
}(e, t), o = 0; o < n.length; o++) Te(e, n[o]);
}, Te = function(e, t) {
var n = e[t];
n._se_proxy || (e[t] = function() {
var e, t, o, i, r, a, s = n.apply(this, arguments), c = arguments[0];
return je.isObject(c) && (o = (e = c).type, i = ye(), r = Kt.config.autoTrackPageClick, 
a = (null == e || null == (t = e.currentTarget) ? void 0 : t.dataset) || {}, o && !!{
tap: 1,
longpress: 1,
longtap: 1
}[o] && r && !i.ignoreTrack && "true" !== (null == a ? void 0 : a.ignoreTrack) && zt.trackPageClick(e, !0)), 
s;
}, e[t]._se_proxy = !0);
}, xe = function(e, t, n) {
if (e[t]) {
var o = e[t];
e[t] = function(e) {
n.call(this, e, t), o.call(this, e);
};
} else e[t] = function(e) {
n.call(this, e, t);
};
}, Pe = function() {
le(), je.NATIVE.ready(function() {
var e = {};
De({}, e, "_mpStart").then(function(t) {
je.trackAppStart(e);
});
});
}, Ae = function() {
var e;
if (on || (on = je.Storage.getItem("_distinct", !0, null)), null != (e = on) && e.id) return on;
var t = je.getStateData("reportData.properties._openid"), n = je.getStateData("reportData._uuid"), o = {
id: t || n,
type: t ? 1101 : 1103
};
return je.Storage.setItem("_distinct", o), o;
}, Ee = function() {
var e, t, n = {
_device_type: 0,
_platform: 0,
_app_platform: Nt ? "minigame" : "miniprogram"
}, o = null;
try {
Gt.getSystemInfoSync && (o = Gt.getSystemInfoSync());
} catch (e) {
console.warn("Failed to obtain device information:", e);
}
if (o) {
var i;
n._manufacturer = o.brand, n._device_model = o.model, n._device_type = (e = o.platform, 
(t = {
other: 0,
"android phone": 1,
"android pad": 2,
ios: 3,
ipad: 4,
mac: 5,
windows: 6,
devtools: 7
})[Object.keys(t).find(function(t) {
return t.indexOf(e) > -1;
}) || "other"]), n._platform = function(e) {
var t = {
other: 0,
android: 1,
ios: 2,
windows: 3,
mac: 4,
devtools: 8
};
return t[Object.keys(t).find(function(t) {
return t.indexOf(e) > -1;
}) || "other"];
}(o.platform);
var r = (null == (i = o.system) ? void 0 : i.split(" ")) || [];
n._os_version = r.length > 1 ? r[1] : o.system, n._screen_height = o.screenHeight, 
n._screen_width = o.screenWidth, n._language = o.language, n._app_version = o.version, 
n._mp_version = o.SDKVersion, n._browser_version = o.version, n._app_name = o.appName || "";
}
return n;
}, Le = function() {
var e = {
_launch_scene: Rt,
_network_type: 1
}, t = ue();
return e._launch_scene = t.scene, e._path = t.path, e._query_info = t.queryInfo, 
e._referrer_info = t.referrerInfo, new Promise(function(t) {
var n;
(n = {
none: 0,
unknown: 1,
"2g": 2,
"3g": 3,
"4g": 4,
"5g": 5,
wifi: 9
}, new Promise(function(e) {
Gt.getNetworkType ? Gt.getNetworkType({
success: function(t) {
e(n[null == t ? void 0 : t.networkType] || 1);
},
fail: function() {
e(1);
}
}) : e(1);
})).then(function(n) {
e._network_type = n, t(e);
});
});
}, Ce = function(e, t, n, o) {
void 0 === o && (o = je.settingData.openIdRetryTimes), null == Gt.login || Gt.login({
success: function(i) {
var r = i || {}, a = r.code, s = void 0 === a ? "" : a, c = r.anonymousCode, u = void 0 === c ? "" : c, l = {
appCode: e,
code: s,
mpType: t
};
u && (l.anonymousCode = u), je.HttpHelper.get("//" + je.settingData.openIdDomain + "/receiver/api/public/openid", l, {
timeout: 1e3 * je.settingData.openIdTimeout
}).then(function(i) {
var r = (null == i ? void 0 : i.data) || {};
r.openid || r.anonymous_openid ? "function" == typeof n && n(r) : Oe(e, t, n, o);
}).catch(function() {
Oe(e, t, n, o);
});
},
fail: function() {
Oe(e, t, n, o);
}
});
}, Oe = function(e, t, n, o) {
var i;
o > 0 ? Ce(e, t, n, --o) : ((i = je.Storage.getItem("_uuid")) || (i = je.generateUUID(), 
je.Storage.setItem("_uuid", i), je.setStateData({
"reportData._uuid": i
})), "function" == typeof n && n());
}, je = {
extend: function() {
var e = arguments[0] || {};
for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
return this;
}
};
je.extend({
init: function(e) {
e.reportData._session_id = je.generateUUID(), e.reportData._visitor_id = this.Storage.getItem("_visitor_id") || e.reportData._distinct_id, 
e.reportData._account_id = this.Storage.getItem("_account_id") || "";
var t = this.getStateData("reportData"), n = {
properties: o({}, t.properties, e.reportData.properties)
}, i = je.Storage.getItem("superProperties", !0, {}), a = je.getStateData("externalReportData.superProperties");
this.isObject(i) && (a = Object.assign(a, i)), this.setStateData({
"externalReportData.superProperties": a,
reportData: o({}, t, e.reportData, n)
}), r.bind(je)();
}
});
var Re = {
eventList: {},
$on: function(e, t) {
this.eventList[e] || (this.eventList[e] = {}), Array.isArray(this.eventList[e].emitList) && this.eventList[e].emitList.forEach(function(e) {
return t(e);
}), Array.isArray(this.eventList[e].onList) || (this.eventList[e].onList = []), 
this.eventList[e].onList.push(t);
},
$emit: function(e, t) {
this.eventList[e] || (this.eventList[e] = {}), Array.isArray(this.eventList[e].emitList) || (this.eventList[e].emitList = []), 
this.eventList[e].emitList.push(t), Array.isArray(this.eventList[e].onList) && this.eventList[e].onList.forEach(function(e) {
return e(t);
});
},
$off: function(e, t) {
var n, o = null == (n = this.eventList[e]) ? void 0 : n.onList;
if (Array.isArray(o)) for (var i = 0; i < o.length; i++) if (t === o[i]) {
o.splice(i, 1);
break;
}
}
};
je.extend({
customEvents: Re
});
var Ne = {
440100: "Please call method:prevInit before initializing",
440101: "Please configure your appKey/userId correctly!",
440102: "Please configure the parameter information of trackPageClick correctly!",
440103: "Please configure your default parameter configuration correctly, you need to pass Array!",
440105: "Illegal parameter format, String needs to be passed!",
440106: "Illegal parameter format String must be passed and cannot start with underscore_!",
440107: "Initialize A/B test, need to load A/B test plugin!",
440108: "Data request failed {#1}",
440109: "The plugin is missing the init method!",
440116: "Illegal parameter format, Array<object> needs to be passed!",
440117: "Illegal parameter format, need to pass parameter value ({#1})!",
440119: "Failed to obtain device information!",
440120: "Illegal parameter format, Object needs to be passed!",
440122: "Illegal parameter format Requires the correct preconfigured event type ({#1}) or all!",
440123: "The maximum length of data that can be stored by a single key must be less than 1MB. And the upper limit of all data stores is 10MB",
440124: "setStorage error {#1}",
440125: "The mini program openid has not been obtained.",
440126: "Currently loaded plugin does not match the main SDK runtime environment",
440127: "Plugin version must be the same as the main SDK version (plugin version {#1}, main SDK version {#2})",
440601: "error: {#1}. The custom event name must be string type.",
440602: 'error: {#1}. The custom event name must start with a lowercase letter but cannot start with an underscore. Other characters can contain numbers, lowercase letters, and underscores "_".',
440603: "error: {#1}. The custom event name must contain a maximum of 40 characters.",
440604: "Call eventStart first to record the start time.",
440605: "error: {#1}. The key of custom properties  must be string type",
440606: 'error: {#1}. The key of custom properties must start with a lowercase letter but cannot start with an underscore. Other characters can contain numbers, lowercase letters, and underscores "_".',
440607: "error: {#1}. The key of custom properties must contain a maximum of 40 characters.",
440610: "error: {#1}. The value of each key must be string, number or boolean.",
440666: "error: reportingToTencentSdk is required, please pass 1, 2 or 3.",
440667: "error: Lack of required parameters to initialize Tencent Ads SDK.",
440668: "error: Lack of required Tencent Ads SDK."
}, Me = console, Ge = function() {
return je.getStateData("systemEnv");
}, Ue = function() {
return 1 === Ge();
}, Ve = function() {
return 0 === Ge();
}, Fe = function() {
return 2 === Ge();
};
je.extend({
infoLog: l,
checkLogEnabled: d,
deepCopy: function e(t, o) {
if (void 0 === o && (o = []), null === t || "object" != ("undefined" == typeof t ? "undefined" : n(t))) return t;
var i, r = (i = function(e) {
return e.original === t;
}, o.find(i));
if (r) return r.copy;
var a = Array.isArray(t) ? [] : {};
return o.push({
original: t,
copy: a
}), Object.keys(t).forEach(function(n) {
a[n] = e(t[n], o);
}), a;
},
stringLikeJsonToObject: function(e) {
var t, n = {};
return e ? n = null == (t = e.replace(/(\s*\{)|(\}\s*)/g, "")) || null == (t = t.split(",")) ? void 0 : t.reduce(function(e, t) {
var n = t.split(":"), o = n[0].replace(/^\s*|\s*$/g, ""), i = n[1].replace(/^\s*|\s*$/g, "").replace(/^(\"|\')|(\"|\')$/g, "");
try {
i = JSON.parse(i);
} catch (e) {}
return e[o] = i, e;
}, {}) : n;
},
isObject: s,
checkObject: p,
getType: a,
limitParamType: function(e, t) {
return !![ "string", "number", "boolean" ].includes("undefined" == typeof t ? "undefined" : n(t)) || (c(!1, 440610, {
"{#1}": e
}), !1);
},
assert: c,
generateUUID: g,
trimStr: f,
isWeb: Ve,
isXcxEnv: Ue
});
var qe = {
getCurDate: function(e) {
return e ? m(e) : m();
},
dateFormat: m
};
je.extend({
seDate: qe
});
var He = "_event_", Ke = "_first_day_time", ze = [ "_appInstall", "_appStart", "_appPur", "_appImp" ], Be = "_log_count", We = "_event_queue", $e = "_log_event_queue", Je = "_log_count_send", Ye = "_log_install_insert", Xe = "_log_install_send", Qe = "_setting_host", Ze = [ "_web", "_mp", "_mp", "_mp" ], et = function() {
return [ je.getCurEnvEventName("_appInstall"), "_mpInstall" ];
};
je.extend({
STORAGE_INSTALL_SEND: Xe,
STORAGE_IS_FIRST_DAY: Ke,
STORAGE_EVENT_QUEUE: We
}), je.extend({
createStorageKey: function(e) {
return "sesdk_config_" + e;
}
});
var tt = new (function(e) {
function t() {
var t;
return (t = e.call(this) || this).settingHost = void 0, t.receiverSDKLogDomain = void 0, 
t.receiverSDKLogAppkey = void 0, t.receiverSDKLogTenantId = void 0, t;
}
var n, o;
return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, 
i(n, o), t;
}(function() {
this.isPrivate = !1, this.receiverDomain = void 0, this.ruleDomain = void 0, this.openidDomain = void 0, 
this.packageType = void 0;
}))();
tt.receiverDomain = "api-receiver.detailroi.com", tt.ruleDomain = "rule.detailroi.com", 
tt.settingHost = "rule.detailroi.com", tt.openidDomain = "api-receiver.detailroi.com", 
tt.packageType = 1, tt.receiverSDKLogDomain = "api-receiver.detailroi.com", tt.receiverSDKLogAppkey = "e3517aa324f39da3", 
tt.receiverSDKLogTenantId = "147e6f0c65160558";
var nt = {
get: function(e, t, n) {
return void 0 === t && (t = {}), void 0 === n && (n = {}), je.requestHandle({
url: e,
method: "get",
params: t
}, n);
},
post: function(e, t, n) {
return void 0 === t && (t = {}), void 0 === n && (n = {}), je.requestHandle({
url: e,
method: "post",
data: t
}, n);
}
};
je.extend({
HttpHelper: nt
});
var ot = {
isInMultilinkTest: !1,
isInApp: !1,
appData: {
outlayerData: {},
properties: {}
},
externalReportData: {
superProperties: {},
appInstall: {},
appStart: {},
appEnd: {}
},
pluginProperties: {},
reportData: {
_package_type: tt.packageType,
_tenant_id: "",
_appkey: "",
_source_type: "sdk",
_event_name: "",
_session_id: "",
_type: "event",
_event_id: "",
_ts: 0,
_ua: "",
_distinct_id: "",
_distinct_id_type: 1001,
custom_properties: {},
properties: {
_platform: 0,
_os_version: "",
_screen_width: 0,
_screen_height: 0,
_device_model: "",
_device_type: 0,
_network_type: 1,
_lib: 0,
_lib_version: "1.3.5",
_browser: "",
_browser_version: "",
_is_first_day: !1,
_is_first_time: !1,
_log_count: 0,
_time_zone: function() {
var e = new Date().getTimezoneOffset();
if ("number" == typeof e) return "UTC" + (e > 0 ? "-" : e < 0 ? "+" : "") + Math.abs(e / 60);
}()
}
},
isHasOpenId: !1,
systemEnv: 0,
debugModel: !1,
logEnabled: !1,
isSendSDKLog: !0,
quickAppAllowToSendEvents: !0
};
je.extend({
setStateData: _,
getStateData: v
});
var it = {
intervalTimer: null,
receiverSDKLogDomain: tt.receiverSDKLogDomain,
settingTimeout: 60,
settingInterval: 1800,
settingPolingMinRange: 1800,
settingPolingMaxRange: 86400,
receiverTimeout: 60,
receivertRetryTimes: 3,
ruleTimeout: 60,
ruleRetryTimes: 3,
ruleInterval: 1800,
rulePolingMinRange: 1800,
rulePolingMaxRange: 86400,
multilinkTimeout: 60,
multilinkRetryTimes: 3,
maskTimeoutCloseTime: .5,
minMaskTimeoutCloseTime: .2,
multilinkJumpWaitSendEvent: .3,
openIdTimeout: 60,
openIdRetryTimes: 3,
eventPollingInterval: 10,
eventPollingMaxCount: 50,
attDataInterval: 3,
attRetryLimit: 3,
distinctWaitTime: 15,
tencentAttDataInterval: 2,
tencentAttRetryLimit: 2
}, rt = [ {
key: "settingTimeout",
skey: "a"
}, {
key: "receiverTimeout",
skey: "c"
}, {
key: "receivertRetryTimes",
skey: "d",
zero: !0
}, {
key: "ruleTimeout",
skey: "e"
}, {
key: "ruleRetryTimes",
skey: "f",
zero: !0
}, {
key: "multilinkTimeout",
skey: "g"
}, {
key: "multilinkRetryTimes",
skey: "h",
zero: !0
}, {
key: "maskTimeoutCloseTime",
skey: "i"
}, {
key: "minMaskTimeoutCloseTime",
skey: "j"
}, {
key: "multilinkJumpWaitSendEvent",
skey: "k"
}, {
key: "openIdTimeout",
skey: "l"
}, {
key: "openIdRetryTimes",
skey: "m",
zero: !0
}, {
key: "eventPollingInterval",
skey: "n"
}, {
key: "eventPollingMaxCount",
skey: "o"
}, {
key: "settingInterval",
skey: "p",
condition: !0
}, {
key: "ruleInterval",
skey: "q",
condition: !0
}, {
key: "attDataInterval",
skey: "r"
}, {
key: "attRetryLimit",
skey: "s"
}, {
key: "distinctWaitTime",
skey: "t"
}, {
key: "tencentAttDataInterval",
skey: "tr"
}, {
key: "tencentAttRetryLimit",
skey: "ts"
} ];
je.extend({
settingData: it
}), je.extend({
waitToSendEvent: w
});
var at, st = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : {}, ct = (function(e) {
!function(t) {
function n(e, t) {
var n = (65535 & e) + (65535 & t);
return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
}
function o(e, t, o, i, r, a) {
return n((a = n(n(t, e), n(i, a))) << r | a >>> 32 - r, o);
}
function i(e, t, n, i, r, a, s) {
return o(t & n | ~t & i, e, t, r, a, s);
}
function r(e, t, n, i, r, a, s) {
return o(t & i | n & ~i, e, t, r, a, s);
}
function a(e, t, n, i, r, a, s) {
return o(t ^ n ^ i, e, t, r, a, s);
}
function s(e, t, n, i, r, a, s) {
return o(n ^ (t | ~i), e, t, r, a, s);
}
function c(e, t) {
var o, c, u, l;
e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
for (var d = 1732584193, p = -271733879, g = -1732584194, f = 271733878, m = 0; m < e.length; m += 16) d = s(d = a(d = a(d = a(d = a(d = r(d = r(d = r(d = r(d = i(d = i(d = i(d = i(o = d, c = p, u = g, l = f, e[m], 7, -680876936), p = i(p, g = i(g, f = i(f, d, p, g, e[m + 1], 12, -389564586), d, p, e[m + 2], 17, 606105819), f, d, e[m + 3], 22, -1044525330), g, f, e[m + 4], 7, -176418897), p = i(p, g = i(g, f = i(f, d, p, g, e[m + 5], 12, 1200080426), d, p, e[m + 6], 17, -1473231341), f, d, e[m + 7], 22, -45705983), g, f, e[m + 8], 7, 1770035416), p = i(p, g = i(g, f = i(f, d, p, g, e[m + 9], 12, -1958414417), d, p, e[m + 10], 17, -42063), f, d, e[m + 11], 22, -1990404162), g, f, e[m + 12], 7, 1804603682), p = i(p, g = i(g, f = i(f, d, p, g, e[m + 13], 12, -40341101), d, p, e[m + 14], 17, -1502002290), f, d, e[m + 15], 22, 1236535329), g, f, e[m + 1], 5, -165796510), p = r(p, g = r(g, f = r(f, d, p, g, e[m + 6], 9, -1069501632), d, p, e[m + 11], 14, 643717713), f, d, e[m], 20, -373897302), g, f, e[m + 5], 5, -701558691), p = r(p, g = r(g, f = r(f, d, p, g, e[m + 10], 9, 38016083), d, p, e[m + 15], 14, -660478335), f, d, e[m + 4], 20, -405537848), g, f, e[m + 9], 5, 568446438), p = r(p, g = r(g, f = r(f, d, p, g, e[m + 14], 9, -1019803690), d, p, e[m + 3], 14, -187363961), f, d, e[m + 8], 20, 1163531501), g, f, e[m + 13], 5, -1444681467), p = r(p, g = r(g, f = r(f, d, p, g, e[m + 2], 9, -51403784), d, p, e[m + 7], 14, 1735328473), f, d, e[m + 12], 20, -1926607734), g, f, e[m + 5], 4, -378558), p = a(p, g = a(g, f = a(f, d, p, g, e[m + 8], 11, -2022574463), d, p, e[m + 11], 16, 1839030562), f, d, e[m + 14], 23, -35309556), g, f, e[m + 1], 4, -1530992060), p = a(p, g = a(g, f = a(f, d, p, g, e[m + 4], 11, 1272893353), d, p, e[m + 7], 16, -155497632), f, d, e[m + 10], 23, -1094730640), g, f, e[m + 13], 4, 681279174), p = a(p, g = a(g, f = a(f, d, p, g, e[m], 11, -358537222), d, p, e[m + 3], 16, -722521979), f, d, e[m + 6], 23, 76029189), g, f, e[m + 9], 4, -640364487), p = a(p, g = a(g, f = a(f, d, p, g, e[m + 12], 11, -421815835), d, p, e[m + 15], 16, 530742520), f, d, e[m + 2], 23, -995338651), g, f, e[m], 6, -198630844), 
p = s(p = s(p = s(p = s(p, g = s(g, f = s(f, d, p, g, e[m + 7], 10, 1126891415), d, p, e[m + 14], 15, -1416354905), f, d, e[m + 5], 21, -57434055), g = s(g, f = s(f, d = s(d, p, g, f, e[m + 12], 6, 1700485571), p, g, e[m + 3], 10, -1894986606), d, p, e[m + 10], 15, -1051523), f, d, e[m + 1], 21, -2054922799), g = s(g, f = s(f, d = s(d, p, g, f, e[m + 8], 6, 1873313359), p, g, e[m + 15], 10, -30611744), d, p, e[m + 6], 15, -1560198380), f, d, e[m + 13], 21, 1309151649), g = s(g, f = s(f, d = s(d, p, g, f, e[m + 4], 6, -145523070), p, g, e[m + 11], 10, -1120210379), d, p, e[m + 2], 15, 718787259), f, d, e[m + 9], 21, -343485551), 
d = n(d, o), p = n(p, c), g = n(g, u), f = n(f, l);
return [ d, p, g, f ];
}
function u(e) {
for (var t = "", n = 32 * e.length, o = 0; o < n; o += 8) t += String.fromCharCode(e[o >> 5] >>> o % 32 & 255);
return t;
}
function l(e) {
var t = [];
for (t[(e.length >> 2) - 1] = void 0, o = 0; o < t.length; o += 1) t[o] = 0;
for (var n = 8 * e.length, o = 0; o < n; o += 8) t[o >> 5] |= (255 & e.charCodeAt(o / 8)) << o % 32;
return t;
}
function d(e) {
for (var t, n = "0123456789abcdef", o = "", i = 0; i < e.length; i += 1) t = e.charCodeAt(i), 
o += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
return o;
}
function p(e) {
return unescape(encodeURIComponent(e));
}
function g(e) {
return u(c(l(e = p(e)), 8 * e.length));
}
function f(e, t) {
return function(e, t) {
var n, o = l(e), i = [], r = [];
for (i[15] = r[15] = void 0, 16 < o.length && (o = c(o, 8 * e.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], 
r[n] = 1549556828 ^ o[n];
return t = c(i.concat(l(t)), 512 + 8 * t.length), u(c(r.concat(t), 640));
}(p(e), p(t));
}
function m(e, t, n) {
return t ? n ? f(t, e) : d(f(t, e)) : n ? g(e) : d(g(e));
}
e.exports ? e.exports = m : t.md5 = m;
}(st);
}(at = {
exports: {}
}), at.exports), ut = [ 115, 111, 108, 97, 114, 101, 110, 103, 105, 110, 101, 50, 48, 50, 51 ].map(function(e) {
return String.fromCharCode(e);
}).join("");
je.extend({
createSignData: I,
getHMACMD5Value: D,
getMD5Value: function(e) {
return ct(ut + e);
}
});
var lt = x([ [ "adNetworkPlatform", "_ad_platform", "string", !0 ], [ "adType", "_ad_type", "int", !0 ], [ "adNetworkAppID", "_ad_appid", "string", !1 ], [ "adId", "_ad_id", "string", !0 ], [ "mediationPlatform", "_mediation_platform", "string", !0 ], [ "ecpm", "_ad_ecpm", "number", !0 ], [ "currency", "_currency_type", "string", !0 ], [ "rendered", "_is_rendered", "boolean", !0 ] ]), dt = x([ [ "orderId", "_order_id", "string", !0 ], [ "payAmount", "_pay_amount", "number", !0 ], [ "currencyType", "_currency_type", "string", !0 ], [ "payType", "_pay_type", "string", !0 ], [ "productID", "_product_id", "string", !0 ], [ "productName", "_product_name", "string", !0 ], [ "productCount", "_product_num", "number", !0 ], [ "payStatus", "_pay_status", "number", !0 ], [ "failReason", "_fail_reason", "string", !1 ] ]), pt = x([ [ "adNetwork", "_adnetwork", "string", !0 ], [ "subChannel", "_sub_channel", "string", !1 ], [ "adAccountID", "_adaccount_id", "string", !1 ], [ "adAccountName", "_adaccount_name", "string", !1 ], [ "adCampaignID", "_adcampaign_id", "string", !1 ], [ "adCampaignName", "_adcampaign_name", "string", !1 ], [ "adOfferID", "_adoffer_id", "string", !1 ], [ "adOfferName", "_adoffer_name", "string", !1 ], [ "adCreativeID", "_adcreative_id", "string", !1 ], [ "adCreativeName", "_adcreative_name", "string", !1 ], [ "attributionPlatform", "_attribution_platform", "string", !0 ] ]), gt = o({}, lt, dt, x([ [ "status", "_status", "string", !1 ], [ "regType", "_reg_type", "string", !0 ], [ "registerStatus", "_status", "string", !0 ], [ "loginType", "_login_type", "string", !0 ], [ "loginStatus", "_status", "string", !0 ], [ "backFlowDay", "_back_flow_day", "number", !0 ], [ "addToWishlistType", "_add_to_wishlist_type", "string", !0 ], [ "mpShareTarget", "_mp_share_target", "string", !0 ], [ "mpRoleName", "_mp_role_name", "string", !0 ], [ "beforeUpgrade", "_before_upgrade", "number", !0 ], [ "afterUpgrade", "_after_upgrade", "number", !0 ] ]), pt), ft = {};
je.extend({
valueToStr: E,
getCurEnvEventName: N,
isValueExceedLimit: L,
filterCustomProperties: function(e) {
var t = Object.create(null);
if (!p(e)) return t;
var n = "", o = "", i = "", r = "";
return function(e) {
if ("object" !== a(e)) return [];
var t = Object.keys(e);
if ("function" !== a(Reflect.ownKeys)) return t;
var n = Object.getOwnPropertyNames(e), o = Reflect.ownKeys(e), i = n.filter(function(e) {
return !t.includes(e);
});
return o.filter(function(e) {
return !i.includes(e);
});
}(e).forEach(function(s) {
"string" !== a(s) && (n += String(s) + ", "), "string" !== a(s) || /^[a-z][a-z0-9_]*$/.test(s) || (o += String(s) + ", "), 
"string" === a(s) && s.length > 40 && (i += String(s) + ", "), [ "number", "string", "boolean", "array" ].includes(a(e[s])) || (r += String(s) + ", "), 
t[s] = e[s];
}), n.length && c(!1, 440605, {
"{#1}": n.slice(0, n.length - 2)
}), o.length && c(!1, 440606, {
"{#1}": o.slice(0, o.length - 2)
}), i.length && c(!1, 440607, {
"{#1}": i.slice(0, i.length - 2)
}), r.length && c(!1, 440610, {
"{#1}": r.slice(0, i.length - 2)
}), t;
},
getPredefineEventFormattedData: P
}), je.extend({
trackLogEvent: M
});
var mt = [ "_app_platform", "_browser", "_browser_version", "_page_title", "_page_name", "_page_url", "_page_host", "_referrer_name", "_referrer_url", "_referrer_host", "_referrer_title" ], _t = [ "_language", "_time_zone", "_platform", "_os_version", "_screen_width", "_screen_height", "_device_model", "_device_type", "_network_type", "_lib", "_lib_version", "_channel", "_is_first_day", "_is_first_time" ], vt = [ "_group_id_list", "_experiment_group_id_list", "_combination_id" ], yt = void 0;
je.extend({
trackEvent: B,
postEvent: W
});
var ht = !1, St = !1, bt = !1, kt = {
prevInit: function(e) {
void 0 !== e && "" !== e && (St = !0, je.Storage.setItem("_is_prev_init", 1));
},
init: function(e) {
var t, n, o, i;
if ("function" == typeof je.normalizeInitConfig && (e = je.normalizeInitConfig(e) || e), 
bt) {
var r;
null != (r = e.config) && r.logEnabled && l("init", "SDK already initialized, skipping duplicate call");
} else {
if (!St && !je.Storage.getItem("_is_prev_init")) return c(!1, 440100);
if (p(e)) {
if (null != (t = e.config) && t.logEnabled && l("init", e), !e.appKey || !e.userId) return c(!1, 440101);
bt = !0;
var s = (null == (n = e.config) ? void 0 : n.autoTrackConfig) || {}, u = s.autoTrack, d = s.autoTrackPageClick;
Ue() && u && d && Re.$emit("xcx_proxy_click");
var g = {};
g._appkey = e.appKey, g._tenant_id = e.userId, _({
"reportData._appkey": g._appkey
}), function() {
var e;
it.isSass = !tt.isPrivate, e = je.Storage.getItem(Qe, !0, {}), it.receiverDomain = it.isSass && e.rcdm || tt.receiverDomain, 
it.ruleDomain = it.isSass && e.rdm || tt.ruleDomain, it.openIdDomain = it.isSass && e.oidm || tt.openidDomain, 
it.isSass && rt.forEach(function(t) {
y(t.key, e[t.skey], t.zero);
});
}(), "function" == typeof je.afterInitSetting && je.afterInitSetting(e), Ue() && (null == je.somePrevInit || je.somePrevInit(e), 
null == je.getOpenId || je.getOpenId(e));
var f = !!Ve() && (null == (o = e.config) ? void 0 : o.isInApp), m = e.config || {}, v = m.debugModel, S = m.logEnabled, b = m.disableRecordLog, k = m.remoteConfig, w = m.multilinkTestConfig, D = m.getQuickQueryWaitTime, I = "number" === a(D) && D > 0;
_({
isInMultilinkTest: (null == w ? void 0 : w.enable) && (null == (i = je.multilinkTest) ? void 0 : i.runtime),
isInApp: !!f,
debugModel: !!v,
logEnabled: !!S,
isSendSDKLog: !b,
quickAppAllowToSendEvents: !I
}), Fe() ? (je.allowToSendEvents(I, D), je.sdkInitData().then(function(e) {
return T(e);
})) : "promise" === a(je.sdkInitData) ? je.sdkInitData.then(function(e) {
return T(e);
}) : Promise.resolve(je.sdkInitData).then(function(e) {
return T(e);
});
}
}
function T(t) {
var n = Object.assign(t, g);
je.init({
reportData: n
}), f && "function" == typeof je.initNativeApp && je.initNativeApp(), Ue() ? Re.$on("ready_to_create_distinct", function() {
ee(k, je.abtest, 440107), x(), "function" == typeof je.shouldSkipStartSetting && je.shouldSkipStartSetting(e) || h();
}) : (ee(k, je.abtest, 440107), x(), "function" == typeof je.shouldSkipStartSetting && je.shouldSkipStartSetting(e) || h()), 
F(), Ve() && ee(w, je.multilinkTest), Z();
}
function x() {
ht = e, Re.$emit("isReady", e);
}
},
ready: function(e) {
if ("function" == typeof e) return ht ? e.call(this, ht) : void Re.$on("isReady", function(t) {
return e(t);
});
},
use: function(e) {
if ("function" != typeof (null == e ? void 0 : e.init)) return c(!1, 440109);
if (e.env !== Ge()) return c(!1, 440126);
var t = v("reportData.properties._lib_version");
if (e.version !== t) return c(!1, 440127, {
"{#1}": e.version,
"{#2}": t
});
e.init(je);
}
}, wt = {
login: function(e) {
d("login", e), _({
"reportData._account_id": e
}), je.Storage.setItem("_account_id", e);
},
getAccountId: function() {
var e = v("reportData");
return null == e ? void 0 : e._account_id;
},
logout: function() {
_({
"reportData._account_id": ""
}), je.Storage.deleteItem("_account_id");
}
}, Dt = {
setVisitorId: function(e) {
d("setVisitorId", e), _({
"reportData._visitor_id": e
}), je.Storage.setItem("_visitor_id", e);
},
getVisitorId: function() {
var e = v("reportData");
return null == e ? void 0 : e._visitor_id;
}
}, It = {
setSuperProperties: function(e) {
d("setSuperProperties", e), p(e) && te("all", e);
},
unsetSuperProperty: function(e) {
d("unsetSuperProperty", e), te(e, "", !0);
},
clearSuperProperties: function() {
_({
"externalReportData.superProperties": {}
}), je.Storage.deleteItem("superProperties");
}
}, Tt = [ "appInstall", "appStart", "appEnd", "all" ], xt = {
setPresetEvent: function(e, t) {
var n;
d("setPresetEvent", e, t);
var o = Number(Ge()), i = Ze[o].replace("_", "");
if (e = null == (n = e) || null == (n = n.replace(/(mp|web)Install/, Tt[0])) ? void 0 : n.replace(/(mp|web)Start/, Tt[1]), 
Ve() && Tt.includes("appEnd") && Tt.splice(2, 1), !Tt.includes(e)) return c(!1, 440122, {
"{#1}": Tt.map(function(e) {
return e.replace("app", i);
}).slice(0, Tt.length - 1).join(",")
});
t ? p(t) && ne(e, t) : ne(e, null);
}
}, Pt = {
eventStart: oe,
eventFinish: ie
}, At = !1;
je.extend({
trackAppInstall: function() {
if (!At) {
var e = N("_appInstall"), t = "" + He + e;
je.Storage.getItem(t) || (At = !0, B("_appInstall", {}, v("externalReportData").appInstall, {
_event_type: 1
}));
}
},
trackAppStart: function(e) {
void 0 === e && (e = {}), oe("_appEnd", !1), B("_appStart", e, v("externalReportData").appStart, {
_event_type: 1
});
},
trackAppEnd: re
});
var Et = [ "userDeleteByAccountId", "userDeleteByVisitorId" ], Lt = o({}, kt, wt, Dt, It, xt, {
trackAppEnd: re
}, Pt, {
track: function(e, t) {
void 0 === t && (t = {}), d("track", e, t), p(t) && w(function() {
B(e, {}, t, {
_event_type: 4
});
});
}
}, {
trackAdImpression: function(e) {
d("trackAdImpression", e);
var t = P([ "adNetworkPlatform", "adType", "adNetworkAppID", "adId", "mediationPlatform", "ecpm", "currency", "rendered" ], e);
B("_appImp", t.properties, t.customProperties);
},
trackAdClick: function(e) {
d("trackAdClick", e);
var t = P([ "adNetworkPlatform", "mediationPlatform", "adType", "adId" ], e);
B("_appClick", t.properties, t.customProperties);
},
trackIAP: function(e) {
d("trackIAP", e);
var t = P([ "orderId", "payAmount", "currencyType", "payType", "productID", "productName", "productCount", "payStatus", "failReason" ], e), n = t.properties, o = t.customProperties;
"function" == typeof je.checkTencentEvents ? je.checkTencentEvents(e, n, "_mpPur").then(function(e) {
B("_appPur", n, o);
}) : B("_appPur", n, o);
},
trackAppAttr: function(e) {
d("trackAppAttr", e);
var t = P([ "adNetwork", "subChannel", "adAccountID", "adAccountName", "adCampaignID", "adCampaignName", "adOfferID", "adOfferName", "adCreativeID", "adCreativeName", "attributionPlatform" ], e);
B("_appAttr", t.properties, t.customProperties);
},
trackOrder: function(e) {
d("trackOrder", e);
var t = P([ "orderId", "payAmount", "currencyType", "payType", "status" ], e);
B("_appOrder", t.properties, t.customProperties);
},
trackRegister: function(e) {
d("trackRegister", e);
var t = P([ "regType", "registerStatus" ], e), n = t.properties, o = t.customProperties;
"function" == typeof je.checkTencentEvents ? je.checkTencentEvents(e, n, "_mpReg").then(function(e) {
B("_appReg", n, o);
}) : B("_appReg", n, o);
},
trackLogin: function(e) {
d("trackLogin", e);
var t = P([ "loginType", "loginStatus" ], e);
B("_appLogin", t.properties, t.customProperties);
}
}, {
userInit: function(e) {
ae("userInit", e);
},
userUpdate: function(e) {
ae("userUpdate", e);
},
userAdd: function(e) {
ae("userAdd", e);
},
userUnset: function(e) {
var t = {};
Array.isArray(e) && e.forEach(function(e) {
t[e] = "";
}), ae("userUnset", t);
},
userAppend: function(e) {
ae("userAppend", e);
},
userDelete: function(e) {
if (!Et.includes(e)) return c(!1, 440117, {
"{#1}": Et.join(" or ")
});
ae(e);
}
}, {
setChannel: function(e) {
d("setChannel", e), _({
"reportData.properties._channel": e
});
},
setReferrerTitle: function(e) {
d("setReferrerTitle", e), _({
"reportData.properties._referrer_title": e
});
},
listenErrorMessage: function(e) {
Re.$on("assertMsg", e);
}
}), Ct = o({
version: "1.3.5"
}, Lt);
je.extend({
NATIVE: Ct
});
var Ot = {
identifier: "undefined" != typeof wx && wx,
mpType: "wechat"
}, jt = Ot.mpType, Rt = 1e3, Nt = "undefined" == typeof App, Mt = "kwai" === jt, Gt = Ot.identifier || {}, Ut = {
mpType: jt
}, Vt = [ "_openid", "_unionid", "_launch_scene", "_path", "_query_info", "_referrer_info" ], Ft = je.createStorageKey, qt = {
setItem: function(e, t, n, o) {
void 0 === o && (o = !1), t = je.valueToStr(t);
try {
var i = null == Gt.getStorageInfoSync ? void 0 : Gt.getStorageInfoSync();
if (i && "number" == typeof i.limitSize && "number" == typeof i.currentSize) {
var r = 1024 * (i.limitSize - i.currentSize - 24);
if (je.isValueExceedLimit(t) || je.valueToStr(t).length > r) return "function" === je.getType(n) && n(), 
!o && de(e), je.assert(!1, 440123);
} else if (je.isValueExceedLimit(t)) return "function" === je.getType(n) && n(), 
!o && de(e), je.assert(!1, 440123);
} catch (t) {
return !o && de(e), je.assert(!1, 440124, {
"{#1}": t
});
}
null == Gt.setStorageSync || Gt.setStorageSync(Ft(e), t);
},
getItem: function(e, t, n) {
void 0 === t && (t = !1), void 0 === n && (n = {});
var o = null == Gt.getStorageSync ? void 0 : Gt.getStorageSync(Ft(e));
"" === o && (o = null);
var i = o;
if (t) try {
i = JSON.parse(o) || n;
} catch (e) {
i = n;
}
return i;
},
deleteItem: function(e) {
null == Gt.removeStorageSync || Gt.removeStorageSync(Ft(e));
},
clear: function() {
null == Gt.clearStorage || Gt.clearStorage();
}
};
je.extend({
Storage: qt
}), je.extend({
requestHandle: function(e, t) {
return new Promise(function(n, o) {
var i = "get" === e.method ? e.params : e.data, r = /^https?:\/\//.test(e.url) ? e.url : "https:" + e.url, a = pe({}, (null == t ? void 0 : t.headers) || {}), s = null == je.getStateData ? void 0 : je.getStateData("reportData.properties._mp_type");
"post" !== e.method || "tiktok" !== s || a["Content-Type"] || a["content-type"] || (a["Content-Type"] = "application/json");
var c = "post" !== e.method || "tiktok" !== s || "application/json" !== a["Content-Type"] && "application/json" !== a["content-type"] ? i : JSON.stringify(i), u = {
url: r,
method: e.method.toUpperCase(),
data: c,
timeout: t.timeout || 6e4,
success: function(e) {
ge(u.url, c, e);
var t = (null == e ? void 0 : e.data) || {};
n(t);
},
fail: function(e, t) {
var n = function(e) {
if ("string" == typeof e) return e;
try {
return JSON.stringify(e);
} catch (t) {
return String(e);
}
}(e);
null != je.getStateData && je.getStateData("logEnabled") && (u.url, u.method), o(e), 
je.assert && je.assert(!1, 440108, {
"{#1}": "code = " + t + " data = " + n
});
}
};
Object.keys(a).length && (u.header = a), null == Gt.request || Gt.request(u);
});
}
});
var Ht = {
setXcxPageTitle: function(e) {
if (je.checkLogEnabled("setXcxPageTitle", e), !e || "string" != typeof e || !je.trimStr(e)) return je.assert(!1, 440105);
je.setStateData({
"reportData.properties._page_title": e
});
},
getDistinct: function() {
return new Promise(function(e) {
var t = !1, n = je.Storage.getItem("_distinct", !0, null);
null != n && n.id ? (t = !0, e({
result: {
distinct_id: n.id,
distinct_id_type: n.type
}
})) : je.customEvents.$on("ready_to_create_distinct", function() {
t = !0;
var n = je.getDistinctId();
e({
result: {
distinct_id: n.id,
distinct_id_type: n.type
}
});
}), setTimeout(function() {
t || e({
msg: "failed to get distinct",
result: null
});
}, 1e3 * je.settingData.distinctWaitTime);
});
},
setOnAttributionListener: function() {
return _e(!0);
},
getAttribution: function() {
return _e(!1);
},
setPluginProperties: function(e) {
if ("[object Object]" === Object.prototype.toString.call(e)) {
var t = je.getStateData("pluginProperties");
je.setStateData({
pluginProperties: Object.assign({}, t, e)
});
}
}
}, Kt = {
config: {},
customConfig: []
}, zt = {
trackPageView: function(e, t) {
if (void 0 === e && (e = !1), void 0 === t && (t = {}), je.checkObject(t)) {
var n = ye();
(e || !Kt.config.autoTrackPageView || n.ignoreTrack) && je.trackEvent("_mpViewScreen", {}, t, {
_event_type: e ? 2 : 3
});
}
},
setTrackPageView: function(e) {
if (je.checkLogEnabled("setTrackPageView", e), !Array.isArray(e) || e.filter(function(e) {
return !je.isObject(e);
}).length) return je.assert(!1, 440116);
Kt.customConfig = e;
},
setAutoTrack: function(e) {
je.checkLogEnabled("setAutoTrack", e), je.checkObject(e) && ("boolean" == typeof e.autoTrack && (Kt.config.autoTrackPageView = e.autoTrack, 
Kt.config.autoTrackPageClick = e.autoTrack), "boolean" == typeof e.autoTrackPageView && ("boolean" == typeof e.autoTrack ? Kt.config.autoTrackPageView = e.autoTrack && e.autoTrackPageView : Kt.config.autoTrackPageView = e.autoTrackPageView), 
"boolean" == typeof e.autoTrackPageClick && ("boolean" == typeof e.autoTrack ? Kt.config.autoTrackPageClick = e.autoTrack && e.autoTrackPageClick : Kt.config.autoTrackPageClick = e.autoTrackPageClick));
},
trackPageClick: function(e, t) {
void 0 === t && (t = !1);
var n = null == e ? void 0 : e.currentTarget;
if (!n) return je.assert(!1, 440102);
var o = n.dataset || {}, i = ye();
if (t || !Kt.config.allowTrackPageClick || i.ignoreTrack || "true" === o.ignoreTrack) {
var r = je.stringLikeJsonToObject(null == o ? void 0 : o.customProperty), a = {};
a._element_id = o.elementId || n.id, a._element_content = o.content, a._element_name = o.name, 
a._element_class_name = o.className, a._element_type = o.type, a._element_target_url = o.targetUrl, 
je.trackEvent("_mpElementClick", a, r, {
_event_type: t ? 2 : 3
});
}
}
}, Bt = console, Wt = null, $t = !1, Jt = 3, Yt = [ [ "trackReActive", [ "backFlowDay" ], "_mpReActive" ], [ "trackAddToWishlist", [ "addToWishlistType" ], "_mpAddToWishlist" ], [ "trackShare", [ "mpShareTarget" ], "_mpShare" ], [ "trackCreateRole", [ "mpRoleName" ], "_mpCreateRole" ], [ "trackTutorialFinish", [], "_mpTutorialFinish" ], [ "trackUpdateLevel", [ "beforeUpgrade", "afterUpgrade" ], "_mpUpdateLevel" ], [ "trackViewContentMall", [], "_mpViewContentMall" ], [ "trackViewContentActivity", [], "_mpViewContentActivity" ] ].reduce(function(e, t) {
return e[t[0]] = function(e) {
je.checkLogEnabled(t[0], e);
var n = t[1], o = je.getPredefineEventFormattedData(n, e), i = o.properties, r = o.customProperties;
De(e, i, t[2], r).then(function(e) {
je.trackEvent(t[2], i, r);
});
}, e;
}, {}), Xt = pe({}, Ht);
Xt = Nt ? Object.assign(Xt, pe({}, Yt)) : Object.assign(Xt, pe({}, zt)), je.NATIVE = Object.assign(je.NATIVE, Xt);
var Qt, Zt, en = {
data: 1,
onLoad: 1,
onShow: 1,
onReady: 1,
onPullDownRefresh: 1,
onShareAppMessage: 1,
onShareTimeline: 1,
onReachBottom: 1,
onPageScroll: 1,
onResize: 1,
onTabItemTap: 1,
onHide: 1,
onUnload: 1,
onRouteDone: 1
}, tn = {
onLaunch: function(e) {
je.trackAppInstall(), je.NATIVE.ready(function(e) {
!function(e) {
var t, n = (null == e || null == (t = e.config) ? void 0 : t.autoTrackConfig) || {}, o = n.autoTrack && n.autoTrackPageView, i = n.autoTrack && n.autoTrackPageClick;
Kt.config = {
autoTrackPageView: o,
autoTrackPageClick: i
};
}(e);
});
},
onShow: function(e) {
le(), je.trackAppStart();
},
onHide: function(e) {
je.trackAppEnd();
}
}, nn = {
onLoad: function() {},
onShow: function() {
var e, t, n;
n = getCurrentPages(), je.setStateData({
"reportData.properties._page_name": (null == (e = n[n.length - 1]) ? void 0 : e.route) || ""
}), n.length > 1 && je.setStateData({
"reportData.properties._referrer_name": (null == (t = n[n.length - 2]) ? void 0 : t.route) || ""
}), je.NATIVE.ready(function(e) {
!function() {
var e = Kt.config.autoTrackPageView, t = ye();
if (e && !t.ignoreTrack) {
var n = je.filterCustomProperties(t.customProperty || {});
zt.trackPageView(!0, n);
}
}();
});
},
onReady: function() {},
onHide: function() {},
onUnload: function() {}
}, on = null;
je.setStateData({
systemEnv: 1
}), Nt ? (je.trackAppInstall(), null == Gt.onShow || Gt.onShow(function() {
Pe();
}), void 0 !== (null == globalThis ? void 0 : globalThis.CocosEngine) && Pe(), null == Gt.onHide || Gt.onHide(function() {
je.trackAppEnd();
})) : function() {
var e, t, n;
e = App, App = function(t) {
t.SESDK = je.NATIVE, xe(t, "onShow", tn.onShow), xe(t, "onHide", tn.onHide), xe(t, "onLaunch", tn.onLaunch), 
e(t);
}, t = Page, Page = function(e) {
e || (e = {});
try {
je.customEvents.$on("xcx_proxy_click", function() {
Ie(e);
});
} catch (e) {
console.error("proxy event failed");
}
xe(e, "onLoad", nn.onLoad), xe(e, "onShow", nn.onShow), xe(e, "onReady", nn.onReady), 
xe(e, "onHide", nn.onHide), xe(e, "onUnload", nn.onUnload), t(e);
}, n = Component, Component = function(e) {
e || (e = {}), e.methods || (e.methods = {}), je.customEvents.$on("xcx_proxy_click", function() {
Ie(e.methods);
}), xe(e.methods, "onLoad", function(e) {
var t;
null == (t = getCurrentPages()) || t[0];
}), xe(e.methods, "onShow", nn.onShow), n(e);
};
}(), je.extend({
sdkInitData: (Qt = {
_uuid: se()
}, Zt = function() {
var e, t = je.Storage.getItem("_system_info", !0);
return null != (e = t) && e._app_version || (t = Ee(), je.Storage.setItem("_system_info", t)), 
t;
}(), Zt._mp_type = Ut.mpType, new Promise(function(e) {
Le().then(function(t) {
var n = Object.assign(Zt, t);
new Promise(function(e) {
Gt.getRendererUserAgent ? Gt.getRendererUserAgent().then(function(t) {
return e(t);
}).catch(function() {
return e("");
}) : e("");
}).then(function(t) {
Qt._ua = t, Qt.properties = n, Qt.properties._lib = Nt ? 5 : 4, e(Qt);
});
});
})),
getOpenId: function(e) {
!function(e, t) {
var n = e.openid, o = e.unionid, i = void 0 === o ? "" : o;
if (je.setStateData({
"reportData.properties._openid_type": n ? "0" : "1",
"reportData.properties._unionid": i
}), n) je.setStateData({
isHasOpenId: !0,
"reportData.properties._openid": n
}), Se(n), ve(); else {
var r = je.Storage.getItem("_login_info", !0, {}) || {}, a = r.openid, s = r.unionid;
if (a) return je.setStateData({
isHasOpenId: !0,
"reportData.properties._openid": a,
"reportData.properties._unionid": i || s
}), Se(a), ve();
Ce(e.appKey, t, function(e) {
var t = e || {}, n = t.openid, o = void 0 === n ? "" : n, r = t.unionid, a = void 0 === r ? "" : r;
o && je.Storage.setItem("_login_info", {
openid: o,
unionid: a
}), je.setStateData({
isHasOpenId: !0,
"reportData.properties._openid": o,
"reportData.properties._unionid": i || a
}), Se(o, i || a), ve(), je.postEvent();
});
}
}(e, Ut.mpType);
},
somePrevInit: function(e) {
!function(e) {
var t = e.config || {}, n = t.tencentAdvertisingGameSDKInitParams, o = t.isInitTencentAdvertisingGameSDK, i = t.debugModel, r = t.reportingToTencentSdk, a = t.tencentAdvertisingGameSDK, s = t.tencentSdkIsAutoTrack;
if ($t = !!o, [ 1, 2, 3 ].includes(r) && (Jt = r), $t) {
if (!a) return $t = !1, je.assert(!1, 440668);
i && a.setDebug(!0);
var c = n || {}, u = c.user_action_set_id, l = c.secret_key, d = c.appid;
if (!u || !l || !d) return $t = !1, je.assert(!1, 440667);
Wt = new a({
user_action_set_id: u,
secret_key: l,
appid: d,
auto_track: !1 !== s
}), 2 !== Jt && _e(!1).then(function() {});
}
}(e);
},
checkTencentEvents: De,
getDistinctId: Ae,
getEnvVersion: function() {
return "undefined" != typeof __wxConfig && __wxConfig.envVersion || "";
},
setXcxEventData: function(e) {
!function(e, t) {
if (e._distinct_id = t.id, e._distinct_id_type = t.type, e._uuid = je.getStateData("reportData._uuid") || se(), 
"userset" !== e._type && Vt.forEach(function(t) {
e.properties[t] = je.getStateData("reportData.properties." + t);
}), Nt) {
var n = je.getStateData("pluginProperties");
Object.keys(n).forEach(function(t) {
e.properties[t] = n[t];
});
}
}(e, Ae());
}
}), Nt && (je.NATIVE.getTencentAdvertisingGameSDK = function() {
return $t ? Wt : null;
});
var rn = je.NATIVE;
window.sesdk = rn;
}
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ]
}, {}, [ "3DCamera", "Entry", "MyLog", "alertPanel", "dm_tt_mg.min", "dm_wxmg.min", "miniwx-cn-sesdk-es" ]);