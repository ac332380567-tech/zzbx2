(function(e) {
"use strict";
var t = e.cc;
t.log("k-cocos v0.1");
t.director._kSpeed = 1;
var i = t.Director.prototype.calculateDeltaTime;
t.director.calculateDeltaTime = function(e) {
i.call(this, e);
this._deltaTime *= this._kSpeed;
};
t.kSpeed = function(e) {
t.director._kSpeed = e;
};
t.kGetSpeed = function() {
return t.director._kSpeed;
};
t.kMultTouch = function(e) {
if (t.internal && t.internal.inputManager) t.internal.inputManager._maxTouches = e; else {
_cc && _cc.inputManager && (_cc.inputManager._maxTouches = e);
CC_QQPLAY && BK && BK.inputManager && (BK.inputManager._maxTouches = e);
}
};
t.kSimpleMove = t.Class({
name: "cc_kSimpleMove",
extends: t.Component,
properties: {
speed_x: 0,
speed_y: 0,
accelerate_x: 0,
accelerate_y: 0,
hasAim: !1,
aimPos_x: 0,
aimPos_y: 0
},
editor: {
executionOrder: 9999
},
getMoveSpeed: function() {
return new t.Vec2(this.speed_x, this.speed_y);
},
setMoveSpeed: function(e, t) {
if (e && "object" == typeof e) {
this.speed_x = e.x || 0;
this.speed_y = e.y || 0;
} else {
this.speed_x = e || 0;
this.speed_y = t || 0;
}
},
getAccelerate: function() {
return new t.Vec2(this.accelerate_x, this.accelerate_y);
},
setAccelerate: function(e, t) {
if (e && "object" == typeof e) {
this.accelerate_x = e.x || 0;
this.accelerate_y = e.y || 0;
} else {
this.accelerate_x = e || 0;
this.accelerate_y = t || 0;
}
},
setDestination: function(e, t, i) {
this.aimPos_x = e.x || 0;
this.aimPos_y = e.y || 0;
t = t || 0;
i = i || 0;
var s = this.aimPos_x - this.node.x, n = this.aimPos_y - this.node.y, a = Math.sqrt(s * s + n * n), r = s / a, h = n / a;
this.setMoveSpeed(t * r, t * h);
this.setAccelerate(i * r, i * h);
this.hasAim = !0;
},
update: function(e) {
this.speed_x += this.accelerate_x;
this.speed_y += this.accelerate_y;
if (this.hasAim) {
var t = this.aimPos_x > this.node.x ? 1 : -1, i = this.aimPos_y > this.node.y ? 1 : -1;
this.node.x += this.speed_x * e;
this.node.y += this.speed_y * e;
var s = this.aimPos_x > this.node.x ? 1 : -1, n = this.aimPos_y > this.node.y ? 1 : -1;
if (t * s < 0 || i * n < 0) {
this.hasAim = !1;
this.node.x = this.aimPos_x;
this.node.y = this.aimPos_y;
this.setAccelerate(0, 0);
this.setMoveSpeed(0, 0);
}
} else {
this.node.x += this.speed_x * e;
this.node.y += this.speed_y * e;
}
}
});
t.kNode = function(e) {
e.kTag = 0;
e.kInfo = "init";
e._kState = "init";
Object.defineProperties(e, {
kState: {
get() {
return this._kState;
},
set(e) {
var t = this._kState;
this._kState = e;
this.kStateCb && this.kStateCb(e, t);
}
},
kComponents: {
get() {
return this._components;
},
set(e) {
t.error("can not set kComponents, please use addComponent()");
}
},
kFirstChild: {
get() {
return this.children[0];
},
set(e) {
t.error("can not set kFirstChild, please use addChild()");
}
},
kSecondChild: {
get() {
return this.children[1];
},
set(e) {
t.error("can not set kSecondChild, please use addChild()");
}
},
kThirdChild: {
get() {
return this.children[2];
},
set(e) {
t.error("can not set kThirdChild, please use addChild()");
}
},
kLastChild: {
get() {
return this.children[this.childrenCount - 1];
},
set(e) {
t.error("can not set kFirstChild, please use addChild()");
}
}
});
e.kHitTest = function(e) {
this._hitTest = e;
};
return e;
};
})(window);