(function(r) {
"use strict";
var e, t = 20, n = 1, i = -7, o = 21, s = !1, c = "[big.js] ", f = c + "Invalid ", u = f + "decimal places", h = f + "rounding mode", l = {}, a = void 0, g = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function p(r, e) {
var t, n, i;
if (!g.test(e)) throw Error(f + "number");
r.s = "-" == e.charAt(0) ? (e = e.slice(1), -1) : 1;
(t = e.indexOf(".")) > -1 && (e = e.replace(".", ""));
if ((n = e.search(/e/i)) > 0) {
t < 0 && (t = n);
t += +e.slice(n + 1);
e = e.substring(0, n);
} else t < 0 && (t = e.length);
i = e.length;
for (n = 0; n < i && "0" == e.charAt(n); ) ++n;
if (n == i) r.c = [ r.e = 0 ]; else {
for (;i > 0 && "0" == e.charAt(--i); ) ;
r.e = t - n - 1;
r.c = [];
for (t = 0; n <= i; ) r.c[t++] = +e.charAt(n++);
}
return r;
}
function w(r, e, t, n) {
var i = r.c;
t === a && (t = r.constructor.RM);
if (0 !== t && 1 !== t && 2 !== t && 3 !== t) throw Error(h);
if (e < 1) {
n = 3 === t && (n || !!i[0]) || 0 === e && (1 === t && i[0] >= 5 || 2 === t && (i[0] > 5 || 5 === i[0] && (n || i[1] !== a)));
i.length = 1;
if (n) {
r.e = r.e - e + 1;
i[0] = 1;
} else i[0] = r.e = 0;
} else if (e < i.length) {
n = 1 === t && i[e] >= 5 || 2 === t && (i[e] > 5 || 5 === i[e] && (n || i[e + 1] !== a || 1 & i[e - 1])) || 3 === t && (n || !!i[0]);
i.length = e;
if (n) for (;++i[--e] > 9; ) {
i[e] = 0;
if (0 === e) {
++r.e;
i.unshift(1);
break;
}
}
for (e = i.length; !i[--e]; ) i.pop();
}
return r;
}
function v(r, e, t) {
var n = r.e, i = r.c.join(""), o = i.length;
if (e) i = i.charAt(0) + (o > 1 ? "." + i.slice(1) : "") + (n < 0 ? "e" : "e+") + n; else if (n < 0) {
for (;++n; ) i = "0" + i;
i = "0." + i;
} else if (n > 0) if (++n > o) for (n -= o; n--; ) i += "0"; else n < o && (i = i.slice(0, n) + "." + i.slice(n)); else o > 1 && (i = i.charAt(0) + "." + i.slice(1));
return r.s < 0 && t ? "-" + i : i;
}
l.abs = function() {
var r = new this.constructor(this);
r.s = 1;
return r;
};
l.cmp = function(r) {
var e, t = this, n = t.c, i = (r = new t.constructor(r)).c, o = t.s, s = r.s, c = t.e, f = r.e;
if (!n[0] || !i[0]) return n[0] ? o : i[0] ? -s : 0;
if (o != s) return o;
e = o < 0;
if (c != f) return c > f ^ e ? 1 : -1;
s = (c = n.length) < (f = i.length) ? c : f;
for (o = -1; ++o < s; ) if (n[o] != i[o]) return n[o] > i[o] ^ e ? 1 : -1;
return c == f ? 0 : c > f ^ e ? 1 : -1;
};
l.div = function(r) {
var e = this, t = e.constructor, n = e.c, i = (r = new t(r)).c, o = e.s == r.s ? 1 : -1, s = t.DP;
if (s !== ~~s || s < 0 || s > 1e6) throw Error(u);
if (!i[0]) throw Error("[big.js] Division by zero");
if (!n[0]) {
r.s = o;
r.c = [ r.e = 0 ];
return r;
}
var c, f, h, l, g, p = i.slice(), v = c = i.length, d = n.length, m = n.slice(0, c), E = m.length, b = r, P = b.c = [], D = 0, y = s + (b.e = e.e - r.e) + 1;
b.s = o;
o = y < 0 ? 0 : y;
p.unshift(0);
for (;E++ < c; ) m.push(0);
do {
for (h = 0; h < 10; h++) {
if (c != (E = m.length)) l = c > E ? 1 : -1; else for (g = -1, l = 0; ++g < c; ) if (i[g] != m[g]) {
l = i[g] > m[g] ? 1 : -1;
break;
}
if (!(l < 0)) break;
for (f = E == c ? i : p; E; ) {
if (m[--E] < f[E]) {
g = E;
for (;g && !m[--g]; ) m[g] = 9;
--m[g];
m[E] += 10;
}
m[E] -= f[E];
}
for (;!m[0]; ) m.shift();
}
P[D++] = l ? h : ++h;
m[0] && l ? m[E] = n[v] || 0 : m = [ n[v] ];
} while ((v++ < d || m[0] !== a) && o--);
if (!P[0] && 1 != D) {
P.shift();
b.e--;
y--;
}
D > y && w(b, y, t.RM, m[0] !== a);
return b;
};
l.eq = function(r) {
return 0 === this.cmp(r);
};
l.gt = function(r) {
return this.cmp(r) > 0;
};
l.gte = function(r) {
return this.cmp(r) > -1;
};
l.lt = function(r) {
return this.cmp(r) < 0;
};
l.lte = function(r) {
return this.cmp(r) < 1;
};
l.minus = l.sub = function(r) {
var e, t, n, i, o = this, s = o.constructor, c = o.s, f = (r = new s(r)).s;
if (c != f) {
r.s = -f;
return o.plus(r);
}
var u = o.c.slice(), h = o.e, l = r.c, a = r.e;
if (!u[0] || !l[0]) {
l[0] ? r.s = -f : u[0] ? r = new s(o) : r.s = 1;
return r;
}
if (c = h - a) {
if (i = c < 0) {
c = -c;
n = u;
} else {
a = h;
n = l;
}
n.reverse();
for (f = c; f--; ) n.push(0);
n.reverse();
} else {
t = ((i = u.length < l.length) ? u : l).length;
for (c = f = 0; f < t; f++) if (u[f] != l[f]) {
i = u[f] < l[f];
break;
}
}
if (i) {
n = u;
u = l;
l = n;
r.s = -r.s;
}
if ((f = (t = l.length) - (e = u.length)) > 0) for (;f--; ) u[e++] = 0;
for (f = e; t > c; ) {
if (u[--t] < l[t]) {
for (e = t; e && !u[--e]; ) u[e] = 9;
--u[e];
u[t] += 10;
}
u[t] -= l[t];
}
for (;0 === u[--f]; ) u.pop();
for (;0 === u[0]; ) {
u.shift();
--a;
}
if (!u[0]) {
r.s = 1;
u = [ a = 0 ];
}
r.c = u;
r.e = a;
return r;
};
l.mod = function(r) {
var e, t = this, n = t.constructor, i = t.s, o = (r = new n(r)).s;
if (!r.c[0]) throw Error("[big.js] Division by zero");
t.s = r.s = 1;
e = 1 == r.cmp(t);
t.s = i;
r.s = o;
if (e) return new n(t);
i = n.DP;
o = n.RM;
n.DP = n.RM = 0;
t = t.div(r);
n.DP = i;
n.RM = o;
return this.minus(t.times(r));
};
l.neg = function() {
var r = new this.constructor(this);
r.s = -r.s;
return r;
};
l.plus = l.add = function(r) {
var e, t, n, i = this, o = i.constructor;
r = new o(r);
if (i.s != r.s) {
r.s = -r.s;
return i.minus(r);
}
var s = i.e, c = i.c, f = r.e, u = r.c;
if (!c[0] || !u[0]) {
u[0] || (c[0] ? r = new o(i) : r.s = i.s);
return r;
}
c = c.slice();
if (e = s - f) {
if (e > 0) {
f = s;
n = u;
} else {
e = -e;
n = c;
}
n.reverse();
for (;e--; ) n.push(0);
n.reverse();
}
if (c.length - u.length < 0) {
n = u;
u = c;
c = n;
}
e = u.length;
for (t = 0; e; c[e] %= 10) t = (c[--e] = c[e] + u[e] + t) / 10 | 0;
if (t) {
c.unshift(t);
++f;
}
for (e = c.length; 0 === c[--e]; ) c.pop();
r.c = c;
r.e = f;
return r;
};
l.pow = function(r) {
var e = this, t = new e.constructor("1"), n = t, i = r < 0;
if (r !== ~~r || r < -1e6 || r > 1e6) throw Error(f + "exponent");
i && (r = -r);
for (;;) {
1 & r && (n = n.times(e));
if (!(r >>= 1)) break;
e = e.times(e);
}
return i ? t.div(n) : n;
};
l.prec = function(r, e) {
if (r !== ~~r || r < 1 || r > 1e6) throw Error(f + "precision");
return w(new this.constructor(this), r, e);
};
l.round = function(r, e) {
if (r === a) r = 0; else if (r !== ~~r || r < -1e6 || r > 1e6) throw Error(u);
return w(new this.constructor(this), r + this.e + 1, e);
};
l.sqrt = function() {
var r, e, t, n = this, i = n.constructor, o = n.s, s = n.e, f = new i("0.5");
if (!n.c[0]) return new i(n);
if (o < 0) throw Error(c + "No square root");
if (0 === (o = Math.sqrt(n + "")) || o === 1 / 0) {
(e = n.c.join("")).length + s & 1 || (e += "0");
o = Math.sqrt(e);
s = ((s + 1) / 2 | 0) - (s < 0 || 1 & s);
r = new i((o == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + s);
} else r = new i(o + "");
s = r.e + (i.DP += 4);
do {
t = r;
r = f.times(t.plus(n.div(t)));
} while (t.c.slice(0, s).join("") !== r.c.slice(0, s).join(""));
return w(r, (i.DP -= 4) + r.e + 1, i.RM);
};
l.times = l.mul = function(r) {
var e, t = this, n = t.constructor, i = t.c, o = (r = new n(r)).c, s = i.length, c = o.length, f = t.e, u = r.e;
r.s = t.s == r.s ? 1 : -1;
if (!i[0] || !o[0]) {
r.c = [ r.e = 0 ];
return r;
}
r.e = f + u;
if (s < c) {
e = i;
i = o;
o = e;
u = s;
s = c;
c = u;
}
for (e = new Array(u = s + c); u--; ) e[u] = 0;
for (f = c; f--; ) {
c = 0;
for (u = s + f; u > f; ) {
c = e[u] + o[f] * i[u - f - 1] + c;
e[u--] = c % 10;
c = c / 10 | 0;
}
e[u] = c;
}
c ? ++r.e : e.shift();
for (f = e.length; !e[--f]; ) e.pop();
r.c = e;
return r;
};
l.toExponential = function(r, e) {
var t = this, n = t.c[0];
if (r !== a) {
if (r !== ~~r || r < 0 || r > 1e6) throw Error(u);
t = w(new t.constructor(t), ++r, e);
for (;t.c.length < r; ) t.c.push(0);
}
return v(t, !0, !!n);
};
l.toFixed = function(r, e) {
var t = this, n = t.c[0];
if (r !== a) {
if (r !== ~~r || r < 0 || r > 1e6) throw Error(u);
for (r = r + (t = w(new t.constructor(t), r + t.e + 1, e)).e + 1; t.c.length < r; ) t.c.push(0);
}
return v(t, !1, !!n);
};
l.toJSON = l.toString = function() {
var r = this, e = r.constructor;
return v(r, r.e <= e.NE || r.e >= e.PE, !!r.c[0]);
};
l.toNumber = function() {
var r = Number(v(this, !0, !0));
if (!0 === this.constructor.strict && !this.eq(r.toString())) throw Error(c + "Imprecise conversion");
return r;
};
l.toPrecision = function(r, e) {
var t = this, n = t.constructor, i = t.c[0];
if (r !== a) {
if (r !== ~~r || r < 1 || r > 1e6) throw Error(f + "precision");
t = w(new n(t), r, e);
for (;t.c.length < r; ) t.c.push(0);
}
return v(t, r <= t.e || t.e <= n.NE || t.e >= n.PE, !!i);
};
l.valueOf = function() {
var r = this, e = r.constructor;
if (!0 === e.strict) throw Error(c + "valueOf disallowed");
return v(r, r.e <= e.NE || r.e >= e.PE, !0);
};
(e = function r() {
function e(t) {
var n = this;
if (!(n instanceof e)) return t === a ? r() : new e(t);
if (t instanceof e) {
n.s = t.s;
n.e = t.e;
n.c = t.c.slice();
} else {
if ("string" != typeof t) {
if (!0 === e.strict && "bigint" != typeof t) throw TypeError(f + "value");
t = 0 === t && 1 / t < 0 ? "-0" : String(t);
}
p(n, t);
}
n.constructor = e;
}
e.prototype = l;
e.DP = t;
e.RM = n;
e.NE = i;
e.PE = o;
e.strict = s;
e.roundDown = 0;
e.roundHalfUp = 1;
e.roundHalfEven = 2;
e.roundUp = 3;
return e;
}()).default = e.Big = e;
"function" == typeof define && define.amd ? define(function() {
return e;
}) : "undefined" != typeof module && module.exports ? module.exports = e : r.Big = e;
window.Big = e;
})(this);