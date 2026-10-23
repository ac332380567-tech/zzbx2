(function(e) {
"use strict";
var n, i, r, t, s = 9e15, o = 1e9, u = "0123456789abcdef", f = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", c = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", l = {
precision: 20,
rounding: 4,
modulo: 1,
toExpNeg: -7,
toExpPos: 21,
minE: -s,
maxE: s,
crypto: !1
}, a = !0, h = "[DecimalError] ", d = h + "Invalid argument: ", p = h + "Precision limit exceeded", g = h + "crypto unavailable", m = "[object Decimal]", w = Math.floor, v = Math.pow, N = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, b = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, E = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, x = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, y = 1e7, M = 7, q = f.length - 1, O = c.length - 1, D = {
toStringTag: m
};
D.absoluteValue = D.abs = function() {
var e = new this.constructor(this);
e.s < 0 && (e.s = 1);
return T(e);
};
D.ceil = function() {
return T(new this.constructor(this), this.e + 1, 2);
};
D.clampedTo = D.clamp = function(e, n) {
var i = this, r = i.constructor;
e = new r(e);
n = new r(n);
if (!e.s || !n.s) return new r(NaN);
if (e.gt(n)) throw Error(d + n);
return i.cmp(e) < 0 ? e : i.cmp(n) > 0 ? n : new r(i);
};
D.comparedTo = D.cmp = function(e) {
var n, i, r, t, s = this, o = s.d, u = (e = new s.constructor(e)).d, f = s.s, c = e.s;
if (!o || !u) return f && c ? f !== c ? f : o === u ? 0 : !o ^ f < 0 ? 1 : -1 : NaN;
if (!o[0] || !u[0]) return o[0] ? f : u[0] ? -c : 0;
if (f !== c) return f;
if (s.e !== e.e) return s.e > e.e ^ f < 0 ? 1 : -1;
for (n = 0, i = (r = o.length) < (t = u.length) ? r : t; n < i; ++n) if (o[n] !== u[n]) return o[n] > u[n] ^ f < 0 ? 1 : -1;
return r === t ? 0 : r > t ^ f < 0 ? 1 : -1;
};
D.cosine = D.cos = function() {
var e, n, i = this, r = i.constructor;
if (!i.d) return new r(NaN);
if (!i.d[0]) return new r(1);
e = r.precision;
n = r.rounding;
r.precision = e + Math.max(i.e, i.sd()) + M;
r.rounding = 1;
i = P(r, X(r, i));
r.precision = e;
r.rounding = n;
return T(2 == t || 3 == t ? i.neg() : i, e, n, !0);
};
D.cubeRoot = D.cbrt = function() {
var e, n, i, r, t, s, o, u, f, c, l = this, h = l.constructor;
if (!l.isFinite() || l.isZero()) return new h(l);
a = !1;
if ((s = l.s * v(l.s * l, 1 / 3)) && Math.abs(s) != 1 / 0) r = new h(s.toString()); else {
i = F(l.d);
(s = ((e = l.e) - i.length + 1) % 3) && (i += 1 == s || -2 == s ? "0" : "00");
s = v(i, 1 / 3);
e = w((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
(r = new h(i = s == 1 / 0 ? "5e" + e : (i = s.toExponential()).slice(0, i.indexOf("e") + 1) + e)).s = l.s;
}
o = (e = h.precision) + 3;
for (;;) {
c = (f = (u = r).times(u).times(u)).plus(l);
r = R(c.plus(l).times(u), c.plus(f), o + 2, 1);
if (F(u.d).slice(0, o) === (i = F(r.d)).slice(0, o)) {
if ("9999" != (i = i.slice(o - 3, o + 1)) && (t || "4999" != i)) {
if (!+i || !+i.slice(1) && "5" == i.charAt(0)) {
T(r, e + 1, 1);
n = !r.times(r).times(r).eq(l);
}
break;
}
if (!t) {
T(u, e + 1, 0);
if (u.times(u).times(u).eq(l)) {
r = u;
break;
}
}
o += 4;
t = 1;
}
}
a = !0;
return T(r, e, h.rounding, n);
};
D.decimalPlaces = D.dp = function() {
var e, n = this.d, i = NaN;
if (n) {
i = ((e = n.length - 1) - w(this.e / M)) * M;
if (e = n[e]) for (;e % 10 == 0; e /= 10) i--;
i < 0 && (i = 0);
}
return i;
};
D.dividedBy = D.div = function(e) {
return R(this, new this.constructor(e));
};
D.dividedToIntegerBy = D.divToInt = function(e) {
var n = this.constructor;
return T(R(this, new n(e), 0, 1, 1), n.precision, n.rounding);
};
D.equals = D.eq = function(e) {
return 0 === this.cmp(e);
};
D.floor = function() {
return T(new this.constructor(this), this.e + 1, 3);
};
D.greaterThan = D.gt = function(e) {
return this.cmp(e) > 0;
};
D.greaterThanOrEqualTo = D.gte = function(e) {
var n = this.cmp(e);
return 1 == n || 0 === n;
};
D.hyperbolicCosine = D.cosh = function() {
var e, n, i, r, t, s = this, o = s.constructor, u = new o(1);
if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
if (s.isZero()) return u;
i = o.precision;
r = o.rounding;
o.precision = i + Math.max(s.e, s.sd()) + 4;
o.rounding = 1;
if ((t = s.d.length) < 32) n = (1 / Q(4, e = Math.ceil(t / 3))).toString(); else {
e = 16;
n = "2.3283064365386962890625e-10";
}
s = K(o, 1, s.times(n), new o(1), !0);
for (var f, c = e, l = new o(8); c--; ) {
f = s.times(s);
s = u.minus(f.times(l.minus(f.times(l))));
}
return T(s, o.precision = i, o.rounding = r, !0);
};
D.hyperbolicSine = D.sinh = function() {
var e, n, i, r, t = this, s = t.constructor;
if (!t.isFinite() || t.isZero()) return new s(t);
n = s.precision;
i = s.rounding;
s.precision = n + Math.max(t.e, t.sd()) + 4;
s.rounding = 1;
if ((r = t.d.length) < 3) t = K(s, 2, t, t, !0); else {
e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e;
t = K(s, 2, t = t.times(1 / Q(5, e)), t, !0);
for (var o, u = new s(5), f = new s(16), c = new s(20); e--; ) {
o = t.times(t);
t = t.times(u.plus(o.times(f.times(o).plus(c))));
}
}
s.precision = n;
s.rounding = i;
return T(t, n, i, !0);
};
D.hyperbolicTangent = D.tanh = function() {
var e, n, i = this, r = i.constructor;
if (!i.isFinite()) return new r(i.s);
if (i.isZero()) return new r(i);
e = r.precision;
n = r.rounding;
r.precision = e + 7;
r.rounding = 1;
return R(i.sinh(), i.cosh(), r.precision = e, r.rounding = n);
};
D.inverseCosine = D.acos = function() {
var e, n = this, i = n.constructor, r = n.abs().cmp(1), t = i.precision, s = i.rounding;
if (-1 !== r) return 0 === r ? n.isNeg() ? U(i, t, s) : new i(0) : new i(NaN);
if (n.isZero()) return U(i, t + 4, s).times(.5);
i.precision = t + 6;
i.rounding = 1;
n = n.asin();
e = U(i, t + 4, s).times(.5);
i.precision = t;
i.rounding = s;
return e.minus(n);
};
D.inverseHyperbolicCosine = D.acosh = function() {
var e, n, i = this, r = i.constructor;
if (i.lte(1)) return new r(i.eq(1) ? 0 : NaN);
if (!i.isFinite()) return new r(i);
e = r.precision;
n = r.rounding;
r.precision = e + Math.max(Math.abs(i.e), i.sd()) + 4;
r.rounding = 1;
a = !1;
i = i.times(i).minus(1).sqrt().plus(i);
a = !0;
r.precision = e;
r.rounding = n;
return i.ln();
};
D.inverseHyperbolicSine = D.asinh = function() {
var e, n, i = this, r = i.constructor;
if (!i.isFinite() || i.isZero()) return new r(i);
e = r.precision;
n = r.rounding;
r.precision = e + 2 * Math.max(Math.abs(i.e), i.sd()) + 6;
r.rounding = 1;
a = !1;
i = i.times(i).plus(1).sqrt().plus(i);
a = !0;
r.precision = e;
r.rounding = n;
return i.ln();
};
D.inverseHyperbolicTangent = D.atanh = function() {
var e, n, i, r, t = this, s = t.constructor;
if (!t.isFinite()) return new s(NaN);
if (t.e >= 0) return new s(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN);
e = s.precision;
n = s.rounding;
r = t.sd();
if (Math.max(r, e) < 2 * -t.e - 1) return T(new s(t), e, n, !0);
s.precision = i = r - t.e;
t = R(t.plus(1), new s(1).minus(t), i + e, 1);
s.precision = e + 4;
s.rounding = 1;
t = t.ln();
s.precision = e;
s.rounding = n;
return t.times(.5);
};
D.inverseSine = D.asin = function() {
var e, n, i, r, t = this, s = t.constructor;
if (t.isZero()) return new s(t);
n = t.abs().cmp(1);
i = s.precision;
r = s.rounding;
if (-1 !== n) {
if (0 === n) {
(e = U(s, i + 4, r).times(.5)).s = t.s;
return e;
}
return new s(NaN);
}
s.precision = i + 6;
s.rounding = 1;
t = t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan();
s.precision = i;
s.rounding = r;
return t.times(2);
};
D.inverseTangent = D.atan = function() {
var e, n, i, r, t, s, o, u, f, c = this, l = c.constructor, h = l.precision, d = l.rounding;
if (c.isFinite()) {
if (c.isZero()) return new l(c);
if (c.abs().eq(1) && h + 4 <= O) {
(o = U(l, h + 4, d).times(.25)).s = c.s;
return o;
}
} else {
if (!c.s) return new l(NaN);
if (h + 4 <= O) {
(o = U(l, h + 4, d).times(.5)).s = c.s;
return o;
}
}
l.precision = u = h + 10;
l.rounding = 1;
for (e = i = Math.min(28, u / M + 2 | 0); e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1));
a = !1;
n = Math.ceil(u / M);
r = 1;
f = c.times(c);
o = new l(c);
t = c;
for (;-1 !== e; ) {
t = t.times(f);
s = o.minus(t.div(r += 2));
t = t.times(f);
if (void 0 !== (o = s.plus(t.div(r += 2))).d[n]) for (e = n; o.d[e] === s.d[e] && e--; ) ;
}
i && (o = o.times(2 << i - 1));
a = !0;
return T(o, l.precision = h, l.rounding = d, !0);
};
D.isFinite = function() {
return !!this.d;
};
D.isInteger = D.isInt = function() {
return !!this.d && w(this.e / M) > this.d.length - 2;
};
D.isNaN = function() {
return !this.s;
};
D.isNegative = D.isNeg = function() {
return this.s < 0;
};
D.isPositive = D.isPos = function() {
return this.s > 0;
};
D.isZero = function() {
return !!this.d && 0 === this.d[0];
};
D.lessThan = D.lt = function(e) {
return this.cmp(e) < 0;
};
D.lessThanOrEqualTo = D.lte = function(e) {
return this.cmp(e) < 1;
};
D.logarithm = D.log = function(e) {
var n, i, r, t, s, o, u, f, c = this.constructor, l = c.precision, h = c.rounding;
if (null == e) {
e = new c(10);
n = !0;
} else {
i = (e = new c(e)).d;
if (e.s < 0 || !i || !i[0] || e.eq(1)) return new c(NaN);
n = e.eq(10);
}
i = this.d;
if (this.s < 0 || !i || !i[0] || this.eq(1)) return new c(i && !i[0] ? -1 / 0 : 1 != this.s ? NaN : i ? 0 : 1 / 0);
if (n) if (i.length > 1) s = !0; else {
for (t = i[0]; t % 10 == 0; ) t /= 10;
s = 1 !== t;
}
a = !1;
o = j(this, u = l + 5);
r = n ? L(c, u + 10) : j(e, u);
if (S((f = R(o, r, u, 1)).d, t = l, h)) do {
o = j(this, u += 10);
r = n ? L(c, u + 10) : j(e, u);
f = R(o, r, u, 1);
if (!s) {
+F(f.d).slice(t + 1, t + 15) + 1 == 1e14 && (f = T(f, l + 1, 0));
break;
}
} while (S(f.d, t += 10, h));
a = !0;
return T(f, l, h);
};
D.minus = D.sub = function(e) {
var n, i, r, t, s, o, u, f, c, l, h, d, p = this, g = p.constructor;
e = new g(e);
if (!p.d || !e.d) {
p.s && e.s ? p.d ? e.s = -e.s : e = new g(e.d || p.s !== e.s ? p : NaN) : e = new g(NaN);
return e;
}
if (p.s != e.s) {
e.s = -e.s;
return p.plus(e);
}
c = p.d;
d = e.d;
u = g.precision;
f = g.rounding;
if (!c[0] || !d[0]) {
if (d[0]) e.s = -e.s; else {
if (!c[0]) return new g(3 === f ? -0 : 0);
e = new g(p);
}
return a ? T(e, u, f) : e;
}
i = w(e.e / M);
l = w(p.e / M);
c = c.slice();
if (s = l - i) {
if (h = s < 0) {
n = c;
s = -s;
o = d.length;
} else {
n = d;
i = l;
o = c.length;
}
if (s > (r = Math.max(Math.ceil(u / M), o) + 2)) {
s = r;
n.length = 1;
}
n.reverse();
for (r = s; r--; ) n.push(0);
n.reverse();
} else {
(h = (r = c.length) < (o = d.length)) && (o = r);
for (r = 0; r < o; r++) if (c[r] != d[r]) {
h = c[r] < d[r];
break;
}
s = 0;
}
if (h) {
n = c;
c = d;
d = n;
e.s = -e.s;
}
o = c.length;
for (r = d.length - o; r > 0; --r) c[o++] = 0;
for (r = d.length; r > s; ) {
if (c[--r] < d[r]) {
for (t = r; t && 0 === c[--t]; ) c[t] = y - 1;
--c[t];
c[r] += y;
}
c[r] -= d[r];
}
for (;0 === c[--o]; ) c.pop();
for (;0 === c[0]; c.shift()) --i;
if (!c[0]) return new g(3 === f ? -0 : 0);
e.d = c;
e.e = k(c, i);
return a ? T(e, u, f) : e;
};
D.modulo = D.mod = function(e) {
var n, i = this, r = i.constructor;
e = new r(e);
if (!i.d || !e.s || e.d && !e.d[0]) return new r(NaN);
if (!e.d || i.d && !i.d[0]) return T(new r(i), r.precision, r.rounding);
a = !1;
9 == r.modulo ? (n = R(i, e.abs(), 0, 3, 1)).s *= e.s : n = R(i, e, 0, r.modulo, 1);
n = n.times(e);
a = !0;
return i.minus(n);
};
D.naturalExponential = D.exp = function() {
return $(this);
};
D.naturalLogarithm = D.ln = function() {
return j(this);
};
D.negated = D.neg = function() {
var e = new this.constructor(this);
e.s = -e.s;
return T(e);
};
D.plus = D.add = function(e) {
var n, i, r, t, s, o, u, f, c, l, h = this, d = h.constructor;
e = new d(e);
if (!h.d || !e.d) {
h.s && e.s ? h.d || (e = new d(e.d || h.s === e.s ? h : NaN)) : e = new d(NaN);
return e;
}
if (h.s != e.s) {
e.s = -e.s;
return h.minus(e);
}
c = h.d;
l = e.d;
u = d.precision;
f = d.rounding;
if (!c[0] || !l[0]) {
l[0] || (e = new d(h));
return a ? T(e, u, f) : e;
}
s = w(h.e / M);
r = w(e.e / M);
c = c.slice();
if (t = s - r) {
if (t < 0) {
i = c;
t = -t;
o = l.length;
} else {
i = l;
r = s;
o = c.length;
}
if (t > (o = (s = Math.ceil(u / M)) > o ? s + 1 : o + 1)) {
t = o;
i.length = 1;
}
i.reverse();
for (;t--; ) i.push(0);
i.reverse();
}
if ((o = c.length) - (t = l.length) < 0) {
t = o;
i = l;
l = c;
c = i;
}
for (n = 0; t; ) {
n = (c[--t] = c[t] + l[t] + n) / y | 0;
c[t] %= y;
}
if (n) {
c.unshift(n);
++r;
}
for (o = c.length; 0 == c[--o]; ) c.pop();
e.d = c;
e.e = k(c, r);
return a ? T(e, u, f) : e;
};
D.precision = D.sd = function(e) {
var n, i = this;
if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(d + e);
if (i.d) {
n = C(i.d);
e && i.e + 1 > n && (n = i.e + 1);
} else n = NaN;
return n;
};
D.round = function() {
var e = this, n = e.constructor;
return T(new n(e), e.e + 1, n.rounding);
};
D.sine = D.sin = function() {
var e, n, i = this, r = i.constructor;
if (!i.isFinite()) return new r(NaN);
if (i.isZero()) return new r(i);
e = r.precision;
n = r.rounding;
r.precision = e + Math.max(i.e, i.sd()) + M;
r.rounding = 1;
i = G(r, X(r, i));
r.precision = e;
r.rounding = n;
return T(t > 2 ? i.neg() : i, e, n, !0);
};
D.squareRoot = D.sqrt = function() {
var e, n, i, r, t, s, o = this, u = o.d, f = o.e, c = o.s, l = o.constructor;
if (1 !== c || !u || !u[0]) return new l(!c || c < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0);
a = !1;
if (0 == (c = Math.sqrt(+o)) || c == 1 / 0) {
((n = F(u)).length + f) % 2 == 0 && (n += "0");
c = Math.sqrt(n);
f = w((f + 1) / 2) - (f < 0 || f % 2);
r = new l(n = c == 1 / 0 ? "5e" + f : (n = c.toExponential()).slice(0, n.indexOf("e") + 1) + f);
} else r = new l(c.toString());
i = (f = l.precision) + 3;
for (;;) {
r = (s = r).plus(R(o, s, i + 2, 1)).times(.5);
if (F(s.d).slice(0, i) === (n = F(r.d)).slice(0, i)) {
if ("9999" != (n = n.slice(i - 3, i + 1)) && (t || "4999" != n)) {
if (!+n || !+n.slice(1) && "5" == n.charAt(0)) {
T(r, f + 1, 1);
e = !r.times(r).eq(o);
}
break;
}
if (!t) {
T(s, f + 1, 0);
if (s.times(s).eq(o)) {
r = s;
break;
}
}
i += 4;
t = 1;
}
}
a = !0;
return T(r, f, l.rounding, e);
};
D.tangent = D.tan = function() {
var e, n, i = this, r = i.constructor;
if (!i.isFinite()) return new r(NaN);
if (i.isZero()) return new r(i);
e = r.precision;
n = r.rounding;
r.precision = e + 10;
r.rounding = 1;
(i = i.sin()).s = 1;
i = R(i, new r(1).minus(i.times(i)).sqrt(), e + 10, 0);
r.precision = e;
r.rounding = n;
return T(2 == t || 4 == t ? i.neg() : i, e, n, !0);
};
D.times = D.mul = function(e) {
var n, i, r, t, s, o, u, f, c, l = this, h = l.constructor, d = l.d, p = (e = new h(e)).d;
e.s *= l.s;
if (!(d && d[0] && p && p[0])) return new h(!e.s || d && !d[0] && !p || p && !p[0] && !d ? NaN : d && p ? 0 * e.s : e.s / 0);
i = w(l.e / M) + w(e.e / M);
if ((f = d.length) < (c = p.length)) {
s = d;
d = p;
p = s;
o = f;
f = c;
c = o;
}
s = [];
for (r = o = f + c; r--; ) s.push(0);
for (r = c; --r >= 0; ) {
n = 0;
for (t = f + r; t > r; ) {
u = s[t] + p[r] * d[t - r - 1] + n;
s[t--] = u % y | 0;
n = u / y | 0;
}
s[t] = (s[t] + n) % y | 0;
}
for (;!s[--o]; ) s.pop();
n ? ++i : s.shift();
e.d = s;
e.e = k(s, i);
return a ? T(e, h.precision, h.rounding) : e;
};
D.toBinary = function(e, n) {
return Y(this, 2, e, n);
};
D.toDecimalPlaces = D.toDP = function(e, n) {
var i = this, r = i.constructor;
i = new r(i);
if (void 0 === e) return i;
A(e, 0, o);
void 0 === n ? n = r.rounding : A(n, 0, 8);
return T(i, e + i.e + 1, n);
};
D.toExponential = function(e, n) {
var i, r = this, t = r.constructor;
if (void 0 === e) i = _(r, !0); else {
A(e, 0, o);
void 0 === n ? n = t.rounding : A(n, 0, 8);
i = _(r = T(new t(r), e + 1, n), !0, e + 1);
}
return r.isNeg() && !r.isZero() ? "-" + i : i;
};
D.toFixed = function(e, n) {
var i, r, t = this, s = t.constructor;
if (void 0 === e) i = _(t); else {
A(e, 0, o);
void 0 === n ? n = s.rounding : A(n, 0, 8);
i = _(r = T(new s(t), e + t.e + 1, n), !1, e + r.e + 1);
}
return t.isNeg() && !t.isZero() ? "-" + i : i;
};
D.toFraction = function(e) {
var n, i, r, t, s, o, u, f, c, l, h, p, g = this, m = g.d, w = g.constructor;
if (!m) return new w(g);
c = i = new w(1);
o = (s = (n = new w(r = f = new w(0))).e = C(m) - g.e - 1) % M;
n.d[0] = v(10, o < 0 ? M + o : o);
if (null == e) e = s > 0 ? n : c; else {
if (!(u = new w(e)).isInt() || u.lt(c)) throw Error(d + u);
e = u.gt(n) ? s > 0 ? n : c : u;
}
a = !1;
u = new w(F(m));
l = w.precision;
w.precision = s = m.length * M * 2;
for (;;) {
h = R(u, n, 0, 1, 1);
if (1 == (t = i.plus(h.times(r))).cmp(e)) break;
i = r;
r = t;
t = c;
c = f.plus(h.times(t));
f = t;
t = n;
n = u.minus(h.times(t));
u = t;
}
t = R(e.minus(i), r, 0, 1, 1);
f = f.plus(t.times(c));
i = i.plus(t.times(r));
f.s = c.s = g.s;
p = R(c, r, s, 1).minus(g).abs().cmp(R(f, i, s, 1).minus(g).abs()) < 1 ? [ c, r ] : [ f, i ];
w.precision = l;
a = !0;
return p;
};
D.toHexadecimal = D.toHex = function(e, n) {
return Y(this, 16, e, n);
};
D.toNearest = function(e, n) {
var i = this, r = i.constructor;
i = new r(i);
if (null == e) {
if (!i.d) return i;
e = new r(1);
n = r.rounding;
} else {
e = new r(e);
void 0 === n ? n = r.rounding : A(n, 0, 8);
if (!i.d) return e.s ? i : e;
if (!e.d) {
e.s && (e.s = i.s);
return e;
}
}
if (e.d[0]) {
a = !1;
i = R(i, e, 0, n, 1).times(e);
a = !0;
T(i);
} else {
e.s = i.s;
i = e;
}
return i;
};
D.toNumber = function() {
return +this;
};
D.toOctal = function(e, n) {
return Y(this, 8, e, n);
};
D.toPower = D.pow = function(e) {
var n, i, r, t, s, o, u = this, f = u.constructor, c = +(e = new f(e));
if (!(u.d && e.d && u.d[0] && e.d[0])) return new f(v(+u, c));
if ((u = new f(u)).eq(1)) return u;
r = f.precision;
s = f.rounding;
if (e.eq(1)) return T(u, r, s);
if ((n = w(e.e / M)) >= e.d.length - 1 && (i = c < 0 ? -c : c) <= 9007199254740991) {
t = H(f, u, i, r);
return e.s < 0 ? new f(1).div(t) : T(t, r, s);
}
if ((o = u.s) < 0) {
if (n < e.d.length - 1) return new f(NaN);
0 == (1 & e.d[n]) && (o = 1);
if (0 == u.e && 1 == u.d[0] && 1 == u.d.length) {
u.s = o;
return u;
}
}
if ((n = 0 != (i = v(+u, c)) && isFinite(i) ? new f(i + "").e : w(c * (Math.log("0." + F(u.d)) / Math.LN10 + u.e + 1))) > f.maxE + 1 || n < f.minE - 1) return new f(n > 0 ? o / 0 : 0);
a = !1;
f.rounding = u.s = 1;
i = Math.min(12, (n + "").length);
if ((t = $(e.times(j(u, r + i)), r)).d && S((t = T(t, r + 5, 1)).d, r, s)) {
n = r + 10;
+F((t = T($(e.times(j(u, n + i)), n), n + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 && (t = T(t, r + 1, 0));
}
t.s = o;
a = !0;
f.rounding = s;
return T(t, r, s);
};
D.toPrecision = function(e, n) {
var i, r = this, t = r.constructor;
if (void 0 === e) i = _(r, r.e <= t.toExpNeg || r.e >= t.toExpPos); else {
A(e, 1, o);
void 0 === n ? n = t.rounding : A(n, 0, 8);
i = _(r = T(new t(r), e, n), e <= r.e || r.e <= t.toExpNeg, e);
}
return r.isNeg() && !r.isZero() ? "-" + i : i;
};
D.toSignificantDigits = D.toSD = function(e, n) {
var i = this.constructor;
if (void 0 === e) {
e = i.precision;
n = i.rounding;
} else {
A(e, 1, o);
void 0 === n ? n = i.rounding : A(n, 0, 8);
}
return T(new i(this), e, n);
};
D.toString = function() {
var e = this, n = e.constructor, i = _(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
return e.isNeg() && !e.isZero() ? "-" + i : i;
};
D.truncated = D.trunc = function() {
return T(new this.constructor(this), this.e + 1, 1);
};
D.valueOf = D.toJSON = function() {
var e = this, n = e.constructor, i = _(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
return e.isNeg() ? "-" + i : i;
};
function F(e) {
var n, i, r, t = e.length - 1, s = "", o = e[0];
if (t > 0) {
s += o;
for (n = 1; n < t; n++) {
r = e[n] + "";
(i = M - r.length) && (s += I(i));
s += r;
}
o = e[n];
(i = M - (r = o + "").length) && (s += I(i));
} else if (0 === o) return "0";
for (;o % 10 == 0; ) o /= 10;
return s + o;
}
function A(e, n, i) {
if (e !== ~~e || e < n || e > i) throw Error(d + e);
}
function S(e, n, i, r) {
var t, s, o, u;
for (s = e[0]; s >= 10; s /= 10) --n;
if (--n < 0) {
n += M;
t = 0;
} else {
t = Math.ceil((n + 1) / M);
n %= M;
}
s = v(10, M - n);
u = e[t] % s | 0;
if (null == r) if (n < 3) {
0 == n ? u = u / 100 | 0 : 1 == n && (u = u / 10 | 0);
o = i < 4 && 99999 == u || i > 3 && 49999 == u || 5e4 == u || 0 == u;
} else o = (i < 4 && u + 1 == s || i > 3 && u + 1 == s / 2) && (e[t + 1] / s / 100 | 0) == v(10, n - 2) - 1 || (u == s / 2 || 0 == u) && 0 == (e[t + 1] / s / 100 | 0); else if (n < 4) {
0 == n ? u = u / 1e3 | 0 : 1 == n ? u = u / 100 | 0 : 2 == n && (u = u / 10 | 0);
o = (r || i < 4) && 9999 == u || !r && i > 3 && 4999 == u;
} else o = ((r || i < 4) && u + 1 == s || !r && i > 3 && u + 1 == s / 2) && (e[t + 1] / s / 1e3 | 0) == v(10, n - 3) - 1;
return o;
}
function Z(e, n, i) {
for (var r, t, s = [ 0 ], o = 0, f = e.length; o < f; ) {
for (t = s.length; t--; ) s[t] *= n;
s[0] += u.indexOf(e.charAt(o++));
for (r = 0; r < s.length; r++) if (s[r] > i - 1) {
void 0 === s[r + 1] && (s[r + 1] = 0);
s[r + 1] += s[r] / i | 0;
s[r] %= i;
}
}
return s.reverse();
}
function P(e, n) {
var i, r, t;
if (n.isZero()) return n;
if ((r = n.d.length) < 32) t = (1 / Q(4, i = Math.ceil(r / 3))).toString(); else {
i = 16;
t = "2.3283064365386962890625e-10";
}
e.precision += i;
n = K(e, 1, n.times(t), new e(1));
for (var s = i; s--; ) {
var o = n.times(n);
n = o.times(o).minus(o).times(8).plus(1);
}
e.precision -= i;
return n;
}
var R = function() {
function e(e, n, i) {
var r, t = 0, s = e.length;
for (e = e.slice(); s--; ) {
r = e[s] * n + t;
e[s] = r % i | 0;
t = r / i | 0;
}
t && e.unshift(t);
return e;
}
function n(e, n, i, r) {
var t, s;
if (i != r) s = i > r ? 1 : -1; else for (t = s = 0; t < i; t++) if (e[t] != n[t]) {
s = e[t] > n[t] ? 1 : -1;
break;
}
return s;
}
function r(e, n, i, r) {
for (var t = 0; i--; ) {
e[i] -= t;
t = e[i] < n[i] ? 1 : 0;
e[i] = t * r + e[i] - n[i];
}
for (;!e[0] && e.length > 1; ) e.shift();
}
return function(t, s, o, u, f, c) {
var l, a, h, d, p, g, m, v, N, b, E, x, q, O, D, F, A, S, Z, P, R = t.constructor, _ = t.s == s.s ? 1 : -1, k = t.d, L = s.d;
if (!(k && k[0] && L && L[0])) return new R(t.s && s.s && (k ? !L || k[0] != L[0] : L) ? k && 0 == k[0] || !L ? 0 * _ : _ / 0 : NaN);
if (c) {
p = 1;
a = t.e - s.e;
} else {
c = y;
p = M;
a = w(t.e / p) - w(s.e / p);
}
Z = L.length;
A = k.length;
b = (N = new R(_)).d = [];
for (h = 0; L[h] == (k[h] || 0); h++) ;
L[h] > (k[h] || 0) && a--;
if (null == o) {
O = o = R.precision;
u = R.rounding;
} else O = f ? o + (t.e - s.e) + 1 : o;
if (O < 0) {
b.push(1);
g = !0;
} else {
O = O / p + 2 | 0;
h = 0;
if (1 == Z) {
d = 0;
L = L[0];
O++;
for (;(h < A || d) && O--; h++) {
D = d * c + (k[h] || 0);
b[h] = D / L | 0;
d = D % L | 0;
}
g = d || h < A;
} else {
if ((d = c / (L[0] + 1) | 0) > 1) {
L = e(L, d, c);
k = e(k, d, c);
Z = L.length;
A = k.length;
}
F = Z;
x = (E = k.slice(0, Z)).length;
for (;x < Z; ) E[x++] = 0;
(P = L.slice()).unshift(0);
S = L[0];
L[1] >= c / 2 && ++S;
do {
d = 0;
if ((l = n(L, E, Z, x)) < 0) {
q = E[0];
Z != x && (q = q * c + (E[1] || 0));
if ((d = q / S | 0) > 1) {
d >= c && (d = c - 1);
if (1 == (l = n(m = e(L, d, c), E, v = m.length, x = E.length))) {
d--;
r(m, Z < v ? P : L, v, c);
}
} else {
0 == d && (l = d = 1);
m = L.slice();
}
(v = m.length) < x && m.unshift(0);
r(E, m, x, c);
if (-1 == l && (l = n(L, E, Z, x = E.length)) < 1) {
d++;
r(E, Z < x ? P : L, x, c);
}
x = E.length;
} else if (0 === l) {
d++;
E = [ 0 ];
}
b[h++] = d;
if (l && E[0]) E[x++] = k[F] || 0; else {
E = [ k[F] ];
x = 1;
}
} while ((F++ < A || void 0 !== E[0]) && O--);
g = void 0 !== E[0];
}
b[0] || b.shift();
}
if (1 == p) {
N.e = a;
i = g;
} else {
for (h = 1, d = b[0]; d >= 10; d /= 10) h++;
N.e = h + a * p - 1;
T(N, f ? o + N.e + 1 : o, u, g);
}
return N;
};
}();
function T(e, n, i, r) {
var t, s, o, u, f, c, l, h, d, p = e.constructor;
e: if (null != n) {
if (!(h = e.d)) return e;
for (t = 1, u = h[0]; u >= 10; u /= 10) t++;
if ((s = n - t) < 0) {
s += M;
o = n;
f = (l = h[d = 0]) / v(10, t - o - 1) % 10 | 0;
} else if ((d = Math.ceil((s + 1) / M)) >= (u = h.length)) {
if (!r) break e;
for (;u++ <= d; ) h.push(0);
l = f = 0;
t = 1;
o = (s %= M) - M + 1;
} else {
l = u = h[d];
for (t = 1; u >= 10; u /= 10) t++;
f = (o = (s %= M) - M + t) < 0 ? 0 : l / v(10, t - o - 1) % 10 | 0;
}
r = r || n < 0 || void 0 !== h[d + 1] || (o < 0 ? l : l % v(10, t - o - 1));
c = i < 4 ? (f || r) && (0 == i || i == (e.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == i || r || 6 == i && (s > 0 ? o > 0 ? l / v(10, t - o) : 0 : h[d - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7));
if (n < 1 || !h[0]) {
h.length = 0;
if (c) {
n -= e.e + 1;
h[0] = v(10, (M - n % M) % M);
e.e = -n || 0;
} else h[0] = e.e = 0;
return e;
}
if (0 == s) {
h.length = d;
u = 1;
d--;
} else {
h.length = d + 1;
u = v(10, M - s);
h[d] = o > 0 ? (l / v(10, t - o) % v(10, o) | 0) * u : 0;
}
if (c) for (;;) {
if (0 == d) {
for (s = 1, o = h[0]; o >= 10; o /= 10) s++;
o = h[0] += u;
for (u = 1; o >= 10; o /= 10) u++;
if (s != u) {
e.e++;
h[0] == y && (h[0] = 1);
}
break;
}
h[d] += u;
if (h[d] != y) break;
h[d--] = 0;
u = 1;
}
for (s = h.length; 0 === h[--s]; ) h.pop();
}
if (a) if (e.e > p.maxE) {
e.d = null;
e.e = NaN;
} else if (e.e < p.minE) {
e.e = 0;
e.d = [ 0 ];
}
return e;
}
function _(e, n, i) {
if (!e.isFinite()) return W(e);
var r, t = e.e, s = F(e.d), o = s.length;
if (n) {
i && (r = i - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + I(r) : o > 1 && (s = s.charAt(0) + "." + s.slice(1));
s = s + (e.e < 0 ? "e" : "e+") + e.e;
} else if (t < 0) {
s = "0." + I(-t - 1) + s;
i && (r = i - o) > 0 && (s += I(r));
} else if (t >= o) {
s += I(t + 1 - o);
i && (r = i - t - 1) > 0 && (s = s + "." + I(r));
} else {
(r = t + 1) < o && (s = s.slice(0, r) + "." + s.slice(r));
if (i && (r = i - o) > 0) {
t + 1 === o && (s += ".");
s += I(r);
}
}
return s;
}
function k(e, n) {
var i = e[0];
for (n *= M; i >= 10; i /= 10) n++;
return n;
}
function L(e, n, i) {
if (n > q) {
a = !0;
i && (e.precision = i);
throw Error(p);
}
return T(new e(f), n, 1, !0);
}
function U(e, n, i) {
if (n > O) throw Error(p);
return T(new e(c), n, i, !0);
}
function C(e) {
var n = e.length - 1, i = n * M + 1;
if (n = e[n]) {
for (;n % 10 == 0; n /= 10) i--;
for (n = e[0]; n >= 10; n /= 10) i++;
}
return i;
}
function I(e) {
for (var n = ""; e--; ) n += "0";
return n;
}
function H(e, n, i, r) {
var t, s = new e(1), o = Math.ceil(r / M + 4);
a = !1;
for (;;) {
i % 2 && ee((s = s.times(n)).d, o) && (t = !0);
if (0 === (i = w(i / 2))) {
i = s.d.length - 1;
t && 0 === s.d[i] && ++s.d[i];
break;
}
ee((n = n.times(n)).d, o);
}
a = !0;
return s;
}
function B(e) {
return 1 & e.d[e.d.length - 1];
}
function V(e, n, i) {
for (var r, t = new e(n[0]), s = 0; ++s < n.length; ) {
if (!(r = new e(n[s])).s) {
t = r;
break;
}
t[i](r) && (t = r);
}
return t;
}
function $(e, n) {
var i, r, t, s, o, u, f, c = 0, l = 0, h = 0, d = e.constructor, p = d.rounding, g = d.precision;
if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
if (null == n) {
a = !1;
f = g;
} else f = n;
u = new d(.03125);
for (;e.e > -2; ) {
e = e.times(u);
h += 5;
}
f += r = Math.log(v(2, h)) / Math.LN10 * 2 + 5 | 0;
i = s = o = new d(1);
d.precision = f;
for (;;) {
s = T(s.times(e), f, 1);
i = i.times(++l);
if (F((u = o.plus(R(s, i, f, 1))).d).slice(0, f) === F(o.d).slice(0, f)) {
t = h;
for (;t--; ) o = T(o.times(o), f, 1);
if (null != n) {
d.precision = g;
return o;
}
if (!(c < 3 && S(o.d, f - r, p, c))) return T(o, d.precision = g, p, a = !0);
d.precision = f += 10;
i = s = u = new d(1);
l = 0;
c++;
}
o = u;
}
}
function j(e, n) {
var i, r, t, s, o, u, f, c, l, h, d, p = 1, g = e, m = g.d, w = g.constructor, v = w.rounding, N = w.precision;
if (g.s < 0 || !m || !m[0] || !g.e && 1 == m[0] && 1 == m.length) return new w(m && !m[0] ? -1 / 0 : 1 != g.s ? NaN : m ? 0 : g);
if (null == n) {
a = !1;
l = N;
} else l = n;
w.precision = l += 10;
r = (i = F(m)).charAt(0);
if (!(Math.abs(s = g.e) < 15e14)) {
c = L(w, l + 2, N).times(s + "");
g = j(new w(r + "." + i.slice(1)), l - 10).plus(c);
w.precision = N;
return null == n ? T(g, N, v, a = !0) : g;
}
for (;r < 7 && 1 != r || 1 == r && i.charAt(1) > 3; ) {
r = (i = F((g = g.times(e)).d)).charAt(0);
p++;
}
s = g.e;
if (r > 1) {
g = new w("0." + i);
s++;
} else g = new w(r + "." + i.slice(1));
h = g;
f = o = g = R(g.minus(1), g.plus(1), l, 1);
d = T(g.times(g), l, 1);
t = 3;
for (;;) {
o = T(o.times(d), l, 1);
if (F((c = f.plus(R(o, new w(t), l, 1))).d).slice(0, l) === F(f.d).slice(0, l)) {
f = f.times(2);
0 !== s && (f = f.plus(L(w, l + 2, N).times(s + "")));
f = R(f, new w(p), l, 1);
if (null != n) {
w.precision = N;
return f;
}
if (!S(f.d, l - 10, v, u)) return T(f, w.precision = N, v, a = !0);
w.precision = l += 10;
c = o = g = R(h.minus(1), h.plus(1), l, 1);
d = T(g.times(g), l, 1);
t = u = 1;
}
f = c;
t += 2;
}
}
function W(e) {
return String(e.s * e.s / 0);
}
function J(e, n) {
var i, r, t;
(i = n.indexOf(".")) > -1 && (n = n.replace(".", ""));
if ((r = n.search(/e/i)) > 0) {
i < 0 && (i = r);
i += +n.slice(r + 1);
n = n.substring(0, r);
} else i < 0 && (i = n.length);
for (r = 0; 48 === n.charCodeAt(r); r++) ;
for (t = n.length; 48 === n.charCodeAt(t - 1); --t) ;
if (n = n.slice(r, t)) {
t -= r;
e.e = i = i - r - 1;
e.d = [];
r = (i + 1) % M;
i < 0 && (r += M);
if (r < t) {
r && e.d.push(+n.slice(0, r));
for (t -= M; r < t; ) e.d.push(+n.slice(r, r += M));
n = n.slice(r);
r = M - n.length;
} else r -= t;
for (;r--; ) n += "0";
e.d.push(+n);
if (a) if (e.e > e.constructor.maxE) {
e.d = null;
e.e = NaN;
} else if (e.e < e.constructor.minE) {
e.e = 0;
e.d = [ 0 ];
}
} else {
e.e = 0;
e.d = [ 0 ];
}
return e;
}
function z(e, i) {
var r, t, s, o, u, f, c, l, h;
if (i.indexOf("_") > -1) {
i = i.replace(/(\d)_(?=\d)/g, "$1");
if (x.test(i)) return J(e, i);
} else if ("Infinity" === i || "NaN" === i) {
+i || (e.s = NaN);
e.e = NaN;
e.d = null;
return e;
}
if (b.test(i)) {
r = 16;
i = i.toLowerCase();
} else if (N.test(i)) r = 2; else {
if (!E.test(i)) throw Error(d + i);
r = 8;
}
if ((o = i.search(/p/i)) > 0) {
c = +i.slice(o + 1);
i = i.substring(2, o);
} else i = i.slice(2);
u = (o = i.indexOf(".")) >= 0;
t = e.constructor;
if (u) {
o = (f = (i = i.replace(".", "")).length) - o;
s = H(t, new t(r), o, 2 * o);
}
for (o = h = (l = Z(i, r, y)).length - 1; 0 === l[o]; --o) l.pop();
if (o < 0) return new t(0 * e.s);
e.e = k(l, h);
e.d = l;
a = !1;
u && (e = R(e, s, 4 * f));
c && (e = e.times(Math.abs(c) < 54 ? v(2, c) : n.pow(2, c)));
a = !0;
return e;
}
function G(e, n) {
var i, r = n.d.length;
if (r < 3) return n.isZero() ? n : K(e, 2, n, n);
i = (i = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | i;
n = K(e, 2, n = n.times(1 / Q(5, i)), n);
for (var t, s = new e(5), o = new e(16), u = new e(20); i--; ) {
t = n.times(n);
n = n.times(s.plus(t.times(o.times(t).minus(u))));
}
return n;
}
function K(e, n, i, r, t) {
var s, o, u, f, c = e.precision, l = Math.ceil(c / M);
a = !1;
f = i.times(i);
u = new e(r);
for (;;) {
o = R(u.times(f), new e(n++ * n++), c, 1);
u = t ? r.plus(o) : r.minus(o);
r = R(o.times(f), new e(n++ * n++), c, 1);
if (void 0 !== (o = u.plus(r)).d[l]) {
for (s = l; o.d[s] === u.d[s] && s--; ) ;
if (-1 == s) break;
}
s = u;
u = r;
r = o;
o = s;
0;
}
a = !0;
o.d.length = l + 1;
return o;
}
function Q(e, n) {
for (var i = e; --n; ) i *= e;
return i;
}
function X(e, n) {
var i, r = n.s < 0, s = U(e, e.precision, 1), o = s.times(.5);
if ((n = n.abs()).lte(o)) {
t = r ? 4 : 1;
return n;
}
if ((i = n.divToInt(s)).isZero()) t = r ? 3 : 2; else {
if ((n = n.minus(i.times(s))).lte(o)) {
t = B(i) ? r ? 2 : 3 : r ? 4 : 1;
return n;
}
t = B(i) ? r ? 1 : 4 : r ? 3 : 2;
}
return n.minus(s).abs();
}
function Y(e, n, r, t) {
var s, f, c, l, a, h, d, p, g, m = e.constructor, w = void 0 !== r;
if (w) {
A(r, 1, o);
void 0 === t ? t = m.rounding : A(t, 0, 8);
} else {
r = m.precision;
t = m.rounding;
}
if (e.isFinite()) {
c = (d = _(e)).indexOf(".");
if (w) {
s = 2;
16 == n ? r = 4 * r - 3 : 8 == n && (r = 3 * r - 2);
} else s = n;
if (c >= 0) {
d = d.replace(".", "");
(g = new m(1)).e = d.length - c;
g.d = Z(_(g), 10, s);
g.e = g.d.length;
}
f = a = (p = Z(d, 10, s)).length;
for (;0 == p[--a]; ) p.pop();
if (p[0]) {
if (c < 0) f--; else {
(e = new m(e)).d = p;
e.e = f;
p = (e = R(e, g, r, t, 0, s)).d;
f = e.e;
h = i;
}
c = p[r];
l = s / 2;
h = h || void 0 !== p[r + 1];
h = t < 4 ? (void 0 !== c || h) && (0 === t || t === (e.s < 0 ? 3 : 2)) : c > l || c === l && (4 === t || h || 6 === t && 1 & p[r - 1] || t === (e.s < 0 ? 8 : 7));
p.length = r;
if (h) for (;++p[--r] > s - 1; ) {
p[r] = 0;
if (!r) {
++f;
p.unshift(1);
}
}
for (a = p.length; !p[a - 1]; --a) ;
for (c = 0, d = ""; c < a; c++) d += u.charAt(p[c]);
if (w) {
if (a > 1) if (16 == n || 8 == n) {
c = 16 == n ? 4 : 3;
for (--a; a % c; a++) d += "0";
for (a = (p = Z(d, s, n)).length; !p[a - 1]; --a) ;
for (c = 1, d = "1."; c < a; c++) d += u.charAt(p[c]);
} else d = d.charAt(0) + "." + d.slice(1);
d = d + (f < 0 ? "p" : "p+") + f;
} else if (f < 0) {
for (;++f; ) d = "0" + d;
d = "0." + d;
} else if (++f > a) for (f -= a; f--; ) d += "0"; else f < a && (d = d.slice(0, f) + "." + d.slice(f));
} else d = w ? "0p+0" : "0";
d = (16 == n ? "0x" : 2 == n ? "0b" : 8 == n ? "0o" : "") + d;
} else d = W(e);
return e.s < 0 ? "-" + d : d;
}
function ee(e, n) {
if (e.length > n) {
e.length = n;
return !0;
}
}
function ne(e) {
return new this(e).abs();
}
function ie(e) {
return new this(e).acos();
}
function re(e) {
return new this(e).acosh();
}
function te(e, n) {
return new this(e).plus(n);
}
function se(e) {
return new this(e).asin();
}
function oe(e) {
return new this(e).asinh();
}
function ue(e) {
return new this(e).atan();
}
function fe(e) {
return new this(e).atanh();
}
function ce(e, n) {
e = new this(e);
n = new this(n);
var i, r = this.precision, t = this.rounding, s = r + 4;
if (e.s && n.s) if (e.d || n.d) if (!n.d || e.isZero()) (i = n.s < 0 ? U(this, r, t) : new this(0)).s = e.s; else if (!e.d || n.isZero()) (i = U(this, s, 1).times(.5)).s = e.s; else if (n.s < 0) {
this.precision = s;
this.rounding = 1;
i = this.atan(R(e, n, s, 1));
n = U(this, s, 1);
this.precision = r;
this.rounding = t;
i = e.s < 0 ? i.minus(n) : i.plus(n);
} else i = this.atan(R(e, n, s, 1)); else (i = U(this, s, 1).times(n.s > 0 ? .25 : .75)).s = e.s; else i = new this(NaN);
return i;
}
function le(e) {
return new this(e).cbrt();
}
function ae(e) {
return T(e = new this(e), e.e + 1, 2);
}
function he(e, n, i) {
return new this(e).clamp(n, i);
}
function de(e) {
if (!e || "object" != typeof e) throw Error(h + "Object expected");
var n, i, r, t = !0 === e.defaults, u = [ "precision", 1, o, "rounding", 0, 8, "toExpNeg", -s, 0, "toExpPos", 0, s, "maxE", 0, s, "minE", -s, 0, "modulo", 0, 9 ];
for (n = 0; n < u.length; n += 3) {
(i = u[n], t) && (this[i] = l[i]);
if (void 0 !== (r = e[i])) {
if (!(w(r) === r && r >= u[n + 1] && r <= u[n + 2])) throw Error(d + i + ": " + r);
this[i] = r;
}
}
(i = "crypto", t) && (this[i] = l[i]);
if (void 0 !== (r = e[i])) {
if (!0 !== r && !1 !== r && 0 !== r && 1 !== r) throw Error(d + i + ": " + r);
if (r) {
if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(g);
this[i] = !0;
} else this[i] = !1;
}
return this;
}
function pe(e) {
return new this(e).cos();
}
function ge(e) {
return new this(e).cosh();
}
function me(e, n) {
return new this(e).div(n);
}
function we(e) {
return new this(e).exp();
}
function ve(e) {
return T(e = new this(e), e.e + 1, 3);
}
function Ne() {
var e, n, i = new this(0);
a = !1;
for (e = 0; e < arguments.length; ) if ((n = new this(arguments[e++])).d) i.d && (i = i.plus(n.times(n))); else {
if (n.s) {
a = !0;
return new this(1 / 0);
}
i = n;
}
a = !0;
return i.sqrt();
}
function be(e) {
return e instanceof n || e && e.toStringTag === m || !1;
}
function Ee(e) {
return new this(e).ln();
}
function xe(e, n) {
return new this(e).log(n);
}
function ye(e) {
return new this(e).log(2);
}
function Me(e) {
return new this(e).log(10);
}
function qe() {
return V(this, arguments, "lt");
}
function Oe() {
return V(this, arguments, "gt");
}
function De(e, n) {
return new this(e).mod(n);
}
function Fe(e, n) {
return new this(e).mul(n);
}
function Ae(e, n) {
return new this(e).pow(n);
}
function Se(e) {
var n, i, r, t, s = 0, u = new this(1), f = [];
void 0 === e ? e = this.precision : A(e, 1, o);
r = Math.ceil(e / M);
if (this.crypto) if (crypto.getRandomValues) {
n = crypto.getRandomValues(new Uint32Array(r));
for (;s < r; ) (t = n[s]) >= 429e7 ? n[s] = crypto.getRandomValues(new Uint32Array(1))[0] : f[s++] = t % 1e7;
} else {
if (!crypto.randomBytes) throw Error(g);
n = crypto.randomBytes(r *= 4);
for (;s < r; ) if ((t = n[s] + (n[s + 1] << 8) + (n[s + 2] << 16) + ((127 & n[s + 3]) << 24)) >= 214e7) crypto.randomBytes(4).copy(n, s); else {
f.push(t % 1e7);
s += 4;
}
s = r / 4;
} else for (;s < r; ) f[s++] = 1e7 * Math.random() | 0;
r = f[--s];
e %= M;
if (r && e) {
t = v(10, M - e);
f[s] = (r / t | 0) * t;
}
for (;0 === f[s]; s--) f.pop();
if (s < 0) {
i = 0;
f = [ 0 ];
} else {
i = -1;
for (;0 === f[0]; i -= M) f.shift();
for (r = 1, t = f[0]; t >= 10; t /= 10) r++;
r < M && (i -= M - r);
}
u.e = i;
u.d = f;
return u;
}
function Ze(e) {
return T(e = new this(e), e.e + 1, this.rounding);
}
function Pe(e) {
return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Re(e) {
return new this(e).sin();
}
function Te(e) {
return new this(e).sinh();
}
function _e(e) {
return new this(e).sqrt();
}
function ke(e, n) {
return new this(e).sub(n);
}
function Le() {
var e = 0, n = arguments, i = new this(n[e]);
a = !1;
for (;i.s && ++e < n.length; ) i = i.plus(n[e]);
a = !0;
return T(i, this.precision, this.rounding);
}
function Ue(e) {
return new this(e).tan();
}
function Ce(e) {
return new this(e).tanh();
}
function Ie(e) {
return T(e = new this(e), e.e + 1, 1);
}
(n = function e(n) {
var i, r, t;
function s(e) {
var n, i, r, t = this;
if (!(t instanceof s)) return new s(e);
t.constructor = s;
if (!be(e)) {
if ("number" == (r = typeof e)) {
if (0 === e) {
t.s = 1 / e < 0 ? -1 : 1;
t.e = 0;
t.d = [ 0 ];
return;
}
if (e < 0) {
e = -e;
t.s = -1;
} else t.s = 1;
if (e === ~~e && e < 1e7) {
for (n = 0, i = e; i >= 10; i /= 10) n++;
if (a) if (n > s.maxE) {
t.e = NaN;
t.d = null;
} else if (n < s.minE) {
t.e = 0;
t.d = [ 0 ];
} else {
t.e = n;
t.d = [ e ];
} else {
t.e = n;
t.d = [ e ];
}
return;
}
if (0 * e != 0) {
e || (t.s = NaN);
t.e = NaN;
t.d = null;
return;
}
return J(t, e.toString());
}
if ("string" !== r) throw Error(d + e);
if (45 === (i = e.charCodeAt(0))) {
e = e.slice(1);
t.s = -1;
} else {
43 === i && (e = e.slice(1));
t.s = 1;
}
return x.test(e) ? J(t, e) : z(t, e);
}
t.s = e.s;
if (a) if (!e.d || e.e > s.maxE) {
t.e = NaN;
t.d = null;
} else if (e.e < s.minE) {
t.e = 0;
t.d = [ 0 ];
} else {
t.e = e.e;
t.d = e.d.slice();
} else {
t.e = e.e;
t.d = e.d ? e.d.slice() : e.d;
}
}
s.prototype = D;
s.ROUND_UP = 0;
s.ROUND_DOWN = 1;
s.ROUND_CEIL = 2;
s.ROUND_FLOOR = 3;
s.ROUND_HALF_UP = 4;
s.ROUND_HALF_DOWN = 5;
s.ROUND_HALF_EVEN = 6;
s.ROUND_HALF_CEIL = 7;
s.ROUND_HALF_FLOOR = 8;
s.EUCLID = 9;
s.config = s.set = de;
s.clone = e;
s.isDecimal = be;
s.abs = ne;
s.acos = ie;
s.acosh = re;
s.add = te;
s.asin = se;
s.asinh = oe;
s.atan = ue;
s.atanh = fe;
s.atan2 = ce;
s.cbrt = le;
s.ceil = ae;
s.clamp = he;
s.cos = pe;
s.cosh = ge;
s.div = me;
s.exp = we;
s.floor = ve;
s.hypot = Ne;
s.ln = Ee;
s.log = xe;
s.log10 = Me;
s.log2 = ye;
s.max = qe;
s.min = Oe;
s.mod = De;
s.mul = Fe;
s.pow = Ae;
s.random = Se;
s.round = Ze;
s.sign = Pe;
s.sin = Re;
s.sinh = Te;
s.sqrt = _e;
s.sub = ke;
s.sum = Le;
s.tan = Ue;
s.tanh = Ce;
s.trunc = Ie;
void 0 === n && (n = {});
if (n && !0 !== n.defaults) {
t = [ "precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto" ];
for (i = 0; i < t.length; ) n.hasOwnProperty(r = t[i++]) || (n[r] = this[r]);
}
s.config(n);
return s;
}(l)).prototype.constructor = n;
n.default = n.Decimal = n;
window.Decimal = n;
f = new n(f);
c = new n(c);
if ("function" == typeof define && define.amd) define(function() {
return n;
}); else if ("undefined" != typeof module && module.exports) {
if ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator) {
D[Symbol.for("nodejs.util.inspect.custom")] = D.toString;
D[Symbol.toStringTag] = "Decimal";
}
module.exports = n;
} else {
e || (e = "undefined" != typeof self && self && self.self == self ? self : window);
r = e.Decimal;
n.noConflict = function() {
e.Decimal = r;
return n;
};
e.Decimal = n;
}
})(this);