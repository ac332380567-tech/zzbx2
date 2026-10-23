(function(n, r, t) {
var e, o = 256, i = 6, u = "random", f = t.pow(o, i), a = t.pow(2, 52), c = 2 * a, s = o - 1;
function l(n, e, s) {
var l = [], v = y(g((e = 1 == e ? {
entropy: !0
} : e || {}).entropy ? [ n, m(r) ] : null == n ? h() : n, 3), l), j = new d(l), w = function() {
for (var n = j.g(i), r = f, t = 0; n < a; ) {
n = (n + t) * o;
r *= o;
t = j.g(1);
}
for (;n >= c; ) {
n /= 2;
r /= 2;
t >>>= 1;
}
return (n + t) / r;
};
w.int32 = function() {
return 0 | j.g(4);
};
w.quick = function() {
return j.g(4) / 4294967296;
};
w.double = w;
y(m(j.S), r);
return (e.pass || s || function(n, r, e, o) {
if (o) {
o.S && p(o, j);
n.state = function() {
return p(j, {});
};
}
if (e) {
t[u] = n;
return r;
}
return n;
})(w, v, "global" in e ? e.global : this == t, e.state);
}
window.seedrandom = l;
function d(n) {
var r, t = n.length, e = this, i = 0, u = e.i = e.j = 0, f = e.S = [];
t || (n = [ t++ ]);
for (;i < o; ) f[i] = i++;
for (i = 0; i < o; i++) {
f[i] = f[u = s & u + n[i % t] + (r = f[i])];
f[u] = r;
}
(e.g = function(n) {
for (var r, t = 0, i = e.i, u = e.j, f = e.S; n--; ) {
r = f[i = s & i + 1];
t = t * o + f[s & (f[i] = f[u = s & u + r]) + (f[u] = r)];
}
e.i = i;
e.j = u;
return t;
})(o);
}
function p(n, r) {
r.i = n.i;
r.j = n.j;
r.S = n.S.slice();
return r;
}
function g(n, r) {
var t, e = [], o = typeof n;
if (r && "object" == o) for (t in n) try {
e.push(g(n[t], r - 1));
} catch (n) {}
return e.length ? e : "string" == o ? n : n + "\0";
}
function y(n, r) {
for (var t, e = n + "", o = 0; o < e.length; ) r[s & o] = s & (t ^= 19 * r[s & o]) + e.charCodeAt(o++);
return m(r);
}
function h() {
try {
var t;
if (e && (t = e.randomBytes)) t = t(o); else {
t = new Uint8Array(o);
(n.crypto || n.msCrypto).getRandomValues(t);
}
return m(t);
} catch (t) {
var i = n.navigator, u = i && i.plugins;
return [ +new Date(), n, u, n.screen, m(r) ];
}
}
function m(n) {
return String.fromCharCode.apply(0, n);
}
y(t.random(), r);
if ("object" == typeof module && module.exports) {
module.exports = l;
try {
e = require("crypto");
} catch (n) {}
} else "function" == typeof define && define.amd ? define(function() {
return l;
}) : t["seed" + u] = l;
})("undefined" != typeof self ? self : this, [], Math);