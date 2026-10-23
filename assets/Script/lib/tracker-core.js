(function() {
var t = {}, r = x;
(function(t, r) {
for (var e = 859, n = 728, i = 300, a = 1173, s = 503, o = 719, u = x, v = P(); ;) try {
if (151170 === parseInt(u(e)) / 1 + parseInt(u(n)) / 2 + -parseInt(u(i)) / 3 * (-parseInt(u(a)) / 4) + parseInt(u(564)) / 5 + parseInt(u(1160)) / 6 + parseInt(u(s)) / 7 + -parseInt(u(o)) / 8 * (parseInt(u(1243)) / 9)) break;
v.push(v.shift());
} catch (t) {
v.push(v.shift());
}
})();
var e, n = typeof globalThis !== r(492) ? globalThis : typeof window !== r(492) ? window : typeof global !== r(492) ? global : typeof self !== r(492) ? self : {}, i = {}, a = {}, s = n && n[r(1105)] || function(t, e, n) {
var i = 948, a = r;
if (n || 2 === arguments[a(957)]) for (var s, o = 0, u = e[a(957)]; o < u; o++) if (s || !(o in e)) {
s || (s = Array[a(i)][a(258)].call(e, 0, o));
s[o] = e[o];
}
return t[a(1302)](s || Array[a(948)][a(258)][a(1162)](e));
};
Object[r(1219)](a, r(1172), {
value: !0
}), a[r(688)] = a[r(873)] = void 0;
(function(t) {
var e = 670, n = 305, i = r;
t[i(1007)] = i(e), t[i(832)] = i(374), t[i(365)] = i(n);
})(e || (a.LogLevel = e = {}));
var o = function() {
var t = 977, n = 527, i = 948, a = 305, o = 332, u = 538, v = 1007, c = 374, f = 650, h = 1302, L = 1302, w = 637, y = 1302, g = 374, l = 726, z = 361, x = 726, M = 361, C = 1302, b = 670, B = 374, H = 957, d = 1080, D = r;
function j() {}
return j.setEnabled = function(t) {
this.enableLog = t;
}, j[D(t)] = function(t) {
this[D(d)] = t;
}, j[D(n)] = function() {
return this[D(1014)];
}, j.slog = function(t) {
for (var r = D, e = [], n = 1; n < arguments[r(H)]; n++) e[n - 1] = arguments[n];
j[r(1014)] && console[r(670)][r(726)](console, s([ t ], e, !1));
}, j.swarn = function(t) {
for (var r = D, e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
j[r(1014)] && console[r(B)][r(726)](console, s([ t ], e, !1));
}, j[D(273)] = function(t) {
for (var r = D, e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
j.flowEnabled && console[r(b)].apply(console, s([ t ], e, !1));
}, j[D(i)].log = function(t) {
for (var r = D, e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
j.enableLog && console[r(670)][r(x)](console, s([ ""[r(1302)](j[r(M)], " ")[r(C)](t) ], e, !1));
}, j[D(i)][D(374)] = function(t) {
for (var r = D, e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
j.enableLog && console[r(g)][r(l)](console, s([ ""[r(1302)](j[r(z)], " ")[r(1302)](t) ], e, !1));
}, j.prototype[D(a)] = function(t) {
for (var r = D, e = [], n = 1; n < arguments[r(957)]; n++) e[n - 1] = arguments[n];
console[r(305)][r(726)](console, s([ ""[r(y)](j.PREFIX, " ").concat(t) ], e, !1));
}, j.prototype[D(538)] = function(t, r) {
var e = D, n = new Date()[e(f)]();
return ""[e(h)](j[e(361)], " [")[e(L)](t[e(w)](), e(587))[e(1302)](n, "] ").concat(r);
}, j[D(948)][D(352)] = function(t, r) {
for (var n = D, i = [], a = 2; a < arguments[n(957)]; a++) i[a - 2] = arguments[a];
if (j[n(1014)] || t === e.ERROR) {
var o = this[n(u)](t, r);
switch (t) {
case e[n(v)]:
console.log[n(726)](console, s([ o ], i, !1));
break;

case e.WARN:
console[n(c)].apply(console, s([ o ], i, !1));
break;

case e[n(365)]:
console[n(305)].apply(console, s([ o ], i, !1));
}
}
}, j[D(1014)] = !0, j.flowEnabled = !0, j[D(361)] = D(o), j;
}();
a.Logger = o;
var u = {}, v = n && n.__awaiter || function(t, r, e, n) {
var i = 726, a = 590, s = {
_0xbf2676: 357
};
function o(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, u) {
var v = x;
function c(t) {
try {
h(n.next(t));
} catch (t) {
u(t);
}
}
function f(t) {
var r = x;
try {
h(n[r(s._0xbf2676)](t));
} catch (t) {
u(t);
}
}
function h(t) {
var r = x;
t[r(1114)] ? e(t[r(1034)]) : o(t[r(1034)])[r(493)](c, f);
}
h((n = n[v(i)](t, r || []))[v(a)]());
});
}, c = n && n[r(696)] || function(t, e) {
var n, i, a, s = 1247, o = 590, u = 1117, v = 666, c = {
_0x51c608: 1162,
_0x8886b3: 1034,
_0x535fc9: 473,
_0x3edd73: 926,
_0xb3bfea: 473,
_0x49e86a: 1203,
_0x3d5913: 514,
_0x1c1885: 943,
_0x55d912: 1162
}, f = r, h = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, L = Object[f(471)]((typeof Iterator === f(s) ? Iterator : Object).prototype);
return L[f(o)] = w(0), L.throw = w(1), L[f(u)] = w(2), typeof Symbol === f(1247) && (L[Symbol[f(v)]] = function() {
return this;
}), L;
function w(t) {
return function(r) {
return y([ t, r ]);
};
}
function y(r) {
var s = f;
if (n) throw new TypeError("Generator is already executing.");
for (;L && (L = 0, r[0] && (h = 0)), h; ) try {
if (n = 1, i && (a = 2 & r[0] ? i[s(1117)] : r[0] ? i.throw || ((a = i.return) && a[s(c._0x51c608)](i), 
0) : i.next) && !(a = a.call(i, r[1])).done) return a;
(i = 0, a) && (r = [ 2 & r[0], a[s(c._0x8886b3)] ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
h[s(c._0x535fc9)]++;
return {
value: r[1],
done: !1
};

case 5:
h[s(473)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = h.ops[s(c._0x3edd73)](), h[s(943)].pop();
continue;

default:
if (!(a = h[s(943)], a = a.length > 0 && a[a[s(957)] - 1]) && (6 === r[0] || 2 === r[0])) {
h = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
h[s(c._0xb3bfea)] = r[1];
break;
}
if (6 === r[0] && h.label < a[1]) {
h[s(473)] = a[1], a = r;
break;
}
if (a && h[s(c._0x535fc9)] < a[2]) {
h[s(473)] = a[2], h[s(514)][s(c._0x49e86a)](r);
break;
}
a[2] && h[s(c._0x3d5913)].pop();
h[s(c._0x1c1885)][s(c._0x3edd73)]();
continue;
}
r = e[s(c._0x55d912)](t, h);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object[r(1219)](u, "__esModule", {
value: !0
}), u[r(262)] = void 0;
var f = a, h = function() {
var t = 318, e = 1281, n = 871, i = 1119, a = 492, s = 572, o = 1170, u = 871, h = 519, L = 1302, w = 305, y = 492, g = 1119, l = 1052, z = 318, M = 305, C = 770, b = 871, B = 492, H = 572, d = 1052, D = 1052, j = 871, A = 804, p = 572, N = 1052, P = 1197, _ = 305, U = 1302, G = r;
function T() {}
return T[G(948)][G(1197)] = function(t, r) {
var e = G;
try {
var n = T[e(j)] + t, i = JSON[e(A)](r);
"undefined" != typeof cc && cc[e(p)] && cc[e(572)][e(N)] ? cc[e(p)][e(1052)][e(1197)](n, i) : "undefined" != typeof localStorage ? localStorage[e(P)](n, i) : console[e(_)](e(387));
} catch (r) {
console[e(305)]("[HabbyTracker][StorageManager] 保存数据失败: "[e(U)](t), r);
}
}, T.prototype.getItem = function(t) {
var r = G;
try {
var e = T[r(b)] + t, n = null;
typeof cc !== r(B) && cc[r(H)] && cc[r(H)][r(d)] ? n = cc[r(H)][r(D)][r(533)](e) : "undefined" != typeof localStorage && (n = localStorage.getItem(e));
if (n) return JSON[r(1230)](n);
} catch (e) {
console[r(305)]("[HabbyTracker][StorageManager] 读取数据失败: ".concat(t), e);
}
return null;
}, T[G(t)] = function(t) {
var r = G;
try {
var e = this.STORAGE_KEY_PREFIX + t;
"undefined" != typeof cc && cc[r(572)] && cc[r(572)][r(1052)] ? cc[r(572)][r(l)][r(z)](e) : "undefined" != typeof localStorage && localStorage[r(318)](e);
} catch (e) {
console[r(M)](r(C).concat(t), e);
}
}, T[G(713)] = function(t, r) {
return v(this, void 0, void 0, function() {
var e, n, i, a, s = 1119, o = 492, u = 572, v = 1037, h = 519, L = 1302, w = 580, y = 1238, g = 305, l = 1302;
return c(this, function(c) {
var z = x;
try {
e = this[z(s)] + t;
if (typeof cc !== z(o) && cc[z(u)] && cc[z(572)].isNative && typeof jsb !== z(492) && jsb.fileUtils) {
n = jsb.fileUtils[z(382)](), a = (i = n + e).substring(0, i.lastIndexOf("/"));
!jsb[z(327)][z(870)](a) && jsb.fileUtils[z(v)](a);
if (!jsb.fileUtils[z(585)](r, i)) throw new Error(z(w));
f.Logger[z(h)](z(306)[z(L)](i));
return [ 2 ];
}
new T()[z(1197)](z(840) + e, r), f[z(688)][z(519)](z(y)[z(1302)](e));
} catch (r) {
console[z(g)]("[HabbyTracker][StorageManager] 保存文件失败: "[z(l)](t), r);
throw r;
}
return [ 2 ];
});
});
}, T[G(842)] = function(t) {
return v(this, void 0, void 0, function() {
var r, e, n, i, a, s, o = 492, u = 572, v = 739, h = 767, L = 1302, w = 519, y = 688, g = 1302;
return c(this, function(c) {
var l = x;
try {
r = this.PERSISTENT_PATH + t;
return typeof cc !== l(o) && cc[l(u)] && cc[l(u)].isNative && typeof jsb !== l(o) && jsb[l(327)] ? (e = jsb[l(327)].getWritablePath(), 
n = e + r, jsb[l(327)][l(v)](n) ? (i = jsb[l(327)][l(518)](n), f[l(688)][l(519)](l(h)[l(L)](n)), 
[ 2, i || null ]) : (f[l(688)][l(w)]("[HabbyTracker][StorageManager] 文件不存在(Native): ".concat(n)), 
[ 2, null ])) : (a = new T(), (s = a.getItem(l(840) + r)) ? f[l(y)][l(w)]("[HabbyTracker][StorageManager] 文件加载成功(Web): ".concat(r)) : f[l(y)].slog(l(1228)[l(g)](r)), 
[ 2, s ]);
} catch (r) {
return console.error(l(1124).concat(t), r), [ 2, null ];
}
return [ 2 ];
});
});
}, T.deleteFile = function(t) {
var r = 1119, e = 492, n = 327, i = 327, a = 622, s = 688, o = 482, u = 688, h = 1012, L = 1302;
return v(this, void 0, void 0, function() {
var v, w, y, g;
return c(this, function(c) {
var l = x;
try {
v = this[l(r)] + t;
if ("undefined" != typeof cc && cc[l(572)] && cc[l(572)][l(1201)] && typeof jsb !== l(e) && jsb.fileUtils) {
w = jsb[l(n)][l(382)](), y = w + v;
if (jsb[l(i)][l(739)](y)) return g = jsb[l(n)][l(a)](y), f[l(s)][l(519)](l(1097)[l(1302)](g ? "成功" : "失败", l(o))[l(1302)](y)), 
[ 2, g ];
}
return this[l(318)]("file_" + v), f[l(u)].slog(l(h)[l(L)](v)), [ 2, !0 ];
} catch (r) {
return console.error("[HabbyTracker][StorageManager] 删除文件失败: ".concat(t), r), [ 2, !1 ];
}
return [ 2 ];
});
});
}, T[G(e)] = function(t) {
var r = 572, e = 327;
return v(this, void 0, void 0, function() {
var n, i, a, s;
return c(this, function(o) {
var u = x;
n = this.PERSISTENT_PATH + t;
return "undefined" != typeof cc && cc[u(r)] && cc[u(572)][u(1201)] && typeof jsb !== u(492) && jsb.fileUtils ? (i = jsb.fileUtils[u(382)](), 
a = i + n, [ 2, jsb[u(e)][u(739)](a) ]) : (s = new T(), [ 2, null !== s[u(533)]("file_" + n) ]);
});
});
}, T.getPersistentDataPath = function() {
var t = G;
return "undefined" != typeof cc && cc.sys && cc[t(572)].isNative && typeof jsb !== t(y) && jsb[t(327)] ? jsb[t(327)][t(382)]() + this[t(1119)] : this[t(g)];
}, T.clearAll = function() {
var t = G;
try {
var r = null;
typeof cc !== t(a) && cc.sys && cc[t(s)].localStorage ? r = cc.sys.localStorage : typeof localStorage !== t(a) && (r = localStorage);
if (r) {
for (var e = [], n = 0; n < r.length; n++) {
var i = r[t(o)](n);
i && i[t(766)](this[t(u)]) && e[t(1203)](i);
}
e[t(1129)](function(e) {
return r[t(318)](e);
}), f[t(688)][t(h)](t(741)[t(L)](e[t(957)], " 条"));
}
} catch (r) {
console[t(w)](t(1008), r);
}
}, T[G(n)] = "habby_tracker_", T[G(i)] = "habby_tracker/", T;
}();
u.StorageManager = h;
var L = {}, w = {}, y = n && n.__assign || function() {
var t = 726, e = 948, n = r;
return (y = Object[n(914)] || function(t) {
for (var r, i = n, a = 1, s = arguments.length; a < s; a++) {
r = arguments[a];
for (var o in r) Object[i(e)].hasOwnProperty[i(1162)](r, o) && (t[o] = r[o]);
}
return t;
})[n(t)](this, arguments);
}, g = n && n.__spreadArray || function(t, e, n) {
var i = 258, a = 1302, s = 1162, o = r;
if (n || 2 === arguments[o(957)]) for (var u, v = 0, c = e.length; v < c; v++) if (u || !(v in e)) {
u || (u = Array[o(948)][o(i)][o(1162)](e, 0, v));
u[v] = e[v];
}
return t[o(a)](u || Array[o(948)][o(258)][o(s)](e));
};
Object[r(1219)](w, "__esModule", {
value: !0
}), w[r(1152)] = function(t, e) {
var n = Date[r(1062)]();
return {
accountID: t,
userID: e || t,
retentionDays: 0,
activeDays: 0,
localActiveDays: 0,
localLastActiveDay: 0,
iapCount: 0,
totalAmount: 0,
videoWatchCount: 0,
chapterProgress: 1,
stageProgress: 1,
userRegisterTimestamp: n,
accountRegisterTime: n,
flags: {},
extendedData: {},
lastUpdateTime: n,
firstLoginTime: n
};
}, w[r(561)] = function(t) {
var e = {
_0x1151ab: 316,
_0x1f3fbb: 875,
_0x429056: 294,
_0x323fe6: 875,
_0x1d6627: 333,
_0xd474b4: 818,
_0x2ea735: 946,
_0x33014c: 784,
_0xa9608: 935,
_0x245a8a: 957,
_0x373c7f: 1101
}, n = r;
if (!t || typeof t !== n(e._0x1151ab)) return !1;
if (typeof t[n(e._0x1f3fbb)] !== n(e._0x429056) || !t[n(e._0x323fe6)]) return !1;
if ("string" != typeof t[n(e._0x1d6627)] || !t.userID) return !1;
for (var i = 0, a = [ "retentionDays", n(843), "localActiveDays", "localLastActiveDay", "iapCount", n(e._0xd474b4), n(e._0x2ea735), "chapterProgress", n(e._0x33014c), n(e._0xa9608), "accountRegisterTime" ]; i < a[n(e._0x245a8a)]; i++) {
var s = a[i];
if (typeof t[s] !== n(1103)) return !1;
}
return !(!t.flags || "object" != typeof t[n(e._0x373c7f)] || !t[n(748)] || typeof t.extendedData !== n(316));
}, w[r(260)] = function(t) {
var e = {
_0x44606c: 1162,
_0xd927a3: 1101,
_0x3a6ed9: 948,
_0x19ca32: 748,
_0x6c4be9: 1231,
_0x7b44c1: 333,
_0x1da1a6: 921,
_0x31fc2c: 784,
_0x168970: 635,
_0x43f68f: 338
}, n = r, i = {};
for (var a in t[n(1101)]) Object.prototype[n(1147)][n(e._0x44606c)](t[n(1101)], a) && (i[a] = t[n(e._0xd927a3)][a]);
var s = {};
for (var a in t.extendedData) if (Object[n(e._0x3a6ed9)][n(1147)][n(1162)](t[n(e._0x19ca32)], a)) {
var o = t.extendedData[a];
null === o || void 0 === o ? s[a] = o : Array[n(e._0x6c4be9)](o) ? s[a] = g([], o, !0) : typeof o === n(316) ? s[a] = y({}, o) : s[a] = o;
}
return {
accountID: t.accountID,
userID: t[n(e._0x7b44c1)],
retentionDays: t.retentionDays,
activeDays: t.activeDays,
localActiveDays: t[n(279)],
localLastActiveDay: t[n(422)],
iapCount: t[n(e._0x1da1a6)],
totalAmount: t[n(818)],
videoWatchCount: t[n(946)],
chapterProgress: t.chapterProgress,
stageProgress: t[n(e._0x31fc2c)],
userRegisterTimestamp: t.userRegisterTimestamp,
accountRegisterTime: t[n(786)],
flags: i,
extendedData: s,
lastUpdateTime: t[n(e._0x168970)],
firstLoginTime: t[n(e._0x43f68f)]
};
};
var l = n && n[r(541)] || function(t, r, e, n) {
function i(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, a) {
var s = {
_0x21dede: 1034
}, o = x;
function u(t) {
try {
c(n.next(t));
} catch (t) {
a(t);
}
}
function v(t) {
try {
c(n.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r = x;
t.done ? e(t[r(s._0x21dede)]) : i(t.value)[r(493)](u, v);
}
c((n = n[o(726)](t, r || []))[o(590)]());
});
}, z = n && n[r(696)] || function(t, e) {
var n, i, a, s = 948, o = 590, u = 357, v = 1117, c = {
_0x1bfb01: 710,
_0x2271de: 1117,
_0xe8797a: 473,
_0x38f145: 473,
_0x4e331b: 926,
_0xe47376: 957,
_0x2464a0: 473,
_0x209444: 473,
_0x17adb5: 1203,
_0x214817: 1162
}, f = r, h = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, L = Object[f(471)]((typeof Iterator === f(1247) ? Iterator : Object)[f(s)]);
return L[f(o)] = w(0), L[f(u)] = w(1), L[f(v)] = w(2), typeof Symbol === f(1247) && (L[Symbol[f(666)]] = function() {
return this;
}), L;
function w(t) {
return function(r) {
return y([ t, r ]);
};
}
function y(r) {
var s = f;
if (n) throw new TypeError(s(c._0x1bfb01));
for (;L && (L = 0, r[0] && (h = 0)), h; ) try {
if (n = 1, i && (a = 2 & r[0] ? i[s(c._0x2271de)] : r[0] ? i[s(357)] || ((a = i.return) && a[s(1162)](i), 
0) : i[s(590)]) && !(a = a[s(1162)](i, r[1])).done) return a;
(i = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
h[s(c._0xe8797a)]++;
return {
value: r[1],
done: !1
};

case 5:
h[s(c._0x38f145)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = h[s(514)].pop(), h[s(943)][s(c._0x4e331b)]();
continue;

default:
if (!(a = h.trys, a = a[s(c._0xe47376)] > 0 && a[a[s(957)] - 1]) && (6 === r[0] || 2 === r[0])) {
h = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
h[s(c._0x2464a0)] = r[1];
break;
}
if (6 === r[0] && h[s(c._0x2464a0)] < a[1]) {
h[s(c._0x209444)] = a[1], a = r;
break;
}
if (a && h[s(c._0x38f145)] < a[2]) {
h.label = a[2], h.ops[s(c._0x17adb5)](r);
break;
}
a[2] && h[s(514)][s(c._0x4e331b)]();
h[s(943)][s(c._0x4e331b)]();
continue;
}
r = e[s(c._0x214817)](t, h);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
function x(t, r) {
t -= 254;
var e = P(), n = e[t];
if (void 0 === x.oTPDfO) {
x.viNIEl = function(t) {
for (var r, e, n = "", i = "", a = 0, s = 0; e = t.charAt(s++); ~e && (r = a % 4 ? 64 * r + e : e, 
a++ % 4) ? n += String.fromCharCode(255 & r >> (-2 * a & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
for (var o = 0, u = n.length; o < u; o++) i += "%" + ("00" + n.charCodeAt(o).toString(16)).slice(-2);
return decodeURIComponent(i);
}, x.NRJSLg = {}, x.oTPDfO = !0;
}
var i = t + e[0], a = x.NRJSLg[i];
return a ? n = a : (n = x.viNIEl(n), x.NRJSLg[i] = n), n;
}
Object[r(1219)](L, "__esModule", {
value: !0
}), L[r(940)] = void 0;
var M = w, C = function() {
var t = 280, e = 948, n = 1054, i = 948, a = 948, s = 1266, o = 863, u = 913, v = 826, c = 826, f = 260, h = 890, L = 913, w = {
_0x28e342: 730,
_0x50fabd: 441,
_0x4782be: 1158,
_0xb391a7: 670
}, y = r;
function g(t, r) {
var e = x;
this[e(1189)] = t, this.logger = r, this.currentProfile = null, this.STORAGE_KEY_PREFIX = e(w._0x28e342), 
this[e(w._0x50fabd)] = e(w._0x4782be), this.logger[e(w._0xb391a7)](e(592));
}
return g[y(1287)] = function(t, r) {
var e = y;
if (!g[e(913)]) {
if (!t || !r) throw new Error(e(h));
g.instance = new g(t, r);
}
return g[e(L)];
}, g.prototype[y(t)] = function(t, r) {
var e = 473, n = 398, i = 670, a = 826, s = 996, o = 431, u = 826, v = 284, c = 1302;
return l(this, void 0, void 0, function() {
var f, h, L;
return z(this, function(w) {
var y = x;
switch (w[y(e)]) {
case 0:
this.logger.log(y(n).concat(t, y(1085)).concat(r || t)), w.label = 1;

case 1:
w.trys[y(1203)]([ 1, 8, , 9 ]);
return [ 4, this[y(827)](t) ];

case 2:
if (!(f = w[y(284)]())) return [ 3, 5 ];
this[y(431)][y(i)]("[UserProfileManager] Loaded existing profile for account: ".concat(t)), 
this[y(a)] = f;
if (!r || r === f[y(333)]) return [ 3, 4 ];
this[y(431)][y(i)](y(s).concat(f[y(333)], " to ")[y(1302)](r)), f.userID = r;
return [ 4, this.saveProfile(f) ];

case 3:
w[y(284)](), w[y(473)] = 4;

case 4:
return [ 3, 7 ];

case 5:
this[y(o)][y(670)](y(1244)[y(1302)](t)), h = (0, M[y(1152)])(t, r);
return [ 4, this.saveProfile(h) ];

case 6:
w[y(284)](), this[y(u)] = h, w[y(473)] = 7;

case 7:
this.storageManager.setItem(this.CURRENT_ACCOUNT_KEY, t);
return [ 2, (0, M.cloneUserProfile)(this[y(u)]) ];

case 8:
L = w[y(v)](), this[y(431)][y(305)](y(566)[y(c)](L));
throw L;

case 9:
return [ 2 ];
}
});
});
}, g[y(e)][y(n)] = function() {
var t = y;
return this[t(c)] ? (0, M[t(f)])(this.currentProfile) : null;
}, g[y(948)][y(563)] = function(t) {
var r = 473, e = 1302, n = 804, i = 473, a = 635, s = 284, o = 284;
return l(this, void 0, void 0, function() {
var u, v;
return z(this, function(c) {
var f = x;
switch (c[f(r)]) {
case 0:
if (!this.currentProfile) throw new Error("[UserProfileManager] No active profile");
this[f(431)].log("[UserProfileManager] Updating profile: "[f(e)](JSON[f(n)](t))), 
c[f(i)] = 1;

case 1:
c.trys.push([ 1, 3, , 4 ]);
for (u in t) this[f(826)][u] = t[u];
this[f(826)][f(a)] = Date[f(1062)]();
return [ 4, this[f(570)](this[f(826)]) ];

case 2:
c[f(s)]();
return [ 3, 4 ];

case 3:
v = c[f(o)](), this.logger.error(f(702)[f(1302)](v));
throw v;

case 4:
return [ 2 ];
}
});
});
}, g[y(948)][y(392)] = function(t, r) {
return l(this, void 0, void 0, function() {
var e, n = 826, i = 431, a = 1302, s = 853, o = 1302, u = 473, v = 826, c = 305;
return z(this, function(f) {
var h = x;
switch (f[h(473)]) {
case 0:
if (!this[h(n)]) throw new Error(h(651));
this[h(i)][h(670)](h(1104)[h(a)](t, h(s))[h(o)](r)), f[h(u)] = 1;

case 1:
f[h(943)].push([ 1, 3, , 4 ]), this[h(826)][h(1101)][t] = r, this[h(n)].lastUpdateTime = Date[h(1062)]();
return [ 4, this[h(570)](this[h(v)]) ];

case 2:
f.sent();
return [ 3, 4 ];

case 3:
e = f.sent(), this[h(431)][h(c)]("[UserProfileManager] Failed to set flag: "[h(o)](e));
throw e;

case 4:
return [ 2 ];
}
});
});
}, g[y(i)].getFlag = function(t) {
var r = y;
return this[r(v)] && this[r(v)].flags[t] || !1;
}, g[y(e)].setExtendedData = function(t, r) {
var e = 826, n = 699, i = 1302, a = 853, s = 804, o = 1203, u = 570, v = 826, c = 284, f = 431, h = 305;
return l(this, void 0, void 0, function() {
var L;
return z(this, function(w) {
var y = x;
switch (w.label) {
case 0:
if (!this[y(e)]) throw new Error(y(651));
this.logger.log(y(n)[y(i)](t, y(a))[y(1302)](JSON[y(s)](r))), w.label = 1;

case 1:
w[y(943)][y(o)]([ 1, 3, , 4 ]), this.currentProfile[y(748)][t] = r, this[y(826)].lastUpdateTime = Date.now();
return [ 4, this[y(u)](this[y(v)]) ];

case 2:
w[y(284)]();
return [ 3, 4 ];

case 3:
L = w[y(c)](), this[y(f)][y(h)]("[UserProfileManager] Failed to set extended data: "[y(1302)](L));
throw L;

case 4:
return [ 2 ];
}
});
});
}, g[y(a)].getExtendedData = function(t) {
var r = y;
if (this[r(826)]) return this[r(826)].extendedData[t];
}, g[y(948)][y(s)] = function(t, r) {
return l(this, void 0, void 0, function() {
var e, n = 1302, i = 473, a = 943, s = 1203, o = 570, u = 473, v = 280, c = 284, f = 431;
return z(this, function(h) {
var L = x;
switch (h[L(473)]) {
case 0:
this[L(431)][L(670)]("[UserProfileManager] Switching to account: "[L(n)](t)), h[L(i)] = 1;

case 1:
h[L(a)][L(s)]([ 1, 5, , 6 ]);
return this[L(826)] ? [ 4, this[L(o)](this.currentProfile) ] : [ 3, 3 ];

case 2:
h.sent(), h[L(u)] = 3;

case 3:
return [ 4, this[L(v)](t, r) ];

case 4:
return [ 2, h[L(c)]() ];

case 5:
e = h[L(284)](), this[L(f)].error(L(1221).concat(e));
throw e;

case 6:
return [ 2 ];
}
});
});
}, g.prototype[y(827)] = function(t) {
var r = 1230, e = 561, n = 431, i = 374, a = 1302, s = 284;
return l(this, void 0, void 0, function() {
var o, u, v, c;
return z(this, function(f) {
var h = x;
switch (f.label) {
case 0:
f[h(943)][h(1203)]([ 0, 2, , 3 ]), o = this[h(871)] + t;
return [ 4, this.storageManager.getItem(o) ];

case 1:
if (!(u = f[h(284)]())) return [ 2, null ];
v = "string" == typeof u ? JSON[h(r)](u) : u;
return (0, M[h(e)])(v) ? [ 2, v ] : (this[h(n)][h(i)](h(801)[h(a)](t)), [ 2, null ]);

case 2:
c = f[h(s)](), this[h(n)][h(305)](h(1178).concat(c));
return [ 2, null ];

case 3:
return [ 2 ];
}
});
});
}, g[y(948)][y(570)] = function(t) {
var r = 943, e = 1203, n = 804, i = 1189, a = 1197, s = 492, o = 863, u = 284, v = 1302, c = 431, f = 305;
return l(this, void 0, void 0, function() {
var h, L, w;
return z(this, function(y) {
var g = x;
switch (y.label) {
case 0:
y[g(r)][g(e)]([ 0, 3, , 4 ]), h = this.STORAGE_KEY_PREFIX + t[g(875)], L = JSON[g(n)](t), 
this[g(i)][g(a)](h, L);
return typeof cc !== g(s) && cc.sys && cc.sys.isNative ? [ 4, this[g(o)](t) ] : [ 3, 2 ];

case 1:
y[g(u)](), y[g(473)] = 2;

case 2:
this[g(431)].log("[UserProfileManager] Profile saved for account: "[g(v)](t[g(875)]));
return [ 3, 4 ];

case 3:
w = y.sent(), this[g(c)][g(f)]("[UserProfileManager] Failed to save profile: "[g(1302)](w));
throw w;

case 4:
return [ 2 ];
}
});
});
}, g[y(948)][y(o)] = function(t) {
var r = 492, e = 382, n = 862, i = 847, a = 885, s = 804, o = 870, u = 327, v = 670, c = 966, f = 1302, h = 431, L = 1142, w = 305;
return l(this, void 0, void 0, function() {
var y, g, l, M, C, b;
return z(this, function(z) {
var B = x;
try {
typeof jsb !== B(r) && jsb[B(327)] && (y = jsb.fileUtils[B(e)](), g = y[B(1079)](/^\/data\/user\/\d+\//, B(n))[B(1079)](/^\/data\/data\//, "/storage/emulated/0/Android/data/"), 
l = (g !== y ? g : y) + B(i), M = "user_profile_"[B(1302)](t[B(875)], B(a)), C = l + M, 
b = JSON[B(s)](t, null, 2), !jsb.fileUtils[B(o)](l) && jsb[B(u)].createDirectory(l), 
jsb[B(u)].writeStringToFile(b, C) && (this.logger[B(v)](B(c)[B(f)](C)), this[B(h)].log(B(L)[B(f)](C))));
} catch (t) {
this[B(h)][B(w)]("[UserProfileManager] 保存调试档案失败: "[B(f)](t));
}
return [ 2 ];
});
});
}, g[y(436)] = function() {
g.instance = null;
}, g[y(u)] = null, g;
}();
L.UserProfileManager = C;
var b, B = {}, H = {}, d = {}, D = {}, j = {};
Object.defineProperty(j, "__esModule", {
value: !0
}), j[r(918)] = void 0;
(function(t) {
var e = 1167, n = 954, i = 423, a = 1145, s = 924, o = 316, u = r;
t[u(1256)] = u(e), t[u(851)] = u(1310), t.Number = u(1103), t[u(n)] = u(294), t[u(i)] = "null", 
t[u(a)] = u(s), t[u(302)] = u(o);
})(b || (j[r(918)] = b = {}));
var A = {};
Object.defineProperty(A, r(1172), {
value: !0
}), A[r(1148)] = A[r(1204)] = A[r(468)] = A[r(684)] = A[r(1233)] = A[r(475)] = A[r(1199)] = A[r(1026)] = void 0;
var p, N = a;
function P() {
var t = [ "Bg9VA3vWvgfIBgvZ", "xsa9ia", "C2HPzNq", "zMXHz3m", "w0XVB2T1CfrHyMXLtwfUywDLCL0Gs2v5ig5VDcbMB3vUzcbPBIbTyxa6ia", "BNvTyMvY", "w1vZzxjqCM9MAwXLtwfUywDLCL0Gu2v0DgLUzYbMBgfNoIa", "x19ZChjLywrbCNjHEq", "w0HHyMj5vhjHy2TLCL0Gq29UzMLNDxjHDgLVBIb1CgrHDguGy29TCgXLDguSihzLCNnPB246ia", "C2v0vMfYAwfIBgvwywX1zq", "x19HC3nPz24", "y2f0y2G", "iIa9ia", "sgfIyNLuCMfJA2vY", "u0vorf9jtLrfuLzbtf9nuW", "Bg9VA3vWuMfUz2u", "zg9Uzq", "w0HHyMj5vhjHy2TLCL1Bsw5JCMvTzw50swzby3rPB25Dia", "AgfUzgXLq29UzMLNrMfPBhvYzq", "CMv0DxjU", "w0nVBMzPz01HBMfNzxjDiezLDgnOAw5NignVBMzPz3vYyxrPB24GzNjVBsbZzxj2zxi6ia", "uevsu0Ltvevovf9qqvri", "zMXVB3i", "DxnLCI5OyxnFChvYy2HHC2u", "4P2mioE9KEE7NoIVT+AXGUwKSEI0PtO", "w0HHyMj5vhjHy2TLCL0GrxzLBNqGChjVy2vZC2LUzYbMywLSzwq6ia", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDiowkOoI9VEAwH+s7TUwKSEI0PtOG", "w0HHyMj5vhjHy2TLCL1BrxzLBNrgB3juAhjLC2HVBgrZqwn0Aw9UxsdKUOVKU7BLKi3MQkhMNB/KUlOGBNvSBc91BMrLzMLUzwtVViZOT7pOV4FVViHWBgf0zM9YBt0", "y3vYCMvUDefJy291BNrjza", "twf0Ac5HyNm", "C2vUzev2zw50C0fZEw5J", "zM9YrwfJAa", "w0nVBMzPz01HBMfNzxjDie5Vihf1zxvLzcbLDMvUDhmGDg8GChjVy2vZCW", "C2v0vg9Rzw4", "w0HHyMj5vhjHy2TLCL1BrxHWCMvZC2LVBKnVBNrLEhrDiezHAwXLzcb0BYbLDMfSDwf0zsb0zw1WBgf0zsbLEhbYzxnZAw9UoIa", "w0HHyMj5vhjHy2TLCLnes10Gu3rHCNrPBMCGu0rlihnODxrKB3DU", "w1bSyxrMB3jTqwrHChrLCL0GrMLYzwjHC2uGywrHChrLCIbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbZzw5Kigv2zw50", "w1bSyxrMB3jTqwrHChrLCL0GqxbWC0zSEwvYigfKyxb0zxiGAw5PDgLHBgL6zwq", "Bg9JywXdB25MAwDqyxrO", "Bwv0Ag9K", "C2v0rMLYzwjHC2vvC2vYuhjVCgvYDhK", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDiowKSEI0PtOG5Q2J5yIz5QcH6AQm5lIn6ycA6l+hlcbZzxj2zxjvCMW9iG", "w1bSyxrMB3jTqwrHChrLCL0GqxbWC0zSEwvYigfKyxb0zxiGBM90igLUAxrPywXPEMvK", "CMfUz2u", "w1vZzxjqCM9MAwXLtwfUywDLCL0G55sO5OI35QgJ5Qgi6lEV5B6eoIa", "zxzHBhvHDgvxAxrOqxn0", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokgKIdLJ5JPH48GiG", "qxjYyxK", "zxzLCNK", "AgfZt3DUuhjVCgvYDhK", "qwn0Aw9Uq2fSBe5Vzgu", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokDJcdKV53LRzJMOiFLV5FKVy3LPlhOTku6ia", "w0HHyMj5vhjHy2TLCL0Gsw5PDgLHBgL6yxrPB24GC3vJy2vZC2z1Ba", "rw5HyMXLza", "y3jLyxrLvxnLCLbYB2zPBgu", "ktOG", "w0HHyMj5vhjHy2TLCL0Gq29UzMLNDxjHDgLVBIb2zxjZAw9UigrPzMzLCNmSihvWzgf0Aw5NoIa", "w0nVBMzPz01HBMfNzxjDifjLC3vTzsbPBNrLCNzHBcbWyxnZzwqSigzLDgnOAw5NigXHDgvZDcbJB25MAwCGzNjVBsbZzxj2zxi", "C3rHDhvZ", "yNvPBhrPBNm", "AgfIyNLFDhjHy2TLCL9JDxjYzw50x2fJy291BNq", "q29UzMLNtwfUywDLCG", "mJe4mdG4u2X5qLDq", "C3bSAwnL", "y2fSBa", "w0H0Dhbnyw5Hz2vYxsbszxf1zxn0igvYCM9YoIa", "z2v0t2XKzxn0rxzLBNruAw1LC3rHBxa", "C3rHz2vFChjVz3jLC3m", "w0v2zw50uxvLDwvDiev2zw50ihf1zxvLzdOG", "yw55", "8j+oRYbBsgfIyNLuCMfJA2vYxvTby3rPB25fEgvJDxrVCL0G5OMN6kgmieftvcbby3rPB246ia", "zxzHBhvHDgvtAw1WBgu", "A2v5", "CYaO", "x19LC01VzhvSzq", "nJqZmNjWCwvnDq", "ywrKuMvXDwvZDeLUDgvYy2vWDg9Y", "ic0+ia", "jwnBsgfIyNLuCMfJA2vYxvTfDMvUDfnLBMrLCIbnAxnZAw5Nxsbbu1qGzhjVChbLzdOG", "w0fWChngBhLLCKfKyxb0zxjDiefWChngBhLLCIbtreSGBM90igzVDw5KlcbLDMvUDhmGD2LSBcbIzsbSB2DNzwqGB25SEq", "w1vZzxjqCM9MAwXLtwfUywDLCL0GrMfPBgvKihrVigXVywqGChjVzMLSztOG", "CgfYC2vbzgrPDgL2zq", "w0H0Dhbnyw5Hz2vYxsa", "DgLTzxn0yw1W", "yM9VBgvHBG", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDicaGiokCHsdLJ5JPH4/MM7/MJAlMIjdLIP86ici", "w0HHyMj5vhjHy2TLCL1BrxzLBNrjzKfJDgLVBL0G5P2H5lU25lI65ygh77Ym6lEZ6l+h5lQl5lU25y+r6ycbicHWBgf0zM9YBt0", "CxvLDwu", "q09orKLhx0nbq0Hfx0vyueLswv9nuW", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokgKIdMOiFLV5FKVy0G", "CMvZB2X2zq", "C3rVCMfNzu1HBMfNzxi", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdLIlFMLRdLKi4GAxndB25MAwDszwfKEt0", "CxvLDwvuAw1LCG", "w0HHyMj5vhjHy2TLCL1BrxzLBNrnDwX0AxbSzufJDgLVBL0G5lQl5lU25zcn5y+c5PwW5lI6ig51BgWVDw5KzwzPBMvKios4LoAxOoAZLEs7JIbbu1qG6i635y+w77Ym6lEZ6l+h5y+r6ycb77YiCgXHDgzVCM09", "DhjHy2TLCG", "AgfUzgXLq29UzMLNu3vJy2vZCW", "oIdLNkJLHOxOGztOOAJKUk3MMkdLSitMN6xMIB4GjW", "w0HHyMj5vhjHy2TLCLnes10GvhjHy2TLCIbPBNn0yw5JzsbJCMvHDgvK", "C2v0sxrLBq", "x190zxjUyxj5x18", "ugfYC2vKrxHWCMvZC2LVBG", "DxnLCI4", "AxnoyxrPDMu", "oIdLNkJLHAJLSydOOAJKUk3MMkdLSitMN6xMIB4GjW", "ChvZAa", "rNvUy3rPB25dywXStM9Kzq", "CNvUt25JzuzSywC", "zgvMyxvSDa", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDioATO+wiMEAGOEMQJoMaMUI/H++8IfvstcbbueKG5lIn5y+V55sO77Yj", "z2v0uNvSzxm", "Bg9VA3vWvgfIBgvnyw5Hz2vY", "yMLUyxj5t3bLCMf0Aw9U", "w0v2zw50qMf0y2HqCM9JzxnZB3jDia", "w0v2zw50uxvLDwvDiezHAwXLzcb0BYbXDwv1zsbLDMvUDdOG", "w0v2zw50qMf0y2HqCM9JzxnZB3jDifbYB2nLC3nPBMCGyMf0y2GGB2yG", "jwnBsgfIyNLuCMfJA2vYxvTbu1qGlt4GrxzLBNrtzw5KzxjDia", "y2XLyxjsDwXLCW", "w0fWChngBhLLCKfKyxb0zxjDiezHAwXLzcb0BYbZzxqGqxbWC0zSEwvYign1C3rVBwvYihvZzxiGsuq", "ksWGyxbWBhLPBMCGBMv3ignVBMzPzW", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0G4PYfifj1BguG", "zgvMAw5LuhjVCgvYDhK", "uNvSzuXVB2T1CfrHyMXLtwfUywDLCG", "w1vZzxjqCM9MAwXLtwfUywDLCL0GrMfPBgvKihrVihn3AxrJAcbHy2nVDw50oIa", "zxzLBNrtzw5Kzxi", "lcbJB25MAwDbChbSAwvKpq", "ywrKAw5NignVDw50zxiG", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0GuNvSzxmGy2XLyxjLza", "w0nVBMzPz01HBMfNzxjDifnLCNzLCIbvuKWGDxbKyxrLzdOG", "twf0Ac5sB3vUza", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDioAwH+s7TUs4JEwTMowCQcHxzwiPoIa", "Dg9tDhjPBMC", "CgfYC2u", "AxnbCNjHEq", "x19LEhbVCNrtDgfY", "vMfYAwfIBgvoB2rL", "zMLYzwjHC2u", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0GuNvSzsa", "zgvJB2rL", "r2XVyMfS", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDioAwH+s7TUs/NEwTMoAiKowkNYHxzwiPoIa", "lcdLROZMLBrLDMvUDerHDge6", "twf0Ac5MBg9VCG", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdKUiVOVB3LIy0GAxndB25MAwDszwfKEt0", "56UGlEESRa", "mJq0otHsywritKq", "w1vZzxjqCM9MAwXLtwfUywDLCL0Gq3jLyxrPBMCGBMv3ihbYB2zPBguGzM9YigfJy291BNq6ia", "CMvZCg9UC2vjBNrLCMnLChrVCNm", "su5jveLbteLAqvrjt05Fq09pterpv05Ftvm", "zNvUy3rPB24", "AxngAxjLyMfZzuf2ywLSywjSzq", "w0nVBMzPz01HBMfNzxjDienVBMzPz3vYyxrPB24Gzgf0ysbPCYbLBxb0Eq", "AgfIyNLFDhjHy2TLCL9JB25MAwDFy2fJAgu", "Aw5PDgLHBgL6zq", "ChjVzMLSzu1HBMfNzxi", "tg9JywWGy29UzMLNDxjHDgLVBIbMAwXLigXVywqGzMfPBgvK", "ChjVzhvJDeLK5lIn6io95lI656M6", "zw5NAw5L", "qw55", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDiow8GowNI+AGOEMQJcWGC2vYDMvYvxjSpsi", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDig5LDYbvuKWOksdOP6pMNPdMIjdLIP8SihnLCNzLCLvYBd0I", "AxnjBML0AwfSAxPLza", "w0HHyMj5vhjHy2TLCLnes10Gt25szxn1BwuGzxHLy3v0Aw9UigzHAwXLzdOG", "rxzLBNrby3rPB25iyw5KBgvY", "icJLJP/LP4S6ici", "ywn0Aw9UCW", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsbvBMTUB3DUihzHCMLHyMXLoIa", "zw50CMLLCW", "C3DPDgnOqwnJB3vUDa", "zxzLBNrnDwX0AxbSzq", "w0HHyMj5vhjHy2TLCLnes10Gu0rligLUAxrPywXPEMf0Aw9UignVBxbSzxrL", "CMvZzxrvC2vYuhjVzMLSzq", "w0HHyMj5vhjHy2TLCL1BrxzLBNrgB3juAhjLC2HVBgrZqwn0Aw9UxsdMO4dMN6xPMiJLGlW6igLZtw9KDwXVrxHWCJ0", "yMfZzvvsta", "z2v0qwn0Aw9UsgfUzgXLCG", "C2v0uMvNAxn0zxjLzev2zw50u2vUzgvY", "C2vYDMvYvxjSigfUzcbNyw1LswqGyxjLihjLCxvPCMvK", "DxnLCI5MBgfNlG", "yMf0y2HuAw1LB3v0txm", "ksa9ia", "iokgKIa", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokgKIdIMQdVUi8G5PYQ55+L5y+y6yEpoIa", "AxnjBKLUAxrPywXPEMf0Aw9Uq29VBgrVD24", "zMLSzuv4Axn0CW", "BwvZC2fNzq", "zw5HyMXLrMLYzwjHC2u", "4P2mioACJEwkOEwzQoI/LowBNUMuMEIVRZO", "CNvSzuLK", "ioAxOoMhJoEOI+EIKEMfJEE9RU+8JoI3S+I/HW", "z2v0sw5ZDgfUy2u", "BxmP", "w0HHyMj5vhjHy2TLCL1BqMfJA2zPBgXtDgfNzuv2zw50C0fJDgLVBL0G5PEG5Rov6kEJ5P6qihrHyMXLtMfTzsdLJ4lMLBdVViZOT7pOV4FLM57LOAS", "Aw5PDgLHBgL6zufWChngBhLLCG", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiev2zw50igrYB3bWzwqGyMvJyxvZzsbUBYbfDMvUDfnLBMrLCIbPCYbYzwDPC3rLCMvKoIa", "Bg9JywXbBw91BNtKUi3OG73KUlROTj/MLBa", "ChjVy2vZC1j1Bgu", "y291BNrYEq", "zw5HyMXLvMvYC2LVBKnOzwnR", "C2H1DgrVD24", "CNvSzu1HBMfNzxi", "w0HHyMj5vhjHy2TLCL1BrxzLBNrnDwX0AxbSzufJDgLVBL0G5y+r6ycb5lQl5lU2ia", "w1bSyxrMB3jTqwrHChrLCL0GrMfPBgvKihrVihnLDcbgAxjLyMfZzsb1C2vYihbYB3bLCNr5oIa", "yxbWC2zSEwvYrgv2s2v5", "w0HHyMj5vhjHy2TLCLnes10Gu0rlihnODxrKB3DUigzHAwXLzdOG", "y29Uy2f0", "y2XLyxjrDwv1zq", "oIdOJipLM7tMN6xMIB7OOAGGjW", "w0HHyMj5vhjHy2TLCL0GqMfZzty0igrLy29KzsbLCNjVCJO", "zxHLy3v0zq", "y29UDgfPBNnuywjSzq", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdLVidLP4VLIlFMLRdPHy3NVA4UlI4", "igv2zw50CYbXDwv1zwqSihf1zxvLihnPEMu6ia", "yM9VBa", "CMv0zw50Aw9Urgf5CW", "u2v0swzby3rPB25iyw5KBgvY", "DMvYC2LVBG", "igLHCenVDw50pq", "z2XVyMfStwfUywDLCG", "Ahr0Ca", "w0HHyMj5vhjHy2TLCKnVCMvDihn5BMnmB2DPBLjLC3bVBNnLoIbUBYbHy3rPDMuGChjVzMLSzq", "w0nVBMrPDgLVBKv2ywX1yxrVCL0Gvw5RBM93BIbLEhbYzxnZAw9UoIa", "revevvbFveHsrvnit0Xex01t", "C2XPy2u", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiezPCMvIyxnLigv2zw50ihnLBNqGDMLHigLUAMvJDgvKihnLBMrLCJOG", "y2XVBMvvC2vYuhjVzMLSzq", "zw5KC1DPDgG", "u3rVCMfNzu1HBMfNzxi", "C2v0vxnLCKLK", "Chv0", "zNvUy3rPB25oyw1L", "C2vUzfrVu2LUz2XLugXHDgzVCM0", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiev4zwn1DgLUzYbHy3rPB246ia", "r0vuihjLCxvLC3qGzMfPBgvK", "y2HHCKf0", "w0nVBMzPz01HBMfNzxjDienVBMzPz3vYyxrPB24GzMv0y2GGzMfPBgvKoIa", "w0v2zw50uxvLDwvDieLUAxrPywXPEMvKihDPDgGGBwf4ihnPEMu6ia", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokCHsdLT7lKV53LRzGG", "zMXVDW", "B25dB25MAwDszwfKEq", "CMv0zw50Aw9Ux2rHExm", "w0HHyMj5vhjHy2TLCLnes10GrMfPBgvKihrVihn3AxrJAcbHy2nVDw50oIa", "w0v2zw50uxvLDwvDiff1zxvLignSzwfYzwqSia", "ChjVzhvJDeLK", "Bg9JywXby3rPDMveyxLZ", "Aw5PDgLHBgL6zvbYB2zPBgu", "zxHLy3v0zufZDefJDgLVBG", "4O+T77IpifTiywjIEvrYywnRzxjDw1j1BgvfBMDPBMvDioINHowiMsa", "ignVBMrPDgLVBNmGBM90ig1LDcWGC2TPChbPBMCGywn0Aw9UCW", "C2vUDa", "lcbJDxjYzw50u3rHz2u9", "w0nVBMzPz01HBMfNzxjDiff1zxvLAw5Nigv2zw50oIa", "w0HHyMj5vhjHy2TLCLnes10Gq29UzMLNDxjHDgLVBIb2zxjZAw9UigLZihrOzsbZyw1LicG", "tufyx1jfvfjzx0fuvevnufrt", "DxjS", "w0HHyMj5vhjHy2TLCL1BrxzLBNrjzKfJDgLVBL0G5y+r6ycb5lQl5lU2oIa", "lcbXDwv1zsbZAxPLoIa", "CgfYC2vbBMq", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0Gtg9HzgvKia", "C3rYAw5N", "rMLYzwjHC2vbzgfWDgvY", "C2vYDMvYvxjS", "BwLU", "icbjCYbfBxb0EtOG", "tMv0D29YAYbYzxf1zxn0igzHAwXLza", "nJLquuvPuve", "w0HHyMj5vhjHy2TLCL1BqMfJA2zPBgXtDgfNzuv2zw50C0fJDgLVBL0G6zYa6kAb6iEZ5BcrnEs4QUwpGUAvSdOGCgXHDgzVCM0Sigv2zw50tMfTzvrLBxbSyxrLlcbJDxjYzw50q2HHChrLCIWGy3vYCMvUDfn0ywDLlcb0ywjSzu5HBwu", "t2jQzwn0", "tufyx1fvrvvfx1njwKu", "yMfZzty0", "zxjYB3i", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDioAwH+s7TUs/NEwTMoAiKowkNYHoyxrPDMuPoIa", "Eg9Yrw5JCNLWDa", "ihj1BgvZ", "zw5HyMXLza", "AxngDwXS", "ChjVy2vZC0v2zw50", "zMXHzY4", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDifnLDfvZzxjqCM9Wzxj0EsbMywLSzwq6ia", "w0H0Dhbnyw5Hz2vYxsbszxf1zxn0ihn1y2nLC3nMDwW6ia", "C3LUy0XVz2LUuMvZCg9UC2u", "B2jQzwn0", "revmrvrfihjLCxvLC3qGzMfPBgvK", "CMvTB3zLsxrLBq", "CgfYyw1LDgvYCW", "zxHLyW", "AxnfBxb0Eq", "w0HHyMj5vhjHy2TLCLnes10Gu0rlihnODxrKB3DUignVBxbSzxrL", "AxngB3jJAw5NqxbWBhK", "w0HHyMj5vhjHy2TLCLnes10Gsufq6lsT5lMW5l+H5OgV5PEG5PwioIa", "zMLSDgvY", "4PQG77IpifTiywjIEvrYywnRzxjDw1zHCMLHyMXLtwfUywDLCL0G55sO5OI35QgJ5Qgi5lI656M677Ym5PEG5Rov6i635y+w5y+y6yEpoIa", "zMLSzvv0AwXZ", "w0fWChngBhLLCKfKyxb0zxjDierLzhvWoIbLDMvUDcaN", "w0fWChngBhLLCKfKyxb0zxjDiezHAwXLzcb0BYbZzxqGqxbWC0zSEwvYigfKzgL0Aw9UywWGzgf0yq", "w0HHyMj5vhjHy2TLCL1Bsw5JCMvTzw50swzby3rPB25DiowpGUAvSoIVPUAdHtO", "Dg9mB3DLCKnHC2u", "w0HHyMj5vhjHy2TLCL0", "DxnLCKLe", "ywn0Aw9UsgfUzgXLCNm", "AxndB25MAwD1CMf0Aw9UuMvHzhK", "Bg9HzenHy2HLzenVBMzPzW", "icbjCYbgDwXSoIa", "zMLYC3rmB2DPBLrPBwu", "y29UzMLNu2vYDMvYvxjS", "w0XVB2T1CfrHyMXLtwfUywDLCL0GtM8GBwf0y2HPBMCGCMfUz2uGzM9Yia", "ChjVCgvYDgLLCW", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDiowKSEI0PtOGz2fTzuLKios4UUEPUG", "w0XVB2T1CfrHyMXLtwfUywDLCL0GtwvYz2vKia", "CgfYC2vszwXHDgLVBMfS", "w0nVBMrPDgLVBKv2ywX1yxrVCL0Gqvnuigv2ywX1yxrPB246ia", "jYWGDMfSDwu9", "Bg9NrxzLBNq", "ChjPB3jPDhK", "DMLWx2XLDMvS", "x2fMx2nVDw50zxi", "z2v0rxzLBNrtzw5Kzxi", "Bg9Nv2L0AeXLDMvS", "w0nVBMzPz01HBMfNzxjDieXHC3qGy29UzMLNDxjHDgLVBIbMzxrJAcb3yxmG", "w0HHyMj5vhjHy2TLCLnes10GvxnLCIbWCM9MAwXLihjLBg9HzgvKigzVCIbHy2nVDw50oIa", "Dg9cB29S", "AgfUzgXLrgvKDxbSAwnHDgLVBG", "DgHYB3C", "CxvLDwvfDMvUDa", "w0HHyMj5vhjHy2TLCL1BrxzLBNrjzKfJDgLVBL0G6zYa6kAb6iEZ5Bcrm+s4QUwpGUAvSdOGy29UzgL0Aw9UlcbWBgf0zM9YBsWGzxzLBNroyw1L", "DgLTzw91Da", "ufjfrKLy", "Bwf0y2G", "jNnLy3jLDd0", "w0HHyMj5vhjHy2TLCLnes10Gq29UzMLNDxjHDgLVBIbOB3qGDxbKyxrLihn1y2nLC3nMDwWSihzLCNnPB246ia", "rvjst1i", "D3jPDgfIBgu", "vMfYAwfIBgvnyw5Hz2vY", "Cg9ZDa", "DxnLCI50B3rHBf9HBw91BNq", "ksWGC2TPChbPBMCGDxbKyxrL", "rxzLBNrcyxrJAfbYB2nLC3nVCG", "Bg9JywXFywn0AxzLx2rHExm", "ihrVigfJy291BNqG", "D2fYBG", "zxHLy3v0zufWChngBhLLCKv2zw50", "zxHLy3v0zufJDgLVBNm", "vw5RBM93BIbLCNjVCG", "q2HHChrLCLbYB2DYzxnZ", "y2vPBa", "w0HHyMj5vhjHy2TLCL0GrMfPBgvKihrVigDLDcb1C2vYihbYB2zPBgu6ia", "CMvSB2fKvxnLCLbYB2zPBgu", "z2v0v3jPDgfIBgvqyxrO", "w1j1BgvmB29RDxbuywjSzu1HBMfNzxjDioINHowiMsa", "zxzLBNqU", "BgfZDfjLC3vTzvrPBwu", "Bg9HzeXVy2fSq29UzMLN", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDigXVy2fSu3rVCMfNzEs4JEwpR+EuQa", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdMM7tMLRdLHBpLJAhOV5VLUQy6ia", "w0HHyMj5vhjHy2TLCLnes10Gu3rHCNrPBMCGu0rligLUAxrPywXPEMf0Aw9U", "CgfYC2vbCNjHEq", "CMvTB3zLuhvIBgLJsgvHzgvY", "C2v0rMXHzW", "w0HHyMj5vhjHy2TLCLnes10Gu0rligLUAxrPywXPEMf0Aw9UigzHAwXLzdOG", "Aw5JCMvTzw50swy", "C2v0qwrKAxrPB25HBerHDge", "yxjN", "w0HHyMj5vhjHy2TLCLnes10Gq29UzMLNDxjHDgLVBIbOB3qGDxbKyxrLigzHAwXLzdOG", "w1vZzxjqCM9MAwXLtwfUywDLCL0Gsw5PDgLHBgL6Aw5NihbYB2zPBguGzM9YigfJy291BNq6ia", "z2v0rMXHzW", "lcbZzxj2zxjvCMW9iG", "igv2zw50CYbYzw1HAw5PBMCGAw4GCxvLDwu", "igv2zw50CYK", "Bg9HzenVBMzPzW", "DxnLCKLK", "C3bSAxrcEu9WzxjHDg9Y", "l2fWAs92ms9TyxjRzxqVy29UzMLN", "E3n0ywDLFq", "w0nVBMzPz01HBMfNzxjDiezVDw5KignHy2HLzcbJB25MAwD1CMf0Aw9UlcbHChbSEwLUzYbJywnOzsb0BYbHBgXVDYbtreSGDg8GD29YAYbPBw1LzgLHDgvSEq", "CMfUz2vZ", "vgHYzxnOB2XKCW", "lcbfCNjVCJOG", "BgLZDgvUzxjZ", "Dg9oDw1Izxi", "vhjHy2TLCKv2zw50qNvZ", "zxzHBhvHDgu", "z2v0qNvPBhrjBLzHCMLHyMXL", "yxn5BMm", "w0nVBMzPz01HBMfNzxjDieXVywrPBMCGBg9JywWGy29UzMLNDxjHDgLVBJOG", "y3vYCMvUy3NKUi3OG73KUlRNQBO", "x19HCNjHEv9F", "Aw5PDgLHBgL6zunVBMzPzW", "Bg9JywXmyxn0qwn0AxzLrgf5", "tNvSBa", "B25rDwv1zwrfDMvUDfbYB2nLC3m", "w0HHyMj5vhjHy2TLCLnes10GvhjHy2TLCIbPBNn0yw5JzsbYzwnYzwf0zwqGC3vJy2vZC2z1BgX5", "w0HHyMj5vhjHy2TLCL1BrxzLBNrjzKfJDgLVBL0G5OMN6kgmoIbJB25KAxrPB249", "w1bSyxrMB3jTqwrHChrLCL0GrMfPBgvKihrVihnLBMqGrMLYzwjHC2uGzxzLBNq6ia", "DMLKzw9FD2f0y2HFy291BNq", "lcb2yxjPywjSzt0", "uMv0zw50Aw9Urgf5CW", "Bg9Nz2vY", "tuLox1jfu1vnrv9jtLrfuLzbtf9nuW", "ihrHyMXLCYWGDg90ywW6ia", "lcb0ExbLoG", "icHMBgfNpq", "CMvZzxrjBNn0yw5Jzq", "w0HHyMj5vhjHy2TLCL0GvMvYC2LVBIbJAgvJAYbKAxnHyMXLzcWGDxbKyxrPBMCGzgLYzwn0BhKSihzLCNnPB246ia", "zMXHzW", "zxzLBNreyxrH", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDifvstcbbueKG5y+V55sOoIa", "q1vsuKvovf9bq0npvu5ux0Tfwq", "C2v0qxn0rw5HyMXLza", "w0HHyMj5vhjHy2TLCL0GqMfZzty0igvUy29KzsbLCNjVCJO", "CNvSzxm", "C3DHCM4", "iIdMNkRMIB7LIldVViZKV53MJihLJP/MOlC", "DxnLCI52AxbFBgv2zwW", "w0HHyMj5vhjHy2TLCL1BrxzLBNrnDwX0AxbSzufJDgLVBL0G5lUoieftvcdOIOlNGRNOJRFLJ5BKUOVKU7BLKi06ia", "w0HHyMj5vhjHy2TLCLnes10GuhjVy2vZC2LUzYbXDwv1zwqGzxzLBNq6ia", "DxnLCLbYB2zPBgu", "w0HHyMj5vhjHy2TLCKnVCMvDihn5BMnmB2DPBLjLC3bVBNnLigrVBMu6igfJDgL2zurHExm9", "y2HHChrLCUs4JEIdVEs4UUI0N+AvSa", "yxjLrxf1ywW", "CgfYC2vY", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdLVidLP4VKUiVOVB3LUBBLR7ZLH7ROP4tLIjNPHy3NVA4UlI4", "w0nVBMzPz01HBMfNzxjDiezHAwXLzcb0BYbWCM9JzxnZihf1zxvLzcbLDMvUDdOG", "w0nVBMzPz01HBMfNzxjDifjLC3vTztOGDxbKyxrLvgLTzsb1BMnOyw5NzwqGka", "AxndB25MAwDszwfKEq", "w0nVBMzPz01HBMfNzxjDieLUAxrPywXPEMvKlcbTB2rLoIa", "Bwf4rxzLBNrZugvYrNjHBwu", "lcbTzxnZywDLoIa", "uMvTB3rL", "w0HHyMj5vhjHy2TLCL1Bsw5JCMvTzw50swzby3rPB25DicaGyxjNC1SYxsaOzgvSDgePoG", "C3rHz2u", "lcbLDMvUDd0", "ywrQDxn0", "w0HHyMj5vhjHy2TLCLnes10GuhjVy2vZC2LUzYbLDMvUDcbKAxjLy3rSEtOG", "qMLUyxj5t3boB2rL", "x19VyMPLy3rFxW", "w0nVBMzPz01HBMfNzxjDieXVy2fSignVBMzPz3vYyxrPB24GBw9KzsWGC2TPChbPBMCGDxbKyxrLignOzwnR", "y3jLyxrL", "w0HHyMj5vhjHy2TLCL1Bqvnuxsbby3rPB24GAgfUzgXLCIbUB3qGCMvNAxn0zxjLzdOG", "BgfIzwW", "u2v0rMXHzW", "tgL0zxjHBe5Vzgu", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDieftvcbby3rPB24G5OMN6kgm5AsX6lsLoG", "q29UDgvUDc1uExbL", "C3vJy2vZCW", "w0HHyMj5vhjHy2TLCL1BrxzLBNrgB3juAhjLC2HVBgrZqwn0Aw9UxsdINiuG6zIi5yc85yY56ywnoIa", "lcbUBYbUzwvKihrVihn3AxrJAa", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokDJcdKV53LRzJMIANLSzxMLBdMJA7LPlhOTku6ia", "ke5HDgL2zsK6ia", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0GrMfPBgvKihrVigv4zwn1DguGywn0Aw9UCYbMB3iGCNvSzsa", "y2HHChrLCLbYB2DYzxnZ", "oIdLNkJLHOxOGztOOAJKUk3MIB7LIlaGjW", "z2fTzuLK", "y29UzMLNvMvYC2LVBG", "y2HLy2TbBMrvCgrHDgvdB25MAwC", "qMvHCMvYia", "jYa9ia", "w0HHyMj5vhjHy2TLCLnes10Gqxr0zw1WDgLUzYb0BYbYzwnYzwf0zsbuCMfJA2vYigLUC3rHBMnL", "Dw5KzwzPBMvK", "DgHLBG", "oIdMNkRMIB7LIldOOAGGjW", "w0XVB2T1CfrHyMXLtwfUywDLCL0Gsw5PDgLHBgL6zwqGD2L0Aca", "C2v0swy", "Bg9VA3vWvMfSDwu", "zxHWzwn0", "zNjVBunOyxjdB2rL", "Aw5Qzwn0qNvPBhrjBLzHCMLHyMXL", "w0HHyMj5vhjHy2TLCLnes10Gsw5PDgLHBgL6yxrPB24GCgfYyw1LDgvYihzHBgLKyxrPB24GzMfPBgvKoIa", "Eg9YrgvJCNLWDa", "mJaZmJK2ogLVwM54rq", "icJNRkW", "CMLNAhq", "ChjVCgvYDhLoyw1L", "tMv0D29YA01HBMfNzxi", "w0HHyMj5vhjHy2TLCL0GsgfUzgXPBMCGzxzLBNq6ia", "zw5HyMXLrMXVD0XVzW", "w0nVBMzPz01HBMfNzxjDifjLC3vTztOGDxbKyxrLvgLTzsbJAgfUz2vKicG", "ywn0Aw9Uq2fSBa", "twf0Ac5dzwLSAw5N", "tgL0zxjHBa", "B3bZ", "BgL0zxjHBa", "w0HHyMj5vhjHy2TLCL1BqMfJA2zPBgXtDgfNzuv2zw50C0fJDgLVBL0G6lEZ6l+h5PYQ6l6+5yIW55Qe6yEm56Il56kroIdNRkW", "C2v0q3vZDg9TzxjvC2vYswq", "z2v0u3rYAw5NrNjVBuzPBgu", "C2XVzW", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDifnLDfvZzxjqCM9Wzxj0EtOG", "zxzLBNq", "C2v0vxnLCLbYB3bLCNr5", "uefuq0G", "u2vUzfrVugXHDgzVCM0", "u3rHz2vqCM9NCMvZCW", "DxbKyxrLq29UzMLN", "AxnfBMfIBgvK", "ksWGyNv0ihn0AwXSigv4zwn1DgLUzYbOB3qGDxbKyxrL", "qMfZzty0igrLy29KAw5Nig5VDcbZDxbWB3j0zwqGAw4GDgHPCYbLBNzPCM9UBwvUDa", "zxzLBNroyw1L", "CgXHDgzVCM0", "u0rlig5VDcbPBML0AwfSAxPLza", "z2v0sxrLBq", "C2v0rxH0zw5KzwreyxrH", "w0v2zw50qMf0y2HqCM9JzxnZB3jDifnLBMrPBMCGzxzLBNqGAw1TzwrPyxrLBhK6ia", "C2fUAxrPEMvfDMvUDe5HBwu", "w0zPCMvIyxnLqwrHChrLCL0GrMfPBgvKihrVihnLDcbgAxjLyMfZzsb1C2vYihbYB3bLCNr5", "zM9YBwf0twvZC2fNzq", "ue9tva", "y29UDgfPBNm", "x19HD2fPDgvY", "z2v0qwXSuMvZCg9UC2vizwfKzxjZ", "ywn0AxzLx2rHExm", "C3rHDhvZvgv4Da", "DMfSAwrHDgu", "CM91BMq", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsbjBML0AwfSAxPLia", "BwvYz2vuywjSzxm", "yxjNCW", "DMfYAwfIBgvnyw5Hz2vY", "w0HHyMj5vhjHy2TLCLnes10GrMfPBgvKihrVihbYB2nLC3mGCxvLDwvKigv2zw50oIa", "yxbWC2zSEwvYqxbWswq", "C2vYDMvYvxjS5lIn6io95lI656M6", "C2vUzev2zw50", "AxngzxrJAgLUz0nVBMzPzW", "z2v0tMv3zxn0rxzLBNruAw1LC3rHBxa", "DxnLqxn0", "ChjVy2vZC2LUz1rPBwvY", "w0HHyMj5vhjHy2TLCLnes10Gu0rligLZigLUAxrPywXPEMLUzYWGC2TPChbPBMCGzhvWBgLJyxrLignHBgW", "sgfIyNLuCMfJA2vYq29Yzq", "DMfSAwrHDgvvC2vYuhjVzMLSzq", "vw5HCNLpCgvYyxrPB24", "DxbKyxrLuhjVzMLSzq", "mtm2ndu0nvH4CKrsCa", "w0HHyMj5vhjHy2TLCLnes10GvhjHy2TLCIbPBNn0yw5JzsbUB3qGCMvHzhKSihf1zxvLAw5Nigv2zw50oIa", "w1vZzxjqCM9MAwXLtwfUywDLCL0GrMfPBgvKihrVigLUAxrPywXPEMuGChjVzMLSztOG", "zMfJzwjVB2S", "CMv0CNLdB3vUDa", "z2v0q3vYCMvUDefJy291BNrjza", "C2f2zvbYB2zPBgu", "w0HHyMj5vhjHy2TLCL1BqMfJA2zPBgXtDgfNzuv2zw50C0fJDgLVBL0G6lEZ6l+h5BEY5lIk5OQLoIa", "C3LZ", "w0zPCMvIyxnLqwrHChrLCL0GrMLYzwjHC2uGqw5HBhL0AwnZig5VDcbMB3vUzcWGzxzLBNrZihDPBgWGyMuGBg9Nz2vKig9UBhK", "w0fWChngBhLLCKfKyxb0zxjDiefWChngBhLLCIbLDMvUDdOG", "C2vUzefWChngBhLLCKv2zw50", "w0nVBMzPz01HBMfNzxjDiowoN+wNI0HuvfdLK43LUPtMLBdMJA46ia", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsdORR7NVA7LJ5JPH48GiG", "qxv0Ag9YAxPHDgLVBG", "z2v0q29UzMLNvMvYC2LVBG", "5yAz5ywL5PAh5lU25AsX6lsL", "AxnjBML0AwfSAxPPBMC", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdLIlFMLRdLIy0GAxndB25MAwDszwfKEt0", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0GuhjVy2vZC2LUzYbLDMvUDdOG", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDioATO+wiMEwfNow6LEMaMUI/HYWGC2vYDMvYvxjSpsi", "D3jPDgvtDhjPBMDuB0zPBgu", "tMv0D29YAYbLCNjVCJOG", "xsbB", "w1bSyxrMB3jTqwrHChrLCL0GrMLYzwjHC2uGywrHChrLCIbUB3qGAw5PDgLHBgL6zwq", "w0HHyMj5vhjHy2TLCL1BrxHWCMvZC2LVBKnVBNrLEhrDioIoT+wpLIbLDMvUDc4", "BMv4Da", "revgqvvmvf9dt05gsuC", "w1vZzxjqCM9MAwXLtwfUywDLCL0Gsw5ZDgfUy2uGy3jLyxrLza", "w0zPCMvIyxnLqwrHChrLCL0GrMLYzwjHC2uGDxnLCIbWCM9Wzxj0EtOG", "r0vu", "w0XVB2T1CfrHyMXLtwfUywDLCL0Gvw5RBM93BIb0ywjSzsb0ExbLoIa", "C2vUzff1zxvL", "CYbYzw1HAw5PBMCPlcbZA2LWCgLUzYbszxn1BwuGB3bLCMf0Aw9U", "qujdrevgr0HjsKTmtu5puffsu1rvvLDywvPHyMnKzwzNAgLQA2XTBM9WCxjZDhv2D3H5EJaXmJm0nty3odK", "ChvIBgLJsgvHzgvYCW", "z2v0vgfIBgvoyw1LCW", "B25SB2fK", "zxzLBNrgB3juAhjLC2HVBgrZ", "CgfYC2vnDwX0AxbSAwnHDgL2zq", "8j+pGsbBsgfIyNLuCMfJA2vYxvTby3rPB25fEgvJDxrVCL0G5PYa57Ui6k6+572U5Qch5B+x5l2noIaI", "z2v0uxvLDwvKrxzLBNrdB3vUDa", "C2nOzwr1BgvozxH0", "y29TCgfYzvzHBhvLCW", "CgfYC2vpyMPLy3q", "zgLZywjSzwq", "z2v0rw5HyMXLvMvYC2LVBKnOzwnR", "zMLUze1HDgnOAw5NuNvSzxm", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDiowKSEI0PtOG5Q2J5yIz5ywC5BQv5lMF5lIn6ycA6l+hlcbZzxj2zxjvCMW9iG", "zgf5C1nPBMnL", "w0HHyMj5vhjHy2TLCL1Bsw5JCMvTzw50swzby3rPB25DiowpMoMhJ+wqJEs4UUEPUG", "w0HHyMj5vhjHy2TLCL0GuhjVy2vZC2LUzYbLDMvUDdOG", "DhLWzq", "igv2zw50CW", "w0nVBMzPz01HBMfNzxjDienVBMzPz3vYyxrPB24GzMv0y2HLzcbZDwnJzxnZzNvSBhK", "zMLYzwjHC2vbzgfWDgvY", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsbtzxqGzMXHzZOG", "z2v0u2vYDMvYvxjS", "CMvTB3zLrMLSzq", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdPHy3NVA7LT7lLIlFMLRa", "CgfYC2vpCG", "zg9tzw5K", "z2v0vgLTzq", "CgfYyw1Z", "rKLsrujbu0vFrvzftLq", "twf0Ac5TyxG", "w0fWChngBhLLCKfKyxb0zxjDiev2zw50ihf1zxvLzcaOCxvLDwuGC2L6ztOG", "tg9JywW", "shr0Ce1LDgHVza", "AxneAwDPDa", "oIdLNkJLHOxOGztOOAJKUk3OJipLM7tMN6xMIB4GjW", "BgfZDfvWzgf0zvrPBwu", "yw5HBhL0AwnZ", "Dg9vChbLCKnHC2u", "w0HHyMj5vhjHy2TLCL1BrxzLBNrgB3juAhjLC2HVBgrZqwn0Aw9UxsdPNidOPOe15lIQ5y+c5PwWoIbWBgf0zM9YBsWGzxzLBNroyw1LvgvTCgXHDguSihzHBhvLlcbVCgvYyxrVCIWGDgHYzxnOB2XKCW", "E1rOCMvZAg9Szhn9", "vw5RBM93BG", "twf0Ac5JzwLS", "q09orKLhx0nbq0Hfx0Tfwq", "y29UzgL0Aw9UrxzHBhvHDg9Y", "y291BNrLCG", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsbdyw5UB3qGC2v0ihvUA25VD24GzMLLBgq6ia", "y2HHChrLCG", "jwnBsgfIyNLuCMfJA2vYxvTfDMvUDfnLBMrLCIbnAxnZAw5NxsbeCM9WCgvKoIa", "icbtAxPLoIa", "BwfW", "Dg9ju09tDhjPBMC", "w1vZzxjqCM9MAwXLtwfUywDLCL0GtM8Gywn0AxzLihbYB2zPBgu", "y29UzMLNDxjHyMXL", "w0HHyMj5vhjHy2TLCLnes10Gv2L0AgLUigLUAxrPywXPEMf0Aw9UignVB2XKB3DUihbLCMLVzcaO", "w0fWChngBhLLCKfKyxb0zxjDiefWChngBhLLCIbUB3qGAw5PDgLHBgL6zwqSigv2zw50igXVz2DLzcbVBMX5", "y29UzMLNrgf0yq", "DhjHy2TLCJPHChbZzMX5zxjFzxzLBNq", "y2XLyxjuB2TLBG", "CgfYC2vjzgvUDgLMAwvYt3jdywXS", "w0nVBMzPz01HBMfNzxjDieXVy2fSignVBMzPz3vYyxrPB24GBg9HzgvKihn1y2nLC3nMDwXSEsWGDMvYC2LVBJOG", "uKvuuLLFrevmqvLFtvm", "lcb2ywX1zt0", "w0HHyMj5vhjHy2TLCL1Bu2v0swzby3rPB25Dia", "y29UzMLNr2fTzuLK", "w0HHyMj5vhjHy2TLCLnes10Gsw5PDgLHBgL6Aw5NiezPCMvIyxnL", "lcbhyw1LieLeoIa", "AxrLCMf0B3i", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDicaGiokAOo+4JYbwyxjPywjSzu1HBMfNzxiG5lIn5y+V55sO5OIwigzSywDoyw1Lios4JEAyR+wTL+ESPUs4SJOGiG", "B25dB25MAwDfCNjVCG", "lcbMBgfNvgvTCgXHDgu9", "Bg9N", "w0nVBMrPDgLVBKv2ywX1yxrVCL0GrxzLBNreyxrHigzPzwXKig5VDcbMB3vUzdOG", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokgKIdMIANLSzxMLBdMJA4G", "CgfYC2vvBMfYEq", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsbvBMTUB3DUigzPzwXKoIa", "DgvZDa", "lcbZDgfNzt0", "DMfSAwq", "z2v0uNvSzq", "swfWq291BNq", "w0nVBMzPz01HBMfNzxjDienVBMzPz3vYyxrPB24GzMv0y2GGzMLUywXSEsbMywLSzwqGywz0zxiG", "w0v2zw50uxvLDwvDiff1zxvLigz1BgWSihjLBw92Aw5Nig9SzgvZDcbLDMvUDdOG", "CgfYC2vuzxjUyxj5", "BM9Kzxm", "vw5HCNLpCe5Vzgu", "DhjPz2DLCG", "w0nVBMzPz01HBMfNzxjDien1CNjLBNrSEsbMzxrJAgLUzYbJB25MAwD1CMf0Aw9UlcbZA2LWCgLUzYbKDxbSAwnHDguGCMvXDwvZDa", "z2v0uMvNAxn0zxjLzev2zw50u2vUzgvY", "tg9Nz2vY", "tuLox0zfvenix0LovevsvKfmx01t", "w0H0Dhbnyw5Hz2vYxsbtzxqGChvIBgLJigHLywrLCJOG", "DxrMltG", "CgfKu3rHCNq", "w0HHyMj5vhjHy2TLCLnes10Gsw5PDgLHBgL6yxrPB24GzMfPBgvKoIbTAxnZAw5NihjLCxvPCMvKihbHCMfTzxrLCNm", "AxnbC3rfEhbYzxnZAw9U", "CgXHDgzVCM1bzgfWDgvY", "x19Nzw5LCMf0B3i", "CgvLA0nOyxi", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokDJcdKV53LRzJLPlhOTku6ia", "w1vZzxjqCM9MAwXLtwfUywDLCL0Gu2v0DgLUzYbLEhrLBMrLzcbKyxrHoIa", "vfjbq0TfuL9fvKvovfm", "q3j5ChrVvxrPBhm", "w1vZzxjqCM9MAwXLtwfUywDLCL0GrMfPBgvKihrVihvWzgf0zsbWCM9MAwXLoIa", "Ag91CNntAw5Jzq", "w0HHyMj5vhjHy2TLCL0Gq29UzMLNDxjHDgLVBIb1CgrHDguGzMfPBgvKoIa", "w0XVB2T1CfrHyMXLtwfUywDLCL0GvgfIBguGBM90igzVDw5KoIa", "CgvLAW", "rxzLBNrnDwX0AxbSzufJDgLVBKHHBMrSzxi", "shr0Ce1HBMfNzxi", "CMvXDwvZDeLUDgvYy2vWDg9YCW", "r2vUzxjHDg9YigLZigfSCMvHzhKGzxHLy3v0Aw5NlG", "CYbYzw1HAw5PBMCPlcbZA2LWCgLUzYb1CgrHDgu", "Dg90ywXFyw1VDw50", "C2f2zuzPBgu", "u2vYDMvYihjLDhvYBMvKigvYCM9YignVzgu", "ywXS", "zgvZy3jPChrPB24", "w0zPCMvIyxnLqwrHChrLCL0GrMLYzwjHC2uGDxnLCIbjrdOG", "C2v0vMfYAwfIBgu", "mtCYmhjNuKXMEG", "z2v0ugXHDgzVCM0", "w0nVBMzPz01HBMfNzxjDienVBgqGC3rHCNq6igzVCMnLigfWCgX5Aw5NihnLCNzLCIbJB25MAwCSihvWzgf0zvrPBwu9", "zxzHBhvHDgvfEhbYzxnZAw9U", "zw5XDwv1zq", "iIdNU5pMNPW9", "w0nVBMzPz01HBMfNzxjDioMfJEE9RUwKHoEqHUwUJoAiKcWGAxndB25MAwDszwfKEt0", "yxbWBhK", "lcbKzwX0yt0", "ndG4nJHHu1LLv2u", "vMfYAwfIBgvnyw5Hz2vYigfUzcbmB29RDxbuywjSzu1HBMfNzxiGCMvXDwLYzwqGzM9YieftvcbLDMfSDwf0Aw9U", "AgfIyNLFDhjHy2TLCL9WCM9MAwXLxW", "C2v0qxbWC0zSEwvYvxnLCKLK", "w0HHyMj5vhjHy2TLCLnes10GvhjHy2TLCIbPBNn0yw5JzsbPCYbUDwXSlcbJyw5UB3qGChjVy2vZCYbXDwv1zwqGzxzLBNq", "BNvSBa", "w0HHyMj5vhjHy2TLCL1BrxzLBNrgB3juAhjLC2HVBgrZqwn0Aw9Uxsb0AhjLC2HVBgrZios4UIbUDwXS77YiBg9VA3vW5AsX6lsL77YF77Yj77Ym6lEZ6l+h5y+r6ycb", "w0v2zw50qMf0y2HqCM9JzxnZB3jDiev2zw50ihf1zxvLzdOG", "y2XLyxi", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0Gtg9HzgLUzYbJB25MAwCGDMvYC2LVBJOG", "E2nOyxb0zxj9", "AxngAwXLrxHPC3q", "zMLUza", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDiow3SUA4HEEPUUAjGoACIEAvSoAnRU+8JowfSsa", "y29UzMLN", "zw1PDa", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiezPCMvIyxnLrxzLBNqGzhjVChbLzcbIzwnHDxnLig5Viev2zw50u2vUzgvYigLZihjLz2LZDgvYzwq6ia", "rxzLBNrgB3juAhjLC2HVBgrZqwn0Aw9UsgfUzgXLCG", "w0HHyMj5vhjHy2TLCLnes10Gu3vJy2vZC2z1BgX5ihn3AxrJAgvKihrVigfJy291BNqG", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiefWChngBhLLCKv2zw50oIbTAxnZAw5Nigv2zw50tMfTzsbWyxjHBwv0zxi", "zxH0zw5KzwreyxrH", "zxzHBhvHDgvuzw1WBgf0zq", "DMfSAwrHDgvuCMfJA2vYu2v0DgLUz3m", "AgfUzgXLq29UzMLNrxjYB3i", "w0HHyMj5vhjHy2TLCL0Gsw5PDgLHBgL6Aw5NieHHyMj5vhjHy2TLCG", "w0HHyMj5vhjHy2TLCLnes10GqMvNAw5UAw5NifnesYbPBML0AwfSAxPHDgLVBG", "vg90ywXbBw91BNq", "igv2zw50CYbYzw1VDMvK", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiezHAwXLzcb0BYbLEgvJDxrLieftvcbHy3rPB246ia", "y29TCgfYzq", "CgfYC2vbCMD1BwvUDe5Vzgu", "y29UzMLNtwfUywDLCG", "w0nVBMzPz01HBMfNzxjDienHy2HLzcbJB25MAwD1CMf0Aw9UigfWCgXPzwqSihzLCNnPB246ia", "BMfTzq", "DxbKyxrLvgLTzq", "ms4WlJa", "w0HHyMj5vhjHy2TLCL0Gq29UzMLNDxjHDgLVBIbUB3qGCMvHzhKSignHBM5VDcbWCM9JzxnZigv2zw50oIa", "CgfYC2vqCMLTyxj5", "C3rHCNrZv2L0Aa", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDioAwH+s7TUwkOoI9VEAiKowkNYHoyxrPDMuPoIa", "DxnLCI5Syxn0x2XVz2LUx3rPBwu", "w0nVBMrPDgLVBKv2ywX1yxrVCL0Gu2LTCgXLoIa", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDiowiOoMzPoAvSoAnRUwKSEI0PtOG", "CMfUzg9T", "rgLZywjSzwq", "rxHWCMvZC2LVBKnVBNrLEhrbzgfWDgvY", "C2vUzezPCMvIyxnLrxzLBNq", "w0HHyMj5vhjHy2TLCL1Bsw5JCMvTzw50swzby3rPB25Dios7JIbHCMDZioIoT+wpLUwpMoMhJ+wqJtO", "C2v0u2vYDMvYsg9ZDa", "DMfSDwvZ", "lcb0ywjSzt0", "AxnqCM9JzxnZAw5N", "twf0Ac5byNm", "Aw5PDgLHBgL6yxrPB25uAw1L", "vMLKzw9xyxrJAenVDw50", "rxzLBNrjzKfJDgLVBKHHBMrSzxi", "C3rHz2vqCM9NCMvZCW", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDifnLDezSywCGzMfPBgvKoIa", "ywnJB3vUDfjLz2LZDgvYvgLTzq", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiezPCMvIyxnLrxzLBNq6ig1PC3nPBMCGzxzLBNroyw1LihbHCMfTzxrLCG", "y29SB3i6iZe2ytm0ytTMB250lxDLAwDODdPIB2XK", "twf0Ac5nAw4", "w0HHyMj5vhjHy2TLCLnes10GrMfPBgvKihrVignYzwf0zsbuCMfJA2vYigLUC3rHBMnLoIa", "yxbWC2zSEwvYqwrHChrLCG", "yxbWBgLJyxrPB24VANnVBG", "yMfJA2zPBgXtDgfNzuv2zw50CW", "Bwq1", "Bg9VA3vWtwfW", "AxnjzgvUDenOyxi", "qujdrevgr0HjsKTmtu5puffsu1rvvLDywvPHyMnKzwzNAgLQA2XTBM9WCxjZDhv2D3H5EJaXmJm0nty3odKRlW", "DhjHy2TLCJPYDwXLx21HDgnOzwq", "w0nVBMrPDgLVBKv2ywX1yxrVCL0GvxnLCLbYB2zPBguGzMLLBgqGBM90igzVDw5KoIa", "yxn0rw5NAw5L", "w1vZzxjqCM9MAwXLtwfUywDLCL0Gsw52ywXPzcbWCM9MAwXLigrHDgeGzM9YigfJy291BNq6ia", "iIdIHPiGiG", "BM9YBwfSAxPLq29UzMLNrgf0yq", "C3rYAw5NAwz5", "qMfJA2zPBgXtDgfNzuv2zw50C0fJDgLVBKHHBMrSzxi", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsdMM7/MJAlNU5pMNPW6ici", "x19WywLYx18", "w0HHyMj5vhjHy2TLCL1BrxzLBNrby3rPB25DioMCGoIMGEIhS+wWKtlKUkRLJ4lMLBa6ihbSyxrMB3jTlcbLDMvUDe5HBwu", "ywjZ", "vMfYAwfIBgu", "twf0Ac5YB3vUza", "C3bSAxq", "Dw5Uyw1Lza", "w1bSyxrMB3jTqwrHChrLCL0GrMfPBgvKihrVihnLDcbbChbZrMX5zxiGDxnLCIbjra", "w0HHyMj5vhjHy2TLCLnes10GuMvJCMvHDgLUzYbuCMfJA2vYigLUC3rHBMnLigzVCIbUzxCGywnJB3vUDa", "rxHWCMvZC2LVBKvUz2LUzq", "ufvuihjLCxvLC3qGzMfPBgvK", "Dg90ywXbBw91BNq", "DxnLtg9JywXdB25MAwC", "ChjVCgvYDhK", "w0HHyMj5vhjHy2TLCL1Bsw5JCMvTzw50swzby3rPB25DicaGyxjNtM9KzxnBmL06", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdMM7tMLRdNQ6dOIOlOV5VLUQy6ia", "AxnxAgL0zxnWywnL", "iIWGz2fTzuLKpsi", "ihrHyMXLCW", "y3vYCMvUDfbYB2zPBgu", "Bg9HzfbYB2zPBgu", "uLvmrv9nqvrdseve", "oIdMNkRMIB7LIldOJipLM7tOOAGGjW", "C2v0uMvXDwvZDeHLywrLCG", "C2fUAxrPEMvqyxjHBxm", "v0fstG", "A2v5CW", "y29UzgL0Aw9U", "C2vUzev2zw50qxn5BMm", "ChjVzhvJDfr5Cgu", "zxHLy3v0zvnLBMruB1bSyxrMB3jT", "zMv0y2HdB25MAwDgCM9Tu2vYDMvY", "CM9VDa", "zMLSzv8", "zxzLBNrcyxrJAfbYB2nLC3nVCG", "Bg9HzezPBgu", "ywn0AxzLrgf5CW", "ufvu", "w0HHyMj5vhjHy2TLCLnes10Gu3DPDgnOAw5NigzYB20GywnJB3vUDca", "qwn0Aw9Uq2fSBa", "sgfIyNLuCMfJA2vYlW", "w0HHyMj5vhjHy2TLCL0Gr2v0DgLUzYbJDxjYzw50ihvZzxiGChjVzMLSzq", "lcbWBgf0zM9YBt0", "sw5JCMvTzw50swzby3rPB25iyw5KBgvY", "qM9VBa", "DxnLCLbYB2zPBgvnyw5Hz2vY", "id0G", "y2HHCKnVzgvbDa", "w0HHyMj5vhjHy2TLCL0Gwe9sigrLy3j5ChqGzxjYB3i6", "w0XVB2T1CfrHyMXLtwfUywDLCL0GuMfUz2uGBg9VA3vWoIa", "w0nVBMzPz01HBMfNzxjDienOzwnRAw5NigLMignVBMzPz3vYyxrPB24GBMvLzhmGDxbKyxrL", "w0HHyMj5vhjHy2TLCLnes10Gq29UzMLNDxjHDgLVBIbMzxrJAcbMywLSzwq6ia", "nZuZmdfzDMnMz3a", "Dg9cB29SzwfU", "y2XLyxjLza", "l3n0B3jHz2uVzw11Bgf0zwqVmc9bBMrYB2LKl2rHDgeV", "C2f2zvrVrxH0zxjUywXtDg9YywDL", "qwn0AxzLrgf5CW", "DhjPBq", "C29YDa", "BgvMDa", "Aw9Zx211BhrPCgXPzxjZ", "Aw5KzxHpzG", "AxneAxjLy3rVCNLfEgLZDa", "u1rpuKfhrv9lrvLFufjfrKLy", "CMvWBgfJzvzHCMLHyMXLCW", "tg9Ntgv2zwW", "q09vtLrfuL9qqvjbtq", "ywnJB3vUDeLe", "w0zPCMvIyxnLqwrHChrLCL0GrMLYzwjHC2uGqw5HBhL0AwnZigLZigf2ywLSywjSzq", "w0HHyMj5vhjHy2TLCLnes10GvMvYC2LVBIbJAgvJAYbKAxnHyMXLzcWGzxHLy3v0Aw5NigHVDcb1CgrHDguGzgLYzwn0BhKSihzLCNnPB246ia", "AgvHzgvYCW", "z2v0", "w0HHyMj5vhjHy2TLCL0GvxbKyxrPBMCGy29UzMLNDxjHDgLVBIWGDMvYC2LVBJOG", "w0HHyMj5vhjHy2TLCLnes10Gq29UzMLNtwfUywDLCIbUB3qGAw5PDgLHBgL6zwq", "CMvXDwvZDa", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokgKIdIMQdVUi8G5PYQ55+L5A2x5Q61oIa", "w0HHyMj5vhjHy2TLCL1BrxzLBNrgB3juAhjLC2HVBgrZqwn0Aw9UxsdMNkRNN6xMK43KVzZNRky6ia", "lMPZB24", "jwnBsgfIyNLuCMfJA2vYxvTfDMvUDfnLBMrLCIbnAxnZAw5NxsbcyxrJAcbKCM9WCgvKoIa", "ioASOtOG", "z2v0r2fTzuLK", "w0HHyMj5vhjHy2TLCL1BrxzLBNrnDwX0AxbSzufJDgLVBL0G6zYa6kAbm+s4QUwpGUAvSdOGCgXHDgzVCM0Sigv2zw50tMfTzsWGy291BNq", "w1vZzxjqCM9MAwXLtwfUywDLCL0Gu3rVCMfNzu1HBMfNzxiGyw5KieXVz2DLCIbYzxf1AxjLzcbMB3iGzMLYC3qGz2v0sw5ZDgfUy2uGy2fSBa", "CNvSzuvUz2LUzq", "CgvLA0TLExDVCMq", "C2vYDMvYvxjS5Qc85BYp5lIn5Q2J56gU", "DxnLCI5MAxjZDf9VCgvUx3rPBwu", "z2v0q3vYCMvUDenVBMzPz1zLCNnPB24", "ywnJB3vUDfjLz2LZDgvYvgLTzxn0yw1W", "w0HHyMj5vhjHy2TLCL1BqMfJA2zPBgXtDgfNzuv2zw50C0fJDgLVBL0G5BYa5AEl5zUE5AgRoIbJDxjYzw50q2HHChrLCJ0", "lcbOyxndB25MAwC9", "w0nVBMzPz01HBMfNzxjDienVBMzPz3vYyxrPB24GywXYzwfKEsbYzwfKEsWGC2HVDwXKig5VDcbXDwv1zsbLDMvUDhm", "C2v0", "z2v0vMfYAwfIBgvwywX1zq", "z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDiowKSEI0PtOGC2vYDMvYvxjSios4UUEPUG", "uNvSzuvUz2LUzq", "zxzLBNrrDwv1zq", "CgfYC2vtDhjPBMC", "w0HHyMj5vhjHy2TLCKnVCMvDieLUC3rHBMnLignYzwf0zwq", "C2v0uhvIBgLJsgvHzgvY", "CgvLA1n0CG", "y2fJAgvdB25MAwC", "Bg9VA3vWtwfUywDLCG", "z2fTzuLK5lIn6io95lI656M6", "Aw5ZDgfUy2u", "yxnZAwDU", "icH0AhjLC2HVBgq9", "zxH0zw5KzwrFzgf0ys4", "zxzLBNriAxn0B3j5", "rxHWCMvZC2LVBLr5Cgu", "ioADOEs7TJ0I", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokgKIdLJ5JPH48G", "AwfWq291BNq", "y3vYCMvUy3K", "w0HHyMj5vhjHy2TLCLnes10GtgfZDcbszxn1BwuGy2fSBcb3yxmGBgvZCYb0AgfUia", "yxjYyxK", "DxbKyxrLvxnLCLbYB2zPBgu", "Cg9W", "rMLYzwjHC2vfDMvUDa", "C2HVDwXKvxnLqxn0", "w0HHyMj5vhjHy2TLCL1BqMfJA2zPBgXtDgfNzuv2zw50C0fJDgLVBL0G6kgL5OQL5ywZ5y2H5lQl5lU2oIa", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0Gu2v0DgLUzYbYDw4TB25JzsbMBgfNoIa", "w0v2zw50qMf0y2HqCM9JzxnZB3jDiezSDxnOAw5Nihf1zxvLicG", "tg9VA3vWvgfIBgvnyw5Hz2vY", "w1bSyxrMB3jTqwrHChrLCL0GrMLYzwjHC2uGywrHChrLCIbPBML0AwfSAxPLza", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsbvC2vYihbYB2zPBguGAxmGBNvSBcWGy2fUBM90ihnLDcb2yxjPywjSztOG", "DxnLCLjLz2LZDgvYvgLTzxn0yw1W", "ChjVy2vZC0jHDgnO", "w0HHyMj5vhjHy2TLCLnes10GvxnLCIbWCM9MAwXLihvWzgf0zwq", "x19JCMvHDgvcAw5KAw5N", "w0HHyMj5vhjHy2TLCLnes10Gq29UzMLNDxjHDgLVBIbYzwfKEsWGDMvYC2LVBJOG", "vxnLCLbYB2zPBgvnyw5Hz2vY", "yMfZzty0rw5JB2rL", "w0HHyMj5vhjHy2TLCLnes10Gr2fTzsbYzxn1BwvKlcbJAgvJA2LUzYbMB3iGy29UzMLNDxjHDgLVBIb1CgrHDgvZ", "Dhj5CW", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0Gpt09pt0Gq29TCgXLDgvKihj1Bgu6ia", "w0HHyMj5vhjHy2TLCL0GvxnLCIbWCM9MAwXLihvWzgf0zwqGywz0zxiGzxzLBNqGChjVy2vZC2LUzW", "DMLKzw9xyxrJAenVDw50", "w0nVBMrPDgLVBKv2ywX1yxrVCL0GrMfPBgvKihrVigv2ywX1yxrLignVBMrPDgLVBJOG", "ChjVDg90ExbL", "y29UzgL0Aw9UCW", "u2v0vxnLCLbYB3bLCNr5", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdKUiVOVB3LKi4GAxndB25MAwDszwfKEt0", "w0nVBMzPz01HBMfNzxjDifn0yxj0Aw5NignVBMzPz3vYyxrPB24GAw5PDgLHBgL6yxrPB24", "z2v0q29UzMLNtwfUywDLCG", "u3rYAw5N", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDifnLDezSywC6ig1PC3nPBMCGzMXHz05HBwuGCgfYyw1LDgvY", "ywn0Aw9UtMfTzq", "BgvUz3rO", "CYbHz28SihjLC2v0ignVDw50zxi", "AgfUzgXLuxvLDwvKrxzLBNrqCM9JzxnZ", "w0nVBMzPz01HBMfNzxjDifrLEhrezwnVzgvYihvUyxzHAwXHyMXLlcb1C2LUzYbMywXSyMfJAW", "ywrK", "AxnjBLjLC3vTzuLUDgvYDMfS", "Bg9VA3vW", "AgfZ", "yMfZzty0vg9cAw5HCNLtDhjPBMC", "w1vZzxjqCM9MAwXLtwfUywDLCL0G55sO5OI35QgJ5Qgi6lcd6k+v5PAh5lU25l+D5A2y5OIq5yQFoIa", "zMXHz05HBwu", "8j+uJsbBsgfIyNLuCMfJA2vYxvTby3rPB25fEgvJDxrVCL0Gu2v0rMXHzYdLJP/LP4VMOiFLV5FKVy06ici", "AxnszwfKEq", "w0HHyMj5vhjHy2TLCLnes10Gq3vYCMvUDcbHy2nVDw50ieLeoIa", "revmrvrf", "w0HHyMj5vhjHy2TLCKnVCMvDifvZzxiGChjVzMLSzsbYzxnLDcbMB3iGywnJB3vUDdOG", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsdLVidLP4VMM7/MJAlLJ5JPH486ici", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDicaGiokAOo+4JYdLJ5JPH4/MNkRMM7/MJAlVViJLJ6/OG73MNkRMIB7LIldLJlNPHy3NMOtLJ5JPH4/VViK6ici", "z2v0vMfYAwfIBgu", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiow9K+wjJEAHO+AHIoAvSoAnRJO", "C2v0rMXVD0vUywjSzwq", "zgf0yq", "yMfZzty0rgvJB2rL", "DMfSAwrHDgvjyxbqDxjJAgfZzq", "w1bSyxrMB3jTqwrHChrLCL0GrMfPBgvKihrVihnLBMqGqxbWC0zSEwvYigv2zw50oIa", "zgvSzxrL", "Dw5RBM93BG", "icSG", "CMvNAxn0zxjby3rPB25iyw5KBgvY", "C2vUza", "w0XVB2T1CfrHyMXLtwfUywDLCL0GuMfUz2uGDgfIBguGBM90igzVDw5Kig9YigvTChr5oIa", "icJLU7BOV58G", "iIaO5QgJ5Qgisuq6ia", "w0nVBMzPz01HBMfNzxjDiff1zxvLzcbLDMvUDcbWCM9JzxnZAw5NignVBxbSzxrL", "jwnBsgfIyNLuCMfJA2vYxvTfDMvUDfnLBMrLCIbnAxnZAw5NxsbbChbZrMX5zxjfDMvUDcbKCM9WCgvKoIa", "C3rHCNrcyxrJAfbYB2nLC3nPBMC", "w0HHyMj5vhjHy2TLCL1Bsw5JCMvTzw50swzby3rPB25DicaGyxjNC1SWxsaOy29UzgL0Aw9UktO", "w0HHyMj5vhjHy2TLCL1Bu2v0swzby3rPB25DioADOEs7TUs4UUwbH++8JoI3S+I/H+IUVUE9RUAtJEs9NcaODMfYAwfIBgu9", "zMfSC2u", "w1vZzxjqCM9MAwXLtwfUywDLCL0GvxbKyxrPBMCGDxnLCKLeigzYB20G", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsaGiokgKIdIMQdVUi8G5y+y6yEpici", "w1bSyxrMB3jTqwrHChrLCL0GrMfPBgvKihrVigLUAxrPywXPEMuGrMLYzwjHC2uGywrHChrLCJOG", "y29Kzq", "zxHLy3v0zvnLDezSywC", "rxzLBNrrDwv1zq", "w0HHyMj5vhjHy2TLCLnes10Gu0rlig5VDcbPBML0AwfSAxPLzcWGy2fUBM90igv4zwn1DguGt25szxn1Bwu", "q29UzgL0Aw9UrxzHBhvHDg9Y", "w0XVB2T1CfrHyMXLtwfUywDLCL0GtwfWigXVB2T1CdOG", "AM9PBG", "z2v0vhjHy2TLCG", "te9h", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDioA4HEEPUUAvSoAnRUwKSEI0Pq", "C2vUzev2zw50sw1TzwrPyxrL", "zMLUzefYz0vUzeLUzgv4", "revgqvvmvf9bq0npvu5ux0Le", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDioAwH+s7TUwiOoMzPoAiKowkNYHxzwiPoIa", "jYbSyxn0ihnLBNqG", "zw5HyMXLtg9N", "w0HHyMj5vhjHy2TLCL1BqMfJA2zPBgXtDgfNzuv2zw50C0fJDgLVBL0G56UG6iQcia", "ksa9pt09pq", "zgvXDwv1zufSBa", "rxHWCMvZC2LVBLbHCNnLCG", "Bg9JywXbBw91BNq", "w0HHyMj5vhjHy2TLCL0Gq29UzMLNDxjHDgLVBIb2zxjZAw9UigLZihrOzsbZyw1LicG", "w0H0Dhbnyw5Hz2vYxsbszxf1zxn0igzHAwXLzdOG", "qxbWC0zSEwvYrxzLBNq", "Aw5JBhvKzxm", "CgfYC2vfCxvHBgL0Eq", "C3vIC3rYAw5N", "rxHWCMvZC2LVBK5VzgvuExbL", "z2v0q3vYCMvUDenVBMzPzW", "w0HHyMj5vhjHy2TLCL1BrxzLBNrby3rPB25Dios7JIbbu1qG6iQc54k56i635y+w5lQl5lU25zcnoIa", "qwn0Aw9UrxHLy3v0B3i", "y2HHChrLCL9WCM9NCMvZCW", "w0fWChngBhLLCKfKyxb0zxjDiezHAwXLzcb0BYbZzw5KiefWChngBhLLCIbLDMvUDa", "qxbWC0zSEwvYqwrHChrLCG", "zMX1C2HrDwv1zq", "DMfSDwu", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdOR7FMSylMJQxLJ6m6ia", "jYWGA2v5pq", "y3jLyxrLrgLYzwn0B3j5", "Bg9JywXLq29TCgfYzq", "yxbWC2zSEwvY", "ChjVy2vZC1f1zxvLzev2zw50CW", "w0zPCMvIyxnLqwrHChrLCL0GrxzLBNqGBMfTzsbZyw5PDgL6zwq6ia", "C2TPCfDZ", "C2v0qMfZzvvYBa", "DxnKqw1VDw50", "Bwf4", "z2v0q3vYCMvUDfvZzxjqCM9MAwXL", "ywn0Aw9UrxHLy3v0B3i", "z2v0shr0Ce1HBMfNzxi", "BgfZDenVBMzPz0zLDgnOvgLTzq", "w0HHyMj5vhjHy2TLCL1BsgfIyNLuCMfJA2vYu0rlxsdPHy3NVA7LIlFMLRdLROZMIja", "w0HHyMj5vhjHy2TLCL1BuNvSzuvUz2LUzv0GrxjYB3iGChjVy2vZC2LUzYbYDwXLia", "Bg9JywXtDg9YywDL", "q29UzMLNDxjHDgLVBIbKyxrHigLZigvTChr5", "z2v0q3vYCMvUDfbYB2zPBgu", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiefWChngBhLLCKv2zw50igrYB3bWzwqGyMvJyxvZzsbUBYbfDMvUDfnLBMrLCIbPCYbYzwDPC3rLCMvKoIa", "z2v0sxnjBML0AwfSAxPLza", "w0HHyMj5vhjHy2TLCLnes10Gu3rHz2uGChjVz3jLC3mGDxbKyxrLzdOGy2HHChrLCJ0", "Ahr0Ce1HBMfNzxi", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDifzHCMLHyMXLtwfUywDLCIdKUi3LJ6/NLkJVViZOT7pOV4CGqvnuigfJDgLVBJOG", "w0HHyMj5vhjHy2TLCL1BrxzLBNrnDwX0AxbSzufJDgLVBL0G5BU26l+F5y+r6ycb56YSia", "w0HHyMj5vhjHy2TLCL1BvMfYAwfIBgvnyw5Hz2vYxsbtzxqG", "BM93", "twf0Ac5gBg9VCG", "w0nVBMzPz01HBMfNzxjDifzLCNnPB24Gy2HLy2S6ia", "C2L6zq", "zNjVBq", "w0H0Dhbnyw5Hz2vYxsbszxf1zxn0ihrPBwvVDxq6ia", "CgfYC2vjzgvUDgLMAwvY", "w0HHyMj5vhjHy2TLCL1BrxzLBNrby3rPB25DiowpKEMaGEs6I+s7TJOG", "AwfWx2nVDw50", "ue9tvcbYzxf1zxn0igzHAwXLza", "w0nVBMzPz01HBMfNzxjDie5VignHy2HLzcbJB25MAwD1CMf0Aw9U", "C29Tzq", "w0HHyMj5vhjHy2TLCL1Bqwn0Aw9UrxHLy3v0B3jDiefWChngBhLLCIbLDMvUDcbZzw50ihzPysbPBMPLy3rLzcbZzw5Kzxi6ia", "zMv0y2HdB25MAwDbBMrfEhbVCNq", "C2vUze1PBgvZDg9Uzxm", "y3vYCMvUDenVBMzPzW", "w0HHyMj5vhjHy2TLCL1BDMfSAwrHDgvuCMfJA2vYu2v0DgLUz3nDig5LDYbvuKWOksdMIPVLH7RLVilLUlJVViZPMy3NUQFMRApLIjNMOkhPQOWSigvYCM9Ypq", "CMvWBgfJzq", "zMXVD0vUywjSzwq", "w0nVBMrPDgLVBKv2ywX1yxrVCL0Gqvnuigv2ywX1yxrPB24G", "Dhj1zq", "Dg9oyw1Lt3jtDhjPBMC", "ywrFBwLSzxn0B25LCW", "lcb1C2vYoIa", "ugXHDgzVCM1bzgfWDgvY", "Aw5PDgLHBgL6zuzPCMvIyxnL", "w0HHyMj5vhjHy2TLCL1Bsw5JCMvTzw50swzby3rPB25DioAjP+IHJdOGy29UzgL0Aw9Upq", "w0HHyMj5vhjHy2TLCL1Bu2v0swzby3rPB25DiowpMoMhJ+wqJEs4UUEPUG", "CMvZCg9UC2vuzxH0", "w0nVBMrPDgLVBKv2ywX1yxrVCL0GuMvZDwX0oIa", "w0HHyMj5vhjHy2TLCLnes10GrMfPBgvKihrVihvWzgf0zsb1C2vYihbYB2zPBgu6ia", "w0HHyMj5vhjHy2TLCLnes10Gsw5PDgLHBgL6Aw5NiefWChngBhLLCG", "zxzLBNrjzG", "zxHLy3v0zuzPCMvIyxnLrxzLBNq", "CMv0zw50Aw9Ux3rPzxi", "w0HHyMj5vhjHy2TLCL1Bu3rVCMfNzu1HBMfNzxjDioAwH+s7TUwiOoMzPa" ];
return (P = function() {
return t;
})();
}
(function(t) {
var e = 515, n = 810, i = 846, a = 511, s = r;
t[s(513)] = s(e), t[s(n)] = "variable", t.BinaryOperation = s(1210), t[s(562)] = "unaryOperation", 
t.FunctionCall = "functionCall", t[s(i)] = s(a);
})(p || (A.ExpressionNodeType = p = {}));
var _ = function() {
var t = 839, e = 415, n = {
_0x58be43: 839,
_0x1e2bc9: 683
}, i = r;
function a(t, r, e) {
var i = x;
this[i(n._0x58be43)] = t, this[i(616)] = r, this[i(n._0x1e2bc9)] = e;
}
return a[i(948)][i(415)] = function(r) {
var n = i;
return this[n(t)] ? this[n(839)][n(e)](r) : void 0;
}, a;
}();
A[r(1199)] = _;
var U = function() {
var t = r;
function e(t) {
this[x(1034)] = t;
}
return e[t(948)][t(415)] = function(r) {
return this[t(1034)];
}, e;
}();
A[r(475)] = U;
var G = function() {
var t = 415, e = 761, n = 766, i = 439, a = 1025, s = 384, o = 957, u = 439, v = 416, c = {
_0x56e1b9: 761
}, f = r;
function h(t) {
this[x(c._0x56e1b9)] = t;
}
return h[f(948)][f(t)] = function(t) {
var r = f;
if (this[r(e)][r(n)]("event.") && t[r(i)]) {
var c = this[r(761)][r(a)](r(s)[r(o)]);
return c in t.eventData ? t[r(u)][c] : null;
}
var h = t[r(v)](this[r(e)]);
return null !== h && void 0 !== h ? h : t[r(975)](this[r(761)]);
}, h;
}();
A[r(1233)] = G;
var T = function() {
var t = 294, e = 331, n = 415, i = r;
function a(t, r) {
this.op = t, this.expr = r;
}
return a[i(948)][i(415)] = function(t) {
var r = i, e = this.expr[r(n)](t);
switch (this.op) {
case "!":
return !this.toBool(e);

case "-":
return -this.toNumber(e);

default:
return null;
}
}, a[i(948)].toBool = function(r) {
var n = i;
return typeof r === n(1182) ? r : null !== r && void 0 !== r && (typeof r === n(t) ? "true" === r[n(e)]() : "number" == typeof r ? 0 !== r : !!r);
}, a[i(948)][i(413)] = function(t) {
if ("number" == typeof t) return t;
if (null === t || void 0 === t) return 0;
var r = Number(t);
return isNaN(r) ? 0 : r;
}, a;
}();
A.UnaryOpNode = T;
var Y = function() {
var t = 948, e = 355, n = 331, i = 1103, a = 415, s = 355, o = 505, u = 355, v = 1231, c = 867, f = 413, h = 413, L = 413, w = 453, y = 757, g = {
_0x4289c6: 505
}, l = r;
function z(t, r, e) {
var n = x;
this.op = t, this[n(867)] = r, this[n(g._0x4289c6)] = e;
}
return z[l(t)][l(415)] = function(t) {
var r = 453, e = l, n = this;
if ("||" === this.op) {
var i = this.left[e(a)](t);
return this[e(s)](i) ? i : this[e(o)][e(415)](t);
}
if ("&&" === this.op) {
return !!this[e(u)](this[e(867)][e(415)](t)) && this[e(s)](this[e(505)][e(415)](t));
}
if ("in" === this.op) {
var g = this.left[e(415)](t), z = this[e(505)][e(415)](t);
return !!Array[e(v)](z) && z[e(1073)](function(t) {
return n[e(r)](g, t);
});
}
var x = this[e(c)].evaluate(t), M = this[e(505)][e(415)](t);
switch (this.op) {
case "+":
return this.toNumber(x) + this[e(f)](M);

case "-":
return this.toNumber(x) - this.toNumber(M);

case "*":
return this[e(413)](x) * this[e(413)](M);

case "/":
return this[e(h)](x) / this.toNumber(M);

case "%":
return this[e(L)](x) % this[e(413)](M);

case "==":
return this.areEqual(x, M);

case "!=":
return !this[e(w)](x, M);

case "<":
return this[e(757)](x, M) < 0;

case "<=":
return this[e(757)](x, M) <= 0;

case ">":
return this[e(y)](x, M) > 0;

case ">=":
return this[e(757)](x, M) >= 0;

default:
return null;
}
}, z[l(948)].toNumber = function(t) {
var r = l;
if (null === t || void 0 === t) return 0;
if (typeof t === r(1103)) return t;
var e = Number(t);
return isNaN(e) ? 0 : e;
}, z[l(948)][l(453)] = function(t, r) {
if (null === t && null === r) return !0;
if (null === t || null === r) return !1;
if (t === r) return !0;
var e = Number(t), n = Number(r);
return isNaN(e) || isNaN(n) ? String(t) === String(r) : Math.abs(e - n) < 1e-4;
}, z[l(t)][l(757)] = function(t, r) {
var e = l, n = Number(t), i = Number(r);
if (!isNaN(n) && !isNaN(i)) return n - i;
var a = String(void 0 !== t && null !== t ? t : ""), s = String(void 0 !== r && null !== r ? r : "");
return a[e(1038)](s);
}, z[l(948)][l(e)] = function(t) {
var r = l;
return typeof t === r(1182) ? t : null !== t && void 0 !== t && (typeof t === r(294) ? t[r(n)]() === r(1082) : typeof t === r(i) ? 0 !== t : !!t);
}, z;
}();
A[r(468)] = Y;
var I = function() {
var t = 948, e = 396, n = 1182, i = 331, a = 1103, s = 415, o = 415, u = 1198, v = 396, c = 355, f = 420, h = 549, L = 957, w = 1203, y = 415, g = 469, l = 396, z = 413, M = 1240, C = 1063, b = 1120, B = 413, H = 512, d = 413, D = 546, j = 1045, A = 396, p = 396, N = 331, P = 265, _ = 396, U = 766, T = 261, Y = 703, I = 396, V = 497, S = r;
function q(t, r) {
var e = x;
this[e(265)] = t, this[e(549)] = r;
}
return q[S(t)][S(415)] = function(t) {
var r = S;
switch (this.functionName) {
case r(u):
var e = this[r(v)](0, t);
return this[r(c)](e) ? this[r(v)](1, t) : this.arg(2, t);

case r(f):
for (var n = [], i = 0, a = this[r(h)]; i < a[r(L)]; i++) {
var s = a[i];
n[r(w)](s[r(y)](t));
}
return n;

case r(g):
for (var o = {}, x = 0, G = this[r(549)]; x < G[r(957)]; x++) {
var m = G[x];
if (m instanceof q && "__pair__" === m[r(265)]) {
var K = m.arg(0, t), O = String(void 0 !== K && null !== K ? K : ""), J = m[r(l)](1, t);
O && (o[O] = J);
}
}
return o;

case r(1127):
case r(780):
return Math.abs(this[r(z)](this[r(l)](0, t)));

case r(M):
case r(C):
return Math[r(b)](this[r(B)](this.arg(0, t)));

case r(641):
case r(H):
return Math[r(379)](this[r(d)](this[r(396)](0, t)));

case r(811):
case r(1227):
return Math[r(D)](this[r(B)](this[r(396)](0, t)));

case r(629):
case "Math.Max":
return Math[r(j)](this.toNumber(this[r(396)](0, t)), this[r(413)](this[r(396)](1, t)));

case "Math.min":
case r(789):
return Math.min(this[r(413)](this[r(A)](0, t)), this[r(413)](this[r(p)](1, t)));

case r(N):
case r(637):
case r(865):
var E = this[r(396)](0, t);
return String(void 0 !== E && null !== E ? E : "")[this[r(P)]]();

case r(540):
case r(1023):
var W = this[r(396)](0, t), X = String(void 0 !== W && null !== W ? W : ""), k = this[r(_)](1, t), Z = String(void 0 !== k && null !== k ? k : "");
return X[r(1023)](Z);

case r(766):
var R = this[r(A)](0, t), F = (X = String(void 0 !== R && null !== R ? R : ""), 
this[r(396)](1, t));
Z = String(void 0 !== F && null !== F ? F : "");
return X[r(U)](Z);

case r(T):
var Q = this[r(A)](0, t), $ = (X = String(void 0 !== Q && null !== Q ? Q : ""), 
this[r(396)](1, t));
Z = String(void 0 !== $ && null !== $ ? $ : "");
return X[r(T)](Z);

case r(Y):
return t[r(703)](this[r(I)](0, t));

case r(613):
var tt = t[r(703)](this[r(396)](0, t));
return Math[r(1120)](tt / 24);

case r(963):
return 1 === this.args[r(957)] ? t[r(V)](this.toNameOrString(this[r(h)][0], t)) : t[r(V)](this[r(1083)](this[r(h)][0], t), this[r(396)](1, t));

default:
return null;
}
}, q.prototype[S(e)] = function(t, r) {
var e = S;
return t < this[e(549)][e(957)] ? this[e(549)][t][e(o)](r) : null;
}, q[S(t)][S(413)] = function(t) {
if ("number" == typeof t) return t;
var r = Number(t);
return isNaN(r) ? 0 : r;
}, q[S(948)][S(1083)] = function(t, r) {
var e = S;
if (t instanceof G) return t.name;
var n = t[e(s)](r);
return String(void 0 !== n && null !== n ? n : "");
}, q[S(948)].toBool = function(t) {
var r = S;
return typeof t === r(n) ? t : null !== t && void 0 !== t && ("string" == typeof t ? t[r(i)]() === r(1082) : typeof t === r(a) ? 0 !== t : !!t);
}, q;
}();
A[r(1204)] = I;
var V = function() {
var t = 956, e = 472, n = 649, i = 549, a = r;
function s(t, r) {
var e = x;
this.actionName = t, this[e(549)] = r;
}
return s.prototype[a(415)] = function(r) {
var s = a, o = r[s(1272)](this[s(t)]);
if (!o) return N.Logger.swarn(s(e).concat(this[s(956)])), null;
var u = this[s(549)][s(n)](function(t) {
return t[s(415)](r);
});
return o.execute(u, r, this[s(i)]);
}, s;
}();
A.ActionCallNode = V;
var S = {};
Object.defineProperty(S, r(1172), {
value: !0
}), S[r(1018)] = void 0;
var q = a, m = A, K = function() {
var t = 1230, e = 948, n = 948, i = 603, a = 948, s = 673, o = 948, u = 765, v = 758, c = 1010, f = 906, h = 948, L = 390, w = 909, y = 892, g = 697, l = 948, z = 362, x = 823, M = 633, C = 362, b = 1302, B = 957, H = 957, d = 957, D = 796, j = 498, A = 765, p = 761, N = 1203, P = 1204, _ = 706, U = 682, G = 420, T = 706, Y = 706, I = 633, V = 809, S = 475, K = 1120, O = 475, J = 475, E = 1042, W = 865, X = 475, k = 1023, Z = 475, R = 682, F = 1042, Q = 1042, $ = 1094, tt = 602, rt = 496, et = 1023, nt = 1082, it = 475, at = 733, st = 715, ot = 567, ut = 868, vt = 1233, ct = 1042, ft = 682, ht = 608, Lt = 706, wt = 633, yt = 697, gt = 658, lt = 1042, zt = 673, xt = 706, Mt = 1042, Ct = 468, bt = 673, Bt = 706, Ht = 673, dt = 706, Dt = 468, jt = 673, At = 706, pt = 603, Nt = 468, Pt = 1179, _t = 1042, Ut = 909, Gt = 468, Tt = 1179, Yt = 909, It = 706, Vt = 1179, St = 892, qt = 344, mt = 909, Kt = 468, Ot = 1024, Jt = 909, Et = 468, Wt = 1042, Xt = 624, kt = 682, Zt = 498, Rt = 1204, Ft = 682, Qt = 1042, $t = 445, tr = 1302, rr = 1025, er = r;
function nr() {
this.s = "", this.i = 0;
}
return nr[er(948)][er(t)] = function(t) {
var r = er;
this.s = void 0 !== t && null !== t ? t : "", this.i = 0;
var e = this[r(Ft)]();
return this[r(Qt)](), this.i < this.s[r(957)] && q[r(688)][r($t)]("[HabbyTracker][AST] Parsing did not consume entire input: '"[r(tr)](this.s[r(rr)](this.i), "'")), 
e;
}, nr.prototype.parseTernary = function() {
var t = er, r = this[t(Xt)]();
this[t(1042)]();
if (this.match("?")) {
var e = this[t(kt)]();
this[t(Zt)](":");
var n = this[t(682)]();
return new (m[t(Rt)])(t(1198), [ r, e, n ]);
}
return r;
}, nr.prototype[er(624)] = function() {
for (var t = er, r = this[t(292)](); ;) {
this[t(Wt)]();
if (!this.peekStr("||")) break;
this.i += 2;
var e = this.parseAnd();
r = new (m[t(468)])("||", r, e);
}
return r;
}, nr.prototype.parseAnd = function() {
for (var t = er, r = this[t(Ot)](); ;) {
this.skipWs();
if (!this[t(Jt)]("&&")) break;
this.i += 2;
var e = this[t(1024)]();
r = new (m[t(Et)])("&&", r, e);
}
return r;
}, nr[er(e)][er(1024)] = function() {
for (var t = er, r = this[t(qt)](); ;) {
this[t(1042)]();
if (this[t(909)]("==")) this.i += 2, r = new m.BinaryOpNode("==", r, this[t(344)]()); else {
if (!this[t(mt)]("!=")) break;
this.i += 2, r = new (m[t(Kt)])("!=", r, this[t(qt)]());
}
}
return r;
}, nr[er(n)][er(344)] = function() {
for (var t = er, r = this[t(Pt)](); ;) {
this[t(_t)]();
if (this[t(Ut)]("<=")) this.i += 2, r = new (m[t(Gt)])("<=", r, this[t(Tt)]()); else if (this[t(Yt)](">=")) this.i += 2, 
r = new (m[t(468)])(">=", r, this[t(1179)]()); else if (this[t(It)]("<")) this.i++, 
r = new (m[t(468)])("<", r, this[t(1179)]()); else if (this.peek(">")) this.i++, 
r = new (m[t(468)])(">", r, this[t(Vt)]()); else {
if (!this[t(St)]("in")) break;
this.i += 2, this[t(1042)](), r = new (m[t(Gt)])("in", r, this[t(1179)]());
}
}
return r;
}, nr[er(948)][er(1179)] = function() {
for (var t = er, r = this.parseMultiplicative(); ;) {
this.skipWs();
if (this[t(At)]("+")) this.i++, r = new m.BinaryOpNode("+", r, this[t(pt)]()); else {
if (!this.peek("-")) break;
this.i++, r = new (m[t(Nt)])("-", r, this.parseMultiplicative());
}
}
return r;
}, nr[er(948)][er(i)] = function() {
for (var t = er, r = this.parseUnary(); ;) {
this[t(Mt)]();
if (this[t(706)]("*")) this.i++, r = new (m[t(Ct)])("*", r, this[t(bt)]()); else if (this[t(Bt)]("/")) this.i++, 
r = new (m[t(468)])("/", r, this[t(Ht)]()); else {
if (!this[t(dt)]("%")) break;
this.i++, r = new (m[t(Dt)])("%", r, this[t(jt)]());
}
}
return r;
}, nr[er(a)][er(s)] = function() {
var t = er;
this[t(lt)]();
return this[t(706)]("!") ? (this.i++, new (m[t(684)])("!", this[t(zt)]())) : this[t(xt)]("-") ? (this.i++, 
new (m[t(684)])("-", this[t(673)]())) : this[t(765)]();
}, nr[er(o)][er(u)] = function() {
var t = er;
this[t(ct)]();
if (this[t(706)]("(")) {
this.i++;
var r = this[t(ft)]();
return this.expect(")"), r;
}
if (this[t(706)]("[")) return this.parseArray();
if (this[t(706)]("{")) return this[t(ht)]();
if (this[t(Lt)]("'") || this.peek('"')) return this[t(906)]();
var e = this[t(697)]();
return this.isDigit(e) || "-" === e && this[t(wt)](this[t(yt)](1)) ? this.parseNumber() : this[t(gt)]();
}, nr[er(e)][er(658)] = function() {
var t = er, r = this[t(1068)]();
this[t(F)]();
if (this.peek("(")) {
this.i++;
var e = [];
this[t(1042)]();
if (!this[t(706)](")")) for (;;) {
e[t(1203)](this[t(758)]()), this[t(Q)]();
if (!this[t(706)](",")) break;
this.i++;
}
this[t(498)](")");
return [ t(521), t($), t(1267), t(tt), t(rt), t(394), t(793) ][t(et)](r) ? new (m[t(1148)])(r, e) : new (m[t(1204)])(r, e);
}
return r === t(nt) ? new (m[t(475)])(!0) : r === t(995) ? new (m[t(it)])(!1) : r === t(at) ? new (m[t(475)])(null) : [ t(st), "firebase", "appsflyer", t(466), t(ot), "thinkingdata" ][t(et)](r) ? new (m[t(475)])(r) : [ t(1084), t(ut), t(1096) ][t(1023)](r) ? new (m[t(it)])(r) : new (m[t(vt)])(r);
}, nr.prototype[er(v)] = function() {
var t = er;
this[t(E)]();
var r = this[t(1010)]();
if (r <= this.i) return this[t(682)]();
var e = this.s[t(1025)](this.i, r)[t(W)]();
return [ "<", ">", "<=", ">=", "==", "!=" ].includes(e) ? (this.i = r, new (m[t(X)])(e)) : !e[t(k)]("{") || e.startsWith("{") || e[t(k)]("?") ? this[t(R)]() : (this.i = r, 
new (m[t(Z)])(e));
}, nr[er(e)][er(c)] = function() {
for (var t = er, r = this.i, e = 0, n = !1, i = ""; r < this.s[t(957)]; ) {
var a = this.s[r];
if (n || "(" !== a && "[" !== a && "{" !== a) if (n || ")" !== a && "]" !== a && "}" !== a) if ("'" !== a && '"' !== a) {
if (!n && 0 === e && ("," === a || ")" === a)) return r;
n && "\\" === a && r + 1 < this.s[t(957)] ? r += 2 : r++;
} else {
n ? a === i && (n = !1, i = "") : (n = !0, i = a);
r++;
} else {
if (0 === e) return r;
e--, r++;
} else e++, r++;
}
return r;
}, nr[er(e)][er(f)] = function() {
var t = er, r = this.s[this.i];
this.expect(r);
for (var e = ""; this.i < this.s[t(957)] && this.s[this.i] !== r; ) {
var n = this.s[this.i++];
if ("\\" === n && this.i < this.s.length) {
e += this.s[this.i++];
} else e += n;
}
return this[t(498)](r), new (m[t(J)])(e);
}, nr[er(948)].parseNumber = function() {
var t = er, r = this.i;
this[t(T)]("-") && this.i++;
for (;this[t(633)](this[t(697)]()); ) this.i++;
if (this[t(Y)](".")) {
this.i++;
for (;this[t(I)](this.peekChar()); ) this.i++;
}
var e = this.s.substring(r, this.i), n = Number(e);
return isNaN(n) ? new (m[t(O)])(0) : Math[t(V)](n - Math.floor(n)) < 1e-7 ? new (m[t(S)])(Math[t(K)](n)) : new (m[t(O)])(n);
}, nr[er(h)][er(L)] = function() {
var t = er, r = [];
this[t(498)]("["), this[t(1042)]();
if (!this[t(_)]("]")) for (;;) {
r.push(this[t(U)]()), this[t(1042)]();
if (!this[t(_)](",")) break;
this.i++;
}
return this[t(498)]("]"), new m.FunctionCallNode(t(G), r);
}, nr.prototype.parseObject = function() {
var t = er, r = [];
this[t(j)]("{"), this[t(1042)]();
if (!this[t(706)]("}")) for (;;) {
var e = this[t(A)]();
e instanceof m[t(1233)] && (e = new (m[t(475)])(e[t(p)]));
this[t(1042)](), this[t(498)](":");
var n = this[t(682)]();
r[t(N)](new (m[t(1204)])(t(807), [ e, n ])), this[t(1042)]();
if (!this.peek(",")) break;
this.i++;
}
return this[t(j)]("}"), new (m[t(P)])(t(469), r);
}, nr[er(n)][er(1068)] = function() {
for (var t = er, r = ""; this.i < this.s[t(957)]; ) {
var e = this.s[this.i];
if (!this.isIdentChar(e)) break;
r += e, this.i++;
}
return r;
}, nr.prototype[er(1042)] = function() {
for (;this.i < this.s.length && this.isWhitespace(this.s[this.i]); ) this.i++;
}, nr[er(n)][er(706)] = function(t) {
var r = er;
return this.i < this.s[r(957)] && this.s[this.i] === t;
}, nr[er(n)][er(w)] = function(t) {
var r = er;
if (this.i + t[r(957)] > this.s.length) return !1;
for (var e = 0; e < t.length; e++) if (this.s[this.i + e] !== t[e]) return !1;
return !0;
}, nr[er(948)][er(y)] = function(t) {
var r = er;
if (this.i + t[r(H)] > this.s[r(957)]) return !1;
for (var e = 0; e < t[r(d)]; e++) if (this.s[this.i + e] !== t[e]) return !1;
var n = this.i + t[r(957)];
return !(n < this.s[r(d)] && this[r(D)](this.s[n]));
}, nr[er(a)][er(g)] = function(t) {
var r = er;
void 0 === t && (t = 0);
var e = this.i + t;
return e < this.s[r(B)] ? this.s[e] : "";
}, nr[er(l)][er(z)] = function(t) {
return !!this[er(706)](t) && (this.i++, !0);
}, nr[er(948)].expect = function(t) {
var r = er;
if (!this[r(C)](t)) throw new Error("ParseError:E1001 expected '"[r(b)](t, "' at position ")[r(b)](this.i));
}, nr[er(a)][er(x)] = function(t) {
return " " === t || "\t" === t || "\n" === t || "\r" === t;
}, nr[er(948)][er(M)] = function(t) {
return t >= "0" && t <= "9";
}, nr.prototype[er(796)] = function(t) {
return t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t >= "0" && t <= "9" || "_" === t || "." === t;
}, nr;
}();
S[r(1018)] = K;
var O = {};
Object[r(1219)](O, r(1172), {
value: !0
}), O[r(816)] = void 0;
var J = j, E = S, W = A, X = function() {
var t = 1230, e = 948, n = 1230, i = 1230, a = 918, s = {
_0x4a9ec1: 1018
}, o = r;
function u() {
var t = x;
this[t(454)] = new (E[t(s._0x4a9ec1)])();
}
return u[o(948)][o(t)] = function(t) {
var r = o, e = this.parser[r(i)](void 0 !== t && null !== t ? t : "");
return new (W[r(1199)])(e, J[r(a)].Any, [ e ]);
}, u[o(e)][o(545)] = function(t) {
var r = o;
try {
return this[r(n)](t), {
valid: !0
};
} catch (t) {
return {
valid: !1,
errorMessage: t instanceof Error ? t.message : String(t)
};
}
}, u;
}();
O[r(816)] = X;
var k = {}, Z = {};
Object[r(1219)](Z, r(1172), {
value: !0
}), Z[r(1273)] = function(t) {
R = t;
}, Z[r(687)] = function() {
return R;
};
var R = null;
Object.defineProperty(k, "__esModule", {
value: !0
}), k[r(773)] = void 0;
var F = a, Q = Z, $ = function() {
var t = 948, e = 975, n = 985, i = 948, a = 749, s = 626, o = 1062, u = 320, v = 415, c = 1079, f = 1302, h = 687, L = 445, w = 445, y = 1302, g = 1302, l = 331, z = 334, M = 879, C = 334, b = 900, B = 1157, H = 1157, d = 900, D = 963, j = 550, A = 1107, p = 766, N = 688, P = 519, _ = 589, U = 853, G = 1239, T = {
_0x59d9bf: 1255,
_0x503590: 439
}, Y = r;
function I(t, r, e, n, i) {
var a = x;
void 0 === i && (i = {}), this.variableManager = t, this[a(911)] = r, this[a(695)] = e, 
this[a(T._0x59d9bf)] = n, this[a(T._0x503590)] = i, this.builtins = new Map(), this[a(334)] = new Map();
}
return I[Y(t)][Y(e)] = function(t) {
var r = Y;
if (t[r(p)](r(384))) {
var e = t[r(1025)](6), n = this[r(439)][e];
return F[r(N)][r(P)](r(_).concat(e, r(U)).concat(n, r(G)), this[r(439)]), n;
}
return this.variableManager[r(901)](t);
}, I[Y(948)][Y(718)] = function(t, r) {
var e = Y;
this[e(j)][e(A)](t, r);
}, I.prototype.lookupValue = function(t, r) {
var e = Y;
return this.lookupManager[e(D)](t, r);
}, I[Y(948)].injectBuiltInVariable = function(t, r) {
var e = Y;
this[e(H)][e(d)](t, r);
}, I.prototype.getBuiltInVariable = function(t) {
return this[Y(B)].get(t);
}, I[Y(t)][Y(n)] = function(t, r) {
var e = Y;
this[e(C)][e(b)](t, r);
}, I[Y(948)].getActionHandler = function(t) {
var r = Y;
return this[r(z)][r(M)](t) || null;
}, I[Y(i)][Y(554)] = function(t, r, e) {
var n = Y, i = (0, Q[n(h)])();
i ? (F.Logger.slog(n(1214)[n(g)](t, "/").concat(r), n(788), void 0 !== e ? e : {}), 
Promise[n(1188)](i(r, void 0 !== e ? e : {}, {
platform: t[n(l)](),
actionType: "AstExpressionEvent"
}))) : (F.Logger[n(L)](n(1176)[n(1302)](t, "/").concat(r), n(788), void 0 !== e ? e : {}), 
F[n(688)][n(w)]("[HabbyTracker][ExpressionContext] Event dropped because no EventSender is registered: "[n(y)](t, "/").concat(r)));
}, I[Y(i)][Y(a)] = function(t) {
var r = Y;
if (!t) return t;
for (var e, n = t, i = /\{([^}]+)\}/g; null !== (e = i[r(u)](t)); ) {
var a = e[0], s = e[1];
try {
var o = this.engine[r(1230)](s)[r(v)](this);
n = n[r(c)](a, String(void 0 !== o && null !== o ? o : ""));
} catch (t) {
F[r(688)][r(445)](r(1132)[r(f)](s));
}
}
return n;
}, I.prototype[Y(703)] = function(t) {
var r, e = Y;
if (null === t || void 0 === t) return 0;
if ("number" == typeof t) r = t; else if (t instanceof Date) r = t[e(s)](); else {
if ("string" != typeof t) return 0;
var n = parseInt(t, 10);
if (isNaN(n)) {
r = new Date(t)[e(626)]();
} else r = n;
}
return (Date[e(o)]() - r) / 36e5;
}, I;
}();
k[r(773)] = $, function(t) {
var e = 1219, i = 1172, a = 773, s = 816, o = 1219, u = 1219, v = 1219, c = 1206, f = 1162, h = 902, L = 1172, w = r, y = n && n[w(938)] || (Object[w(471)] ? function(t, r, e, n) {
var i = w;
void 0 === n && (n = e);
var a = Object[i(h)](r, e);
(!a || (i(879) in a ? !r[i(L)] : a[i(366)] || a[i(652)])) && (a = {
enumerable: !0,
get: function() {
return r[e];
}
}), Object.defineProperty(t, n, a);
} : function(t, r, e, n) {
void 0 === n && (n = e);
t[n] = r[e];
}), g = n && n[w(1232)] || function(t, r) {
var e = w;
for (var n in t) n === e(c) || Object[e(948)][e(1147)][e(f)](r, n) || y(r, t, n);
};
Object[w(e)](t, w(i), {
value: !0
}), t[w(a)] = t[w(s)] = t[w(1018)] = void 0, g(j, t), g(A, t);
var l = S;
Object[w(o)](t, "ExpressionParser", {
enumerable: !0,
get: function() {
return l[w(1018)];
}
});
var z = O;
Object[w(u)](t, "ExpressionEngine", {
enumerable: !0,
get: function() {
return z[w(816)];
}
});
var x = k;
Object[w(v)](t, w(773), {
enumerable: !0,
get: function() {
return x[w(773)];
}
});
}(D);
var tt = {};
Object[r(1219)](tt, r(1172), {
value: !0
}), tt.BackfillStageEventsActionHandler = tt[r(745)] = tt.EventMultipleActionHandler = tt[r(1261)] = tt.EventIfActionHandler = tt[r(1312)] = tt.IncrementIfActionHandler = void 0;
var rt = a, et = function() {
var t = 1306, e = 948, n = 948, i = 413, a = 1182, s = 957, o = 519, u = 330, v = 688, c = 519, f = 463, h = 688, L = 821, w = 761, y = 761, g = 519, l = 775, z = 727, M = 1302, C = 1302, b = 1302, B = 445, H = 614, d = 413, D = 1115, j = {
_0x2be526: 956
}, A = r;
function p() {
var t = x;
this[t(j._0x2be526)] = t(394);
}
return p[A(948)][A(t)] = function(t, r, e) {
var n = A;
if (t[n(s)] < 3) return rt[n(688)][n(445)]("[HabbyTracker][IncrementIfAction] 需要3个参数: condition, variableName, delta"), 
null;
rt[n(688)][n(o)](n(u)), rt[n(v)][n(c)](n(993), t[0], ", type:", typeof t[0]), rt[n(v)][n(519)]("[HabbyTracker][IncrementIfAction]   args[1] (variableName):", t[1], n(434), typeof t[1]), 
rt[n(688)][n(519)](n(f), t[2], ", type:", typeof t[2]);
e && (rt[n(v)].slog("[HabbyTracker][IncrementIfAction]   argNodes[0]:", e[0]), rt.Logger[n(519)]("[HabbyTracker][IncrementIfAction]   argNodes[1]:", e[1]), 
rt[n(h)][n(519)](n(L), e[2]));
var i, a = this.toBoolean(t[0]);
e && e[1] && e[1][n(w)] ? (i = e[1][n(y)], rt[n(688)][n(g)]("[HabbyTracker][IncrementIfAction] 从 AST 节点获取变量名:", i)) : (i = String(t[1]), 
rt[n(h)][n(519)](n(l), i));
var x = this[n(413)](t[2]);
rt[n(h)].slog(n(1088)[n(1302)](a, n(429))[n(1302)](i, n(z))[n(M)](x));
if (!a) return rt.Logger[n(519)]("[HabbyTracker][IncrementIfAction] 条件为假，跳过增量操作 (variable="[n(C)](i, n(727))[n(b)](x, ")")), 
null;
if (!i) return rt.Logger[n(B)](n(H)), null;
var j = r[n(975)](i), p = this[n(d)](j), N = p + x;
return rt[n(688)][n(519)](n(D)[n(1302)](i, ": ")[n(1302)](p, n(984)).concat(x, " = ")[n(1302)](N)), 
r.setVariable(i, N), null;
}, p[A(e)].toBoolean = function(t) {
var r = A;
if (typeof t === r(a)) return t;
if (null === t || void 0 === t) return !1;
if (typeof t === r(294)) {
var e = t[r(331)]();
return "true" === e || "1" === e;
}
return Boolean(t);
}, p[A(n)][A(i)] = function(t) {
if (typeof t === A(1103)) return t;
if (null === t || void 0 === t) return 0;
var r = Number(t);
return isNaN(r) ? 0 : r;
}, p;
}();
tt[r(850)] = et;
var nt = function() {
var t = 948, e = 1306, n = 331, i = 688, a = 860, s = 1302, o = 1302, u = 1302, v = 1302, c = 688, f = 445, h = 519, L = 718, w = r;
function y() {
this[x(956)] = "setIf";
}
return y[w(t)][w(e)] = function(t, r, e) {
var n = w;
if (t[n(957)] < 3) return rt[n(i)][n(445)]("[HabbyTracker][SetIfAction] 需要3个参数: condition, variableName, value"), 
null;
var y, g = this[n(a)](t[0]);
y = e && e[1] && e[1][n(761)] ? e[1].name : String(t[1]);
var l = t[2];
rt.Logger.slog("[HabbyTracker][SetIfAction] 执行: condition="[n(s)](g, n(429))[n(o)](y, n(661))[n(u)](l));
return g ? y ? (rt[n(688)][n(h)](n(662)[n(o)](y, n(853)).concat(l)), r[n(L)](y, l), 
null) : (rt[n(c)][n(f)](n(1089)), null) : (rt[n(i)][n(519)](n(994)[n(v)](y, n(661))[n(u)](l, ")")), 
null);
}, y[w(t)][w(860)] = function(t) {
var r = w;
if (typeof t === r(1182)) return t;
if (null === t || void 0 === t) return !1;
if (typeof t === r(294)) {
var e = t[r(n)]();
return e === r(1082) || "1" === e;
}
return Boolean(t);
}, y;
}();
tt[r(1312)] = nt;
var it = function() {
var t = 948, e = 860, n = 1082, i = 445, a = 359, s = 860, o = 761, u = 688, v = 849, c = 688, f = 519, h = 1184, L = 465, w = 1302, y = {
_0x513325: 956
}, g = r;
function l() {
var t = x;
this[t(y._0x513325)] = t(1094);
}
return l.prototype.execute = function(t, r, e) {
var n = x;
if (t.length < 3) return rt.Logger[n(i)](n(a)), null;
var y, g = this[n(s)](t[0]), l = String(t[1]);
if ((null === t[2] || void 0 === t[2]) && e && e[2]) {
y = e[2][n(o)] || "", rt.Logger.slog("[HabbyTracker][EventIfAction] 从 AST 节点获取事件名: "[n(1302)](y));
} else y = String(void 0 !== t[2] && null !== t[2] ? t[2] : "");
var z = r[n(749)](y), M = t.length > 3 ? t[3] : void 0;
rt[n(u)][n(519)](n(426)[n(1302)](g, n(v))[n(1302)](l, n(465))[n(1302)](z));
return g ? (rt[n(688)].slog(n(290).concat(l, ".")[n(1302)](z), M), r[n(554)](l, z, M), 
null) : (rt[n(c)][n(f)](n(h).concat(l, n(L))[n(w)](z, ")")), null);
}, l[g(t)][g(e)] = function(t) {
var r = g;
if ("boolean" == typeof t) return t;
if (null === t || void 0 === t) return !1;
if (typeof t === r(294)) {
var e = t.toLowerCase();
return e === r(n) || "1" === e;
}
return Boolean(t);
}, l;
}();
tt[r(783)] = it;
var at = function() {
var t = 808, e = 761, n = 688, i = 1028, a = 1302, s = 688, o = 519, u = {
_0x1230f0: 956,
_0x3ec1d8: 521
}, v = r;
function c() {
var t = x;
this[t(u._0x1230f0)] = t(u._0x3ec1d8);
}
return c[v(948)][v(1306)] = function(r, u, c) {
var f = v;
if (r[f(957)] < 2) return rt.Logger.swarn(f(t)), null;
var h, L = String(r[0]);
if ((null === r[1] || void 0 === r[1]) && c && c[1]) {
h = c[1][f(e)] || "", rt[f(n)][f(519)](f(i)[f(a)](h));
} else h = String(void 0 !== r[1] && null !== r[1] ? r[1] : "");
var w = u[f(749)](h), y = r[f(957)] > 2 ? r[2] : void 0;
return rt[f(s)][f(o)](f(1069)[f(1302)](L, ".")[f(1302)](w), y), u.sendEvent(L, w, y), 
null;
}, c;
}();
tt[r(1261)] = at;
var st = function() {
var t = 1306, e = 948, n = 413, i = 957, a = 889, s = 761, o = 445, u = 445, v = 688, c = 519, f = 1302, h = 1060, L = 887, w = 988, y = r;
function g() {
var t = x;
this[t(956)] = t(1267);
}
return g[y(948)][y(t)] = function(t, r, e) {
var n = y;
if (t[n(i)] < 3) return rt[n(688)][n(445)](n(a)), null;
var g, l = String(t[0]);
if ((null === t[1] || void 0 === t[1]) && e && e[1]) {
var z = e[1];
if (!z[n(761)]) return rt[n(688)][n(o)](n(1192).concat(l, "）")), null;
g = z[n(s)], rt[n(688)].slog(n(448).concat(g));
} else {
if (null === t[1] || void 0 === t[1]) return rt[n(688)][n(u)]("[HabbyTracker][EventMultipleAction] 事件名参数为 null/undefined，跳过发送（platform="[n(1302)](l, "）")), 
null;
g = String(t[1]);
}
var x = r.evaluateTemplate(g), M = this[n(413)](t[2]);
rt[n(v)][n(c)](n(1298).concat(M, " 次: ").concat(l, ".")[n(f)](x)), r[n(554)](l, x);
for (var C = 1; C < M; C++) {
var b = 1e3 * C;
rt.Logger[n(c)](n(h)[n(1302)](C + 1, n(L))[n(1302)](l, ".")[n(1302)](x, n(w))[n(f)](b, n(1288))), 
setTimeout(function() {
r.sendEvent(l, x);
}, b);
}
return null;
}, g[y(e)][y(n)] = function(t) {
if (typeof t === y(1103)) return t;
if (null === t || void 0 === t) return 0;
var r = Number(t);
return isNaN(r) ? 0 : r;
}, g;
}();
tt[r(707)] = st;
var ot = function() {
var t = 957, e = 445, n = 688, i = 445, a = 1125, s = 1302, o = 734, u = 1302, v = 413, c = 1079, f = 688, h = 915, L = r;
function w() {
var t = x;
this.actionName = t(602);
}
return w[L(948)][L(1306)] = function(r, w, y) {
var g = L;
if (r[g(t)] < 5) return rt[g(688)][g(e)](g(638)), null;
var l = String(r[0]);
if (null === r[1] || void 0 === r[1]) return rt[g(n)][g(i)](g(a)[g(s)](l, "）")), 
null;
var z = String(r[1]), x = String(r[3]);
if (null === r[4] || void 0 === r[4]) return rt[g(688)][g(445)](g(o)), null;
var M = Array[g(1231)](r[4]) ? r[4] : [ r[4] ], C = y && y[2] ? y[2] : null, b = C && "%" === C.op;
rt.Logger[g(519)](g(1270).concat(b, ", operator=")[g(u)](x, ", thresholds="), M);
for (var B = 0; B < M.length; B++) {
var H = this[g(v)](M[B]), d = void 0;
C && "function" == typeof C.evaluate ? (w[g(500)](g(410), H), d = this[g(v)](C[g(415)](w))) : d = this[g(413)](r[2]);
var D = b ? 0 : H, j = !1;
switch (x) {
case "==":
j = d === D;
break;

case ">":
j = d > D;
break;

case "<":
j = d < D;
break;

case ">=":
j = d >= D;
break;

case "<=":
j = d <= D;
break;

default:
rt.Logger[g(445)](g(884)[g(u)](x));
continue;
}
if (j) {
var A = String(H).replace(".", "-"), p = z[g(c)](g(639), A);
rt[g(f)].slog(g(479).concat(d, " ").concat(x, " ").concat(D, g(h))[g(u)](H, "), 发送事件: ").concat(p)), 
w.sendEvent(l, p);
}
}
return null;
}, w[L(948)].toNumber = function(t) {
if (typeof t === L(1103)) return t;
if (null === t || void 0 === t) return 0;
var r = Number(t);
return isNaN(r) ? 0 : r;
}, w;
}();
tt[r(745)] = ot;
var ut = function() {
var t = 1306, e = 948, n = 519, i = 516, a = 738, s = 1079, o = 407, u = 1079, v = 407, c = 1275, f = 571, h = 1302, L = 688, w = 929, y = 504, g = 1242, l = 1302, z = 718, M = 688, C = 688, b = 445, B = 413, H = 294, d = 761, D = 1231, j = 519, A = 897, p = 1302, N = 1076, P = 497, _ = 1286, U = 1231, G = {
_0x31ccaf: 793
}, T = r;
function Y() {
var t = x;
this.actionName = t(G._0x31ccaf);
}
return Y[T(948)][T(t)] = function(t, r, e) {
var n = T;
if (t[n(957)] < 5) return rt[n(C)].swarn(n(301)), null;
var i = String(t[0]);
if (null === t[1] || void 0 === t[1]) return rt[n(688)][n(b)]("[HabbyTracker][BackfillStageEventsAction] 事件名模板为 null/undefined，跳过（platform=".concat(i, "）")), 
null;
var a = String(t[1]), s = this[n(B)](t[2]), o = this[n(413)](t[3]), u = null;
if (t.length >= 6) if (typeof t[5] === n(H)) u = t[5]; else if (null === t[5] || void 0 === t[5]) {
var v = e && e[5] ? e[5] : null;
v && v[n(761)] && (u = v[n(d)]);
}
var c = null, f = null;
if (Array[n(D)](t[4])) f = t[4]; else if ("string" == typeof t[4]) c = t[4]; else if (null === t[4] || void 0 === t[4]) {
var h = e && e[4] ? e[4] : null;
if (!(c = h && h[n(d)] ? h[n(d)] : null)) return rt[n(C)].swarn(n(1289)), null;
} else f = [ t[4] ];
rt.Logger[n(j)](n(A)[n(1302)](s, n(285))[n(p)](o, n(778))[n(1302)](c, n(669)).concat(u));
if (null !== f) this[n(N)](i, a, s, o, f, !0, u, r); else for (var L = 1; L <= s; L++) {
var w = r[n(P)](c, L);
if (null !== w && void 0 !== w) {
var y = Array[n(U)](w) ? w : [ w ], g = L === s;
this[n(N)](i, a, L, o, y, g, u, r);
} else rt[n(688)][n(519)](n(1015)[n(1302)](L, n(_)));
}
return null;
}, Y[T(e)][T(1076)] = function(t, r, e, x, C, b, B, H) {
for (var d = T, D = 0, j = C; D < j[d(957)]; D++) {
var A = j[D], p = this[d(413)](A);
if (b && p > x) rt[d(688)][d(n)](d(i).concat(e, "章-第")[d(1302)](p, "关 (当前: 第")[d(1302)](x, "关)")); else {
var N = r.replace(d(a), String(e))[d(s)](d(o), String(p));
if (B) {
var P = B[d(1079)](d(a), String(e))[d(u)](d(v), String(p));
if (H[d(975)](d(c)[d(1302)](P))) {
rt[d(688)].slog(d(f)[d(1302)](N, d(435))[d(h)](P, ")"));
continue;
}
rt[d(L)][d(n)](d(w)[d(1302)](N, d(y))[d(1302)](e, d(g))[d(l)](p, "关)")), H.sendEvent(t, N), 
H[d(z)](d(1275).concat(P), !0);
} else rt[d(M)][d(n)]("[HabbyTracker][BackfillStageEventsAction] 补报关卡事件: ".concat(N, d(504))[d(l)](e, "章-第")[d(1302)](p, "关)")), 
H[d(554)](t, N);
}
}
}, Y[T(948)][T(413)] = function(t) {
if (typeof t === T(1103)) return t;
if (null === t || void 0 === t) return 0;
var r = Number(t);
return isNaN(r) ? 0 : r;
}, Y;
}();
tt[r(805)] = ut, Object.defineProperty(d, r(1172), {
value: !0
}), d[r(1003)] = void 0;
var vt = D, ct = tt, ft = function() {
var t = 948, e = 442, n = 948, i = 1143, a = 1169, s = 607, o = 1025, u = 1203, v = 865, c = 405, f = 1146, h = 957, L = 812, w = 607, y = 450, g = 1079, l = 431, z = 374, M = 1302, C = 872, b = 670, B = 769, H = 722, d = 947, D = 1302, j = 550, A = 985, p = 394, N = 1312, P = 1261, _ = 707, U = 985, G = 450, T = 1311, Y = 921, I = 369, V = 818, S = 338, q = 349, m = 500, K = 748, O = 1230, J = 415, E = 1182, W = 294, X = 331, k = 1082, Z = 865, R = 1082, F = 557, Q = 431, $ = 557, tt = 1081, rt = 309, et = 609, nt = {
_0x947cf1: 800
}, it = r;
function at(t, r, e, n) {
var i = x;
this[i(431)] = t, this.variableManager = r, this[i(911)] = e, this.platformAdapter = n, 
this[i(557)] = !0, this[i(nt._0x947cf1)] = new vt.ExpressionEngine();
}
return at[it(t)][it(e)] = function(t) {
var r = it;
this[r($)] = t, this[r(431)][r(670)](r(tt).concat(r(t ? rt : et)));
}, at[it(948)].evaluate = function(t, r, e) {
var n = it;
if (!t || "" === t[n(Z)]() || t[n(865)]() === n(R)) return !0;
if (this[n(F)] && this.shouldUseAst(t)) try {
var i = this[n(1143)](t, r, e);
return this[n(Q)].log(n(345).concat(t, " = ").concat(i)), i;
} catch (t) {
this.logger.warn("[ConditionEvaluator] AST evaluation failed, falling back to simple evaluator: ".concat(t));
}
return this[n(1169)](t, r);
}, at[it(t)][it(928)] = function(t) {
return !t[it(1023)]("${");
}, at[it(n)][it(i)] = function(t, r, e) {
var n = it, i = e || this[n(911)];
if (!this[n(j)] || !i) throw new Error(n(729));
var a = new vt.ExpressionContextAdapter(this[n(550)], i, this[n(695)], this[n(800)], r.eventData || {});
a[n(A)](n(p), new (ct[n(850)])()), a[n(985)]("setIf", new (ct[n(N)])()), a.registerActionHandler("eventIf", new (ct[n(783)])()), 
a[n(A)](n(521), new (ct[n(P)])()), a[n(985)](n(1267), new (ct[n(_)])()), a[n(U)](n(602), new ct.EventForThresholdsActionHandler());
if (r[n(G)]) {
var s = r.userProfile;
a.injectBuiltInVariable("user.retention_days", s[n(T)]), a.injectBuiltInVariable("user.iap_count", s[n(Y)]), 
a.injectBuiltInVariable(n(I), s[n(V)]), a[n(500)](n(1121), s[n(Y)] > 0), a[n(500)](n(894), s[n(786)] || s.userRegisterTimestamp), 
a[n(500)](n(768), s[n(S)]), a[n(500)](n(447), s.extendedData ? s.extendedData[n(q)] : void 0), 
a[n(m)]("user.country", s.extendedData ? s[n(K)][n(1294)] : void 0);
for (var o = 0, u = Object[n(1265)](s.flags); o < u[n(957)]; o++) {
var v = u[o], c = v[0], f = v[1];
a[n(500)](n(1275)[n(1302)](c), f);
}
}
var h = this[n(800)][n(O)](t)[n(J)](a);
return typeof h === n(E) ? h : typeof h === n(1103) ? 0 !== h : typeof h === n(W) ? h[n(X)]() === n(k) : !!h;
}, at[it(t)][it(a)] = function(t, r) {
var e = it, n = t;
this.variableManager && (n = this[e(550)][e(872)](t));
try {
var i = this[e(C)](n, r);
this[e(431)][e(b)](e(B)[e(1302)](t, " => ")[e(1302)](i));
var a = this[e(H)](i);
return this.logger[e(670)](e(1091)[e(1302)](a)), a;
} catch (r) {
return this[e(431)].error(e(d).concat(t, e(411))[e(D)](r)), !1;
}
}, at[it(948)][it(872)] = function(t, r) {
var e = 1101, n = 1302, i = 492, a = it, s = this, o = t;
if (r[a(450)]) {
var u = r[a(y)];
o = (o = o[a(g)](/\$\{userProfile\.(\w+)\}/g, function(t, r) {
var e = a, o = u[r];
return void 0 !== o ? String(o) : (s[e(431)].warn(e(799)[e(n)](r)), e(i));
})).replace(/\$\{flags\.(\w+)\}/g, function(t, r) {
var n = a, i = u[n(e)][r];
return void 0 !== i ? String(i) : n(995);
});
}
return r.eventData && (o = o[a(1079)](/\$\{eventData\.(\w+)\}/g, function(t, e) {
var n = a, i = r.eventData[e];
return void 0 !== i ? String(i) : (s[n(l)][n(z)](n(671)[n(M)](e)), n(492));
})), o;
}, at.prototype.evaluateExpression = function(t) {
var r = it, e = this, n = t[r(v)]();
if (n.includes("||")) {
return this[r(c)](n, "||").some(function(t) {
return e[r(722)](t);
});
}
if (n[r(1023)]("&&")) {
return this[r(405)](n, "&&")[r(f)](function(t) {
return e.evaluateExpression(t);
});
}
if (n[r(766)]("!")) return !this.evaluateExpression(n[r(1025)](1));
for (var i = 0, a = [ "==", "!=", ">=", "<=", ">", "<" ]; i < a[r(h)]; i++) {
var s = a[i];
if (n[r(1023)](s)) {
var o = n[r(L)](s)[r(649)](function(t) {
return t.trim();
}), u = o[0], y = o[1];
if (u && y) return this[r(w)](u, y, s);
}
}
if (n === r(1082)) return !0;
if ("false" === n) return !1;
var g = Number(n);
return isNaN(g) ? (this.logger[r(374)](r(256)[r(1302)](n)), !1) : 0 !== g;
}, at[it(n)][it(405)] = function(t, r) {
for (var e = it, n = [], i = "", a = 0, s = 0; s < t.length; ) {
var v = t[s];
"(" === v ? (a++, i += v, s++) : ")" === v ? (a--, i += v, s++) : 0 === a && t[e(o)](s, s + r[e(957)]) === r ? (n.push(i.trim()), 
i = "", s += r[e(957)]) : (i += v, s++);
}
return i.trim() && n[e(u)](i.trim()), n;
}, at[it(948)][it(s)] = function(t, r, e) {
var n = Number(t), i = Number(r);
if (!isNaN(n) && !isNaN(i)) switch (e) {
case "==":
return n === i;

case "!=":
return n !== i;

case ">":
return n > i;

case "<":
return n < i;

case ">=":
return n >= i;

case "<=":
return n <= i;
}
switch (e) {
case "==":
return t === r;

case "!=":
return t !== r;

case ">":
return t > r;

case "<":
return t < r;

case ">=":
return t >= r;

case "<=":
return t <= r;
}
return !1;
}, at;
}();
d[r(1003)] = ft;
var ht = {}, Lt = {}, wt = n && n[r(541)] || function(t, r, e, n) {
var i = 726, a = 590, s = {
_0x5e6dff: 357
};
function o(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, u) {
var v = {
_0x3b8abb: 1114
}, c = x;
function f(t) {
var r = x;
try {
L(n[r(590)](t));
} catch (t) {
u(t);
}
}
function h(t) {
var r = x;
try {
L(n[r(s._0x5e6dff)](t));
} catch (t) {
u(t);
}
}
function L(t) {
var r = x;
t[r(v._0x3b8abb)] ? e(t.value) : o(t[r(1034)]).then(f, h);
}
L((n = n[c(i)](t, r || []))[c(a)]());
});
}, yt = n && n[r(696)] || function(t, e) {
var n, i, a, s = 590, o = 357, u = 1117, v = {
_0x501715: 1117,
_0x34c020: 357,
_0x128213: 1117,
_0x521c9d: 590,
_0xef37d9: 1162,
_0x329b36: 473,
_0x161e9f: 926,
_0x57fa21: 943,
_0x3e40cb: 957,
_0x31c072: 473,
_0x28b48f: 473,
_0x22a599: 514,
_0x5a8114: 1203,
_0x40242e: 926
}, c = r, f = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, h = Object[c(471)]((typeof Iterator === c(1247) ? Iterator : Object)[c(948)]);
return h[c(s)] = L(0), h[c(o)] = L(1), h[c(u)] = L(2), typeof Symbol === c(1247) && (h[Symbol.iterator] = function() {
return this;
}), h;
function L(t) {
return function(r) {
return w([ t, r ]);
};
}
function w(r) {
var s = c;
if (n) throw new TypeError("Generator is already executing.");
for (;h && (h = 0, r[0] && (f = 0)), f; ) try {
if (n = 1, i && (a = 2 & r[0] ? i[s(v._0x501715)] : r[0] ? i[s(v._0x34c020)] || ((a = i[s(v._0x128213)]) && a.call(i), 
0) : i[s(v._0x521c9d)]) && !(a = a[s(v._0xef37d9)](i, r[1]))[s(1114)]) return a;
(i = 0, a) && (r = [ 2 & r[0], a[s(1034)] ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
f[s(v._0x329b36)]++;
return {
value: r[1],
done: !1
};

case 5:
f[s(473)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = f[s(514)][s(v._0x161e9f)](), f[s(v._0x57fa21)].pop();
continue;

default:
if (!(a = f[s(943)], a = a.length > 0 && a[a[s(v._0x3e40cb)] - 1]) && (6 === r[0] || 2 === r[0])) {
f = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
f.label = r[1];
break;
}
if (6 === r[0] && f[s(v._0x31c072)] < a[1]) {
f.label = a[1], a = r;
break;
}
if (a && f[s(473)] < a[2]) {
f[s(v._0x28b48f)] = a[2], f[s(v._0x22a599)][s(v._0x5a8114)](r);
break;
}
a[2] && f[s(514)][s(926)]();
f.trys[s(v._0x40242e)]();
continue;
}
r = e.call(t, f);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object[r(1219)](Lt, r(1172), {
value: !0
}), Lt[r(371)] = void 0;
var gt = a, lt = Z, zt = function() {
var t = 948, e = 835, n = 992, i = 936, a = 1303, s = 591, o = 905, u = 779, v = 558, c = 431, f = 266, h = 905, L = 670, w = 1302, y = 1062, g = 670, l = 735, z = {
_0x5b14d1: 695,
_0xca1dee: 742
}, M = r;
function C(t, r, e) {
var n = x;
void 0 === e && (e = C[n(591)]), this[n(z._0x5b14d1)] = t, this[n(431)] = r, this[n(z._0xca1dee)] = e, 
this.eventQueue = [], this[n(779)] = !1, this[n(558)] = null;
}
return C[M(t)][M(e)] = function(t, r, e) {
var n = M, i = {
platform: t,
eventName: r,
parameters: e,
createTime: Date[n(y)]()
};
this.eventQueue[n(1203)](i), this[n(431)][n(g)](n(l).concat(t, "/")[n(1302)](r, ", queue size: ")[n(1302)](this.eventQueue[n(957)])), 
this[n(992)]();
}, C[M(948)][M(1128)] = function(t) {
var r, e = M;
t && 0 !== t[e(957)] && ((r = this[e(h)])[e(1203)][e(726)](r, t), this[e(431)][e(L)](e(1211)[e(w)](t[e(957)], e(1309))[e(1302)](this.eventQueue[e(957)])), 
this[e(992)]());
}, C[M(948)][M(1009)] = function(t, r, e) {
var n = M;
this[n(c)][n(670)](n(535)[n(1302)](t, "/")[n(1302)](r)), this[n(f)](t, r, e);
}, C.prototype[M(n)] = function() {
var t = M, r = this;
this[t(779)] || (this[t(u)] = !0, this.processingTimer && clearTimeout(this[t(v)]), 
this.processingTimer = setTimeout(function() {
r[t(936)]();
}, this.config[t(1276)]));
}, C[M(948)][M(i)] = function() {
var t = 473, r = 905, e = 779, n = 742, i = 957, a = 905, s = 670, o = 957, u = 617, v = 473, c = 266, f = 401, h = 492, L = 1276, w = 431, y = 670;
return wt(this, void 0, void 0, function() {
var g, l, z, M, C, b, B = this;
return yt(this, function(H) {
var d = 936, D = x;
switch (H[D(t)]) {
case 0:
if (0 === this[D(r)].length) return this[D(e)] = !1, [ 2 ];
g = Math[D(297)](this[D(n)][D(460)], this[D(905)][D(i)]), l = this[D(a)].splice(0, g), 
this[D(431)][D(s)](D(1213)[D(1302)](l[D(o)], D(u))), z = 0, M = l, H[D(t)] = 1;

case 1:
if (!(z < M[D(i)])) return [ 3, 6 ];
C = M[z], H[D(v)] = 2;

case 2:
H[D(943)][D(1203)]([ 2, 4, , 5 ]);
return [ 4, this[D(c)](C.platform, C.eventName, C[D(319)]) ];

case 3:
H.sent();
return [ 3, 5 ];

case 4:
b = H.sent(), this.logger.error("[EventBatchProcessor] Failed to send event: "[D(1302)](C[D(531)], "/")[D(1302)](C.eventName), b);
return [ 3, 5 ];

case 5:
z++;
return [ 3, 1 ];

case 6:
this.eventQueue[D(o)] > 0 ? (this.logger.log(D(1211).concat(this[D(905)].length, D(f))), 
typeof requestAnimationFrame !== D(h) ? requestAnimationFrame(function() {
return B[D(d)]();
}) : setTimeout(function() {
return B[D(936)]();
}, this[D(742)][D(L)])) : (this[D(e)] = !1, this[D(w)][D(y)]("[EventBatchProcessor] Batch processing completed"));
return [ 2 ];
}
});
});
}, C[M(948)][M(266)] = function(t, r, e) {
var n = 1188, i = 371, a = 688, s = 886, o = 1302, u = 374;
return wt(this, void 0, void 0, function() {
var v;
return yt(this, function(c) {
var f = x;
switch (c[f(473)]) {
case 0:
return (v = (0, lt[f(687)])()) ? [ 4, Promise[f(n)](v(r, void 0 !== e ? e : {}, {
platform: t.toLowerCase(),
actionType: f(i)
})) ] : [ 3, 2 ];

case 1:
c[f(284)]();
return [ 2 ];

case 2:
gt[f(a)].swarn(f(s)[f(o)](t, "/")[f(1302)](r), "color:#16a34a;font-weight:bold", void 0 !== e ? e : {}), 
this[f(431)][f(u)]("[EventBatchProcessor] Event dropped because no EventSender is registered: "[f(o)](t, "/")[f(1302)](r));
return [ 2 ];
}
});
});
}, C.prototype.getQueueSize = function() {
var t = M;
return this[t(905)][t(957)];
}, C[M(t)][M(a)] = function() {
var t = M;
this[t(o)] = [], this[t(431)][t(670)]("[EventBatchProcessor] Queue cleared");
}, C[M(948)][M(1033)] = function() {
var t = 431, r = 670, e = 1302, n = 402, i = 473, a = 779;
return wt(this, void 0, void 0, function() {
return yt(this, function(s) {
var o = x;
switch (s.label) {
case 0:
this[o(t)][o(r)](o(931)[o(e)](this[o(905)].length, o(n))), s[o(i)] = 1;

case 1:
return this[o(905)][o(957)] > 0 ? [ 4, this.processBatch() ] : [ 3, 3 ];

case 2:
s.sent();
return [ 3, 1 ];

case 3:
this[o(a)] = !1;
return [ 2 ];
}
});
});
}, C[M(s)] = {
maxBatchSize: 10,
batchTimeoutMs: 16,
maxEventsPerFrame: 5
}, C;
}();
Lt[r(371)] = zt;
var xt = n && n[r(541)] || function(t, r, e, n) {
var i = {
_0x5b79cf: 590
};
function a(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, s) {
var o = {
_0x1b97bb: 357
}, u = x;
function v(t) {
var r = x;
try {
f(n[r(i._0x5b79cf)](t));
} catch (t) {
s(t);
}
}
function c(t) {
var r = x;
try {
f(n[r(o._0x1b97bb)](t));
} catch (t) {
s(t);
}
}
function f(t) {
var r = x;
t.done ? e(t[r(1034)]) : a(t[r(1034)])[r(493)](v, c);
}
f((n = n.apply(t, r || []))[u(590)]());
});
}, Mt = n && n.__generator || function(t, e) {
var n, i, a, s = 948, o = 590, u = 1117, v = 1247, c = 666, f = {
_0x42e8c6: 357,
_0x6efb61: 1117,
_0x1626bd: 1114,
_0x31565c: 473,
_0x4ce7cc: 926,
_0x49a5ba: 957,
_0x2b6688: 473,
_0x4125ee: 514,
_0x3ef160: 943,
_0xde4814: 1162
}, h = r, L = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, w = Object.create((typeof Iterator === h(1247) ? Iterator : Object)[h(s)]);
return w[h(o)] = y(0), w.throw = y(1), w[h(u)] = y(2), typeof Symbol === h(v) && (w[Symbol[h(c)]] = function() {
return this;
}), w;
function y(t) {
return function(r) {
return g([ t, r ]);
};
}
function g(r) {
var s = h;
if (n) throw new TypeError(s(710));
for (;w && (w = 0, r[0] && (L = 0)), L; ) try {
if (n = 1, i && (a = 2 & r[0] ? i.return : r[0] ? i[s(f._0x42e8c6)] || ((a = i[s(f._0x6efb61)]) && a.call(i), 
0) : i.next) && !(a = a[s(1162)](i, r[1]))[s(f._0x1626bd)]) return a;
(i = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
L[s(473)]++;
return {
value: r[1],
done: !1
};

case 5:
L[s(f._0x31565c)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = L.ops[s(926)](), L[s(943)][s(f._0x4ce7cc)]();
continue;

default:
if (!(a = L.trys, a = a[s(957)] > 0 && a[a[s(f._0x49a5ba)] - 1]) && (6 === r[0] || 2 === r[0])) {
L = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
L[s(473)] = r[1];
break;
}
if (6 === r[0] && L[s(473)] < a[1]) {
L.label = a[1], a = r;
break;
}
if (a && L.label < a[2]) {
L[s(f._0x2b6688)] = a[2], L.ops[s(1203)](r);
break;
}
a[2] && L[s(f._0x4125ee)][s(926)]();
L[s(f._0x3ef160)][s(926)]();
continue;
}
r = e[s(f._0xde4814)](t, L);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(ht, r(1172), {
value: !0
}), ht[r(1029)] = void 0;
var Ct = a, bt = Lt, Bt = Z, Ht = D, dt = tt, Dt = function() {
var t = 948, e = 694, n = 948, i = 1095, a = 375, s = 1023, o = 1023, u = {
_0x19993f: 695,
_0x27861c: 371
}, v = r;
function c(t, r, e, n, i) {
var a = x;
this.logger = t, this[a(1252)] = r, this[a(u._0x19993f)] = e, this[a(550)] = n, 
this[a(1209)] = i, e && (this[a(841)] = new (bt[a(u._0x27861c)])(e, t)), this[a(800)] = new Ht.ExpressionEngine();
}
return c[v(t)].executeAction = function(t, r, e) {
return xt(this, void 0, void 0, function() {
var n, i = 473, a = 431, s = 267, o = 616, u = 281, v = 616, c = 943, f = 474, h = 1022, L = 524, w = 1e3, y = 284, g = 1095, l = 431, z = 1302, M = 431, C = 305, b = 616;
return Mt(this, function(B) {
var H = x;
switch (B[H(i)]) {
case 0:
this[H(a)][H(670)](H(s).concat(t[H(o)]));
if ("string" == typeof t[H(o)] && this[H(694)](t.type)) return [ 2, this[H(u)](t[H(v)], r, e) ];
B[H(473)] = 1;

case 1:
B[H(c)][H(1203)]([ 1, 14, , 15 ]);
switch (t[H(616)]) {
case H(f):
return [ 3, 2 ];

case H(950):
return [ 3, 4 ];

case H(927):
return [ 3, 6 ];

case H(h):
return [ 3, 8 ];

case H(L):
return [ 3, 10 ];
}
return [ 3, 12 ];

case 2:
return [ 4, this[H(w)](t, r) ];

case 3:
B[H(y)]();
return [ 3, 13 ];

case 4:
return [ 4, this.executeSetUserProperty(t, r) ];

case 5:
B[H(284)]();
return [ 3, 13 ];

case 6:
return [ 4, this[H(g)](t, r) ];

case 7:
B[H(284)]();
return [ 3, 13 ];

case 8:
return [ 4, this[H(375)](t, r) ];

case 9:
B.sent();
return [ 3, 13 ];

case 10:
return [ 4, this[H(837)](t, r) ];

case 11:
B[H(y)]();
return [ 3, 13 ];

case 12:
this[H(l)][H(374)]("[HabbyTracker][ActionExecutor] Unknown action type: "[H(z)](t[H(v)])), 
B[H(i)] = 13;

case 13:
return [ 3, 15 ];

case 14:
n = B[H(284)](), this[H(M)][H(C)]("[HabbyTracker][ActionExecutor] Failed to execute action "[H(1302)](t[H(b)], ": ").concat(n));
throw n;

case 15:
return [ 2 ];
}
});
});
}, c[v(948)][v(e)] = function(t) {
var r = v;
return t[r(s)]("(") && t[r(o)](")");
}, c[v(t)][v(281)] = function(t, r, e) {
return xt(this, void 0, void 0, function() {
var n, i, a, s, o = 688, u = 519, v = 1059, c = 1302, f = 773, h = 439, L = 850, w = 496, y = 1312, g = 985, l = 1261, z = 985, M = 745, C = 800, b = 415, B = 305, H = 476, d = 1302;
return Mt(this, function(D) {
var j = x;
try {
Ct[j(o)][j(u)](j(1168)[j(1302)](t));
if (!this.variableManager) return Ct[j(688)].swarn(j(v)[j(c)](t)), [ 2 ];
n = e || this[j(1209)], (i = new (Ht[j(f)])(this[j(550)], n, this.platformAdapter, this[j(800)], r[j(h)] || {}))[j(985)]("incrementIf", new (dt[j(L)])()), 
i.registerActionHandler(j(w), new (dt[j(y)])()), i[j(g)]("eventIf", new (dt[j(783)])()), 
i[j(985)](j(521), new (dt[j(l)])()), i[j(z)](j(1267), new (dt[j(707)])()), i[j(985)](j(602), new (dt[j(M)])()), 
i.registerActionHandler("backfillStageEvents", new (dt[j(805)])()), a = this[j(C)][j(1230)](t), 
s = a[j(b)](i), Ct[j(688)][j(u)]("✅ [HabbyTracker][ActionExecutor] AST Action 执行完成，结果:", s);
} catch (t) {
console[j(B)](j(H), t), this[j(431)].error(j(756)[j(d)](t));
}
return [ 2 ];
});
});
}, c[v(n)].executeActions = function(t, r, e) {
var n = 473, i = 957, a = 284;
return xt(this, void 0, void 0, function() {
var s, o, u;
return Mt(this, function(v) {
var c = x;
switch (v[c(n)]) {
case 0:
s = 0, o = t, v.label = 1;

case 1:
if (!(s < o[c(i)])) return [ 3, 4 ];
u = o[s];
return [ 4, this.executeAction(u, r, e) ];

case 2:
v[c(a)](), v[c(473)] = 3;

case 3:
s++;
return [ 3, 1 ];

case 4:
return [ 2 ];
}
});
});
}, c.prototype.executeSetFlag = function(t, r) {
var e = 627, n = 1034, i = 431, a = 955, s = 294, o = 550, u = 872, v = 439, c = 519, f = 802, h = 1278, L = 688, w = 604, y = 473, g = 1252, l = 431, z = 305, M = 1302;
return xt(this, void 0, void 0, function() {
var C, b, B, H;
return Mt(this, function(d) {
var D = x;
switch (d.label) {
case 0:
C = t[D(627)][D(967)] || t.params[D(438)], b = void 0 === t[D(e)].value || t[D(627)][D(n)];
if (!C) return this[D(i)].error(D(a)), [ 2 ];
Ct[D(688)].slog(D(968)[D(1302)](C, '"'));
this.variableManager && typeof C === D(s) ? (B = C, C = this[D(o)][D(u)](C, r[D(v)]), 
B !== C ? (Ct[D(688)][D(c)](D(1183)[D(1302)](B, D(f))[D(1302)](C, '"')), this[D(431)].log("[HabbyTracker][ActionExecutor] SetFlag 变量替换: "[D(1302)](B, D(h)).concat(C))) : Ct[D(L)][D(c)](D(974).concat(C, '"'))) : Ct[D(688)][D(519)](D(667).concat(C, '"'));
Ct[D(688)][D(519)](D(w)[D(1302)](C, D(1110))[D(1302)](b)), this.logger[D(670)]("[HabbyTracker][ActionExecutor] SetFlag: ".concat(C, D(853)).concat(b)), 
d[D(y)] = 1;

case 1:
d.trys[D(1203)]([ 1, 3, , 4 ]);
return [ 4, this[D(g)][D(392)](String(C), Boolean(b)) ];

case 2:
d.sent();
return [ 3, 4 ];

case 3:
H = d.sent(), this[D(l)][D(z)](D(785)[D(M)](H));
throw H;

case 4:
return [ 2 ];
}
});
});
}, c[v(948)].executeSetUserProperty = function(t, r) {
return xt(this, void 0, void 0, function() {
var r, e, n, i, a, s = 473, o = 627, u = 820, v = 627, c = 431, f = 804, h = 943, L = 484, w = 784, y = 305;
return Mt(this, function(g) {
var l = x;
switch (g[l(s)]) {
case 0:
r = t[l(o)][l(u)] || t[l(v)][l(506)], e = t[l(627)][l(1034)];
if (!r) return this[l(c)][l(305)]("[HabbyTracker][ActionExecutor] SetUserProperty: missing property name"), 
[ 2 ];
this.logger.log(l(520)[l(1302)](r, " = ")[l(1302)](JSON[l(f)](e))), g.label = 1;

case 1:
g[l(h)].push([ 1, 6, , 7 ]), n = {};
if (!(i = {
retentionDays: l(1311),
activeDays: l(843),
iapCount: "iapCount",
totalAmount: "totalAmount",
chapterProgress: l(L),
stageProgress: l(w),
videoWatchCount: l(946)
})[r]) return [ 3, 3 ];
n[i[r]] = e;
return [ 4, this[l(1252)][l(563)](n) ];

case 2:
g[l(284)]();
return [ 3, 5 ];

case 3:
return [ 4, this[l(1252)][l(534)](r, e) ];

case 4:
g[l(284)](), g.label = 5;

case 5:
return [ 3, 7 ];

case 6:
a = g.sent(), this[l(c)][l(y)](l(313).concat(a));
throw a;

case 7:
return [ 2 ];
}
});
});
}, c.prototype[v(i)] = function(t, r) {
var e = 627, n = 521, i = 787, a = 1188, s = 927, o = 670, u = 259, v = 1302, c = 788, f = 374;
return xt(this, void 0, void 0, function() {
var h, L, w;
return Mt(this, function(y) {
var g = x;
switch (y[g(473)]) {
case 0:
h = t.params[g(530)] || t[g(e)][g(n)], L = t[g(627)].params || t[g(e)][g(341)] || {};
return h ? (w = (0, Bt.getRegisteredEventSender)()) ? [ 4, Promise[g(a)](w(h, L, {
platform: g(1234),
ruleId: r.ruleId,
actionType: g(s)
})) ] : [ 3, 2 ] : (this.logger[g(305)](g(i)), [ 2 ]);

case 1:
y.sent(), this[g(431)][g(o)](g(u)[g(1302)](h), L);
return [ 2 ];

case 2:
Ct.Logger.swarn("%c[HabbyTracker][EventSender Missing] FirebaseEvent dropped: "[g(v)](h), g(c), L), 
this.logger[g(f)](g(744)[g(1302)](h));
return [ 2 ];
}
});
});
}, c.prototype[v(a)] = function(t, r) {
return xt(this, void 0, void 0, function() {
var e, n, i, a = 530, s = 521, o = 777, u = 341, v = 747, c = 1188, f = 1022, h = 431, L = 670, w = 1074, y = 991, g = 1302;
return Mt(this, function(l) {
var z = x;
switch (l[z(473)]) {
case 0:
e = t.params[z(a)] || t.params[z(s)], n = t[z(627)][z(o)] || t.params[z(u)] || {};
return e ? (i = (0, Bt[z(687)])()) ? [ 4, Promise[z(c)](i(e, n, {
platform: z(1039),
ruleId: r[z(1285)],
actionType: z(f)
})) ] : [ 3, 2 ] : (this[z(431)][z(305)](z(v)), [ 2 ]);

case 1:
l[z(284)](), this[z(h)][z(L)](z(w)[z(1302)](e), n);
return [ 2 ];

case 2:
Ct[z(688)].swarn(z(y)[z(g)](e), z(788), n), this.logger[z(374)](z(1055)[z(1302)](e));
return [ 2 ];
}
});
});
}, c.prototype[v(837)] = function(t, r) {
return xt(this, void 0, void 0, function() {
var e, n, i, a, s, o, u, v, c, f, h, L, w, y, g, l, z = 473, M = 531, C = 417, b = 550, B = 550, H = 872, d = 439, D = 957, j = 872, A = 841, p = 812, N = 649, P = 957, _ = 1302, U = 266, G = 1234, T = 284, Y = 266, I = 284, V = 473, S = 431, q = 865;
return Mt(this, function(m) {
var K = x;
switch (m[K(z)]) {
case 0:
e = t[K(627)][K(M)], n = t.params.eventName, i = t[K(627)].params || {}, a = t[K(627)].sendMode || K(C);
if (this[K(b)]) {
n = this[K(B)][K(H)](n, r[K(d)]), s = {};
for (o = 0, u = Object[K(1265)](i); o < u[K(D)]; o++) v = u[o], c = v[0], f = v[1], 
s[c] = "string" == typeof f ? this[K(550)][K(j)](f, r.eventData) : f;
i = s;
}
if ("async" !== a || !this[K(841)]) return [ 3, 1 ];
if (e === K(715)) this[K(A)][K(835)](K(1234), n, i), this[K(841)].sendEventAsync(K(1039), n, i); else if (e[K(1023)]("|")) {
w = e[K(p)]("|")[K(N)](function(t) {
return t[K(q)]();
});
for (h = 0, L = w; h < L[K(P)]; h++) l = L[h], this.eventBatchProcessor.sendEventAsync(l, n, i);
} else this[K(841)][K(835)](e, n, i);
this[K(431)][K(670)]("[HabbyTracker][ActionExecutor] Event queued to "[K(1302)](e, ": ")[K(_)](n), i);
return [ 3, 12 ];

case 1:
return "all" !== e ? [ 3, 4 ] : [ 4, this[K(U)](K(G), n, i, r) ];

case 2:
m[K(T)]();
return [ 4, this[K(266)](K(1039), n, i, r) ];

case 3:
m.sent();
return [ 3, 11 ];

case 4:
if (!e[K(1023)]("|")) return [ 3, 9 ];
w = e[K(812)]("|").map(function(t) {
return t.trim();
}), y = 0, g = w, m[K(473)] = 5;

case 5:
if (!(y < g.length)) return [ 3, 8 ];
l = g[y];
return [ 4, this[K(Y)](l, n, i, r) ];

case 6:
m[K(284)](), m[K(473)] = 7;

case 7:
y++;
return [ 3, 5 ];

case 8:
return [ 3, 11 ];

case 9:
return [ 4, this.sendToSinglePlatform(e, n, i, r) ];

case 10:
m[K(I)](), m[K(V)] = 11;

case 11:
this[K(S)][K(670)]("[HabbyTracker][ActionExecutor] Sent to "[K(1302)](e, ": ")[K(1302)](n), i), 
m.label = 12;

case 12:
return [ 2 ];
}
});
});
}, c[v(n)][v(266)] = function(t, r, e, n) {
var i = 473, a = 687, s = 1188, o = 1285, u = 688, v = 445, c = 647, f = 1302, h = 788, L = 1302;
return xt(this, void 0, void 0, function() {
var w;
return Mt(this, function(y) {
var g = x;
switch (y[g(i)]) {
case 0:
return (w = (0, Bt[g(a)])()) ? [ 4, Promise[g(s)](w(r, e, {
platform: t.toLowerCase(),
ruleId: n ? n[g(o)] : void 0,
actionType: g(524)
})) ] : [ 3, 2 ];

case 1:
y[g(284)]();
return [ 2 ];

case 2:
Ct[g(u)][g(v)](g(c).concat(t, "/")[g(f)](r), g(h), e), this[g(431)][g(374)](g(1291)[g(L)](t, "/").concat(r));
return [ 2 ];
}
});
});
}, c;
}();
ht[r(1029)] = Dt;
var jt = {};
Object[r(1219)](jt, "__esModule", {
value: !0
}), jt[r(367)] = void 0;
var At = a, pt = function() {
var t = 703, e = 948, n = 688, i = 519, a = 973, s = 1079, o = 806, u = 865, v = 688, c = 1144, f = 1262, h = 1302, L = 997, w = 1062, y = 1107, g = 431, l = 1302, z = 984, M = 431, C = 670, b = 547, B = 853, H = 431, d = 688, D = 921, j = 818, A = 946, p = 1252, N = 1302, P = 766, _ = 1200, U = 766, G = 1025, T = 392, Y = 1109, I = 670, V = 1302, S = 853, q = 1302, m = 275, K = 279, O = 1070, J = 1030, E = 484, W = 374, X = 493, k = 1109, Z = 1302, R = 853, F = 305, Q = 1302, $ = 305, tt = 1149, rt = 519, et = 1302, nt = 853, it = 1252, at = 688, st = 326, ot = 431, ut = 989, vt = 976, ct = 1311, ft = 921, ht = 818, Lt = 946, wt = 688, yt = 920, gt = 1302, lt = 1302, zt = 1025, xt = 1187, Mt = 766, Ct = 916, bt = 275, Bt = 543, Ht = 1070, dt = 428, Dt = 484, jt = 935, pt = 688, Nt = 1302, Pt = 679, _t = 754, Ut = 782, Gt = 784, Tt = 374, Yt = 1264, It = 1302, Vt = r;
function St(t, r) {
var e = x;
this[e(1252)] = t, this[e(431)] = r;
}
return St.prototype[Vt(901)] = function(t) {
var r = Vt, e = this[r(it)][r(1054)]();
if (!e) return At[r(at)][r(519)](r(st)[r(1302)](t)), this[r(ot)].warn("[HabbyTracker][VariableManager] User profile is null, cannot get variable: "[r(1302)](t)), 
null;
At[r(at)].slog('[HabbyTracker][VariableManager] 获取变量 "'[r(1302)](t, r(ut))[r(1302)](e.accountID, ")")), 
At[r(at)][r(519)](r(vt), {
activeDays: e.activeDays,
retentionDays: e[r(ct)],
iapCount: e[r(ft)],
chapterProgress: e[r(484)]
});
var n, i = {
IapCount: r(921),
TotalAmount: r(ht),
VideoWatchCount: r(Lt),
ActiveDays: r(843),
RetentionDays: r(ct),
LocalActiveDays: "localActiveDays",
ChapterProgress: r(484),
StageProgress: r(784),
RegisterTime: r(786)
};
if (i[t]) {
var a = i[t], s = e[a];
return At[r(wt)][r(519)](r(yt)[r(gt)](t, " (")[r(lt)](a, "): ").concat(s)), void 0 !== s ? s : null;
}
if (t[r(766)](r(1200))) {
var o, u = t[r(1025)](5);
if (u.startsWith(r(312))) {
var v = u[r(zt)](5), c = e.flags[v] || !1;
return At[r(688)][r(519)](r(xt)[r(1302)](v, ": ").concat(c)), c;
}
if (u[r(Mt)](r(Ct))) {
var f = u.substring(14), h = e[r(748)][f] || null;
return At[r(wt)].slog(r(672).concat(f, ": ").concat(h)), h;
}
switch (u) {
case r(bt):
o = e.retentionDays;
break;

case r(Bt):
o = e.activeDays;
break;

case r(372):
o = e.localActiveDays;
break;

case r(Ht):
o = e[r(ft)];
break;

case r(712):
o = e[r(818)];
break;

case r(dt):
o = e.videoWatchCount;
break;

case r(1030):
o = e[r(Dt)];
break;

case r(1165):
o = e[r(784)];
break;

case "account_register_time":
o = e[r(786)];
break;

case "user_register_timestamp":
o = e[r(jt)];
break;

case "has_purchase":
o = e[r(921)] > 0;
break;

default:
At[r(pt)].slog(r(883)[r(1302)](u)), this[r(ot)][r(374)](r(674).concat(u));
return null;
}
return At[r(688)].slog("[HabbyTracker][VariableManager]   → 字段 ".concat(u, ": ")[r(Nt)](o)), 
o;
}
switch (t) {
case r(430):
n = e[r(1311)];
break;

case r(864):
n = e.activeDays;
break;

case r(Pt):
n = e[r(921)];
break;

case r(_t):
n = e[r(ht)];
break;

case r(Ut):
n = e[r(Lt)];
break;

case r(378):
n = e[r(Dt)];
break;

case r(525):
n = e[r(Gt)];
break;

case "HasPurchase":
n = e[r(ft)] > 0;
break;

default:
At[r(pt)][r(519)](r(1279).concat(t)), this[r(ot)][r(Tt)](r(Yt)[r(1302)](t));
return null;
}
return At[r(pt)][r(519)]("[HabbyTracker][VariableManager]   → 变量 "[r(Nt)](t, ": ")[r(It)](n)), 
n;
}, St[Vt(948)].setVariableValue = function(t, r) {
var e = 305, n = 698, i = Vt;
if (this.profileManager.getCurrentProfile()) {
At[i(d)][i(519)](i(577).concat(t, i(1110))[i(1302)](r));
var a = {
IapCount: i(D),
TotalAmount: i(j),
VideoWatchCount: i(A),
ActiveDays: "activeDays",
RetentionDays: i(1311),
LocalActiveDays: "localActiveDays",
ChapterProgress: "chapterProgress",
StageProgress: i(784),
RegisterTime: i(786)
};
if (a[t]) {
var s = a[t];
(c = {})[s] = Number(r), this[i(p)][i(563)](c).then(function() {
var t = i;
At[t(688)][t(rt)]("[HabbyTracker][VariableManager]   ✅ 已保存 profile."[t(et)](s, t(nt))[t(1302)](r));
})[i(1109)](function(t) {
var r = i;
console.error("[HabbyTracker][VariableManager]   ❌ 保存失败: "[r(1302)](t));
}), this[i(431)].log(i(1061)[i(N)](t, " (")[i(1302)](s, i(1277))[i(1302)](r));
} else if (t[i(P)](i(_))) {
var o = t[i(1025)](5);
if (o[i(U)]("flag.")) {
var u = o[i(G)](5);
this[i(1252)][i(T)](u, Boolean(r))[i(Y)](function(t) {
var r = i;
console[r($)](r(tt)[r(1302)](t));
}), this[i(431)][i(I)](i(620)[i(N)](u, " = ")[i(V)](r));
return;
}
if (o.startsWith(i(916))) {
var v = o[i(G)](14);
this[i(1252)][i(534)](v, r).catch(function(t) {
var r = i;
console[r(F)](r(481)[r(Q)](t));
}), this.logger[i(I)]("[HabbyTracker][VariableManager] Set extended data: "[i(V)](v, i(S))[i(q)](r));
return;
}
var c = {};
switch (o) {
case i(m):
c[i(1311)] = Number(r);
break;

case i(543):
c[i(843)] = Number(r);
break;

case i(372):
c[i(K)] = Number(r);
break;

case i(O):
c[i(D)] = Number(r);
break;

case i(712):
c.totalAmount = Number(r);
break;

case i(428):
c[i(946)] = Number(r);
break;

case i(J):
c[i(E)] = Number(r);
break;

case "stage_progress":
c[i(784)] = Number(r);
break;

default:
this.logger[i(W)](i(645).concat(o));
return;
}
this[i(p)][i(563)](c)[i(X)](function() {
var t = i;
At.Logger[t(519)](t(272)[t(Z)](o, t(R))[t(1302)](r));
})[i(k)](function(t) {
var r = i;
console[r(e)](r(n).concat(t));
});
} else ;
} else this[i(H)].warn(i(934)[i(1302)](t));
}, St.prototype.incrementVariable = function(t, r) {
var e = Vt, n = this[e(901)](t);
typeof n === e(1103) ? (this[e(y)](t, n + r), this[e(g)].log("[HabbyTracker][VariableManager] Increment "[e(l)](t, ": ")[e(l)](n, e(z)).concat(r, e(853))[e(1302)](n + r))) : (this[e(1107)](t, r), 
this[e(M)][e(C)](e(b)[e(1302)](t, e(B))[e(1302)](r)));
}, St[Vt(948)][Vt(t)] = function(t) {
return (Date[Vt(w)]() - t) / 36e5;
}, St[Vt(e)].replaceVariables = function(t, r) {
var e = Vt, w = this;
At[e(n)][e(i)](e(a).concat(t, '"'));
var y = t[e(s)](/\{([^}]+)\}/g, function(t, n) {
var i, a = e, s = n[a(u)]();
if (s.startsWith(a(384)) && r) {
var o = s.substring(6);
i = r[o], At[a(v)].slog('[HabbyTracker][VariableManager]   → 事件变量 "'[a(1302)](s, '": ')[a(1302)](i, " (从 eventData 获取)"));
} else i = w[a(901)](s), At[a(688)].slog(a(c).concat(s, '": ')[a(1302)](i, a(f))[a(h)](t, '")'));
return null !== i && void 0 !== i ? String(i) : (At[a(v)].slog(a(L)[a(h)](s, a(446))), 
t);
});
return At.Logger[e(i)](e(o)[e(1302)](y, '"')), y;
}, St;
}();
jt.VariableManager = pt;
var Nt = {};
Object[r(1219)](Nt, r(1172), {
value: !0
}), Nt.LookupTableManager = void 0;
var Pt = function() {
var t = 948, e = 1307, n = 833, i = 957, a = 343, s = 1302, o = 1065, u = 1098, v = 649, c = 1004, f = 1302, h = 1302, L = 374, w = 1102, y = 374, g = 1302, l = 740, z = 1099, M = 374, C = 705, b = 1302, B = 616, H = 1103, d = 795, D = 777, j = 374, A = {
_0x559eb5: 1098,
_0x1f31de: 1265,
_0x59d6fa: 900,
_0x15bde0: 670,
_0x4eb967: 825
}, p = r;
function N(t, r) {
var e = x;
this[e(431)] = r, this[e(A._0x559eb5)] = new Map();
if (t) for (var n = 0, i = Object[e(A._0x1f31de)](t); n < i.length; n++) {
var a = i[n], s = a[0], o = a[1];
this[e(A._0x559eb5)][e(A._0x59d6fa)](s, o);
}
this[e(431)][e(A._0x15bde0)](e(495).concat(this[e(A._0x559eb5)].size, e(A._0x4eb967)));
}
return N[p(948)][p(963)] = function(t, r) {
var e = p, n = this[e(1098)].get(t);
if (!n) return this[e(431)][e(M)](e(C)[e(b)](t)), null;
switch (n[e(616)] ? n[e(B)][e(331)]() : void 0) {
case e(1141):
if (typeof r === e(H) || !isNaN(Number(r))) return this[e(1113)](t, Number(r));
break;

case e(649):
return this[e(d)](t, String(r));

case e(1034):
return n.value;

case e(924):
return n[e(D)];

default:
this.logger[e(j)](e(595)[e(1302)](n.type));
return null;
}
return null;
}, N[p(948)][p(1113)] = function(t, r) {
var e = 297, n = p, i = this.lookupTables[n(879)](t);
if (!i || !i[n(409)]) return this.logger[n(y)](n(987)[n(g)](t)), null;
var a = i.ranges[n(l)](function(t) {
var i = n;
return r >= t[i(e)] && r <= t[i(1045)];
});
return a ? (this[n(431)].log(n(856).concat(t, "[")[n(1302)](r, n(z))[n(1302)](a.value)), 
a[n(1034)]) : (this.logger[n(374)](n(340)[n(g)](t, "[").concat(r, "]")), null);
}, N.prototype.lookupMap = function(t, r) {
var e = p, n = this[e(u)].get(t);
if (!n || !n[e(649)]) return this.logger[e(374)]("[LookupTableManager] Map table not found or empty: ".concat(t)), 
null;
var i = n[e(v)][r];
return void 0 !== i ? (this[e(431)][e(670)](e(c)[e(f)](t, "[").concat(r, e(1099))[e(h)](i)), 
i) : (this[e(431)][e(L)](e(w)[e(h)](t, "[").concat(r, "]")), null);
}, N[p(t)][p(548)] = function(t) {
var r = p;
if (t) {
for (var e = 0, n = Object[r(1265)](t); e < n[r(i)]; e++) {
var u = n[e], v = u[0], c = u[1];
this[r(1098)].set(v, c);
}
this.logger.log(r(a)[r(1302)](Object[r(833)](t).length, r(433))[r(s)](this.lookupTables[r(o)]));
}
}, N.prototype[p(e)] = function(t) {
var r = p;
return this.lookupTables[r(964)](t);
}, N[p(948)].getTableNames = function() {
var t = p;
return Array.from(this.lookupTables[t(n)]());
}, N;
}();
Nt[r(932)] = Pt;
var _t = {};
Object[r(1219)](_t, r(1172), {
value: !0
}), _t[r(1220)] = void 0;
var Ut = Nt, Gt = a, Tt = function() {
var t = 948, e = 1307, n = 948, i = 1285, a = 1297, s = 957, o = 964, u = 1203, v = 961, c = 1307, f = 1237, h = 1129, L = 1129, w = 1307, y = 431, g = 383, l = 1285, z = 1302, M = 1036, C = 1302, b = 1307, B = 670, H = 1302, d = 795, D = 1202, j = 490, A = 431, p = 374, N = 383, P = 1285, _ = 670, U = 383, G = 1285, T = 1304, Y = 431, I = 670, V = 383, S = 1302, q = 634, m = 1302, K = 490, O = 1307, J = 1113, E = 829, W = 1036, X = 1302, k = 1297, Z = 383, R = 1302, F = 1285, Q = 490, $ = 383, tt = 374, rt = {
_0x56a4fe: 640
}, et = r;
function nt(t, r, e, n) {
var i = x;
this[i(431)] = n || new Gt.Logger(), this[i(1315)] = t, this.ruleManager = new (Ut[i(932)])(r || {}, this[i(431)]), 
this[i(1285)] = e || i(rt._0x56a4fe);
}
return nt.prototype[et(963)] = function(t, r) {
var e = et;
this.logger.log("[RuleLookupTableManager] 规则 ".concat(this[e(1285)], ": 查找表 '").concat(t, e(W))[e(X)](r));
if (this[e(k)][e(1307)](t)) {
var n = this[e(1297)][e(963)](t, r);
return this.logger.log(e(Z)[e(R)](this[e(F)], e(485))[e(1302)](t, e(Q)).concat(n)), 
n;
}
if (this[e(1315)][e(1307)](t)) {
var i = this.globalManager[e(963)](t, r);
return this.logger.log(e($).concat(this[e(1285)], ": 在全局表中找到 '")[e(1302)](t, e(Q)).concat(i)), 
i;
}
return this.logger[e(tt)](e(Z)[e(1302)](this[e(1285)], e(494)).concat(t, "'")), 
null;
}, nt[et(t)][et(1113)] = function(t, r) {
var e = et;
this[e(431)][e(_)](e(U)[e(1302)](this[e(G)], e(T))[e(1302)](t, e(346))[e(1302)](r));
if (this[e(1297)][e(1307)](t)) {
var n = this.ruleManager.lookupRange(t, r);
return this[e(Y)][e(I)](e(V)[e(S)](this.ruleId, e(q))[e(m)](t, e(K))[e(1302)](n)), 
n;
}
if (this[e(1315)][e(O)](t)) {
var i = this[e(1315)][e(J)](t, r);
return this[e(431)].log(e(U)[e(m)](this.ruleId, ": 在全局表中范围查找 '")[e(1302)](t, e(490)).concat(i)), 
i;
}
return this[e(431)].warn("[RuleLookupTableManager] 规则 ".concat(this.ruleId, e(E))[e(1302)](t, "'")), 
null;
}, nt[et(948)][et(795)] = function(t, r) {
var e = et;
this[e(y)].log(e(g).concat(this[e(l)], ": 映射查找表 '")[e(z)](t, e(M))[e(C)](r));
if (this[e(1297)][e(b)](t)) {
var n = this.ruleManager[e(795)](t, r);
return this.logger[e(B)](e(383)[e(H)](this[e(1285)], e(1195))[e(C)](t, e(490)).concat(n)), 
n;
}
if (this.globalManager[e(b)](t)) {
var i = this[e(1315)][e(d)](t, r);
return this[e(y)][e(670)](e(383)[e(z)](this[e(1285)], e(D))[e(z)](t, e(j)).concat(i)), 
i;
}
return this[e(A)][e(p)](e(N).concat(this[e(P)], ": 未找到映射表 '")[e(1302)](t, "'")), 
null;
}, nt[et(948)][et(e)] = function(t) {
var r = et;
return this.ruleManager[r(w)](t) || this[r(1315)].containsTable(t);
}, nt[et(n)][et(600)] = function() {
var t = 961, r = et, e = this[r(1297)][r(600)](), n = this.globalManager[r(600)](), i = new Set();
return e[r(h)](function(t) {
return i.add(t);
}), n[r(L)](function(e) {
return i[r(t)](e);
}), Array[r(1066)](i);
}, nt.prototype.getTableSource = function(t) {
var r = et;
return this[r(1297)][r(c)](t) ? "Rule" : this.globalManager.containsTable(t) ? r(f) : null;
}, nt[et(t)].validateRuleTableNames = function() {
for (var t = et, r = [], e = this[t(a)].getTableNames(), n = new Set(), i = 0, c = e; i < c[t(s)]; i++) {
var f = c[i];
n[t(o)](f) ? !r.includes(f) && r[t(u)](f) : n[t(v)](f);
}
return r;
}, nt.prototype.getRuleId = function() {
return this[et(i)];
}, nt;
}();
_t[r(1220)] = Tt;
var Yt = {};
Object.defineProperty(Yt, r(1172), {
value: !0
}), Yt[r(700)] = Yt[r(414)] = void 0;
var It = function() {
var t = 948, e = 743, n = 736, i = 913, a = 879, s = 412, o = 879, u = 1161, v = 412, c = 900, f = 412, h = 913, L = r;
function w() {
this.listeners = new Map();
}
return w.getInstance = function() {
var t = x;
return !w[t(h)] && (w[t(h)] = new w()), w[t(h)];
}, w[L(t)].on = function(t, r) {
var e = L;
!this[e(412)][e(964)](t) && this[e(v)][e(c)](t, []), this[e(f)][e(879)](t).push(r);
}, w[L(t)].off = function(t, r) {
var e = L, n = this[e(s)][e(o)](t);
if (n) {
var i = n.indexOf(r);
-1 !== i && n[e(u)](i, 1);
}
}, w[L(t)][L(e)] = function(t, r) {
var e = 1302, n = L, i = this[n(412)][n(a)](t);
i && i[n(1129)](function(i) {
var a = n;
try {
i(r);
} catch (r) {
console[a(305)]("[TrackerEventBus] Error in callback for "[a(e)](t, ":"), r);
}
});
}, w.prototype[L(n)] = function() {
var t = L;
this.listeners[t(736)]();
}, w[L(i)] = null, w;
}();
Yt.TrackerEventBus = It, Yt[r(700)] = {
RULE_MATCHED: r(798),
FIREBASE_EVENT: "tracker:firebase_event",
APPSFLYER_EVENT: r(656)
};
var Vt = n && n[r(541)] || function(t, r, e, n) {
var i = 590, a = {
_0x29135e: 1034
}, s = {
_0x3a5c9a: 357
}, o = {
_0x57987a: 590
};
function u(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, v) {
var c = x;
function f(t) {
var r = x;
try {
L(n[r(o._0x57987a)](t));
} catch (t) {
v(t);
}
}
function h(t) {
var r = x;
try {
L(n[r(s._0x3a5c9a)](t));
} catch (t) {
v(t);
}
}
function L(t) {
var r = x;
t[r(1114)] ? e(t[r(a._0x29135e)]) : u(t.value)[r(493)](f, h);
}
L((n = n.apply(t, r || []))[c(i)]());
});
}, St = n && n.__generator || function(t, e) {
var n, i, a, s = 948, o = 1247, u = {
_0xcdaa3: 1162,
_0x1accdf: 926,
_0x48731e: 957,
_0x5b1ea3: 473,
_0x5c0eb1: 514,
_0x3083d1: 1203,
_0x8d80f8: 943
}, v = r, c = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, f = Object.create(("function" == typeof Iterator ? Iterator : Object)[v(s)]);
return f[v(590)] = h(0), f[v(357)] = h(1), f[v(1117)] = h(2), typeof Symbol === v(o) && (f[Symbol[v(666)]] = function() {
return this;
}), f;
function h(t) {
return function(r) {
return L([ t, r ]);
};
}
function L(r) {
var s = v;
if (n) throw new TypeError("Generator is already executing.");
for (;f && (f = 0, r[0] && (c = 0)), c; ) try {
if (n = 1, i && (a = 2 & r[0] ? i.return : r[0] ? i.throw || ((a = i[s(1117)]) && a[s(u._0xcdaa3)](i), 
0) : i[s(590)]) && !(a = a[s(u._0xcdaa3)](i, r[1]))[s(1114)]) return a;
(i = 0, a) && (r = [ 2 & r[0], a[s(1034)] ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
c.label++;
return {
value: r[1],
done: !1
};

case 5:
c[s(473)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = c[s(514)][s(u._0x1accdf)](), c.trys[s(u._0x1accdf)]();
continue;

default:
if (!(a = c[s(943)], a = a[s(u._0x48731e)] > 0 && a[a[s(957)] - 1]) && (6 === r[0] || 2 === r[0])) {
c = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
c[s(473)] = r[1];
break;
}
if (6 === r[0] && c[s(473)] < a[1]) {
c[s(u._0x5b1ea3)] = a[1], a = r;
break;
}
if (a && c[s(473)] < a[2]) {
c[s(473)] = a[2], c[s(u._0x5c0eb1)][s(u._0x3083d1)](r);
break;
}
a[2] && c[s(u._0x5c0eb1)].pop();
c[s(u._0x8d80f8)].pop();
continue;
}
r = e[s(1162)](t, c);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, qt = n && n.__spreadArray || function(t, e, n) {
var i = r;
if (n || 2 === arguments[i(957)]) for (var a, s = 0, o = e[i(957)]; s < o; s++) if (a || !(s in e)) {
a || (a = Array[i(948)].slice[i(1162)](e, 0, s));
a[s] = e[s];
}
return t[i(1302)](a || Array.prototype.slice[i(1162)](e));
};
Object[r(1219)](H, r(1172), {
value: !0
}), H.RuleEngine = void 0;
var mt = a, Kt = d, Ot = ht, Jt = jt, Et = Nt, Wt = _t, Xt = Yt, kt = function() {
var t = 948, e = 948, n = 311, i = 611, a = 1215, s = 579, o = 487, u = 1225, v = 444, c = 444, f = 670, h = 737, L = 487, w = 1313, y = 444, g = 866, l = 1209, z = 548, M = 1302, C = 348, b = {
_0x393889: 444,
_0xff5d7a: 1209,
_0xfe877e: 550,
_0x2e20a6: 1209,
_0x973b2a: 1047,
_0x1e3135: 403
}, B = r;
function H(t, r, e, n) {
var i = x;
this.logger = t, this[i(1252)] = r, this[i(b._0x393889)] = [], this.configVersion = "", 
this.variableManager = new (Jt[i(367)])(r, t), this[i(b._0xff5d7a)] = new (Et[i(932)])(e ? e[i(1098)] : void 0, t), 
this[i(643)] = new Kt.ConditionEvaluator(t, this[i(b._0xfe877e)], this[i(b._0x2e20a6)], n), 
this[i(b._0x973b2a)] = new (Ot[i(1029)])(t, r, n, this[i(550)], this.lookupTableManager), 
e && this[i(b._0x1e3135)](e), this[i(431)][i(670)]("[HabbyTracker][RuleEngine] Initialized with AST support");
}
return H[B(t)][B(403)] = function(t) {
var r = B;
this[r(431)][r(f)](r(h).concat(t[r(1313)])), this.rules = t[r(444)] || [], this[r(L)] = t[r(w)], 
this[r(y)][r(g)](function(t, e) {
var n = r;
return (e[n(C)] || 0) - (t[n(348)] || 0);
}), this[r(l)][r(z)](t[r(1098)]), this[r(431)][r(670)](r(293)[r(M)](this.rules[r(957)], r(308)));
}, H[B(e)][B(n)] = function(t) {
var r = 473, e = 431, n = 670, i = 1302, a = 473, s = 1203, o = 284, u = 431;
return Vt(this, arguments, void 0, function(t, v) {
var c, f, h, L, w;
return void 0 === v && (v = {}), St(this, function(y) {
var g = x;
switch (y[g(r)]) {
case 0:
this[g(e)][g(n)](g(583)[g(i)](t)), c = this[g(611)](t), f = 0, h = c, y.label = 1;

case 1:
if (!(f < h.length)) return [ 3, 6 ];
L = h[f], y[g(a)] = 2;

case 2:
y[g(943)][g(s)]([ 2, 4, , 5 ]);
return [ 4, this[g(1293)](L, t, v) ];

case 3:
y[g(284)]();
return [ 3, 5 ];

case 4:
w = y[g(o)](), this[g(u)].error(g(1051)[g(1302)](L[g(1285)], ": ")[g(1302)](w));
return [ 3, 5 ];

case 5:
f++;
return [ 3, 1 ];

case 6:
return [ 2 ];
}
});
});
}, H[B(t)][B(i)] = function(t) {
var r = 309, e = 812, n = B;
return this[n(c)][n(325)](function(i) {
var a = n;
return !1 !== i[a(r)] && ("any" === i[a(685)] || i.trigger[a(e)]("|")[a(649)](function(t) {
return t.trim();
})[a(1023)](t));
});
}, H[B(948)].processRule = function(t, r, e) {
return Vt(this, void 0, void 0, function() {
var n, i, a, s, o, u, v, c, f, h, L = 473, w = 1285, y = 1302, g = 761, l = 1205, z = 399, M = 282, C = 1302, b = 431, B = 1209, H = 1098, d = 1285, D = 1054, j = 834, A = 949, p = 415, N = 949, P = 724, _ = 1235, U = 1302, G = 283, T = 670, Y = 1302, I = 1287, V = 1062, S = 1285, q = 1047, m = 376, K = 550, O = 872, J = 930, E = 284, W = 431;
return St(this, function(X) {
var k = x;
switch (X[k(L)]) {
case 0:
this.logger.log("[HabbyTracker][RuleEngine] ===== Processing rule: "[k(1302)](t[k(w)], " (")[k(y)](t[k(g)] || k(813), k(1016)));
if (t[k(l)]) {
f = this[k(550)][k(872)](t[k(1205)], e);
if (this[k(1252)][k(z)](f)) return mt[k(688)][k(519)](k(M)[k(1302)](t[k(w)], ' 跳过 (runOnceFlag="')[k(C)](f, '" 已设置)')), 
this[k(b)].log("[HabbyTracker][RuleEngine] Rule ".concat(t.ruleId, " already executed (").concat(f, "), skipping")), 
[ 2 ];
}
n = t[k(1098)] ? new (Wt[k(1220)])(this[k(B)], t[k(H)], t[k(d)], this.logger) : this[k(1209)], 
i = this[k(1252)][k(D)](), a = {
userProfile: i,
eventData: e
}, s = void 0 !== t.condition ? t[k(j)] : t[k(A)], o = this.conditionEvaluator[k(p)](t[k(N)], a, n), 
mt[k(688)].slog("📋 [HabbyTracker][RuleEngine] 规则 "[k(1302)](t.ruleId, k(919)).concat(s, k(P))[k(1302)](o));
if (!o) return this[k(431)][k(670)](k(_)[k(U)](t.ruleId, k(G))), [ 2 ];
this.logger[k(T)](k(1218)[k(Y)](t[k(1285)], " conditions met, executing actions")), 
u = Xt[k(414)][k(I)](), v = {
ruleId: t[k(d)],
ruleName: t[k(761)] || k(813),
eventType: r,
timestamp: Date[k(V)]()
}, u[k(743)](Xt[k(700)][k(828)], v), c = {
eventType: r,
eventData: e,
ruleId: t[k(S)]
}, X.label = 1;

case 1:
X[k(943)][k(1203)]([ 1, 5, , 6 ]);
return [ 4, this[k(q)][k(m)](t[k(1263)], c, n) ];

case 2:
X[k(284)]();
if (!t[k(1205)]) return [ 3, 4 ];
f = this[k(K)][k(O)](t.runOnceFlag, e), this[k(431)].log(k(J)[k(1302)](f));
return [ 4, this[k(1252)].setFlag(f, !0) ];

case 3:
X.sent(), X[k(L)] = 4;

case 4:
this[k(431)][k(T)](k(944)[k(1302)](t.ruleId, " ====="));
return [ 3, 6 ];

case 5:
h = X[k(E)](), this[k(W)].error(k(483)[k(Y)](t.ruleId, ": ")[k(C)](h));
throw h;

case 6:
return [ 2 ];
}
});
});
}, H[B(948)][B(1208)] = function() {
return qt([], this[B(v)], !0);
}, H[B(948)][B(678)] = function(t) {
var r = 1285, e = B;
return this.rules[e(740)](function(n) {
return n[e(r)] === t;
});
}, H[B(948)][B(a)] = function() {
var t = B;
this[t(444)] = [], this[t(487)] = "", this[t(431)][t(670)](t(u));
}, H[B(t)][B(s)] = function() {
return this[B(o)];
}, H;
}();
H[r(904)] = kt;
var Zt = n && n[r(1108)] || function() {
var t = 957, e = 948, n = 1162, i = r;
return (Zt = Object[i(914)] || function(r) {
for (var a, s = i, o = 1, u = arguments[s(t)]; o < u; o++) {
a = arguments[o];
for (var v in a) Object[s(e)].hasOwnProperty[s(n)](a, v) && (r[v] = a[v]);
}
return r;
})[i(726)](this, arguments);
}, Rt = n && n[r(541)] || function(t, r, e, n) {
var i = {
_0x23b146: 493
};
function a(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, s) {
function o(t) {
try {
v(n.next(t));
} catch (t) {
s(t);
}
}
function u(t) {
var r = x;
try {
v(n[r(357)](t));
} catch (t) {
s(t);
}
}
function v(t) {
var r = x;
t.done ? e(t.value) : a(t[r(1034)])[r(i._0x23b146)](o, u);
}
v((n = n[x(726)](t, r || [])).next());
});
}, Ft = n && n.__generator || function(t, e) {
var n, i, a, s = 948, o = 1247, u = 666, v = {
_0x481b73: 710,
_0x140b92: 1117,
_0x43090f: 1162,
_0x4d224b: 1162,
_0x422df4: 473,
_0x1bd0b2: 473,
_0x3ee0c7: 514,
_0x20bd66: 473,
_0x315fb5: 1203,
_0x249c67: 926,
_0x332523: 943
}, c = r, f = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, h = Object.create(("function" == typeof Iterator ? Iterator : Object)[c(s)]);
return h.next = L(0), h[c(357)] = L(1), h[c(1117)] = L(2), typeof Symbol === c(o) && (h[Symbol[c(u)]] = function() {
return this;
}), h;
function L(t) {
return function(r) {
return w([ t, r ]);
};
}
function w(r) {
var s = c;
if (n) throw new TypeError(s(v._0x481b73));
for (;h && (h = 0, r[0] && (f = 0)), f; ) try {
if (n = 1, i && (a = 2 & r[0] ? i.return : r[0] ? i[s(357)] || ((a = i[s(v._0x140b92)]) && a[s(v._0x43090f)](i), 
0) : i[s(590)]) && !(a = a[s(v._0x4d224b)](i, r[1]))[s(1114)]) return a;
(i = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
f[s(v._0x422df4)]++;
return {
value: r[1],
done: !1
};

case 5:
f[s(v._0x1bd0b2)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = f[s(v._0x3ee0c7)].pop(), f.trys.pop();
continue;

default:
if (!(a = f[s(943)], a = a[s(957)] > 0 && a[a[s(957)] - 1]) && (6 === r[0] || 2 === r[0])) {
f = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
f[s(473)] = r[1];
break;
}
if (6 === r[0] && f.label < a[1]) {
f.label = a[1], a = r;
break;
}
if (a && f[s(473)] < a[2]) {
f[s(v._0x20bd66)] = a[2], f[s(v._0x3ee0c7)][s(v._0x315fb5)](r);
break;
}
a[2] && f[s(514)][s(v._0x249c67)]();
f[s(v._0x332523)][s(926)]();
continue;
}
r = e[s(1162)](t, f);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object[r(1219)](B, "__esModule", {
value: !0
}), B[r(1111)] = void 0;
var Qt = H, $t = function() {
var t = 891, e = 579, n = 458, i = 880, a = 431, s = 305, o = 895, u = 431, v = 437, c = 670, f = 1302, h = 1302, L = 403, w = 431, y = 1106, g = 704, l = 431, z = 431, M = 380, C = {
_0x199427: 431,
_0x49f981: 670,
_0x208d6d: 752,
_0x1f0527: 305
}, b = r;
function B(t, r, e, n) {
var i = x;
this[i(C._0x199427)] = t, this.isConfigReady = !1, this[i(C._0x199427)][i(C._0x49f981)](i(C._0x208d6d));
try {
this[i(852)] = r, this.ruleEngine = new (Qt[i(904)])(t, r, e, n), this.isConfigReady = !0, 
this[i(431)].log(i(1150));
} catch (t) {
this.logger[i(C._0x1f0527)]("[HabbyTracker] Initialization failed: ".concat(t));
throw t;
}
}
return B.prototype[b(311)] = function(t) {
return Rt(this, arguments, void 0, function(t, r) {
var e, n, i = 1302, a = 764, s = 1302, o = 473, u = 943, v = 431, c = 670, f = 891, h = 945, L = 1302;
return void 0 === r && (r = {}), Ft(this, function(w) {
var y = x;
switch (w[y(473)]) {
case 0:
this[y(431)].log(y(615)[y(i)](t));
if (!this[y(458)]) return this[y(431)][y(374)](y(a)[y(s)](t)), [ 2 ];
w[y(o)] = 1;

case 1:
w[y(u)].push([ 1, 3, , 4 ]), this[y(v)][y(c)](y(508)[y(1302)](t)), e = Zt(Zt({}, r), {
type: t
});
return [ 4, this[y(f)][y(311)](t, e) ];

case 2:
w.sent();
this[y(852)][y(1054)]() && this[y(431)][y(c)](y(h));
return [ 3, 4 ];

case 3:
n = w[y(284)](), this.logger.error(y(1123)[y(L)](n));
throw n;

case 4:
return [ 2 ];
}
});
});
}, B[b(948)][b(1046)] = function() {
var t = b;
this[t(l)][t(670)](t(848));
try {
var r = this.userProfileManager[t(1054)]();
return r || (this[t(431)][t(374)]("[HabbyTracker] No user profile in UserProfileManager"), 
null);
} catch (r) {
return this[t(z)][t(305)](t(M)[t(1302)](r)), null;
}
}, B[b(948)].updateConfig = function(t, r) {
var e = b;
void 0 === r && (r = !1);
try {
this.logger[e(670)](e(i).concat(t ? t.version : void 0));
if (!t) {
this[e(a)][e(s)]("[HabbyTracker] Configuration data is empty, cannot update");
return;
}
var n = this[e(o)](), l = t.version;
if (r) {
if (n === l) {
this.logger[e(c)](e(1020)[e(f)](n, e(370)));
return;
}
this.logger[e(670)](e(1154)[e(h)](n, " -> ")[e(1302)](l));
} else this[e(u)].log(e(v).concat(l));
this[e(891)][e(L)](t), this[e(458)] = !0, this[e(w)][e(670)](e(y)[e(1302)](l));
} catch (t) {
this.logger[e(s)](e(g)[e(f)](t));
throw t;
}
}, B.prototype[b(335)] = function() {
return this[b(n)];
}, B[b(948)][b(895)] = function() {
var r = b;
return this[r(t)][r(e)]();
}, B;
}();
B[r(1111)] = $t;
var tr, rr = {}, er = {}, nr = {}, ir = n && n.__assign || function() {
var t = 957, e = r;
return (ir = Object[e(914)] || function(r) {
for (var n, i = e, a = 1, s = arguments[i(t)]; a < s; a++) {
n = arguments[a];
for (var o in n) Object[i(948)].hasOwnProperty[i(1162)](n, o) && (r[o] = n[o]);
}
return r;
})[e(726)](this, arguments);
}, ar = n && n[r(541)] || function(t, r, e, n) {
var i = 590;
function a(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, s) {
var o = {
_0x412196: 1114,
_0x240b41: 1034
}, u = {
_0x4e4f7b: 357
}, v = x;
function c(t) {
try {
h(n.next(t));
} catch (t) {
s(t);
}
}
function f(t) {
var r = x;
try {
h(n[r(u._0x4e4f7b)](t));
} catch (t) {
s(t);
}
}
function h(t) {
var r = x;
t[r(o._0x412196)] ? e(t[r(o._0x240b41)]) : a(t[r(o._0x240b41)]).then(c, f);
}
h((n = n.apply(t, r || []))[v(i)]());
});
}, sr = n && n[r(696)] || function(t, e) {
var n, i, a, s = {
_0x97a83b: 1162,
_0xf972ef: 473,
_0x4d42a5: 957,
_0x1761a4: 473,
_0x4924bd: 473,
_0x344935: 473,
_0x3734a0: 473,
_0x25fa17: 514
}, o = r, u = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, v = Object[o(471)](("function" == typeof Iterator ? Iterator : Object)[o(948)]);
return v[o(590)] = c(0), v[o(357)] = c(1), v.return = c(2), typeof Symbol === o(1247) && (v[Symbol[o(666)]] = function() {
return this;
}), v;
function c(t) {
return function(r) {
return f([ t, r ]);
};
}
function f(r) {
var c = o;
if (n) throw new TypeError("Generator is already executing.");
for (;v && (v = 0, r[0] && (u = 0)), u; ) try {
if (n = 1, i && (a = 2 & r[0] ? i[c(1117)] : r[0] ? i[c(357)] || ((a = i[c(1117)]) && a[c(1162)](i), 
0) : i.next) && !(a = a[c(s._0x97a83b)](i, r[1]))[c(1114)]) return a;
(i = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
u[c(s._0xf972ef)]++;
return {
value: r[1],
done: !1
};

case 5:
u[c(473)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = u[c(514)].pop(), u[c(943)][c(926)]();
continue;

default:
if (!(a = u[c(943)], a = a[c(s._0x4d42a5)] > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
u = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
u[c(s._0x1761a4)] = r[1];
break;
}
if (6 === r[0] && u[c(s._0x4924bd)] < a[1]) {
u[c(s._0x4924bd)] = a[1], a = r;
break;
}
if (a && u[c(s._0x344935)] < a[2]) {
u[c(s._0x3734a0)] = a[2], u[c(s._0x25fa17)][c(1203)](r);
break;
}
a[2] && u.ops[c(926)]();
u.trys.pop();
continue;
}
r = e.call(t, u);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object[r(1219)](nr, "__esModule", {
value: !0
}), nr.HttpManager = nr[r(632)] = void 0;
(function(t) {
var e = 594, n = 539, i = 971, a = 523, s = r;
t[s(594)] = s(e), t[s(539)] = s(n), t[s(844)] = "PUT", t.DELETE = s(i), t[s(a)] = s(523);
})(tr || (nr[r(632)] = tr = {}));
var or = function() {
var t = 391, e = 948, n = 948, i = 948, a = 882, s = 879, o = 948, u = 264, v = 982, c = 709, f = 489, h = 431, L = 599, w = 670, y = 690, g = 1302, l = 853, z = {
_0x45ddc5: 709
}, M = r;
function C(t) {
var r = x;
this[r(431)] = t, this[r(599)] = {}, this[r(z._0x45ddc5)] = [], this.responseInterceptors = [], 
this.setPublicHeader(r(477), r(792));
}
return C[M(948)].setPublicHeader = function(t, r) {
var e = M;
this[e(L)][t] = r, this.logger[e(w)](e(y)[e(g)](t, e(l)).concat(r));
}, C[M(948)][M(t)] = function(t) {
var r = M;
delete this.publicHeaders[t], this[r(h)].log("[HttpManager] Removed public header: ".concat(t));
}, C[M(e)][M(1131)] = function(t) {
var r = M;
this[r(908)]("Authorization", r(f)[r(1302)](t));
}, C[M(n)][M(657)] = function() {
var t = M;
this[t(391)](t(578));
}, C[M(948)][M(1174)] = function(t) {
var r = M;
this[r(c)][r(1203)](t);
}, C.prototype.addResponseInterceptor = function(t) {
var r = M;
this[r(1245)][r(1203)](t);
}, C[M(i)][M(a)] = function(t) {
var r = 957, e = 627, n = 649, i = 1005, a = 1302, s = 594, o = 1180;
return ar(this, void 0, void 0, function() {
var u, v, c, f, h, L, w, y, g, l = this;
return sr(this, function(z) {
var M = 1137, C = 1265, b = x;
u = t;
for (v = 0, c = this[b(709)]; v < c[b(r)]; v++) f = c[v], u = f(u);
return h = ir(ir({}, this.publicHeaders), u[b(878)]), L = u.url, u[b(e)] && (w = Object.entries(u[b(e)])[b(n)](function(t) {
var r = t[0], e = t[1];
return "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(e));
})[b(i)]("&"), L = ""[b(a)](L, "?").concat(w)), y = u.timeout || 3e4, g = u[b(1137)] !== tr[b(s)] && u.data ? JSON[b(804)](u[b(978)]) : null, 
this.logger[b(670)](b(o)[b(1302)](u[b(1137)], " ")[b(a)](L)), [ 2, new Promise(function(t, r) {
var e = 542, n = 865, i = 1023, a = 792, s = 1230, o = 1090, v = 305, c = 1021, f = 1302, w = 1156, z = 1245, x = 431, B = 314, H = 331, d = 1302, D = 586, j = 1302, A = 431, p = 305, N = 1067, P = 1302, _ = 830, U = b, G = new XMLHttpRequest();
G.open(u[U(M)], L, !0), G[U(360)] = y, Object[U(C)](h).forEach(function(t) {
var r = U, e = t[0], n = t[1];
G[r(_)](e, n);
}), G.ontimeout = function() {
var t = U;
l[t(A)][t(p)](t(N)[t(P)](L)), r(new Error("Request timeout after "[t(1302)](y, "ms")));
}, G.onerror = function() {
var t = U;
l[t(431)].error(t(1163)[t(d)](L)), r(new Error(t(D)[t(j)](L)));
}, G[U(601)] = function() {
var u = U, h = {};
G[u(e)]()[u(n)]()[u(812)](/[\r\n]+/)[u(1129)](function(t) {
var r = u, e = t[r(869)](": ");
e > 0 && (h[t[r(258)](0, e)[r(H)]()] = t[r(258)](e + 2));
});
var y, g = h["content-type"] || "";
try {
y = g[u(i)](u(a)) ? JSON[u(s)](G.responseText) : G.responseText;
} catch (t) {
y = G[u(o)];
}
var M = {
data: y,
status: G[u(1156)],
statusText: G[u(544)],
headers: h
};
if (G[u(1156)] < 200 || G.status >= 300) l[u(431)][u(v)](u(c)[u(f)](G.status, " ")[u(1302)](G[u(544)])), 
r(new Error("HTTP "[u(1302)](G[u(w)], ": ")[u(1302)](G.statusText))); else {
for (var C = M, b = 0, d = l[u(z)]; b < d.length; b++) {
C = (0, d[b])(C);
}
l[u(x)][u(670)](u(B).concat(G.status, " ").concat(L)), t(C);
}
}, G[U(986)](g);
}) ];
});
});
}, C[M(948)][M(s)] = function(t, r, e) {
return ar(this, void 0, void 0, function() {
return sr(this, function(n) {
return [ 2, this.request(ir({
url: t,
method: tr.GET,
params: r
}, e)) ];
});
});
}, C.prototype[M(368)] = function(t, r, e) {
return ar(this, void 0, void 0, function() {
var n = 882;
return sr(this, function(i) {
var a = x;
return [ 2, this[a(n)](ir({
url: t,
method: tr[a(539)],
data: r
}, e)) ];
});
});
}, C[M(o)][M(u)] = function(t, r, e) {
return ar(this, void 0, void 0, function() {
return sr(this, function(n) {
return [ 2, this.request(ir({
url: t,
method: tr.PUT,
data: r
}, e)) ];
});
});
}, C[M(o)][M(v)] = function(t, r) {
var e = 882;
return ar(this, void 0, void 0, function() {
return sr(this, function(n) {
return [ 2, this[x(e)](ir({
url: t,
method: tr.DELETE
}, r)) ];
});
});
}, C;
}();
nr[r(708)] = or;
var ur = n && n[r(1108)] || function() {
var t = 1162, e = r;
return (ur = Object.assign || function(r) {
for (var e, n = x, i = 1, a = arguments.length; i < a; i++) {
e = arguments[i];
for (var s in e) Object.prototype[n(1147)][n(t)](e, s) && (r[s] = e[s]);
}
return r;
})[e(726)](this, arguments);
}, vr = n && n[r(541)] || function(t, r, e, n) {
var i = 590, a = {
_0x3c88ad: 1034
};
function s(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, o) {
var u = x;
function v(t) {
try {
f(n.next(t));
} catch (t) {
o(t);
}
}
function c(t) {
try {
f(n.throw(t));
} catch (t) {
o(t);
}
}
function f(t) {
var r = x;
t.done ? e(t[r(a._0x3c88ad)]) : s(t[r(1034)])[r(493)](v, c);
}
f((n = n.apply(t, r || []))[u(i)]());
});
}, cr = n && n[r(696)] || function(t, e) {
var n, i, a, s = 1247, o = 948, u = 590, v = 1117, c = {
_0x3291ff: 1117,
_0x294a26: 357,
_0x3ba22b: 590,
_0x2adbfd: 1114,
_0x4a84d8: 926,
_0xb9435: 943,
_0x32e745: 473,
_0x17e5cd: 473,
_0x304abb: 514
}, f = r, h = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, L = Object.create((typeof Iterator === f(s) ? Iterator : Object)[f(o)]);
return L[f(u)] = w(0), L.throw = w(1), L[f(v)] = w(2), typeof Symbol === f(1247) && (L[Symbol.iterator] = function() {
return this;
}), L;
function w(t) {
return function(r) {
return y([ t, r ]);
};
}
function y(r) {
var s = f;
if (n) throw new TypeError("Generator is already executing.");
for (;L && (L = 0, r[0] && (h = 0)), h; ) try {
if (n = 1, i && (a = 2 & r[0] ? i[s(c._0x3291ff)] : r[0] ? i[s(c._0x294a26)] || ((a = i[s(1117)]) && a[s(1162)](i), 
0) : i[s(c._0x3ba22b)]) && !(a = a[s(1162)](i, r[1]))[s(c._0x2adbfd)]) return a;
(i = 0, a) && (r = [ 2 & r[0], a[s(1034)] ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
h.label++;
return {
value: r[1],
done: !1
};

case 5:
h[s(473)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = h[s(514)][s(c._0x4a84d8)](), h[s(c._0xb9435)][s(926)]();
continue;

default:
if (!(a = h.trys, a = a.length > 0 && a[a[s(957)] - 1]) && (6 === r[0] || 2 === r[0])) {
h = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
h.label = r[1];
break;
}
if (6 === r[0] && h[s(c._0x32e745)] < a[1]) {
h.label = a[1], a = r;
break;
}
if (a && h[s(c._0x17e5cd)] < a[2]) {
h.label = a[2], h.ops[s(1203)](r);
break;
}
a[2] && h[s(c._0x304abb)][s(926)]();
h[s(943)].pop();
continue;
}
r = e[s(1162)](t, h);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object[r(1219)](er, "__esModule", {
value: !0
}), er[r(507)] = void 0;
var fr = nr, hr = function() {
var t = 948, e = 1131, n = 368, i = 264, a = 982, s = 948, o = 1265, u = 957, v = 742, c = 1271, f = 431, h = 670, L = 1302, w = 913, y = {
_0x5c7a83: 431,
_0x4c0bad: 742,
_0x22d58a: 878,
_0x35e713: 957,
_0x235cbd: 1058,
_0x51cf64: 908
}, g = r;
function l(t, r) {
var e = x;
void 0 === r && (r = {});
this[e(y._0x5c7a83)] = t, this[e(y._0x4c0bad)] = ur({
baseURL: "",
timeout: 3e4,
maxRetries: 3,
retryDelay: 1e3,
headers: {
"Content-Type": e(792)
}
}, r), this[e(1058)] = new (fr[e(708)])(t);
if (this[e(y._0x4c0bad)][e(y._0x22d58a)]) for (var n = 0, i = Object[e(1265)](this.config.headers); n < i[e(y._0x35e713)]; n++) {
var a = i[n], s = a[0], o = a[1];
this[e(y._0x235cbd)][e(y._0x51cf64)](s, o);
}
}
return l.getInstance = function(t, r) {
var e = x;
return !l[e(913)] && t && (l[e(w)] = new l(t, r)), l.instance;
}, l[g(t)][g(1043)] = function(t) {
var r = 766, e = 254, n = 1302, i = 289, a = g;
this[a(v)][a(c)] = t, this[a(1058)][a(1174)](function(s) {
var o = a;
return !s.url[o(r)](o(e)) && (s[o(289)] = ""[o(n)](t).concat(s[o(i)])), s;
}), this[a(f)][a(h)]("[NetworkManager] Base URL set to: "[a(L)](t));
}, l[g(948)][g(526)] = function(t) {
var r = g;
this.config = ur(ur({}, this[r(742)]), t);
if (t[r(878)]) for (var e = 0, n = Object[r(o)](t[r(878)]); e < n[r(u)]; e++) {
var i = n[e], a = i[0], s = i[1];
this[r(1058)][r(908)](a, s);
}
}, l[g(948)][g(e)] = function(t) {
var r = g;
this[r(1058)][r(1131)](t);
}, l[g(948)][g(879)] = function(t) {
var r = 473, e = 1058, n = 878, i = 742, a = 360, s = 978, o = 1156, u = 284, v = 1282, c = 268;
return vr(this, arguments, void 0, function(t, f) {
var h;
return void 0 === f && (f = {}), cr(this, function(L) {
var w = x;
switch (L[w(r)]) {
case 0:
L[w(943)].push([ 0, 2, , 3 ]);
return [ 4, this[w(e)].get(t, void 0, {
headers: f[w(n)],
timeout: f.timeout || this[w(i)][w(a)]
}) ];

case 1:
return [ 2, {
success: !0,
data: (h = L.sent())[w(s)],
statusCode: h[w(o)]
} ];

case 2:
return [ 2, {
success: !1,
error: L[w(u)]()[w(v)] || w(c)
} ];

case 3:
return [ 2 ];
}
});
});
}, l[g(948)][g(n)] = function(t, r) {
var e = 878, n = 360, i = 742, a = 360, s = 1071;
return vr(this, arguments, void 0, function(t, r, o) {
var u;
return void 0 === o && (o = {}), cr(this, function(v) {
var c = x;
switch (v[c(473)]) {
case 0:
v[c(943)][c(1203)]([ 0, 2, , 3 ]);
return [ 4, this.httpManager.post(t, r, {
headers: o[c(e)],
timeout: o[c(n)] || this[c(i)][c(a)]
}) ];

case 1:
return [ 2, {
success: !0,
data: (u = v[c(284)]())[c(978)],
statusCode: u.status
} ];

case 2:
return [ 2, {
success: !1,
error: v.sent()[c(1282)] || c(s)
} ];

case 3:
return [ 2 ];
}
});
});
}, l[g(t)][g(i)] = function(t, r) {
return vr(this, arguments, void 0, function(t, r, e) {
var n, i = 473, a = 943, s = 1203, o = 1058, u = 360, v = 742, c = 284;
return void 0 === e && (e = {}), cr(this, function(f) {
var h = x;
switch (f[h(i)]) {
case 0:
f[h(a)][h(s)]([ 0, 2, , 3 ]);
return [ 4, this[h(o)][h(264)](t, r, {
headers: e[h(878)],
timeout: e[h(u)] || this[h(v)][h(360)]
}) ];

case 1:
return [ 2, {
success: !0,
data: (n = f[h(c)]()).data,
statusCode: n.status
} ];

case 2:
return [ 2, {
success: !1,
error: f.sent().message || h(817)
} ];

case 3:
return [ 2 ];
}
});
});
}, l[g(948)][g(a)] = function(t) {
return vr(this, arguments, void 0, function(t, r) {
var e, n = 1058, i = 878, a = 360, s = 284, o = 284, u = 1282, v = 317;
return void 0 === r && (r = {}), cr(this, function(c) {
var f = x;
switch (c.label) {
case 0:
c.trys[f(1203)]([ 0, 2, , 3 ]);
return [ 4, this[f(n)].delete(t, {
headers: r[f(i)],
timeout: r[f(a)] || this.config[f(360)]
}) ];

case 1:
return [ 2, {
success: !0,
data: (e = c[f(s)]()).data,
statusCode: e[f(1156)]
} ];

case 2:
return [ 2, {
success: !1,
error: c[f(o)]()[f(u)] || f(v)
} ];

case 3:
return [ 2 ];
}
});
});
}, l[g(s)][g(1048)] = function() {
return this.httpManager;
}, l;
}();
er[r(507)] = hr;
var Lr = {}, wr = n && n[r(1105)] || function(t, e, n) {
var i = 258, a = r;
if (n || 2 === arguments[a(957)]) for (var s, o = 0, u = e.length; o < u; o++) if (s || !(o in e)) {
s || (s = Array.prototype[a(258)][a(1162)](e, 0, o));
s[o] = e[o];
}
return t[a(1302)](s || Array[a(948)][a(i)][a(1162)](e));
};
Object[r(1219)](Lr, r(1172), {
value: !0
}), Lr[r(1001)] = void 0;
var yr = function() {
var t = 723, e = 948, n = 1065, i = 736, a = 556, s = 1062, o = 1302, u = 957, v = 298, c = 1302, f = 321, h = 1302, L = 1185, w = 1181, y = 1185, g = 1185, l = 277, z = 1302, M = 755, C = 1185, b = 957, B = 303, H = 957, d = 1185, D = 1302, j = 957, A = 1185, p = 1185, N = 681, P = 1302, _ = 1185, U = 1203, G = 670, T = 1166, Y = 1212, I = {
_0x316070: 431,
_0x50ede4: 670,
_0x16c46c: 271
}, V = r;
function S(t) {
var r = x;
this.logger = t, this[r(303)] = 100, this.queue = [], this[r(I._0x316070)][r(I._0x50ede4)](r(I._0x16c46c)[r(1302)](this[r(303)]));
}
return S.prototype[V(t)] = function(t, r) {
var e = V;
try {
var n = {
eventType: t,
eventData: r,
timestamp: Date[e(1062)]()
};
if (this[e(A)].length >= this[e(303)]) {
var i = this[e(p)][e(1100)]();
this[e(431)].warn(e(N)[e(P)](i ? i.eventType : e(983)));
}
return this[e(_)][e(U)](n), this[e(431)][e(G)](e(T)[e(1302)](t, e(291))[e(1302)](this[e(p)][e(957)], "/").concat(this.MAX_QUEUE_SIZE)), 
!0;
} catch (t) {
return this.logger[e(305)](e(Y).concat(t)), !1;
}
}, S[V(948)][V(1017)] = function() {
var t = V, r = wr([], this[t(1185)], !0);
return this[t(d)] = [], this[t(431)][t(670)]("[EventQueue] Dequeued "[t(D)](r[t(j)], t(617))), 
r;
}, S[V(e)][V(n)] = function() {
var t = V;
return this[t(1185)][t(H)];
}, S[V(948)][V(321)] = function() {
return 0 === this[V(1185)].length;
}, S[V(948)][V(310)] = function() {
var t = V;
return this[t(C)][t(b)] >= this[t(B)];
}, S.prototype[V(i)] = function() {
var t = V, r = this.queue.length;
this[t(g)] = [], this[t(431)].log(t(l)[t(z)](r, t(M)));
}, S[V(e)].getOldestEventTimestamp = function() {
var t = V;
return 0 === this[t(y)].length ? null : this[t(1185)][0][t(1181)];
}, S.prototype[V(556)] = function() {
var t = V;
return 0 === this[t(L)][t(957)] ? null : this[t(L)][this[t(L)][t(957)] - 1][t(w)];
}, S.prototype.getStatus = function() {
var t = V, r = this[t(1164)](), e = this[t(a)](), n = Date[t(s)](), i = "[EventQueue Status]\n";
i += t(648)[t(o)](this[t(1185)][t(u)], "/")[t(1302)](this[t(303)], "\n"), i += t(337)[t(1302)](this[t(310)](), "\n"), 
i += t(v)[t(c)](this[t(f)](), "\n");
if (r) {
var L = Math.floor((n - r) / 1e3);
i += "  Oldest Event Age: "[t(h)](L, "s\n");
}
if (e) {
var w = Math.floor((n - e) / 1e3);
i += "  Newest Event Age: "[t(h)](w, "s\n");
}
return i;
}, S;
}();
Lr[r(1001)] = yr;
var gr = {};
Object[r(1219)](gr, r(1172), {
value: !0
}), gr.CryptoUtils = void 0;
var lr = function() {
var t = 598, e = 269, n = 492, i = 797, a = 1079, s = 869, o = 869, u = 979, v = 957, c = 854, f = 305, h = 855, L = 854, w = 866, y = 649, g = 1005, l = 363, z = 812, x = 529, M = 305, C = 1305, b = 1079, B = 305, H = 957, d = 854, D = 1229, j = r;
function A() {}
return A[j(794)] = function(t) {
var r = j, e = 0;
if (0 === t[r(H)]) return e[r(1229)](16);
for (var n = 0; n < t[r(H)]; n++) {
e = (e << 5) - e + t[r(d)](n), e &= e;
}
return Math[r(809)](e)[r(D)](16)[r(692)](8, "0");
}, A[j(941)] = function(t) {
var r = j;
try {
if ("undefined" != typeof btoa) return btoa(encodeURIComponent(t)[r(b)](/%([0-9A-F]{2})/g, function(t, r) {
return String.fromCharCode(parseInt(r, 16));
}));
if ("undefined" != typeof Buffer) return Buffer.from(t).toString(r(304));
throw new Error("Base64 encoding not supported in this environment");
} catch (t) {
return console[r(B)](r(443), t), "";
}
}, A[j(979)] = function(t) {
var r = 854, e = 1229, n = j;
try {
if (typeof atob !== n(492)) return decodeURIComponent(atob(t)[n(z)]("")[n(649)](function(t) {
var i = n;
return "%" + ("00" + t[i(r)](0)[i(e)](16))[i(258)](-2);
}).join(""));
if (typeof Buffer !== n(492)) return Buffer.from(t, n(304))[n(1229)](n(691));
throw new Error(n(x));
} catch (t) {
return console[n(M)](n(C), t), "";
}
}, A.generateSignature = function(t, r) {
var e = j, n = Object.keys(t)[e(w)]()[e(y)](function(r) {
return ""[e(1302)](r, "=").concat(t[r]);
})[e(g)]("&"), i = ""[e(1302)](n, e(l))[e(1302)](r);
return this[e(794)](i);
}, A.verifySignature = function(t, r, e) {
return this.generateSignature(t, e) === r;
}, A[j(307)] = function(t, r) {
var e = j;
if (!t || !r) return t;
for (var n = "", i = 0; i < t[e(957)]; i++) {
var a = t[e(854)](i), s = r[e(L)](i % r[e(957)]);
n += String.fromCharCode(a ^ s);
}
return this[e(941)](n);
}, A[j(502)] = function(t, r) {
var e = j;
if (!t || !r) return t;
try {
for (var n = this[e(u)](t), i = "", a = 0; a < n[e(v)]; a++) {
var s = n[e(c)](a), o = r[e(854)](a % r[e(957)]);
i += String[e(499)](s ^ o);
}
return i;
} catch (r) {
return console[e(f)](e(h), r), t;
}
}, A[j(965)] = function(t) {
var r = j;
if (typeof atob !== r(n)) return atob(t);
for (var e = r(i), u = t[r(a)](/\s/g, ""), v = "", c = 0; c < u[r(957)]; ) {
var f = e.indexOf(u[c++]), h = e[r(s)](u[c++]), L = "=" === u[c] ? 64 : e[r(o)](u[c++]), w = "=" === u[c] ? 64 : e.indexOf(u[c++]);
v += String.fromCharCode(f << 2 | h >> 4);
64 !== L && (v += String.fromCharCode((15 & h) << 4 | L >> 2));
64 !== w && (v += String.fromCharCode((3 & L) << 6 | w));
}
return v;
}, A.generateRandomString = function(r) {
var n = j;
void 0 === r && (r = 16);
for (var i = n(t), a = "", s = 0; s < r; s++) a += i[n(e)](Math[n(1120)](Math[n(771)]() * i.length));
return a;
}, A;
}();
gr.CryptoUtils = lr;
var zr = n && n[r(541)] || function(t, r, e, n) {
var i = 726;
function a(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, s) {
var o = {
_0x6a8f53: 1114,
_0x332404: 493
}, u = x;
function v(t) {
var r = x;
try {
f(n[r(590)](t));
} catch (t) {
s(t);
}
}
function c(t) {
try {
f(n.throw(t));
} catch (t) {
s(t);
}
}
function f(t) {
var r = x;
t[r(o._0x6a8f53)] ? e(t.value) : a(t[r(1034)])[r(o._0x332404)](v, c);
}
f((n = n[u(i)](t, r || []))[u(590)]());
});
}, xr = n && n[r(696)] || function(t, e) {
var n, i, a, s = 1247, o = 590, u = 1117, v = 666, c = {
_0x53dbd6: 1117,
_0x3f3292: 590,
_0x1ae366: 1162,
_0x42ca00: 1034,
_0x4494ae: 473,
_0x2d2931: 473,
_0x1bbaf9: 926,
_0x593b29: 943,
_0x36eca4: 957,
_0x467989: 473,
_0x3cc313: 473,
_0x10c09d: 1162
}, f = r, h = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, L = Object[f(471)]((typeof Iterator === f(s) ? Iterator : Object)[f(948)]);
return L[f(o)] = w(0), L.throw = w(1), L[f(u)] = w(2), typeof Symbol === f(1247) && (L[Symbol[f(v)]] = function() {
return this;
}), L;
function w(t) {
return function(r) {
return y([ t, r ]);
};
}
function y(r) {
var s = f;
if (n) throw new TypeError(s(710));
for (;L && (L = 0, r[0] && (h = 0)), h; ) try {
if (n = 1, i && (a = 2 & r[0] ? i[s(c._0x53dbd6)] : r[0] ? i[s(357)] || ((a = i[s(c._0x53dbd6)]) && a[s(1162)](i), 
0) : i[s(c._0x3f3292)]) && !(a = a[s(c._0x1ae366)](i, r[1])).done) return a;
(i = 0, a) && (r = [ 2 & r[0], a[s(c._0x42ca00)] ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
h[s(c._0x4494ae)]++;
return {
value: r[1],
done: !1
};

case 5:
h[s(c._0x2d2931)]++, i = r[1], r = [ 0 ];
continue;

case 7:
r = h[s(514)][s(c._0x1bbaf9)](), h[s(c._0x593b29)][s(926)]();
continue;

default:
if (!(a = h.trys, a = a[s(957)] > 0 && a[a[s(c._0x36eca4)] - 1]) && (6 === r[0] || 2 === r[0])) {
h = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
h[s(473)] = r[1];
break;
}
if (6 === r[0] && h[s(c._0x467989)] < a[1]) {
h.label = a[1], a = r;
break;
}
if (a && h[s(c._0x3cc313)] < a[2]) {
h.label = a[2], h.ops.push(r);
break;
}
a[2] && h.ops.pop();
h[s(943)].pop();
continue;
}
r = e[s(c._0x10c09d)](t, h);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object[r(1219)](rr, r(1172), {
value: !0
}), rr[r(1159)] = void 0;
var Mr = a, Cr = er, br = Lr, Br = gr, Hr = {
version: "0.0.0",
updateTime: 0,
rules: [],
lookupTables: {}
}, dr = function() {
var t = 948, e = 610, n = 948, i = 621, a = 948, s = 888, o = 948, u = 776, v = 488, c = 948, f = 1116, h = 948, L = 386, w = 358, y = 948, g = 1040, l = 605, z = 458, M = 431, C = 670, b = 905, B = 444, H = 1098, d = 649, D = 1285, j = 834, A = 949, p = 957, N = 1098, P = 616, _ = 1231, U = 649, G = 649, T = 716, Y = 1263, I = 1263, V = 649, S = 663, q = 1295, m = 1077, K = {
_0xba75d8: 1250,
_0x55f2bb: 288,
_0x16680b: 660,
_0x5880ad: 1077,
_0x3fdd86: 458,
_0x54592b: 555,
_0x5b800b: 323,
_0x295a1b: 568,
_0x5ce424: 670,
_0x59ff1d: 459,
_0x5bfc73: 631,
_0x98b909: 431,
_0x418f87: 1302,
_0x29f0c0: 1151
}, O = r;
function J(t, r, e, n, i, a, s) {
var o = x;
void 0 === i && (i = !1), void 0 === s && (s = !1), this[o(431)] = t, this[o(1189)] = r, 
this.CONFIG_CACHE_KEY = o(K._0xba75d8), this[o(1186)] = 864e5, this[o(689)] = 6e4, 
this[o(K._0x55f2bb)] = 3, this[o(K._0x16680b)] = 5e3, this[o(K._0x5880ad)] = null, 
this[o(K._0x3fdd86)] = !1, this[o(K._0x54592b)] = !1, this[o(K._0x5b800b)] = !1, 
this[o(1049)] = 0, this[o(K._0x295a1b)] = 0, this[o(339)] = e, this.configGameId = n, 
this.useLocalConfig = i, this[o(1136)] = a || "tracker_default_config", this[o(1295)] = s, 
this[o(905)] = new (br[o(1001)])(t), this.logger[o(K._0x5ce424)](o(K._0x59ff1d)[o(1302)](o(i ? K._0x5bfc73 : 462))), 
this[o(K._0x98b909)][o(670)](o(1064)[o(K._0x418f87)](o(s ? K._0x29f0c0 : 772)));
}
return J.prototype[O(969)] = function() {
return this[O(458)];
}, J[O(t)][O(1027)] = function() {
return this[O(m)];
}, J[O(948)][O(e)] = function() {
return this[O(q)];
}, J[O(n)][O(i)] = function() {
return this.configServerUrl;
}, J[O(a)][O(s)] = function() {
return this[O(663)];
}, J[O(o)][O(u)] = function(t, r) {
var e = O;
this[e(339)] = t, this[e(S)] = r, this.logger[e(670)](e(1226).concat(t, e(665))[e(1302)](r));
}, J.prototype.initializeConfig = function() {
return zr(this, void 0, void 0, function() {
var t, r, e = 431, n = 819, i = 336, a = 803, s = 655, o = 1077, u = 1302, v = 431, c = 1230;
return xr(this, function(f) {
var h = x;
switch (f.label) {
case 0:
this[h(e)][h(670)](h(952));
return this[h(n)] ? [ 4, this[h(386)]() ] : [ 3, 2 ];

case 1:
f.sent();
return [ 3, 5 ];

case 2:
return [ 4, this[h(i)]() ];

case 3:
(t = f.sent()) ? (this.logger[h(670)](h(408)), this[h(a)](t[h(s)]), this[h(o)] = t[h(s)], 
this[h(458)] = !0, this[h(274)] && this[h(274)](this.currentConfig), this[h(e)][h(670)](h(760)[h(u)](this[h(1077)][h(1313)]))) : (this[h(v)].log("[ConfigManager] No cached config, applying bundled default to allow SDK to start immediately"), 
r = JSON[h(c)](JSON.stringify(Hr)), this[h(803)](r), this.currentConfig = r, this.isConfigReady = !0, 
this[h(274)] && this[h(274)](this[h(o)]), this[h(431)].log("[ConfigManager] Bundled default config applied, version: ".concat(r.version)));
return [ 4, this[h(838)](!0) ];

case 4:
f.sent(), f[h(473)] = 5;

case 5:
return [ 2 ];
}
});
});
}, J[O(948)][O(v)] = function() {
var t = 473, r = 431, e = 470, n = 670, i = 670, a = 686, s = 1062, o = 1049, u = 379, v = 1171, c = 431, f = 838;
return zr(this, void 0, void 0, function() {
var h, L;
return xr(this, function(w) {
var y = x;
switch (w[y(t)]) {
case 0:
if (this.useLocalConfig) return this[y(r)][y(670)](y(e)), [ 2 ];
this[y(r)][y(n)](y(857));
if (this.isFetchingConfig) return this[y(431)][y(i)](y(a)), [ 2 ];
if (this[y(1049)] > 0 && (h = Date[y(s)]() - this[y(o)]) < this[y(689)]) return L = Math[y(379)]((this[y(689)] - h) / 1e3), 
this.logger[y(i)](y(353)[y(1302)](Math[y(u)](h / 1e3), "s ago, not yet at minimum interval ")[y(1302)](this.MIN_FETCH_INTERVAL_MS / 1e3, y(v)).concat(L, y(711))), 
[ 2 ];
this[y(c)].log(y(1155));
return [ 4, this[y(f)]() ];

case 1:
w.sent();
return [ 2 ];
}
});
});
}, J.prototype[O(838)] = function() {
return zr(this, arguments, void 0, function(t) {
var r, e, n, i, a, s, o, u, v, c, f, h, L, w, y = 473, g = 670, l = 686, z = 555, M = 323, C = 1049, b = 339, B = 1079, H = 1023, d = 1302, D = 663, j = 406, A = 1118, p = 473, N = 943, P = 507, _ = 478, U = 978, G = 978, T = 999, Y = 688, I = 701, V = 957, S = 1236, q = 960, m = 1230, K = 803, O = 284, J = 431, E = 999, W = 461, X = 1302, k = 284, Z = 305, R = 284;
return void 0 === t && (t = !1), xr(this, function(F) {
var Q = x;
switch (F[Q(y)]) {
case 0:
if (this[Q(555)]) return this.logger[Q(g)](Q(l)), [ 2 ];
this[Q(z)] = !0, this[Q(M)] = t, this[Q(C)] = Date[Q(1062)](), r = this[Q(b)][Q(B)](/\/+$/, ""), 
e = r[Q(H)](this[Q(663)]) ? r : ""[Q(d)](r, "/")[Q(1302)](this[Q(D)]), n = ""[Q(d)](e, Q(j)), 
this[Q(431)].log(Q(A)[Q(1302)](n)), F[Q(p)] = 1;

case 1:
F[Q(N)][Q(1203)]([ 1, 10, 12, 13 ]);
return [ 4, Cr[Q(P)].getInstance(this[Q(431)])[Q(879)](n) ];

case 2:
if (!(i = F[Q(284)]())[Q(_)] || !i[Q(U)]) return [ 3, 7 ];
a = i[Q(G)], this[Q(431)].log(Q(576) + JSON[Q(804)](a));
if (0 !== a[Q(T)] || !a[Q(U)]) return [ 3, 4 ];
Mr[Q(Y)][Q(273)](Q(618)), s = Br[Q(I)][Q(965)](a[Q(U)]), o = new Uint8Array(s[Q(957)]);
for (f = 0; f < s[Q(V)]; f++) o[f] = s[Q(854)](f);
u = void 0;
try {
v = new TextDecoder("utf-8"), u = v[Q(S)](o);
} catch (t) {
this[Q(431)][Q(374)](Q(q)), c = "";
for (f = 0; f < o[Q(V)]; f++) c += "%" + ("00" + o[f][Q(1229)](16))[Q(258)](-2);
u = decodeURIComponent(c);
}
h = JSON[Q(m)](u), this[Q(K)](h);
return [ 4, this.handleConfigSuccess(h, t) ];

case 3:
F[Q(O)]();
return [ 3, 6 ];

case 4:
L = a.message || Q(377), this[Q(J)][Q(374)]("[ConfigManager] Configuration request returned error code: "[Q(1302)](a[Q(E)], Q(W))[Q(X)](L));
return [ 4, this[Q(1116)](L) ];

case 5:
F[Q(O)](), F[Q(473)] = 6;

case 6:
return [ 3, 9 ];

case 7:
L = i.error || Q(299), this[Q(431)][Q(374)]("[ConfigManager] Configuration request failed: ".concat(L));
return [ 4, this[Q(1116)](L) ];

case 8:
F[Q(k)](), F[Q(473)] = 9;

case 9:
return [ 3, 13 ];

case 10:
w = F.sent(), this[Q(431)][Q(Z)](Q(270)[Q(1302)](w));
return [ 4, this.handleConfigFailure(String(w)) ];

case 11:
F[Q(R)]();
return [ 3, 13 ];

case 12:
this[Q(555)] = !1;
return [ 7 ];

case 13:
return [ 2 ];
}
});
});
}, J[O(c)][O(1194)] = function(t) {
var r = 431, e = 374, n = 1249, i = 1053, a = 1077, s = 721, o = 1077, u = 1278, v = 1302, c = 458, f = 457, h = 670, L = 725, w = 1040;
return zr(this, arguments, void 0, function(t, y) {
var g, l, z, M, C, b;
return void 0 === y && (y = !1), xr(this, function(B) {
var H = x;
switch (B[H(473)]) {
case 0:
if (t) return [ 3, 2 ];
this[H(r)][H(e)](H(n));
return [ 4, this[H(1116)](H(i)) ];

case 1:
B.sent();
return [ 2 ];

case 2:
g = null !== (C = null === (M = this[H(a)]) || void 0 === M ? void 0 : M[H(762)]) && void 0 !== C ? C : null, 
l = null !== (b = t.updateTime) && void 0 !== b ? b : null, z = !1;
if (!y) return [ 3, 4 ];
Mr[H(688)][H(273)](H(s).concat(l)), this[H(o)] = t, this.isConfigReady = !0;
return [ 4, this[H(910)](t) ];

case 3:
B[H(284)](), z = !0;
return [ 3, 7 ];

case 4:
if (null !== g && null !== l && l === g) return [ 3, 6 ];
Mr.Logger.flow(H(510)[H(1302)](g, H(u))[H(v)](l, H(1217))), this.currentConfig = t, 
this[H(c)] = !0;
return [ 4, this.cacheConfig(t) ];

case 5:
B[H(284)](), z = !0;
return [ 3, 7 ];

case 6:
this[H(431)].log(H(f).concat(l, H(370)));
!this.isConfigReady && (this.currentConfig = t, this[H(c)] = !0, z = !0);
B.label = 7;

case 7:
this.retryCount = 0, this[H(431)][H(h)](H(L)[H(v)](this[H(c)], H(1223))[H(v)](z, ", version=")[H(v)](this[H(1077)] ? this[H(a)][H(1313)] : "null"));
z && this[H(1077)] && (Mr[H(688)][H(273)]("[ConfigManager] Config ready callback (version="[H(1302)](this.currentConfig.version, ")")), 
this.onConfigReady && this[H(274)](this[H(1077)]));
return [ 4, this[H(w)]() ];

case 8:
B[H(284)]();
return [ 2 ];
}
});
});
}, J[O(948)][O(f)] = function(t) {
return zr(this, void 0, void 0, function() {
var r, e, n = 431, i = 336, a = 284, s = 670, o = 655, u = 458, v = 458, c = 274, f = 1077, h = 473, L = 568, w = 1302, y = 323, g = 660, l = 680, z = 288, M = 568, C = 668, b = this;
return xr(this, function(B) {
var H = x;
switch (B.label) {
case 0:
this[H(n)].warn("[ConfigManager] Configuration fetch failed: "[H(1302)](t));
return [ 4, this[H(i)]() ];

case 1:
if (!(r = B[H(a)]()) || !r.configData) return [ 3, 4 ];
this[H(431)][H(s)]("[ConfigManager] Using cached configuration"), this[H(803)](r[H(655)]), 
this[H(1077)] = r[H(o)];
if (this[H(u)]) return [ 3, 3 ];
this[H(v)] = !0;
this[H(274)] && this[H(c)](this[H(f)]);
return [ 4, this[H(1040)]() ];

case 2:
B.sent(), B[H(h)] = 3;

case 3:
return [ 2 ];

case 4:
this[H(L)] < this[H(288)] ? (this[H(L)]++, this.logger[H(670)]("[ConfigManager] Starting retry attempt "[H(w)](this[H(568)], "/")[H(1302)](this[H(288)])), 
e = this[H(y)], setTimeout(function() {
return zr(b, void 0, void 0, function() {
var t = 473, r = 838;
return xr(this, function(n) {
var i = x;
switch (n[i(t)]) {
case 0:
return [ 4, this[i(r)](e) ];

case 1:
n[i(284)]();
return [ 2 ];
}
});
});
}, this[H(g)])) : (this.logger[H(305)](H(l)[H(w)](this[H(z)], " retries: ")[H(1302)](t)), 
this[H(M)] = 0, this[H(C)] && this[H(668)](t));
return [ 2 ];
}
});
});
}, J[O(h)][O(803)] = function(t) {
var r = O;
t[r(B)] && (!t[r(1098)] && (t[r(H)] = {}), t[r(B)] = t.rules[r(d)](function(e) {
var n = r;
!e.ruleId && e.id && (e[n(D)] = e.id);
void 0 === e.conditions && void 0 !== e[n(j)] && (e[n(A)] = e[n(j)]);
if (e[n(1098)] && typeof e[n(1098)] === n(316)) for (var i = Object[n(833)](e[n(1098)]), a = 0; a < i[n(p)]; a++) {
var s = i[a], o = e[n(1098)][s], u = t[n(N)][s];
if (u && u[n(616)] === n(924) && o[n(P)] === n(924) && Array[n(1231)](u.values) && Array[n(_)](o.values)) t.lookupTables[s] = {
description: u.description,
type: n(924),
values: u[n(777)][n(1302)](o[n(777)])
}; else if (u && u[n(616)] === n(U) && "map" === o.type && u[n(649)] && o[n(649)]) {
for (var v = {}, c = Object.keys(u[n(649)]), f = 0; f < c[n(p)]; f++) v[c[f]] = u[n(U)][c[f]];
for (var h = Object[n(833)](o[n(G)]), L = 0; L < h[n(p)]; L++) {
var w = h[L];
void 0 !== v[w] && Array.isArray(v[w]) && Array[n(1231)](o[n(649)][w]) ? v[w] = v[w].concat(o.map[w]) : v[w] = o[n(U)][w];
}
t.lookupTables[s] = {
description: u[n(T)],
type: n(G),
map: v
};
} else t[n(1098)][s] = o;
}
return e[n(Y)] && Array[n(_)](e[n(I)]) && (e[n(Y)] = e.actions[n(V)](function(t) {
return "string" == typeof t ? {
type: t,
params: {}
} : t;
})), e;
}));
}, J[O(948)][O(910)] = function(t) {
return zr(this, void 0, void 0, function() {
var r, e, n, i = 473, a = 1186, s = 804, o = 642, u = 431, v = 670, c = 1313, f = 284;
return xr(this, function(h) {
var L = x;
switch (h[L(i)]) {
case 0:
h.trys[L(1203)]([ 0, 2, , 3 ]), r = {
configData: t,
cacheTime: Date[L(1062)](),
expiryTime: Date[L(1062)]() + this[L(a)]
}, e = JSON[L(s)](r);
return [ 4, this[L(1189)][L(1197)](this[L(o)], e) ];

case 1:
h[L(284)](), this[L(u)][L(v)]("[ConfigManager] Configuration cached, version: "[L(1302)](t[L(c)]));
return [ 3, 3 ];

case 2:
n = h[L(f)](), this[L(u)].error("[ConfigManager] Failed to cache configuration: "[L(1302)](n));
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
}, J[O(n)][O(336)] = function() {
var t = 473, r = 533, e = 642, n = 284, i = 1230;
return zr(this, void 0, void 0, function() {
var a, s, o;
return xr(this, function(u) {
var v = x;
switch (u[v(t)]) {
case 0:
u[v(943)][v(1203)]([ 0, 2, , 3 ]);
return [ 4, this[v(1189)][v(r)](this[v(e)]) ];

case 1:
if (!(a = u[v(n)]())) return this[v(431)][v(670)](v(1072)), [ 2, null ];
s = void 0;
s = typeof a === v(294) ? JSON[v(i)](a) : a;
this.logger.log("[ConfigManager] Loaded cached configuration, version: "[v(1302)](s[v(655)] ? s[v(655)].version : void 0));
return [ 2, s ];

case 2:
o = u.sent(), this[v(431)][v(305)]("[ConfigManager] Failed to load cached configuration: "[v(1302)](o));
return [ 2, null ];

case 3:
return [ 2 ];
}
});
});
}, J.prototype[O(L)] = function() {
return zr(this, void 0, void 0, function() {
var t, r, e = 943, n = 1302, i = 533, a = 284, s = 431, o = 670, u = 659, v = 1077, c = 1040, f = 305, h = 284, L = 668;
return xr(this, function(w) {
var y = x;
switch (w[y(473)]) {
case 0:
w[y(e)][y(1203)]([ 0, 5, , 6 ]), this[y(431)][y(670)](y(418)[y(n)](this.localConfigPath));
return [ 4, this[y(1189)][y(i)](this.localConfigPath) ];

case 1:
if (!(t = w[y(a)]())) return [ 3, 3 ];
this[y(1077)] = t, this.isConfigReady = !0, this[y(s)][y(o)](y(u).concat(this[y(v)][y(1313)]));
this[y(1077)] && this[y(274)] && this.onConfigReady(this[y(1077)]);
return [ 4, this[y(c)]() ];

case 2:
w[y(284)]();
return [ 3, 4 ];

case 3:
this[y(431)][y(f)]("[ConfigManager] Local configuration load failed");
this.onConfigError && this[y(668)](y(1253));
w.label = 4;

case 4:
return [ 3, 6 ];

case 5:
r = w[y(h)](), this[y(s)].error("[ConfigManager] Local configuration load exception: ".concat(r));
this[y(L)] && this[y(L)]("Local configuration load exception: "[y(n)](r));
return [ 3, 6 ];

case 6:
return [ 2 ];
}
});
});
}, J[O(c)][O(w)] = function(t, r) {
var e = O;
this[e(z)] ? this[e(431)].warn(e(899)) : (this[e(M)][e(C)](e(286)[e(1302)](t)), 
this[e(b)].enqueue(t, r));
}, J[O(y)][O(g)] = function() {
var t = 905, r = 670, e = 1302, n = 424, i = 305, a = 431, s = 990;
return zr(this, void 0, void 0, function() {
var o, u, v, c;
return xr(this, function(f) {
var h = x;
if (this[h(t)].isEmpty()) return this[h(431)][h(r)](h(1130)), [ 2 ];
o = this[h(t)][h(1017)](), this.logger[h(670)]("[ConfigManager] Processing "[h(e)](o[h(957)], " queued events"));
for (u = 0, v = o; u < v[h(957)]; u++) {
c = v[u];
try {
this[h(n)] && this.onQueuedEventProcess(c.eventType, c[h(439)]);
} catch (t) {
this[h(431)][h(i)](h(456)[h(1302)](t));
}
}
return this[h(a)][h(670)](h(s)), [ 2 ];
});
});
}, J[O(948)][O(l)] = function() {
return this.eventQueue.size();
}, J;
}();
rr[r(1159)] = dr;
var Dr = {}, jr = {};
Object.defineProperty(jr, "__esModule", {
value: !0
}), jr[r(295)] = void 0;
var Ar = Yt, pr = function() {
var t = 948, e = 1251, n = 948, i = 948, a = 957, s = 331, o = 1079, u = 1025, v = 431, c = 670, f = 717, h = 1302, L = 1234, w = 636, y = 593, g = 1302, l = 1302, z = 1234, M = 305, C = 1175, b = 831, B = 670, H = 1302, d = 1062, D = 628, j = 431, A = r;
function p(t) {
var r = x;
this.logger = t, this[r(1259)] = !1, this.initialize();
}
return p[A(t)][A(e)] = function() {
var t = A;
try {
typeof window !== t(492) && window[t(1234)] ? (this[t(1259)] = !0, this[t(j)][t(670)](t(876))) : this[t(j)][t(374)](t(573));
} catch (r) {
this[t(431)][t(305)]("[FirebaseAdapter] Firebase initialization failed", r);
}
}, p[A(n)].logEvent = function(t, r) {
var e = A;
void 0 === r && (r = {});
var n = this.sanitizeEventName(t);
n !== t && this.logger[e(670)](e(1041)[e(1302)](t, e(C))[e(1302)](n));
var i = this[e(b)](r);
this[e(431)][e(B)]("[FirebaseAdapter] 🔥 Firebase event: "[e(H)](n), i);
var a = Ar[e(414)].getInstance(), s = {
eventName: n,
params: i,
timestamp: Date[e(d)]()
};
a[e(743)](Ar.TRACKER_EVENTS[e(D)], s), this[e(431)].log("[FirebaseAdapter] ⚠️ TEST MODE: Firebase event NOT sent to server, only logged");
}, p[A(948)].setUserProperty = function(t, r) {
var e, n = A;
this.logger[n(670)](n(y)[n(g)](t, n(853))[n(l)](r));
if (this.isInitialized) try {
typeof window !== n(492) && window.firebase && window[n(1234)][n(636)] && window[n(z)][n(636)]().setUserProperties(((e = {})[t] = r, 
e));
} catch (t) {
this[n(431)][n(M)](n(537), t);
}
}, p[A(t)].setUserId = function(t) {
var r = A;
this[r(v)][r(c)](r(f)[r(h)](t));
if (this[r(1259)]) try {
"undefined" != typeof window && window.firebase && window[r(1234)][r(636)] && window[r(L)][r(w)]()[r(263)](t);
} catch (t) {
this[r(431)].error("[FirebaseAdapter] Failed to set Firebase user ID", t);
}
}, p[A(i)][A(536)] = function(t) {
var r = A;
return t[r(331)]()[r(1079)](/[^a-z0-9_]/g, "_")[r(u)](0, 40);
}, p[A(n)][A(831)] = function(t) {
for (var r = A, e = {}, n = 0, i = Object[r(1265)](t); n < i[r(a)]; n++) {
var u = i[n], v = u[0], c = u[1], f = v[r(s)]()[r(o)](/[^a-z0-9_]/g, "_")[r(1025)](0, 40);
"string" == typeof c ? e[f] = c[r(1025)](0, 100) : typeof c === r(1103) ? e[f] = c : typeof c === r(1182) ? e[f] = c : e[f] = String(c)[r(1025)](0, 100);
}
return e;
}, p;
}();
jr.FirebaseAdapter = pr;
var Nr = {}, Pr = n && n.__assign || function() {
var t = 1162, e = r;
return (Pr = Object[e(914)] || function(r) {
for (var n, i = e, a = 1, s = arguments.length; a < s; a++) {
n = arguments[a];
for (var o in n) Object.prototype[i(1147)][i(t)](n, o) && (r[o] = n[o]);
}
return r;
})[e(726)](this, arguments);
};
Object[r(1219)](Nr, "__esModule", {
value: !0
}), Nr.AppsFlyerAdapter = void 0;
var _r = function() {
var t = 948, e = 625, n = 948, i = 606, a = 431, s = 670, o = 395, u = 329, v = 431, c = 1302, f = 1259, h = 517, L = 305, w = 1216, y = 957, g = 1191, l = 1112, z = 670, M = 347, C = 305, b = 1031, B = 1191, H = 625, d = 596, D = 1153, j = 1062, A = 917, p = 257, N = 431, P = 670, _ = 328, U = 1302, G = 492, T = 1259, Y = 431, I = 1177, V = 431, S = {
_0x13c71a: 431,
_0x2ca0ee: 874,
_0x580e6c: 596
}, q = r;
function m(t, r, e) {
var n = x;
this[n(S._0x13c71a)] = t, this[n(1259)] = !1, this.eventHistory = new Map(), this[n(257)] = 6e4, 
this[n(S._0x2ca0ee)] = n(350), this[n(S._0x580e6c)] = [], this[n(1191)] = null, 
this[n(1112)] = 1100, this[n(1251)]();
}
return m[q(948)][q(1251)] = function() {
var t = q;
try {
typeof window !== t(G) && window.AF ? (this[t(T)] = !0, this[t(Y)][t(670)]("[AppsFlyerAdapter] AppsFlyer SDK is available")) : this.logger[t(374)](t(I));
} catch (r) {
this[t(V)][t(305)]("[AppsFlyerAdapter] AppsFlyer initialization failed", r);
}
}, m.prototype[q(356)] = function(t, r) {
var e = q, n = Date[e(j)](), i = this[e(A)].get(t), a = Pr({}, r);
if (i && n - i.lastSendTime < this[e(p)]) {
var s = (i[e(644)] + 1) % 1e4;
a[this[e(874)]] = s, this[e(917)][e(900)](t, {
lastSendTime: n,
counter: s
}), this[e(N)][e(P)](e(_)[e(1302)](t, "' repeated within 60s, ") + e(1224)[e(U)](this[e(874)], "=")[e(1302)](s));
} else {
this[e(917)][e(900)](t, {
lastSendTime: n,
counter: 0
});
if (i) {
var o = ((n - i.lastSendTime) / 1e3).toFixed(1);
this[e(431)][e(P)]("[AppsFlyerAdapter] Event '"[e(1302)](t, e(1013)).concat(o, e(958)));
}
}
return a;
}, m[q(t)][q(347)] = function(t, r) {
var e = q;
void 0 === r && (r = {});
var n = this.handleDeduplication(t, r);
null === this[e(B)] && 0 === this[e(596)].length ? this[e(H)](t, n) : (this[e(d)].push({
eventName: t,
params: n
}), this[e(431)][e(670)](e(630).concat(this.sendQueue[e(957)], e(D)).concat(t)), 
this[e(606)]());
}, m[q(948)][q(e)] = function(t, r) {
var e = q;
this.logger[e(670)](e(574)[e(1302)](t), r);
if (this.isInitialized) try {
typeof window !== e(492) && window.AF && window.AF[e(M)] && window.AF[e(M)](t, r);
} catch (t) {
this.logger[e(C)](e(b), t);
} else this[e(431)][e(z)](e(654));
}, m[q(n)][q(i)] = function() {
var t = q, r = this;
null === this[t(1191)] && 0 !== this[t(596)][t(y)] && (this[t(g)] = setTimeout(function() {
var e = t;
r.queueTimer = null;
var n = r[e(596)][e(1100)]();
n && r[e(625)](n.eventName, n.params), r.scheduleNext();
}, this[t(l)]));
}, m[q(948)][q(517)] = function(t) {
var r = q;
this[r(v)][r(670)]("[AppsFlyerAdapter] AppsFlyer customer user ID: "[r(c)](t));
if (this[r(f)]) try {
typeof window !== r(492) && window.AF && window.AF[r(517)] && window.AF[r(h)](t);
} catch (t) {
this[r(431)][r(L)](r(w), t);
}
}, m.prototype[q(395)] = function(t) {
var r = q;
this[r(a)][r(s)]("[AppsFlyerAdapter] AppsFlyer additional data", t);
if (this[r(1259)]) try {
typeof window !== r(492) && window.AF && window.AF[r(o)] && window.AF[r(395)](t);
} catch (t) {
this[r(a)][r(305)](r(u), t);
}
}, m;
}();
Nr.AppsFlyerAdapter = _r, Object[r(1219)](Dr, r(1172), {
value: !0
}), Dr[r(1086)] = void 0;
var Ur = jr, Gr = Nr, Tr = function() {
var t = 1290, e = 948, n = 1138, i = 791, a = 791, s = 305, o = 814, u = 619, v = 522, c = 305, f = 1302, h = 791, L = 431, w = 374, y = 347, g = 431, l = 347, z = 427, M = 1302, C = 791, b = 1135, B = 305, H = 295, d = 431, D = 998, j = 1302, A = {
_0x52d2cb: 791
}, p = r;
function N(t) {
var r = x;
this[r(431)] = t, this[r(619)] = null, this[r(A._0x52d2cb)] = null;
}
return N[p(948)][p(1087)] = function() {
var t = p;
try {
this[t(619)] = new (Ur[t(H)])(this[t(d)]), this[t(d)][t(670)](t(933));
} catch (r) {
this[t(d)][t(305)](t(D)[t(j)](r));
}
}, N.prototype[p(t)] = function(t, r) {
var e = p;
try {
this[e(C)] = new (Gr[e(1032)])(this.logger, t, r), this.logger[e(670)](e(b));
} catch (t) {
this.logger[e(B)]("[PlatformAdapter] Failed to initialize AppsFlyer adapter: "[e(1302)](t));
}
}, N[p(948)][p(774)] = function(t, r) {
var e = p;
void 0 === r && (r = {});
if (this[e(619)]) try {
this.firebaseAdapter[e(l)](t, r);
} catch (r) {
this[e(431)].error(e(z)[e(M)](t), r);
} else this[e(g)].warn(e(1134));
}, N[p(948)][p(575)] = function(t, r) {
var e = p;
void 0 === r && (r = {});
if (this[e(h)]) try {
this[e(h)][e(y)](t, r);
} catch (r) {
this[e(L)].error(e(981).concat(t), r);
} else this[e(L)][e(w)]("[PlatformAdapter] AppsFlyer adapter not initialized, cannot send event");
}, N[p(e)][p(n)] = function(t, r) {
var e = p;
if (this[e(u)]) try {
this[e(u)][e(v)](t, r);
} catch (r) {
this[e(431)][e(c)](e(1299)[e(f)](t), r);
} else this[e(431)][e(374)](e(588));
}, N[p(948)][p(731)] = function(t) {
var r = p;
if (this[r(791)]) try {
this[r(a)][r(517)](t);
} catch (t) {
this.logger[r(s)](r(o), t);
} else this[r(431)][r(374)](r(1140));
}, N.prototype[p(1248)] = function() {
return null !== this[p(619)];
}, N[p(948)].isAppsFlyerAvailable = function() {
return null !== this[p(i)];
}, N;
}();
Dr.PlatformAdapter = Tr;
var Yr = {}, Ir = n && n[r(1108)] || function() {
var t = 957, e = 948, n = 1162, i = r;
return (Ir = Object[i(914)] || function(r) {
for (var a, s = i, o = 1, u = arguments[s(t)]; o < u; o++) {
a = arguments[o];
for (var v in a) Object[s(e)].hasOwnProperty[s(n)](a, v) && (r[v] = a[v]);
}
return r;
})[i(726)](this, arguments);
};
Object[r(1219)](Yr, "__esModule", {
value: !0
}), Yr.createIapPurchase = function(t) {
var e = r;
return Ir({
usdAmount: t[e(1044)],
localAmount: t[e(1019)],
currency: t[e(922)],
productId: t[e(278)],
productType: t[e(836)]
}, void 0 !== t[e(646)] && {
chapter: t.chapter
});
}, Yr[r(980)] = function(t) {
var e = {
_0x2ff9d5: 1292,
_0x30e8ba: 922,
_0x6009a8: 419,
_0x5223e8: 452
}, n = r;
return t[n(1044)] < 0 ? {
valid: !1,
error: "usdAmount不能为负数"
} : t[n(1019)] < 0 ? {
valid: !1,
error: n(e._0x2ff9d5)
} : t[n(922)] && 0 !== t[n(e._0x30e8ba)].length ? t.productId && 0 !== t[n(278)][n(957)] ? void 0 !== t.chapter && t[n(646)] < 0 ? {
valid: !1,
error: n(e._0x5223e8)
} : {
valid: !0
} : {
valid: !1,
error: n(1254)
} : {
valid: !1,
error: n(e._0x6009a8)
};
}, Yr[r(750)] = function(t) {
var e = {
_0x306f1c: 296,
_0x2fdff9: 957,
_0x59d70c: 342,
_0x27f022: 688,
_0x290894: 440,
_0x5b1487: 1258,
_0x4f2c54: 675,
_0x552898: 893,
_0x2dfa53: 1207,
_0xfb1eca: 445,
_0x124607: 400,
_0x323b0d: 612,
_0x4c1f00: 296,
_0x14491f: 273
}, n = r;
Vr.Logger.slog(n(1257) + t[n(e._0x306f1c)] + '", gameId="' + t.gameId + '"');
if (!t.serverUrl || 0 === t.serverUrl[n(957)]) return console.error(n(903)), {
valid: !1,
error: n(553)
};
if (!t[n(486)] || 0 === t.gameId[n(e._0x2fdff9)]) return console[n(305)](n(e._0x59d70c)), 
{
valid: !1,
error: n(912)
};
var i = /^https?:\/\/.+/, a = typeof URL !== n(492);
Vr[n(e._0x27f022)].slog(n(e._0x290894) + a);
try {
if (a) new URL(t[n(296)]), Vr[n(e._0x27f022)].slog(n(e._0x5b1487) + t[n(296)] + '"'); else {
if (!i[n(e._0x4f2c54)](t[n(296)])) return console[n(305)](n(1139) + t[n(296)] + '"'), 
{
valid: !1,
error: n(e._0x552898)
};
Vr.Logger.slog(n(e._0x2dfa53));
}
} catch (r) {
Vr.Logger[n(e._0xfb1eca)](n(1078) + r + n(e._0x124607) + t[n(296)] + '"');
if (!i.test(t.serverUrl)) return console[n(305)](n(e._0x323b0d) + t[n(e._0x4c1f00)] + '"'), 
{
valid: !1,
error: n(e._0x552898)
};
Vr[n(e._0x27f022)][n(519)](n(584) + t[n(e._0x4c1f00)] + '"');
}
return Vr.Logger[n(e._0x14491f)]('[HabbyTracker][validateTrackerSettings] 校验通过, serverUrl="' + t.serverUrl + n(824) + t[n(486)] + '"'), 
{
valid: !0
};
};
var Vr = a;
var Sr = n && n[r(541)] || function(t, r, e, n) {
var i = 590;
function a(t) {
return t instanceof e ? t : new e(function(r) {
r(t);
});
}
return new (e || (e = Promise))(function(e, s) {
var o = {
_0x12b2fa: 1114,
_0x167396: 1034,
_0x40629a: 493
}, u = {
_0x1466b2: 357
}, v = x;
function c(t) {
var r = x;
try {
h(n[r(590)](t));
} catch (t) {
s(t);
}
}
function f(t) {
var r = x;
try {
h(n[r(u._0x1466b2)](t));
} catch (t) {
s(t);
}
}
function h(t) {
var r = x;
t[r(o._0x12b2fa)] ? e(t[r(1034)]) : a(t[r(o._0x167396)])[r(o._0x40629a)](c, f);
}
h((n = n.apply(t, r || []))[v(i)]());
});
}, qr = n && n[r(696)] || function(t, e) {
var n, i, a, s = 948, o = 357, u = 1247, v = {
_0x188047: 1117,
_0x91db88: 1162,
_0x3a34c3: 473,
_0x573d58: 943,
_0x546103: 473,
_0x21a4b6: 514,
_0x3e3aba: 1203
}, c = r, f = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
}, h = Object.create((typeof Iterator === c(1247) ? Iterator : Object)[c(s)]);
return h.next = L(0), h[c(o)] = L(1), h.return = L(2), typeof Symbol === c(u) && (h[Symbol.iterator] = function() {
return this;
}), h;
function L(t) {
return function(r) {
return w([ t, r ]);
};
}
function w(r) {
var s = c;
if (n) throw new TypeError("Generator is already executing.");
for (;h && (h = 0, r[0] && (f = 0)), f; ) try {
if (n = 1, i && (a = 2 & r[0] ? i.return : r[0] ? i.throw || ((a = i[s(v._0x188047)]) && a[s(1162)](i), 
0) : i[s(590)]) && !(a = a[s(v._0x91db88)](i, r[1])).done) return a;
(i = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
f[s(v._0x3a34c3)]++;
return {
value: r[1],
done: !1
};

case 5:
f.label++, i = r[1], r = [ 0 ];
continue;

case 7:
r = f[s(514)].pop(), f[s(943)].pop();
continue;

default:
if (!(a = f[s(v._0x573d58)], a = a[s(957)] > 0 && a[a[s(957)] - 1]) && (6 === r[0] || 2 === r[0])) {
f = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
f[s(473)] = r[1];
break;
}
if (6 === r[0] && f.label < a[1]) {
f[s(v._0x3a34c3)] = a[1], a = r;
break;
}
if (a && f[s(v._0x546103)] < a[2]) {
f[s(v._0x3a34c3)] = a[2], f[s(v._0x21a4b6)][s(v._0x3e3aba)](r);
break;
}
a[2] && f[s(514)][s(926)]();
f[s(v._0x573d58)].pop();
continue;
}
r = e[s(1162)](t, f);
} catch (t) {
r = [ 6, t ], i = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object[r(1219)](i, r(1172), {
value: !0
}), t.HabbyTrackerCore = void 0;
var mr = a, Kr = u, Or = L, Jr = B, Er = rr, Wr = Dr, Xr = Yr, kr = Z, Zr = er, Rr = gr, Fr = function() {
var t = 436, e = 1056, n = 948, i = 351, a = 948, s = 948, o = 311, u = 948, v = 948, c = 1046, f = 315, h = 948, L = 913, w = 1193, y = 1046, g = 431, l = 305, z = 431, M = 858, C = 1302, b = 781, B = 1222, H = 687, d = 861, D = 1126, j = 759, A = 969, p = {
_0x1625a3: 1011,
_0x1be7a8: 1206,
_0x51eed4: 1246,
_0x2f28d3: 1193,
_0x3acacc: 695,
_0x2f9e7c: 581,
_0x223366: 1189,
_0x3e9441: 1287,
_0x40215a: 1189,
_0x2778e3: 907
}, N = r;
function P() {
var t = x;
this[t(p._0x1625a3)] = t(p._0x1be7a8), this[t(p._0x51eed4)] = 15e3, this[t(432)] = 6e4, 
this.configManager = null, this[t(p._0x2f28d3)] = null, this[t(p._0x3acacc)] = null, 
this[t(1126)] = this[t(1011)], this.platform = "", this.isInitialized = !1, this[t(781)] = 0, 
this.lastResumeTime = 0, this[t(p._0x2f9e7c)] = !1, this[t(1222)] = null, this.logger = new mr.Logger(), 
this[t(p._0x223366)] = new (Kr[t(262)])(), this[t(852)] = Or[t(940)][t(p._0x3e9441)](this[t(p._0x40215a)], this.logger), 
this.logger[t(670)](t(p._0x2778e3));
}
return P.getInstance = function() {
return !P.instance && (P.instance = new P()), P.instance;
}, P[N(t)] = function() {
P.instance = null;
}, P.prototype[N(1006)] = function() {
return this.tracker;
}, P.prototype[N(953)] = function() {
return this.configManager;
}, P[N(948)][N(e)] = function() {
return this[N(1259)];
}, P.prototype[N(458)] = function() {
var t = N;
return !!this[t(759)] && this[t(j)][t(A)]();
}, P[N(n)][N(569)] = function() {
return this[N(D)];
}, P[N(948)][N(720)] = function() {
return this[N(531)];
}, P[N(948)].setEventSender = function(t) {
var r = N;
this[r(1222)] = t, (0, kr.setRegisteredEventSender)(t), this[r(431)][r(670)]("[HabbyTrackerCore] Event sender ".concat(t ? "registered" : r(d)));
}, P[N(948)][N(i)] = function() {
var t = N;
return null !== this[t(B)] ? this[t(1222)] : (0, kr[t(H)])();
}, P[N(948)][N(1075)] = function() {
var t = 305, r = 688, e = 519, n = 1241, i = 759, a = 1203, s = 621, o = 1302, u = 406, v = 273, c = 507, f = 431, h = 368, L = 284, w = 978, y = 978, g = 965, l = 957, z = 1229, M = 759, C = 421, b = 623, B = 519, H = 951, d = 1282, D = 714, j = 305, A = 1284, p = 299;
return Sr(this, void 0, void 0, function() {
var N, P, _, U, G, T, Y, I, V, S, q, m, K, O, J, E;
return qr(this, function(W) {
var X = x;
switch (W.label) {
case 0:
if (!this[X(759)]) return this[X(431)][X(t)](X(881)), [ 2, {
success: !1,
error: X(532)
} ];
mr[X(688)].flow(X(455)), mr[X(r)][X(e)](X(n) + this[X(i)][X(969)]()), W.label = 1;

case 1:
W.trys[X(a)]([ 1, 8, , 9 ]), N = this.configManager[X(s)](), P = this.configManager[X(888)](), 
_ = N.replace(/\/+$/, ""), U = _[X(1023)](P) ? _ : ""[X(o)](_, "/")[X(1302)](P), 
G = ""[X(1302)](U, X(u)), mr[X(688)][X(v)](X(1035) + G);
return [ 4, new (Zr[X(c)])(this[X(f)])[X(h)](G, {
account_id: this[X(1126)],
game_version: X(763),
app_version: "1.0.0",
platform: this[X(720)]()
}) ];

case 2:
if (!(T = W[X(L)]())[X(478)] || !T[X(w)]) return [ 3, 6 ];
if (0 !== (Y = T[X(w)])[X(999)] || !Y[X(y)]) return [ 3, 4 ];
I = Rr[X(701)][X(g)](Y.data), V = new Uint8Array(I[X(957)]);
for (K = 0; K < I[X(l)]; K++) V[K] = I.charCodeAt(K);
S = void 0;
try {
q = new TextDecoder(X(691)), S = q.decode(V);
} catch (t) {
m = "";
for (K = 0; K < V[X(957)]; K++) m += "%" + ("00" + V[K][X(z)](16))[X(258)](-2);
S = decodeURIComponent(m);
}
O = JSON[X(1230)](S);
return [ 4, this[X(M)][X(C)]() ];

case 3:
W[X(284)](), mr[X(r)].flow(X(b)), mr[X(r)][X(B)](X(H) + this[X(i)].isReady());
return [ 2, {
success: !0,
rawData: Y,
configData: O
} ];

case 4:
J = Y[X(d)] || X(D), console[X(j)](X(A), J);
return [ 2, {
success: !1,
error: J
} ];

case 5:
return [ 3, 7 ];

case 6:
J = T[X(305)] || X(p), console[X(j)](X(1122), J);
return [ 2, {
success: !1,
error: J
} ];

case 7:
return [ 3, 9 ];

case 8:
E = W[X(284)](), console.error("❌ [HabbyTrackerSDK] 配置导出失败:", E);
return [ 2, {
success: !1,
error: String(E)
} ];

case 9:
return [ 2 ];
}
});
});
}, P[N(948)].fetchConfig = function() {
var t = 431, r = 881, e = 532, n = 273, i = 1308, a = 582, s = 943, o = 1203, u = 421, v = 688, c = 1050, f = 1190, h = 759, L = 969, w = 1027;
return Sr(this, void 0, void 0, function() {
var y;
return qr(this, function(g) {
var l = x;
switch (g.label) {
case 0:
if (!this[l(759)]) {
this[l(t)][l(305)](l(r));
throw new Error(l(e));
}
mr[l(688)][l(n)](l(i)), mr[l(688)][l(519)](l(a) + this[l(759)].isReady()), g.label = 1;

case 1:
g[l(s)][l(o)]([ 1, 3, , 4 ]);
return [ 4, this[l(759)][l(u)]() ];

case 2:
g[l(284)](), mr[l(v)][l(273)](l(c)), mr[l(688)].slog(l(f) + this[l(h)][l(L)]() + l(898) + !!this[l(759)][l(w)]() + ", hasTracker=" + !!this[l(1193)]);
return [ 3, 4 ];

case 3:
y = g[l(284)](), console[l(305)]("❌ [HabbyTrackerSDK] 配置刷新失败:", y);
throw y;

case 4:
return [ 2 ];
}
});
});
}, P[N(a)][N(1280)] = function() {
var t = N;
return 0 !== this[t(781)] && Date[t(1062)]() - this[t(b)] < this.INITIALIZATION_COOLDOWN_MS;
}, P[N(n)][N(962)] = function() {
var t = N;
return 0 !== this[t(385)] && Date.now() - this.lastResumeTime < this[t(432)];
}, P.prototype[N(1251)] = function(t) {
return Sr(this, void 0, void 0, function() {
var r, e, n = 977, i = 509, a = 273, s = 389, o = 750, u = 677, v = 305, c = 1302, f = 296, h = 486, L = 431, w = 693, y = 473, g = 581, l = 273, z = 781, M = 1062, C = 431, b = 819, B = 274, H = 424, d = 670, D = 759, j = 776, A = 1086, p = 1273, N = 1222, P = 664, _ = 695, U = 1087, G = 431, T = 1093, Y = 1290, I = 552, V = 284, S = 1259, q = this;
return qr(this, function(m) {
var K = 751, O = x;
switch (m.label) {
case 0:
mr[O(688)].setEnabled(!1 !== t.enableInternalLog), mr[O(688)][O(n)](!1 !== t[O(i)]), 
mr[O(688)][O(a)](O(s));
if (this.isInitialized) return mr.Logger.flow("[HabbyTrackerSDK] SDK already initialized, skipping duplicate initialization"), 
[ 2 ];
if (this[O(581)]) return this[O(431)][O(374)](O(559)), [ 2 ];
if (!(r = (0, Xr[O(o)])(t))[O(u)]) {
this[O(431)][O(v)](O(501).concat(r[O(v)]));
throw new Error("Invalid settings: "[O(c)](r[O(305)]));
}
if (!t[O(f)] || !t[O(h)]) {
this[O(L)].error(O(w));
throw new Error(O(1274));
}
m[O(y)] = 1;

case 1:
m[O(943)][O(1203)]([ 1, 4, 5, 6 ]), this[O(g)] = !0, mr.Logger[O(l)](O(753)), this[O(z)] = Date[O(M)]();
this[O(759)] ? (this[O(C)][O(d)]("[HabbyTrackerSDK] ConfigManager already exists, updating server configuration"), 
this[O(D)][O(j)](t[O(f)], t.gameId)) : (this[O(759)] = new (Er[O(1159)])(this[O(C)], this[O(1189)], t.serverUrl, t[O(486)], void 0 !== t.useLocalConfig && t[O(b)], t.localConfigPath, void 0 !== t[O(1295)] && t[O(1295)]), 
this[O(759)][O(B)] = function(t) {
return q.handleConfigReady(t);
}, this[O(759)].onConfigError = function(t) {
return q[O(K)](t);
}, this[O(759)][O(H)] = function(t, r) {
return q.handleQueuedEventProcess(t, r);
});
this.currentAccountId = t[O(875)] || this.DEFAULT_ACCOUNT_ID, this[O(531)] = t.platform;
return [ 4, this[O(852)][O(280)](this[O(1126)]) ];

case 2:
m[O(284)](), this[O(C)][O(d)](O(970)[O(1302)](this.currentAccountId)), this.platformAdapter = new (Wr[O(A)])(this[O(431)]);
this[O(1222)] && (0, kr[O(p)])(this[O(N)]);
t[O(1283)] && (this[O(431)].log(O(P)), this[O(_)][O(U)]());
t.enableAppsFlyer && t[O(1300)] && t[O(552)] && (this[O(G)].log(O(T)), this[O(695)][O(Y)](t[O(1300)], t[O(I)]));
return [ 4, this.configManager[O(421)]() ];

case 3:
m[O(V)](), this[O(S)] = !0, mr[O(688)].flow(O(1268));
return [ 3, 6 ];

case 4:
e = m[O(284)](), this[O(431)][O(305)](O(393)[O(c)](e));
throw e;

case 5:
this.isInitializing = !1;
return [ 7 ];

case 6:
return [ 2 ];
}
});
});
}, P[N(s)].handleConfigReady = function(t) {
return Sr(this, void 0, void 0, function() {
var r, e, n, i = 431, a = 939, s = 1302, o = 1193, u = 1193, v = 759, c = 670, f = 1302, h = 528, L = 670, w = 526, y = 670, g = 364, l = 305, z = 431, M = 491, C = 1193, b = 852, B = 695, H = 425, d = 790;
return qr(this, function(D) {
var j = x;
this[j(i)][j(670)](j(a)[j(s)](t[j(1313)]));
try {
if (this[j(o)]) {
r = !!this[j(v)] && this[j(759)][j(610)](), e = this[j(1193)][j(895)](), n = t.version;
r ? e === n ? this[j(431)].log(j(287)[j(f)](e, j(h))) : this[j(i)][j(L)]("[HabbyTrackerSDK] Executing configuration hot update: "[j(1302)](e, " -> ").concat(n)) : this.logger[j(c)](j(877)[j(s)](n));
try {
this.tracker[j(w)](t, r), this[j(i)][j(y)](j(g)[j(1302)](n));
} catch (r) {
this[j(i)][j(l)](j(397)[j(1302)](r)), this[j(z)][j(L)](j(M)), this[j(C)] = new Jr.HabbyTracker(this[j(i)], this[j(b)], t, null !== this[j(B)] ? this.platformAdapter : void 0), 
this.logger[j(670)](j(H));
}
} else this[j(u)] = new (Jr[j(1111)])(this.logger, this[j(852)], t, null !== this.platformAdapter ? this[j(695)] : void 0), 
this[j(431)].log(j(1196));
} catch (t) {
this[j(431)].error(j(d)[j(f)](t));
}
return [ 2 ];
});
});
}, P[N(948)][N(751)] = function(t) {
var r = N;
this[r(z)][r(305)](r(M)[r(C)](t));
}, P[N(948)][N(959)] = function(t, r) {
var e = 473, n = 943, i = 1203, a = 449, s = 1193, o = 732, u = 473, v = 431, c = 305, f = 551, h = 1302;
return Sr(this, void 0, void 0, function() {
var L;
return qr(this, function(w) {
var y = x;
switch (w[y(e)]) {
case 0:
w[y(n)][y(i)]([ 0, 4, , 5 ]), this.logger[y(670)](y(a)[y(1302)](t));
return this[y(s)] ? [ 4, this.tracker.processEvent(t, r) ] : [ 3, 2 ];

case 1:
w[y(284)]();
return [ 3, 3 ];

case 2:
this[y(431)].warn(y(o)), w[y(u)] = 3;

case 3:
return [ 3, 5 ];

case 4:
L = w[y(284)](), this[y(v)][y(c)](y(f)[y(h)](L));
return [ 3, 5 ];

case 5:
return [ 2 ];
}
});
});
}, P[N(948)][N(o)] = function(t) {
return Sr(this, arguments, void 0, function(t, r) {
var e, n, i, a, s, o = 943, u = 1203, v = 646, c = 484, f = 822, h = 1302, L = 484, w = 484, y = 484, g = 784, l = 464, z = 1302, M = 1278, C = 852, b = 563, B = 431, H = 1057, d = 1193, D = 431, j = 670, A = 467, p = 284, N = 565, P = 1302, _ = 759, U = 431;
return void 0 === r && (r = {}), qr(this, function(G) {
var T = x;
switch (G[T(473)]) {
case 0:
G[T(o)][T(u)]([ 0, 6, , 7 ]);
if (t !== T(1165) || void 0 === r[T(v)] || void 0 === r.stage) return [ 3, 2 ];
if (!(e = this.userProfileManager.getCurrentProfile())) return [ 3, 2 ];
n = {};
r[T(646)] > e[T(484)] && (n[T(c)] = Number(r[T(646)]), mr.Logger[T(519)](T(f)[T(h)](e[T(L)], T(1278)).concat(r[T(v)])));
i = r.chapter > e[T(w)], a = r.chapter === e[T(y)] && r[T(464)] > e[T(g)];
(i || a) && (n.stageProgress = Number(r[T(l)]), mr.Logger[T(519)](T(388)[T(z)](e[T(784)], T(M)).concat(r.stage)));
return Object[T(833)](n)[T(957)] > 0 ? [ 4, this[T(C)][T(b)](n) ] : [ 3, 2 ];

case 1:
G[T(284)](), this[T(B)][T(670)](T(H)[T(1302)](r[T(646)], T(676))[T(1302)](r[T(l)])), 
G[T(473)] = 2;

case 2:
if (!this[T(d)]) return [ 3, 4 ];
this[T(D)][T(j)](T(A)[T(1302)](t));
return [ 4, this[T(d)][T(311)](t, r) ];

case 3:
G[T(p)]();
return [ 3, 5 ];

case 4:
this[T(431)][T(670)](T(N)[T(P)](t));
this.configManager && this[T(_)][T(358)](t, r);
G[T(473)] = 5;

case 5:
return [ 3, 7 ];

case 6:
s = G[T(284)](), this[T(U)][T(305)]("[HabbyTrackerSDK] Event processing failed: ".concat(s));
return [ 3, 7 ];

case 7:
return [ 2 ];
}
});
});
}, P[N(948)].onResume = function() {
return Sr(this, void 0, void 0, function() {
var t, r, e = 1259, n = 431, i = 1002, a = 1280, s = 1246, o = 653, u = 432, v = 431, c = 942, f = 759, h = 488, L = 284, w = 1260;
return qr(this, function(y) {
var g = x;
switch (y.label) {
case 0:
if (!this[g(e)]) return this[g(n)][g(374)](g(i)), [ 2 ];
if (this[g(a)]()) return t = Math.ceil((this[g(s)] - (Date.now() - this[g(781)])) / 1e3), 
this.logger[g(670)](g(o)[g(1302)](t, g(597))), [ 2 ];
if (this.isInResumeInterval()) return t = Math.ceil((this[g(u)] - (Date.now() - this[g(385)])) / 1e3), 
this[g(v)].log(g(923)[g(1302)](t, "s ago, skipping Resume operation")), [ 2 ];
this.logger[g(670)](g(c)), y.label = 1;

case 1:
y[g(943)][g(1203)]([ 1, 4, , 5 ]);
return this[g(f)] ? [ 4, this[g(f)][g(h)]() ] : [ 3, 3 ];

case 2:
y[g(L)](), y[g(473)] = 3;

case 3:
this[g(385)] = Date.now();
return [ 3, 5 ];

case 4:
r = y[g(284)](), this.logger.error(g(w)[g(1302)](r));
return [ 3, 5 ];

case 5:
return [ 2 ];
}
});
});
}, P[N(u)][N(1266)] = function(t) {
var r = 431, e = 1302, n = 670, i = 473, a = 943, s = 1126, o = 852, u = 284, v = 759, c = 670, f = 815, h = 1111, L = 695, w = 276;
return Sr(this, void 0, void 0, function() {
var y, g;
return qr(this, function(l) {
var z = x;
switch (l[z(473)]) {
case 0:
if (!t) return this[z(r)][z(374)]("[HabbyTrackerSDK] Account ID is empty, cannot switch account"), 
[ 2 ];
if (t === this[z(1126)]) return this[z(431)][z(670)]("[HabbyTrackerSDK] Already on current account "[z(e)](t, z(480))), 
[ 2 ];
this[z(431)][z(n)](z(845).concat(this.currentAccountId, z(373))[z(1302)](t)), l[z(i)] = 1;

case 1:
l[z(a)][z(1203)]([ 1, 3, , 4 ]), this[z(s)] = t;
return [ 4, this[z(o)][z(1266)](t) ];

case 2:
l[z(u)]();
this[z(1193)] && this[z(v)] && ((y = this[z(759)].getCurrentConfig()) && (this[z(r)][z(c)](z(f)), 
this.tracker = new (Jr[z(h)])(this.logger, this.userProfileManager, y, null !== this[z(L)] ? this.platformAdapter : void 0)));
this[z(431)][z(n)](z(746).concat(t));
return [ 3, 4 ];

case 3:
g = l.sent(), this[z(431)][z(305)](z(w)[z(e)](g));
throw g;

case 4:
return [ 2 ];
}
});
});
}, P[N(v)][N(c)] = function() {
var t = N;
try {
return this[t(w)] ? this[t(1193)][t(y)]() : null;
} catch (r) {
return this[t(g)][t(l)]("[HabbyTrackerSDK] Failed to get user profile: ".concat(r)), 
null;
}
}, P.prototype[N(f)] = function(t) {
var r = 473, e = 1054, n = 404, i = 896, a = 1311, s = 279, o = 843, u = 279, v = 921, c = 818, f = 563, h = 670, L = 1302, w = 1314;
return Sr(this, void 0, void 0, function() {
var y, g, l, z, M, C, b, B, H, d;
return qr(this, function(D) {
var j = x;
switch (D[j(r)]) {
case 0:
if (!(y = this.userProfileManager[j(e)]())) return this[j(431)][j(374)](j(255)), 
[ 2 ];
g = {};
t.userId && (g[j(333)] = t[j(n)]);
l = null !== (d = t[j(i)]) && void 0 !== d ? d : 0;
(z = l > 0 ? l : t[j(935)] || 0) > 0 && (g[j(786)] = z, g[j(935)] = t.userRegisterTimestamp || z);
M = t[j(1181)] || Date.now(), C = Math[j(1120)](M / 864e5), b = z > 0 ? z : y[j(786)], 
B = Math.floor(b / 864e5);
(H = C - B) >= 0 && (g[j(a)] = H);
0 === y[j(422)] && (g.localLastActiveDay = B, g[j(s)] = 1);
t[j(843)] && t[j(o)] > 0 ? g.activeDays = t[j(843)] : g[j(843)] = (null != g.localActiveDays ? g[j(u)] : y[j(u)]) || 1;
t.iapCount && t[j(921)] > 0 && (g.iapCount = t[j(v)]);
t.totalAmount && t[j(818)] > 0 && (g[j(c)] = t[j(818)]);
return [ 4, this.userProfileManager[j(f)](g) ];

case 1:
D[j(284)](), this.logger[j(h)](j(451)[j(L)](g[j(843)]) + " retentionDays="[j(1302)](g[j(a)], j(w))[j(1302)](null != g[j(921)] ? g[j(v)] : y.iapCount));
return [ 2 ];
}
});
});
}, P[N(948)][N(925)] = function(t) {
var r = 473, e = 1203, n = 937, i = 431, a = 305, s = 1092;
return Sr(this, void 0, void 0, function() {
var o;
return qr(this, function(u) {
var v = x;
switch (u[v(r)]) {
case 0:
u[v(943)][v(e)]([ 0, 2, , 3 ]);
return [ 4, this[v(852)][v(563)](t) ];

case 1:
u[v(284)](), this[v(431)].log(v(n), t);
return [ 3, 3 ];

case 2:
o = u[v(284)](), this[v(i)][v(a)](v(s)[v(1302)](o));
throw o;

case 3:
return [ 2 ];
}
});
});
}, P[N(948)].reloadUserProfile = function() {
var t = 943, r = 1126, e = 284, n = 670, i = 354, a = 1302, s = 1302;
return Sr(this, void 0, void 0, function() {
var o;
return qr(this, function(u) {
var v = x;
switch (u.label) {
case 0:
u[v(t)][v(1203)]([ 0, 2, , 3 ]);
return [ 4, this.userProfileManager.initializeProfile(this[v(r)]) ];

case 1:
u[v(e)](), this.logger[v(n)](v(i)[v(a)](this.currentAccountId));
return [ 3, 3 ];

case 2:
o = u[v(284)](), this[v(431)].error("[HabbyTrackerSDK] Failed to reload user profile: "[v(s)](o));
throw o;

case 3:
return [ 2 ];
}
});
});
}, P[N(948)][N(1269)] = function(t) {
return Sr(this, void 0, void 0, function() {
var r, e = 473, n = 1126, i = 972;
return qr(this, function(a) {
var s = x;
switch (a[s(e)]) {
case 0:
r = t || this[s(n)], Kr[s(262)].removeItem("habby_tracker_profile_"[s(1302)](r));
return [ 4, this[s(381)]() ];

case 1:
a.sent(), this[s(431)][s(670)](s(i)[s(1302)](r));
return [ 2 ];
}
});
});
}, P[N(h)].processIapPurchase = function(t) {
var r = 431, e = 305, n = 324, i = 1302, a = 1019, s = 646, o = 311;
return Sr(this, void 0, void 0, function() {
var u, v;
return qr(this, function(c) {
var f = x;
switch (c.label) {
case 0:
if (!(u = (0, Xr[f(980)])(t))[f(677)]) return this[f(r)][f(e)](f(n).concat(u[f(e)])), 
[ 2 ];
this[f(431)].log("[HabbyTrackerSDK] 处理IAP购买: "[f(i)](t[f(278)])), v = {
product_id: t.productId,
usd_amount: t[f(1044)],
local_amount: t[f(a)],
currency: t[f(922)],
product_type: t[f(836)]
};
void 0 !== t[f(646)] && (v[f(s)] = t.chapter);
return [ 4, this[f(o)]("iap_purchase", v) ];

case 1:
c[f(284)]();
return [ 2 ];
}
});
});
}, P[N(a)][N(1296)] = function() {
var t = 670, r = 759, e = 759, n = 1126, i = 781, a = 385, s = 1222, o = 1273, u = 322, v = 1301;
return Sr(this, void 0, void 0, function() {
return qr(this, function(c) {
var f = x;
this.logger[f(t)](f(1133));
try {
this[f(r)] && (this.configManager.onConfigReady = void 0, this[f(r)][f(668)] = void 0, 
this[f(e)].onQueuedEventProcess = void 0, this[f(759)] = null), this[f(1193)] = null, 
this[f(695)] = null, this[f(n)] = this.DEFAULT_ACCOUNT_ID, this[f(1259)] = !1, this[f(i)] = 0, 
this[f(a)] = 0, this[f(581)] = !1, this[f(s)] = null, (0, kr[f(o)])(null), this.logger[f(670)](f(u));
} catch (t) {
this.logger.error(f(v).concat(t));
}
return [ 2 ];
});
});
}, P[N(948)].destroy = function() {
this.shutdown();
}, P[N(L)] = null, P;
}();
t[r(560)] = i.HabbyTrackerCore = Fr;
globalThis.HabbyTrackerCore = t.HabbyTrackerCore;
})();