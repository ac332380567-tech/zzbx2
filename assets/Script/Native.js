var native = cc.native || {};

native.callJs = function(e) {
window.GameLogic && window.GameLogic.callJs ? window.GameLogic.callJs(e) : console.log("callJs: can't find handler func!!");
};

native.callJsSys = function(e) {
console.log("callJsSys: ", e);
var o = JSON.parse(e), i = o.msg;
if ("exitGame" == i) {
o.args.success && cc.game.end();
} else if ("logout" == i) {
window.GameLogic.logoutPositive && window.GameLogic.logoutPositive();
cc.audioEngine.stopAll();
cc.game.restart();
} else if ("onBackPressed" == i) {
var n = window.GameLogic.getChannel();
if ("td_openew_xianfeng" == n) {
let e = {
msg: "exitGame",
args: {}
};
this.callNative(JSON.stringify(e));
} else if ("td_openew_aborad" == n || "td_openew_jp" == n) {
if (window.GameLogic.onKeyDown(cc.macro.KEY.back)) {
console.log("========= onKeyDown onBackPressed by td_openew_aborad");
return;
}
} else {
if (window.GameLogic.onKeyDown(cc.macro.KEY.back)) {
console.log("========= onKeyDown logic prevent handle ");
return;
}
let e = {
msg: "exitGame",
args: {}
};
this.callNative(JSON.stringify(e));
}
}
};

native.callNative = function(e) {
console.log("callNative: ", e);
if (!cc.sys.isNative) return !1;
if (cc.sys.platform == cc.sys.WECHAT_GAME) return !1;
if (cc.sys.os == cc.sys.OS_ANDROID) return jsb.reflection.callStaticMethod("com/openew/game/utils/NativeCall", "callNative", "(Ljava/lang/String;)Z", e);
if (cc.sys.os == cc.sys.OS_IOS) return jsb.reflection.callStaticMethod("AppController", "callNative:", e);
if (cc.sys.os == cc.sys.OS_WINDOWS) return jsb.NativeCall.callNative(e);
console.error("didn't support platform other than Android or iOS!");
return !1;
};

native.callNoVarsFunc = function(e) {
if (!cc.sys.isNative) return !1;
if (cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.OS_WINDOWS) return !1;
if (cc.sys.os == cc.sys.OS_ANDROID) return jsb.reflection.callStaticMethod("com/openew/game/utils/NativeCall", e, "()Ljava/lang/String;");
if (cc.sys.os == cc.sys.OS_IOS) return jsb.reflection.callStaticMethod("AppController", e);
console.error("didn't support platform other than Android or iOS!");
return !1;
};

native.registerSystemEvent = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};

native.onKeyDown = function(e) {
console.log("========= onKeyDown: ", e.keyCode);
if (window.GameLogic.onKeyDown(e.keyCode)) console.log("========= onKeyDown logic prevent handle "); else switch (e.keyCode) {
case cc.macro.KEY.back:
{
let e = {
msg: "exitGame",
args: {}
};
this.callNative(JSON.stringify(e));
break;
}
}
};

window.GameLogic || (window.GameLogic = {});

window.GameLogic.callNative = native.callNative;

window.GameLogic.callNoVarsFunc = native.callNoVarsFunc;

native.registerSystemEvent();

cc.native = native;

var proto = cc.Pipeline.prototype;

proto.removePipe = function(e) {
console.log("removePipe prepare pipes: ");
for (var o = 0; o < this._pipes.length; ++o) this._pipes[o].next ? console.log("   ", this._pipes[o].id, this._pipes[o].next.id) : console.log("   ", this._pipes[o].id);
var i = this._pipes.indexOf(e);
if (i < 0) console.log("cannot find pipe to remove", e); else {
var n = null;
i < this._pipes.length - 1 && (n = this._pipes[i + 1]);
var s = null;
i > 0 && (s = this._pipes[i - 1]);
s && (s.next = n);
this._pipes.splice(i, 1);
console.log("removePipe done, now pipes: ");
o = 0;
for (;o < this._pipes.length; ++o) this._pipes[o].next ? console.log("   ", this._pipes[o].id, this._pipes[o].next.id) : console.log("   ", this._pipes[o].id);
}
};