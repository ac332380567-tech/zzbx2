"use strict";

(() => {
var t, e = Object.create, r = Object.defineProperty, i = Object.defineProperties, n = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyDescriptors, a = Object.getOwnPropertyNames, o = Object.getOwnPropertySymbols, h = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable, l = (t, e, i) => e in t ? r(t, e, {
enumerable: !0,
configurable: !0,
writable: !0,
value: i
}) : t[e] = i, f = (t, e) => {
for (var r in e || (e = {})) u.call(e, r) && l(t, r, e[r]);
if (o) for (var r of o(e)) c.call(e, r) && l(t, r, e[r]);
return t;
}, d = (t, e) => i(t, s(e)), g = (t, e, i, s) => {
if (e && "object" == typeof e || "function" == typeof e) for (let o of a(e)) u.call(t, o) || o === i || r(t, o, {
get: () => e[o],
enumerable: !(s = n(e, o)) || s.enumerable
});
return t;
}, p = ((t, i, n) => (n = null != t ? e(h(t)) : {}, g(!i && t && t.__esModule ? n : r(n, "default", {
value: t,
enumerable: !0
}), t)))(((t, e) => (function() {
return e || (0, t[a(t)[0]])((e = {
exports: {}
}).exports, e), e.exports;
}))({
"node_modules/jsrsasign/lib/jsrsasign.js"(t) {
var e = {
userAgent: !1
}, r = {}, i = i || function(t, e) {
var r = {}, i = r.lib = {}, n = i.Base = function() {
function t() {}
return {
extend: function(e) {
t.prototype = this;
var r = new t();
return e && r.mixIn(e), !r.hasOwnProperty("init") && (r.init = function() {
r.$super.init.apply(this, arguments);
}), r.init.prototype = r, r.$super = this, r;
},
create: function() {
var t = this.extend();
return t.init.apply(t, arguments), t;
},
init: function() {},
mixIn: function(t) {
for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
t.hasOwnProperty("toString") && (this.toString = t.toString);
},
clone: function() {
return this.init.prototype.extend(this);
}
};
}(), s = i.WordArray = n.extend({
init: function(t, e) {
t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length;
},
toString: function(t) {
return (t || o).stringify(this);
},
concat: function(t) {
var e = this.words, r = t.words, i = this.sigBytes, n = t.sigBytes;
this.clamp();
if (i % 4) for (var s = 0; s < n; s++) {
var a = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
e[i + s >>> 2] |= a << 24 - (i + s) % 4 * 8;
} else for (s = 0; s < n; s += 4) e[i + s >>> 2] = r[s >>> 2];
return this.sigBytes += n, this;
},
clamp: function() {
var e = this.words, r = this.sigBytes;
e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4);
},
clone: function() {
var t = n.clone.call(this);
return t.words = this.words.slice(0), t;
},
random: function(e) {
for (var r = [], i = 0; i < e; i += 4) r.push(4294967296 * t.random() | 0);
return new s.init(r, e);
}
}), a = r.enc = {}, o = a.Hex = {
stringify: function(t) {
for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) {
var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16));
}
return i.join("");
},
parse: function(t) {
for (var e = t.length, r = [], i = 0; i < e; i += 2) r[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
return new s.init(r, e / 2);
}
}, h = a.Latin1 = {
stringify: function(t) {
for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) {
var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
i.push(String.fromCharCode(s));
}
return i.join("");
},
parse: function(t) {
for (var e = t.length, r = [], i = 0; i < e; i++) r[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
return new s.init(r, e);
}
}, u = a.Utf8 = {
stringify: function(t) {
try {
return decodeURIComponent(escape(h.stringify(t)));
} catch (t) {
throw new Error("Malformed UTF-8 data");
}
},
parse: function(t) {
return h.parse(unescape(encodeURIComponent(t)));
}
}, c = i.BufferedBlockAlgorithm = n.extend({
reset: function() {
this._data = new s.init(), this._nDataBytes = 0;
},
_append: function(t) {
"string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
},
_process: function(e) {
var r = this._data, i = r.words, n = r.sigBytes, a = this.blockSize, o = n / (4 * a), h = (o = e ? t.ceil(o) : t.max((0 | o) - this._minBufferSize, 0)) * a, u = t.min(4 * h, n);
if (h) {
for (var c = 0; c < h; c += a) this._doProcessBlock(i, c);
var l = i.splice(0, h);
r.sigBytes -= u;
}
return new s.init(l, u);
},
clone: function() {
var t = n.clone.call(this);
return t._data = this._data.clone(), t;
},
_minBufferSize: 0
}), l = (i.Hasher = c.extend({
cfg: n.extend(),
init: function(t) {
this.cfg = this.cfg.extend(t), this.reset();
},
reset: function() {
c.reset.call(this), this._doReset();
},
update: function(t) {
return this._append(t), this._process(), this;
},
finalize: function(t) {
t && this._append(t);
return this._doFinalize();
},
blockSize: 16,
_createHelper: function(t) {
return function(e, r) {
return new t.init(r).finalize(e);
};
},
_createHmacHelper: function(t) {
return function(e, r) {
return new l.HMAC.init(t, r).finalize(e);
};
}
}), r.algo = {});
return r;
}(Math);
(function(t) {
var e, r = (e = i).lib, n = r.Base, s = r.WordArray;
(e = e.x64 = {}).Word = n.extend({
init: function(t, e) {
this.high = t, this.low = e;
}
}), e.WordArray = n.extend({
init: function(t, e) {
t = this.words = t || [], this.sigBytes = void 0 != e ? e : 8 * t.length;
},
toX32: function() {
for (var t = this.words, e = t.length, r = [], i = 0; i < e; i++) {
var n = t[i];
r.push(n.high), r.push(n.low);
}
return s.create(r, this.sigBytes);
},
clone: function() {
for (var t = n.clone.call(this), e = t.words = this.words.slice(0), r = e.length, i = 0; i < r; i++) e[i] = e[i].clone();
return t;
}
});
})(), i.lib.Cipher || function(t) {
var e = (g = i).lib, r = e.Base, n = e.WordArray, s = e.BufferedBlockAlgorithm, a = g.enc.Base64, o = g.algo.EvpKDF, h = e.Cipher = s.extend({
cfg: r.extend(),
createEncryptor: function(t, e) {
return this.create(this._ENC_XFORM_MODE, t, e);
},
createDecryptor: function(t, e) {
return this.create(this._DEC_XFORM_MODE, t, e);
},
init: function(t, e, r) {
this.cfg = this.cfg.extend(r), this._xformMode = t, this._key = e, this.reset();
},
reset: function() {
s.reset.call(this), this._doReset();
},
process: function(t) {
return this._append(t), this._process();
},
finalize: function(t) {
return t && this._append(t), this._doFinalize();
},
keySize: 4,
ivSize: 4,
_ENC_XFORM_MODE: 1,
_DEC_XFORM_MODE: 2,
_createHelper: function(t) {
return {
encrypt: function(e, r, i) {
return ("string" == typeof r ? p : d).encrypt(t, e, r, i);
},
decrypt: function(e, r, i) {
return ("string" == typeof r ? p : d).decrypt(t, e, r, i);
}
};
}
});
e.StreamCipher = h.extend({
_doFinalize: function() {
return this._process(!0);
},
blockSize: 1
});
var u = g.mode = {}, c = function(t, e, r) {
var i = this._iv;
i ? this._iv = void 0 : i = this._prevBlock;
for (var n = 0; n < r; n++) t[e + n] ^= i[n];
}, l = (e.BlockCipherMode = r.extend({
createEncryptor: function(t, e) {
return this.Encryptor.create(t, e);
},
createDecryptor: function(t, e) {
return this.Decryptor.create(t, e);
},
init: function(t, e) {
this._cipher = t, this._iv = e;
}
})).extend();
l.Encryptor = l.extend({
processBlock: function(t, e) {
var r = this._cipher, i = r.blockSize;
c.call(this, t, e, i), r.encryptBlock(t, e), this._prevBlock = t.slice(e, e + i);
}
}), l.Decryptor = l.extend({
processBlock: function(t, e) {
var r = this._cipher, i = r.blockSize, n = t.slice(e, e + i);
r.decryptBlock(t, e), c.call(this, t, e, i), this._prevBlock = n;
}
}), u = u.CBC = l, l = (g.pad = {}).Pkcs7 = {
pad: function(t, e) {
for (var r, i = (r = (r = 4 * e) - t.sigBytes % r) << 24 | r << 16 | r << 8 | r, s = [], a = 0; a < r; a += 4) s.push(i);
r = n.create(s, r), t.concat(r);
},
unpad: function(t) {
t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2];
}
}, e.BlockCipher = h.extend({
cfg: h.cfg.extend({
mode: u,
padding: l
}),
reset: function() {
h.reset.call(this);
var t = (e = this.cfg).iv, e = e.mode;
if (this._xformMode == this._ENC_XFORM_MODE) var r = e.createEncryptor; else r = e.createDecryptor, 
this._minBufferSize = 1;
this._mode = r.call(e, this, t && t.words);
},
_doProcessBlock: function(t, e) {
this._mode.processBlock(t, e);
},
_doFinalize: function() {
var t = this.cfg.padding;
if (this._xformMode == this._ENC_XFORM_MODE) {
t.pad(this._data, this.blockSize);
var e = this._process(!0);
} else e = this._process(!0), t.unpad(e);
return e;
},
blockSize: 4
});
var f = e.CipherParams = r.extend({
init: function(t) {
this.mixIn(t);
},
toString: function(t) {
return (t || this.formatter).stringify(this);
}
}), d = (u = (g.format = {}).OpenSSL = {
stringify: function(t) {
var e = t.ciphertext;
return ((t = t.salt) ? n.create([ 1398893684, 1701076831 ]).concat(t).concat(e) : e).toString(a);
},
parse: function(t) {
var e = (t = a.parse(t)).words;
if (1398893684 == e[0] && 1701076831 == e[1]) {
var r = n.create(e.slice(2, 4));
e.splice(0, 4), t.sigBytes -= 16;
}
return f.create({
ciphertext: t,
salt: r
});
}
}, e.SerializableCipher = r.extend({
cfg: r.extend({
format: u
}),
encrypt: function(t, e, r, i) {
i = this.cfg.extend(i);
var n = t.createEncryptor(r, i);
return e = n.finalize(e), n = n.cfg, f.create({
ciphertext: e,
key: r,
iv: n.iv,
algorithm: t,
mode: n.mode,
padding: n.padding,
blockSize: t.blockSize,
formatter: i.format
});
},
decrypt: function(t, e, r, i) {
return i = this.cfg.extend(i), e = this._parse(e, i.format), t.createDecryptor(r, i).finalize(e.ciphertext);
},
_parse: function(t, e) {
return "string" == typeof t ? e.parse(t, this) : t;
}
})), g = (g.kdf = {}).OpenSSL = {
execute: function(t, e, r, i) {
return i || (i = n.random(8)), t = o.create({
keySize: e + r
}).compute(t, i), r = n.create(t.words.slice(e), 4 * r), t.sigBytes = 4 * e, f.create({
key: t,
iv: r,
salt: i
});
}
}, p = e.PasswordBasedCipher = d.extend({
cfg: d.cfg.extend({
kdf: g
}),
encrypt: function(t, e, r, i) {
return r = (i = this.cfg.extend(i)).kdf.execute(r, t.keySize, t.ivSize), i.iv = r.iv, 
(t = d.encrypt.call(this, t, e, r.key, i)).mixIn(r), t;
},
decrypt: function(t, e, r, i) {
return i = this.cfg.extend(i), e = this._parse(e, i.format), r = i.kdf.execute(r, t.keySize, t.ivSize, e.salt), 
i.iv = r.iv, d.decrypt.call(this, t, e, r.key, i);
}
});
}(), function() {
for (var t = i, e = t.lib.BlockCipher, r = t.algo, n = [], s = [], a = [], o = [], h = [], u = [], c = [], l = [], f = [], d = [], g = [], p = 0; 256 > p; p++) g[p] = 128 > p ? p << 1 : p << 1 ^ 283;
var v = 0, y = 0;
for (p = 0; 256 > p; p++) {
var m = (m = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4) >>> 8 ^ 255 & m ^ 99;
n[v] = m, s[m] = v;
var x = g[v], S = g[x], E = g[S], w = 257 * g[m] ^ 16843008 * m;
a[v] = w << 24 | w >>> 8, o[v] = w << 16 | w >>> 16, h[v] = w << 8 | w >>> 24, u[v] = w, 
w = 16843009 * E ^ 65537 * S ^ 257 * x ^ 16843008 * v, c[m] = w << 24 | w >>> 8, 
l[m] = w << 16 | w >>> 16, f[m] = w << 8 | w >>> 24, d[m] = w, v ? (v = x ^ g[g[g[E ^ x]]], 
y ^= g[g[y]]) : v = y = 1;
}
var b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
r = r.AES = e.extend({
_doReset: function() {
for (var t = (r = this._key).words, e = r.sigBytes / 4, r = 4 * ((this._nRounds = e + 6) + 1), i = this._keySchedule = [], s = 0; s < r; s++) if (s < e) i[s] = t[s]; else {
var a = i[s - 1];
s % e ? 6 < e && 4 == s % e && (a = n[a >>> 24] << 24 | n[a >>> 16 & 255] << 16 | n[a >>> 8 & 255] << 8 | n[255 & a]) : (a = n[(a = a << 8 | a >>> 24) >>> 24] << 24 | n[a >>> 16 & 255] << 16 | n[a >>> 8 & 255] << 8 | n[255 & a], 
a ^= b[s / e | 0] << 24), i[s] = i[s - e] ^ a;
}
t = this._invKeySchedule = [];
for (e = 0; e < r; e++) s = r - e, a = e % 4 ? i[s] : i[s - 4], t[e] = 4 > e || 4 >= s ? a : c[n[a >>> 24]] ^ l[n[a >>> 16 & 255]] ^ f[n[a >>> 8 & 255]] ^ d[n[255 & a]];
},
encryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._keySchedule, a, o, h, u, n);
},
decryptBlock: function(t, e) {
var r = t[e + 1];
t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, c, l, f, d, s), 
r = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = r;
},
_doCryptBlock: function(t, e, r, i, n, s, a, o) {
for (var h = this._nRounds, u = t[e] ^ r[0], c = t[e + 1] ^ r[1], l = t[e + 2] ^ r[2], f = t[e + 3] ^ r[3], d = 4, g = 1; g < h; g++) {
var p = i[u >>> 24] ^ n[c >>> 16 & 255] ^ s[l >>> 8 & 255] ^ a[255 & f] ^ r[d++], v = i[c >>> 24] ^ n[l >>> 16 & 255] ^ s[f >>> 8 & 255] ^ a[255 & u] ^ r[d++], y = i[l >>> 24] ^ n[f >>> 16 & 255] ^ s[u >>> 8 & 255] ^ a[255 & c] ^ r[d++];
f = i[f >>> 24] ^ n[u >>> 16 & 255] ^ s[c >>> 8 & 255] ^ a[255 & l] ^ r[d++], u = p, 
c = v, l = y;
}
p = (o[u >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & f]) ^ r[d++], 
v = (o[c >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & u]) ^ r[d++], 
y = (o[l >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & c]) ^ r[d++], 
f = (o[f >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & l]) ^ r[d++], 
t[e] = p, t[e + 1] = v, t[e + 2] = y, t[e + 3] = f;
},
keySize: 8
});
t.AES = e._createHelper(r);
}(), function() {
function t(t, e) {
var r = (this._lBlock >>> t ^ this._rBlock) & e;
this._rBlock ^= r, this._lBlock ^= r << t;
}
function e(t, e) {
var r = (this._rBlock >>> t ^ this._lBlock) & e;
this._lBlock ^= r, this._rBlock ^= r << t;
}
var r = i, n = (s = r.lib).WordArray, s = s.BlockCipher, a = r.algo, o = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ], h = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ], u = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ], c = [ {
0: 8421888,
268435456: 32768,
536870912: 8421378,
805306368: 2,
1073741824: 512,
1342177280: 8421890,
1610612736: 8389122,
1879048192: 8388608,
2147483648: 514,
2415919104: 8389120,
2684354560: 33280,
2952790016: 8421376,
3221225472: 32770,
3489660928: 8388610,
3758096384: 0,
4026531840: 33282,
134217728: 0,
402653184: 8421890,
671088640: 33282,
939524096: 32768,
1207959552: 8421888,
1476395008: 512,
1744830464: 8421378,
2013265920: 2,
2281701376: 8389120,
2550136832: 33280,
2818572288: 8421376,
3087007744: 8389122,
3355443200: 8388610,
3623878656: 32770,
3892314112: 514,
4160749568: 8388608,
1: 32768,
268435457: 2,
536870913: 8421888,
805306369: 8388608,
1073741825: 8421378,
1342177281: 33280,
1610612737: 512,
1879048193: 8389122,
2147483649: 8421890,
2415919105: 8421376,
2684354561: 8388610,
2952790017: 33282,
3221225473: 514,
3489660929: 8389120,
3758096385: 32770,
4026531841: 0,
134217729: 8421890,
402653185: 8421376,
671088641: 8388608,
939524097: 512,
1207959553: 32768,
1476395009: 8388610,
1744830465: 2,
2013265921: 33282,
2281701377: 32770,
2550136833: 8389122,
2818572289: 514,
3087007745: 8421888,
3355443201: 8389120,
3623878657: 0,
3892314113: 33280,
4160749569: 8421378
}, {
0: 1074282512,
16777216: 16384,
33554432: 524288,
50331648: 1074266128,
67108864: 1073741840,
83886080: 1074282496,
100663296: 1073758208,
117440512: 16,
134217728: 540672,
150994944: 1073758224,
167772160: 1073741824,
184549376: 540688,
201326592: 524304,
218103808: 0,
234881024: 16400,
251658240: 1074266112,
8388608: 1073758208,
25165824: 540688,
41943040: 16,
58720256: 1073758224,
75497472: 1074282512,
92274688: 1073741824,
109051904: 524288,
125829120: 1074266128,
142606336: 524304,
159383552: 0,
176160768: 16384,
192937984: 1074266112,
209715200: 1073741840,
226492416: 540672,
243269632: 1074282496,
260046848: 16400,
268435456: 0,
285212672: 1074266128,
301989888: 1073758224,
318767104: 1074282496,
335544320: 1074266112,
352321536: 16,
369098752: 540688,
385875968: 16384,
402653184: 16400,
419430400: 524288,
436207616: 524304,
452984832: 1073741840,
469762048: 540672,
486539264: 1073758208,
503316480: 1073741824,
520093696: 1074282512,
276824064: 540688,
293601280: 524288,
310378496: 1074266112,
327155712: 16384,
343932928: 1073758208,
360710144: 1074282512,
377487360: 16,
394264576: 1073741824,
411041792: 1074282496,
427819008: 1073741840,
444596224: 1073758224,
461373440: 524304,
478150656: 0,
494927872: 16400,
511705088: 1074266128,
528482304: 540672
}, {
0: 260,
1048576: 0,
2097152: 67109120,
3145728: 65796,
4194304: 65540,
5242880: 67108868,
6291456: 67174660,
7340032: 67174400,
8388608: 67108864,
9437184: 67174656,
10485760: 65792,
11534336: 67174404,
12582912: 67109124,
13631488: 65536,
14680064: 4,
15728640: 256,
524288: 67174656,
1572864: 67174404,
2621440: 0,
3670016: 67109120,
4718592: 67108868,
5767168: 65536,
6815744: 65540,
7864320: 260,
8912896: 4,
9961472: 256,
11010048: 67174400,
12058624: 65796,
13107200: 65792,
14155776: 67109124,
15204352: 67174660,
16252928: 67108864,
16777216: 67174656,
17825792: 65540,
18874368: 65536,
19922944: 67109120,
20971520: 256,
22020096: 67174660,
23068672: 67108868,
24117248: 0,
25165824: 67109124,
26214400: 67108864,
27262976: 4,
28311552: 65792,
29360128: 67174400,
30408704: 260,
31457280: 65796,
32505856: 67174404,
17301504: 67108864,
18350080: 260,
19398656: 67174656,
20447232: 0,
21495808: 65540,
22544384: 67109120,
23592960: 256,
24641536: 67174404,
25690112: 65536,
26738688: 67174660,
27787264: 65796,
28835840: 67108868,
29884416: 67109124,
30932992: 67174400,
31981568: 4,
33030144: 65792
}, {
0: 2151682048,
65536: 2147487808,
131072: 4198464,
196608: 2151677952,
262144: 0,
327680: 4198400,
393216: 2147483712,
458752: 4194368,
524288: 2147483648,
589824: 4194304,
655360: 64,
720896: 2147487744,
786432: 2151678016,
851968: 4160,
917504: 4096,
983040: 2151682112,
32768: 2147487808,
98304: 64,
163840: 2151678016,
229376: 2147487744,
294912: 4198400,
360448: 2151682112,
425984: 0,
491520: 2151677952,
557056: 4096,
622592: 2151682048,
688128: 4194304,
753664: 4160,
819200: 2147483648,
884736: 4194368,
950272: 4198464,
1015808: 2147483712,
1048576: 4194368,
1114112: 4198400,
1179648: 2147483712,
1245184: 0,
1310720: 4160,
1376256: 2151678016,
1441792: 2151682048,
1507328: 2147487808,
1572864: 2151682112,
1638400: 2147483648,
1703936: 2151677952,
1769472: 4198464,
1835008: 2147487744,
1900544: 4194304,
1966080: 64,
2031616: 4096,
1081344: 2151677952,
1146880: 2151682112,
1212416: 0,
1277952: 4198400,
1343488: 4194368,
1409024: 2147483648,
1474560: 2147487808,
1540096: 64,
1605632: 2147483712,
1671168: 4096,
1736704: 2147487744,
1802240: 2151678016,
1867776: 4160,
1933312: 2151682048,
1998848: 4194304,
2064384: 4198464
}, {
0: 128,
4096: 17039360,
8192: 262144,
12288: 536870912,
16384: 537133184,
20480: 16777344,
24576: 553648256,
28672: 262272,
32768: 16777216,
36864: 537133056,
40960: 536871040,
45056: 553910400,
49152: 553910272,
53248: 0,
57344: 17039488,
61440: 553648128,
2048: 17039488,
6144: 553648256,
10240: 128,
14336: 17039360,
18432: 262144,
22528: 537133184,
26624: 553910272,
30720: 536870912,
34816: 537133056,
38912: 0,
43008: 553910400,
47104: 16777344,
51200: 536871040,
55296: 553648128,
59392: 16777216,
63488: 262272,
65536: 262144,
69632: 128,
73728: 536870912,
77824: 553648256,
81920: 16777344,
86016: 553910272,
90112: 537133184,
94208: 16777216,
98304: 553910400,
102400: 553648128,
106496: 17039360,
110592: 537133056,
114688: 262272,
118784: 536871040,
122880: 0,
126976: 17039488,
67584: 553648256,
71680: 16777216,
75776: 17039360,
79872: 537133184,
83968: 536870912,
88064: 17039488,
92160: 128,
96256: 553910272,
100352: 262272,
104448: 553910400,
108544: 0,
112640: 553648128,
116736: 16777344,
120832: 262144,
124928: 537133056,
129024: 536871040
}, {
0: 268435464,
256: 8192,
512: 270532608,
768: 270540808,
1024: 268443648,
1280: 2097152,
1536: 2097160,
1792: 268435456,
2048: 0,
2304: 268443656,
2560: 2105344,
2816: 8,
3072: 270532616,
3328: 2105352,
3584: 8200,
3840: 270540800,
128: 270532608,
384: 270540808,
640: 8,
896: 2097152,
1152: 2105352,
1408: 268435464,
1664: 268443648,
1920: 8200,
2176: 2097160,
2432: 8192,
2688: 268443656,
2944: 270532616,
3200: 0,
3456: 270540800,
3712: 2105344,
3968: 268435456,
4096: 268443648,
4352: 270532616,
4608: 270540808,
4864: 8200,
5120: 2097152,
5376: 268435456,
5632: 268435464,
5888: 2105344,
6144: 2105352,
6400: 0,
6656: 8,
6912: 270532608,
7168: 8192,
7424: 268443656,
7680: 270540800,
7936: 2097160,
4224: 8,
4480: 2105344,
4736: 2097152,
4992: 268435464,
5248: 268443648,
5504: 8200,
5760: 270540808,
6016: 270532608,
6272: 270540800,
6528: 270532616,
6784: 8192,
7040: 2105352,
7296: 2097160,
7552: 0,
7808: 268435456,
8064: 268443656
}, {
0: 1048576,
16: 33555457,
32: 1024,
48: 1049601,
64: 34604033,
80: 0,
96: 1,
112: 34603009,
128: 33555456,
144: 1048577,
160: 33554433,
176: 34604032,
192: 34603008,
208: 1025,
224: 1049600,
240: 33554432,
8: 34603009,
24: 0,
40: 33555457,
56: 34604032,
72: 1048576,
88: 33554433,
104: 33554432,
120: 1025,
136: 1049601,
152: 33555456,
168: 34603008,
184: 1048577,
200: 1024,
216: 34604033,
232: 1,
248: 1049600,
256: 33554432,
272: 1048576,
288: 33555457,
304: 34603009,
320: 1048577,
336: 33555456,
352: 34604032,
368: 1049601,
384: 1025,
400: 34604033,
416: 1049600,
432: 1,
448: 0,
464: 34603008,
480: 33554433,
496: 1024,
264: 1049600,
280: 33555457,
296: 34603009,
312: 1,
328: 33554432,
344: 1048576,
360: 1025,
376: 34604032,
392: 33554433,
408: 34603008,
424: 0,
440: 34604033,
456: 1049601,
472: 1024,
488: 33555456,
504: 1048577
}, {
0: 134219808,
1: 131072,
2: 134217728,
3: 32,
4: 131104,
5: 134350880,
6: 134350848,
7: 2048,
8: 134348800,
9: 134219776,
10: 133120,
11: 134348832,
12: 2080,
13: 0,
14: 134217760,
15: 133152,
2147483648: 2048,
2147483649: 134350880,
2147483650: 134219808,
2147483651: 134217728,
2147483652: 134348800,
2147483653: 133120,
2147483654: 133152,
2147483655: 32,
2147483656: 134217760,
2147483657: 2080,
2147483658: 131104,
2147483659: 134350848,
2147483660: 0,
2147483661: 134348832,
2147483662: 134219776,
2147483663: 131072,
16: 133152,
17: 134350848,
18: 32,
19: 2048,
20: 134219776,
21: 134217760,
22: 134348832,
23: 131072,
24: 0,
25: 131104,
26: 134348800,
27: 134219808,
28: 134350880,
29: 133120,
30: 2080,
31: 134217728,
2147483664: 131072,
2147483665: 2048,
2147483666: 134348832,
2147483667: 133152,
2147483668: 32,
2147483669: 134348800,
2147483670: 134217728,
2147483671: 134219808,
2147483672: 134350880,
2147483673: 134217760,
2147483674: 134219776,
2147483675: 0,
2147483676: 133120,
2147483677: 2080,
2147483678: 131104,
2147483679: 134350848
} ], l = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ], f = a.DES = s.extend({
_doReset: function() {
for (var t = this._key.words, e = [], r = 0; 56 > r; r++) {
var i = o[r] - 1;
e[r] = t[i >>> 5] >>> 31 - i % 32 & 1;
}
t = this._subKeys = [];
for (i = 0; 16 > i; i++) {
var n = t[i] = [], s = u[i];
for (r = 0; 24 > r; r++) n[r / 6 | 0] |= e[(h[r] - 1 + s) % 28] << 31 - r % 6, n[4 + (r / 6 | 0)] |= e[28 + (h[r + 24] - 1 + s) % 28] << 31 - r % 6;
n[0] = n[0] << 1 | n[0] >>> 31;
for (r = 1; 7 > r; r++) n[r] >>>= 4 * (r - 1) + 3;
n[7] = n[7] << 5 | n[7] >>> 27;
}
e = this._invSubKeys = [];
for (r = 0; 16 > r; r++) e[r] = t[15 - r];
},
encryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._subKeys);
},
decryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._invSubKeys);
},
_doCryptBlock: function(r, i, n) {
this._lBlock = r[i], this._rBlock = r[i + 1], t.call(this, 4, 252645135), t.call(this, 16, 65535), 
e.call(this, 2, 858993459), e.call(this, 8, 16711935), t.call(this, 1, 1431655765);
for (var s = 0; 16 > s; s++) {
for (var a = n[s], o = this._lBlock, h = this._rBlock, u = 0, f = 0; 8 > f; f++) u |= c[f][((h ^ a[f]) & l[f]) >>> 0];
this._lBlock = h, this._rBlock = o ^ u;
}
n = this._lBlock, this._lBlock = this._rBlock, this._rBlock = n, t.call(this, 1, 1431655765), 
e.call(this, 8, 16711935), e.call(this, 2, 858993459), t.call(this, 16, 65535), 
t.call(this, 4, 252645135), r[i] = this._lBlock, r[i + 1] = this._rBlock;
},
keySize: 2,
ivSize: 2,
blockSize: 2
});
r.DES = s._createHelper(f), a = a.TripleDES = s.extend({
_doReset: function() {
var t = this._key.words;
this._des1 = f.createEncryptor(n.create(t.slice(0, 2))), this._des2 = f.createEncryptor(n.create(t.slice(2, 4))), 
this._des3 = f.createEncryptor(n.create(t.slice(4, 6)));
},
encryptBlock: function(t, e) {
this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e);
},
decryptBlock: function(t, e) {
this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e);
},
keySize: 6,
ivSize: 2,
blockSize: 2
}), r.TripleDES = s._createHelper(a);
}(), function() {
var t = i, e = t.lib.WordArray;
t.enc.Base64 = {
stringify: function(t) {
var e = t.words, r = t.sigBytes, i = this._map;
t.clamp(), t = [];
for (var n = 0; n < r; n += 3) for (var s = (e[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 16 | (e[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255) << 8 | e[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, a = 0; 4 > a && n + .75 * a < r; a++) t.push(i.charAt(s >>> 6 * (3 - a) & 63));
if (e = i.charAt(64)) for (;t.length % 4; ) t.push(e);
return t.join("");
},
parse: function(t) {
var r = t.length, i = this._map;
(n = i.charAt(64)) && (-1 != (n = t.indexOf(n)) && (r = n));
for (var n = [], s = 0, a = 0; a < r; a++) if (a % 4) {
var o = i.indexOf(t.charAt(a - 1)) << a % 4 * 2, h = i.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
n[s >>> 2] |= (o | h) << 24 - s % 4 * 8, s++;
}
return e.create(n, s);
},
_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};
}(), function(t) {
function e(t, e, r, i, n, s, a) {
return ((t = t + (e & r | ~e & i) + n + a) << s | t >>> 32 - s) + e;
}
function r(t, e, r, i, n, s, a) {
return ((t = t + (e & i | r & ~i) + n + a) << s | t >>> 32 - s) + e;
}
function n(t, e, r, i, n, s, a) {
return ((t = t + (e ^ r ^ i) + n + a) << s | t >>> 32 - s) + e;
}
function s(t, e, r, i, n, s, a) {
return ((t = t + (r ^ (e | ~i)) + n + a) << s | t >>> 32 - s) + e;
}
for (var a = i, o = (u = a.lib).WordArray, h = u.Hasher, u = a.algo, c = [], l = 0; 64 > l; l++) c[l] = 4294967296 * t.abs(t.sin(l + 1)) | 0;
u = u.MD5 = h.extend({
_doReset: function() {
this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
},
_doProcessBlock: function(t, i) {
for (var a = 0; 16 > a; a++) {
var o = t[l = i + a];
t[l] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
}
a = this._hash.words;
var h, u, l = t[i + 0], f = (o = t[i + 1], t[i + 2]), d = t[i + 3], g = t[i + 4], p = t[i + 5], v = t[i + 6], y = t[i + 7], m = t[i + 8], x = t[i + 9], S = t[i + 10], E = t[i + 11], w = t[i + 12], b = t[i + 13], F = t[i + 14], A = t[i + 15], I = a[0], D = s(D = s(D = s(D = s(D = n(D = n(D = n(D = n(D = r(D = r(D = r(D = r(D = e(D = e(D = e(D = e(D = a[1], u = e(u = a[2], h = e(h = a[3], I = e(I, D, u, h, l, 7, c[0]), D, u, o, 12, c[1]), I, D, f, 17, c[2]), h, I, d, 22, c[3]), u = e(u, h = e(h, I = e(I, D, u, h, g, 7, c[4]), D, u, p, 12, c[5]), I, D, v, 17, c[6]), h, I, y, 22, c[7]), u = e(u, h = e(h, I = e(I, D, u, h, m, 7, c[8]), D, u, x, 12, c[9]), I, D, S, 17, c[10]), h, I, E, 22, c[11]), u = e(u, h = e(h, I = e(I, D, u, h, w, 7, c[12]), D, u, b, 12, c[13]), I, D, F, 17, c[14]), h, I, A, 22, c[15]), u = r(u, h = r(h, I = r(I, D, u, h, o, 5, c[16]), D, u, v, 9, c[17]), I, D, E, 14, c[18]), h, I, l, 20, c[19]), u = r(u, h = r(h, I = r(I, D, u, h, p, 5, c[20]), D, u, S, 9, c[21]), I, D, A, 14, c[22]), h, I, g, 20, c[23]), u = r(u, h = r(h, I = r(I, D, u, h, x, 5, c[24]), D, u, F, 9, c[25]), I, D, d, 14, c[26]), h, I, m, 20, c[27]), u = r(u, h = r(h, I = r(I, D, u, h, b, 5, c[28]), D, u, f, 9, c[29]), I, D, y, 14, c[30]), h, I, w, 20, c[31]), u = n(u, h = n(h, I = n(I, D, u, h, p, 4, c[32]), D, u, m, 11, c[33]), I, D, E, 16, c[34]), h, I, F, 23, c[35]), u = n(u, h = n(h, I = n(I, D, u, h, o, 4, c[36]), D, u, g, 11, c[37]), I, D, y, 16, c[38]), h, I, S, 23, c[39]), u = n(u, h = n(h, I = n(I, D, u, h, b, 4, c[40]), D, u, l, 11, c[41]), I, D, d, 16, c[42]), h, I, v, 23, c[43]), u = n(u, h = n(h, I = n(I, D, u, h, x, 4, c[44]), D, u, w, 11, c[45]), I, D, A, 16, c[46]), h, I, f, 23, c[47]), u = s(u, h = s(h, I = s(I, D, u, h, l, 6, c[48]), D, u, y, 10, c[49]), I, D, F, 15, c[50]), h, I, p, 21, c[51]), u = s(u, h = s(h, I = s(I, D, u, h, w, 6, c[52]), D, u, d, 10, c[53]), I, D, S, 15, c[54]), h, I, o, 21, c[55]), u = s(u, h = s(h, I = s(I, D, u, h, m, 6, c[56]), D, u, A, 10, c[57]), I, D, v, 15, c[58]), h, I, b, 21, c[59]), u = s(u, h = s(h, I = s(I, D, u, h, g, 6, c[60]), D, u, E, 10, c[61]), I, D, f, 15, c[62]), h, I, x, 21, c[63]);
a[0] = a[0] + I | 0, a[1] = a[1] + D | 0, a[2] = a[2] + u | 0, a[3] = a[3] + h | 0;
},
_doFinalize: function() {
var e = this._data, r = e.words, i = 8 * this._nDataBytes, n = 8 * e.sigBytes;
r[n >>> 5] |= 128 << 24 - n % 32;
var s = t.floor(i / 4294967296);
r[15 + (n + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
r[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
e.sigBytes = 4 * (r.length + 1), this._process(), r = (e = this._hash).words;
for (i = 0; 4 > i; i++) n = r[i], r[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
return e;
},
clone: function() {
var t = h.clone.call(this);
return t._hash = this._hash.clone(), t;
}
}), a.MD5 = h._createHelper(u), a.HmacMD5 = h._createHmacHelper(u);
}(Math), function() {
var t = i, e = (s = t.lib).WordArray, r = s.Hasher, n = [], s = t.algo.SHA1 = r.extend({
_doReset: function() {
this._hash = new e.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(t, e) {
for (var r = this._hash.words, i = r[0], s = r[1], a = r[2], o = r[3], h = r[4], u = 0; 80 > u; u++) {
if (16 > u) n[u] = 0 | t[e + u]; else {
var c = n[u - 3] ^ n[u - 8] ^ n[u - 14] ^ n[u - 16];
n[u] = c << 1 | c >>> 31;
}
c = (i << 5 | i >>> 27) + h + n[u], c = 20 > u ? c + (1518500249 + (s & a | ~s & o)) : 40 > u ? c + (1859775393 + (s ^ a ^ o)) : 60 > u ? c + ((s & a | s & o | a & o) - 1894007588) : c + ((s ^ a ^ o) - 899497514), 
h = o, o = a, a = s << 30 | s >>> 2, s = i, i = c;
}
r[0] = r[0] + i | 0, r[1] = r[1] + s | 0, r[2] = r[2] + a | 0, r[3] = r[3] + o | 0, 
r[4] = r[4] + h | 0;
},
_doFinalize: function() {
var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
return e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (i + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), 
e[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
},
clone: function() {
var t = r.clone.call(this);
return t._hash = this._hash.clone(), t;
}
});
t.SHA1 = r._createHelper(s), t.HmacSHA1 = r._createHmacHelper(s);
}(), function(t) {
for (var e = i, r = (s = e.lib).WordArray, n = s.Hasher, s = e.algo, a = [], o = [], h = function(t) {
return 4294967296 * (t - (0 | t)) | 0;
}, u = 2, c = 0; 64 > c; ) {
var l;
t: {
l = u;
for (var f = t.sqrt(l), d = 2; d <= f; d++) if (!(l % d)) {
l = !1;
break t;
}
l = !0;
}
l && (8 > c && (a[c] = h(t.pow(u, .5))), o[c] = h(t.pow(u, 1 / 3)), c++), u++;
}
var g = [];
s = s.SHA256 = n.extend({
_doReset: function() {
this._hash = new r.init(a.slice(0));
},
_doProcessBlock: function(t, e) {
for (var r = this._hash.words, i = r[0], n = r[1], s = r[2], a = r[3], h = r[4], u = r[5], c = r[6], l = r[7], f = 0; 64 > f; f++) {
if (16 > f) g[f] = 0 | t[e + f]; else {
var d = g[f - 15], p = g[f - 2];
g[f] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + g[f - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + g[f - 16];
}
d = l + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & u ^ ~h & c) + o[f] + g[f], 
p = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & n ^ i & s ^ n & s), 
l = c, c = u, u = h, h = a + d | 0, a = s, s = n, n = i, i = d + p | 0;
}
r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + s | 0, r[3] = r[3] + a | 0, 
r[4] = r[4] + h | 0, r[5] = r[5] + u | 0, r[6] = r[6] + c | 0, r[7] = r[7] + l | 0;
},
_doFinalize: function() {
var e = this._data, r = e.words, i = 8 * this._nDataBytes, n = 8 * e.sigBytes;
return r[n >>> 5] |= 128 << 24 - n % 32, r[14 + (n + 64 >>> 9 << 4)] = t.floor(i / 4294967296), 
r[15 + (n + 64 >>> 9 << 4)] = i, e.sigBytes = 4 * r.length, this._process(), this._hash;
},
clone: function() {
var t = n.clone.call(this);
return t._hash = this._hash.clone(), t;
}
});
e.SHA256 = n._createHelper(s), e.HmacSHA256 = n._createHmacHelper(s);
}(Math), function() {
var t = i, e = t.lib.WordArray, r = (n = t.algo).SHA256, n = n.SHA224 = r.extend({
_doReset: function() {
this._hash = new e.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
},
_doFinalize: function() {
var t = r._doFinalize.call(this);
return t.sigBytes -= 4, t;
}
});
t.SHA224 = r._createHelper(n), t.HmacSHA224 = r._createHmacHelper(n);
}(), function() {
function t() {
return n.create.apply(n, arguments);
}
for (var e = i, r = e.lib.Hasher, n = (a = e.x64).Word, s = a.WordArray, a = e.algo, o = [ t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591) ], h = [], u = 0; 80 > u; u++) h[u] = t();
a = a.SHA512 = r.extend({
_doReset: function() {
this._hash = new s.init([ new n.init(1779033703, 4089235720), new n.init(3144134277, 2227873595), new n.init(1013904242, 4271175723), new n.init(2773480762, 1595750129), new n.init(1359893119, 2917565137), new n.init(2600822924, 725511199), new n.init(528734635, 4215389547), new n.init(1541459225, 327033209) ]);
},
_doProcessBlock: function(t, e) {
for (var r = (l = this._hash.words)[0], i = l[1], n = l[2], s = l[3], a = l[4], u = l[5], c = l[6], l = l[7], f = r.high, d = r.low, g = i.high, p = i.low, v = n.high, y = n.low, m = s.high, x = s.low, S = a.high, E = a.low, w = u.high, b = u.low, F = c.high, A = c.low, I = l.high, D = l.low, C = f, P = d, T = g, R = p, N = v, B = y, H = m, O = x, j = S, V = E, k = w, K = b, L = F, q = A, M = I, U = D, _ = 0; 80 > _; _++) {
var G = h[_];
if (16 > _) var z = G.high = 0 | t[e + 2 * _], J = G.low = 0 | t[e + 2 * _ + 1]; else {
z = ((J = (z = h[_ - 15]).high) >>> 1 | (W = z.low) << 31) ^ (J >>> 8 | W << 24) ^ J >>> 7;
var W = (W >>> 1 | J << 31) ^ (W >>> 8 | J << 24) ^ (W >>> 7 | J << 25), X = ((J = (X = h[_ - 2]).high) >>> 19 | ($ = X.low) << 13) ^ (J << 3 | $ >>> 29) ^ J >>> 6, $ = ($ >>> 19 | J << 13) ^ ($ << 3 | J >>> 29) ^ ($ >>> 6 | J << 26), Y = (J = h[_ - 7]).high, Z = (Q = h[_ - 16]).high, Q = Q.low;
z = (z = (z = z + Y + ((J = W + J.low) >>> 0 < W >>> 0 ? 1 : 0)) + X + ((J = J + $) >>> 0 < $ >>> 0 ? 1 : 0)) + Z + ((J = J + Q) >>> 0 < Q >>> 0 ? 1 : 0);
G.high = z, G.low = J;
}
Y = j & k ^ ~j & L, Q = V & K ^ ~V & q, G = C & T ^ C & N ^ T & N;
var tt = P & R ^ P & B ^ R & B, et = (W = (C >>> 28 | P << 4) ^ (C << 30 | P >>> 2) ^ (C << 25 | P >>> 7), 
X = (P >>> 28 | C << 4) ^ (P << 30 | C >>> 2) ^ (P << 25 | C >>> 7), ($ = o[_]).high), rt = $.low;
Z = (Z = (Z = (Z = M + ((j >>> 14 | V << 18) ^ (j >>> 18 | V << 14) ^ (j << 23 | V >>> 9)) + (($ = U + ((V >>> 14 | j << 18) ^ (V >>> 18 | j << 14) ^ (V << 23 | j >>> 9))) >>> 0 < U >>> 0 ? 1 : 0)) + Y + (($ = $ + Q) >>> 0 < Q >>> 0 ? 1 : 0)) + et + (($ = $ + rt) >>> 0 < rt >>> 0 ? 1 : 0)) + z + (($ = $ + J) >>> 0 < J >>> 0 ? 1 : 0), 
G = W + G + ((J = X + tt) >>> 0 < X >>> 0 ? 1 : 0), M = L, U = q, L = k, q = K, 
k = j, K = V, j = H + Z + ((V = O + $ | 0) >>> 0 < O >>> 0 ? 1 : 0) | 0, H = N, 
O = B, N = T, B = R, T = C, R = P, C = Z + G + ((P = $ + J | 0) >>> 0 < $ >>> 0 ? 1 : 0) | 0;
}
d = r.low = d + P, r.high = f + C + (d >>> 0 < P >>> 0 ? 1 : 0), p = i.low = p + R, 
i.high = g + T + (p >>> 0 < R >>> 0 ? 1 : 0), y = n.low = y + B, n.high = v + N + (y >>> 0 < B >>> 0 ? 1 : 0), 
x = s.low = x + O, s.high = m + H + (x >>> 0 < O >>> 0 ? 1 : 0), E = a.low = E + V, 
a.high = S + j + (E >>> 0 < V >>> 0 ? 1 : 0), b = u.low = b + K, u.high = w + k + (b >>> 0 < K >>> 0 ? 1 : 0), 
A = c.low = A + q, c.high = F + L + (A >>> 0 < q >>> 0 ? 1 : 0), D = l.low = D + U, 
l.high = I + M + (D >>> 0 < U >>> 0 ? 1 : 0);
},
_doFinalize: function() {
var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
return e[i >>> 5] |= 128 << 24 - i % 32, e[30 + (i + 128 >>> 10 << 5)] = Math.floor(r / 4294967296), 
e[31 + (i + 128 >>> 10 << 5)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32();
},
clone: function() {
var t = r.clone.call(this);
return t._hash = this._hash.clone(), t;
},
blockSize: 32
}), e.SHA512 = r._createHelper(a), e.HmacSHA512 = r._createHmacHelper(a);
}(), function() {
var t = i, e = (s = t.x64).Word, r = s.WordArray, n = (s = t.algo).SHA512, s = s.SHA384 = n.extend({
_doReset: function() {
this._hash = new r.init([ new e.init(3418070365, 3238371032), new e.init(1654270250, 914150663), new e.init(2438529370, 812702999), new e.init(355462360, 4144912697), new e.init(1731405415, 4290775857), new e.init(2394180231, 1750603025), new e.init(3675008525, 1694076839), new e.init(1203062813, 3204075428) ]);
},
_doFinalize: function() {
var t = n._doFinalize.call(this);
return t.sigBytes -= 16, t;
}
});
t.SHA384 = n._createHelper(s), t.HmacSHA384 = n._createHmacHelper(s);
}(), function() {
var t = i, e = (n = t.lib).WordArray, r = n.Hasher, n = t.algo, s = e.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]), a = e.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]), o = e.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]), h = e.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]), u = e.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]), c = e.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]);
n = n.RIPEMD160 = r.extend({
_doReset: function() {
this._hash = e.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(t, e) {
for (var r = 0; 16 > r; r++) {
var i = t[S = e + r];
t[S] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
}
var n, l, f, d, g, p, v, y, m, x, S = this._hash.words, E = (i = u.words, c.words), w = s.words, b = a.words, F = o.words, A = h.words;
p = n = S[0], v = l = S[1], y = f = S[2], m = d = S[3], x = g = S[4];
var I;
for (r = 0; 80 > r; r += 1) I = n + t[e + w[r]] | 0, I = 16 > r ? I + ((l ^ f ^ d) + i[0]) : 32 > r ? I + ((l & f | ~l & d) + i[1]) : 48 > r ? I + (((l | ~f) ^ d) + i[2]) : 64 > r ? I + ((l & d | f & ~d) + i[3]) : I + ((l ^ (f | ~d)) + i[4]), 
I = (I = (I |= 0) << F[r] | I >>> 32 - F[r]) + g | 0, n = g, g = d, d = f << 10 | f >>> 22, 
f = l, l = I, I = p + t[e + b[r]] | 0, I = 16 > r ? I + ((v ^ (y | ~m)) + E[0]) : 32 > r ? I + ((v & m | y & ~m) + E[1]) : 48 > r ? I + (((v | ~y) ^ m) + E[2]) : 64 > r ? I + ((v & y | ~v & m) + E[3]) : I + ((v ^ y ^ m) + E[4]), 
I = (I = (I |= 0) << A[r] | I >>> 32 - A[r]) + x | 0, p = x, x = m, m = y << 10 | y >>> 22, 
y = v, v = I;
I = S[1] + f + m | 0, S[1] = S[2] + d + x | 0, S[2] = S[3] + g + p | 0, S[3] = S[4] + n + v | 0, 
S[4] = S[0] + l + y | 0, S[0] = I;
},
_doFinalize: function() {
var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
t.sigBytes = 4 * (e.length + 1), this._process(), e = (t = this._hash).words;
for (r = 0; 5 > r; r++) i = e[r], e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
return t;
},
clone: function() {
var t = r.clone.call(this);
return t._hash = this._hash.clone(), t;
}
});
t.RIPEMD160 = r._createHelper(n), t.HmacRIPEMD160 = r._createHmacHelper(n);
}(Math), function() {
var t = i, e = t.enc.Utf8;
t.algo.HMAC = t.lib.Base.extend({
init: function(t, r) {
t = this._hasher = new t.init(), "string" == typeof r && (r = e.parse(r));
var i = t.blockSize, n = 4 * i;
r.sigBytes > n && (r = t.finalize(r)), r.clamp();
for (var s = this._oKey = r.clone(), a = this._iKey = r.clone(), o = s.words, h = a.words, u = 0; u < i; u++) o[u] ^= 1549556828, 
h[u] ^= 909522486;
s.sigBytes = a.sigBytes = n, this.reset();
},
reset: function() {
var t = this._hasher;
t.reset(), t.update(this._iKey);
},
update: function(t) {
return this._hasher.update(t), this;
},
finalize: function(t) {
var e = this._hasher;
return t = e.finalize(t), e.reset(), e.finalize(this._oKey.clone().concat(t));
}
});
}(), function() {
var t, e = i, r = (t = e.lib).Base, n = t.WordArray, s = (t = e.algo).HMAC, a = t.PBKDF2 = r.extend({
cfg: r.extend({
keySize: 4,
hasher: t.SHA1,
iterations: 1
}),
init: function(t) {
this.cfg = this.cfg.extend(t);
},
compute: function(t, e) {
var r = this.cfg, i = s.create(r.hasher, t), a = n.create(), o = n.create([ 1 ]), h = a.words, u = o.words, c = r.keySize;
for (r = r.iterations; h.length < c; ) {
var l = i.update(e).finalize(o);
i.reset();
for (var f = l.words, d = f.length, g = l, p = 1; p < r; p++) {
g = i.finalize(g), i.reset();
for (var v = g.words, y = 0; y < d; y++) f[y] ^= v[y];
}
a.concat(l), u[0]++;
}
return a.sigBytes = 4 * c, a;
}
});
e.PBKDF2 = function(t, e, r) {
return a.create(r).compute(t, e);
};
}();
var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = "=";
function a(t) {
var e, r, i = "";
for (e = 0; e + 3 <= t.length; e += 3) r = parseInt(t.substring(e, e + 3), 16), 
i += n.charAt(r >> 6) + n.charAt(63 & r);
e + 1 == t.length ? (r = parseInt(t.substring(e, e + 1), 16), i += n.charAt(r << 2)) : e + 2 == t.length && (r = parseInt(t.substring(e, e + 2), 16), 
i += n.charAt(r >> 2) + n.charAt((3 & r) << 4));
if (s) for (;(3 & i.length) > 0; ) i += s;
return i;
}
function o(t) {
var e, r, i, a = "", o = 0;
for (e = 0; e < t.length && t.charAt(e) != s; ++e) (i = n.indexOf(t.charAt(e))) < 0 || (0 == o ? (a += v(i >> 2), 
r = 3 & i, o = 1) : 1 == o ? (a += v(r << 2 | i >> 4), r = 15 & i, o = 2) : 2 == o ? (a += v(r), 
a += v(i >> 2), r = 3 & i, o = 3) : (a += v(r << 2 | i >> 4), a += v(15 & i), o = 0));
return 1 == o && (a += v(r << 2)), a;
}
function h(t) {
var e, r = o(t), i = new Array();
for (e = 0; 2 * e < r.length; ++e) i[e] = parseInt(r.substring(2 * e, 2 * e + 2), 16);
return i;
}
var u;
function c(t, e, r) {
null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
}
function l() {
return new c(null);
}
"Microsoft Internet Explorer" == e.appName ? (c.prototype.am = function(t, e, r, i, n, s) {
for (var a = 32767 & e, o = e >> 15; --s >= 0; ) {
var h = 32767 & this[t], u = this[t++] >> 15, c = o * h + u * a;
n = ((h = a * h + ((32767 & c) << 15) + r[i] + (1073741823 & n)) >>> 30) + (c >>> 15) + o * u + (n >>> 30), 
r[i++] = 1073741823 & h;
}
return n;
}, u = 30) : "Netscape" != e.appName ? (c.prototype.am = function(t, e, r, i, n, s) {
for (;--s >= 0; ) {
var a = e * this[t++] + r[i] + n;
n = Math.floor(a / 67108864), r[i++] = 67108863 & a;
}
return n;
}, u = 26) : (c.prototype.am = function(t, e, r, i, n, s) {
for (var a = 16383 & e, o = e >> 14; --s >= 0; ) {
var h = 16383 & this[t], u = this[t++] >> 14, c = o * h + u * a;
n = ((h = a * h + ((16383 & c) << 14) + r[i] + n) >> 28) + (c >> 14) + o * u, r[i++] = 268435455 & h;
}
return n;
}, u = 28);
c.prototype.DB = u, c.prototype.DM = (1 << u) - 1, c.prototype.DV = 1 << u;
c.prototype.FV = Math.pow(2, 52), c.prototype.F1 = 52 - u, c.prototype.F2 = 2 * u - 52;
var f, d, g = "0123456789abcdefghijklmnopqrstuvwxyz", p = new Array();
f = "0".charCodeAt(0);
for (d = 0; d <= 9; ++d) p[f++] = d;
f = "a".charCodeAt(0);
for (d = 10; d < 36; ++d) p[f++] = d;
f = "A".charCodeAt(0);
for (d = 10; d < 36; ++d) p[f++] = d;
function v(t) {
return g.charAt(t);
}
function y(t, e) {
var r = p[t.charCodeAt(e)];
return null == r ? -1 : r;
}
function m(t) {
var e = l();
return e.fromInt(t), e;
}
function x(t) {
var e, r = 1;
return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 
0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, 
r += 1), r;
}
function S(t) {
this.m = t;
}
S.prototype.convert = function(t) {
return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
}, S.prototype.revert = function(t) {
return t;
}, S.prototype.reduce = function(t) {
t.divRemTo(this.m, null, t);
}, S.prototype.mulTo = function(t, e, r) {
t.multiplyTo(e, r), this.reduce(r);
}, S.prototype.sqrTo = function(t, e) {
t.squareTo(e), this.reduce(e);
};
function E(t) {
this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
}
E.prototype.convert = function(t) {
var e = l();
return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(c.ZERO) > 0 && this.m.subTo(e, e), 
e;
}, E.prototype.revert = function(t) {
var e = l();
return t.copyTo(e), this.reduce(e), e;
}, E.prototype.reduce = function(t) {
for (;t.t <= this.mt2; ) t[t.t++] = 0;
for (var e = 0; e < this.m.t; ++e) {
var r = 32767 & t[e], i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t);
for (;t[r] >= t.DV; ) t[r] -= t.DV, t[++r]++;
}
t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
}, E.prototype.mulTo = function(t, e, r) {
t.multiplyTo(e, r), this.reduce(r);
}, E.prototype.sqrTo = function(t, e) {
t.squareTo(e), this.reduce(e);
};
c.prototype.copyTo = function(t) {
for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
t.t = this.t, t.s = this.s;
}, c.prototype.fromInt = function(t) {
this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
}, c.prototype.fromString = function(t, e) {
var r;
if (16 == e) r = 4; else if (8 == e) r = 3; else if (256 == e) r = 8; else if (2 == e) r = 1; else if (32 == e) r = 5; else {
if (4 != e) {
this.fromRadix(t, e);
return;
}
r = 2;
}
this.t = 0, this.s = 0;
for (var i = t.length, n = !1, s = 0; --i >= 0; ) {
var a = 8 == r ? 255 & t[i] : y(t, i);
a < 0 ? "-" == t.charAt(i) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = a : s + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, 
this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += r) >= this.DB && (s -= this.DB));
}
8 == r && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), 
this.clamp(), n && c.ZERO.subTo(this, this);
}, c.prototype.clamp = function() {
for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
}, c.prototype.dlShiftTo = function(t, e) {
var r;
for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
for (r = t - 1; r >= 0; --r) e[r] = 0;
e.t = this.t + t, e.s = this.s;
}, c.prototype.drShiftTo = function(t, e) {
for (var r = t; r < this.t; ++r) e[r - t] = this[r];
e.t = Math.max(this.t - t, 0), e.s = this.s;
}, c.prototype.lShiftTo = function(t, e) {
var r, i = t % this.DB, n = this.DB - i, s = (1 << n) - 1, a = Math.floor(t / this.DB), o = this.s << i & this.DM;
for (r = this.t - 1; r >= 0; --r) e[r + a + 1] = this[r] >> n | o, o = (this[r] & s) << i;
for (r = a - 1; r >= 0; --r) e[r] = 0;
e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp();
}, c.prototype.rShiftTo = function(t, e) {
e.s = this.s;
var r = Math.floor(t / this.DB);
if (r >= this.t) e.t = 0; else {
var i = t % this.DB, n = this.DB - i, s = (1 << i) - 1;
e[0] = this[r] >> i;
for (var a = r + 1; a < this.t; ++a) e[a - r - 1] |= (this[a] & s) << n, e[a - r] = this[a] >> i;
i > 0 && (e[this.t - r - 1] |= (this.s & s) << n), e.t = this.t - r, e.clamp();
}
}, c.prototype.subTo = function(t, e) {
for (var r = 0, i = 0, n = Math.min(t.t, this.t); r < n; ) i += this[r] - t[r], 
e[r++] = i & this.DM, i >>= this.DB;
if (t.t < this.t) {
i -= t.s;
for (;r < this.t; ) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
i += this.s;
} else {
i += this.s;
for (;r < t.t; ) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
i -= t.s;
}
e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i), e.t = r, 
e.clamp();
}, c.prototype.multiplyTo = function(t, e) {
var r = this.abs(), i = t.abs(), n = r.t;
e.t = n + i.t;
for (;--n >= 0; ) e[n] = 0;
for (n = 0; n < i.t; ++n) e[n + r.t] = r.am(0, i[n], e, n, 0, r.t);
e.s = 0, e.clamp(), this.s != t.s && c.ZERO.subTo(e, e);
}, c.prototype.squareTo = function(t) {
for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0; ) t[r] = 0;
for (r = 0; r < e.t - 1; ++r) {
var i = e.am(r, e[r], t, 2 * r, 0, 1);
(t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, 
t[r + e.t + 1] = 1);
}
t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
}, c.prototype.divRemTo = function(t, e, r) {
var i = t.abs();
if (!(i.t <= 0)) {
var n = this.abs();
if (n.t < i.t) {
null != e && e.fromInt(0);
null != r && this.copyTo(r);
} else {
null == r && (r = l());
var s = l(), a = this.s, o = t.s, h = this.DB - x(i[i.t - 1]);
h > 0 ? (i.lShiftTo(h, s), n.lShiftTo(h, r)) : (i.copyTo(s), n.copyTo(r));
var u = s.t, f = s[u - 1];
if (0 != f) {
var d = f * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0), g = this.FV / d, p = (1 << this.F1) / d, v = 1 << this.F2, y = r.t, m = y - u, S = null == e ? l() : e;
s.dlShiftTo(m, S);
r.compareTo(S) >= 0 && (r[r.t++] = 1, r.subTo(S, r));
c.ONE.dlShiftTo(u, S), S.subTo(s, s);
for (;s.t < u; ) s[s.t++] = 0;
for (;--m >= 0; ) {
var E = r[--y] == f ? this.DM : Math.floor(r[y] * g + (r[y - 1] + v) * p);
if ((r[y] += s.am(0, E, r, m, 0, u)) < E) {
s.dlShiftTo(m, S), r.subTo(S, r);
for (;r[y] < --E; ) r.subTo(S, r);
}
}
null != e && (r.drShiftTo(u, e), a != o && c.ZERO.subTo(e, e)), r.t = u, r.clamp(), 
h > 0 && r.rShiftTo(h, r), a < 0 && c.ZERO.subTo(r, r);
}
}
}
}, c.prototype.invDigit = function() {
if (this.t < 1) return 0;
var t = this[0];
if (0 == (1 & t)) return 0;
var e = 3 & t;
return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
}, c.prototype.isEven = function() {
return 0 == (this.t > 0 ? 1 & this[0] : this.s);
}, c.prototype.exp = function(t, e) {
if (t > 4294967295 || t < 1) return c.ONE;
var r = l(), i = l(), n = e.convert(this), s = x(t) - 1;
n.copyTo(r);
for (;--s >= 0; ) {
e.sqrTo(r, i);
if ((t & 1 << s) > 0) e.mulTo(i, n, r); else {
var a = r;
r = i, i = a;
}
}
return e.revert(r);
}, c.prototype.toString = function(t) {
if (this.s < 0) return "-" + this.negate().toString(t);
var e;
if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
if (4 != t) return this.toRadix(t);
e = 2;
}
var r, i = (1 << e) - 1, n = !1, s = "", a = this.t, o = this.DB - a * this.DB % e;
if (a-- > 0) {
o < this.DB && (r = this[a] >> o) > 0 && (n = !0, s = v(r));
for (;a >= 0; ) o < e ? (r = (this[a] & (1 << o) - 1) << e - o, r |= this[--a] >> (o += this.DB - e)) : (r = this[a] >> (o -= e) & i, 
o <= 0 && (o += this.DB, --a)), r > 0 && (n = !0), n && (s += v(r));
}
return n ? s : "0";
}, c.prototype.negate = function() {
var t = l();
return c.ZERO.subTo(this, t), t;
}, c.prototype.abs = function() {
return this.s < 0 ? this.negate() : this;
}, c.prototype.compareTo = function(t) {
var e = this.s - t.s;
if (0 != e) return e;
var r = this.t;
if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
for (;--r >= 0; ) if (0 != (e = this[r] - t[r])) return e;
return 0;
}, c.prototype.bitLength = function() {
return this.t <= 0 ? 0 : this.DB * (this.t - 1) + x(this[this.t - 1] ^ this.s & this.DM);
}, c.prototype.mod = function(t) {
var e = l();
return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(c.ZERO) > 0 && t.subTo(e, e), 
e;
}, c.prototype.modPowInt = function(t, e) {
var r;
return r = t < 256 || e.isEven() ? new S(e) : new E(e), this.exp(t, r);
}, c.ZERO = m(0), c.ONE = m(1);
function w(t, e) {
return t & e;
}
function b(t, e) {
return t | e;
}
function F(t, e) {
return t ^ e;
}
function A(t, e) {
return t & ~e;
}
function I(t) {
if (0 == t) return -1;
var e = 0;
return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 
0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, 
e;
}
function D(t) {
for (var e = 0; 0 != t; ) t &= t - 1, ++e;
return e;
}
function C() {}
function P(t) {
return t;
}
C.prototype.convert = P, C.prototype.revert = P, C.prototype.mulTo = function(t, e, r) {
t.multiplyTo(e, r);
}, C.prototype.sqrTo = function(t, e) {
t.squareTo(e);
};
function T(t) {
this.r2 = l(), this.q3 = l(), c.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), 
this.m = t;
}
T.prototype.convert = function(t) {
if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
if (t.compareTo(this.m) < 0) return t;
var e = l();
return t.copyTo(e), this.reduce(e), e;
}, T.prototype.revert = function(t) {
return t;
}, T.prototype.reduce = function(t) {
t.drShiftTo(this.m.t - 1, this.r2);
t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp());
this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
for (;t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
t.subTo(this.r2, t);
for (;t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
}, T.prototype.mulTo = function(t, e, r) {
t.multiplyTo(e, r), this.reduce(r);
}, T.prototype.sqrTo = function(t, e) {
t.squareTo(e), this.reduce(e);
};
var R = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], N = (1 << 26) / R[R.length - 1];
c.prototype.chunkSize = function(t) {
return Math.floor(Math.LN2 * this.DB / Math.log(t));
}, c.prototype.toRadix = function(t) {
null == t && (t = 10);
if (0 == this.signum() || t < 2 || t > 36) return "0";
var e = this.chunkSize(t), r = Math.pow(t, e), i = m(r), n = l(), s = l(), a = "";
this.divRemTo(i, n, s);
for (;n.signum() > 0; ) a = (r + s.intValue()).toString(t).substr(1) + a, n.divRemTo(i, n, s);
return s.intValue().toString(t) + a;
}, c.prototype.fromRadix = function(t, e) {
this.fromInt(0);
null == e && (e = 10);
for (var r = this.chunkSize(e), i = Math.pow(e, r), n = !1, s = 0, a = 0, o = 0; o < t.length; ++o) {
var h = y(t, o);
h < 0 ? "-" == t.charAt(o) && 0 == this.signum() && (n = !0) : (a = e * a + h, ++s >= r && (this.dMultiply(i), 
this.dAddOffset(a, 0), s = 0, a = 0));
}
s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)), n && c.ZERO.subTo(this, this);
}, c.prototype.fromNumber = function(t, e, r) {
if ("number" == typeof e) if (t < 2) this.fromInt(1); else {
this.fromNumber(t, r);
!this.testBit(t - 1) && this.bitwiseTo(c.ONE.shiftLeft(t - 1), b, this);
this.isEven() && this.dAddOffset(1, 0);
for (;!this.isProbablePrime(e); ) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(c.ONE.shiftLeft(t - 1), this);
} else {
var i = new Array(), n = 7 & t;
i.length = 1 + (t >> 3), e.nextBytes(i), n > 0 ? i[0] &= (1 << n) - 1 : i[0] = 0, 
this.fromString(i, 256);
}
}, c.prototype.bitwiseTo = function(t, e, r) {
var i, n, s = Math.min(t.t, this.t);
for (i = 0; i < s; ++i) r[i] = e(this[i], t[i]);
if (t.t < this.t) {
n = t.s & this.DM;
for (i = s; i < this.t; ++i) r[i] = e(this[i], n);
r.t = this.t;
} else {
n = this.s & this.DM;
for (i = s; i < t.t; ++i) r[i] = e(n, t[i]);
r.t = t.t;
}
r.s = e(this.s, t.s), r.clamp();
}, c.prototype.changeBit = function(t, e) {
var r = c.ONE.shiftLeft(t);
return this.bitwiseTo(r, e, r), r;
}, c.prototype.addTo = function(t, e) {
for (var r = 0, i = 0, n = Math.min(t.t, this.t); r < n; ) i += this[r] + t[r], 
e[r++] = i & this.DM, i >>= this.DB;
if (t.t < this.t) {
i += t.s;
for (;r < this.t; ) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
i += this.s;
} else {
i += this.s;
for (;r < t.t; ) i += t[r], e[r++] = i & this.DM, i >>= this.DB;
i += t.s;
}
e.s = i < 0 ? -1 : 0, i > 0 ? e[r++] = i : i < -1 && (e[r++] = this.DV + i), e.t = r, 
e.clamp();
}, c.prototype.dMultiply = function(t) {
this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
}, c.prototype.dAddOffset = function(t, e) {
if (0 != t) {
for (;this.t <= e; ) this[this.t++] = 0;
this[e] += t;
for (;this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), 
++this[e];
}
}, c.prototype.multiplyLowerTo = function(t, e, r) {
var i, n = Math.min(this.t + t.t, e);
r.s = 0, r.t = n;
for (;n > 0; ) r[--n] = 0;
for (i = r.t - this.t; n < i; ++n) r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
for (i = Math.min(t.t, e); n < i; ++n) this.am(0, t[n], r, n, 0, e - n);
r.clamp();
}, c.prototype.multiplyUpperTo = function(t, e, r) {
--e;
var i = r.t = this.t + t.t - e;
r.s = 0;
for (;--i >= 0; ) r[i] = 0;
for (i = Math.max(e - this.t, 0); i < t.t; ++i) r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
r.clamp(), r.drShiftTo(1, r);
}, c.prototype.modInt = function(t) {
if (t <= 0) return 0;
var e = this.DV % t, r = this.s < 0 ? t - 1 : 0;
if (this.t > 0) if (0 == e) r = this[0] % t; else for (var i = this.t - 1; i >= 0; --i) r = (e * r + this[i]) % t;
return r;
}, c.prototype.millerRabin = function(t) {
var e = this.subtract(c.ONE), r = e.getLowestSetBit();
if (r <= 0) return !1;
var i = e.shiftRight(r);
(t = t + 1 >> 1) > R.length && (t = R.length);
for (var n = l(), s = 0; s < t; ++s) {
n.fromInt(R[Math.floor(Math.random() * R.length)]);
var a = n.modPow(i, this);
if (0 != a.compareTo(c.ONE) && 0 != a.compareTo(e)) {
for (var o = 1; o++ < r && 0 != a.compareTo(e); ) if (0 == (a = a.modPowInt(2, this)).compareTo(c.ONE)) return !1;
if (0 != a.compareTo(e)) return !1;
}
}
return !0;
}, c.prototype.clone = function() {
var t = l();
return this.copyTo(t), t;
}, c.prototype.intValue = function() {
if (this.s < 0) {
if (1 == this.t) return this[0] - this.DV;
if (0 == this.t) return -1;
} else {
if (1 == this.t) return this[0];
if (0 == this.t) return 0;
}
return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
}, c.prototype.byteValue = function() {
return 0 == this.t ? this.s : this[0] << 24 >> 24;
}, c.prototype.shortValue = function() {
return 0 == this.t ? this.s : this[0] << 16 >> 16;
}, c.prototype.signum = function() {
return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
}, c.prototype.toByteArray = function() {
var t = this.t, e = new Array();
e[0] = this.s;
var r, i = this.DB - t * this.DB % 8, n = 0;
if (t-- > 0) {
i < this.DB && (r = this[t] >> i) != (this.s & this.DM) >> i && (e[n++] = r | this.s << this.DB - i);
for (;t >= 0; ) i < 8 ? (r = (this[t] & (1 << i) - 1) << 8 - i, r |= this[--t] >> (i += this.DB - 8)) : (r = this[t] >> (i -= 8) & 255, 
i <= 0 && (i += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 == n && (128 & this.s) != (128 & r) && ++n, 
(n > 0 || r != this.s) && (e[n++] = r);
}
return e;
}, c.prototype.equals = function(t) {
return 0 == this.compareTo(t);
}, c.prototype.min = function(t) {
return this.compareTo(t) < 0 ? this : t;
}, c.prototype.max = function(t) {
return this.compareTo(t) > 0 ? this : t;
}, c.prototype.and = function(t) {
var e = l();
return this.bitwiseTo(t, w, e), e;
}, c.prototype.or = function(t) {
var e = l();
return this.bitwiseTo(t, b, e), e;
}, c.prototype.xor = function(t) {
var e = l();
return this.bitwiseTo(t, F, e), e;
}, c.prototype.andNot = function(t) {
var e = l();
return this.bitwiseTo(t, A, e), e;
}, c.prototype.not = function() {
for (var t = l(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
return t.t = this.t, t.s = ~this.s, t;
}, c.prototype.shiftLeft = function(t) {
var e = l();
return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
}, c.prototype.shiftRight = function(t) {
var e = l();
return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
}, c.prototype.getLowestSetBit = function() {
for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + I(this[t]);
return this.s < 0 ? this.t * this.DB : -1;
}, c.prototype.bitCount = function() {
for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r) t += D(this[r] ^ e);
return t;
}, c.prototype.testBit = function(t) {
var e = Math.floor(t / this.DB);
return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
}, c.prototype.setBit = function(t) {
return this.changeBit(t, b);
}, c.prototype.clearBit = function(t) {
return this.changeBit(t, A);
}, c.prototype.flipBit = function(t) {
return this.changeBit(t, F);
}, c.prototype.add = function(t) {
var e = l();
return this.addTo(t, e), e;
}, c.prototype.subtract = function(t) {
var e = l();
return this.subTo(t, e), e;
}, c.prototype.multiply = function(t) {
var e = l();
return this.multiplyTo(t, e), e;
}, c.prototype.divide = function(t) {
var e = l();
return this.divRemTo(t, e, null), e;
}, c.prototype.remainder = function(t) {
var e = l();
return this.divRemTo(t, null, e), e;
}, c.prototype.divideAndRemainder = function(t) {
var e = l(), r = l();
return this.divRemTo(t, e, r), new Array(e, r);
}, c.prototype.modPow = function(t, e) {
var r, i, n = t.bitLength(), s = m(1);
if (n <= 0) return s;
r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6;
i = n < 8 ? new S(e) : e.isEven() ? new T(e) : new E(e);
var a = new Array(), o = 3, h = r - 1, u = (1 << r) - 1;
a[1] = i.convert(this);
if (r > 1) {
var c = l();
i.sqrTo(a[1], c);
for (;o <= u; ) a[o] = l(), i.mulTo(c, a[o - 2], a[o]), o += 2;
}
var f, d, g = t.t - 1, p = !0, v = l();
n = x(t[g]) - 1;
for (;g >= 0; ) {
n >= h ? f = t[g] >> n - h & u : (f = (t[g] & (1 << n + 1) - 1) << h - n, g > 0 && (f |= t[g - 1] >> this.DB + n - h));
o = r;
for (;0 == (1 & f); ) f >>= 1, --o;
(n -= o) < 0 && (n += this.DB, --g);
if (p) a[f].copyTo(s), p = !1; else {
for (;o > 1; ) i.sqrTo(s, v), i.sqrTo(v, s), o -= 2;
o > 0 ? i.sqrTo(s, v) : (d = s, s = v, v = d), i.mulTo(v, a[f], s);
}
for (;g >= 0 && 0 == (t[g] & 1 << n); ) i.sqrTo(s, v), d = s, s = v, v = d, --n < 0 && (n = this.DB - 1, 
--g);
}
return i.revert(s);
}, c.prototype.modInverse = function(t) {
var e = t.isEven();
if (this.isEven() && e || 0 == t.signum()) return c.ZERO;
for (var r = t.clone(), i = this.clone(), n = m(1), s = m(0), a = m(0), o = m(1); 0 != r.signum(); ) {
for (;r.isEven(); ) r.rShiftTo(1, r), e ? ((!n.isEven() || !s.isEven()) && (n.addTo(this, n), 
s.subTo(t, s)), n.rShiftTo(1, n)) : !s.isEven() && s.subTo(t, s), s.rShiftTo(1, s);
for (;i.isEven(); ) i.rShiftTo(1, i), e ? ((!a.isEven() || !o.isEven()) && (a.addTo(this, a), 
o.subTo(t, o)), a.rShiftTo(1, a)) : !o.isEven() && o.subTo(t, o), o.rShiftTo(1, o);
r.compareTo(i) >= 0 ? (r.subTo(i, r), e && n.subTo(a, n), s.subTo(o, s)) : (i.subTo(r, i), 
e && a.subTo(n, a), o.subTo(s, o));
}
if (0 != i.compareTo(c.ONE)) return c.ZERO;
if (o.compareTo(t) >= 0) return o.subtract(t);
if (!(o.signum() < 0)) return o;
o.addTo(t, o);
return o.signum() < 0 ? o.add(t) : o;
}, c.prototype.pow = function(t) {
return this.exp(t, new C());
}, c.prototype.gcd = function(t) {
var e = this.s < 0 ? this.negate() : this.clone(), r = t.s < 0 ? t.negate() : t.clone();
if (e.compareTo(r) < 0) {
var i = e;
e = r, r = i;
}
var n = e.getLowestSetBit(), s = r.getLowestSetBit();
if (s < 0) return e;
n < s && (s = n);
s > 0 && (e.rShiftTo(s, e), r.rShiftTo(s, r));
for (;e.signum() > 0; ) (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e), (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r), 
e.compareTo(r) >= 0 ? (e.subTo(r, e), e.rShiftTo(1, e)) : (r.subTo(e, r), r.rShiftTo(1, r));
return s > 0 && r.lShiftTo(s, r), r;
}, c.prototype.isProbablePrime = function(t) {
var e, r = this.abs();
if (1 == r.t && r[0] <= R[R.length - 1]) {
for (e = 0; e < R.length; ++e) if (r[0] == R[e]) return !0;
return !1;
}
if (r.isEven()) return !1;
e = 1;
for (;e < R.length; ) {
for (var i = R[e], n = e + 1; n < R.length && i < N; ) i *= R[n++];
i = r.modInt(i);
for (;e < n; ) if (i % R[e++] == 0) return !1;
}
return r.millerRabin(t);
}, c.prototype.square = function() {
var t = l();
return this.squareTo(t), t;
};
function B() {
this.i = 0, this.j = 0, this.S = new Array();
}
B.prototype.init = function(t) {
var e, r, i;
for (e = 0; e < 256; ++e) this.S[e] = e;
r = 0;
for (e = 0; e < 256; ++e) r = r + this.S[e] + t[e % t.length] & 255, i = this.S[e], 
this.S[e] = this.S[r], this.S[r] = i;
this.i = 0, this.j = 0;
}, B.prototype.next = function() {
var t;
return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], 
this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
};
var H, O, j, V, k, K, L, q = 256;
function M(t) {
O[j++] ^= 255 & t, O[j++] ^= t >> 8 & 255, O[j++] ^= t >> 16 & 255, O[j++] ^= t >> 24 & 255, 
j >= q && (j -= q);
}
function U() {
M(new Date().getTime());
}
if (null == O) {
O = new Array(), j = 0;
if (void 0 !== r && (void 0 !== r.crypto || void 0 !== r.msCrypto)) if ((k = r.crypto || r.msCrypto).getRandomValues) {
K = new Uint8Array(32), k.getRandomValues(K);
for (V = 0; V < 32; ++V) O[j++] = K[V];
} else if ("Netscape" == e.appName && e.appVersion < "5") {
L = r.crypto.random(32);
for (V = 0; V < L.length; ++V) O[j++] = 255 & L.charCodeAt(V);
}
for (;j < q; ) V = Math.floor(65536 * Math.random()), O[j++] = V >>> 8, O[j++] = 255 & V;
j = 0, U();
}
function _() {
if (null == H) {
U(), (H = new B()).init(O);
for (j = 0; j < O.length; ++j) O[j] = 0;
j = 0;
}
return H.next();
}
function G() {}
G.prototype.nextBytes = function(t) {
var e;
for (e = 0; e < t.length; ++e) t[e] = _();
};
function z(t, e) {
return new c(t, e);
}
function J() {
this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
this.dmq1 = null, this.coeff = null;
}
J.prototype.doPublic = function(t) {
return t.modPowInt(this.e, this.n);
}, J.prototype.setPublic = function(t, e) {
this.isPublic = !0, this.isPrivate = !1;
if ("string" != typeof t) this.n = t, this.e = e; else {
if (!(null != t && null != e && t.length > 0 && e.length > 0)) throw "Invalid RSA public key";
this.n = z(t, 16), this.e = parseInt(e, 16);
}
}, J.prototype.type = "RSA";
J.prototype.doPrivate = function(t) {
if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
for (var e = t.mod(this.p).modPow(this.dmp1, this.p), r = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(r) < 0; ) e = e.add(this.p);
return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r);
}, J.prototype.setPrivate = function(t, e, r) {
this.isPrivate = !0;
if ("string" != typeof t) this.n = t, this.e = e, this.d = r; else {
if (!(null != t && null != e && t.length > 0 && e.length > 0)) throw "Invalid RSA private key";
this.n = z(t, 16), this.e = parseInt(e, 16), this.d = z(r, 16);
}
}, J.prototype.setPrivateEx = function(t, e, r, i, n, s, a, o) {
this.isPrivate = !0, this.isPublic = !1;
if (null == t) throw "RSASetPrivateEx N == null";
if (null == e) throw "RSASetPrivateEx E == null";
if (0 == t.length) throw "RSASetPrivateEx N.length == 0";
if (0 == e.length) throw "RSASetPrivateEx E.length == 0";
if (!(null != t && null != e && t.length > 0 && e.length > 0)) throw "Invalid RSA private key in RSASetPrivateEx";
this.n = z(t, 16), this.e = parseInt(e, 16), this.d = z(r, 16), this.p = z(i, 16), 
this.q = z(n, 16), this.dmp1 = z(s, 16), this.dmq1 = z(a, 16), this.coeff = z(o, 16);
}, J.prototype.generate = function(t, e) {
var r = new G(), i = t >> 1;
this.e = parseInt(e, 16);
for (var n = new c(e, 16), s = t / 2 - 100, a = c.ONE.shiftLeft(s); ;) {
for (;;) {
this.p = new c(t - i, 1, r);
if (0 == this.p.subtract(c.ONE).gcd(n).compareTo(c.ONE) && this.p.isProbablePrime(10)) break;
}
for (;;) {
this.q = new c(i, 1, r);
if (0 == this.q.subtract(c.ONE).gcd(n).compareTo(c.ONE) && this.q.isProbablePrime(10)) break;
}
if (this.p.compareTo(this.q) <= 0) {
var o = this.p;
this.p = this.q, this.q = o;
}
var h = this.q.subtract(this.p).abs();
if (!(h.bitLength() < s || h.compareTo(a) <= 0)) {
var u = this.p.subtract(c.ONE), l = this.q.subtract(c.ONE), f = u.multiply(l);
if (0 == f.gcd(n).compareTo(c.ONE)) {
this.n = this.p.multiply(this.q);
if (this.n.bitLength() == t) {
this.d = n.modInverse(f), this.dmp1 = this.d.mod(u), this.dmq1 = this.d.mod(l), 
this.coeff = this.q.modInverse(this.p);
break;
}
}
}
}
this.isPrivate = !0;
};
function W(t, e) {
this.x = e, this.q = t;
}
W.prototype.equals = function(t) {
return t == this || this.q.equals(t.q) && this.x.equals(t.x);
}, W.prototype.toBigInteger = function() {
return this.x;
}, W.prototype.negate = function() {
return new W(this.q, this.x.negate().mod(this.q));
}, W.prototype.add = function(t) {
return new W(this.q, this.x.add(t.toBigInteger()).mod(this.q));
}, W.prototype.subtract = function(t) {
return new W(this.q, this.x.subtract(t.toBigInteger()).mod(this.q));
}, W.prototype.multiply = function(t) {
return new W(this.q, this.x.multiply(t.toBigInteger()).mod(this.q));
}, W.prototype.square = function() {
return new W(this.q, this.x.square().mod(this.q));
}, W.prototype.divide = function(t) {
return new W(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q));
}, W.prototype.sqrt = function() {
return new W(this.q, this.x.sqrt().mod(this.q));
};
function X(t, e, r, i) {
this.curve = t, this.x = e, this.y = r, this.z = null == i ? c.ONE : i, this.zinv = null;
}
X.prototype.getX = function() {
return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}, X.prototype.getY = function() {
return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}, X.prototype.equals = function(t) {
return t == this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(c.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(c.ZERO));
}, X.prototype.isInfinity = function() {
return null == this.x && null == this.y || this.z.equals(c.ZERO) && !this.y.toBigInteger().equals(c.ZERO);
}, X.prototype.negate = function() {
return new X(this.curve, this.x, this.y.negate(), this.z);
}, X.prototype.add = function(t) {
if (this.isInfinity()) return t;
if (t.isInfinity()) return this;
var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q), r = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
if (c.ZERO.equals(r)) return c.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
var i = new c("3"), n = this.x.toBigInteger(), s = this.y.toBigInteger(), a = (t.x.toBigInteger(), 
t.y.toBigInteger(), r.square()), o = a.multiply(r), h = n.multiply(a), u = e.square().multiply(this.z), l = u.subtract(h.shiftLeft(1)).multiply(t.z).subtract(o).multiply(r).mod(this.curve.q), f = h.multiply(i).multiply(e).subtract(s.multiply(o)).subtract(u.multiply(e)).multiply(t.z).add(e.multiply(o)).mod(this.curve.q), d = o.multiply(this.z).multiply(t.z).mod(this.curve.q);
return new X(this.curve, this.curve.fromBigInteger(l), this.curve.fromBigInteger(f), d);
}, X.prototype.twice = function() {
if (this.isInfinity()) return this;
if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
var t = new c("3"), e = this.x.toBigInteger(), r = this.y.toBigInteger(), i = r.multiply(this.z), n = i.multiply(r).mod(this.curve.q), s = this.curve.a.toBigInteger(), a = e.square().multiply(t);
!c.ZERO.equals(s) && (a = a.add(this.z.square().multiply(s)));
var o = (a = a.mod(this.curve.q)).square().subtract(e.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(i).mod(this.curve.q), h = a.multiply(t).multiply(e).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(a.square().multiply(a)).mod(this.curve.q), u = i.square().multiply(i).shiftLeft(3).mod(this.curve.q);
return new X(this.curve, this.curve.fromBigInteger(o), this.curve.fromBigInteger(h), u);
}, X.prototype.multiply = function(t) {
if (this.isInfinity()) return this;
if (0 == t.signum()) return this.curve.getInfinity();
var e, r = t, i = r.multiply(new c("3")), n = this.negate(), s = this, a = this.curve.q.subtract(t), o = a.multiply(new c("3")), h = new X(this.curve, this.x, this.y), u = h.negate();
for (e = i.bitLength() - 2; e > 0; --e) {
s = s.twice();
var l = i.testBit(e);
l != r.testBit(e) && (s = s.add(l ? this : n));
}
for (e = o.bitLength() - 2; e > 0; --e) {
h = h.twice();
var f = o.testBit(e);
f != a.testBit(e) && (h = h.add(f ? h : u));
}
return s;
}, X.prototype.multiplyTwo = function(t, e, r) {
var i;
i = t.bitLength() > r.bitLength() ? t.bitLength() - 1 : r.bitLength() - 1;
for (var n = this.curve.getInfinity(), s = this.add(e); i >= 0; ) n = n.twice(), 
t.testBit(i) ? n = r.testBit(i) ? n.add(s) : n.add(this) : r.testBit(i) && (n = n.add(e)), 
--i;
return n;
};
function $(t, e, r) {
this.q = t, this.a = this.fromBigInteger(e), this.b = this.fromBigInteger(r), this.infinity = new X(this, null, null);
}
$.prototype.getQ = function() {
return this.q;
}, $.prototype.getA = function() {
return this.a;
}, $.prototype.getB = function() {
return this.b;
}, $.prototype.equals = function(t) {
return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b);
}, $.prototype.getInfinity = function() {
return this.infinity;
}, $.prototype.fromBigInteger = function(t) {
return new W(this.q, t);
}, $.prototype.decodePointHex = function(t) {
switch (parseInt(t.substr(0, 2), 16)) {
case 0:
return this.infinity;

case 2:
case 3:
var e = t.substr(0, 2), r = (t.substr(2), this.fromBigInteger(new c(o, 16))), i = this.getA(), n = this.getB(), s = r.square().add(i).multiply(r).add(n).sqrt();
"03" == e && (s = s.negate());
return new X(this, r, s);

case 4:
case 6:
case 7:
var a = (t.length - 2) / 2, o = t.substr(2, a), h = t.substr(a + 2, a);
return new X(this, this.fromBigInteger(new c(o, 16)), this.fromBigInteger(new c(h, 16)));

default:
return null;
}
}, W.prototype.getByteLength = function() {
return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
}, X.prototype.getEncoded = function(t) {
var e = function(t, e) {
var r = t.toByteArrayUnsigned();
if (e < r.length) r = r.slice(r.length - e); else for (;e > r.length; ) r.unshift(0);
return r;
}, r = this.getX().toBigInteger(), i = this.getY().toBigInteger(), n = e(r, 32);
return t ? i.isEven() ? n.unshift(2) : n.unshift(3) : (n.unshift(4), n = n.concat(e(i, 32))), 
n;
}, X.decodeFrom = function(t, e) {
e[0];
var r = e.length - 1, i = e.slice(1, 1 + r / 2), n = e.slice(1 + r / 2, 1 + r);
i.unshift(0), n.unshift(0);
var s = new c(i), a = new c(n);
return new X(t, t.fromBigInteger(s), t.fromBigInteger(a));
}, X.decodeFromHex = function(t, e) {
e.substr(0, 2);
var r = e.length - 2, i = e.substr(2, r / 2), n = e.substr(2 + r / 2, r / 2), s = new c(i, 16), a = new c(n, 16);
return new X(t, t.fromBigInteger(s), t.fromBigInteger(a));
}, X.prototype.add2D = function(t) {
if (this.isInfinity()) return t;
if (t.isInfinity()) return this;
if (this.x.equals(t.x)) return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
var e = t.x.subtract(this.x), r = t.y.subtract(this.y).divide(e), i = r.square().subtract(this.x).subtract(t.x), n = r.multiply(this.x.subtract(i)).subtract(this.y);
return new X(this.curve, i, n);
}, X.prototype.twice2D = function() {
if (this.isInfinity()) return this;
if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
var t = this.curve.fromBigInteger(c.valueOf(2)), e = this.curve.fromBigInteger(c.valueOf(3)), r = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t)), i = r.square().subtract(this.x.multiply(t)), n = r.multiply(this.x.subtract(i)).subtract(this.y);
return new X(this.curve, i, n);
}, X.prototype.multiply2D = function(t) {
if (this.isInfinity()) return this;
if (0 == t.signum()) return this.curve.getInfinity();
var e, r = t, i = r.multiply(new c("3")), n = this.negate(), s = this;
for (e = i.bitLength() - 2; e > 0; --e) {
s = s.twice();
var a = i.testBit(e);
a != r.testBit(e) && (s = s.add2D(a ? this : n));
}
return s;
}, X.prototype.isOnCurve = function() {
var t = this.getX().toBigInteger(), e = this.getY().toBigInteger(), r = this.curve.getA().toBigInteger(), i = this.curve.getB().toBigInteger(), n = this.curve.getQ(), s = e.multiply(e).mod(n), a = t.multiply(t).multiply(t).add(r.multiply(t)).add(i).mod(n);
return s.equals(a);
}, X.prototype.toString = function() {
return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
}, X.prototype.validate = function() {
var t = this.curve.getQ();
if (this.isInfinity()) throw new Error("Point is at infinity.");
var e = this.getX().toBigInteger(), r = this.getY().toBigInteger();
if (e.compareTo(c.ONE) < 0 || e.compareTo(t.subtract(c.ONE)) > 0) throw new Error("x coordinate out of bounds");
if (r.compareTo(c.ONE) < 0 || r.compareTo(t.subtract(c.ONE)) > 0) throw new Error("y coordinate out of bounds");
if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
if (this.multiply(t).isInfinity()) throw new Error("Point is not a scalar multiple of G.");
return !0;
};
var Y = function() {
var t = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"), e = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), r = {
'"': '"',
"/": "/",
"\\": "\\",
b: "\b",
f: "\f",
n: "\n",
r: "\r",
t: "\t"
};
function i(t, e, i) {
return e ? r[e] : String.fromCharCode(parseInt(i, 16));
}
var n = new String(""), s = (Object, Array, Object.hasOwnProperty);
return function(r, a) {
var o, h = r.match(t), u = h[0], c = !1;
"{" === u ? o = {} : "[" === u ? o = [] : (o = [], c = !0);
for (var l, f = [ o ], d = 1 - c, g = h.length; d < g; ++d) {
var p;
switch ((u = h[d]).charCodeAt(0)) {
default:
(p = f[0])[l || p.length] = +u, l = void 0;
break;

case 34:
-1 !== (u = u.substring(1, u.length - 1)).indexOf("\\") && (u = u.replace(e, i));
p = f[0];
if (!l) {
if (!(p instanceof Array)) {
l = u || n;
break;
}
l = p.length;
}
p[l] = u, l = void 0;
break;

case 91:
p = f[0], f.unshift(p[l || p.length] = []), l = void 0;
break;

case 93:
f.shift();
break;

case 102:
(p = f[0])[l || p.length] = !1, l = void 0;
break;

case 110:
(p = f[0])[l || p.length] = null, l = void 0;
break;

case 116:
(p = f[0])[l || p.length] = !0, l = void 0;
break;

case 123:
p = f[0], f.unshift(p[l || p.length] = {}), l = void 0;
break;

case 125:
f.shift();
}
}
if (c) {
if (1 !== f.length) throw new Error();
o = o[0];
} else if (f.length) throw new Error();
if (a) {
var v = function(t, e) {
var r = t[e];
if (r && "object" == typeof r) {
var i = null;
for (var n in r) if (s.call(r, n) && r !== t) {
var o = v(r, n);
void 0 !== o ? r[n] = o : (!i && (i = []), i.push(n));
}
if (i) for (var h = i.length; --h >= 0; ) delete r[i[h]];
}
return a.call(t, e, r);
};
o = v({
"": o
}, "");
}
return o;
};
}();
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.asn1 || !Z.asn1) && (Z.asn1 = {});
Z.asn1.ASN1Util = new function() {
this.integerToByteHex = function(t) {
var e = t.toString(16);
return e.length % 2 == 1 && (e = "0" + e), e;
}, this.bigIntToMinTwosComplementsHex = function(t) {
return Lt(t);
}, this.getPEMStringFromHex = function(t, e) {
return xt(t, e);
}, this.newObject = function(t) {
var e = Z.asn1, r = e.ASN1Object, i = e.DERBoolean, n = e.DERInteger, s = e.DERBitString, a = e.DEROctetString, o = e.DERNull, h = e.DERObjectIdentifier, u = e.DEREnumerated, c = e.DERUTF8String, l = e.DERNumericString, f = e.DERPrintableString, d = e.DERTeletexString, g = e.DERIA5String, p = e.DERUTCTime, v = e.DERGeneralizedTime, y = e.DERVisibleString, m = e.DERBMPString, x = e.DERSequence, S = e.DERSet, E = e.DERTaggedObject, w = e.ASN1Util.newObject;
if (t instanceof e.ASN1Object) return t;
var b = Object.keys(t);
if (1 != b.length) throw new Error("key of param shall be only one.");
var F = b[0];
if (-1 == ":asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(":" + F + ":")) throw new Error("undefined key: " + F);
if ("bool" == F) return new i(t[F]);
if ("int" == F) return new n(t[F]);
if ("bitstr" == F) return new s(t[F]);
if ("octstr" == F) return new a(t[F]);
if ("null" == F) return new o(t[F]);
if ("oid" == F) return new h(t[F]);
if ("enum" == F) return new u(t[F]);
if ("utf8str" == F) return new c(t[F]);
if ("numstr" == F) return new l(t[F]);
if ("prnstr" == F) return new f(t[F]);
if ("telstr" == F) return new d(t[F]);
if ("ia5str" == F) return new g(t[F]);
if ("utctime" == F) return new p(t[F]);
if ("gentime" == F) return new v(t[F]);
if ("visstr" == F) return new y(t[F]);
if ("bmpstr" == F) return new m(t[F]);
if ("asn1" == F) return new r(t[F]);
if ("seq" == F) {
for (var A = t[F], I = [], D = 0; D < A.length; D++) {
var C = w(A[D]);
I.push(C);
}
return new x({
array: I
});
}
if ("set" == F) {
for (A = t[F], I = [], D = 0; D < A.length; D++) {
C = w(A[D]);
I.push(C);
}
return new S({
array: I
});
}
if ("tag" == F) {
var P = t[F];
if ("[object Array]" === Object.prototype.toString.call(P) && 3 == P.length) {
var T = w(P[2]);
return new E({
tag: P[0],
explicit: P[1],
obj: T
});
}
return new E(P);
}
}, this.jsonToASN1HEX = function(t) {
return this.newObject(t).tohex();
};
}(), Z.asn1.ASN1Util.oidHexToInt = function(t) {
for (var e = "", r = parseInt(t.substr(0, 2), 16), i = (e = Math.floor(r / 40) + "." + r % 40, 
""), n = 2; n < t.length; n += 2) {
var s = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
i += s.substr(1, 7);
if ("0" == s.substr(0, 1)) {
e = e + "." + new c(i, 2).toString(10), i = "";
}
}
return e;
}, Z.asn1.ASN1Util.oidIntToHex = function(t) {
var e = function(t) {
var e = t.toString(16);
return 1 == e.length && (e = "0" + e), e;
}, r = function(t) {
var r = "", i = new c(t, 10).toString(2), n = 7 - i.length % 7;
7 == n && (n = 0);
for (var s = "", a = 0; a < n; a++) s += "0";
i = s + i;
for (a = 0; a < i.length - 1; a += 7) {
var o = i.substr(a, 7);
a != i.length - 7 && (o = "1" + o), r += e(parseInt(o, 2));
}
return r;
};
if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
var i = "", n = t.split("."), s = 40 * parseInt(n[0]) + parseInt(n[1]);
i += e(s), n.splice(0, 2);
for (var a = 0; a < n.length; a++) i += r(n[a]);
return i;
}, Z.asn1.ASN1Object = function(t) {
this.params = null, this.getLengthHexFromValue = function() {
if ("undefined" == typeof this.hV || null == this.hV) throw new Error("this.hV is null or undefined");
if (this.hV.length % 2 == 1) throw new Error("value hex must be even length: n=" + "".length + ",v=" + this.hV);
var t = this.hV.length / 2, e = t.toString(16);
e.length % 2 == 1 && (e = "0" + e);
if (t < 128) return e;
var r = e.length / 2;
if (r > 15) throw new Error("ASN.1 length too long to represent by 8x: n = " + t.toString(16));
return (128 + r).toString(16) + e;
}, this.tohex = function() {
return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), 
this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
this.isModified = !1), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, this.getValueHex = function() {
return this.tohex(), this.hV;
}, this.getFreshValueHex = function() {
return "";
}, this.setByParam = function(t) {
this.params = t;
}, void 0 != t && void 0 != t.tlv && (this.hTLV = t.tlv, this.isModified = !1);
}, Z.asn1.DERAbstractString = function(t) {
Z.asn1.DERAbstractString.superclass.constructor.call(this);
this.getString = function() {
return this.s;
}, this.setString = function(t) {
this.hTLV = null, this.isModified = !0, this.s = t, this.hV = ct(this.s).toLowerCase();
}, this.setStringHex = function(t) {
this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
}, this.getFreshValueHex = function() {
return this.hV;
}, "undefined" != typeof t && ("string" == typeof t ? this.setString(t) : "undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex));
}, Jt(Z.asn1.DERAbstractString, Z.asn1.ASN1Object), Z.asn1.DERAbstractTime = function(t) {
Z.asn1.DERAbstractTime.superclass.constructor.call(this);
this.localDateToUTC = function(t) {
var e = t.getTime() + 6e4 * t.getTimezoneOffset();
return new Date(e);
}, this.formatDate = function(t, e, r) {
var i = this.zeroPadding, n = this.localDateToUTC(t), s = String(n.getFullYear());
"utc" == e && (s = s.substr(2, 2));
var a = s + i(String(n.getMonth() + 1), 2) + i(String(n.getDate()), 2) + i(String(n.getHours()), 2) + i(String(n.getMinutes()), 2) + i(String(n.getSeconds()), 2);
if (!0 === r) {
var o = n.getMilliseconds();
if (0 != o) {
var h = i(String(o), 3);
a = a + "." + (h = h.replace(/[0]+$/, ""));
}
}
return a + "Z";
}, this.zeroPadding = function(t, e) {
return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
}, this.setByParam = function(t) {
this.hV = null, this.hTLV = null, this.params = t;
}, this.getString = function() {}, this.setString = function(t) {
this.hTLV = null, this.isModified = !0, void 0 == this.params && (this.params = {}), 
this.params.str = t;
}, this.setByDate = function(t) {
this.hTLV = null, this.isModified = !0, void 0 == this.params && (this.params = {}), 
this.params.date = t;
}, this.setByDateValue = function(t, e, r, i, n, s) {
var a = new Date(Date.UTC(t, e - 1, r, i, n, s, 0));
this.setByDate(a);
}, this.getFreshValueHex = function() {
return this.hV;
};
}, Jt(Z.asn1.DERAbstractTime, Z.asn1.ASN1Object), Z.asn1.DERAbstractStructured = function(t) {
Z.asn1.DERAbstractString.superclass.constructor.call(this);
this.setByASN1ObjectArray = function(t) {
this.hTLV = null, this.isModified = !0, this.asn1Array = t;
}, this.appendASN1Object = function(t) {
this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
}, this.asn1Array = new Array(), "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array);
}, Jt(Z.asn1.DERAbstractStructured, Z.asn1.ASN1Object), Z.asn1.DERBoolean = function(t) {
Z.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = 0 == t ? "010100" : "0101ff";
}, Jt(Z.asn1.DERBoolean, Z.asn1.ASN1Object), Z.asn1.DERInteger = function(t) {
Z.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.params = null;
var e = Lt;
this.setByBigInteger = function(t) {
this.isModified = !0, this.params = {
bigint: t
};
}, this.setByInteger = function(t) {
this.isModified = !0, this.params = t;
}, this.setValueHex = function(t) {
this.isModified = !0, this.params = {
hex: t
};
}, this.getFreshValueHex = function() {
var t = this.params, r = null;
if (null == t) throw new Error("value not set");
if ("object" == typeof t && void 0 != t.hex) return this.hV = t.hex, this.hV;
if ("number" == typeof t) r = new c(String(t), 10); else if (void 0 != t.int) r = new c(String(t.int), 10); else {
if (void 0 == t.bigint) throw new Error("wrong parameter");
r = t.bigint;
}
return this.hV = e(r), this.hV;
}, void 0 != t && (this.params = t);
}, Jt(Z.asn1.DERInteger, Z.asn1.ASN1Object), Z.asn1.DERBitString = function(t) {
if (void 0 !== t && "undefined" != typeof t.obj) {
var e = Z.asn1.ASN1Util.newObject(t.obj);
t.hex = "00" + e.tohex();
}
Z.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
this.hTLV = null, this.isModified = !0, this.hV = t;
}, this.setUnusedBitsAndHexValue = function(t, e) {
if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
var r = "0" + t;
this.hTLV = null, this.isModified = !0, this.hV = r + e;
}, this.setByBinaryString = function(t) {
var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
8 == e && (e = 0);
t += "0000000".substr(0, e);
for (var r = "", i = 0; i < t.length - 1; i += 8) {
var n = t.substr(i, 8), s = parseInt(n, 2).toString(16);
1 == s.length && (s = "0" + s), r += s;
}
this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r;
}, this.setByBooleanArray = function(t) {
for (var e = "", r = 0; r < t.length; r++) 1 == t[r] ? e += "1" : e += "0";
this.setByBinaryString(e);
}, this.newFalseArray = function(t) {
for (var e = new Array(t), r = 0; r < t; r++) e[r] = !1;
return e;
}, this.getFreshValueHex = function() {
return this.hV;
}, "undefined" != typeof t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : "undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array));
}, Jt(Z.asn1.DERBitString, Z.asn1.ASN1Object), Z.asn1.DEROctetString = function(t) {
if (void 0 !== t && "undefined" != typeof t.obj) {
var e = Z.asn1.ASN1Util.newObject(t.obj);
t.hex = e.tohex();
}
Z.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
}, Jt(Z.asn1.DEROctetString, Z.asn1.DERAbstractString), Z.asn1.DERNull = function() {
Z.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
}, Jt(Z.asn1.DERNull, Z.asn1.ASN1Object), Z.asn1.DERObjectIdentifier = function(t) {
Z.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
}, this.setValueOidString = function(t) {
var e = Vt(t);
if (null == e) throw new Error("malformed oid string: " + t);
this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
}, this.setValueName = function(t) {
var e = Z.asn1.x509.OID.name2oid(t);
if ("" === e) throw new Error("DERObjectIdentifier oidName undefined: " + t);
this.setValueOidString(e);
}, this.setValueNameOrOid = function(t) {
t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t);
}, this.getFreshValueHex = function() {
return this.hV;
}, this.setByParam = function(t) {
"string" == typeof t ? this.setValueNameOrOid(t) : void 0 !== t.oid ? this.setValueNameOrOid(t.oid) : void 0 !== t.name ? this.setValueNameOrOid(t.name) : void 0 !== t.hex && this.setValueHex(t.hex);
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.DERObjectIdentifier, Z.asn1.ASN1Object), Z.asn1.DEREnumerated = function(t) {
Z.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
this.hTLV = null, this.isModified = !0, this.hV = Lt(t);
}, this.setByInteger = function(t) {
var e = new c(String(t), 10);
this.setByBigInteger(e);
}, this.setValueHex = function(t) {
this.hV = t;
}, this.getFreshValueHex = function() {
return this.hV;
}, "undefined" != typeof t && ("undefined" != typeof t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex));
}, Jt(Z.asn1.DEREnumerated, Z.asn1.ASN1Object), Z.asn1.DERUTF8String = function(t) {
Z.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
}, Jt(Z.asn1.DERUTF8String, Z.asn1.DERAbstractString), Z.asn1.DERNumericString = function(t) {
Z.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
}, Jt(Z.asn1.DERNumericString, Z.asn1.DERAbstractString), Z.asn1.DERPrintableString = function(t) {
Z.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
}, Jt(Z.asn1.DERPrintableString, Z.asn1.DERAbstractString), Z.asn1.DERTeletexString = function(t) {
Z.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
}, Jt(Z.asn1.DERTeletexString, Z.asn1.DERAbstractString), Z.asn1.DERIA5String = function(t) {
Z.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
}, Jt(Z.asn1.DERIA5String, Z.asn1.DERAbstractString), Z.asn1.DERVisibleString = function(t) {
Z.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "1a";
}, Jt(Z.asn1.DERVisibleString, Z.asn1.DERAbstractString), Z.asn1.DERBMPString = function(t) {
Z.asn1.DERBMPString.superclass.constructor.call(this, t), this.hT = "1e";
}, Jt(Z.asn1.DERBMPString, Z.asn1.DERAbstractString), Z.asn1.DERUTCTime = function(t) {
Z.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.params = void 0, 
this.getFreshValueHex = function() {
var t = this.params;
void 0 == this.params && (t = {
date: new Date()
});
if ("string" == typeof t) {
if (!t.match(/^[0-9]{12}Z$/) && !t.match(/^[0-9]{12}\.[0-9]+Z$/)) throw new Error("malformed string for UTCTime: " + t);
this.hV = st(t);
} else if (void 0 != t.str) this.hV = st(t.str); else if (void 0 == t.date && 1 == t.millis) {
var e = new Date();
this.hV = st(this.formatDate(e, "utc", !0));
} else if (void 0 != t.date && t.date instanceof Date) {
var r = !0 === t.millis;
this.hV = st(this.formatDate(t.date, "utc", r));
} else t instanceof Date && (this.hV = st(this.formatDate(t, "utc")));
if (void 0 == this.hV) throw new Error("parameter not specified properly for UTCTime");
return this.hV;
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.DERUTCTime, Z.asn1.DERAbstractTime), Z.asn1.DERGeneralizedTime = function(t) {
Z.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", 
this.params = t, this.getFreshValueHex = function() {
var t = this.params;
void 0 == this.params && (t = {
date: new Date()
});
if ("string" == typeof t) {
if (!t.match(/^[0-9]{14}Z$/) && !t.match(/^[0-9]{14}\.[0-9]+Z$/)) throw new Error("malformed string for GeneralizedTime: " + t);
this.hV = st(t);
} else if (void 0 != t.str) this.hV = st(t.str); else if (void 0 == t.date && 1 == t.millis) {
var e = new Date();
this.hV = st(this.formatDate(e, "gen", !0));
} else if (void 0 != t.date && t.date instanceof Date) {
var r = !0 === t.millis;
this.hV = st(this.formatDate(t.date, "gen", r));
} else t instanceof Date && (this.hV = st(this.formatDate(t, "gen")));
if (void 0 == this.hV) throw new Error("parameter not specified properly for GeneralizedTime");
return this.hV;
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.DERGeneralizedTime, Z.asn1.DERAbstractTime), Z.asn1.DERSequence = function(t) {
Z.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
for (var t = "", e = 0; e < this.asn1Array.length; e++) {
t += this.asn1Array[e].tohex();
}
return this.hV = t, this.hV;
};
}, Jt(Z.asn1.DERSequence, Z.asn1.DERAbstractStructured), Z.asn1.DERSet = function(t) {
Z.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, 
this.getFreshValueHex = function() {
for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
var r = this.asn1Array[e];
t.push(r.tohex());
}
return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV;
}, "undefined" != typeof t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
}, Jt(Z.asn1.DERSet, Z.asn1.DERAbstractStructured), Z.asn1.DERTaggedObject = function(t) {
Z.asn1.DERTaggedObject.superclass.constructor.call(this);
var e = Z.asn1, r = et, i = r.getV, n = (r.isASN1HEX, e.ASN1Util.newObject);
this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.params = {
tag: "a0",
explicit: !0
}, this.setASN1Object = function(t, e, r) {
this.params = {
tag: e,
explicit: t,
obj: r
};
}, this.getFreshValueHex = function() {
var t = this.params;
void 0 == t.explicit && (t.explicit = !0);
void 0 != t.tage && (t.tag = t.tage, t.explicit = !0);
void 0 != t.tagi && (t.tag = t.tagi, t.explicit = !1);
if (void 0 != t.str) this.hV = ct(t.str); else if (void 0 != t.hex) this.hV = t.hex; else {
if (void 0 == t.obj) throw new Error("str, hex nor obj not specified");
var r;
t.obj instanceof e.ASN1Object ? r = t.obj.tohex() : "object" == typeof t.obj && (r = n(t.obj).tohex()), 
t.explicit ? this.hV = r : this.hV = i(r, 0);
}
return void 0 == t.tag && (t.tag = "a0"), this.hT = t.tag, this.hTLV = null, this.isModified = !0, 
this.hV;
}, this.setByParam = function(t) {
this.params = t;
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.DERTaggedObject, Z.asn1.ASN1Object);
var Z, Q, tt, et = new function() {}();
et.getLblen = function(t, e) {
if ("8" != t.substr(e + 2, 1)) return 1;
var r = parseInt(t.substr(e + 3, 1));
return 0 == r ? -1 : 0 < r && r < 10 ? r + 1 : -2;
}, et.getL = function(t, e) {
var r = et.getLblen(t, e);
return r < 1 ? "" : t.substr(e + 2, 2 * r);
}, et.getVblen = function(t, e) {
var r;
return "" == (r = et.getL(t, e)) ? -1 : ("8" === r.substr(0, 1) ? new c(r.substr(2), 16) : new c(r, 16)).intValue();
}, et.getVidx = function(t, e) {
var r = et.getLblen(t, e);
return r < 0 ? r : e + 2 * (r + 1);
}, et.getV = function(t, e) {
var r = et.getVidx(t, e), i = et.getVblen(t, e);
return t.substr(r, 2 * i);
}, et.getTLV = function(t, e) {
return t.substr(e, 2) + et.getL(t, e) + et.getV(t, e);
}, et.getTLVblen = function(t, e) {
return 2 + 2 * et.getLblen(t, e) + 2 * et.getVblen(t, e);
}, et.getNextSiblingIdx = function(t, e) {
return et.getVidx(t, e) + 2 * et.getVblen(t, e);
}, et.getChildIdx = function(t, e) {
var r, i, n, s = et, a = [];
r = s.getVidx(t, e), i = 2 * s.getVblen(t, e);
"03" == t.substr(e, 2) && (r += 2, i -= 2);
n = 0;
for (var o = r; n <= i; ) {
var h = s.getTLVblen(t, o);
(n += h) <= i && a.push(o);
o += h;
if (n >= i) break;
}
return a;
}, et.getNthChildIdx = function(t, e, r) {
return et.getChildIdx(t, e)[r];
}, et.getIdxbyList = function(t, e, r, i) {
var n, s, a = et;
return 0 == r.length ? void 0 !== i && t.substr(e, 2) !== i ? -1 : e : (n = r.shift()) >= (s = a.getChildIdx(t, e)).length ? -1 : a.getIdxbyList(t, s[n], r, i);
}, et.getIdxbyListEx = function(t, e, r, i) {
var n, s, a = et;
if (0 == r.length) return void 0 !== i && t.substr(e, 2) !== i ? -1 : e;
n = r.shift(), s = a.getChildIdx(t, e);
for (var o = 0, h = 0; h < s.length; h++) {
var u = t.substr(s[h], 2);
if ("number" == typeof n && !a.isContextTag(u) && o == n || "string" == typeof n && a.isContextTag(u, n)) return a.getIdxbyListEx(t, s[h], r, i);
!a.isContextTag(u) && o++;
}
return -1;
}, et.getTLVbyList = function(t, e, r, i) {
var n = et, s = n.getIdxbyList(t, e, r, i);
return -1 == s ? null : s >= t.length ? null : n.getTLV(t, s);
}, et.getTLVbyListEx = function(t, e, r, i) {
var n = et, s = n.getIdxbyListEx(t, e, r, i);
return -1 == s ? null : n.getTLV(t, s);
}, et.getVbyList = function(t, e, r, i, n) {
var s, a, o = et;
return -1 == (s = o.getIdxbyList(t, e, r, i)) ? null : s >= t.length ? null : (a = o.getV(t, s), 
!0 === n && (a = a.substr(2)), a);
}, et.getVbyListEx = function(t, e, r, i, n) {
var s, a, o = et;
return -1 == (s = o.getIdxbyListEx(t, e, r, i)) ? null : (a = o.getV(t, s), "03" == t.substr(s, 2) && !1 !== n && (a = a.substr(2)), 
a);
}, et.getInt = function(t, e, r) {
void 0 == r && (r = -1);
try {
var i = t.substr(e, 2);
if ("02" != i && "03" != i) return r;
var n = et.getV(t, e);
return "02" == i ? parseInt(n, 16) : Mt(n);
} catch (t) {
return r;
}
}, et.getOID = function(t, e, r) {
void 0 == r && (r = null);
try {
return "06" != t.substr(e, 2) ? r : kt(et.getV(t, e));
} catch (t) {
return r;
}
}, et.getOIDName = function(t, e, r) {
void 0 == r && (r = null);
try {
var i = et.getOID(t, e, r);
if (i == r) return r;
var n = Z.asn1.x509.OID.oid2name(i);
return "" == n ? i : n;
} catch (t) {
return r;
}
}, et.getString = function(t, e, r) {
void 0 == r && (r = null);
try {
return gt(et.getV(t, e));
} catch (t) {
return r;
}
}, et.hextooidstr = function(t) {
var e = function(t, e) {
return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
}, r = [], i = t.substr(0, 2), n = parseInt(i, 16);
r[0] = new String(Math.floor(n / 40)), r[1] = new String(n % 40);
for (var s = t.substr(2), a = [], o = 0; o < s.length / 2; o++) a.push(parseInt(s.substr(2 * o, 2), 16));
var h = [], u = "";
for (o = 0; o < a.length; o++) 128 & a[o] ? u += e((127 & a[o]).toString(2), 7) : (u += e((127 & a[o]).toString(2), 7), 
h.push(new String(parseInt(u, 2))), u = "");
var c = r.join(".");
return h.length > 0 && (c = c + "." + h.join(".")), c;
}, et.dump = function(t, e, r, i) {
var n = et, s = n.getV, a = n.dump, o = n.getChildIdx, h = t;
t instanceof Z.asn1.ASN1Object && (h = t.tohex());
var u = function(t, e) {
return t.length <= 2 * e ? t : t.substr(0, e) + "..(total " + t.length / 2 + "bytes).." + t.substr(t.length - e, e);
};
void 0 === e && (e = {
ommit_long_octet: 32
});
void 0 === r && (r = 0);
void 0 === i && (i = "");
var c, l = e.ommit_long_octet;
if ("01" == (c = h.substr(r, 2))) {
return "00" == (f = s(h, r)) ? i + "BOOLEAN FALSE\n" : i + "BOOLEAN TRUE\n";
}
if ("02" == c) {
return i + "INTEGER " + u(f = s(h, r), l) + "\n";
}
if ("03" == c) {
var f = s(h, r);
if (n.isASN1HEX(f.substr(2))) {
var d = i + "BITSTRING, encapsulates\n";
return d += a(f.substr(2), e, 0, i + "  ");
}
return i + "BITSTRING " + u(f, l) + "\n";
}
if ("04" == c) {
f = s(h, r);
if (n.isASN1HEX(f)) {
d = i + "OCTETSTRING, encapsulates\n";
return d += a(f, e, 0, i + "  ");
}
return i + "OCTETSTRING " + u(f, l) + "\n";
}
if ("05" == c) return i + "NULL\n";
if ("06" == c) {
var g = s(h, r), p = Z.asn1.ASN1Util.oidHexToInt(g), v = Z.asn1.x509.OID.oid2name(p), y = p.replace(/\./g, " ");
return "" != v ? i + "ObjectIdentifier " + v + " (" + y + ")\n" : i + "ObjectIdentifier (" + y + ")\n";
}
if ("0a" == c) return i + "ENUMERATED " + parseInt(s(h, r)) + "\n";
if ("0c" == c) return i + "UTF8String '" + lt(s(h, r)) + "'\n";
if ("13" == c) return i + "PrintableString '" + lt(s(h, r)) + "'\n";
if ("14" == c) return i + "TeletexString '" + lt(s(h, r)) + "'\n";
if ("16" == c) return i + "IA5String '" + lt(s(h, r)) + "'\n";
if ("17" == c) return i + "UTCTime " + lt(s(h, r)) + "\n";
if ("18" == c) return i + "GeneralizedTime " + lt(s(h, r)) + "\n";
if ("1a" == c) return i + "VisualString '" + lt(s(h, r)) + "'\n";
if ("1e" == c) return i + "BMPString '" + Nt(s(h, r)) + "'\n";
if ("30" == c) {
if ("3000" == h.substr(r, 4)) return i + "SEQUENCE {}\n";
d = i + "SEQUENCE\n";
var m = e;
if ((2 == (E = o(h, r)).length || 3 == E.length) && "06" == h.substr(E[0], 2) && "04" == h.substr(E[E.length - 1], 2)) {
v = n.oidname(s(h, E[0]));
var x = JSON.parse(JSON.stringify(e));
x.x509ExtName = v, m = x;
}
for (var S = 0; S < E.length; S++) d += a(h, m, E[S], i + "  ");
return d;
}
if ("31" == c) {
d = i + "SET\n";
var E = o(h, r);
for (S = 0; S < E.length; S++) d += a(h, e, E[S], i + "  ");
return d;
}
if (0 != (128 & (c = parseInt(c, 16)))) {
var w = 31 & c;
if (0 != (32 & c)) {
for (d = i + "[" + w + "]\n", E = o(h, r), S = 0; S < E.length; S++) d += a(h, e, E[S], i + "  ");
return d;
}
f = s(h, r);
if (et.isASN1HEX(f)) {
var d = i + "[" + w + "]\n";
return d += a(f, e, 0, i + "  ");
}
"68747470" == f.substr(0, 8) ? f = lt(f) : "subjectAltName" === e.x509ExtName && 2 == w && (f = lt(f));
return d = i + "[" + w + "] " + f + "\n";
}
return i + "UNKNOWN(" + c + ") " + s(h, r) + "\n";
}, et.parse = function(t) {
var e = et, r = e.parse, i = e.isASN1HEX, n = e.getV, s = e.getTLV, a = e.getChildIdx, o = Z.asn1, h = o.ASN1Util.oidHexToInt, u = o.x509.OID.oid2name, c = lt, l = Nt, f = ft, d = {
"0c": "utf8str",
12: "numstr",
13: "prnstr",
14: "telstr",
16: "ia5str",
17: "utctime",
18: "gentime",
"1a": "visstr",
"1e": "bmpstr",
30: "seq",
31: "set"
}, g = t.substr(0, 2), p = {}, v = n(t, 0);
if ("01" == g) return "0101ff" == t ? {
bool: !0
} : {
bool: !1
};
if ("02" == g) return {
int: {
hex: v
}
};
if ("03" == g) try {
if ("00" != v.substr(0, 2)) throw "not encap";
var y = v.substr(2);
if (!i(y)) throw "not encap";
return {
bitstr: {
obj: r(y)
}
};
} catch (t) {
var m = null;
return v.length <= 10 && (m = _t(v)), null == m ? {
bitstr: {
hex: v
}
} : {
bitstr: {
bin: m
}
};
} else if ("04" == g) try {
if (!i(v)) throw "not encap";
return {
octstr: {
obj: r(v)
}
};
} catch (t) {
return {
octstr: {
hex: v
}
};
} else {
if ("05" == g) return {
null: ""
};
if ("06" == g) {
var x = h(v), S = u(x);
return "" == S ? {
oid: x
} : {
oid: S
};
}
if ("0a" == g) return v.length > 4 ? {
enum: {
hex: v
}
} : {
enum: parseInt(v, 16)
};
if ("30" == g || "31" == g) return p[d[g]] = function(t) {
for (var e = [], i = a(t, 0), n = 0; n < i.length; n++) {
var o = i[n], h = s(t, o), u = r(h);
e.push(u);
}
return e;
}(t), p;
if ("14" == g) {
var E = f(v);
return p[d[g]] = {
str: E
}, p;
}
if ("1e" == g) {
E = l(v);
return p[d[g]] = {
str: E
}, p;
}
if (-1 != ":0c:12:13:16:17:18:1a:".indexOf(g)) {
E = c(v);
return p[d[g]] = {
str: E
}, p;
}
if (g.match(/^8[0-9]$/)) {
return null == (E = c(v)) | "" == E ? {
tag: {
tag: g,
explicit: !1,
hex: v
}
} : null != E.match(/[\x00-\x1F\x7F-\x9F]/) || null != E.match(/[\u0000-\u001F\u0080–\u009F]/) ? {
tag: {
tag: g,
explicit: !1,
hex: v
}
} : {
tag: {
tag: g,
explicit: !1,
str: E
}
};
}
if (!g.match(/^a[0-9]$/)) {
var w = new Z.asn1.ASN1Object();
w.hV = v;
return {
asn1: {
tlv: g + w.getLengthHexFromValue() + v
}
};
}
try {
if (!i(v)) throw new Error("not encap");
return {
tag: {
tag: g,
explicit: !0,
obj: r(v)
}
};
} catch (t) {
return {
tag: {
tag: g,
explicit: !0,
hex: v
}
};
}
}
}, et.isContextTag = function(t, e) {
t = t.toLowerCase();
var r, i;
try {
r = parseInt(t, 16);
} catch (t) {
return -1;
}
if (void 0 === e) return 128 == (192 & r);
try {
return null != e.match(/^\[[0-9]+\]$/) && (!((i = parseInt(e.substr(1, e.length - 1), 10)) > 31) && (128 == (192 & r) && (31 & r) == i));
} catch (t) {
return !1;
}
}, et.isASN1HEX = function(t) {
var e = et;
if (t.length % 2 == 1) return !1;
var r = e.getVblen(t, 0), i = t.substr(0, 2), n = e.getL(t, 0);
return t.length - i.length - n.length == 2 * r;
}, et.checkStrictDER = function(t, e, r, i, n) {
var s = et;
if (void 0 === r) {
if ("string" != typeof t) throw new Error("not hex string");
t = t.toLowerCase();
if (!Z.lang.String.isHex(t)) throw new Error("not hex string");
r = t.length, n = (i = t.length / 2) < 128 ? 1 : Math.ceil(i.toString(16)) + 1;
}
if (s.getL(t, e).length > 2 * n) throw new Error("L of TLV too long: idx=" + e);
var a = s.getVblen(t, e);
if (a > i) throw new Error("value of L too long than hex: idx=" + e);
var o = s.getTLV(t, e), h = o.length - 2 - s.getL(t, e).length;
if (h !== 2 * a) throw new Error("V string length and L's value not the same:" + h + "/" + 2 * a);
if (0 === e && t.length != o.length) throw new Error("total length and TLV length unmatch:" + t.length + "!=" + o.length);
var u = t.substr(e, 2);
if ("02" === u) {
var c = s.getVidx(t, e);
if ("00" == t.substr(c, 2) && t.charCodeAt(c + 2) < 56) throw new Error("not least zeros for DER INTEGER");
}
if (32 & parseInt(u, 16)) {
for (var l = s.getVblen(t, e), f = 0, d = s.getChildIdx(t, e), g = 0; g < d.length; g++) {
f += s.getTLV(t, d[g]).length, s.checkStrictDER(t, d[g], r, i, n);
}
if (2 * l != f) throw new Error("sum of children's TLV length and L unmatch: " + 2 * l + "!=" + f);
}
}, et.oidname = function(t) {
var e = Z.asn1;
Z.lang.String.isHex(t) && (t = e.ASN1Util.oidHexToInt(t));
var r = e.x509.OID.oid2name(t);
return "" === r && (r = t), r;
};
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.asn1 || !Z.asn1) && (Z.asn1 = {});
("undefined" == typeof Z.asn1.x509 || !Z.asn1.x509) && (Z.asn1.x509 = {});
Z.asn1.x509.Certificate = function(t) {
Z.asn1.x509.Certificate.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERBitString, i = e.DERSequence, n = e.x509, s = n.TBSCertificate, a = n.AlgorithmIdentifier;
this.params = void 0, this.setByParam = function(t) {
this.params = t;
}, this.sign = function() {
var t = this.params, e = t.sigalg;
void 0 != t.sigalg.name && (e = t.sigalg.name);
var r = t.tbsobj.tohex(), i = new Z.crypto.Signature({
alg: e
});
i.init(t.cakey), i.updateHex(r), t.sighex = i.sign();
}, this.getPEM = function() {
return xt(this.tohex(), "CERTIFICATE");
}, this.tohex = function() {
var t = this.params;
(void 0 == t.tbsobj || null == t.tbsobj) && (t.tbsobj = new s(t));
void 0 == t.sighex && void 0 != t.cakey && this.sign();
if (void 0 == t.sighex) throw new Error("sighex or cakey parameter not defined");
var e = [];
e.push(t.tbsobj), e.push(new a({
name: t.sigalg
})), e.push(new r({
hex: "00" + t.sighex
}));
return new i({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && (this.params = t);
}, Jt(Z.asn1.x509.Certificate, Z.asn1.ASN1Object), Z.asn1.x509.TBSCertificate = function(t) {
Z.asn1.x509.TBSCertificate.superclass.constructor.call(this);
var e = Z.asn1, r = e.x509, i = e.DERTaggedObject, n = e.DERInteger, s = e.DERSequence, a = r.AlgorithmIdentifier, o = r.Time, h = r.X500Name, u = r.Extensions, c = r.SubjectPublicKeyInfo;
this.params = null, this.setByParam = function(t) {
this.params = t;
}, this.tohex = function() {
var t = [], e = this.params;
if (void 0 != e.version || 1 != e.version) {
var r = 2;
void 0 != e.version && (r = e.version - 1);
var l = new i({
obj: new n({
int: r
})
});
t.push(l);
}
t.push(new n(e.serial)), t.push(new a({
name: e.sigalg
})), t.push(new h(e.issuer)), t.push(new s({
array: [ new o(e.notbefore), new o(e.notafter) ]
})), t.push(new h(e.subject)), t.push(new c(Wt.getKey(e.sbjpubkey)));
void 0 !== e.ext && e.ext.length > 0 && t.push(new i({
tag: "a3",
obj: new u(e.ext)
}));
return new Z.asn1.DERSequence({
array: t
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.TBSCertificate, Z.asn1.ASN1Object), Z.asn1.x509.Extensions = function(t) {
Z.asn1.x509.Extensions.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERSequence, i = e.x509;
this.aParam = [], this.setByParam = function(t) {
this.aParam = t;
}, this.tohex = function() {
for (var t = [], e = 0; e < this.aParam.length; e++) {
var n = this.aParam[e], s = n.extname, a = null;
if (void 0 != n.extn) a = new i.PrivateExtension(n); else if ("subjectKeyIdentifier" == s) a = new i.SubjectKeyIdentifier(n); else if ("keyUsage" == s) a = new i.KeyUsage(n); else if ("subjectAltName" == s) a = new i.SubjectAltName(n); else if ("issuerAltName" == s) a = new i.IssuerAltName(n); else if ("basicConstraints" == s) a = new i.BasicConstraints(n); else if ("nameConstraints" == s) a = new i.NameConstraints(n); else if ("cRLDistributionPoints" == s) a = new i.CRLDistributionPoints(n); else if ("certificatePolicies" == s) a = new i.CertificatePolicies(n); else if ("policyMappings" == s) a = new i.PolicyMappings(n); else if ("policyConstraints" == s) a = new i.PolicyConstraints(n); else if ("inhibitAnyPolicy" == s) a = new i.InhibitAnyPolicy(n); else if ("authorityKeyIdentifier" == s) a = new i.AuthorityKeyIdentifier(n); else if ("extKeyUsage" == s) a = new i.ExtKeyUsage(n); else if ("authorityInfoAccess" == s) a = new i.AuthorityInfoAccess(n); else if ("cRLNumber" == s) a = new i.CRLNumber(n); else if ("cRLReason" == s) a = new i.CRLReason(n); else if ("ocspNonce" == s) a = new i.OCSPNonce(n); else if ("ocspNoCheck" == s) a = new i.OCSPNoCheck(n); else if ("adobeTimeStamp" == s) a = new i.AdobeTimeStamp(n); else {
if ("subjectDirectoryAttributes" != s) throw new Error("extension not supported:" + JSON.stringify(n));
a = new i.SubjectDirectoryAttributes(n);
}
null != a && t.push(a);
}
return new r({
array: t
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.x509.Extensions, Z.asn1.ASN1Object), Z.asn1.x509.Extension = function(t) {
Z.asn1.x509.Extension.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERObjectIdentifier, i = e.DEROctetString, n = (e.DERBitString, 
e.DERBoolean), s = e.DERSequence;
this.tohex = function() {
var t = new r({
oid: this.oid
}), e = new i({
hex: this.getExtnValueHex()
}), a = new Array();
a.push(t);
this.critical && a.push(new n());
a.push(e);
return new s({
array: a
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.critical = !1, void 0 !== t && void 0 !== t.critical && (this.critical = t.critical);
}, Jt(Z.asn1.x509.Extension, Z.asn1.ASN1Object), Z.asn1.x509.KeyUsage = function(t) {
Z.asn1.x509.KeyUsage.superclass.constructor.call(this, t);
var e = Error, r = {
digitalSignature: 0,
nonRepudiation: 1,
keyEncipherment: 2,
dataEncipherment: 3,
keyAgreement: 4,
keyCertSign: 5,
cRLSign: 6,
encipherOnly: 7,
decipherOnly: 8
};
this.getExtnValueHex = function() {
var t = this.getBinValue();
return this.asn1ExtnValue = new Z.asn1.DERBitString({
bin: t
}), this.asn1ExtnValue.tohex();
}, this.getBinValue = function() {
var t = this.params;
if ("object" != typeof t || "object" != typeof t.names && "string" != typeof t.bin) throw new e("parameter not yet set");
if (void 0 != t.names) return Gt(t.names, r);
if (void 0 != t.bin) return t.bin;
throw new e("parameter not set properly");
}, this.oid = "2.5.29.15", void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.KeyUsage, Z.asn1.x509.Extension), Z.asn1.x509.BasicConstraints = function(t) {
Z.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
var e = Z.asn1, r = e.DERBoolean, i = e.DERInteger, n = e.DERSequence;
this.getExtnValueHex = function() {
var t = new Array();
this.cA && t.push(new r());
this.pathLen > -1 && t.push(new i({
int: this.pathLen
}));
var e = new n({
array: t
});
return this.asn1ExtnValue = e, this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.19", this.cA = !1, this.pathLen = -1, void 0 !== t && (void 0 !== t.cA && (this.cA = t.cA), 
void 0 !== t.pathLen && (this.pathLen = t.pathLen));
}, Jt(Z.asn1.x509.BasicConstraints, Z.asn1.x509.Extension), Z.asn1.x509.CRLDistributionPoints = function(t) {
Z.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t);
var e = Z.asn1, r = e.x509;
this.getExtnValueHex = function() {
return this.asn1ExtnValue.tohex();
}, this.setByDPArray = function(t) {
for (var i = [], n = 0; n < t.length; n++) if (t[n] instanceof Z.asn1.ASN1Object) i.push(t[n]); else {
var s = new r.DistributionPoint(t[n]);
i.push(s);
}
this.asn1ExtnValue = new e.DERSequence({
array: i
});
}, this.setByOneURI = function(t) {
var e = new r.DistributionPoint({
fulluri: t
});
this.setByDPArray([ e ]);
}, this.oid = "2.5.29.31", void 0 !== t && (void 0 !== t.array ? this.setByDPArray(t.array) : void 0 !== t.uri && this.setByOneURI(t.uri));
}, Jt(Z.asn1.x509.CRLDistributionPoints, Z.asn1.x509.Extension), Z.asn1.x509.DistributionPoint = function(t) {
Z.asn1.x509.DistributionPoint.superclass.constructor.call(this);
var e = Z.asn1, r = e.x509.DistributionPointName;
this.tohex = function() {
var t = new e.DERSequence();
if (null != this.asn1DP) {
var r = new e.DERTaggedObject({
explicit: !0,
tag: "a0",
obj: this.asn1DP
});
t.appendASN1Object(r);
}
return this.hTLV = t.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && (void 0 !== t.dpobj ? this.asn1DP = t.dpobj : void 0 !== t.dpname ? this.asn1DP = new r(t.dpname) : void 0 !== t.fulluri && (this.asn1DP = new r({
full: [ {
uri: t.fulluri
} ]
})));
}, Jt(Z.asn1.x509.DistributionPoint, Z.asn1.ASN1Object), Z.asn1.x509.DistributionPointName = function(t) {
Z.asn1.x509.DistributionPointName.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERTaggedObject;
this.tohex = function() {
if ("full" != this.type) throw new Error("currently type shall be 'full': " + this.type);
return this.asn1Obj = new r({
explicit: !1,
tag: this.tag,
obj: this.asn1V
}), this.hTLV = this.asn1Obj.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
};
if (void 0 !== t) if (e.x509.GeneralNames.prototype.isPrototypeOf(t)) this.type = "full", 
this.tag = "a0", this.asn1V = t; else {
if (void 0 === t.full) throw new Error("This class supports GeneralNames only as argument");
this.type = "full", this.tag = "a0", this.asn1V = new e.x509.GeneralNames(t.full);
}
}, Jt(Z.asn1.x509.DistributionPointName, Z.asn1.ASN1Object), Z.asn1.x509.CertificatePolicies = function(t) {
Z.asn1.x509.CertificatePolicies.superclass.constructor.call(this, t);
var e = Z.asn1, r = e.x509, i = e.DERSequence, n = r.PolicyInformation;
this.params = null, this.getExtnValueHex = function() {
for (var t = [], e = 0; e < this.params.array.length; e++) t.push(new n(this.params.array[e]));
var r = new i({
array: t
});
return this.asn1ExtnValue = r, this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.32", void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.CertificatePolicies, Z.asn1.x509.Extension), Z.asn1.x509.PolicyInformation = function(t) {
Z.asn1.x509.PolicyInformation.superclass.constructor.call(this, t);
var e = Z.asn1, r = e.DERSequence, i = e.DERObjectIdentifier, n = e.x509.PolicyQualifierInfo;
this.params = null, this.tohex = function() {
if (void 0 === this.params.policyoid && void 0 === this.params.array) throw new Error("parameter oid and array missing");
var t = [ new i(this.params.policyoid) ];
if (void 0 !== this.params.array) {
for (var e = [], s = 0; s < this.params.array.length; s++) e.push(new n(this.params.array[s]));
e.length > 0 && t.push(new r({
array: e
}));
}
return new r({
array: t
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.PolicyInformation, Z.asn1.ASN1Object), Z.asn1.x509.PolicyQualifierInfo = function(t) {
Z.asn1.x509.PolicyQualifierInfo.superclass.constructor.call(this, t);
var e = Z.asn1, r = e.DERSequence, i = e.DERIA5String, n = e.DERObjectIdentifier, s = e.x509.UserNotice;
this.params = null, this.tohex = function() {
if (void 0 !== this.params.cps) {
return new r({
array: [ new n({
oid: "1.3.6.1.5.5.7.2.1"
}), new i({
str: this.params.cps
}) ]
}).tohex();
}
if (void 0 != this.params.unotice) {
return new r({
array: [ new n({
oid: "1.3.6.1.5.5.7.2.2"
}), new s(this.params.unotice) ]
}).tohex();
}
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.PolicyQualifierInfo, Z.asn1.ASN1Object), Z.asn1.x509.UserNotice = function(t) {
Z.asn1.x509.UserNotice.superclass.constructor.call(this, t);
var e = Z.asn1.DERSequence, r = (Z.asn1.DERInteger, Z.asn1.x509.DisplayText), i = Z.asn1.x509.NoticeReference;
this.params = null, this.tohex = function() {
var t = [];
void 0 !== this.params.noticeref && t.push(new i(this.params.noticeref));
void 0 !== this.params.exptext && t.push(new r(this.params.exptext));
return new e({
array: t
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.UserNotice, Z.asn1.ASN1Object), Z.asn1.x509.NoticeReference = function(t) {
Z.asn1.x509.NoticeReference.superclass.constructor.call(this, t);
var e = Z.asn1.DERSequence, r = Z.asn1.DERInteger, i = Z.asn1.x509.DisplayText;
this.params = null, this.tohex = function() {
var t = [];
void 0 !== this.params.org && t.push(new i(this.params.org));
if (void 0 !== this.params.noticenum) {
for (var n = [], s = this.params.noticenum, a = 0; a < s.length; a++) n.push(new r(s[a]));
t.push(new e({
array: n
}));
}
if (0 == t.length) throw new Error("parameter is empty");
return new e({
array: t
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.NoticeReference, Z.asn1.ASN1Object), Z.asn1.x509.DisplayText = function(t) {
Z.asn1.x509.DisplayText.superclass.constructor.call(this, t), this.hT = "0c", void 0 !== t && ("ia5" === t.type ? this.hT = "16" : "vis" === t.type ? this.hT = "1a" : "bmp" === t.type && (this.hT = "1e"));
}, Jt(Z.asn1.x509.DisplayText, Z.asn1.DERAbstractString), Z.asn1.x509.PolicyMappings = function(t) {
Z.asn1.x509.PolicyMappings.superclass.constructor.call(this, t);
var e = Z.asn1, r = (e.x509, e.ASN1Util.newObject);
this.params = null, this.getExtnValueHex = function() {
for (var t = this.params, e = [], i = 0; i < t.array.length; i++) {
var n = t.array[i];
e.push({
seq: [ {
oid: n[0]
}, {
oid: n[1]
} ]
});
}
return this.asn1ExtnValue = r({
seq: e
}), this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.33", void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.PolicyMappings, Z.asn1.x509.Extension), Z.asn1.x509.PolicyConstraints = function(t) {
Z.asn1.x509.PolicyConstraints.superclass.constructor.call(this, t);
var e = Z.asn1, r = (e.x509, e.ASN1Util.newObject);
this.params = null, this.getExtnValueHex = function() {
var t = this.params, e = [];
return void 0 != t.reqexp && e.push({
tag: {
tagi: "80",
obj: {
int: t.reqexp
}
}
}), void 0 != t.inhibit && e.push({
tag: {
tagi: "81",
obj: {
int: t.inhibit
}
}
}), this.asn1ExtnValue = r({
seq: e
}), this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.36", void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.PolicyConstraints, Z.asn1.x509.Extension), Z.asn1.x509.InhibitAnyPolicy = function(t) {
Z.asn1.x509.InhibitAnyPolicy.superclass.constructor.call(this, t);
var e = Z.asn1, r = (e.x509, e.ASN1Util.newObject);
this.params = null, this.getExtnValueHex = function() {
return this.asn1ExtnValue = r({
int: this.params.skip
}), this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.54", void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.InhibitAnyPolicy, Z.asn1.x509.Extension), Z.asn1.x509.NameConstraints = function(t) {
Z.asn1.x509.NameConstraints.superclass.constructor.call(this, t);
var e = Z.asn1, r = e.x509, i = e.ASN1Util.newObject, n = r.GeneralSubtree;
this.params = null, this.getExtnValueHex = function() {
var t = this.params, e = [];
if (void 0 != t.permit && void 0 != t.permit.length) {
for (var r = [], s = 0; s < t.permit.length; s++) r.push(new n(t.permit[s]));
e.push({
tag: {
tagi: "a0",
obj: {
seq: r
}
}
});
}
if (void 0 != t.exclude && void 0 != t.exclude.length) {
var a = [];
for (s = 0; s < t.exclude.length; s++) a.push(new n(t.exclude[s]));
e.push({
tag: {
tagi: "a1",
obj: {
seq: a
}
}
});
}
return this.asn1ExtnValue = i({
seq: e
}), this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.30", void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.NameConstraints, Z.asn1.x509.Extension), Z.asn1.x509.GeneralSubtree = function(t) {
Z.asn1.x509.GeneralSubtree.superclass.constructor.call(this);
var e = Z.asn1, r = e.x509.GeneralName, i = e.ASN1Util.newObject;
this.params = null, this.setByParam = function(t) {
this.params = t;
}, this.tohex = function() {
var t = this.params, e = [ new r(t) ];
void 0 != t.min && e.push({
tag: {
tagi: "80",
obj: {
int: t.min
}
}
});
void 0 != t.max && e.push({
tag: {
tagi: "81",
obj: {
int: t.max
}
}
});
return i({
seq: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.GeneralSubtree, Z.asn1.ASN1Object), Z.asn1.x509.ExtKeyUsage = function(t) {
Z.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t);
var e = Z.asn1;
this.setPurposeArray = function(t) {
this.asn1ExtnValue = new e.DERSequence();
for (var r = 0; r < t.length; r++) {
var i = new e.DERObjectIdentifier(t[r]);
this.asn1ExtnValue.appendASN1Object(i);
}
}, this.getExtnValueHex = function() {
return this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.37", void 0 !== t && void 0 !== t.array && this.setPurposeArray(t.array);
}, Jt(Z.asn1.x509.ExtKeyUsage, Z.asn1.x509.Extension), Z.asn1.x509.AuthorityKeyIdentifier = function(t) {
Z.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t);
var e = Z, r = e.asn1, i = r.DERTaggedObject, n = r.x509.GeneralNames;
e.crypto.Util.isKey;
this.asn1KID = null, this.asn1CertIssuer = null, this.asn1CertSN = null, this.getExtnValueHex = function() {
var t = new Array();
this.asn1KID && t.push(new i({
explicit: !1,
tag: "80",
obj: this.asn1KID
}));
this.asn1CertIssuer && t.push(new i({
explicit: !1,
tag: "a1",
obj: new n([ {
dn: this.asn1CertIssuer
} ])
}));
this.asn1CertSN && t.push(new i({
explicit: !1,
tag: "82",
obj: this.asn1CertSN
}));
var e = new r.DERSequence({
array: t
});
return this.asn1ExtnValue = e, this.asn1ExtnValue.tohex();
}, this.setKIDByParam = function(t) {
if (void 0 !== t.str || void 0 !== t.hex) this.asn1KID = new Z.asn1.DEROctetString(t); else if ("object" == typeof t && Z.crypto.Util.isKey(t) || "string" == typeof t && -1 != t.indexOf("BEGIN ")) {
var e = t;
"string" == typeof t && (e = Wt.getKey(t));
var r = Wt.getKeyID(e);
this.asn1KID = new Z.asn1.DEROctetString({
hex: r
});
}
}, this.setCertIssuerByParam = function(t) {
void 0 !== t.str || void 0 !== t.ldapstr || void 0 !== t.hex || void 0 !== t.certsubject || void 0 !== t.certissuer ? this.asn1CertIssuer = new Z.asn1.x509.X500Name(t) : "string" == typeof t && -1 != t.indexOf("BEGIN ") && -1 != t.indexOf("CERTIFICATE") && (this.asn1CertIssuer = new Z.asn1.x509.X500Name({
certissuer: t
}));
}, this.setCertSNByParam = function(t) {
if (void 0 !== t.str || void 0 !== t.bigint || void 0 !== t.hex) this.asn1CertSN = new Z.asn1.DERInteger(t); else if ("string" == typeof t && -1 != t.indexOf("BEGIN ") && t.indexOf("CERTIFICATE")) {
var e = new Zt();
e.readCertPEM(t);
var r = e.getSerialNumberHex();
this.asn1CertSN = new Z.asn1.DERInteger({
hex: r
});
}
}, this.oid = "2.5.29.35", void 0 !== t && (void 0 !== t.kid && this.setKIDByParam(t.kid), 
void 0 !== t.issuer && this.setCertIssuerByParam(t.issuer), void 0 !== t.sn && this.setCertSNByParam(t.sn), 
void 0 !== t.issuersn && "string" == typeof t.issuersn && -1 != t.issuersn.indexOf("BEGIN ") && t.issuersn.indexOf("CERTIFICATE") && (this.setCertSNByParam(t.issuersn), 
this.setCertIssuerByParam(t.issuersn)));
}, Jt(Z.asn1.x509.AuthorityKeyIdentifier, Z.asn1.x509.Extension), Z.asn1.x509.SubjectKeyIdentifier = function(t) {
Z.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, t);
var e = Z.asn1.DEROctetString;
this.asn1KID = null, this.getExtnValueHex = function() {
return this.asn1ExtnValue = this.asn1KID, this.asn1ExtnValue.tohex();
}, this.setKIDByParam = function(t) {
if (void 0 !== t.str || void 0 !== t.hex) this.asn1KID = new e(t); else if ("object" == typeof t && Z.crypto.Util.isKey(t) || "string" == typeof t && -1 != t.indexOf("BEGIN")) {
var r = t;
"string" == typeof t && (r = Wt.getKey(t));
var i = Wt.getKeyID(r);
this.asn1KID = new Z.asn1.DEROctetString({
hex: i
});
}
}, this.oid = "2.5.29.14", void 0 !== t && void 0 !== t.kid && this.setKIDByParam(t.kid);
}, Jt(Z.asn1.x509.SubjectKeyIdentifier, Z.asn1.x509.Extension), Z.asn1.x509.AuthorityInfoAccess = function(t) {
Z.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t), this.setAccessDescriptionArray = function(t) {
for (var e = new Array(), r = Z.asn1, i = r.DERSequence, n = r.DERObjectIdentifier, s = r.x509.GeneralName, a = 0; a < t.length; a++) {
var o, h = t[a];
if (void 0 !== h.ocsp) o = new i({
array: [ new n({
oid: "1.3.6.1.5.5.7.48.1"
}), new s({
uri: h.ocsp
}) ]
}); else {
if (void 0 === h.caissuer) throw new Error("unknown AccessMethod parameter: " + JSON.stringify(h));
o = new i({
array: [ new n({
oid: "1.3.6.1.5.5.7.48.2"
}), new s({
uri: h.caissuer
}) ]
});
}
e.push(o);
}
this.asn1ExtnValue = new i({
array: e
});
}, this.getExtnValueHex = function() {
return this.asn1ExtnValue.tohex();
}, this.oid = "1.3.6.1.5.5.7.1.1", void 0 !== t && void 0 !== t.array && this.setAccessDescriptionArray(t.array);
}, Jt(Z.asn1.x509.AuthorityInfoAccess, Z.asn1.x509.Extension), Z.asn1.x509.SubjectAltName = function(t) {
Z.asn1.x509.SubjectAltName.superclass.constructor.call(this, t), this.setNameArray = function(t) {
this.asn1ExtnValue = new Z.asn1.x509.GeneralNames(t);
}, this.getExtnValueHex = function() {
return this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.17", void 0 !== t && void 0 !== t.array && this.setNameArray(t.array);
}, Jt(Z.asn1.x509.SubjectAltName, Z.asn1.x509.Extension), Z.asn1.x509.IssuerAltName = function(t) {
Z.asn1.x509.IssuerAltName.superclass.constructor.call(this, t), this.setNameArray = function(t) {
this.asn1ExtnValue = new Z.asn1.x509.GeneralNames(t);
}, this.getExtnValueHex = function() {
return this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.18", void 0 !== t && void 0 !== t.array && this.setNameArray(t.array);
}, Jt(Z.asn1.x509.IssuerAltName, Z.asn1.x509.Extension), Z.asn1.x509.SubjectDirectoryAttributes = function(t) {
Z.asn1.x509.SubjectDirectoryAttributes.superclass.constructor.call(this, t);
var e = Z.asn1, r = e.DERSequence, i = e.ASN1Util.newObject, n = e.x509.OID.name2oid;
this.params = null, this.getExtnValueHex = function() {
for (var t = [], e = 0; e < this.params.array.length; e++) {
var s = this.params.array[e];
if (void 0 == s.attr || void 0 == s.array) {
var a = {
seq: [ {
oid: "1.2.3.4"
}, {
set: [ {
utf8str: "DE"
} ]
} ]
};
if ("dateOfBirth" == s.attr) a.seq[0].oid = n(s.attr), a.seq[1].set[0] = {
gentime: s.str
}; else if ("placeOfBirth" == s.attr) a.seq[0].oid = n(s.attr), a.seq[1].set[0] = {
utf8str: s.str
}; else if ("gender" == s.attr) a.seq[0].oid = n(s.attr), a.seq[1].set[0] = {
prnstr: s.str
}; else if ("countryOfCitizenship" == s.attr) a.seq[0].oid = n(s.attr), a.seq[1].set[0] = {
prnstr: s.str
}; else {
if ("countryOfResidence" != s.attr) throw new Error("unsupported attribute: " + s.attr);
a.seq[0].oid = n(s.attr), a.seq[1].set[0] = {
prnstr: s.str
};
}
t.push(new i(a));
} else {
var o = {
seq: [ {
oid: s.attr
}, {
set: s.array
} ]
};
t.push(i(o));
}
}
var h = new r({
array: t
});
return this.asn1ExtnValue = h, this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.9", void 0 !== t && (this.params = t);
}, Jt(Z.asn1.x509.SubjectDirectoryAttributes, Z.asn1.x509.Extension), Z.asn1.x509.PrivateExtension = function(t) {
Z.asn1.x509.PrivateExtension.superclass.constructor.call(this, t);
var e = Z, r = e.lang.String.isHex, i = e.asn1, n = i.x509.OID.name2oid, s = i.ASN1Util.newObject;
this.params = null, this.setByParam = function(t) {
this.oid = n(t.extname), this.params = t;
}, this.getExtnValueHex = function() {
if (void 0 == this.params.extname || void 0 == this.params.extn) throw new Error("extname or extnhex not specified");
var t = this.params.extn;
if ("string" == typeof t && r(t)) return t;
if ("object" == typeof t) try {
return s(t).tohex();
} catch (t) {}
throw new Error("unsupported extn value");
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.x509.PrivateExtension, Z.asn1.x509.Extension), Z.asn1.x509.CRL = function(t) {
Z.asn1.x509.CRL.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERSequence, i = e.DERBitString, n = e.x509, s = n.AlgorithmIdentifier, a = n.TBSCertList;
this.params = void 0, this.setByParam = function(t) {
this.params = t;
}, this.sign = function() {
var t = new a(this.params).tohex(), e = new Z.crypto.Signature({
alg: this.params.sigalg
});
e.init(this.params.cakey), e.updateHex(t);
var r = e.sign();
this.params.sighex = r;
}, this.getPEM = function() {
return xt(this.tohex(), "X509 CRL");
}, this.tohex = function() {
var t = this.params;
void 0 == t.tbsobj && (t.tbsobj = new a(t));
void 0 == t.sighex && void 0 != t.cakey && this.sign();
if (void 0 == t.sighex) throw new Error("sighex or cakey parameter not defined");
var e = [];
e.push(t.tbsobj), e.push(new s({
name: t.sigalg
})), e.push(new i({
hex: "00" + t.sighex
}));
return new r({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && (this.params = t);
}, Jt(Z.asn1.x509.CRL, Z.asn1.ASN1Object), Z.asn1.x509.TBSCertList = function(t) {
Z.asn1.x509.TBSCertList.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERInteger, i = e.DERSequence, n = e.DERTaggedObject, s = (e.DERObjectIdentifier, 
e.x509), a = s.AlgorithmIdentifier, o = s.Time, h = s.Extensions, u = s.X500Name;
this.params = null, this.setByParam = function(t) {
this.params = t;
}, this.getRevCertSequence = function() {
for (var t = [], e = this.params.revcert, n = 0; n < e.length; n++) {
var s = [ new r(e[n].sn), new o(e[n].date) ];
void 0 != e[n].ext && s.push(new h(e[n].ext)), t.push(new i({
array: s
}));
}
return new i({
array: t
});
}, this.tohex = function() {
var t = [], e = this.params;
if (void 0 != e.version) {
var s = e.version - 1, c = new r({
int: s
});
t.push(c);
}
t.push(new a({
name: e.sigalg
})), t.push(new u(e.issuer)), t.push(new o(e.thisupdate));
void 0 != e.nextupdate && t.push(new o(e.nextupdate));
void 0 != e.revcert && t.push(this.getRevCertSequence());
if (void 0 != e.ext) {
var l = new h(e.ext);
t.push(new n({
tag: "a0",
explicit: !0,
obj: l
}));
}
return new i({
array: t
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.TBSCertList, Z.asn1.ASN1Object), Z.asn1.x509.CRLEntry = function(t) {
Z.asn1.x509.CRLEntry.superclass.constructor.call(this);
var e = Z.asn1;
this.setCertSerial = function(t) {
this.sn = new e.DERInteger(t);
}, this.setRevocationDate = function(t) {
this.time = new e.x509.Time(t);
}, this.tohex = function() {
var t = new e.DERSequence({
array: [ this.sn, this.time ]
});
return this.TLV = t.tohex(), this.TLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && (void 0 !== t.time && this.setRevocationDate(t.time), void 0 !== t.sn && this.setCertSerial(t.sn));
}, Jt(Z.asn1.x509.CRLEntry, Z.asn1.ASN1Object), Z.asn1.x509.CRLNumber = function(t) {
Z.asn1.x509.CRLNumber.superclass.constructor.call(this, t), this.params = void 0, 
this.getExtnValueHex = function() {
return this.asn1ExtnValue = new Z.asn1.DERInteger(this.params.num), this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.20", void 0 != t && (this.params = t);
}, Jt(Z.asn1.x509.CRLNumber, Z.asn1.x509.Extension), Z.asn1.x509.CRLReason = function(t) {
Z.asn1.x509.CRLReason.superclass.constructor.call(this, t), this.params = void 0, 
this.getExtnValueHex = function() {
return this.asn1ExtnValue = new Z.asn1.DEREnumerated(this.params.code), this.asn1ExtnValue.tohex();
}, this.oid = "2.5.29.21", void 0 != t && (this.params = t);
}, Jt(Z.asn1.x509.CRLReason, Z.asn1.x509.Extension), Z.asn1.x509.OCSPNonce = function(t) {
Z.asn1.x509.OCSPNonce.superclass.constructor.call(this, t), this.params = void 0, 
this.getExtnValueHex = function() {
return this.asn1ExtnValue = new Z.asn1.DEROctetString(this.params), this.asn1ExtnValue.tohex();
}, this.oid = "1.3.6.1.5.5.7.48.1.2", void 0 != t && (this.params = t);
}, Jt(Z.asn1.x509.OCSPNonce, Z.asn1.x509.Extension), Z.asn1.x509.OCSPNoCheck = function(t) {
Z.asn1.x509.OCSPNoCheck.superclass.constructor.call(this, t), this.params = void 0, 
this.getExtnValueHex = function() {
return this.asn1ExtnValue = new Z.asn1.DERNull(), this.asn1ExtnValue.tohex();
}, this.oid = "1.3.6.1.5.5.7.48.1.5", void 0 != t && (this.params = t);
}, Jt(Z.asn1.x509.OCSPNoCheck, Z.asn1.x509.Extension), Z.asn1.x509.AdobeTimeStamp = function(t) {
Z.asn1.x509.AdobeTimeStamp.superclass.constructor.call(this, t);
var e = Z.asn1, r = e.DERInteger, i = e.DERBoolean, n = e.DERSequence, s = e.x509.GeneralName;
this.params = null, this.getExtnValueHex = function() {
var t = this.params, e = [ new r(1) ];
return e.push(new s({
uri: t.uri
})), void 0 != t.reqauth && e.push(new i(t.reqauth)), this.asn1ExtnValue = new n({
array: e
}), this.asn1ExtnValue.tohex();
}, this.oid = "1.2.840.113583.1.1.9.1", void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.AdobeTimeStamp, Z.asn1.x509.Extension), Z.asn1.x509.X500Name = function(t) {
Z.asn1.x509.X500Name.superclass.constructor.call(this), this.asn1Array = [], this.paramArray = [], 
this.sRule = "utf8";
var e = Z.asn1, r = e.x509, i = r.RDN;
this.setByString = function(t, e) {
void 0 !== e && (this.sRule = e);
var r = t.split("/");
r.shift();
for (var n = [], s = 0; s < r.length; s++) if (r[s].match(/^[^=]+=.+$/)) n.push(r[s]); else {
var a = n.length - 1;
n[a] = n[a] + "/" + r[s];
}
for (s = 0; s < n.length; s++) this.asn1Array.push(new i({
str: n[s],
rule: this.sRule
}));
}, this.setByLdapString = function(t, e) {
void 0 !== e && (this.sRule = e);
var i = r.X500Name.ldapToCompat(t);
this.setByString(i, e);
}, this.setByObject = function(t, e) {
void 0 !== e && (this.sRule = e);
for (var r in t) if (t.hasOwnProperty(r)) {
var n = new i({
str: r + "=" + t[r],
rule: this.sRule
});
this.asn1Array ? this.asn1Array.push(n) : this.asn1Array = [ n ];
}
}, this.setByParam = function(t) {
void 0 !== t.rule && (this.sRule = t.rule);
if (void 0 !== t.array) this.paramArray = t.array; else if (void 0 !== t.str) this.setByString(t.str); else if (void 0 !== t.ldapstr) this.setByLdapString(t.ldapstr); else if (void 0 !== t.hex) this.hTLV = t.hex; else if (void 0 !== t.certissuer) {
(e = new Zt()).readCertPEM(t.certissuer), this.hTLV = e.getIssuerHex();
} else if (void 0 !== t.certsubject) {
var e;
(e = new Zt()).readCertPEM(t.certsubject), this.hTLV = e.getSubjectHex();
} else "object" == typeof t && void 0 === t.certsubject && void 0 === t.certissuer && this.setByObject(t);
}, this.tohex = function() {
if ("string" == typeof this.hTLV) return this.hTLV;
if (0 == this.asn1Array.length && this.paramArray.length > 0) for (var t = 0; t < this.paramArray.length; t++) {
var r = {
array: this.paramArray[t]
};
"utf8" != this.sRule && (r.rule = this.sRule);
var n = new i(r);
this.asn1Array.push(n);
}
var s = new e.DERSequence({
array: this.asn1Array
});
return this.hTLV = s.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.X500Name, Z.asn1.ASN1Object), Z.asn1.x509.X500Name.compatToLDAP = function(t) {
if ("/" !== t.substr(0, 1)) throw "malformed input";
var e = (t = t.substr(1)).split("/");
return e.reverse(), (e = e.map(function(t) {
return t.replace(/,/, "\\,");
})).join(",");
}, Z.asn1.x509.X500Name.onelineToLDAP = function(t) {
return Z.asn1.x509.X500Name.compatToLDAP(t);
}, Z.asn1.x509.X500Name.ldapToCompat = function(t) {
for (var e = t.split(","), r = !1, i = [], n = 0; e.length > 0; n++) {
var s = e.shift();
if (!0 === r) {
var a = (i.pop() + "," + s).replace(/\\,/g, ",");
i.push(a), r = !1;
} else i.push(s);
"\\" === s.substr(-1, 1) && (r = !0);
}
return (i = i.map(function(t) {
return t.replace("/", "\\/");
})).reverse(), "/" + i.join("/");
}, Z.asn1.x509.X500Name.ldapToOneline = function(t) {
return Z.asn1.x509.X500Name.ldapToCompat(t);
}, Z.asn1.x509.RDN = function(t) {
Z.asn1.x509.RDN.superclass.constructor.call(this), this.asn1Array = [], this.paramArray = [], 
this.sRule = "utf8";
var e = Z.asn1.x509.AttributeTypeAndValue;
this.setByParam = function(t) {
void 0 !== t.rule && (this.sRule = t.rule), void 0 !== t.str && this.addByMultiValuedString(t.str), 
void 0 !== t.array && (this.paramArray = t.array);
}, this.addByString = function(t) {
this.asn1Array.push(new Z.asn1.x509.AttributeTypeAndValue({
str: t,
rule: this.sRule
}));
}, this.addByMultiValuedString = function(t) {
for (var e = Z.asn1.x509.RDN.parseString(t), r = 0; r < e.length; r++) this.addByString(e[r]);
}, this.tohex = function() {
if (0 == this.asn1Array.length && this.paramArray.length > 0) for (var t = 0; t < this.paramArray.length; t++) {
var r = this.paramArray[t];
void 0 !== r.rule && "utf8" != this.sRule && (r.rule = this.sRule);
var i = new e(r);
this.asn1Array.push(i);
}
var n = new Z.asn1.DERSet({
array: this.asn1Array
});
return this.TLV = n.tohex(), this.TLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.RDN, Z.asn1.ASN1Object), Z.asn1.x509.RDN.parseString = function(t) {
for (var e = t.split(/\+/), r = !1, i = [], n = 0; e.length > 0; n++) {
var s = e.shift();
if (!0 === r) {
var a = (i.pop() + "+" + s).replace(/\\\+/g, "+");
i.push(a), r = !1;
} else i.push(s);
"\\" === s.substr(-1, 1) && (r = !0);
}
var o = !1, h = [];
for (n = 0; i.length > 0; n++) {
s = i.shift();
if (!0 === o) {
var u = h.pop();
if (s.match(/"$/)) {
a = (u + "+" + s).replace(/^([^=]+)="(.*)"$/, "$1=$2");
h.push(a), o = !1;
} else h.push(u + "+" + s);
} else h.push(s);
s.match(/^[^=]+="/) && (o = !0);
}
return h;
}, Z.asn1.x509.AttributeTypeAndValue = function(t) {
Z.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this), this.sRule = "utf8", 
this.sType = null, this.sValue = null, this.dsType = null;
var e = Z, r = e.asn1, i = r.DERSequence, n = r.DERUTF8String, s = r.DERPrintableString, a = r.DERTeletexString, o = r.DERIA5String, h = r.DERVisibleString, u = r.DERBMPString, c = e.lang.String.isMail, l = e.lang.String.isPrintable;
this.setByParam = function(t) {
void 0 !== t.rule && (this.sRule = t.rule);
void 0 !== t.ds && (this.dsType = t.ds);
if (void 0 === t.value && void 0 !== t.str) {
var e = t.str.match(/^([^=]+)=(.+)$/);
if (!e) throw new Error("malformed attrTypeAndValueStr: " + attrTypeAndValueStr);
this.sType = e[1], this.sValue = e[2];
} else this.sType = t.type, this.sValue = t.value;
}, this.setByString = function(t, e) {
void 0 !== e && (this.sRule = e);
var r = t.match(/^([^=]+)=(.+)$/);
if (!r) throw new Error("malformed attrTypeAndValueStr: " + attrTypeAndValueStr);
this.setByAttrTypeAndValueStr(r[1], r[2]);
}, this._getDsType = function() {
var t = this.sType, e = this.sValue, r = this.sRule;
return "prn" === r ? "CN" == t && c(e) ? "ia5" : l(e) ? "prn" : "utf8" : "utf8" === r ? "CN" == t && c(e) ? "ia5" : "C" == t ? "prn" : "utf8" : "utf8";
}, this.setByAttrTypeAndValueStr = function(t, e, r) {
void 0 !== r && (this.sRule = r), this.sType = t, this.sValue = e;
}, this.getValueObj = function(t, e) {
if ("utf8" == t) return new n({
str: e
});
if ("prn" == t) return new s({
str: e
});
if ("tel" == t) return new a({
str: e
});
if ("ia5" == t) return new o({
str: e
});
if ("vis" == t) return new h({
str: e
});
if ("bmp" == t) return new u({
str: e
});
throw new Error("unsupported directory string type: type=" + t + " value=" + e);
}, this.tohex = function() {
null == this.dsType && (this.dsType = this._getDsType());
var t = Z.asn1.x509.OID.atype2obj(this.sType), e = this.getValueObj(this.dsType, this.sValue), r = new i({
array: [ t, e ]
});
return this.TLV = r.tohex(), this.TLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.AttributeTypeAndValue, Z.asn1.ASN1Object), Z.asn1.x509.SubjectPublicKeyInfo = function(t) {
Z.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
var e = Z, r = e.asn1, i = r.DERInteger, n = r.DERBitString, s = r.DERObjectIdentifier, a = r.DERSequence, o = r.ASN1Util.newObject, h = r.x509.AlgorithmIdentifier, u = e.crypto;
u.ECDSA, u.DSA;
this.getASN1Object = function() {
if (null == this.asn1AlgId || null == this.asn1SubjPKey) throw "algId and/or subjPubKey not set";
return new a({
array: [ this.asn1AlgId, this.asn1SubjPKey ]
});
}, this.tohex = function() {
var t = this.getASN1Object();
return this.hTLV = t.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setPubKey = function(t) {
try {
if (t instanceof J) {
var e = o({
seq: [ {
int: {
bigint: t.n
}
}, {
int: {
int: t.e
}
} ]
}).tohex();
this.asn1AlgId = new h({
name: "rsaEncryption"
}), this.asn1SubjPKey = new n({
hex: "00" + e
});
}
} catch (t) {}
try {
if (t instanceof Z.crypto.ECDSA) {
var r = new s({
name: t.curveName
});
this.asn1AlgId = new h({
name: "ecPublicKey",
asn1params: r
}), this.asn1SubjPKey = new n({
hex: "00" + t.pubKeyHex
});
}
} catch (t) {}
try {
if (t instanceof Z.crypto.DSA) {
r = new o({
seq: [ {
int: {
bigint: t.p
}
}, {
int: {
bigint: t.q
}
}, {
int: {
bigint: t.g
}
} ]
});
this.asn1AlgId = new h({
name: "dsa",
asn1params: r
});
var a = new i({
bigint: t.y
});
this.asn1SubjPKey = new n({
hex: "00" + a.tohex()
});
}
} catch (t) {}
}, void 0 !== t && this.setPubKey(t);
}, Jt(Z.asn1.x509.SubjectPublicKeyInfo, Z.asn1.ASN1Object), Z.asn1.x509.Time = function(t) {
Z.asn1.x509.Time.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERUTCTime, i = e.DERGeneralizedTime;
this.params = null, this.type = null, this.setTimeParams = function(t) {
this.timeParams = t;
}, this.setByParam = function(t) {
this.params = t;
}, this.getType = function(t) {
return t.match(/^[0-9]{12}Z$/) ? "utc" : t.match(/^[0-9]{14}Z$/) ? "gen" : t.match(/^[0-9]{12}\.[0-9]+Z$/) ? "utc" : t.match(/^[0-9]{14}\.[0-9]+Z$/) ? "gen" : null;
}, this.tohex = function() {
var t = this.params, e = null;
"string" == typeof t && (t = {
str: t
});
null != t && t.str && (null == t.type || void 0 == t.type) && (t.type = this.getType(t.str));
null != t && t.str ? ("utc" == t.type && (e = new r(t.str)), "gen" == t.type && (e = new i(t.str))) : e = "gen" == this.type ? new i() : new r();
if (null == e) throw new Error("wrong setting for Time");
return this.TLV = e.tohex(), this.TLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Z.asn1.x509.Time_bak = function(t) {
Z.asn1.x509.Time_bak.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERUTCTime, i = e.DERGeneralizedTime;
this.setTimeParams = function(t) {
this.timeParams = t;
}, this.tohex = function() {
var t = null;
return t = null != this.timeParams ? "utc" == this.type ? new r(this.timeParams) : new i(this.timeParams) : "utc" == this.type ? new r() : new i(), 
this.TLV = t.tohex(), this.TLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, this.type = "utc", void 0 !== t && (void 0 !== t.type ? this.type = t.type : void 0 !== t.str && (t.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"), 
t.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")), this.timeParams = t);
}, Jt(Z.asn1.x509.Time, Z.asn1.ASN1Object), Z.asn1.x509.AlgorithmIdentifier = function(t) {
Z.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this), this.nameAlg = null, 
this.asn1Alg = null, this.asn1Params = null, this.paramEmpty = !1;
var e = Z.asn1, r = e.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
this.tohex = function() {
if (null === this.nameAlg && null === this.asn1Alg) throw new Error("algorithm not specified");
if (null !== this.nameAlg) {
var t = null;
for (var i in r) i === this.nameAlg && (t = r[i]);
if (null !== t) return this.hTLV = t, this.hTLV;
}
null !== this.nameAlg && null === this.asn1Alg && (this.asn1Alg = e.x509.OID.name2obj(this.nameAlg));
var n = [ this.asn1Alg ];
null !== this.asn1Params && n.push(this.asn1Params);
var s = new e.DERSequence({
array: n
});
return this.hTLV = s.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
};
void 0 !== t && (void 0 !== t.name && (this.nameAlg = t.name), void 0 !== t.asn1params && (this.asn1Params = t.asn1params), 
void 0 !== t.paramempty && (this.paramEmpty = t.paramempty));
if (null === this.asn1Params && !1 === this.paramEmpty && null !== this.nameAlg) {
void 0 !== this.nameAlg.name && (this.nameAlg = this.nameAlg.name);
var i = this.nameAlg.toLowerCase();
"withdsa" !== i.substr(-7, 7) && "withecdsa" !== i.substr(-9, 9) && (this.asn1Params = new e.DERNull());
}
}, Jt(Z.asn1.x509.AlgorithmIdentifier, Z.asn1.ASN1Object), Z.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV = {
SHAwithRSAandMGF1: "300d06092a864886f70d01010a3000",
SHA256withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040201a11a301806092a864886f70d010108300b0609608648016503040201a203020120",
SHA384withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040202a11a301806092a864886f70d010108300b0609608648016503040202a203020130",
SHA512withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040203a11a301806092a864886f70d010108300b0609608648016503040203a203020140"
}, Z.asn1.x509.GeneralName = function(t) {
Z.asn1.x509.GeneralName.superclass.constructor.call(this);
var e = Z.asn1, r = e.x509, i = r.X500Name, n = r.OtherName, s = e.DERIA5String, a = (e.DERPrintableString, 
e.DEROctetString), o = e.DERTaggedObject, h = e.ASN1Object, u = Error;
this.params = null, this.setByParam = function(t) {
this.params = t;
}, this.tohex = function() {
var t, e, r = this.params, c = !1;
if (void 0 !== r.other) t = "a0", e = new n(r.other); else if (void 0 !== r.rfc822) t = "81", 
e = new s({
str: r.rfc822
}); else if (void 0 !== r.dns) t = "82", e = new s({
str: r.dns
}); else if (void 0 !== r.dn) t = "a4", c = !0, e = "string" == typeof r.dn ? new i({
str: r.dn
}) : r.dn instanceof Z.asn1.x509.X500Name ? r.dn : new i(r.dn); else if (void 0 !== r.ldapdn) t = "a4", 
c = !0, e = new i({
ldapstr: r.ldapdn
}); else if (void 0 !== r.certissuer || void 0 !== r.certsubj) {
t = "a4", c = !0;
var l, f, d = null;
void 0 !== r.certsubj ? (l = !1, f = r.certsubj) : (l = !0, f = r.certissuer);
f.match(/^[0-9A-Fa-f]+$/);
-1 != f.indexOf("-----BEGIN ") && (d = St(f));
if (null == d) throw new Error("certsubj/certissuer not cert");
var g, p = new Zt();
p.hex = d;
g = l ? p.getIssuerHex() : p.getSubjectHex(), (e = new h()).hTLV = g;
} else if (void 0 !== r.uri) t = "86", e = new s({
str: r.uri
}); else {
if (void 0 === r.ip) throw new u("improper params");
t = "87";
var v, y = r.ip;
try {
if (y.match(/^[0-9a-f]+$/)) {
var m = y.length;
if (8 != m && 16 != m && 32 != m && 64 != m) throw "err";
v = y;
} else v = Tt(y);
} catch (t) {
throw new u("malformed IP address: " + r.ip + ":" + t.message);
}
e = new a({
hex: v
});
}
return new o({
tag: t,
explicit: c,
obj: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.GeneralName, Z.asn1.ASN1Object), Z.asn1.x509.GeneralNames = function(t) {
Z.asn1.x509.GeneralNames.superclass.constructor.call(this);
var e = Z.asn1;
this.setByParamArray = function(t) {
for (var r = 0; r < t.length; r++) {
var i = new e.x509.GeneralName(t[r]);
this.asn1Array.push(i);
}
}, this.tohex = function() {
return new e.DERSequence({
array: this.asn1Array
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.asn1Array = new Array(), "undefined" != typeof t && this.setByParamArray(t);
}, Jt(Z.asn1.x509.GeneralNames, Z.asn1.ASN1Object), Z.asn1.x509.OtherName = function(t) {
Z.asn1.x509.OtherName.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERObjectIdentifier, i = e.DERSequence, n = e.ASN1Util.newObject;
this.params = null, this.setByParam = function(t) {
this.params = t;
}, this.tohex = function() {
var t = this.params;
if (void 0 == t.oid || void 0 == t.value) throw new Error("oid or value not specified");
var e = new r({
oid: t.oid
}), s = n({
tag: {
tag: "a0",
explicit: !0,
obj: t.value
}
});
return new i({
array: [ e, s ]
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.x509.OtherName, Z.asn1.ASN1Object), Z.asn1.x509.OID = new function() {
var t = Z.asn1.DERObjectIdentifier;
this.name2oidList = {
"aes128-CBC": "2.16.840.1.101.3.4.1.2",
"aes256-CBC": "2.16.840.1.101.3.4.1.42",
sha1: "1.3.14.3.2.26",
sha256: "2.16.840.1.101.3.4.2.1",
sha384: "2.16.840.1.101.3.4.2.2",
sha512: "2.16.840.1.101.3.4.2.3",
sha224: "2.16.840.1.101.3.4.2.4",
md5: "1.2.840.113549.2.5",
md2: "1.3.14.7.2.2.1",
ripemd160: "1.3.36.3.2.1",
hmacWithSHA1: "1.2.840.113549.2.7",
hmacWithSHA224: "1.2.840.113549.2.8",
hmacWithSHA256: "1.2.840.113549.2.9",
hmacWithSHA384: "1.2.840.113549.2.10",
hmacWithSHA512: "1.2.840.113549.2.11",
MD2withRSA: "1.2.840.113549.1.1.2",
MD4withRSA: "1.2.840.113549.1.1.3",
MD5withRSA: "1.2.840.113549.1.1.4",
SHA1withRSA: "1.2.840.113549.1.1.5",
"pkcs1-MGF": "1.2.840.113549.1.1.8",
rsaPSS: "1.2.840.113549.1.1.10",
SHA224withRSA: "1.2.840.113549.1.1.14",
SHA256withRSA: "1.2.840.113549.1.1.11",
SHA384withRSA: "1.2.840.113549.1.1.12",
SHA512withRSA: "1.2.840.113549.1.1.13",
SHA1withECDSA: "1.2.840.10045.4.1",
SHA224withECDSA: "1.2.840.10045.4.3.1",
SHA256withECDSA: "1.2.840.10045.4.3.2",
SHA384withECDSA: "1.2.840.10045.4.3.3",
SHA512withECDSA: "1.2.840.10045.4.3.4",
dsa: "1.2.840.10040.4.1",
SHA1withDSA: "1.2.840.10040.4.3",
SHA224withDSA: "2.16.840.1.101.3.4.3.1",
SHA256withDSA: "2.16.840.1.101.3.4.3.2",
rsaEncryption: "1.2.840.113549.1.1.1",
commonName: "2.5.4.3",
countryName: "2.5.4.6",
localityName: "2.5.4.7",
stateOrProvinceName: "2.5.4.8",
streetAddress: "2.5.4.9",
organizationName: "2.5.4.10",
organizationalUnitName: "2.5.4.11",
domainComponent: "0.9.2342.19200300.100.1.25",
userId: "0.9.2342.19200300.100.1.1",
surname: "2.5.4.4",
givenName: "2.5.4.42",
title: "2.5.4.12",
distinguishedName: "2.5.4.49",
emailAddress: "1.2.840.113549.1.9.1",
description: "2.5.4.13",
businessCategory: "2.5.4.15",
postalCode: "2.5.4.17",
uniqueIdentifier: "2.5.4.45",
organizationIdentifier: "2.5.4.97",
jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
subjectDirectoryAttributes: "2.5.29.9",
subjectKeyIdentifier: "2.5.29.14",
keyUsage: "2.5.29.15",
subjectAltName: "2.5.29.17",
issuerAltName: "2.5.29.18",
basicConstraints: "2.5.29.19",
cRLNumber: "2.5.29.20",
cRLReason: "2.5.29.21",
nameConstraints: "2.5.29.30",
cRLDistributionPoints: "2.5.29.31",
certificatePolicies: "2.5.29.32",
anyPolicy: "2.5.29.32.0",
policyMappings: "2.5.29.33",
authorityKeyIdentifier: "2.5.29.35",
policyConstraints: "2.5.29.36",
extKeyUsage: "2.5.29.37",
inhibitAnyPolicy: "2.5.29.54",
authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
ocsp: "1.3.6.1.5.5.7.48.1",
ocspBasic: "1.3.6.1.5.5.7.48.1.1",
ocspNonce: "1.3.6.1.5.5.7.48.1.2",
ocspNoCheck: "1.3.6.1.5.5.7.48.1.5",
caIssuers: "1.3.6.1.5.5.7.48.2",
anyExtendedKeyUsage: "2.5.29.37.0",
serverAuth: "1.3.6.1.5.5.7.3.1",
clientAuth: "1.3.6.1.5.5.7.3.2",
codeSigning: "1.3.6.1.5.5.7.3.3",
emailProtection: "1.3.6.1.5.5.7.3.4",
timeStamping: "1.3.6.1.5.5.7.3.8",
ocspSigning: "1.3.6.1.5.5.7.3.9",
smtpUTF8Mailbox: "1.3.6.1.5.5.7.8.9",
dateOfBirth: "1.3.6.1.5.5.7.9.1",
placeOfBirth: "1.3.6.1.5.5.7.9.2",
gender: "1.3.6.1.5.5.7.9.3",
countryOfCitizenship: "1.3.6.1.5.5.7.9.4",
countryOfResidence: "1.3.6.1.5.5.7.9.5",
ecPublicKey: "1.2.840.10045.2.1",
"P-256": "1.2.840.10045.3.1.7",
secp256r1: "1.2.840.10045.3.1.7",
secp256k1: "1.3.132.0.10",
secp384r1: "1.3.132.0.34",
secp521r1: "1.3.132.0.35",
pkcs5PBES2: "1.2.840.113549.1.5.13",
pkcs5PBKDF2: "1.2.840.113549.1.5.12",
"des-EDE3-CBC": "1.2.840.113549.3.7",
data: "1.2.840.113549.1.7.1",
"signed-data": "1.2.840.113549.1.7.2",
"enveloped-data": "1.2.840.113549.1.7.3",
"digested-data": "1.2.840.113549.1.7.5",
"encrypted-data": "1.2.840.113549.1.7.6",
"authenticated-data": "1.2.840.113549.1.9.16.1.2",
tstinfo: "1.2.840.113549.1.9.16.1.4",
signingCertificate: "1.2.840.113549.1.9.16.2.12",
timeStampToken: "1.2.840.113549.1.9.16.2.14",
signaturePolicyIdentifier: "1.2.840.113549.1.9.16.2.15",
etsArchiveTimeStamp: "1.2.840.113549.1.9.16.2.27",
signingCertificateV2: "1.2.840.113549.1.9.16.2.47",
etsArchiveTimeStampV2: "1.2.840.113549.1.9.16.2.48",
extensionRequest: "1.2.840.113549.1.9.14",
contentType: "1.2.840.113549.1.9.3",
messageDigest: "1.2.840.113549.1.9.4",
signingTime: "1.2.840.113549.1.9.5",
counterSignature: "1.2.840.113549.1.9.6",
archiveTimeStampV3: "0.4.0.1733.2.4",
pdfRevocationInfoArchival: "1.2.840.113583.1.1.8",
adobeTimeStamp: "1.2.840.113583.1.1.9.1",
smimeMailboxLegacy: "2.23.140.1.5.1.1",
smimeMailboxMulti: "2.23.140.1.5.1.2",
smimeMailboxStrict: "2.23.140.1.5.1.3",
smimeOrganizationLegacy: "2.23.140.1.5.2.1",
smimeOrganizationMulti: "2.23.140.1.5.2.2",
smimeOrganizationStrict: "2.23.140.1.5.2.3",
smimeSponsorLegacy: "2.23.140.1.5.3.1",
smimeSponsorMulti: "2.23.140.1.5.3.2",
smimeSponsorStrict: "2.23.140.1.5.3.3",
smimeIndividualLegacy: "2.23.140.1.5.4.1",
smimeIndividualMulti: "2.23.140.1.5.4.2",
smimeIndividualStrict: "2.23.140.1.5.4.3"
}, this.atype2oidList = {
CN: "2.5.4.3",
L: "2.5.4.7",
ST: "2.5.4.8",
O: "2.5.4.10",
OU: "2.5.4.11",
C: "2.5.4.6",
STREET: "2.5.4.9",
DC: "0.9.2342.19200300.100.1.25",
UID: "0.9.2342.19200300.100.1.1",
SN: "2.5.4.4",
T: "2.5.4.12",
GN: "2.5.4.42",
DN: "2.5.4.49",
E: "1.2.840.113549.1.9.1",
description: "2.5.4.13",
businessCategory: "2.5.4.15",
postalCode: "2.5.4.17",
serialNumber: "2.5.4.5",
uniqueIdentifier: "2.5.4.45",
organizationIdentifier: "2.5.4.97",
jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3"
}, this.objCache = {}, this.name2obj = function(e) {
if ("undefined" != typeof this.objCache[e]) return this.objCache[e];
if ("undefined" == typeof this.name2oidList[e]) throw "Name of ObjectIdentifier not defined: " + e;
var r = this.name2oidList[e], i = new t({
oid: r
});
return this.objCache[e] = i, i;
}, this.atype2obj = function(e) {
if (void 0 !== this.objCache[e]) return this.objCache[e];
var r;
if (e.match(/^\d+\.\d+\.[0-9.]+$/)) r = e; else if (void 0 !== this.atype2oidList[e]) r = this.atype2oidList[e]; else {
if (void 0 === this.name2oidList[e]) throw new Error("AttributeType name undefined: " + e);
r = this.name2oidList[e];
}
var i = new t({
oid: r
});
return this.objCache[e] = i, i;
}, this.registerOIDs = function(t) {
if (this.checkOIDs(t)) for (var e in t) this.name2oidList[e] = t[e];
}, this.checkOIDs = function(t) {
try {
var e = Object.keys(t);
return 0 != e.length && (e.map(function(t, e, r) {
if (!this[t].match(/^[0-2]\.[0-9.]+$/)) throw new Error("value is not OID");
}, t), !0);
} catch (t) {
return !1;
}
};
}(), Z.asn1.x509.OID.oid2name = function(t) {
var e = Z.asn1.x509.OID.name2oidList;
for (var r in e) if (e[r] == t) return r;
return "";
}, Z.asn1.x509.OID.oid2atype = function(t) {
var e = Z.asn1.x509.OID.atype2oidList;
for (var r in e) if (e[r] == t) return r;
return t;
}, Z.asn1.x509.OID.name2oid = function(t) {
if (t.match(/^[0-9.]+$/)) return t;
var e = Z.asn1.x509.OID.name2oidList;
return void 0 === e[t] ? "" : e[t];
}, Z.asn1.x509.X509Util = {}, Z.asn1.x509.X509Util.newCertPEM = function(t) {
var e = Z.asn1.x509;
e.TBSCertificate;
return new (0, e.Certificate)(t).getPEM();
};
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.asn1 || !Z.asn1) && (Z.asn1 = {});
("undefined" == typeof Z.asn1.cms || !Z.asn1.cms) && (Z.asn1.cms = {});
Z.asn1.cms.Attribute = function(t) {
var e = Error, r = Z.asn1, i = r.DERSequence, n = r.DERSet, s = r.DERObjectIdentifier;
this.params = null, this.typeOid = null, this.setByParam = function(t) {
this.params = t;
}, this.getValueArray = function() {
throw new e("not yet implemented abstract");
}, this.tohex = function() {
var t = new s({
oid: this.typeOid
}), e = new n({
array: this.getValueArray()
});
return new i({
array: [ t, e ]
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
};
}, Jt(Z.asn1.cms.Attribute, Z.asn1.ASN1Object), Z.asn1.cms.ContentType = function(t) {
var e = Z.asn1;
e.cms.ContentType.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.3", 
this.getValueArray = function() {
return [ new e.DERObjectIdentifier(this.params.type) ];
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.ContentType, Z.asn1.cms.Attribute), Z.asn1.cms.MessageDigest = function(t) {
var e = Z.asn1, r = e.DEROctetString;
e.cms.MessageDigest.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.4", 
this.getValueArray = function() {
return [ new r(this.params) ];
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.MessageDigest, Z.asn1.cms.Attribute), Z.asn1.cms.SigningTime = function(t) {
var e = Z.asn1;
e.cms.SigningTime.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.5", 
this.getValueArray = function() {
return [ new e.x509.Time(this.params) ];
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.SigningTime, Z.asn1.cms.Attribute), Z.asn1.cms.SigningCertificate = function(t) {
var e = Error, r = Z, i = r.asn1, n = i.DERSequence, s = i.cms, a = s.ESSCertID;
r.crypto;
s.SigningCertificate.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.12", 
this.getValueArray = function() {
if (null == this.params || void 0 == this.params || void 0 == this.params.array) throw new e("parameter 'array' not specified");
for (var r = this.params.array, i = [], s = 0; s < r.length; s++) {
var o = r[s];
0 == t.hasis && "string" == typeof o && (-1 != o.indexOf("-----BEGIN") || et.isASN1HEX(o)) && (o = {
cert: o
}), 0 != o.hasis && 0 == t.hasis && (o.hasis = !1), i.push(new a(o));
}
var h = new n({
array: i
});
return [ new n({
array: [ h ]
}) ];
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.SigningCertificate, Z.asn1.cms.Attribute), Z.asn1.cms.ESSCertID = function(t) {
Z.asn1.cms.ESSCertID.superclass.constructor.call(this);
var e = Error, r = Z, i = r.asn1, n = i.DEROctetString, s = i.DERSequence, a = i.cms.IssuerSerial;
this.params = null, this.getCertHash = function(t, i) {
if (void 0 != t.hash) return t.hash;
if ("string" == typeof t && -1 == t.indexOf("-----BEGIN") && !et.isASN1HEX(t)) return t;
var n, s, a;
if ("string" == typeof t) n = t; else {
if (void 0 == t.cert) throw new e("hash nor cert unspecified");
n = t.cert;
}
s = -1 != n.indexOf("-----BEGIN") ? St(n) : n;
"string" == typeof t && (-1 != t.indexOf("-----BEGIN") ? s = St(t) : et.isASN1HEX(t) && (s = t));
if (void 0 != t.alg) a = t.alg; else {
if (void 0 == i) throw new e("hash alg unspecified");
a = i;
}
return r.crypto.Util.hashHex(s, a);
}, this.tohex = function() {
var t = this.params, e = this.getCertHash(t, "sha1"), r = [];
r.push(new n({
hex: e
}));
("string" == typeof t && -1 != t.indexOf("-----BEGIN") || void 0 != t.cert && 0 != t.hasis || void 0 != t.issuer && void 0 != t.serial) && r.push(new a(t));
return new s({
array: r
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.ESSCertID, Z.asn1.ASN1Object), Z.asn1.cms.SigningCertificateV2 = function(t) {
var e = Error, r = Z, i = r.asn1, n = i.DERSequence, s = (i.x509, i.cms), a = s.ESSCertIDv2;
r.crypto;
s.SigningCertificateV2.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.47", 
this.getValueArray = function() {
if (null == this.params || void 0 == this.params || void 0 == this.params.array) throw new e("parameter 'array' not specified");
for (var r = this.params.array, i = [], s = 0; s < r.length; s++) {
var o = r[s];
(void 0 != t.alg || 0 == t.hasis) && "string" == typeof o && (-1 != o.indexOf("-----BEGIN") || et.isASN1HEX(o)) && (o = {
cert: o
}), void 0 == o.alg && void 0 != t.alg && (o.alg = t.alg), 0 != o.hasis && 0 == t.hasis && (o.hasis = !1), 
i.push(new a(o));
}
var h = new n({
array: i
});
return [ new n({
array: [ h ]
}) ];
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.SigningCertificateV2, Z.asn1.cms.Attribute), Z.asn1.cms.ESSCertIDv2 = function(t) {
Z.asn1.cms.ESSCertIDv2.superclass.constructor.call(this);
Error;
var e = Z.asn1, r = e.DEROctetString, i = e.DERSequence, n = e.cms.IssuerSerial, s = e.x509.AlgorithmIdentifier;
this.params = null, this.tohex = function() {
var t = this.params, e = this.getCertHash(t, "sha256"), a = [];
void 0 != t.alg && "sha256" != t.alg && a.push(new s({
name: t.alg
}));
a.push(new r({
hex: e
}));
("string" == typeof t && -1 != t.indexOf("-----BEGIN") || void 0 != t.cert && 0 != t.hasis || void 0 != t.issuer && void 0 != t.serial) && a.push(new n(t));
return new i({
array: a
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.ESSCertIDv2, Z.asn1.cms.ESSCertID), Z.asn1.cms.IssuerSerial = function(t) {
var e = Error, r = Z.asn1, i = r.DERInteger, n = r.DERSequence, s = r.cms, a = r.x509.GeneralNames, o = Zt;
s.IssuerSerial.superclass.constructor.call(this), this.setByParam = function(t) {
this.params = t;
}, this.tohex = function() {
var t, r, s = this.params;
if ("string" == typeof s && -1 != s.indexOf("-----BEGIN") || void 0 != s.cert) {
var h;
h = void 0 != s.cert ? s.cert : s;
var u = new o();
u.readCertPEM(h), t = u.getIssuer(), r = {
hex: u.getSerialNumberHex()
};
} else {
if (void 0 == s.issuer || !s.serial) throw new e("cert or issuer and serial parameter not specified");
t = s.issuer, r = s.serial;
}
var c = new a([ {
dn: t
} ]), l = new i(r);
return new n({
array: [ c, l ]
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.IssuerSerial, Z.asn1.ASN1Object), Z.asn1.cms.SignerIdentifier = function(t) {
var e = Z.asn1, r = (e.DERInteger, e.DERSequence, e.cms), i = r.IssuerAndSerialNumber, n = r.SubjectKeyIdentifier;
e.x509.X500Name, Error;
r.SignerIdentifier.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params;
if ("isssn" == t.type) {
return new i(t).tohex();
}
if ("skid" == t.type) {
return new n(t).tohex();
}
throw new Error("wrong property for isssn or skid");
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.SignerIdentifier, Z.asn1.ASN1Object), Z.asn1.cms.IssuerAndSerialNumber = function(t) {
var e = Z.asn1, r = e.DERInteger, i = e.DERSequence, n = e.cms, s = e.x509.X500Name, a = Zt, o = Error;
n.IssuerAndSerialNumber.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t, e, n = this.params;
if ("string" == typeof n && -1 != n.indexOf("-----BEGIN") || void 0 != n.cert) {
var h;
h = void 0 != n.cert ? n.cert : n;
var u = new a();
u.readCertPEM(h), t = u.getIssuer(), e = {
hex: u.getSerialNumberHex()
};
} else {
if (void 0 == n.issuer || !n.serial) throw new o("cert or issuer and serial parameter not specified");
t = n.issuer, e = n.serial;
}
var c = new s(t), l = new r(e);
return new i({
array: [ c, l ]
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.IssuerAndSerialNumber, Z.asn1.ASN1Object), Z.asn1.cms.SubjectKeyIdentifier = function(t) {
var e = Z.asn1, r = (e.DERInteger, e.DERSequence, e.ASN1Util.newObject), i = e.cms, n = (i.IssuerAndSerialName, 
i.SubjectKeyIdentifier, e.x509.X500Name, Zt), s = Error;
i.SubjectKeyIdentifier.superclass.constructor.call(this), this.tohex = function() {
var t, e = this.params;
if (void 0 == e.cert && void 0 == e.skid) throw new s("property cert nor skid undefined");
if (void 0 != e.cert) {
t = new n(e.cert).getExtSubjectKeyIdentifier().kid.hex;
} else void 0 != e.skid && (t = e.skid);
return r({
tag: {
tage: "a0",
obj: {
octstr: {
hex: t
}
}
}
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.SubjectKeyIdentifier, Z.asn1.ASN1Object), Z.asn1.cms.AttributeList = function(t) {
var e = Error, r = Z.asn1, i = r.DERSet, n = r.cms;
n.AttributeList.superclass.constructor.call(this), this.params = null, this.hTLV = null, 
this.setByParam = function(t) {
this.params = t;
}, this.tohex = function() {
var t = this.params;
if (null != this.hTLV) return this.hTLV;
var r = !0;
void 0 != t.sortflag && (r = t.sortflag);
for (var s = t.array, a = [], o = 0; o < s.length; o++) {
var h = s[o], u = h.attr;
if ("contentType" == u) a.push(new n.ContentType(h)); else if ("messageDigest" == u) a.push(new n.MessageDigest(h)); else if ("signingTime" == u) a.push(new n.SigningTime(h)); else if ("signingCertificate" == u) a.push(new n.SigningCertificate(h)); else if ("signingCertificateV2" == u) a.push(new n.SigningCertificateV2(h)); else if ("signaturePolicyIdentifier" == u) a.push(new Z.asn1.cades.SignaturePolicyIdentifier(h)); else {
if ("signatureTimeStamp" != u && "timeStampToken" != u) throw new e("unknown attr: " + u);
a.push(new Z.asn1.cades.SignatureTimeStamp(h));
}
}
var c = new i({
array: a,
sortflag: r
});
return this.hTLV = c.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.AttributeList, Z.asn1.ASN1Object), Z.asn1.cms.SignerInfo = function(t) {
var e = Error, r = Z, i = r.asn1, n = i.DERInteger, s = i.DEROctetString, a = i.DERSequence, o = i.DERTaggedObject, h = i.cms, u = h.SignerIdentifier, c = h.AttributeList, l = (h.ContentType, 
h.EncapsulatedContentInfo, h.MessageDigest, h.SignedData, i.x509.AlgorithmIdentifier), f = r.crypto, d = Wt;
h.SignerInfo.superclass.constructor.call(this), this.params = null, this.sign = function() {
var t = this.params, e = t.sigalg, r = new c(t.sattrs).tohex(), i = d.getKey(t.signkey), n = new f.Signature({
alg: e
});
n.init(i), n.updateHex(r);
var s = n.sign();
t.sighex = s;
}, this.tohex = function() {
var t = this.params, r = [];
r.push(new n({
int: t.version
})), r.push(new u(t.id)), r.push(new l({
name: t.hashalg
}));
if (void 0 != t.sattrs) {
var i = new c(t.sattrs);
try {
r.push(new o({
tag: "a0",
explicit: !1,
obj: i
}));
} catch (t) {
throw new e("si sattr error: " + t);
}
}
void 0 != t.sigalgfield ? r.push(new l({
name: t.sigalgfield
})) : r.push(new l({
name: t.sigalg
}));
void 0 == t.sighex && void 0 != t.signkey && this.sign();
r.push(new s({
hex: t.sighex
}));
if (void 0 != t.uattrs) {
i = new c(t.uattrs);
try {
r.push(new o({
tag: "a1",
explicit: !1,
obj: i
}));
} catch (t) {
throw new e("si uattr error: " + t);
}
}
return new a({
array: r
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.SignerInfo, Z.asn1.ASN1Object), Z.asn1.cms.EncapsulatedContentInfo = function(t) {
var e = Z.asn1, r = e.DERTaggedObject, i = e.DERSequence, n = e.DERObjectIdentifier, s = e.DEROctetString;
e.cms.EncapsulatedContentInfo.superclass.constructor.call(this), this.params = null, 
this.tohex = function() {
var t = this.params, e = [];
e.push(new n(t.type));
if (void 0 != t.content && (void 0 != t.content.hex || void 0 != t.content.str) && 1 != t.isDetached) {
var a = new s(t.content), o = new r({
tag: "a0",
explicit: !0,
obj: a
});
e.push(o);
}
return new i({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.EncapsulatedContentInfo, Z.asn1.ASN1Object), Z.asn1.cms.ContentInfo = function(t) {
var e = Z.asn1, r = e.DERTaggedObject, i = e.DERSequence, n = e.DERObjectIdentifier;
e.x509.OID.name2obj;
Z.asn1.cms.ContentInfo.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params, e = [];
e.push(new n(t.type));
var s = new r({
tag: "a0",
explicit: !0,
obj: t.obj
});
e.push(s);
return new i({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.ContentInfo, Z.asn1.ASN1Object), Z.asn1.cms.SignedData = function(t) {
Error;
var e = Z.asn1, r = (e.ASN1Object, e.DERInteger), i = e.DERSet, n = e.DERSequence, s = (e.DERTaggedObject, 
e.cms), a = s.EncapsulatedContentInfo, o = s.SignerInfo, h = s.ContentInfo, u = s.CertificateSet, c = s.RevocationInfoChoices, l = e.x509.AlgorithmIdentifier;
Z.asn1.cms.SignedData.superclass.constructor.call(this), this.params = null, this.checkAndFixParam = function() {
var t = this.params;
this._setDigestAlgs(t), this._setContentTypeByEContent(t), this._setMessageDigestByEContent(t), 
this._setSignerInfoVersion(t), this._setSignedDataVersion(t);
}, this._setDigestAlgs = function(t) {
for (var e = {}, r = t.sinfos, i = 0; i < r.length; i++) {
e[r[i].hashalg] = 1;
}
t.hashalgs = Object.keys(e).sort();
}, this._setContentTypeByEContent = function(t) {
for (var e = t.econtent.type, r = t.sinfos, i = 0; i < r.length; i++) {
var n = r[i];
this._getAttrParamByName(n, "contentType").type = e;
}
}, this._setMessageDigestByEContent = function(t) {
var e = t.econtent, r = (t.econtent.type, e.content.hex);
void 0 == r && "data" == e.type && void 0 != e.content.str && (r = pt(e.content.str));
for (var i = t.sinfos, n = 0; n < i.length; n++) {
var s = i[n], a = s.hashalg, o = this._getAttrParamByName(s, "messageDigest"), h = Z.crypto.Util.hashHex(r, a);
o.hex = h;
}
}, this._getAttrParamByName = function(t, e) {
for (var r = t.sattrs.array, i = 0; i < r.length; i++) if (r[i].attr == e) return r[i];
}, this._setSignerInfoVersion = function(t) {
for (var e = t.sinfos, r = 0; r < e.length; r++) {
var i = e[r], n = 1;
"skid" == i.id.type && (n = 3), i.version = n;
}
}, this._setSignedDataVersion = function(t) {
var e = this._getSignedDataVersion(t);
t.version = e;
}, this._getSignedDataVersion = function(t) {
if (void 0 != t.revinfos) for (var e = t.revinfos, r = 0; r < e.length; r++) {
if (void 0 != e[r].ocsp) return 5;
}
var i = t.sinfos;
for (r = 0; r < i.length; r++) {
if (3 == t.sinfos[r].version) return 3;
}
return "data" != t.econtent.type ? 3 : 1;
}, this.tohex = function() {
var t = this.params;
void 0 != this.getEncodedHexPrepare && this.getEncodedHexPrepare();
1 != t.fixed && this.checkAndFixParam();
var e = [];
e.push(new r({
int: t.version
}));
for (var s = [], h = 0; h < t.hashalgs.length; h++) {
var f = t.hashalgs[h];
s.push(new l({
name: f
}));
}
e.push(new i({
array: s
})), e.push(new a(t.econtent));
void 0 != t.certs && e.push(new u(t.certs));
void 0 != t.revinfos && e.push(new c(t.revinfos));
var d = [];
for (h = 0; h < t.sinfos.length; h++) {
var g = t.sinfos[h];
d.push(new o(g));
}
e.push(new i({
array: d
}));
return new n({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.getContentInfo = function() {
return new h({
type: "signed-data",
obj: this
});
}, this.getContentInfoEncodedHex = function() {
return this.getContentInfo().tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.SignedData, Z.asn1.ASN1Object), Z.asn1.cms.CertificateSet = function(t) {
Z.asn1.cms.CertificateSet.superclass.constructor.call(this);
var e = Error, r = Z.asn1, i = r.DERTaggedObject, n = r.DERSet, s = r.ASN1Object;
this.params = null, this.tohex = function() {
var t, r = this.params, a = [];
if (r instanceof Array) t = r; else {
if (void 0 == r.array) throw new e("cert array not specified");
t = r.array;
}
for (var o = 0; o < t.length; o++) {
var h = St(t[o]), u = new s();
u.hTLV = h, a.push(u);
}
var c = {
array: a
};
0 == r.sortflag && (c.sortflag = !1);
var l = new n(c);
return new i({
tag: "a0",
explicit: !1,
obj: l
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.CertificateSet, Z.asn1.ASN1Object), Z.asn1.cms.RevocationInfoChoices = function(t) {
Z.asn1.cms.RevocationInfoChoices.superclass.constructor.call(this), this.params = null, 
this.tohex = function() {
var t = this.params;
if (!t instanceof Array) throw new Error("params is not array");
for (var e = [], r = 0; r < t.length; r++) e.push(new Z.asn1.cms.RevocationInfoChoice(t[r]));
return Z.asn1.ASN1Util.newObject({
tag: {
tagi: "a1",
obj: {
set: e
}
}
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.RevocationInfoChoices, Z.asn1.ASN1Object), Z.asn1.cms.RevocationInfoChoice = function(t) {
Z.asn1.cms.RevocationInfoChoice.superclass.constructor.call(this), this.params = null, 
this.tohex = function() {
var t = this.params;
if (void 0 != t.crl && "string" == typeof t.crl) {
var e = t.crl;
return -1 != t.crl.indexOf("-----BEGIN") && (e = St(t.crl)), e;
}
if (void 0 != t.ocsp) {
return Z.asn1.ASN1Util.newObject({
tag: {
tagi: "a1",
obj: new Z.asn1.cms.OtherRevocationFormat(t)
}
}).tohex();
}
throw new Error("property crl or ocsp undefined");
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.RevocationInfoChoice, Z.asn1.ASN1Object), Z.asn1.cms.OtherRevocationFormat = function(t) {
Z.asn1.cms.OtherRevocationFormat.superclass.constructor.call(this);
var e = Error, r = Z, i = r.asn1.ASN1Util.newObject, n = r.lang.String.isHex;
this.params = null, this.tohex = function() {
var t = this.params;
if (void 0 == t.ocsp) throw new e("property ocsp not specified");
if (!n(t.ocsp) || !et.isASN1HEX(t.ocsp)) throw new e("ocsp value not ASN.1 hex string");
return i({
seq: [ {
oid: "1.3.6.1.5.5.7.16.2"
}, {
asn1: {
tlv: t.ocsp
}
} ]
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cms.OtherRevocationFormat, Z.asn1.ASN1Object), Z.asn1.cms.CMSUtil = new function() {}(), 
Z.asn1.cms.CMSUtil.newSignedData = function(t) {
return new Z.asn1.cms.SignedData(t);
}, Z.asn1.cms.CMSUtil.verifySignedData = function(t) {
var e = Z, r = e.asn1, i = r.cms, n = (i.SignerInfo, i.SignedData, i.SigningTime, 
i.SigningCertificate, i.SigningCertificateV2, r.cades.SignaturePolicyIdentifier, 
e.lang.String.isHex), s = et, a = s.getVbyList, o = s.getTLVbyList, h = s.getIdxbyList, u = s.getChildIdx, c = s.getTLV, l = s.oidname, f = e.crypto.Util.hashHex;
void 0 === t.cms && n(t.cms);
var d = t.cms, g = function(t, e) {
for (var r, i = 3; i < 6; i++) if (void 0 !== (r = h(t, 0, [ 1, 0, i ]))) {
var n = t.substr(r, 2);
"a0" === n && (e.certsIdx = r), "a1" === n && (e.revinfosIdx = r), "31" === n && (e.signerinfosIdx = r);
}
}, p = function(t, e) {
var r = e.signerinfosIdx;
if (void 0 !== r) {
var i = u(t, r);
e.signerInfoIdxList = i;
for (var n = 0; n < i.length; n++) {
var s = {
idx: i[n]
};
v(t, s), e.signerInfos.push(s);
}
}
}, v = function(t, e) {
var r = e.idx;
e.signerid_issuer1 = o(t, r, [ 1, 0 ], "30"), e.signerid_serial1 = a(t, r, [ 1, 1 ], "02"), 
e.hashalg = l(a(t, r, [ 2, 0 ], "06"));
var i = h(t, r, [ 3 ], "a0");
e.idxSignedAttrs = i, y(t, e, i);
var n = u(t, r).length;
if (n < 6) throw "malformed SignerInfo";
e.sigalg = l(a(t, r, [ n - 2, 0 ], "06")), e.sigval = a(t, r, [ n - 1 ], "04");
}, y = function(t, e, r) {
var i = u(t, r);
e.signedAttrIdxList = i;
for (var n = 0; n < i.length; n++) {
var s, o = i[n], h = a(t, o, [ 0 ], "06");
"2a864886f70d010905" === h ? (s = lt(a(t, o, [ 1, 0 ])), e.saSigningTime = s) : "2a864886f70d010904" === h && (s = a(t, o, [ 1, 0 ], "04"), 
e.saMessageDigest = s);
}
}, m = function(t, e, r, i) {
var n, s = e.parse.certsIdx;
if (void 0 === e.certs) {
n = [], e.certkeys = [];
for (var a = u(t, s), o = 0; o < a.length; o++) {
var h = c(t, a[o]), l = new Zt();
l.readCertHex(h), n[o] = l, e.certkeys[o] = l.getPublicKey();
}
e.certs = n;
} else n = e.certs;
e.cccc = n.length, e.cccci = a.length;
for (o = 0; o < n.length; o++) {
var f = l.getIssuerHex(), d = l.getSerialNumberHex();
r.signerid_issuer1 === f && r.signerid_serial1 === d && (r.certkey_idx = o);
}
}, x = function(t, e, r, i) {
r.verifyDetail = {};
var n = r.verifyDetail, s = e.parse.econtent, a = r.hashalg, o = r.saMessageDigest;
n.validMessageDigest = !1;
f(s, a) === o && (n.validMessageDigest = !0);
m(t, e, r), n.validSignatureValue = !1;
var h = r.sigalg, u = "31" + c(t, r.idxSignedAttrs).substr(2);
r.signedattrshex = u;
var l = e.certs[r.certkey_idx].getPublicKey(), d = new Z.crypto.Signature({
alg: h
});
d.init(l), d.updateHex(u);
var g = d.verify(r.sigval);
n.validSignatureValue_isValid = g, !0 === g && (n.validSignatureValue = !0), r.isValid = !1, 
n.validMessageDigest && n.validSignatureValue && (r.isValid = !0);
}, S = {
isValid: !1,
parse: {}
};
return function(t, e) {
if ("2a864886f70d010702" !== a(t, 0, [ 0 ], "06")) return e;
e.cmsType = "signedData", e.econtent = a(t, 0, [ 1, 0, 2, 1, 0 ]), g(t, e), e.signerInfos = [], 
p(t, e);
}(d, S.parse), function(t, e) {
for (var r = e.parse.signerInfos, i = r.length, n = !0, s = 0; s < i; s++) {
var a = r[s];
x(t, e, a, s), !a.isValid && (n = !1);
}
e.isValid = n;
}(d, S), S;
}, Z.asn1.cms.CMSParser = function() {
var t = Error, e = Zt, r = new e(), i = et, n = i.getV, s = i.getTLV, a = (i.getIdxbyList, 
i.getTLVbyList), o = i.getTLVbyListEx, h = i.getVbyList, u = i.getVbyListEx, c = i.getChildIdx;
this.getCMSSignedData = function(t) {
var e = a(t, 0, [ 1, 0 ]);
return this.getSignedData(e);
}, this.getSignedData = function(t) {
var e = c(t, 0), r = {}, i = n(t, e[0]), a = parseInt(i, 16);
r.version = a;
var h = s(t, e[1]);
r.hashalgs = this.getHashAlgArray(h);
var u = s(t, e[2]);
r.econtent = this.getEContent(u);
var l = o(t, 0, [ "[0]" ]);
null != l && (r.certs = this.getCertificateSet(l));
o(t, 0, [ "[1]" ]);
var f = o(t, 0, [ 3 ]);
return r.sinfos = this.getSignerInfos(f), r;
}, this.getHashAlgArray = function(t) {
for (var r = c(t, 0), i = new e(), n = [], a = 0; a < r.length; a++) {
var o = s(t, r[a]), h = i.getAlgorithmIdentifierName(o);
n.push(h);
}
return n;
}, this.getEContent = function(t) {
var e = {}, r = h(t, 0, [ 0 ]), i = h(t, 0, [ 1, 0 ]);
return e.type = Z.asn1.x509.OID.oid2name(et.hextooidstr(r)), e.content = {
hex: i
}, e;
}, this.getSignerInfos = function(t) {
for (var e = [], r = c(t, 0), i = 0; i < r.length; i++) {
var n = s(t, r[i]), a = this.getSignerInfo(n);
e.push(a);
}
return e;
}, this.getSignerInfo = function(t) {
var e = {}, n = c(t, 0), a = i.getInt(t, n[0], -1);
-1 != a && (e.version = a);
var h = s(t, n[1]), l = this.getIssuerAndSerialNumber(h);
e.id = l;
var f = s(t, n[2]), d = r.getAlgorithmIdentifierName(f);
e.hashalg = d;
var g = o(t, 0, [ "[0]" ]);
if (null != g) {
var p = this.getAttributeList(g);
e.sattrs = p;
}
var v = o(t, 0, [ 3 ]), y = r.getAlgorithmIdentifierName(v);
e.sigalg = y;
var m = u(t, 0, [ 4 ]);
e.sighex = m;
var x = o(t, 0, [ "[1]" ]);
if (null != x) {
var S = this.getAttributeList(x);
e.uattrs = S;
}
return e;
}, this.getSignerIdentifier = function(t) {
if ("30" == t.substr(0, 2)) return this.getIssuerAndSerialNumber(t);
throw new Error("SKID of signerIdentifier not supported");
}, this.getIssuerAndSerialNumber = function(t) {
var e = {
type: "isssn"
}, i = c(t, 0), a = s(t, i[0]);
e.issuer = r.getX500Name(a);
var o = n(t, i[1]);
return e.serial = {
hex: o
}, e;
}, this.getAttributeList = function(t) {
for (var e = [], r = c(t, 0), i = 0; i < r.length; i++) {
var n = s(t, r[i]), a = this.getAttribute(n);
e.push(a);
}
return {
array: e
};
}, this.getAttribute = function(t) {
var e = {}, r = c(t, 0), n = i.getOID(t, r[0]), a = Z.asn1.x509.OID.oid2name(n);
e.attr = a;
var o = s(t, r[1]), h = c(o, 0);
if (1 == h.length) e.valhex = s(o, h[0]); else {
for (var u = [], l = 0; l < h.length; l++) u.push(s(o, h[l]));
e.valhex = u;
}
return "contentType" == a ? this.setContentType(e) : "messageDigest" == a ? this.setMessageDigest(e) : "signingTime" == a ? this.setSigningTime(e) : "signingCertificate" == a ? this.setSigningCertificate(e) : "signingCertificateV2" == a ? this.setSigningCertificateV2(e) : "signaturePolicyIdentifier" == a && this.setSignaturePolicyIdentifier(e), 
e;
}, this.setContentType = function(t) {
var e = i.getOIDName(t.valhex, 0, null);
null != e && (t.type = e, delete t.valhex);
}, this.setSigningTime = function(t) {
var e = lt(n(t.valhex, 0));
t.str = e, delete t.valhex;
}, this.setMessageDigest = function(t) {
var e = n(t.valhex, 0);
t.hex = e, delete t.valhex;
}, this.setSigningCertificate = function(t) {
var e = c(t.valhex, 0);
if (e.length > 0) {
for (var r = s(t.valhex, e[0]), i = c(r, 0), n = [], a = 0; a < i.length; a++) {
var o = s(r, i[a]), h = this.getESSCertID(o);
n.push(h);
}
t.array = n;
}
if (e.length > 1) {
var u = s(t.valhex, e[1]);
t.polhex = u;
}
delete t.valhex;
}, this.setSignaturePolicyIdentifier = function(t) {
var r = c(t.valhex, 0);
if (r.length > 0) {
var a = i.getOID(t.valhex, r[0]);
t.oid = a;
}
if (r.length > 1) {
var o = new e(), h = c(t.valhex, r[1]), u = s(t.valhex, h[0]), l = o.getAlgorithmIdentifierName(u);
t.alg = l;
var f = n(t.valhex, h[1]);
t.hash = f;
}
delete t.valhex;
}, this.setSigningCertificateV2 = function(t) {
var e = c(t.valhex, 0);
if (e.length > 0) {
for (var r = s(t.valhex, e[0]), i = c(r, 0), n = [], a = 0; a < i.length; a++) {
var o = s(r, i[a]), h = this.getESSCertIDv2(o);
n.push(h);
}
t.array = n;
}
if (e.length > 1) {
var u = s(t.valhex, e[1]);
t.polhex = u;
}
delete t.valhex;
}, this.getESSCertID = function(t) {
var e = {}, r = c(t, 0);
if (r.length > 0) {
var i = n(t, r[0]);
e.hash = i;
}
if (r.length > 1) {
var a = s(t, r[1]), o = this.getIssuerSerial(a);
void 0 != o.serial && (e.serial = o.serial), void 0 != o.issuer && (e.issuer = o.issuer);
}
return e;
}, this.getESSCertIDv2 = function(e) {
var i = {}, a = c(e, 0);
if (a.length < 1 || 3 < a.length) throw new t("wrong number of elements");
var o = 0;
if ("30" == e.substr(a[0], 2)) {
var h = s(e, a[0]);
i.alg = r.getAlgorithmIdentifierName(h), o++;
} else i.alg = "sha256";
var u = n(e, a[o]);
i.hash = u;
if (a.length > o + 1) {
var l = s(e, a[o + 1]), f = this.getIssuerSerial(l);
i.issuer = f.issuer, i.serial = f.serial;
}
return i;
}, this.getIssuerSerial = function(t) {
var e = {}, i = c(t, 0), a = s(t, i[0]), o = r.getGeneralNames(a)[0].dn;
e.issuer = o;
var h = n(t, i[1]);
return e.serial = {
hex: h
}, e;
}, this.getCertificateSet = function(t) {
for (var e = c(t, 0), r = [], i = 0; i < e.length; i++) {
var n = s(t, e[i]);
if ("30" == n.substr(0, 2)) {
var a = xt(n, "CERTIFICATE");
r.push(a);
}
}
return {
array: r,
sortflag: !1
};
};
};
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.asn1 || !Z.asn1) && (Z.asn1 = {});
("undefined" == typeof Z.asn1.tsp || !Z.asn1.tsp) && (Z.asn1.tsp = {});
Z.asn1.tsp.TimeStampToken = function(t) {
var e = Z.asn1.tsp;
e.TimeStampToken.superclass.constructor.call(this), this.params = null, this.getEncodedHexPrepare = function() {
var t = new e.TSTInfo(this.params.econtent.content);
this.params.econtent.content.hex = t.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.tsp.TimeStampToken, Z.asn1.cms.SignedData), Z.asn1.tsp.TSTInfo = function(t) {
Error;
var e = Z.asn1, r = e.DERSequence, i = e.DERInteger, n = e.DERBoolean, s = e.DERGeneralizedTime, a = e.DERObjectIdentifier, o = e.DERTaggedObject, h = e.tsp, u = h.MessageImprint, c = h.Accuracy, l = (e.x509.X500Name, 
e.x509.GeneralName);
h.TSTInfo.superclass.constructor.call(this), this.dVersion = new i({
int: 1
}), this.dPolicy = null, this.dMessageImprint = null, this.dSerial = null, this.dGenTime = null, 
this.dAccuracy = null, this.dOrdering = null, this.dNonce = null, this.dTsa = null, 
this.tohex = function() {
var t = [ this.dVersion ];
if (null == this.dPolicy) throw new Error("policy shall be specified.");
t.push(this.dPolicy);
if (null == this.dMessageImprint) throw new Error("messageImprint shall be specified.");
t.push(this.dMessageImprint);
if (null == this.dSerial) throw new Error("serialNumber shall be specified.");
t.push(this.dSerial);
if (null == this.dGenTime) throw new Error("genTime shall be specified.");
t.push(this.dGenTime);
null != this.dAccuracy && t.push(this.dAccuracy);
null != this.dOrdering && t.push(this.dOrdering);
null != this.dNonce && t.push(this.dNonce);
null != this.dTsa && t.push(this.dTsa);
var e = new r({
array: t
});
return this.hTLV = e.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
};
if (void 0 !== t) {
if ("string" == typeof t.policy) {
if (!t.policy.match(/^[0-9.]+$/)) throw "policy shall be oid like 0.1.4.134";
this.dPolicy = new a({
oid: t.policy
});
}
void 0 !== t.messageImprint && (this.dMessageImprint = new u(t.messageImprint)), 
void 0 !== t.serial && (this.dSerial = new i(t.serial)), void 0 !== t.genTime && (this.dGenTime = new s(t.genTime)), 
void 0 !== t.accuracy && (this.dAccuracy = new c(t.accuracy)), void 0 !== t.ordering && 1 == t.ordering && (this.dOrdering = new n()), 
void 0 !== t.nonce && (this.dNonce = new i(t.nonce)), void 0 !== t.tsa && (this.dTsa = new o({
tag: "a0",
explicit: !0,
obj: new l({
dn: t.tsa
})
}));
}
}, Jt(Z.asn1.tsp.TSTInfo, Z.asn1.ASN1Object), Z.asn1.tsp.Accuracy = function(t) {
var e = Z.asn1, r = e.ASN1Util.newObject;
e.tsp.Accuracy.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params, e = [];
return void 0 != t.seconds && "number" == typeof t.seconds && e.push({
int: t.seconds
}), void 0 != t.millis && "number" == typeof t.millis && e.push({
tag: {
tagi: "80",
obj: {
int: t.millis
}
}
}), void 0 != t.micros && "number" == typeof t.micros && e.push({
tag: {
tagi: "81",
obj: {
int: t.micros
}
}
}), r({
seq: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.tsp.Accuracy, Z.asn1.ASN1Object), Z.asn1.tsp.MessageImprint = function(t) {
var e = Z.asn1, r = e.DERSequence, i = e.DEROctetString, n = e.x509.AlgorithmIdentifier;
e.tsp.MessageImprint.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params, e = new n({
name: t.alg
}), s = new i({
hex: t.hash
});
return new r({
array: [ e, s ]
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.tsp.MessageImprint, Z.asn1.ASN1Object), Z.asn1.tsp.TimeStampReq = function(t) {
var e = Z.asn1, r = e.DERSequence, i = e.DERInteger, n = e.DERBoolean, s = (e.ASN1Object, 
e.DERObjectIdentifier), a = e.tsp, o = a.MessageImprint;
a.TimeStampReq.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params, e = [];
e.push(new i({
int: 1
}));
t.messageImprint instanceof Z.asn1.ASN1Object ? e.push(t.messageImprint) : e.push(new o(t.messageImprint));
void 0 != t.policy && e.push(new s(t.policy));
void 0 != t.nonce && e.push(new i(t.nonce));
1 == t.certreq && e.push(new n());
return new r({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.tsp.TimeStampReq, Z.asn1.ASN1Object), Z.asn1.tsp.TimeStampResp = function(t) {
var e = Z.asn1, r = e.DERSequence, i = (e.ASN1Object, e.tsp), n = i.PKIStatusInfo;
i.TimeStampResp.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params, s = [];
if (void 0 != t.econtent || void 0 != t.tst) {
void 0 != t.statusinfo ? s.push(new n(t.statusinfo)) : s.push(new n("granted"));
if (void 0 != t.econtent) s.push(new i.TimeStampToken(t).getContentInfo()); else {
if (!(t.tst instanceof e.ASN1Object)) throw new Error("improper member tst value");
s.push(t.tst);
}
} else {
if (void 0 == t.statusinfo) throw new Error("parameter for token nor statusinfo not specified");
s.push(new n(t.statusinfo));
}
return new r({
array: s
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.tsp.TimeStampResp, Z.asn1.ASN1Object), Z.asn1.tsp.PKIStatusInfo = function(t) {
var e = Error, r = Z.asn1, i = r.DERSequence, n = r.tsp, s = n.PKIStatus, a = n.PKIFreeText, o = n.PKIFailureInfo;
n.PKIStatusInfo.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params, r = [];
if ("string" == typeof t) r.push(new s(t)); else {
if (void 0 == t.status) throw new e("property 'status' unspecified");
r.push(new s(t.status)), void 0 != t.statusstr && r.push(new a(t.statusstr)), void 0 != t.failinfo && r.push(new o(t.failinfo));
}
return new i({
array: r
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.tsp.PKIStatusInfo, Z.asn1.ASN1Object), Z.asn1.tsp.PKIStatus = function(t) {
var e = Error, r = Z.asn1, i = r.DERInteger;
r.tsp.PKIStatus.superclass.constructor.call(this);
var n = {
granted: 0,
grantedWithMods: 1,
rejection: 2,
waiting: 3,
revocationWarning: 4,
revocationNotification: 5
};
this.params = null, this.tohex = function() {
var t, r = this.params;
if ("string" == typeof r) try {
t = n[r];
} catch (t) {
throw new e("undefined name: " + r);
} else {
if ("number" != typeof r) throw new e("unsupported params");
t = r;
}
return new i({
int: t
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.tsp.PKIStatus, Z.asn1.ASN1Object), Z.asn1.tsp.PKIFreeText = function(t) {
var e = Error, r = Z.asn1, i = r.DERSequence, n = r.DERUTF8String;
r.tsp.PKIFreeText.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params;
if (!t instanceof Array) throw new e("wrong params: not array");
for (var r = [], s = 0; s < t.length; s++) r.push(new n({
str: t[s]
}));
return new i({
array: r
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.tsp.PKIFreeText, Z.asn1.ASN1Object), Z.asn1.tsp.PKIFailureInfo = function(t) {
var e = Error, r = Z.asn1, i = r.DERBitString, n = {
badAlg: 0,
badRequest: 2,
badDataFormat: 5,
timeNotAvailable: 14,
unacceptedPolicy: 15,
unacceptedExtension: 16,
addInfoNotAvailable: 17,
systemFailure: 25
};
r.tsp.PKIFailureInfo.superclass.constructor.call(this), this.params = null, this.getBinValue = function() {
var t = this.params, r = 0;
if ("number" == typeof t && 0 <= t && t <= 25) {
for (var i = (r |= 1 << t).toString(2), s = "", a = i.length - 1; a >= 0; a--) s += i[a];
return s;
}
if ("string" == typeof t && void 0 != n[t]) return Gt([ t ], n);
if ("object" == typeof t && void 0 != t.length) return Gt(t, n);
throw new e("wrong params");
}, this.tohex = function() {
this.params;
var t = this.getBinValue();
return new i({
bin: t
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.tsp.PKIFailureInfo, Z.asn1.ASN1Object), Z.asn1.tsp.AbstractTSAAdapter = function(t) {
this.getTSTHex = function(t, e) {
throw "not implemented yet";
};
}, Z.asn1.tsp.SimpleTSAAdapter = function(t) {
var e = Z, r = e.asn1.tsp, i = e.crypto.Util.hashHex;
r.SimpleTSAAdapter.superclass.constructor.call(this), this.params = null, this.serial = 0, 
this.getTSTHex = function(t, e) {
var n = i(t, e);
this.params.econtent.content.messageImprint = {
alg: e,
hash: n
}, this.params.econtent.content.serial = {
int: this.serial++
};
var s = Math.floor(1e9 * Math.random());
this.params.econtent.content.nonce = {
int: s
};
return new r.TimeStampToken(this.params).getContentInfoEncodedHex();
}, void 0 !== t && (this.params = t);
}, Jt(Z.asn1.tsp.SimpleTSAAdapter, Z.asn1.tsp.AbstractTSAAdapter), Z.asn1.tsp.FixedTSAAdapter = function(t) {
var e = Z, r = e.asn1.tsp, i = e.crypto.Util.hashHex;
r.FixedTSAAdapter.superclass.constructor.call(this), this.params = null, this.getTSTHex = function(t, e) {
var n = i(t, e);
this.params.econtent.content.messageImprint = {
alg: e,
hash: n
};
return new r.TimeStampToken(this.params).getContentInfoEncodedHex();
}, void 0 !== t && (this.params = t);
}, Jt(Z.asn1.tsp.FixedTSAAdapter, Z.asn1.tsp.AbstractTSAAdapter), Z.asn1.tsp.TSPUtil = new function() {}(), 
Z.asn1.tsp.TSPUtil.newTimeStampToken = function(t) {
return new Z.asn1.tsp.TimeStampToken(t);
}, Z.asn1.tsp.TSPUtil.parseTimeStampReq = function(t) {
return new Z.asn1.tsp.TSPParser().getTimeStampReq(t);
}, Z.asn1.tsp.TSPUtil.parseMessageImprint = function(t) {
return new Z.asn1.tsp.TSPParser().getMessageImprint(t);
}, Z.asn1.tsp.TSPParser = function() {
Error;
var t = new Zt(), e = et, r = e.getV, i = e.getTLV, n = e.getIdxbyList, s = (e.getTLVbyListEx, 
e.getChildIdx), a = [ "granted", "grantedWithMods", "rejection", "waiting", "revocationWarning", "revocationNotification" ], o = {
0: "badAlg",
2: "badRequest",
5: "badDataFormat",
14: "timeNotAvailable",
15: "unacceptedPolicy",
16: "unacceptedExtension",
17: "addInfoNotAvailable",
25: "systemFailure"
};
this.getResponse = function(t) {
var e = s(t, 0);
if (1 == e.length) return this.getPKIStatusInfo(i(t, e[0]));
if (e.length > 1) {
var r = this.getPKIStatusInfo(i(t, e[0])), n = i(t, e[1]), a = this.getToken(n);
return a.statusinfo = r, a;
}
}, this.getToken = function(t) {
var e = new Z.asn1.cms.CMSParser().getCMSSignedData(t);
return this.setTSTInfo(e), e;
}, this.setTSTInfo = function(t) {
var e = t.econtent;
if ("tstinfo" == e.type) {
var r = e.content.hex, i = this.getTSTInfo(r);
e.content = i;
}
}, this.getTSTInfo = function(e) {
var n = {}, a = s(e, 0), o = r(e, a[1]);
n.policy = kt(o);
var h = i(e, a[2]);
n.messageImprint = this.getMessageImprint(h);
var u = r(e, a[3]);
n.serial = {
hex: u
};
var c = r(e, a[4]);
n.genTime = {
str: lt(c)
};
var l = 0;
if (a.length > 5 && "30" == e.substr(a[5], 2)) {
var f = i(e, a[5]);
n.accuracy = this.getAccuracy(f), l++;
}
if (a.length > 5 + l && "01" == e.substr(a[5 + l], 2)) {
"ff" == r(e, a[5 + l]) && (n.ordering = !0), l++;
}
if (a.length > 5 + l && "02" == e.substr(a[5 + l], 2)) {
var d = r(e, a[5 + l]);
n.nonce = {
hex: d
}, l++;
}
if (a.length > 5 + l && "a0" == e.substr(a[5 + l], 2)) {
var g = i(e, a[5 + l]);
g = "30" + g.substr(2), pGeneralNames = t.getGeneralNames(g);
var p = pGeneralNames[0].dn;
n.tsa = p, l++;
}
if (a.length > 5 + l && "a1" == e.substr(a[5 + l], 2)) {
var v = i(e, a[5 + l]);
v = "30" + v.substr(2);
var y = t.getExtParamArray(v);
n.ext = y, l++;
}
return n;
}, this.getAccuracy = function(t) {
for (var e = {}, i = s(t, 0), n = 0; n < i.length; n++) {
var a = t.substr(i[n], 2), o = r(t, i[n]), h = parseInt(o, 16);
"02" == a ? e.seconds = h : "80" == a ? e.millis = h : "81" == a && (e.micros = h);
}
return e;
}, this.getMessageImprint = function(t) {
if ("30" != t.substr(0, 2)) throw new Error("head of messageImprint hex shall be x30");
var i = {}, a = (s(t, 0), n(t, 0, [ 0, 0 ])), o = r(t, a), h = e.hextooidstr(o), u = Z.asn1.x509.OID.oid2name(h);
if ("" == u) throw new Error("hashAlg name undefined: " + h);
var c = u, l = n(t, 0, [ 1 ]);
return i.alg = c, i.hash = r(t, l), i;
}, this.getPKIStatusInfo = function(t) {
var e = {}, n = s(t, 0), o = 0;
try {
var h = r(t, n[0]), u = parseInt(h, 16);
e.status = a[u];
} catch (t) {}
if (n.length > 1 && "30" == t.substr(n[1], 2)) {
var c = i(t, n[1]);
e.statusstr = this.getPKIFreeText(c), o++;
}
if (n.length > o && "03" == t.substr(n[1 + o], 2)) {
var l = i(t, n[1 + o]);
e.failinfo = this.getPKIFailureInfo(l);
}
return e;
}, this.getPKIFreeText = function(t) {
for (var r = [], i = s(t, 0), n = 0; n < i.length; n++) r.push(e.getString(t, i[n]));
return r;
}, this.getPKIFailureInfo = function(t) {
var r = e.getInt(t, 0);
return void 0 != o[r] ? o[r] : r;
}, this.getTimeStampReq = function(t) {
var n = {
certreq: !1
}, a = s(t, 0);
if (a.length < 2) throw new Error("TimeStampReq must have at least 2 items");
var o = i(t, a[1]);
n.messageImprint = Z.asn1.tsp.TSPUtil.parseMessageImprint(o);
for (var h = 2; h < a.length; h++) {
var u = a[h], c = t.substr(u, 2);
if ("06" == c) {
var l = r(t, u);
n.policy = e.hextooidstr(l);
}
"02" == c && (n.nonce = r(t, u)), "01" == c && (n.certreq = !0);
}
return n;
};
};
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.asn1 || !Z.asn1) && (Z.asn1 = {});
("undefined" == typeof Z.asn1.cades || !Z.asn1.cades) && (Z.asn1.cades = {});
Z.asn1.cades.SignaturePolicyIdentifier = function(t) {
var e = Z.asn1.cades, r = e.SignaturePolicyId;
e.SignaturePolicyIdentifier.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.15", 
this.params = null, this.getValueArray = function() {
return [ new r(this.params) ];
}, this.setByParam = function(t) {
this.params = t;
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cades.SignaturePolicyIdentifier, Z.asn1.cms.Attribute), Z.asn1.cades.SignaturePolicyId = function(t) {
var e = Z.asn1, r = e.DERSequence, i = e.DERObjectIdentifier, n = (e.x509.AlgorithmIdentifier, 
e.cades), s = n.SignaturePolicyId, a = n.OtherHashAlgAndValue;
s.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params, e = [];
e.push(new i(t.oid)), e.push(new a(t));
return new r({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cades.SignaturePolicyId, Z.asn1.ASN1Object), Z.asn1.cades.OtherHashAlgAndValue = function(t) {
var e = Error, r = Z.asn1, i = r.DERSequence, n = r.DEROctetString, s = r.x509.AlgorithmIdentifier;
r.cades.OtherHashAlgAndValue.superclass.constructor.call(this), this.params = null, 
this.tohex = function() {
var t = this.params;
if (void 0 == t.alg) throw new e("property 'alg' not specified");
if (void 0 == t.hash && void 0 == t.cert) throw new e("property 'hash' nor 'cert' not specified");
var r = null;
if (void 0 != t.hash) r = t.hash; else if (void 0 != t.cert) {
if ("string" != typeof t.cert) throw new e("cert not string");
var a = t.cert;
-1 != t.cert.indexOf("-----BEGIN") && (a = St(t.cert)), r = Z.crypto.Util.hashHex(a, t.alg);
}
var o = [];
o.push(new s({
name: t.alg
})), o.push(new n({
hex: r
}));
return new i({
array: o
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cades.OtherHashAlgAndValue, Z.asn1.ASN1Object), Z.asn1.cades.OtherHashValue = function(t) {
Z.asn1.cades.OtherHashValue.superclass.constructor.call(this);
var e = Error, r = Z, i = (r.lang.String.isHex, r.asn1.DEROctetString);
r.crypto.Util.hashHex;
this.params = null, this.tohex = function() {
var t = this.params;
if (void 0 == t.hash && void 0 == t.cert) throw new e("hash or cert not specified");
var r = null;
if (void 0 != t.hash) r = t.hash; else if (void 0 != t.cert) {
if ("string" != typeof t.cert) throw new e("cert not string");
var n = t.cert;
-1 != t.cert.indexOf("-----BEGIN") && (n = St(t.cert)), r = Z.crypto.Util.hashHex(n, "sha1");
}
return new i({
hex: r
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cades.OtherHashValue, Z.asn1.ASN1Object), Z.asn1.cades.SignatureTimeStamp = function(t) {
var e = Error, r = Z, i = r.lang.String.isHex, n = r.asn1, s = n.ASN1Object;
n.x509;
n.cades.SignatureTimeStamp.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.14", 
this.params = null, this.getValueArray = function() {
var t = this.params;
if (void 0 != t.tst) {
if (i(t.tst)) {
return (n = new s()).hTLV = t.tst, [ n ];
}
if (t.tst instanceof s) return [ t.tst ];
throw new e("params.tst has wrong value");
}
if (void 0 != t.res) {
var r = t.res;
r instanceof s && (r = r.tohex());
if ("string" != typeof r || !i(r)) throw new e("params.res has wrong value");
var n;
et.getTLVbyList(r, 0, [ 1 ]);
return (n = new s()).hTLV = t.tst, [ n ];
}
}, null != t && this.setByParam(t);
}, Jt(Z.asn1.cades.SignatureTimeStamp, Z.asn1.cms.Attribute), Z.asn1.cades.CompleteCertificateRefs = function(t) {
var e = Error, r = Z, i = r.asn1, n = i.DERSequence, s = i.cades, a = s.OtherCertID, o = r.lang.String.isHex;
s.CompleteCertificateRefs.superclass.constructor.call(this), this.typeOid = "1.2.840.113549.1.9.16.2.21", 
this.params = null, this.getValueArray = function() {
for (var t = this.params, r = [], i = 0; i < t.array.length; i++) {
var s = t.array[i];
if ("string" == typeof s) if (-1 != s.indexOf("-----BEGIN")) s = {
cert: s
}; else {
if (!o(s)) throw new e("unsupported value: " + s);
s = {
hash: s
};
}
void 0 != t.alg && void 0 == s.alg && (s.alg = t.alg);
void 0 != t.hasis && void 0 == s.hasis && (s.hasis = t.hasis);
var h = new a(s);
r.push(h);
}
return [ new n({
array: r
}) ];
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cades.CompleteCertificateRefs, Z.asn1.cms.Attribute), Z.asn1.cades.OtherCertID = function(t) {
var e = Z.asn1, r = e.DERSequence, i = e.cms.IssuerSerial, n = e.cades, s = n.OtherHashValue, a = n.OtherHashAlgAndValue;
n.OtherCertID.superclass.constructor.call(this), this.params = t, this.tohex = function() {
var t = this.params;
"string" == typeof t && (-1 != t.indexOf("-----BEGIN") ? t = {
cert: t
} : _isHex(t) && (t = {
hash: t
}));
var e = [], n = null;
n = void 0 != t.alg ? new a(t) : new s(t);
e.push(n);
if (void 0 != t.cert && 1 == t.hasis || void 0 != t.issuer && void 0 != t.serial) {
var o = new i(t);
e.push(o);
}
return new r({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cades.OtherCertID, Z.asn1.ASN1Object), Z.asn1.cades.OtherHash = function(t) {
Error;
var e = Z, r = e.asn1, i = (r.cms, r.cades), n = i.OtherHashAlgAndValue, s = i.OtherHashValue, a = (e.crypto.Util.hashHex, 
e.lang.String.isHex);
i.OtherHash.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params;
"string" == typeof t && (-1 != t.indexOf("-----BEGIN") ? t = {
cert: t
} : a(t) && (t = {
hash: t
}));
return (void 0 != t.alg ? new n(t) : new s(t)).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.cades.OtherHash, Z.asn1.ASN1Object), Z.asn1.cades.CAdESUtil = new function() {}(), 
Z.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function(t) {
return new Z.asn1.cms.CMSParser().getCMSSignedData(t);
}, Z.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function(t, e, r) {
var i = et, n = i.getChildIdx, s = i.getTLV, a = i.getV, o = Z.asn1, h = o.ASN1Object, u = o.cms, c = u.AttributeList, l = u.SignerInfo, f = {}, d = n(t, e);
if (6 != d.length) throw "not supported items for SignerInfo (!=6)";
var g = d.shift();
f.version = s(t, g);
var p = d.shift();
f.si = s(t, p);
var v = d.shift();
f.digalg = s(t, v);
var y = d.shift();
f.sattrs = s(t, y);
var m = d.shift();
f.sigalg = s(t, m);
var x = d.shift();
f.sig = s(t, x), f.sigval = a(t, x);
var S = null;
return f.obj = new l(), (S = new h()).hTLV = f.version, f.obj.dCMSVersion = S, (S = new h()).hTLV = f.si, 
f.obj.dSignerIdentifier = S, (S = new h()).hTLV = f.digalg, f.obj.dDigestAlgorithm = S, 
(S = new h()).hTLV = f.sattrs, f.obj.dSignedAttrs = S, (S = new h()).hTLV = f.sigalg, 
f.obj.dSigAlg = S, (S = new h()).hTLV = f.sig, f.obj.dSig = S, f.obj.dUnsignedAttrs = new c(), 
f;
};
("undefined" == typeof Z.asn1.csr || !Z.asn1.csr) && (Z.asn1.csr = {});
Z.asn1.csr.CertificationRequest = function(t) {
var e = Z.asn1, r = e.DERBitString, i = e.DERSequence, n = e.csr, s = (e.x509, n.CertificationRequestInfo);
n.CertificationRequest.superclass.constructor.call(this), this.setByParam = function(t) {
this.params = t;
}, this.sign = function() {
var t = new s(this.params).tohex(), e = new Z.crypto.Signature({
alg: this.params.sigalg
});
e.init(this.params.sbjprvkey), e.updateHex(t);
var r = e.sign();
this.params.sighex = r;
}, this.getPEM = function() {
return xt(this.tohex(), "CERTIFICATE REQUEST");
}, this.tohex = function() {
var t = this.params, e = new Z.asn1.csr.CertificationRequestInfo(this.params), n = new Z.asn1.x509.AlgorithmIdentifier({
name: t.sigalg
});
void 0 == t.sighex && void 0 != t.sbjprvkey && this.sign();
if (void 0 == t.sighex) throw new Error("sighex or sbjprvkey parameter not defined");
var s = new r({
hex: "00" + t.sighex
});
return new i({
array: [ e, n, s ]
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.csr.CertificationRequest, Z.asn1.ASN1Object), Z.asn1.csr.CertificationRequestInfo = function(t) {
var e = Z.asn1, r = (e.DERBitString, e.DERSequence), i = e.DERInteger, n = e.DERUTF8String, s = e.DERTaggedObject, a = e.ASN1Util.newObject, o = e.csr, h = e.x509, u = h.X500Name, c = h.Extensions, l = h.SubjectPublicKeyInfo;
o.AttributeList;
o.CertificationRequestInfo.superclass.constructor.call(this), this.params = null, 
this.setByParam = function(t) {
void 0 != t && (this.params = t);
}, this.tohex = function() {
var t = this.params, e = [];
e.push(new i({
int: 0
})), e.push(new u(t.subject)), e.push(new l(Wt.getKey(t.sbjpubkey)));
if (void 0 != t.attrs) {
var o = f(t.attrs), h = a({
tag: {
tage: "a0",
obj: o
}
});
e.push(h);
} else if (void 0 != t.extreq) {
var d = new c(t.extreq);
h = a({
tag: {
tage: "a0",
obj: {
seq: [ {
oid: "1.2.840.113549.1.9.14"
}, {
set: [ d ]
} ]
}
}
});
e.push(h);
} else e.push(new s({
tag: "a0",
explicit: !1,
obj: new n({
str: ""
})
}));
return new r({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
};
function f(t) {
for (var e = Error, r = Z.asn1.x509.Extensions, i = [], n = 0; n < t.length; n++) {
var s = t[n], a = s.attr;
if ("extensionRequest" == a) {
var o = {
seq: [ {
oid: "1.2.840.113549.1.9.14"
}, {
set: [ new r(s.ext) ]
} ]
};
i.push(o);
} else if ("unstructuredName" == a) {
o = {
seq: [ {
oid: "1.2.840.113549.1.9.2"
}, {
set: s.names
} ]
};
i.push(o);
} else {
if ("challengePassword" != a) throw new e("unknown CSR attribute");
o = {
seq: [ {
oid: "1.2.840.113549.1.9.7"
}, {
set: [ {
utf8str: s.password
} ]
} ]
};
i.push(o);
}
}
return {
set: i
};
}
void 0 != t && this.setByParam(t);
}, Jt(Z.asn1.csr.CertificationRequestInfo, Z.asn1.ASN1Object), Z.asn1.csr.AttributeList = function(t) {
}, Jt(Z.asn1.csr.AttributeList, Z.asn1.ASN1Object), Z.asn1.csr.CSRUtil = new function() {}(), 
Z.asn1.csr.CSRUtil.newCSRPEM = function(t) {
return new Z.asn1.csr.CertificationRequest(t).getPEM();
}, Z.asn1.csr.CSRUtil.getParam = function(t, e) {
var r = et, i = r.getV, n = r.getIdxbyList, s = r.getTLVbyList, a = r.getTLVbyListEx, o = r.getVbyListEx, h = {};
if (-1 == t.indexOf("-----BEGIN CERTIFICATE REQUEST")) throw new Error("argument is not PEM file");
var u = St(t, "CERTIFICATE REQUEST");
e && (h.tbs = s(u, 0, [ 0 ]));
try {
var c = a(u, 0, [ 0, 1 ]);
if ("3000" == c) h.subject = {}; else {
var l = new Zt();
h.subject = l.getX500Name(c);
}
} catch (t) {}
var f = a(u, 0, [ 0, 2 ]), d = Wt.getKey(f, null, "pkcs8pub");
h.sbjpubkey = Wt.getPEM(d, "PKCS8PUB");
var g = function(t) {
var e = n(t, 0, [ 0, 3, 0, 0 ], "06");
return "2a864886f70d01090e" != i(t, e) ? null : s(t, 0, [ 0, 3, 0, 1, 0 ], "30");
}(u);
l = new Zt();
null != g && (h.extreq = l.getExtParamArray(g));
try {
var p = a(u, 0, [ 1 ], "30");
l = new Zt();
h.sigalg = l.getAlgorithmIdentifierName(p);
} catch (t) {}
try {
var v = o(u, 0, [ 2 ]);
h.sighex = v;
} catch (t) {}
return h;
}, Z.asn1.csr.CSRUtil.verifySignature = function(t) {
try {
var e = null;
"string" == typeof t && -1 != t.indexOf("-----BEGIN CERTIFICATE REQUEST") ? e = Z.asn1.csr.CSRUtil.getParam(t, !0) : "object" == typeof t && void 0 != t.sbjpubkey && void 0 != t.sigalg && void 0 != t.sighex && void 0 != t.tbs && (e = t);
if (null == e) return !1;
var r = new Z.crypto.Signature({
alg: e.sigalg
});
return r.init(e.sbjpubkey), r.updateHex(e.tbs), r.verify(e.sighex);
} catch (t) {
return alert(t), !1;
}
};
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.asn1 || !Z.asn1) && (Z.asn1 = {});
("undefined" == typeof Z.asn1.ocsp || !Z.asn1.ocsp) && (Z.asn1.ocsp = {});
Z.asn1.ocsp.DEFAULT_HASH = "sha1", Z.asn1.ocsp.OCSPResponse = function(t) {
Z.asn1.ocsp.OCSPResponse.superclass.constructor.call(this);
Z.asn1.DEREnumerated;
var e = Z.asn1.ASN1Util.newObject, r = Z.asn1.ocsp.ResponseBytes, i = [ "successful", "malformedRequest", "internalError", "tryLater", "_not_used_", "sigRequired", "unauthorized" ];
this.params = null, this._getStatusCode = function() {
var t = this.params.resstatus;
return "number" == typeof t ? t : "string" != typeof t ? -1 : i.indexOf(t);
}, this.setByParam = function(t) {
this.params = t;
}, this.tohex = function() {
var t = this.params, i = this._getStatusCode();
if (-1 == i) throw new Error("responseStatus not supported: " + t.resstatus);
if (0 != i) return e({
seq: [ {
enum: {
int: i
}
} ]
}).tohex();
var n = new r(t);
return e({
seq: [ {
enum: {
int: 0
}
}, {
tag: {
tag: "a0",
explicit: !0,
obj: n
}
} ]
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.OCSPResponse, Z.asn1.ASN1Object), Z.asn1.ocsp.ResponseBytes = function(t) {
Z.asn1.ocsp.ResponseBytes.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERSequence, i = e.DERObjectIdentifier, n = e.DEROctetString, s = e.ocsp.BasicOCSPResponse;
this.params = null, this.setByParam = function(t) {
this.params = t;
}, this.tohex = function() {
var t = this.params;
if ("ocspBasic" != t.restype) throw new Error("not supported responseType: " + t.restype);
var e = new s(t), a = [];
a.push(new i({
name: "ocspBasic"
})), a.push(new n({
hex: e.tohex()
}));
return new r({
array: a
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.ResponseBytes, Z.asn1.ASN1Object), Z.asn1.ocsp.BasicOCSPResponse = function(t) {
Z.asn1.ocsp.BasicOCSPResponse.superclass.constructor.call(this);
var e = Error, r = Z.asn1, i = r.ASN1Object, n = r.DERSequence, s = (r.DERGeneralizedTime, 
r.DERTaggedObject), a = r.DERBitString, o = (r.x509.Extensions, r.x509.AlgorithmIdentifier), h = r.ocsp;
h.ResponderID;
_SingleResponseList = h.SingleResponseList, _ResponseData = h.ResponseData, this.params = null, 
this.setByParam = function(t) {
this.params = t;
}, this.sign = function() {
var t = this.params, e = t.tbsresp.tohex(), r = new Z.crypto.Signature({
alg: t.sigalg
});
r.init(t.reskey), r.updateHex(e), t.sighex = r.sign();
}, this.tohex = function() {
var t = this.params;
void 0 == t.tbsresp && (t.tbsresp = new _ResponseData(t));
void 0 == t.sighex && void 0 != t.reskey && this.sign();
var r = [];
r.push(t.tbsresp), r.push(new o({
name: t.sigalg
})), r.push(new a({
hex: "00" + t.sighex
}));
if (void 0 != t.certs && void 0 != t.certs.length) {
for (var h = [], u = 0; u < t.certs.length; u++) {
var c = t.certs[u], l = null;
if (et.isASN1HEX(c)) l = c; else {
if (!c.match(/-----BEGIN/)) throw new e("certs[" + u + "] not hex or PEM");
l = St(c);
}
h.push(new i({
tlv: l
}));
}
var f = new n({
array: h
});
r.push(new s({
tag: "a0",
explicit: !0,
obj: f
}));
}
return new n({
array: r
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.BasicOCSPResponse, Z.asn1.ASN1Object), Z.asn1.ocsp.ResponseData = function(t) {
Z.asn1.ocsp.ResponseData.superclass.constructor.call(this);
var e = Error, r = Z.asn1, i = r.DERSequence, n = r.DERGeneralizedTime, s = r.DERTaggedObject, a = r.x509.Extensions, o = r.ocsp, h = o.ResponderID;
_SingleResponseList = o.SingleResponseList, this.params = null, this.tohex = function() {
var t = this.params;
void 0 != t.respid && new e("respid not specified");
void 0 != t.prodat && new e("prodat not specified");
void 0 != t.array && new e("array not specified");
var r = [];
r.push(new h(t.respid)), r.push(new n(t.prodat)), r.push(new _SingleResponseList(t.array));
if (void 0 != t.ext) {
var o = new a(t.ext);
r.push(new s({
tag: "a1",
explicit: !0,
obj: o
}));
}
return new i({
array: r
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.ResponseData, Z.asn1.ASN1Object), Z.asn1.ocsp.ResponderID = function(t) {
Z.asn1.ocsp.ResponderID.superclass.constructor.call(this);
var e = Z, r = e.asn1, i = r.ASN1Util.newObject, n = r.x509.X500Name, s = e.lang.String.isHex, a = Error;
this.params = null, this.tohex = function() {
var t = this.params;
if (void 0 != t.key) {
var e = null;
if ("string" == typeof t.key) {
s(t.key) && (e = t.key);
if (t.key.match(/-----BEGIN CERTIFICATE/)) {
null != (r = new Zt(t.key).getExtSubjectKeyIdentifier()) && (e = r.kid.hex);
}
} else if (t.key instanceof Zt) {
var r;
null != (r = t.key.getExtSubjectKeyIdentifier()) && (e = r.kid.hex);
}
if (null == e) throw new a("wrong key member value");
return i({
tag: {
tag: "a2",
explicit: !0,
obj: {
octstr: {
hex: e
}
}
}
}).tohex();
}
if (void 0 != t.name) {
var o = null;
if ("string" == typeof t.name && t.name.match(/-----BEGIN CERTIFICATE/)) {
o = new Zt(t.name).getSubject();
} else t.name instanceof Zt ? o = t.name.getSubject() : "object" == typeof t.name && (void 0 != t.name.array || void 0 != t.name.str) && (o = t.name);
if (null == o) throw new a("wrong name member value");
return i({
tag: {
tag: "a1",
explicit: !0,
obj: new n(o)
}
}).tohex();
}
throw new a("key or name not specified");
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.ResponderID, Z.asn1.ASN1Object), Z.asn1.ocsp.SingleResponseList = function(t) {
Z.asn1.ocsp.SingleResponseList.superclass.constructor.call(this);
var e = Z.asn1, r = e.DERSequence, i = e.ocsp.SingleResponse;
this.params = null, this.tohex = function() {
var t = this.params;
if ("object" != typeof t || void 0 == t.length) throw new Error("params not specified properly");
for (var e = [], n = 0; n < t.length; n++) e.push(new i(t[n]));
return new r({
array: e
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.SingleResponseList, Z.asn1.ASN1Object), Z.asn1.ocsp.SingleResponse = function(t) {
var e = Error, r = Z.asn1, i = r.DERSequence, n = r.DERGeneralizedTime, s = r.DERTaggedObject, a = r.ocsp, o = a.CertID, h = a.CertStatus, u = r.x509.Extensions;
a.SingleResponse.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params, r = [];
if (void 0 == t.certid) throw new e("certid unspecified");
if (void 0 == t.status) throw new e("status unspecified");
if (void 0 == t.thisupdate) throw new e("thisupdate unspecified");
r.push(new o(t.certid)), r.push(new h(t.status)), r.push(new n(t.thisupdate));
if (void 0 != t.nextupdate) {
var a = new n(t.nextupdate);
r.push(new s({
tag: "a0",
explicit: !0,
obj: a
}));
}
if (void 0 != t.ext) {
var c = new u(t.ext);
r.push(new s({
tag: "a1",
explicit: !0,
obj: c
}));
}
return new i({
array: r
}).tohex();
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.SingleResponse, Z.asn1.ASN1Object), Z.asn1.ocsp.CertID = function(t) {
var e = Z, r = e.asn1, i = r.DEROctetString, n = r.DERInteger, s = r.DERSequence, a = r.x509.AlgorithmIdentifier, o = r.ocsp, h = (o.DEFAULT_HASH, 
e.crypto.Util.hashHex), u = Zt, c = et.getVbyList;
o.CertID.superclass.constructor.call(this), this.DEFAULT_HASH = "sha1", this.params = null, 
this.setByValue = function(t, e, r, i) {
void 0 == i && (i = this.DEFAULT_HASH), this.params = {
alg: i,
issname: t,
isskey: e,
sbjsn: r
};
}, this.setByCert = function(t, e, r) {
void 0 == r && (r = this.DEFAULT_HASH), this.params = {
alg: r,
issuerCert: t,
subjectCert: e
};
}, this.getParamByCerts = function(t, e, r) {
void 0 == r && (r = this.DEFAULT_HASH);
var i = new u(t), n = new u(e), s = h(i.getSubjectHex(), r), a = i.getPublicKeyHex();
return {
alg: r,
issname: s,
isskey: h(c(a, 0, [ 1 ], "03", !0), r),
sbjsn: n.getSerialNumberHex()
};
}, this.tohex = function() {
if ("object" != typeof this.params) throw new Error("params not set");
var t, e, r, o, h = this.params;
o = void 0 == h.alg ? this.DEFAULT_HASH : h.alg;
if (void 0 != h.issuerCert && void 0 != h.subjectCert) {
var u = this.getParamByCerts(h.issuerCert, h.subjectCert, o);
t = u.issname, e = u.isskey, r = u.sbjsn;
} else {
if (void 0 == h.issname || void 0 == h.isskey || void 0 == h.sbjsn) throw new Error("required param members not defined");
t = h.issname, e = h.isskey, r = h.sbjsn;
}
var c = new a({
name: o
}), l = new i({
hex: t
}), f = new i({
hex: e
}), d = new n({
hex: r
}), g = new s({
array: [ c, l, f, d ]
});
return this.hTLV = g.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.CertID, Z.asn1.ASN1Object), Z.asn1.ocsp.CertStatus = function(t) {
Z.asn1.ocsp.CertStatus.superclass.constructor.call(this), this.params = null, this.tohex = function() {
var t = this.params;
if ("good" == t.status) return "8000";
if ("unknown" == t.status) return "8200";
if ("revoked" == t.status) {
var e = [ {
gentime: {
str: t.time
}
} ];
void 0 != t.reason && e.push({
tag: {
tag: "a0",
explicit: !0,
obj: {
enum: {
int: t.reason
}
}
}
});
var r = {
tag: "a1",
explicit: !1,
obj: {
seq: e
}
};
return Z.asn1.ASN1Util.newObject({
tag: r
}).tohex();
}
throw new Error("bad status");
}, this.getEncodedHex = function() {
return this.tohex();
}, this.setByParam = function(t) {
this.params = t;
}, void 0 !== t && this.setByParam(t);
}, Jt(Z.asn1.ocsp.CertStatus, Z.asn1.ASN1Object), Z.asn1.ocsp.Request = function(t) {
var e = Z.asn1, r = e.DERSequence, i = e.ocsp;
i.Request.superclass.constructor.call(this), this.dReqCert = null, this.dExt = null, 
this.tohex = function() {
var t = [];
if (null === this.dReqCert) throw "reqCert not set";
t.push(this.dReqCert);
var e = new r({
array: t
});
return this.hTLV = e.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
};
if ("undefined" != typeof t) {
var n = new i.CertID(t);
this.dReqCert = n;
}
}, Jt(Z.asn1.ocsp.Request, Z.asn1.ASN1Object), Z.asn1.ocsp.TBSRequest = function(t) {
var e = Z.asn1, r = e.DERSequence, i = e.ocsp;
i.TBSRequest.superclass.constructor.call(this), this.version = 0, this.dRequestorName = null, 
this.dRequestList = [], this.dRequestExt = null, this.setRequestListByParam = function(t) {
for (var e = [], r = 0; r < t.length; r++) {
var n = new i.Request(t[0]);
e.push(n);
}
this.dRequestList = e;
}, this.tohex = function() {
var t = [];
if (0 !== this.version) throw "not supported version: " + this.version;
if (null !== this.dRequestorName) throw "requestorName not supported";
var e = new r({
array: this.dRequestList
});
t.push(e);
if (null !== this.dRequestExt) throw "requestExtensions not supported";
var i = new r({
array: t
});
return this.hTLV = i.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
}, void 0 !== t && void 0 !== t.reqList && this.setRequestListByParam(t.reqList);
}, Jt(Z.asn1.ocsp.TBSRequest, Z.asn1.ASN1Object), Z.asn1.ocsp.OCSPRequest = function(t) {
var e = Z.asn1, r = e.DERSequence, i = e.ocsp;
i.OCSPRequest.superclass.constructor.call(this), this.dTbsRequest = null, this.dOptionalSignature = null, 
this.tohex = function() {
var t = [];
if (null === this.dTbsRequest) throw "tbsRequest not set";
t.push(this.dTbsRequest);
if (null !== this.dOptionalSignature) throw "optionalSignature not supported";
var e = new r({
array: t
});
return this.hTLV = e.tohex(), this.hTLV;
}, this.getEncodedHex = function() {
return this.tohex();
};
if (void 0 !== t && void 0 !== t.reqList) {
var n = new i.TBSRequest(t);
this.dTbsRequest = n;
}
}, Jt(Z.asn1.ocsp.OCSPRequest, Z.asn1.ASN1Object), Z.asn1.ocsp.OCSPUtil = {}, Z.asn1.ocsp.OCSPUtil.getRequestHex = function(t, e, r) {
var i = Z.asn1.ocsp;
void 0 === r && (r = i.DEFAULT_HASH);
var n = {
alg: r,
issuerCert: t,
subjectCert: e
};
return new i.OCSPRequest({
reqList: [ n ]
}).tohex();
}, Z.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function(t) {
var e = et, r = e.getVbyList, i = e.getVbyListEx, n = e.getIdxbyList, s = (e.getIdxbyListEx, 
e.getV), a = {};
try {
var o = i(t, 0, [ 0 ], "0a");
a.responseStatus = parseInt(o, 16);
} catch (t) {}
if (0 !== a.responseStatus) return a;
try {
var h = n(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 1 ]);
"80" === t.substr(h, 2) ? a.certStatus = "good" : "a1" === t.substr(h, 2) ? (a.certStatus = "revoked", 
a.revocationTime = lt(r(t, h, [ 0 ]))) : "82" === t.substr(h, 2) && (a.certStatus = "unknown");
} catch (t) {}
try {
var u = n(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 2 ]);
a.thisUpdate = lt(s(t, u));
} catch (t) {}
try {
var c = n(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 3 ]);
"a0" === t.substr(c, 2) && (a.nextUpdate = lt(r(t, c, [ 0 ])));
} catch (t) {}
return a;
}, Z.asn1.ocsp.OCSPParser = function() {
var t = Error, e = Zt, r = new e(), i = et, n = i.getV, s = i.getTLV, a = i.getIdxbyList, o = i.getVbyList, h = i.getTLVbyList, u = i.getVbyListEx, c = i.getTLVbyListEx, l = i.getChildIdx;
this.getOCSPRequest = function(e) {
var r = l(e, 0);
if (1 != r.length && 2 != r.length) throw new t("wrong number elements: " + r.length);
return this.getTBSRequest(s(e, r[0]));
}, this.getTBSRequest = function(t) {
var e = {}, i = c(t, 0, [ 0 ], "30");
e.array = this.getRequestList(i);
var n = c(t, 0, [ "[2]", 0 ], "30");
return null != n && (e.ext = r.getExtParamArray(n)), e;
}, this.getRequestList = function(t) {
for (var e = [], r = l(t, 0), i = 0; i < r.length; i++) {
t = s(t, r[i]);
e.push(this.getRequest(t));
}
return e;
}, this.getRequest = function(e) {
var i = l(e, 0);
if (1 != i.length && 2 != i.length) throw new t("wrong number elements: " + i.length);
var n = this.getCertID(s(e, i[0]));
if (2 == i.length) {
var o = a(e, 0, [ 1, 0 ]);
n.ext = r.getExtParamArray(s(e, o));
}
return n;
}, this.getCertID = function(r) {
var i = l(r, 0);
if (4 != i.length) throw new t("wrong number elements: " + i.length);
var a = new e(), o = {};
return o.alg = a.getAlgorithmIdentifierName(s(r, i[0])), o.issname = n(r, i[1]), 
o.isskey = n(r, i[2]), o.sbjsn = n(r, i[3]), o;
}, this.getOCSPResponse = function(t) {
var e, r = l(t, 0), i = n(t, r[0]), s = parseInt(i);
if (1 == r.length) return {
resstatus: s
};
var a = h(t, 0, [ 1, 0 ]);
return (e = this.getResponseBytes(a)).resstatus = s, e;
}, this.getResponseBytes = function(t) {
var e, r = l(t, 0), i = h(t, 0, [ 1, 0 ]);
e = this.getBasicOCSPResponse(i);
var s = n(t, r[0]);
return e.restype = Z.asn1.x509.OID.oid2name(kt(s)), e;
}, this.getBasicOCSPResponse = function(t) {
var e, r = l(t, 0);
e = this.getResponseData(s(t, r[0]));
var i = new Zt();
e.alg = i.getAlgorithmIdentifierName(s(t, r[1]));
var a = n(t, r[2]);
e.sighex = a.substr(2);
var o = u(t, 0, [ "[0]" ]);
if (null != o) {
for (var h = l(o, 0), c = [], f = 0; f < h.length; f++) {
var d = s(o, h[f]);
c.push(d);
}
e.certs = c;
}
return e;
}, this.getResponseData = function(t) {
var e = l(t, 0), r = e.length, i = {}, a = 0;
"a0" == t.substr(e[0], 2) && a++;
i.respid = this.getResponderID(s(t, e[a++]));
var o = n(t, e[a++]);
i.prodat = lt(o), i.array = this.getSingleResponseList(s(t, e[a++]));
if ("a1" == t.substr(e[r - 1], 2)) {
var u = h(t, e[r - 1], [ 0 ]), c = new Zt();
i.ext = c.getExtParamArray(u);
}
return i;
}, this.getResponderID = function(t) {
var e = {};
if ("a2" == t.substr(0, 2)) {
var r = o(t, 0, [ 0 ]);
e.key = r;
}
if ("a1" == t.substr(0, 2)) {
var i = h(t, 0, [ 0 ]), n = new Zt();
e.name = n.getX500Name(i);
}
return e;
}, this.getSingleResponseList = function(t) {
for (var e = l(t, 0), r = [], i = 0; i < e.length; i++) {
var n = this.getSingleResponse(s(t, e[i]));
r.push(n);
}
return r;
}, this.getSingleResponse = function(t) {
var e = l(t, 0), r = {}, i = this.getCertID(s(t, e[0]));
r.certid = i;
var a = this.getCertStatus(s(t, e[1]));
r.status = a;
if ("18" == t.substr(e[2], 2)) {
var u = n(t, e[2]);
r.thisupdate = lt(u);
}
for (var c = 3; c < e.length; c++) {
if ("a0" == t.substr(e[c], 2)) {
var f = o(t, e[c], [ 0 ], "18");
r.nextupdate = lt(f);
}
if ("a1" == t.substr(e[c], 2)) {
var d = new Zt(), g = h(t, 0, [ c, 0 ]);
r.ext = d.getExtParamArray(g);
}
}
return r;
}, this.getCertStatus = function(t) {
var e = {};
if ("8000" == t) return {
status: "good"
};
if ("8200" == t) return {
status: "unknown"
};
if ("a1" == t.substr(0, 2)) {
e.status = "revoked";
var r = lt(o(t, 0, [ 0 ]));
e.time = r;
}
return e;
};
};
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.lang || !Z.lang) && (Z.lang = {});
Z.lang.String = function() {};
function rt(t) {
for (var e = new Array(), r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
return e;
}
function it(t) {
for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
return e;
}
function nt(t) {
for (var e = "", r = 0; r < t.length; r++) {
var i = t[r].toString(16);
1 == i.length && (i = "0" + i), e += i;
}
return e;
}
function st(t) {
return nt(rt(t));
}
function at(t) {
return t = (t = (t = t.replace(/\=/g, "")).replace(/\+/g, "-")).replace(/\//g, "_");
}
function ot(t) {
return t.length % 4 == 2 ? t += "==" : t.length % 4 == 3 && (t += "="), t = (t = t.replace(/-/g, "+")).replace(/_/g, "/");
}
function ht(t) {
return t.length % 2 == 1 && (t = "0" + t), at(a(t));
}
function ut(t) {
return o(ot(t));
}
"function" == typeof Buffer ? (Q = function(t) {
return at(Buffer.from(t, "utf8").toString("base64"));
}, tt = function(t) {
return Buffer.from(ot(t), "base64").toString("utf8");
}) : (Q = function(t) {
return ht(Ft(Bt(t)));
}, tt = function(t) {
return decodeURIComponent(At(ut(t)));
});
function ct(t) {
return Ft(Bt(t)).toLowerCase();
}
function lt(t) {
try {
return decodeURIComponent(At(t));
} catch (t) {
return null;
}
}
function ft(t) {
return lt(dt(t));
}
function dt(t) {
for (var e = t.match(/.{1,2}/g), r = [], i = 0; i < e.length; i++) {
var n = parseInt(e[i], 16);
161 <= n && n <= 191 ? (r.push("c2"), r.push(e[i])) : 192 <= n && n <= 255 ? (r.push("c3"), 
r.push((n - 64).toString(16))) : r.push(e[i]);
}
return r.join("");
}
function gt(t) {
for (var e = "", r = 0; r < t.length - 1; r += 2) e += String.fromCharCode(parseInt(t.substr(r, 2), 16));
return e;
}
function pt(t) {
for (var e = "", r = 0; r < t.length; r++) e += ("0" + t.charCodeAt(r).toString(16)).slice(-2);
return e;
}
function vt(t) {
return a(t);
}
function yt(t, e) {
return t = (t = t.replace(new RegExp("(.{" + e + "})", "g"), "$1\r\n")).replace(/\s+$/, "");
}
function mt(t) {
return o(t.replace(/[^0-9A-Za-z\/+=]*/g, ""));
}
function xt(t, e) {
return "-----BEGIN " + e + "-----\r\n" + yt(vt(t), 64) + "\r\n-----END " + e + "-----\r\n";
}
function St(t, e) {
if (-1 == t.indexOf("-----BEGIN ")) throw new Error("can't find PEM header");
return void 0 !== e ? t = (t = t.replace(new RegExp("^[^]*-----BEGIN " + e + "-----"), "")).replace(new RegExp("-----END " + e + "-----[^]*$"), "") : t = (t = t.replace(/^[^]*-----BEGIN [^-]+-----/, "")).replace(/-----END [^-]+-----[^]*$/, ""), 
mt(t);
}
function Et(t) {
var e, r, i, n, s, a, o, h, u, c;
if (c = (t = bt(t)).match(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/)) return e = parseInt(c[1]), 
r = parseInt(c[2]) - 1, i = parseInt(c[3]), n = parseInt(c[4]), s = parseInt(c[5]), 
a = parseInt(c[6]), o = 0, "" !== (h = c[7]) && (u = (h.substr(1) + "00").substr(0, 3), 
o = parseInt(u)), Date.UTC(e, r, i, n, s, a, o);
throw new Error("unsupported zulu format: " + t);
}
function wt(t) {
return Math.round(Et(t) / 1e3);
}
function bt(t) {
return t.match(/^[0-9]{12}Z$/) || t.match(/^[0-9]{12}[.][0-9]*Z$/) ? t.match(/^[0-4]/) ? "20" + t : "19" + t : t;
}
function Ft(t) {
return t.replace(/%/g, "");
}
function At(t) {
return t.replace(/(..)/g, "%$1");
}
function It(t) {
var e = "malformed IPv6 address";
if (!t.match(/^[0-9A-Fa-f:]+$/)) throw e;
var r = (t = t.toLowerCase()).split(":").length - 1;
if (r < 2) throw e;
var i = ":".repeat(7 - r + 2), n = (t = t.replace("::", i)).split(":");
if (8 != n.length) throw e;
for (var s = 0; s < 8; s++) n[s] = ("0000" + n[s]).slice(-4);
return n.join("");
}
function Dt(t) {
if (!t.match(/^[0-9A-Fa-f]{32}$/)) throw new Error("malformed IPv6 address: " + t);
var e = (t = t.toLowerCase()).match(/.{1,4}/g), r = (t = ":" + (e = (e = e.map(function(t) {
return t.replace(/^0+/, "");
})).map(function(t) {
return "" == t ? "0" : t;
})).join(":") + ":").match(/:(0:){2,}/g);
if (null == r) return t.slice(1, -1);
var i = r.sort().slice(-1)[0];
return "::" != (t = t.replace(i.substr(0, i.length - 1), ":")).substr(0, 2) && (t = t.substr(1)), 
"::" != t.substr(-2, 2) && (t = t.substr(0, t.length - 1)), t;
}
function Ct(t) {
var e = new Error("malformed hex value");
if (!t.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw e;
if (8 == t.length) {
try {
return parseInt(t.substr(0, 2), 16) + "." + parseInt(t.substr(2, 2), 16) + "." + parseInt(t.substr(4, 2), 16) + "." + parseInt(t.substr(6, 2), 16);
} catch (t) {
throw e;
}
} else {
if (16 != t.length) {
if (32 == t.length) return Dt(t);
if (64 == t.length) {
try {
return Dt(t.substr(0, 32)) + "/" + Pt(t.substr(32));
} catch (t) {
throw e;
}
return;
}
return t;
}
try {
return Ct(t.substr(0, 8)) + "/" + Pt(t.substr(8));
} catch (t) {
throw e;
}
}
}
function Pt(t) {
var e, r = new Error("malformed mask");
try {
e = new c(t, 16).toString(2);
} catch (t) {
throw r;
}
if (!e.match(/^1*0*$/)) throw r;
return e.replace(/0+$/, "").length;
}
function Tt(t) {
var e = new Error("malformed IP address");
if (!(t = t.toLowerCase(t)).match(/^[0-9a-f.:/]+$/)) throw e;
if (!t.match(/^[0-9.]+$/)) {
if (t.match(/^[0-9.]+\/[0-9]+$/)) {
return Tt((r = t.split("/"))[0]) + Rt(parseInt(r[1]), 32);
}
if (t.match(/^[0-9a-f:]+$/) && -1 !== t.indexOf(":")) return It(t);
if (t.match(/^[0-9a-f:]+\/[0-9]+$/) && -1 !== t.indexOf(":")) {
var r;
return It((r = t.split("/"))[0]) + Rt(parseInt(r[1]), 128);
}
throw e;
}
var i = t.split(".");
if (4 !== i.length) throw e;
var n = "";
try {
for (var s = 0; s < 4; s++) {
n += ("0" + parseInt(i[s]).toString(16)).slice(-2);
}
return n;
} catch (t) {
throw e;
}
}
function Rt(t, e) {
return 32 == e && 0 == t ? "00000000" : 128 == e && 0 == t ? "00000000000000000000000000000000" : new c(Array(t + 1).join("1") + Array(e - t + 1).join("0"), 2).toString(16);
}
function Nt(t) {
return t.match(/.{4}/g).map(function(t) {
var e = parseInt(t.substr(0, 2), 16), r = parseInt(t.substr(2), 16);
if (0 == e & r < 128) return String.fromCharCode(r);
if (e < 8) {
var i = 128 | 63 & r;
return lt((192 | (7 & e) << 3 | (192 & r) >> 6).toString(16) + i.toString(16));
}
i = 128 | (15 & e) << 2 | (192 & r) >> 6;
var n = 128 | 63 & r;
return lt((224 | (240 & e) >> 4).toString(16) + i.toString(16) + n.toString(16));
}).join("");
}
function Bt(t) {
for (var e = encodeURIComponent(t), r = "", i = 0; i < e.length; i++) "%" == e[i] ? (r += e.substr(i, 3), 
i += 2) : r = r + "%" + st(e[i]);
return r;
}
Z.lang.String.isInteger = function(t) {
return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/);
}, Z.lang.String.isHex = function(t) {
return Ht(t);
};
function Ht(t) {
return !(t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/));
}
Z.lang.String.isBase64 = function(t) {
return !(!(t = t.replace(/\s+/g, "")).match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0);
}, Z.lang.String.isBase64URL = function(t) {
return !t.match(/[+/=]/) && (t = ot(t), Z.lang.String.isBase64(t));
};
function Ot(t) {
return !!t.match(/^[0-9A-Za-z-_.]+$/);
}
Z.lang.String.isIntegerArray = function(t) {
return !!(t = t.replace(/\s+/g, "")).match(/^\[[0-9,]+\]$/);
}, Z.lang.String.isPrintable = function(t) {
return null !== t.match(/^[0-9A-Za-z '()+,-./:=?]*$/);
}, Z.lang.String.isIA5 = function(t) {
return null !== t.match(/^[\x20-\x21\x23-\x7f]*$/);
}, Z.lang.String.isMail = function(t) {
return null !== t.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
};
function jt(t) {
return t.length % 2 == 1 ? "0" + t : t.substr(0, 1) > "7" ? "00" + t : t;
}
function Vt(t) {
var e = function(t) {
var e = t.toString(16);
return 1 == e.length && (e = "0" + e), e;
}, r = function(t) {
var r = "", i = parseInt(t, 10).toString(2), n = 7 - i.length % 7;
7 == n && (n = 0);
for (var s = "", a = 0; a < n; a++) s += "0";
i = s + i;
for (a = 0; a < i.length - 1; a += 7) {
var o = i.substr(a, 7);
a != i.length - 7 && (o = "1" + o), r += e(parseInt(o, 2));
}
return r;
};
try {
if (!t.match(/^[0-9.]+$/)) return null;
var i = "", n = t.split("."), s = 40 * parseInt(n[0], 10) + parseInt(n[1], 10);
i += e(s), n.splice(0, 2);
for (var a = 0; a < n.length; a++) i += r(n[a]);
return i;
} catch (t) {
return null;
}
}
function kt(t) {
if (!Ht(t)) return null;
try {
var e = [], r = t.substr(0, 2), i = parseInt(r, 16);
e[0] = new String(Math.floor(i / 40)), e[1] = new String(i % 40);
for (var n = t.substr(2), s = [], a = 0; a < n.length / 2; a++) s.push(parseInt(n.substr(2 * a, 2), 16));
var o = [], h = "";
for (a = 0; a < s.length; a++) 128 & s[a] ? h += qt((127 & s[a]).toString(2), 7) : (h += qt((127 & s[a]).toString(2), 7), 
o.push(new String(parseInt(h, 2))), h = "");
var u = e.join(".");
return o.length > 0 && (u = u + "." + o.join(".")), u;
} catch (t) {
return null;
}
}
function Kt(t) {
return Lt(new c(String(t), 10));
}
function Lt(t) {
var e = t.toString(16);
if ("-" != e.substr(0, 1)) return e.length % 2 == 1 ? e = "0" + e : !e.match(/^[0-7]/) && (e = "00" + e), 
e;
var r = e.substr(1).length;
r % 2 == 1 ? r += 1 : !e.match(/^[0-7]/) && (r += 2);
for (var i = "", n = 0; n < r; n++) i += "f";
return e = new c(i, 16).xor(t).add(c.ONE).toString(16).replace(/^-/, "");
}
var qt = function(t, e, r) {
void 0 == r && (r = "0");
return t.length >= e ? t : new Array(e - t.length + 1).join(r) + t;
};
function Mt(t) {
if (t.length % 2 != 0) return -1;
if (null == (t = t.toLowerCase()).match(/^[0-9a-f]+$/)) return -1;
try {
var e = t.substr(0, 2);
if ("00" == e) return parseInt(t.substr(2), 16);
var r = parseInt(e, 16);
if (r > 7) return -1;
var i = t.substr(2), n = parseInt(i, 16).toString(2);
"0" == n && (n = "00000000");
n = n.slice(0, 0 - r);
var s = parseInt(n, 2);
return NaN == s ? -1 : s;
} catch (t) {
return -1;
}
}
function Ut(t) {
if ("number" != typeof t) return null;
if (t < 0) return null;
var e = Number(t).toString(2), r = 8 - e.length % 8;
8 == r && (r = 0);
e += qt("", r, "0");
var i = parseInt(e, 2).toString(16);
i.length % 2 == 1 && (i = "0" + i);
return "0" + r + i;
}
function _t(t) {
if ("string" != typeof t) return null;
if (t.length % 2 != 0) return null;
if (!t.match(/^[0-9a-f]+$/)) return null;
try {
var e = parseInt(t.substr(0, 2), 16);
if (e < 0 || 7 < e) return null;
for (var r = t.substr(2), i = "", n = 0; n < r.length; n += 2) {
var s = r.substr(n, 2), a = parseInt(s, 16).toString(2);
i += a = ("0000000" + a).slice(-8);
}
return i.substr(0, i.length - e);
} catch (t) {
return null;
}
}
function Gt(t, e) {
for (var r = 0, i = 0; i < t.length; i++) r |= 1 << e[t[i]];
var n = r.toString(2), s = "";
for (i = n.length - 1; i >= 0; i--) s += n[i];
return s;
}
function zt(t, e, r) {
if ("object" == typeof t) {
e = String(e).split(".");
for (var i = 0; i < e.length && t; i++) {
var n = e[i];
n.match(/^[0-9]+$/) && (n = parseInt(n)), t = t[n];
}
return t || !1 === t ? t : r;
}
}
function Jt(t, e) {
var r = function() {};
r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t, t.superclass = e.prototype, 
e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e);
}
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.crypto || !Z.crypto) && (Z.crypto = {});
Z.crypto.Util = new function() {
this.DIGESTINFOHEAD = {
sha1: "3021300906052b0e03021a05000414",
sha224: "302d300d06096086480165030402040500041c",
sha256: "3031300d060960864801650304020105000420",
sha384: "3041300d060960864801650304020205000430",
sha512: "3051300d060960864801650304020305000440",
md2: "3020300c06082a864886f70d020205000410",
md5: "3020300c06082a864886f70d020505000410",
ripemd160: "3021300906052b2403020105000414"
}, this.DEFAULTPROVIDER = {
md5: "cryptojs",
sha1: "cryptojs",
sha224: "cryptojs",
sha256: "cryptojs",
sha384: "cryptojs",
sha512: "cryptojs",
ripemd160: "cryptojs",
hmacmd5: "cryptojs",
hmacsha1: "cryptojs",
hmacsha224: "cryptojs",
hmacsha256: "cryptojs",
hmacsha384: "cryptojs",
hmacsha512: "cryptojs",
hmacripemd160: "cryptojs",
MD5withRSA: "cryptojs/jsrsa",
SHA1withRSA: "cryptojs/jsrsa",
SHA224withRSA: "cryptojs/jsrsa",
SHA256withRSA: "cryptojs/jsrsa",
SHA384withRSA: "cryptojs/jsrsa",
SHA512withRSA: "cryptojs/jsrsa",
RIPEMD160withRSA: "cryptojs/jsrsa",
MD5withECDSA: "cryptojs/jsrsa",
SHA1withECDSA: "cryptojs/jsrsa",
SHA224withECDSA: "cryptojs/jsrsa",
SHA256withECDSA: "cryptojs/jsrsa",
SHA384withECDSA: "cryptojs/jsrsa",
SHA512withECDSA: "cryptojs/jsrsa",
RIPEMD160withECDSA: "cryptojs/jsrsa",
SHA1withDSA: "cryptojs/jsrsa",
SHA224withDSA: "cryptojs/jsrsa",
SHA256withDSA: "cryptojs/jsrsa",
MD5withRSAandMGF1: "cryptojs/jsrsa",
SHAwithRSAandMGF1: "cryptojs/jsrsa",
SHA1withRSAandMGF1: "cryptojs/jsrsa",
SHA224withRSAandMGF1: "cryptojs/jsrsa",
SHA256withRSAandMGF1: "cryptojs/jsrsa",
SHA384withRSAandMGF1: "cryptojs/jsrsa",
SHA512withRSAandMGF1: "cryptojs/jsrsa",
RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
}, this.CRYPTOJSMESSAGEDIGESTNAME = {
md5: i.algo.MD5,
sha1: i.algo.SHA1,
sha224: i.algo.SHA224,
sha256: i.algo.SHA256,
sha384: i.algo.SHA384,
sha512: i.algo.SHA512,
ripemd160: i.algo.RIPEMD160
}, this.getDigestInfoHex = function(t, e) {
if ("undefined" == typeof this.DIGESTINFOHEAD[e]) throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
return this.DIGESTINFOHEAD[e] + t;
}, this.getPaddedDigestInfoHex = function(t, e, r) {
var i = this.getDigestInfoHex(t, e), n = r / 4;
if (i.length + 22 > n) throw "key is too short for SigAlg: keylen=" + r + "," + e;
for (var s = "00" + i, a = "", o = n - "0001".length - s.length, h = 0; h < o; h += 2) a += "ff";
return "0001" + a + s;
}, this.hashString = function(t, e) {
return new Z.crypto.MessageDigest({
alg: e
}).digestString(t);
}, this.hashHex = function(t, e) {
return new Z.crypto.MessageDigest({
alg: e
}).digestHex(t);
}, this.sha1 = function(t) {
return this.hashString(t, "sha1");
}, this.sha256 = function(t) {
return this.hashString(t, "sha256");
}, this.sha256Hex = function(t) {
return this.hashHex(t, "sha256");
}, this.sha512 = function(t) {
return this.hashString(t, "sha512");
}, this.sha512Hex = function(t) {
return this.hashHex(t, "sha512");
}, this.isKey = function(t) {
return t instanceof J || t instanceof Z.crypto.DSA || t instanceof Z.crypto.ECDSA;
};
}(), Z.crypto.Util.md5 = function(t) {
return new Z.crypto.MessageDigest({
alg: "md5",
prov: "cryptojs"
}).digestString(t);
}, Z.crypto.Util.ripemd160 = function(t) {
return new Z.crypto.MessageDigest({
alg: "ripemd160",
prov: "cryptojs"
}).digestString(t);
}, Z.crypto.Util.SECURERANDOMGEN = new G(), Z.crypto.Util.getRandomHexOfNbytes = function(t) {
var e = new Array(t);
return Z.crypto.Util.SECURERANDOMGEN.nextBytes(e), nt(e);
}, Z.crypto.Util.getRandomBigIntegerOfNbytes = function(t) {
return new c(Z.crypto.Util.getRandomHexOfNbytes(t), 16);
}, Z.crypto.Util.getRandomHexOfNbits = function(t) {
var e = t % 8, r = new Array((t - e) / 8 + 1);
return Z.crypto.Util.SECURERANDOMGEN.nextBytes(r), r[0] = (255 << e & 255 ^ 255) & r[0], 
nt(r);
}, Z.crypto.Util.getRandomBigIntegerOfNbits = function(t) {
return new c(Z.crypto.Util.getRandomHexOfNbits(t), 16);
}, Z.crypto.Util.getRandomBigIntegerZeroToMax = function(t) {
for (var e = t.bitLength(); ;) {
var r = Z.crypto.Util.getRandomBigIntegerOfNbits(e);
if (-1 != t.compareTo(r)) return r;
}
}, Z.crypto.Util.getRandomBigIntegerMinToMax = function(t, e) {
var r = t.compareTo(e);
if (1 == r) throw "biMin is greater than biMax";
if (0 == r) return t;
var i = e.subtract(t);
return Z.crypto.Util.getRandomBigIntegerZeroToMax(i).add(t);
}, Z.crypto.MessageDigest = function(t) {
this.setAlgAndProvider = function(t, e) {
null !== (t = Z.crypto.MessageDigest.getCanonicalAlgName(t)) && void 0 === e && (e = Z.crypto.Util.DEFAULTPROVIDER[t]);
if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) && "cryptojs" == e) {
try {
this.md = Z.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create();
} catch (e) {
throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e;
}
this.updateString = function(t) {
this.md.update(t);
}, this.updateHex = function(t) {
var e = i.enc.Hex.parse(t);
this.md.update(e);
}, this.digest = function() {
return this.md.finalize().toString(i.enc.Hex);
}, this.digestString = function(t) {
return this.updateString(t), this.digest();
}, this.digestHex = function(t) {
return this.updateHex(t), this.digest();
};
}
if (-1 != ":sha256:".indexOf(t) && "sjcl" == e) {
try {
this.md = new sjcl.hash.sha256();
} catch (e) {
throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e;
}
this.updateString = function(t) {
this.md.update(t);
}, this.updateHex = function(t) {
var e = sjcl.codec.hex.toBits(t);
this.md.update(e);
}, this.digest = function() {
var t = this.md.finalize();
return sjcl.codec.hex.fromBits(t);
}, this.digestString = function(t) {
return this.updateString(t), this.digest();
}, this.digestHex = function(t) {
return this.updateHex(t), this.digest();
};
}
}, this.updateString = function(t) {
throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
}, this.updateHex = function(t) {
throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
}, this.digest = function() {
throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
}, this.digestString = function(t) {
throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
}, this.digestHex = function(t) {
throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
}, void 0 !== t && void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov && (this.provName = Z.crypto.Util.DEFAULTPROVIDER[this.algName]), 
this.setAlgAndProvider(this.algName, this.provName));
}, Z.crypto.MessageDigest.getCanonicalAlgName = function(t) {
return "string" == typeof t && (t = (t = t.toLowerCase()).replace(/-/, "")), t;
}, Z.crypto.MessageDigest.getHashLength = function(t) {
var e = Z.crypto.MessageDigest, r = e.getCanonicalAlgName(t);
if (void 0 === e.HASHLENGTH[r]) throw "not supported algorithm: " + t;
return e.HASHLENGTH[r];
}, Z.crypto.MessageDigest.HASHLENGTH = {
md5: 16,
sha1: 20,
sha224: 28,
sha256: 32,
sha384: 48,
sha512: 64,
ripemd160: 20
}, Z.crypto.Mac = function(t) {
this.setAlgAndProvider = function(t, e) {
null == (t = t.toLowerCase()) && (t = "hmacsha1");
if ("hmac" != (t = t.toLowerCase()).substr(0, 4)) throw "setAlgAndProvider unsupported HMAC alg: " + t;
void 0 === e && (e = Z.crypto.Util.DEFAULTPROVIDER[t]);
this.algProv = t + "/" + e;
var r = t.substr(4);
if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(r) && "cryptojs" == e) {
try {
var n = Z.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[r];
this.mac = i.algo.HMAC.create(n, this.pass);
} catch (t) {
throw "setAlgAndProvider hash alg set fail hashAlg=" + r + "/" + t;
}
this.updateString = function(t) {
this.mac.update(t);
}, this.updateHex = function(t) {
var e = i.enc.Hex.parse(t);
this.mac.update(e);
}, this.doFinal = function() {
return this.mac.finalize().toString(i.enc.Hex);
}, this.doFinalString = function(t) {
return this.updateString(t), this.doFinal();
}, this.doFinalHex = function(t) {
return this.updateHex(t), this.doFinal();
};
}
}, this.updateString = function(t) {
throw "updateString(str) not supported for this alg/prov: " + this.algProv;
}, this.updateHex = function(t) {
throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
}, this.doFinal = function() {
throw "digest() not supported for this alg/prov: " + this.algProv;
}, this.doFinalString = function(t) {
throw "digestString(str) not supported for this alg/prov: " + this.algProv;
}, this.doFinalHex = function(t) {
throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
}, this.setPassword = function(t) {
if ("string" != typeof t) {
if ("object" != typeof t) throw "KJUR.crypto.Mac unsupported password type: " + t;
e = null;
if (void 0 !== t.hex) {
if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + t.hex;
e = t.hex;
}
void 0 !== t.utf8 && (e = ct(t.utf8));
void 0 !== t.rstr && (e = pt(t.rstr));
void 0 !== t.b64 && (e = o(t.b64));
void 0 !== t.b64u && (e = ut(t.b64u));
if (null == e) throw "KJUR.crypto.Mac unsupported password type: " + t;
this.pass = i.enc.Hex.parse(e);
} else {
var e = t;
(t.length % 2 == 1 || !t.match(/^[0-9A-Fa-f]+$/)) && (e = pt(t));
this.pass = i.enc.Hex.parse(e);
}
}, void 0 !== t && (void 0 !== t.pass && this.setPassword(t.pass), void 0 !== t.alg && (this.algName = t.alg, 
void 0 === t.prov && (this.provName = Z.crypto.Util.DEFAULTPROVIDER[this.algName]), 
this.setAlgAndProvider(this.algName, this.provName)));
}, Z.crypto.Signature = function(t) {
var e = null;
this._setAlgNames = function() {
var t = this.algName.match(/^(.+)with(.+)$/);
t && (this.mdAlgName = t[1].toLowerCase(), this.pubkeyAlgName = t[2].toLowerCase(), 
"rsaandmgf1" == this.pubkeyAlgName && "sha" == this.mdAlgName && (this.mdAlgName = "sha1"));
}, this._zeroPaddingOfSignature = function(t, e) {
for (var r = "", i = e / 4 - t.length, n = 0; n < i; n++) r += "0";
return r + t;
}, this.setAlgAndProvider = function(t, e) {
this._setAlgNames();
if ("cryptojs/jsrsa" != e) throw new Error("provider not supported: " + e);
if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)) {
try {
this.md = new Z.crypto.MessageDigest({
alg: this.mdAlgName
});
} catch (t) {
throw new Error("setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + t);
}
this.init = function(t, e) {
var r = null;
try {
r = void 0 === e ? Wt.getKey(t) : Wt.getKey(t, e);
} catch (t) {
throw "init failed:" + t;
}
if (!0 === r.isPrivate) this.prvKey = r, this.state = "SIGN"; else {
if (!0 !== r.isPublic) throw "init failed.:" + r;
this.pubKey = r, this.state = "VERIFY";
}
}, this.updateString = function(t) {
this.md.updateString(t);
}, this.updateHex = function(t) {
this.md.updateHex(t);
}, this.sign = function() {
this.sHashHex = this.md.digest();
void 0 === this.prvKey && void 0 !== this.ecprvhex && void 0 !== this.eccurvename && void 0 !== Z.crypto.ECDSA && (this.prvKey = new Z.crypto.ECDSA({
curve: this.eccurvename,
prv: this.ecprvhex
}));
if (this.prvKey instanceof J && "rsaandmgf1" === this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen); else if (this.prvKey instanceof J && "rsa" === this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName); else if (this.prvKey instanceof Z.crypto.ECDSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex); else {
if (!(this.prvKey instanceof Z.crypto.DSA)) throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
}
return this.hSign;
}, this.signString = function(t) {
return this.updateString(t), this.sign();
}, this.signHex = function(t) {
return this.updateHex(t), this.sign();
}, this.verify = function(t) {
this.sHashHex = this.md.digest();
void 0 === this.pubKey && void 0 !== this.ecpubhex && void 0 !== this.eccurvename && void 0 !== Z.crypto.ECDSA && (this.pubKey = new Z.crypto.ECDSA({
curve: this.eccurvename,
pub: this.ecpubhex
}));
if (this.pubKey instanceof J && "rsaandmgf1" === this.pubkeyAlgName) return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
if (this.pubKey instanceof J && "rsa" === this.pubkeyAlgName) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
if (void 0 !== Z.crypto.ECDSA && this.pubKey instanceof Z.crypto.ECDSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
if (void 0 !== Z.crypto.DSA && this.pubKey instanceof Z.crypto.DSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
};
}
}, this.init = function(t, e) {
throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
}, this.updateString = function(t) {
throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
}, this.updateHex = function(t) {
throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
}, this.sign = function() {
throw "sign() not supported for this alg:prov=" + this.algProvName;
}, this.signString = function(t) {
throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
}, this.signHex = function(t) {
throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
}, this.verify = function(t) {
throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
}, this.initParams = t;
if (void 0 !== t) {
void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov ? this.provName = Z.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov, 
this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), 
this._setAlgNames());
void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen);
if (void 0 !== t.prvkeypem) {
if (void 0 !== t.prvkeypas) throw "both prvkeypem and prvkeypas parameters not supported";
try {
e = Wt.getKey(t.prvkeypem);
this.init(e);
} catch (t) {
throw "fatal error to load pem private key: " + t;
}
}
}
}, Z.crypto.Cipher = function(t) {}, Z.crypto.Cipher.encrypt = function(t, e, r, n) {
void 0 != zt(n, "enclag") && (r = n.encalg);
if ("string" == typeof r && "-CBC" == r.substr(-4)) {
var s = e, a = t;
void 0 != zt(n, "key") && (s = n.key);
void 0 != zt(n, "enc") && (hEnc = n.enc);
var o, h = i.enc.Hex.parse(s), u = i.enc.Hex.parse(a), c = i.enc.Hex.parse(n.iv);
if ("des-EDE3-CBC" == r) o = i.TripleDES.encrypt(u, h, {
iv: c
}); else {
if ("aes128-CBC" != r && "aes256-CBC" != r) throw new Error("unsupported algorithm: " + r);
o = i.AES.encrypt(u, h, {
iv: c
});
}
return o + "";
}
throw new Error("Cipher.encrypt: unsupported key or algorithm");
}, Z.crypto.Cipher.decrypt = function(t, e, r, n) {
void 0 != zt(n, "enclag") && (r = n.encalg);
if ("string" == typeof r && "-CBC" == r.substr(-4)) {
var s = e, a = t;
void 0 != zt(n, "key") && (s = n.key);
void 0 != zt(n, "enc") && (a = n.enc);
var o, h = i.enc.Hex.parse(s), u = i.enc.Hex.parse(a), c = i.enc.Hex.parse(n.iv);
if ("des-EDE3-CBC" == r) o = i.TripleDES.decrypt({
ciphertext: u
}, h, {
iv: c
}); else {
if ("aes128-CBC" != r && "aes256-CBC" != r) throw new Error("unsupported algorithm: " + r);
o = i.AES.decrypt({
ciphertext: u
}, h, {
iv: c
});
}
return i.enc.Hex.stringify(o);
}
throw new Error("Cipher.decrypt: unsupported key or algorithm");
}, Z.crypto.OID = new function() {
this.oidhex2name = {
"2a864886f70d010101": "rsaEncryption",
"2a8648ce3d0201": "ecPublicKey",
"2a8648ce380401": "dsa",
"2a8648ce3d030107": "secp256r1",
"2b8104001f": "secp192k1",
"2b81040021": "secp224r1",
"2b8104000a": "secp256k1",
"2b81040022": "secp384r1",
"2b81040023": "secp521r1",
"2a8648ce380403": "SHA1withDSA",
"608648016503040301": "SHA224withDSA",
"608648016503040302": "SHA256withDSA"
};
}();
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.crypto || !Z.crypto) && (Z.crypto = {});
Z.crypto.ECDSA = function(t) {
var e = Error, r = c, i = X, n = Z.crypto.ECDSA, s = Z.crypto.ECParameterDB, a = n.getName, o = et, h = o.getVbyListEx, u = o.isASN1HEX, l = new G();
this.type = "EC", this.isPrivate = !1, this.isPublic = !1;
this.getBigRandom = function(t) {
return new r(t.bitLength(), l).mod(t.subtract(r.ONE)).add(r.ONE);
}, this.setNamedCurve = function(t) {
this.ecparams = s.getByName(t), this.prvKeyHex = null, this.pubKeyHex = null, this.curveName = t;
}, this.setPrivateKeyHex = function(t) {
this.isPrivate = !0, this.prvKeyHex = t;
}, this.setPublicKeyHex = function(t) {
this.isPublic = !0, this.pubKeyHex = t;
}, this.getPublicKeyXYHex = function() {
var t = this.pubKeyHex;
if ("04" !== t.substr(0, 2)) throw "this method supports uncompressed format(04) only";
var e = this.ecparams.keycharlen;
if (t.length !== 2 + 2 * e) throw "malformed public key hex length";
var r = {};
return r.x = t.substr(2, e), r.y = t.substr(2 + e), r;
}, this.getShortNISTPCurveName = function() {
var t = this.curveName;
return "secp256r1" === t || "NIST P-256" === t || "P-256" === t || "prime256v1" === t ? "P-256" : "secp384r1" === t || "NIST P-384" === t || "P-384" === t ? "P-384" : "secp521r1" === t || "NIST P-521" === t || "P-521" === t ? "P-521" : null;
}, this.generateKeyPairHex = function() {
var t = this.ecparams.n, e = this.getBigRandom(t), r = this.ecparams.keycharlen, i = ("0000000000" + e.toString(16)).slice(-r);
this.setPrivateKeyHex(i);
return {
ecprvhex: i,
ecpubhex: this.generatePublicKeyHex()
};
}, this.generatePublicKeyHex = function() {
var t = new r(this.prvKeyHex, 16), e = this.ecparams.G.multiply(t), i = e.getX().toBigInteger(), n = e.getY().toBigInteger(), s = this.ecparams.keycharlen, a = "04" + ("0000000000" + i.toString(16)).slice(-s) + ("0000000000" + n.toString(16)).slice(-s);
return this.setPublicKeyHex(a), a;
}, this.signWithMessageHash = function(t) {
return this.signHex(t, this.prvKeyHex);
}, this.signHex = function(t, e) {
var i = new r(e, 16), s = this.ecparams.n, a = new r(t.substring(0, this.ecparams.keycharlen), 16);
do {
var o = this.getBigRandom(s), h = this.ecparams.G.multiply(o).getX().toBigInteger().mod(s);
} while (h.compareTo(r.ZERO) <= 0);
var u = o.modInverse(s).multiply(a.add(i.multiply(h))).mod(s);
return n.biRSSigToASN1Sig(h, u);
}, this.sign = function(t, e) {
var i = e, n = this.ecparams.n, s = r.fromByteArrayUnsigned(t);
do {
var a = this.getBigRandom(n), o = this.ecparams.G.multiply(a).getX().toBigInteger().mod(n);
} while (o.compareTo(c.ZERO) <= 0);
var h = a.modInverse(n).multiply(s.add(i.multiply(o))).mod(n);
return this.serializeSig(o, h);
}, this.verifyWithMessageHash = function(t, e) {
return this.verifyHex(t, e, this.pubKeyHex);
}, this.verifyHex = function(t, e, s) {
try {
var a, o, h = n.parseSigHex(e);
a = h.r, o = h.s;
var u = i.decodeFromHex(this.ecparams.curve, s), c = new r(t.substring(0, this.ecparams.keycharlen), 16);
return this.verifyRaw(c, a, o, u);
} catch (t) {
return !1;
}
}, this.verify = function(t, e, n) {
var s, a, o;
if (Bitcoin.Util.isArray(e)) {
var h = this.parseSig(e);
s = h.r, a = h.s;
} else {
if ("object" != typeof e || !e.r || !e.s) throw "Invalid value for signature";
s = e.r, a = e.s;
}
if (n instanceof X) o = n; else {
if (!Bitcoin.Util.isArray(n)) throw "Invalid format for pubkey value, must be byte array or ECPointFp";
o = i.decodeFrom(this.ecparams.curve, n);
}
var u = r.fromByteArrayUnsigned(t);
return this.verifyRaw(u, s, a, o);
}, this.verifyRaw = function(t, e, i, n) {
var s = this.ecparams.n, a = this.ecparams.G;
if (e.compareTo(r.ONE) < 0 || e.compareTo(s) >= 0) return !1;
if (i.compareTo(r.ONE) < 0 || i.compareTo(s) >= 0) return !1;
var o = i.modInverse(s), h = t.multiply(o).mod(s), u = e.multiply(o).mod(s);
return a.multiply(h).add(n.multiply(u)).getX().toBigInteger().mod(s).equals(e);
}, this.serializeSig = function(t, e) {
var r = t.toByteArraySigned(), i = e.toByteArraySigned(), n = [];
return n.push(2), n.push(r.length), (n = n.concat(r)).push(2), n.push(i.length), 
(n = n.concat(i)).unshift(n.length), n.unshift(48), n;
}, this.parseSig = function(t) {
var e;
if (48 != t[0]) throw new Error("Signature not a valid DERSequence");
if (2 != t[e = 2]) throw new Error("First element in signature must be a DERInteger");
var i = t.slice(e + 2, e + 2 + t[e + 1]);
if (2 != t[e += 2 + t[e + 1]]) throw new Error("Second element in signature must be a DERInteger");
var n = t.slice(e + 2, e + 2 + t[e + 1]);
e += 2 + t[e + 1];
return {
r: r.fromByteArrayUnsigned(i),
s: r.fromByteArrayUnsigned(n)
};
}, this.parseSigCompact = function(t) {
if (65 !== t.length) throw "Signature has the wrong length";
var e = t[0] - 27;
if (e < 0 || e > 7) throw "Invalid signature type";
var i = this.ecparams.n;
return {
r: r.fromByteArrayUnsigned(t.slice(1, 33)).mod(i),
s: r.fromByteArrayUnsigned(t.slice(33, 65)).mod(i),
i: e
};
}, this.readPKCS5PrvKeyHex = function(t) {
if (!1 === u(t)) throw new Error("not ASN.1 hex string");
var e, r, i;
try {
e = h(t, 0, [ "[0]", 0 ], "06"), r = h(t, 0, [ 1 ], "04");
try {
i = h(t, 0, [ "[1]", 0 ], "03");
} catch (t) {}
} catch (t) {
throw new Error("malformed PKCS#1/5 plain ECC private key");
}
this.curveName = a(e);
if (void 0 === this.curveName) throw "unsupported curve name";
this.setNamedCurve(this.curveName), this.setPublicKeyHex(i), this.setPrivateKeyHex(r), 
this.isPublic = !1;
}, this.readPKCS8PrvKeyHex = function(t) {
if (!1 === u(t)) throw new e("not ASN.1 hex string");
var r, i, n;
try {
h(t, 0, [ 1, 0 ], "06"), r = h(t, 0, [ 1, 1 ], "06"), i = h(t, 0, [ 2, 0, 1 ], "04");
try {
n = h(t, 0, [ 2, 0, "[1]", 0 ], "03");
} catch (t) {}
} catch (t) {
throw new e("malformed PKCS#8 plain ECC private key");
}
this.curveName = a(r);
if (void 0 === this.curveName) throw new e("unsupported curve name");
this.setNamedCurve(this.curveName), this.setPublicKeyHex(n), this.setPrivateKeyHex(i), 
this.isPublic = !1;
}, this.readPKCS8PubKeyHex = function(t) {
if (!1 === u(t)) throw new e("not ASN.1 hex string");
var r, i;
try {
h(t, 0, [ 0, 0 ], "06"), r = h(t, 0, [ 0, 1 ], "06"), i = h(t, 0, [ 1 ], "03");
} catch (t) {
throw new e("malformed PKCS#8 ECC public key");
}
this.curveName = a(r);
if (null === this.curveName) throw new e("unsupported curve name");
this.setNamedCurve(this.curveName), this.setPublicKeyHex(i);
}, this.readCertPubKeyHex = function(t, r) {
if (!1 === u(t)) throw new e("not ASN.1 hex string");
var i, n;
try {
i = h(t, 0, [ 0, 5, 0, 1 ], "06"), n = h(t, 0, [ 0, 5, 1 ], "03");
} catch (t) {
throw new e("malformed X.509 certificate ECC public key");
}
this.curveName = a(i);
if (null === this.curveName) throw new e("unsupported curve name");
this.setNamedCurve(this.curveName), this.setPublicKeyHex(n);
}, void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve), void 0 === this.curveName && (this.curveName = "secp256r1"), 
this.setNamedCurve(this.curveName), void 0 !== t && (void 0 !== t.prv && this.setPrivateKeyHex(t.prv), 
void 0 !== t.pub && this.setPublicKeyHex(t.pub));
}, Z.crypto.ECDSA.parseSigHex = function(t) {
var e = Z.crypto.ECDSA.parseSigHexInHexRS(t);
return {
r: new c(e.r, 16),
s: new c(e.s, 16)
};
}, Z.crypto.ECDSA.parseSigHexInHexRS = function(t) {
var e = et, r = e.getChildIdx, i = e.getV;
e.checkStrictDER(t, 0);
if ("30" != t.substr(0, 2)) throw new Error("signature is not a ASN.1 sequence");
var n = r(t, 0);
if (2 != n.length) throw new Error("signature shall have two elements");
var s = n[0], a = n[1];
if ("02" != t.substr(s, 2)) throw new Error("1st item not ASN.1 integer");
if ("02" != t.substr(a, 2)) throw new Error("2nd item not ASN.1 integer");
return {
r: i(t, s),
s: i(t, a)
};
}, Z.crypto.ECDSA.asn1SigToConcatSig = function(t) {
var e = Z.crypto.ECDSA.parseSigHexInHexRS(t), r = e.r, i = e.s;
if (r.length >= 130 && r.length <= 134) {
if (r.length % 2 != 0) throw Error("unknown ECDSA sig r length error");
if (i.length % 2 != 0) throw Error("unknown ECDSA sig s length error");
"00" == r.substr(0, 2) && (r = r.substr(2));
"00" == i.substr(0, 2) && (i = i.substr(2));
var n = Math.max(r.length, i.length);
return (r = ("000000" + r).slice(-n)) + (i = ("000000" + i).slice(-n));
}
"00" == r.substr(0, 2) && r.length % 32 == 2 && (r = r.substr(2));
"00" == i.substr(0, 2) && i.length % 32 == 2 && (i = i.substr(2));
r.length % 32 == 30 && (r = "00" + r);
i.length % 32 == 30 && (i = "00" + i);
if (r.length % 32 != 0) throw Error("unknown ECDSA sig r length error");
if (i.length % 32 != 0) throw Error("unknown ECDSA sig s length error");
return r + i;
}, Z.crypto.ECDSA.concatSigToASN1Sig = function(t) {
if (t.length % 4 != 0) throw Error("unknown ECDSA concatinated r-s sig length error");
var e = t.substr(0, t.length / 2), r = t.substr(t.length / 2);
return Z.crypto.ECDSA.hexRSSigToASN1Sig(e, r);
}, Z.crypto.ECDSA.hexRSSigToASN1Sig = function(t, e) {
var r = new c(t, 16), i = new c(e, 16);
return Z.crypto.ECDSA.biRSSigToASN1Sig(r, i);
}, Z.crypto.ECDSA.biRSSigToASN1Sig = function(t, e) {
var r = Z.asn1, i = new r.DERInteger({
bigint: t
}), n = new r.DERInteger({
bigint: e
});
return new r.DERSequence({
array: [ i, n ]
}).tohex();
}, Z.crypto.ECDSA.getName = function(t) {
return "2b8104001f" === t ? "secp192k1" : "2a8648ce3d030107" === t ? "secp256r1" : "2b8104000a" === t ? "secp256k1" : "2b81040021" === t ? "secp224r1" : "2b81040022" === t ? "secp384r1" : "2b81040023" === t ? "secp521r1" : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t) ? "secp256r1" : -1 !== "|secp256k1|".indexOf(t) ? "secp256k1" : -1 !== "|secp224r1|NIST P-224|P-224|".indexOf(t) ? "secp224r1" : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t) ? "secp384r1" : -1 !== "|secp521r1|NIST P-521|P-521|".indexOf(t) ? "secp521r1" : null;
};
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.crypto || !Z.crypto) && (Z.crypto = {});
Z.crypto.ECParameterDB = new function() {
var t = {}, e = {};
function r(t) {
return new c(t, 16);
}
this.getByName = function(r) {
var i = r;
"undefined" != typeof e[i] && (i = e[r]);
if ("undefined" != typeof t[i]) return t[i];
throw "unregistered EC curve name: " + i;
}, this.regist = function(i, n, s, a, o, h, u, c, l, f, d, g) {
t[i] = {};
var p = r(s), v = r(a), y = r(o), m = r(h), x = r(u), S = new $(p, v, y), E = S.decodePointHex("04" + c + l);
t[i].name = i, t[i].keylen = n, t[i].keycharlen = 2 * Math.ceil(n / 8), t[i].curve = S, 
t[i].G = E, t[i].n = m, t[i].h = x, t[i].oid = d, t[i].info = g;
for (var w = 0; w < f.length; w++) e[f[w]] = i;
};
}(), Z.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"), 
Z.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"), 
Z.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"), 
Z.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []), 
Z.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []), 
Z.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []), 
Z.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []), 
Z.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", [ "NIST P-256", "P-256", "prime256v1" ]), 
Z.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", [ "NIST P-384", "P-384" ]), 
Z.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "00C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", [ "NIST P-521", "P-521" ]);
("undefined" == typeof Z || !Z) && (Z = {});
("undefined" == typeof Z.crypto || !Z.crypto) && (Z.crypto = {});
Z.crypto.DSA = function() {
var t = et, e = (t.getVbyList, t.getVbyListEx), r = t.isASN1HEX, i = c;
this.p = null, this.q = null, this.g = null, this.y = null, this.x = null, this.type = "DSA", 
this.isPrivate = !1, this.isPublic = !1, this.setPrivate = function(t, e, r, i, n) {
this.isPrivate = !0, this.p = t, this.q = e, this.g = r, this.y = i, this.x = n;
}, this.setPrivateHex = function(t, e, r, i, n) {
var s, a, o, h, u;
s = new c(t, 16), a = new c(e, 16), o = new c(r, 16), h = "string" == typeof i && i.length > 1 ? new c(i, 16) : null, 
u = new c(n, 16), this.setPrivate(s, a, o, h, u);
}, this.setPublic = function(t, e, r, i) {
this.isPublic = !0, this.p = t, this.q = e, this.g = r, this.y = i, this.x = null;
}, this.setPublicHex = function(t, e, r, i) {
var n, s, a, o;
n = new c(t, 16), s = new c(e, 16), a = new c(r, 16), o = new c(i, 16), this.setPublic(n, s, a, o);
}, this.signWithMessageHash = function(t) {
var e = this.p, r = this.q, i = this.g, n = (this.y, this.x), s = Z.crypto.Util.getRandomBigIntegerMinToMax(c.ONE.add(c.ONE), r.subtract(c.ONE)), a = new c(t.substr(0, r.bitLength() / 4), 16), o = i.modPow(s, e).mod(r), h = s.modInverse(r).multiply(a.add(n.multiply(o))).mod(r);
return Z.asn1.ASN1Util.jsonToASN1HEX({
seq: [ {
int: {
bigint: o
}
}, {
int: {
bigint: h
}
} ]
});
}, this.verifyWithMessageHash = function(t, e) {
var r = this.p, i = this.q, n = this.g, s = this.y, a = this.parseASN1Signature(e), o = a[0], h = a[1], u = new c(t.substr(0, i.bitLength() / 4), 16);
if (c.ZERO.compareTo(o) > 0 || o.compareTo(i) > 0) throw "invalid DSA signature";
if (c.ZERO.compareTo(h) >= 0 || h.compareTo(i) > 0) throw "invalid DSA signature";
var l = h.modInverse(i), f = u.multiply(l).mod(i), d = o.multiply(l).mod(i);
return 0 == n.modPow(f, r).multiply(s.modPow(d, r)).mod(r).mod(i).compareTo(o);
}, this.parseASN1Signature = function(t) {
try {
return [ new i(e(t, 0, [ 0 ], "02"), 16), new i(e(t, 0, [ 1 ], "02"), 16) ];
} catch (t) {
throw new Error("malformed ASN.1 DSA signature");
}
}, this.readPKCS5PrvKeyHex = function(t) {
var i, n, s, a, o;
if (!1 === r(t)) throw new Error("not ASN.1 hex string");
try {
i = e(t, 0, [ 1 ], "02"), n = e(t, 0, [ 2 ], "02"), s = e(t, 0, [ 3 ], "02"), a = e(t, 0, [ 4 ], "02"), 
o = e(t, 0, [ 5 ], "02");
} catch (t) {
throw new Error("malformed PKCS#1/5 plain DSA private key");
}
this.setPrivateHex(i, n, s, a, o);
}, this.readPKCS8PrvKeyHex = function(t) {
var i, n, s, a;
if (!1 === r(t)) throw new Error("not ASN.1 hex string");
try {
i = e(t, 0, [ 1, 1, 0 ], "02"), n = e(t, 0, [ 1, 1, 1 ], "02"), s = e(t, 0, [ 1, 1, 2 ], "02"), 
a = e(t, 0, [ 2, 0 ], "02");
} catch (t) {
throw new Error("malformed PKCS#8 plain DSA private key");
}
this.setPrivateHex(i, n, s, null, a);
}, this.readPKCS8PubKeyHex = function(t) {
var i, n, s, a;
if (!1 === r(t)) throw new Error("not ASN.1 hex string");
try {
i = e(t, 0, [ 0, 1, 0 ], "02"), n = e(t, 0, [ 0, 1, 1 ], "02"), s = e(t, 0, [ 0, 1, 2 ], "02"), 
a = e(t, 0, [ 1, 0 ], "02");
} catch (t) {
throw new Error("malformed PKCS#8 DSA public key");
}
this.setPublicHex(i, n, s, a);
}, this.readCertPubKeyHex = function(t, i) {
var n, s, a, o;
if (!1 === r(t)) throw new Error("not ASN.1 hex string");
try {
n = e(t, 0, [ 0, 5, 0, 1, 0 ], "02"), s = e(t, 0, [ 0, 5, 0, 1, 1 ], "02"), a = e(t, 0, [ 0, 5, 0, 1, 2 ], "02"), 
o = e(t, 0, [ 0, 5, 1, 0 ], "02");
} catch (t) {
throw new Error("malformed X.509 certificate DSA public key");
}
this.setPublicHex(n, s, a, o);
};
};
var Wt = function() {
var t = function(t, r, n) {
return e(i.AES, t, r, n);
}, e = function(t, e, r, n) {
var s = i.enc.Hex.parse(e), a = i.enc.Hex.parse(r), o = i.enc.Hex.parse(n), h = {};
h.key = a, h.iv = o, h.ciphertext = s;
var u = t.decrypt(h, a, {
iv: o
});
return i.enc.Hex.stringify(u);
}, r = function(t, e, r) {
return n(i.AES, t, e, r);
}, n = function(t, e, r, n) {
var s = i.enc.Hex.parse(e), a = i.enc.Hex.parse(r), o = i.enc.Hex.parse(n), h = t.encrypt(s, a, {
iv: o
}), u = i.enc.Hex.parse(h.toString());
return i.enc.Base64.stringify(u);
}, s = {
"AES-256-CBC": {
proc: t,
eproc: r,
keylen: 32,
ivlen: 16
},
"AES-192-CBC": {
proc: t,
eproc: r,
keylen: 24,
ivlen: 16
},
"AES-128-CBC": {
proc: t,
eproc: r,
keylen: 16,
ivlen: 16
},
"DES-EDE3-CBC": {
proc: function(t, r, n) {
return e(i.TripleDES, t, r, n);
},
eproc: function(t, e, r) {
return n(i.TripleDES, t, e, r);
},
keylen: 24,
ivlen: 8
},
"DES-CBC": {
proc: function(t, r, n) {
return e(i.DES, t, r, n);
},
eproc: function(t, e, r) {
return n(i.DES, t, e, r);
},
keylen: 8,
ivlen: 8
}
}, a = function(t) {
var e = i.lib.WordArray.random(t);
return i.enc.Hex.stringify(e);
}, o = function(t) {
var e = {}, r = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
r && (e.cipher = r[1], e.ivsalt = r[2]);
var i = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
i && (e.type = i[1]);
var n = -1, s = 0;
-1 != t.indexOf("\r\n\r\n") && (n = t.indexOf("\r\n\r\n"), s = 2);
-1 != t.indexOf("\n\n") && (n = t.indexOf("\n\n"), s = 1);
var a = t.indexOf("-----END");
if (-1 != n && -1 != a) {
var o = t.substring(n + 2 * s, a - s);
o = o.replace(/\s+/g, ""), e.data = o;
}
return e;
}, h = function(t, e, r) {
for (var n = r.substring(0, 16), a = i.enc.Hex.parse(n), o = i.enc.Utf8.parse(e), h = s[t].keylen + s[t].ivlen, u = "", c = null; ;) {
var l = i.algo.MD5.create();
null != c && l.update(c);
l.update(o), l.update(a), c = l.finalize();
if ((u += i.enc.Hex.stringify(c)).length >= 2 * h) break;
}
var f = {};
return f.keyhex = u.substr(0, 2 * s[t].keylen), f.ivhex = u.substr(2 * s[t].keylen, 2 * s[t].ivlen), 
f;
}, u = function(t, e, r, n) {
var a = i.enc.Base64.parse(t), o = i.enc.Hex.stringify(a);
return (0, s[e].proc)(o, r, n);
}, c = function(t, e, r, i) {
return (0, s[e].eproc)(t, r, i);
};
return {
version: "1.0.0",
parsePKCS5PEM: function(t) {
return o(t);
},
getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, r) {
return h(t, e, r);
},
decryptKeyB64: function(t, e, r, i) {
return u(t, e, r, i);
},
getDecryptedKeyHex: function(t, e) {
var r = o(t), i = (r.type, r.cipher), n = r.ivsalt, s = r.data, a = h(i, e, n).keyhex;
return u(s, i, a, n);
},
getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, r, i, n) {
var o = "";
("undefined" == typeof i || null == i) && (i = "AES-256-CBC");
if ("undefined" == typeof s[i]) throw new Error("KEYUTIL unsupported algorithm: " + i);
if ("undefined" == typeof n || null == n) {
var u = s[i].ivlen;
n = a(u).toUpperCase();
}
var l = h(i, r, n).keyhex;
o = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
return o += "Proc-Type: 4,ENCRYPTED\r\n", o += "DEK-Info: " + i + "," + n + "\r\n", 
o += "\r\n", o += c(e, i, l, n).replace(/(.{64})/g, "$1\r\n"), o += "\r\n-----END " + t + " PRIVATE KEY-----\r\n";
},
getEncryptedPKCS8PEM: function(t, e, r) {
return xt(this.getEncryptedPKCS8Hex(t, e, r), "ENCRYPTED PRIVATE KEY");
},
getEncryptedPKCS8Hex: function(t, e, r) {
var i;
(i = void 0 == r || null == r ? {} : JSON.parse(JSON.stringify(r))).plain = t, this.initPBES2Param(i), 
this.encryptPBES2Param(i, e);
var n = this.generatePBES2ASN1Param(i);
return Z.asn1.ASN1Util.newObject(n).tohex();
},
initPBES2Param: function(t) {
void 0 == zt(t, "encalg") && (t.encalg = "aes256-CBC");
void 0 == zt(t, "iter") && (t.iter = 2048);
void 0 == zt(t, "prf") && (t.prf = "hmacWithSHA256");
void 0 == zt(t, "salt") && (t.salt = i.enc.Hex.stringify(i.lib.WordArray.random(8)));
if (void 0 == zt(t, "enciv")) {
var e;
"des-EDE3-CBC" == t.encalg && (e = 8), "aes128-CBC" == t.encalg && (e = 16), "aes256-CBC" == t.encalg && (e = 16), 
t.enciv = i.enc.Hex.stringify(i.lib.WordArray.random(e));
}
},
encryptPBES2Param: function(t, e) {
var r = Wt.getDKFromPBES2Param(t, e);
try {
var i = Z.crypto.Cipher.encrypt(t.plain, r, t.encalg, {
iv: t.enciv
});
} catch (e) {
throw new Error("encrypt error: " + t.plain + " " + r + " " + t.encalg + " " + t.enciv);
}
t.enc = i;
},
generatePBES2ASN1Param: function(t) {
var e = {
seq: [ {
seq: [ {
oid: "pkcs5PBES2"
}, {
seq: [ {
seq: [ {
oid: "pkcs5PBKDF2"
}, {
seq: [ {
octstr: {
hex: t.salt
}
}, {
int: {
hex: Kt(t.iter)
}
} ]
} ]
}, {
seq: [ {
oid: t.encalg
}, {
octstr: {
hex: t.enciv
}
} ]
} ]
} ]
}, {
octstr: {
hex: t.enc
}
} ]
};
return "hmacWithSHA1" != t.prf && e.seq[0].seq[1].seq[0].seq[1].seq.push({
seq: [ {
oid: t.prf
}, {
null: ""
} ]
}), e;
},
parseHexOfEncryptedPKCS8: function(t) {
var e = et, r = e.getChildIdx, i = e.getV, n = {}, s = r(t, 0);
if (2 != s.length) throw new Error("malformed format: SEQUENCE(0).items != 2: " + s.length);
n.ciphertext = i(t, s[1]);
var a = r(t, s[0]);
if (2 != a.length) throw new Error("malformed format: SEQUENCE(0.0).items != 2: " + a.length);
if ("2a864886f70d01050d" != i(t, a[0])) throw new Error("this only supports pkcs5PBES2");
var o = r(t, a[1]);
if (2 != a.length) throw new Error("malformed format: SEQUENCE(0.0.1).items != 2: " + o.length);
var h = r(t, o[1]);
if (2 != h.length) throw new Error("malformed format: SEQUENCE(0.0.1.1).items != 2: " + h.length);
if ("2a864886f70d0307" != i(t, h[0])) throw "this only supports TripleDES";
n.encryptionSchemeAlg = "TripleDES", n.encryptionSchemeIV = i(t, h[1]);
var u = r(t, o[0]);
if (2 != u.length) throw new Error("malformed format: SEQUENCE(0.0.1.0).items != 2: " + u.length);
if ("2a864886f70d01050c" != i(t, u[0])) throw new Error("this only supports pkcs5PBKDF2");
var c = r(t, u[1]);
if (c.length < 2) throw new Error("malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + c.length);
n.pbkdf2Salt = i(t, c[0]);
var l = i(t, c[1]);
try {
n.pbkdf2Iter = parseInt(l, 16);
} catch (t) {
throw new Error("malformed format pbkdf2Iter: " + l);
}
return n;
},
getPBKDF2KeyHexFromParam: function(t, e) {
var r = i.enc.Hex.parse(t.pbkdf2Salt), n = t.pbkdf2Iter, s = i.PBKDF2(e, r, {
keySize: 6,
iterations: n
});
return i.enc.Hex.stringify(s);
},
_getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
var r = St(t, "ENCRYPTED PRIVATE KEY"), n = this.parseHexOfEncryptedPKCS8(r), s = Wt.getPBKDF2KeyHexFromParam(n, e), a = {};
a.ciphertext = i.enc.Hex.parse(n.ciphertext);
var o = i.enc.Hex.parse(s), h = i.enc.Hex.parse(n.encryptionSchemeIV), u = i.TripleDES.decrypt(a, o, {
iv: h
});
return i.enc.Hex.stringify(u);
},
parsePBES2: function(t) {
var e = et.parse(t);
if ("pkcs5PBES2" != zt(e, "seq.0.seq.0.oid") || "pkcs5PBKDF2" != zt(e, "seq.0.seq.1.seq.0.seq.0.oid")) throw new Error("not pkcs5PBES2 and pkcs5PBKDF2 used");
var r = zt(e, "seq.0.seq.1.seq.0.seq.1.seq");
if (void 0 == r) throw new Error("PBKDF2 parameter not found");
var i = zt(r, "0.octstr.hex"), n = zt(r, "1.int.hex"), s = zt(r, "2.seq.0.oid", "hmacWithSHA1"), a = -1;
try {
a = parseInt(n, 16);
} catch (t) {
throw new Error("iter not proper value");
}
var o = zt(e, "seq.0.seq.1.seq.1.seq.0.oid"), h = zt(e, "seq.0.seq.1.seq.1.seq.1.octstr.hex"), u = zt(e, "seq.1.octstr.hex");
if (void 0 == o || void 0 == h || void 0 == u) throw new Error("encalg, enciv or enc is undefined");
return {
salt: i,
iter: a,
prf: s,
encalg: o,
enciv: h,
enc: u
};
},
getDKFromPBES2Param: function(t, e) {
var r = {
hmacWithSHA1: i.algo.SHA1,
hmacWithSHA224: i.algo.SHA224,
hmacWithSHA256: i.algo.SHA256,
hmacWithSHA384: i.algo.SHA384,
hmacWithSHA512: i.algo.SHA512
}[t.prf];
if (void 0 == r) throw new Error("unsupported prf");
var n = {
"des-EDE3-CBC": 6,
"aes128-CBC": 4,
"aes256-CBC": 8
}[t.encalg];
if (void 0 == n) throw new Error("unsupported encalg");
var s = i.enc.Hex.parse(t.salt), a = t.iter;
try {
var o = i.PBKDF2(e, s, {
keySize: n,
iterations: a,
hasher: r
});
return i.enc.Hex.stringify(o);
} catch (r) {
throw new Error("PBKDF2 error: " + r + " " + JSON.stringify(t) + " " + e);
}
},
getPlainHexFromEncryptedPKCS8PEM: function(t, e) {
if (-1 == t.indexOf("BEGIN ENCRYPTED PRIVATE KEY")) throw new Error("not Encrypted PKCS#8 PEM string");
var r, i = St(t);
try {
r = Wt.parsePBES2(i);
} catch (t) {
throw new Error("malformed PBES2 format: " + t.message);
}
var n = Wt.getDKFromPBES2Param(r, e);
return Z.crypto.Cipher.decrypt(r.enc, n, r.encalg, {
iv: r.enciv
});
},
getKeyFromEncryptedPKCS8PEM: function(t, e) {
var r = this.getPlainHexFromEncryptedPKCS8PEM(t, e);
return this.getKeyFromPlainPrivatePKCS8Hex(r);
},
parsePlainPrivatePKCS8Hex: function(t) {
var e = et, r = e.getChildIdx, i = e.getV, n = {
algparam: null
};
if ("30" != t.substr(0, 2)) throw new Error("malformed plain PKCS8 private key(code:001)");
var s = r(t, 0);
if (s.length < 3) throw new Error("malformed plain PKCS8 private key(code:002)");
if ("30" != t.substr(s[1], 2)) throw new Error("malformed PKCS8 private key(code:003)");
var a = r(t, s[1]);
if (2 != a.length) throw new Error("malformed PKCS8 private key(code:004)");
if ("06" != t.substr(a[0], 2)) throw new Error("malformed PKCS8 private key(code:005)");
n.algoid = i(t, a[0]);
"06" == t.substr(a[1], 2) && (n.algparam = i(t, a[1]));
if ("04" != t.substr(s[2], 2)) throw new Error("malformed PKCS8 private key(code:006)");
return n.keyidx = e.getVidx(t, s[2]), n;
},
getKeyFromPlainPrivatePKCS8PEM: function(t) {
var e = St(t, "PRIVATE KEY");
return this.getKeyFromPlainPrivatePKCS8Hex(e);
},
getKeyFromPlainPrivatePKCS8Hex: function(t) {
var e, r = this.parsePlainPrivatePKCS8Hex(t);
if ("2a864886f70d010101" == r.algoid) e = new J(); else if ("2a8648ce380401" == r.algoid) e = new Z.crypto.DSA(); else {
if ("2a8648ce3d0201" != r.algoid) throw new Error("unsupported private key algorithm");
e = new Z.crypto.ECDSA();
}
return e.readPKCS8PrvKeyHex(t), e;
},
_getKeyFromPublicPKCS8Hex: function(t) {
var e, r = et.getVbyList(t, 0, [ 0, 0 ], "06");
if ("2a864886f70d010101" === r) e = new J(); else if ("2a8648ce380401" === r) e = new Z.crypto.DSA(); else {
if ("2a8648ce3d0201" !== r) throw new Error("unsupported PKCS#8 public key hex");
e = new Z.crypto.ECDSA();
}
return e.readPKCS8PubKeyHex(t), e;
},
parsePublicRawRSAKeyHex: function(t) {
var e = et, r = e.getChildIdx, i = e.getV, n = {};
if ("30" != t.substr(0, 2)) throw new Error("malformed RSA key(code:001)");
var s = r(t, 0);
if (2 != s.length) throw new Error("malformed RSA key(code:002)");
if ("02" != t.substr(s[0], 2)) throw new Error("malformed RSA key(code:003)");
n.n = i(t, s[0]);
if ("02" != t.substr(s[1], 2)) throw new Error("malformed RSA key(code:004)");
return n.e = i(t, s[1]), n;
},
parsePublicPKCS8Hex: function(t) {
var e = et, r = e.getChildIdx, i = e.getV, n = {
algparam: null
}, s = r(t, 0);
if (2 != s.length) throw new Error("outer DERSequence shall have 2 elements: " + s.length);
var a = s[0];
if ("30" != t.substr(a, 2)) throw new Error("malformed PKCS8 public key(code:001)");
var o = r(t, a);
if (2 != o.length) throw new Error("malformed PKCS8 public key(code:002)");
if ("06" != t.substr(o[0], 2)) throw new Error("malformed PKCS8 public key(code:003)");
n.algoid = i(t, o[0]);
"06" == t.substr(o[1], 2) ? n.algparam = i(t, o[1]) : "30" == t.substr(o[1], 2) && (n.algparam = {}, 
n.algparam.p = e.getVbyList(t, o[1], [ 0 ], "02"), n.algparam.q = e.getVbyList(t, o[1], [ 1 ], "02"), 
n.algparam.g = e.getVbyList(t, o[1], [ 2 ], "02"));
if ("03" != t.substr(s[1], 2)) throw new Error("malformed PKCS8 public key(code:004)");
return n.key = i(t, s[1]).substr(2), n;
}
};
}();
Wt.getKey = function(t, e, r) {
var i = (y = et).getChildIdx, n = (y.getV, y.getVbyList), s = Z.crypto, a = s.ECDSA, o = s.DSA, h = J, u = St, l = Wt;
if ("undefined" != typeof h && t instanceof h) return t;
if ("undefined" != typeof a && t instanceof a) return t;
if ("undefined" != typeof o && t instanceof o) return t;
if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d) return new a({
pub: t.xy,
curve: t.curve
});
if (void 0 !== t.curve && void 0 !== t.d) return new a({
prv: t.d,
curve: t.curve
});
if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
return (C = new h()).setPublic(t.n, t.e), C;
}
if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.co && void 0 === t.qi) {
return (C = new h()).setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co), C;
}
if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 === t.p) {
return (C = new h()).setPrivate(t.n, t.e, t.d), C;
}
if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 === t.x) {
return (C = new o()).setPublic(t.p, t.q, t.g, t.y), C;
}
if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 !== t.x) {
return (C = new o()).setPrivate(t.p, t.q, t.g, t.y, t.x), C;
}
if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
return (C = new h()).setPublic(ut(t.n), ut(t.e)), C;
}
if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.qi) {
return (C = new h()).setPrivateEx(ut(t.n), ut(t.e), ut(t.d), ut(t.p), ut(t.q), ut(t.dp), ut(t.dq), ut(t.qi)), 
C;
}
if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d) {
return (C = new h()).setPrivate(ut(t.n), ut(t.e), ut(t.d)), C;
}
if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 === t.d) {
var f = (D = new a({
curve: t.crv
})).ecparams.keycharlen, d = "04" + ("0000000000" + ut(t.x)).slice(-f) + ("0000000000" + ut(t.y)).slice(-f);
return D.setPublicKeyHex(d), D;
}
if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 !== t.d) {
f = (D = new a({
curve: t.crv
})).ecparams.keycharlen, d = "04" + ("0000000000" + ut(t.x)).slice(-f) + ("0000000000" + ut(t.y)).slice(-f);
var g = ("0000000000" + ut(t.d)).slice(-f);
return D.setPublicKeyHex(d), D.setPrivateKeyHex(g), D;
}
if ("pkcs5prv" === r) {
var p, v = t, y = et;
if (9 === (p = i(v, 0)).length) (C = new h()).readPKCS5PrvKeyHex(v); else if (6 === p.length) (C = new o()).readPKCS5PrvKeyHex(v); else {
if (!(p.length > 2 && "04" === v.substr(p[1], 2))) throw new Error("unsupported PKCS#1/5 hexadecimal key");
(C = new a()).readPKCS5PrvKeyHex(v);
}
return C;
}
if ("pkcs8prv" === r) {
return C = l.getKeyFromPlainPrivatePKCS8Hex(t);
}
if ("pkcs8pub" === r) return l._getKeyFromPublicPKCS8Hex(t);
if ("x509pub" === r) return Zt.getPublicKeyFromCertHex(t);
if (-1 != t.indexOf("-END CERTIFICATE-", 0) || -1 != t.indexOf("-END X509 CERTIFICATE-", 0) || -1 != t.indexOf("-END TRUSTED CERTIFICATE-", 0)) return Zt.getPublicKeyFromCertPEM(t);
if (-1 != t.indexOf("-END PUBLIC KEY-")) {
var m = St(t, "PUBLIC KEY");
return l._getKeyFromPublicPKCS8Hex(m);
}
if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
var x = u(t, "RSA PRIVATE KEY");
return l.getKey(x, null, "pkcs5prv");
}
if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
var S = n(R = u(t, "DSA PRIVATE KEY"), 0, [ 1 ], "02"), E = n(R, 0, [ 2 ], "02"), w = n(R, 0, [ 3 ], "02"), b = n(R, 0, [ 4 ], "02"), F = n(R, 0, [ 5 ], "02");
return (C = new o()).setPrivate(new c(S, 16), new c(E, 16), new c(w, 16), new c(b, 16), new c(F, 16)), 
C;
}
if (-1 != t.indexOf("-END EC PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
x = u(t, "EC PRIVATE KEY");
return l.getKey(x, null, "pkcs5prv");
}
if (-1 != t.indexOf("-END PRIVATE KEY-")) return l.getKeyFromPlainPrivatePKCS8PEM(t);
if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
var A = l.getDecryptedKeyHex(t, e), I = new J();
return I.readPKCS5PrvKeyHex(A), I;
}
if (-1 != t.indexOf("-END EC PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
var D, C = n(R = l.getDecryptedKeyHex(t, e), 0, [ 1 ], "04"), P = n(R, 0, [ 2, 0 ], "06"), T = n(R, 0, [ 3, 0 ], "03").substr(2);
if (void 0 === Z.crypto.OID.oidhex2name[P]) throw new Error("undefined OID(hex) in KJUR.crypto.OID: " + P);
return (D = new a({
curve: Z.crypto.OID.oidhex2name[P]
})).setPublicKeyHex(T), D.setPrivateKeyHex(C), D.isPublic = !1, D;
}
if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
var R;
S = n(R = l.getDecryptedKeyHex(t, e), 0, [ 1 ], "02"), E = n(R, 0, [ 2 ], "02"), 
w = n(R, 0, [ 3 ], "02"), b = n(R, 0, [ 4 ], "02"), F = n(R, 0, [ 5 ], "02");
return (C = new o()).setPrivate(new c(S, 16), new c(E, 16), new c(w, 16), new c(b, 16), new c(F, 16)), 
C;
}
if (-1 != t.indexOf("-END ENCRYPTED PRIVATE KEY-")) return l.getKeyFromEncryptedPKCS8PEM(t, e);
throw new Error("not supported argument");
}, Wt.generateKeypair = function(t, e) {
if ("RSA" == t) {
var r = e;
(a = new J()).generate(r, "10001"), a.isPrivate = !0, a.isPublic = !0;
var i = new J(), n = a.n.toString(16), s = a.e.toString(16);
i.setPublic(n, s), i.isPrivate = !1, i.isPublic = !0;
return (o = {}).prvKeyObj = a, o.pubKeyObj = i, o;
}
if ("EC" == t) {
var a, o, h = e, u = new Z.crypto.ECDSA({
curve: h
}).generateKeyPairHex();
(a = new Z.crypto.ECDSA({
curve: h
})).setPublicKeyHex(u.ecpubhex), a.setPrivateKeyHex(u.ecprvhex), a.isPrivate = !0, 
a.isPublic = !1;
(i = new Z.crypto.ECDSA({
curve: h
})).setPublicKeyHex(u.ecpubhex), i.isPrivate = !1, i.isPublic = !0;
return (o = {}).prvKeyObj = a, o.pubKeyObj = i, o;
}
throw new Error("unknown algorithm: " + t);
}, Wt.getPEM = function(t, e, r, i, n, s) {
var a = Z, o = a.asn1, h = o.DERObjectIdentifier, u = o.DERInteger, c = o.ASN1Util.newObject, l = o.x509.SubjectPublicKeyInfo, f = a.crypto, d = f.DSA, g = f.ECDSA, p = J;
function v(t) {
return c({
seq: [ {
int: 0
}, {
int: {
bigint: t.n
}
}, {
int: t.e
}, {
int: {
bigint: t.d
}
}, {
int: {
bigint: t.p
}
}, {
int: {
bigint: t.q
}
}, {
int: {
bigint: t.dmp1
}
}, {
int: {
bigint: t.dmq1
}
}, {
int: {
bigint: t.coeff
}
} ]
});
}
function y(t) {
return c({
seq: [ {
int: 1
}, {
octstr: {
hex: t.prvKeyHex
}
}, {
tag: [ "a0", !0, {
oid: {
name: t.curveName
}
} ]
}, {
tag: [ "a1", !0, {
bitstr: {
hex: "00" + t.pubKeyHex
}
} ]
} ]
});
}
function m(t) {
return c({
seq: [ {
int: 0
}, {
int: {
bigint: t.p
}
}, {
int: {
bigint: t.q
}
}, {
int: {
bigint: t.g
}
}, {
int: {
bigint: t.y
}
}, {
int: {
bigint: t.x
}
} ]
});
}
if ((void 0 !== p && t instanceof p || void 0 !== d && t instanceof d || void 0 !== g && t instanceof g) && 1 == t.isPublic && (void 0 === e || "PKCS8PUB" == e)) {
return xt(w = new l(t).tohex(), "PUBLIC KEY");
}
if ("PKCS1PRV" == e && void 0 !== p && t instanceof p && (void 0 === r || null == r) && 1 == t.isPrivate) {
return xt(w = v(t).tohex(), "RSA PRIVATE KEY");
}
if ("PKCS1PRV" == e && void 0 !== g && t instanceof g && (void 0 === r || null == r) && 1 == t.isPrivate) {
var x = new h({
name: t.curveName
}).tohex(), S = y(t).tohex(), E = "";
return E += xt(x, "EC PARAMETERS"), E += xt(S, "EC PRIVATE KEY");
}
if ("PKCS1PRV" == e && void 0 !== d && t instanceof d && (void 0 === r || null == r) && 1 == t.isPrivate) {
return xt(w = m(t).tohex(), "DSA PRIVATE KEY");
}
if ("PKCS5PRV" == e && void 0 !== p && t instanceof p && void 0 !== r && null != r && 1 == t.isPrivate) {
var w = v(t).tohex();
return void 0 === i && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", w, r, i, s);
}
if ("PKCS5PRV" == e && void 0 !== g && t instanceof g && void 0 !== r && null != r && 1 == t.isPrivate) {
w = y(t).tohex();
return void 0 === i && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", w, r, i, s);
}
if ("PKCS5PRV" == e && void 0 !== d && t instanceof d && void 0 !== r && null != r && 1 == t.isPrivate) {
w = m(t).tohex();
return void 0 === i && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", w, r, i, s);
}
var b = function(t, e) {
if ("string" == typeof e) return Wt.getEncryptedPKCS8PEM(t, e);
if ("object" == typeof e && void 0 != zt(e, "passcode")) {
var r = JSON.parse(JSON.stringify(e)), i = r.passcode;
return delete r.passcode, Wt.getEncryptedPKCS8PEM(t, i, r);
}
};
if ("PKCS8PRV" == e && void 0 != p && t instanceof p && 1 == t.isPrivate) {
var F = v(t).tohex();
w = c({
seq: [ {
int: 0
}, {
seq: [ {
oid: {
name: "rsaEncryption"
}
}, {
null: !0
} ]
}, {
octstr: {
hex: F
}
} ]
}).tohex();
return void 0 === r || null == r ? xt(w, "PRIVATE KEY") : b(w, r);
}
if ("PKCS8PRV" == e && void 0 !== g && t instanceof g && 1 == t.isPrivate) {
var A = {
seq: [ {
int: 1
}, {
octstr: {
hex: t.prvKeyHex
}
} ]
};
"string" == typeof t.pubKeyHex && A.seq.push({
tag: [ "a1", !0, {
bitstr: {
hex: "00" + t.pubKeyHex
}
} ]
});
F = new c(A).tohex(), w = c({
seq: [ {
int: 0
}, {
seq: [ {
oid: {
name: "ecPublicKey"
}
}, {
oid: {
name: t.curveName
}
} ]
}, {
octstr: {
hex: F
}
} ]
}).tohex();
return void 0 === r || null == r ? xt(w, "PRIVATE KEY") : b(w, r);
}
if ("PKCS8PRV" == e && void 0 !== d && t instanceof d && 1 == t.isPrivate) {
F = new u({
bigint: t.x
}).tohex(), w = c({
seq: [ {
int: 0
}, {
seq: [ {
oid: {
name: "dsa"
}
}, {
seq: [ {
int: {
bigint: t.p
}
}, {
int: {
bigint: t.q
}
}, {
int: {
bigint: t.g
}
} ]
} ]
}, {
octstr: {
hex: F
}
} ]
}).tohex();
return void 0 === r || null == r ? xt(w, "PRIVATE KEY") : b(w, r);
}
throw new Error("unsupported object nor format");
}, Wt.getKeyFromCSRPEM = function(t) {
var e = St(t, "CERTIFICATE REQUEST");
return Wt.getKeyFromCSRHex(e);
}, Wt.getKeyFromCSRHex = function(t) {
var e = Wt.parseCSRHex(t);
return Wt.getKey(e.p8pubkeyhex, null, "pkcs8pub");
}, Wt.parseCSRHex = function(t) {
var e = et, r = e.getChildIdx, i = e.getTLV, n = {}, s = t;
if ("30" != s.substr(0, 2)) throw new Error("malformed CSR(code:001)");
var a = r(s, 0);
if (a.length < 1) throw new Error("malformed CSR(code:002)");
if ("30" != s.substr(a[0], 2)) throw new Error("malformed CSR(code:003)");
var o = r(s, a[0]);
if (o.length < 3) throw new Error("malformed CSR(code:004)");
return n.p8pubkeyhex = i(s, o[2]), n;
}, Wt.getKeyID = function(t) {
var e = Wt, r = et;
"string" == typeof t && -1 != t.indexOf("BEGIN ") && (t = e.getKey(t));
var i = St(e.getPEM(t)), n = r.getIdxbyList(i, 0, [ 1 ]), s = r.getV(i, n).substring(2);
return Z.crypto.Util.hashHex(s, "sha1");
}, Wt.getJWK = function(t, e, r, i, n) {
var s, o, h = {}, u = Z.crypto.Util.hashHex;
if ("string" == typeof t) s = Wt.getKey(t), -1 != t.indexOf("CERTIFICATE") && (o = St(t)); else {
if ("object" != typeof t) throw new Error("unsupported keyinfo type");
t instanceof Zt ? (s = t.getPublicKey(), o = t.hex) : s = t;
}
if (s instanceof J && s.isPrivate) h.kty = "RSA", h.n = ht(s.n.toString(16)), h.e = ht(s.e.toString(16)), 
h.d = ht(s.d.toString(16)), h.p = ht(s.p.toString(16)), h.q = ht(s.q.toString(16)), 
h.dp = ht(s.dmp1.toString(16)), h.dq = ht(s.dmq1.toString(16)), h.qi = ht(s.coeff.toString(16)); else if (s instanceof J && s.isPublic) h.kty = "RSA", 
h.n = ht(s.n.toString(16)), h.e = ht(s.e.toString(16)); else if (s instanceof Z.crypto.ECDSA && s.isPrivate) {
if ("P-256" !== (l = s.getShortNISTPCurveName()) && "P-384" !== l && "P-521" !== l) throw new Error("unsupported curve name for JWT: " + l);
var c = s.getPublicKeyXYHex();
h.kty = "EC", h.crv = l, h.x = ht(c.x), h.y = ht(c.y), h.d = ht(s.prvKeyHex);
} else if (s instanceof Z.crypto.ECDSA && s.isPublic) {
var l;
if ("P-256" !== (l = s.getShortNISTPCurveName()) && "P-384" !== l && "P-521" !== l) throw new Error("unsupported curve name for JWT: " + l);
c = s.getPublicKeyXYHex();
h.kty = "EC", h.crv = l, h.x = ht(c.x), h.y = ht(c.y);
}
if (void 0 == h.kty) throw new Error("unsupported keyinfo");
return !s.isPrivate && 1 != e && (h.kid = Z.jws.JWS.getJWKthumbprint(h)), void 0 != o && 1 != r && (h.x5c = [ a(o) ]), 
void 0 != o && 1 != i && (h.x5t = at(a(u(o, "sha1")))), void 0 != o && 1 != n && (h["x5t#S256"] = at(a(u(o, "sha256")))), 
h;
}, Wt.getJWKFromKey = function(t) {
return Wt.getJWK(t, !0, !0, !0, !0);
}, J.getPosArrayOfChildrenFromHex = function(t) {
return et.getChildIdx(t, 0);
}, J.getHexValueArrayOfChildrenFromHex = function(t) {
var e, r = et.getV, i = r(t, (e = J.getPosArrayOfChildrenFromHex(t))[0]), n = r(t, e[1]), s = r(t, e[2]), a = r(t, e[3]), o = r(t, e[4]), h = r(t, e[5]), u = r(t, e[6]), c = r(t, e[7]), l = r(t, e[8]);
return (e = new Array()).push(i, n, s, a, o, h, u, c, l), e;
}, J.prototype.readPrivateKeyFromPEMString = function(t) {
var e = St(t), r = J.getHexValueArrayOfChildrenFromHex(e);
this.setPrivateEx(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]);
}, J.prototype.readPKCS5PrvKeyHex = function(t) {
var e = J.getHexValueArrayOfChildrenFromHex(t);
this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
}, J.prototype.readPKCS8PrvKeyHex = function(t) {
var e, r, i, n, s, a, o, h, u = et, c = u.getVbyListEx;
if (!1 === u.isASN1HEX(t)) throw new Error("not ASN.1 hex string");
try {
e = c(t, 0, [ 2, 0, 1 ], "02"), r = c(t, 0, [ 2, 0, 2 ], "02"), i = c(t, 0, [ 2, 0, 3 ], "02"), 
n = c(t, 0, [ 2, 0, 4 ], "02"), s = c(t, 0, [ 2, 0, 5 ], "02"), a = c(t, 0, [ 2, 0, 6 ], "02"), 
o = c(t, 0, [ 2, 0, 7 ], "02"), h = c(t, 0, [ 2, 0, 8 ], "02");
} catch (t) {
throw new Error("malformed PKCS#8 plain RSA private key");
}
this.setPrivateEx(e, r, i, n, s, a, o, h);
}, J.prototype.readPKCS5PubKeyHex = function(t) {
var e = et, r = e.getV;
if (!1 === e.isASN1HEX(t)) throw new Error("keyHex is not ASN.1 hex string");
var i = e.getChildIdx(t, 0);
if (2 !== i.length || "02" !== t.substr(i[0], 2) || "02" !== t.substr(i[1], 2)) throw new Error("wrong hex for PKCS#5 public key");
var n = r(t, i[0]), s = r(t, i[1]);
this.setPublic(n, s);
}, J.prototype.readPKCS8PubKeyHex = function(t) {
var e = et;
if (!1 === e.isASN1HEX(t)) throw new Error("not ASN.1 hex string");
if ("06092a864886f70d010101" !== e.getTLVbyListEx(t, 0, [ 0, 0 ])) throw new Error("not PKCS8 RSA public key");
var r = e.getTLVbyListEx(t, 0, [ 1, 0 ]);
this.readPKCS5PubKeyHex(r);
}, J.prototype.readCertPubKeyHex = function(t, e) {
var r, i;
(r = new Zt()).readCertHex(t), i = r.getPublicKeyHex(), this.readPKCS8PubKeyHex(i);
};
new RegExp("[^0-9a-f]", "gi");
function Xt(t, e) {
for (var r = "", i = e / 4 - t.length, n = 0; n < i; n++) r += "0";
return r + t;
}
J.prototype.sign = function(t, e) {
var r = function(t) {
return Z.crypto.Util.hashString(t, e);
}(t);
return this.signWithMessageHash(r, e);
}, J.prototype.signWithMessageHash = function(t, e) {
var r = z(Z.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()), 16);
return Xt(this.doPrivate(r).toString(16), this.n.bitLength());
};
function $t(t, e, r) {
for (var i = "", n = 0; i.length < e; ) i += gt(r(pt(t + String.fromCharCode.apply(String, [ (4278190080 & n) >> 24, (16711680 & n) >> 16, (65280 & n) >> 8, 255 & n ])))), 
n += 1;
return i;
}
J.prototype.signPSS = function(t, e, r) {
var i = function(t) {
return Z.crypto.Util.hashHex(t, e);
}(pt(t));
return void 0 === r && (r = -1), this.signWithMessageHashPSS(i, e, r);
}, J.prototype.signWithMessageHashPSS = function(t, e, r) {
var i, n = gt(t), s = n.length, a = this.n.bitLength() - 1, o = Math.ceil(a / 8), h = function(t) {
return Z.crypto.Util.hashHex(t, e);
};
if (-1 === r || void 0 === r) r = s; else if (-2 === r) r = o - s - 2; else if (r < -2) throw new Error("invalid salt length");
if (o < s + r + 2) throw new Error("data too long");
var u = "";
r > 0 && (u = new Array(r), new G().nextBytes(u), u = String.fromCharCode.apply(String, u));
var l = gt(h(pt("\0\0\0\0\0\0\0\0" + n + u))), f = [];
for (i = 0; i < o - r - s - 2; i += 1) f[i] = 0;
var d = String.fromCharCode.apply(String, f) + "" + u, g = $t(l, d.length, h), p = [];
for (i = 0; i < d.length; i += 1) p[i] = d.charCodeAt(i) ^ g.charCodeAt(i);
var v = 65280 >> 8 * o - a & 255;
p[0] &= ~v;
for (i = 0; i < s; i++) p.push(l.charCodeAt(i));
return p.push(188), Xt(this.doPrivate(new c(p)).toString(16), this.n.bitLength());
};
function Yt(t) {
for (var e in Z.crypto.Util.DIGESTINFOHEAD) {
var r = Z.crypto.Util.DIGESTINFOHEAD[e], i = r.length;
if (t.substring(0, i) == r) {
return [ e, t.substring(i) ];
}
}
return [];
}
J.prototype.verify = function(t, e) {
if (null == (e = e.toLowerCase()).match(/^[0-9a-f]+$/)) return !1;
var r = z(e, 16), i = this.n.bitLength();
if (r.bitLength() > i) return !1;
var n = this.doPublic(r).toString(16);
if (n.length + 3 != i / 4) return !1;
var s = Yt(n.replace(/^1f+00/, ""));
if (0 == s.length) return !1;
var a = s[0];
return s[1] == function(t) {
return Z.crypto.Util.hashString(t, a);
}(t);
}, J.prototype.verifyWithMessageHash = function(t, e) {
if (e.length != Math.ceil(this.n.bitLength() / 4)) return !1;
var r = z(e, 16);
if (r.bitLength() > this.n.bitLength()) return 0;
var i = Yt(this.doPublic(r).toString(16).replace(/^1f+00/, ""));
if (0 == i.length) return !1;
i[0];
return i[1] == t;
}, J.prototype.verifyPSS = function(t, e, r, i) {
var n = function(t) {
return Z.crypto.Util.hashHex(t, r);
}(pt(t));
return void 0 === i && (i = -1), this.verifyWithMessageHashPSS(n, e, r, i);
}, J.prototype.verifyWithMessageHashPSS = function(t, e, r, i) {
if (e.length != Math.ceil(this.n.bitLength() / 4)) return !1;
var n, s = new c(e, 16), a = function(t) {
return Z.crypto.Util.hashHex(t, r);
}, o = gt(t), h = o.length, u = this.n.bitLength() - 1, l = Math.ceil(u / 8);
if (-1 === i || void 0 === i) i = h; else if (-2 === i) i = l - h - 2; else if (i < -2) throw new Error("invalid salt length");
if (l < h + i + 2) throw new Error("data too long");
var f = this.doPublic(s).toByteArray();
for (n = 0; n < f.length; n += 1) f[n] &= 255;
for (;f.length < l; ) f.unshift(0);
if (188 !== f[l - 1]) throw new Error("encoded message does not end in 0xbc");
var d = (f = String.fromCharCode.apply(String, f)).substr(0, l - h - 1), g = f.substr(d.length, h), p = 65280 >> 8 * l - u & 255;
if (0 != (d.charCodeAt(0) & p)) throw new Error("bits beyond keysize not zero");
var v = $t(g, d.length, a), y = [];
for (n = 0; n < d.length; n += 1) y[n] = d.charCodeAt(n) ^ v.charCodeAt(n);
y[0] &= ~p;
var m = l - h - i - 2;
for (n = 0; n < m; n += 1) if (0 !== y[n]) throw new Error("leftmost octets not zero");
if (1 !== y[m]) throw new Error("0x01 marker not found");
return g === gt(a(pt("\0\0\0\0\0\0\0\0" + o + String.fromCharCode.apply(String, y.slice(-i)))));
}, J.SALT_LEN_HLEN = -1, J.SALT_LEN_MAX = -2, J.SALT_LEN_RECOVER = -2;
function Zt(t) {
var e, r = et, i = r.getChildIdx, n = r.getV, s = (r.dump, r.parse), a = r.getTLV, o = r.getVbyList, h = r.getVbyListEx, u = r.getTLVbyList, c = r.getTLVbyListEx, l = r.getIdxbyList, f = r.getIdxbyListEx, d = r.getVidx, g = r.getInt, p = r.oidname, v = r.hextooidstr, y = St, m = Error;
try {
e = Z.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
} catch (t) {}
this.HEX2STAG = {
"0c": "utf8",
13: "prn",
16: "ia5",
"1a": "vis",
"1e": "bmp"
}, this.hex = null, this.version = 0, this.foffset = 0, this.aExtInfo = null, this.getVersion = function() {
if (null === this.hex || 0 !== this.version) return this.version;
var t = u(this.hex, 0, [ 0, 0 ]);
if ("a0" == t.substr(0, 2)) {
var e = u(t, 0, [ 0 ]), r = g(e, 0);
if (r < 0 || 2 < r) throw new Error("malformed version field");
return this.version = r + 1, this.version;
}
return this.version = 1, this.foffset = -1, 1;
}, this.getSerialNumberHex = function() {
return h(this.hex, 0, [ 0, 0 ], "02");
}, this.getSignatureAlgorithmField = function() {
var t = c(this.hex, 0, [ 0, 1 ]);
return this.getAlgorithmIdentifierName(t);
}, this.getAlgorithmIdentifierName = function(t) {
for (var r in e) if (t === e[r]) return r;
return p(h(t, 0, [ 0 ], "06"));
}, this.getIssuer = function(t, e) {
return this.getX500Name(this.getIssuerHex(), t, e);
}, this.getIssuerHex = function() {
return u(this.hex, 0, [ 0, 3 + this.foffset ], "30");
}, this.getIssuerString = function() {
return this.getIssuer().str;
}, this.getSubject = function(t, e) {
return this.getX500Name(this.getSubjectHex(), t, e);
}, this.getSubjectHex = function() {
return u(this.hex, 0, [ 0, 5 + this.foffset ], "30");
}, this.getSubjectString = function() {
return this.getSubject().str;
}, this.getNotBefore = function() {
var t = o(this.hex, 0, [ 0, 4 + this.foffset, 0 ]);
return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t);
}, this.getNotAfter = function() {
var t = o(this.hex, 0, [ 0, 4 + this.foffset, 1 ]);
return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t);
}, this.getPublicKeyHex = function() {
return this.getSPKI();
}, this.getSPKI = function() {
return u(this.hex, 0, [ 0, 6 + this.foffset ], "30");
}, this.getSPKIValue = function() {
var t = this.getSPKI();
return null == t ? null : o(t, 0, [ 1 ], "03", !0);
}, this.getPublicKeyIdx = function() {
return l(this.hex, 0, [ 0, 6 + this.foffset ], "30");
}, this.getPublicKeyContentIdx = function() {
var t = this.getPublicKeyIdx();
return l(this.hex, t, [ 1, 0 ], "30");
}, this.getPublicKey = function() {
return Wt.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
}, this.getSignatureAlgorithmName = function() {
var t = u(this.hex, 0, [ 1 ], "30");
return this.getAlgorithmIdentifierName(t);
}, this.getSignatureValueHex = function() {
return o(this.hex, 0, [ 2 ], "03", !0);
}, this.verifySignature = function(t) {
var e = this.getSignatureAlgorithmField(), r = this.getSignatureValueHex(), i = u(this.hex, 0, [ 0 ], "30"), n = new Z.crypto.Signature({
alg: e
});
return n.init(t), n.updateHex(i), n.verify(r);
}, this.parseExt = function(t) {
var e, s, a;
if (void 0 === t) {
a = this.hex;
if (3 !== this.version) return -1;
e = l(a, 0, [ 0, 7, 0 ], "30"), s = i(a, e);
} else {
a = St(t);
var h = l(a, 0, [ 0, 3, 0, 0 ], "06");
if ("2a864886f70d01090e" != n(a, h)) {
this.aExtInfo = new Array();
return;
}
e = l(a, 0, [ 0, 3, 0, 1, 0 ], "30"), s = i(a, e), this.hex = a;
}
this.aExtInfo = new Array();
for (var u = 0; u < s.length; u++) {
var c = {
critical: !1
}, f = 0;
3 === i(a, s[u]).length && (c.critical = !0, f = 1);
c.oid = r.hextooidstr(o(a, s[u], [ 0 ], "06"));
var g = l(a, s[u], [ 1 + f ]);
c.vidx = d(a, g), this.aExtInfo.push(c);
}
}, this.getExtInfo = function(t) {
var e = this.aExtInfo, r = t;
!t.match(/^[0-9.]+$/) && (r = Z.asn1.x509.OID.name2oid(t));
if ("" !== r) for (var i = 0; i < e.length; i++) if (e[i].oid === r) return e[i];
}, this.getCriticalExtV = function(t, e, r) {
if (void 0 != e) return [ e, r ];
var i = this.getExtInfo(t);
return void 0 == i ? [ null, null ] : [ a(this.hex, i.vidx), i.critical ];
}, this.getExtBasicConstraints = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("basicConstraints");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var i = {
extname: "basicConstraints"
};
e && (i.critical = !0);
if ("3000" === t) return i;
if ("30030101ff" === t) return i.cA = !0, i;
if ("30060101ff02" === t.substr(0, 12)) {
var s = n(t, 10), o = parseInt(s, 16);
return i.cA = !0, i.pathLen = o, i;
}
throw new Error("hExtV parse error: " + t);
}, this.getExtNameConstraints = function(t, e) {
var r = this.getCriticalExtV("nameConstraints", t, e);
t = r[0], e = r[1];
if (null != t) {
var n = {
extname: "nameConstraints"
};
e && (n.critical = !0);
for (var s = i(t, 0), o = 0; o < s.length; o++) {
for (var h = [], u = i(t, s[o]), c = 0; c < u.length; c++) {
var l = a(t, u[c]), f = this.getGeneralSubtree(l);
h.push(f);
}
var d = t.substr(s[o], 2);
"a0" == d ? n.permit = h : "a1" == d && (n.exclude = h);
}
return n;
}
}, this.getGeneralSubtree = function(t) {
var e = i(t, 0), r = e.length;
if (r < 1 || 2 < r) throw new Error("wrong num elements");
for (var s = this.getGeneralName(a(t, e[0])), o = 1; o < r; o++) {
var h = t.substr(e[o], 2), u = n(t, e[o]), c = parseInt(u, 16);
"80" == h && (s.min = c), "81" == h && (s.max = c);
}
return s;
}, this.getExtKeyUsage = function(t, e) {
var r = this.getCriticalExtV("keyUsage", t, e);
t = r[0], e = r[1];
if (null != t) {
var i = {
extname: "keyUsage"
};
return e && (i.critical = !0), i.names = this.getExtKeyUsageString(t).split(","), 
i;
}
}, this.getExtKeyUsageBin = function(t) {
if (void 0 === t) {
var e = this.getExtInfo("keyUsage");
if (void 0 === e) return "";
t = a(this.hex, e.vidx);
}
if (8 != t.length && 10 != t.length) throw new Error("malformed key usage value: " + t);
var r = "000000000000000" + parseInt(t.substr(6), 16).toString(2);
return 8 == t.length && (r = r.slice(-8)), 10 == t.length && (r = r.slice(-16)), 
"" == (r = r.replace(/0+$/, "")) && (r = "0"), r;
}, this.getExtKeyUsageString = function(t) {
for (var e = this.getExtKeyUsageBin(t), r = new Array(), i = 0; i < e.length; i++) "1" == e.substr(i, 1) && r.push(Zt.KEYUSAGE_NAME[i]);
return r.join(",");
}, this.getExtSubjectKeyIdentifier = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("subjectKeyIdentifier");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var i = {
extname: "subjectKeyIdentifier"
};
e && (i.critical = !0);
var s = n(t, 0);
return i.kid = {
hex: s
}, i;
}, this.getExtAuthorityKeyIdentifier = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("authorityKeyIdentifier");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var s = {
extname: "authorityKeyIdentifier"
};
e && (s.critical = !0);
for (var o = i(t, 0), h = 0; h < o.length; h++) {
var u = t.substr(o[h], 2);
"80" === u && (s.kid = {
hex: n(t, o[h])
});
if ("a1" === u) {
var c = a(t, o[h]), l = this.getGeneralNames(c);
s.issuer = l[0].dn;
}
"82" === u && (s.sn = {
hex: n(t, o[h])
});
}
return s;
}, this.getExtExtKeyUsage = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("extKeyUsage");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var s = {
extname: "extKeyUsage",
array: []
};
e && (s.critical = !0);
for (var o = i(t, 0), h = 0; h < o.length; h++) s.array.push(p(n(t, o[h])));
return s;
}, this.getExtExtKeyUsageName = function() {
var t = this.getExtInfo("extKeyUsage");
if (void 0 === t) return t;
var e = new Array(), r = a(this.hex, t.vidx);
if ("" === r) return e;
for (var s = i(r, 0), o = 0; o < s.length; o++) e.push(p(n(r, s[o])));
return e;
}, this.getExtSubjectAltName = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("subjectAltName");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var i = {
extname: "subjectAltName",
array: []
};
return e && (i.critical = !0), i.array = this.getGeneralNames(t), i;
}, this.getExtIssuerAltName = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("issuerAltName");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var i = {
extname: "issuerAltName",
array: []
};
return e && (i.critical = !0), i.array = this.getGeneralNames(t), i;
}, this.getGeneralNames = function(t) {
for (var e = i(t, 0), r = [], n = 0; n < e.length; n++) {
var s = this.getGeneralName(a(t, e[n]));
void 0 !== s && r.push(s);
}
return r;
}, this.getGeneralName = function(t) {
var e = t.substr(0, 2), r = n(t, 0), i = gt(r);
return "81" == e ? {
rfc822: i
} : "82" == e ? {
dns: i
} : "86" == e ? {
uri: i
} : "87" == e ? {
ip: Ct(r)
} : "a4" == e ? {
dn: this.getX500Name(r)
} : "a0" == e ? {
other: this.getOtherName(t)
} : void 0;
}, this.getExtSubjectAltName2 = function() {
var t, e, r, s = this.getExtInfo("subjectAltName");
if (void 0 === s) return s;
for (var o = new Array(), h = a(this.hex, s.vidx), u = i(h, 0), c = 0; c < u.length; c++) r = h.substr(u[c], 2), 
t = n(h, u[c]), "81" === r && (e = lt(t), o.push([ "MAIL", e ])), "82" === r && (e = lt(t), 
o.push([ "DNS", e ])), "84" === r && (e = Zt.hex2dn(t, 0), o.push([ "DN", e ])), 
"86" === r && (e = lt(t), o.push([ "URI", e ])), "87" === r && (e = Ct(t), o.push([ "IP", e ]));
return o;
}, this.getExtCRLDistributionPoints = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("cRLDistributionPoints");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var n = {
extname: "cRLDistributionPoints",
array: []
};
e && (n.critical = !0);
for (var s = i(t, 0), o = 0; o < s.length; o++) {
var h = a(t, s[o]);
n.array.push(this.getDistributionPoint(h));
}
return n;
}, this.getDistributionPoint = function(t) {
for (var e = {}, r = i(t, 0), n = 0; n < r.length; n++) {
var s = t.substr(r[n], 2), o = a(t, r[n]);
"a0" == s && (e.dpname = this.getDistributionPointName(o));
}
return e;
}, this.getDistributionPointName = function(t) {
for (var e = {}, r = i(t, 0), n = 0; n < r.length; n++) {
var s = t.substr(r[n], 2), o = a(t, r[n]);
"a0" == s && (e.full = this.getGeneralNames(o));
}
return e;
}, this.getExtCRLDistributionPointsURI = function() {
var t = this.getExtCRLDistributionPoints();
if (void 0 == t) return t;
for (var e = t.array, r = [], i = 0; i < e.length; i++) try {
void 0 != e[i].dpname.full[0].uri && r.push(e[i].dpname.full[0].uri);
} catch (t) {}
return r;
}, this.getExtAIAInfo = function() {
var t = this.getExtInfo("authorityInfoAccess");
if (void 0 === t) return t;
for (var e = {
ocsp: [],
caissuer: []
}, r = i(this.hex, t.vidx), n = 0; n < r.length; n++) {
var s = o(this.hex, r[n], [ 0 ], "06"), a = o(this.hex, r[n], [ 1 ], "86");
"2b06010505073001" === s && e.ocsp.push(lt(a)), "2b06010505073002" === s && e.caissuer.push(lt(a));
}
return e;
}, this.getExtAuthorityInfoAccess = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("authorityInfoAccess");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var n = {
extname: "authorityInfoAccess",
array: []
};
e && (n.critical = !0);
for (var s = i(t, 0), u = 0; u < s.length; u++) {
var c = h(t, s[u], [ 0 ], "06"), l = lt(o(t, s[u], [ 1 ], "86"));
if ("2b06010505073001" == c) n.array.push({
ocsp: l
}); else {
if ("2b06010505073002" != c) throw new Error("unknown method: " + c);
n.array.push({
caissuer: l
});
}
}
return n;
}, this.getExtCertificatePolicies = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("certificatePolicies");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var n = {
extname: "certificatePolicies",
array: []
};
e && (n.critical = !0);
for (var s = i(t, 0), o = 0; o < s.length; o++) {
var h = a(t, s[o]), u = this.getPolicyInformation(h);
n.array.push(u);
}
return n;
}, this.getPolicyInformation = function(t) {
var e = {}, r = o(t, 0, [ 0 ], "06");
e.policyoid = p(r);
var n = f(t, 0, [ 1 ], "30");
if (-1 != n) {
e.array = [];
for (var s = i(t, n), h = 0; h < s.length; h++) {
var u = a(t, s[h]), c = this.getPolicyQualifierInfo(u);
e.array.push(c);
}
}
return e;
}, this.getOtherName = function(t) {
var e = {}, r = i(t, 0), n = o(t, r[0], [], "06"), a = o(t, r[1], []);
return e.oid = p(n), e.value = s(a), e;
}, this.getPolicyQualifierInfo = function(t) {
var e = {}, r = o(t, 0, [ 0 ], "06");
if ("2b06010505070201" === r) {
var i = h(t, 0, [ 1 ], "16");
e.cps = gt(i);
} else if ("2b06010505070202" === r) {
var n = u(t, 0, [ 1 ], "30");
e.unotice = this.getUserNotice(n);
}
return e;
}, this.getUserNotice = function(t) {
var e = null;
try {
e = r.parse(t);
return this._asn1ToUnotice(e);
} catch (t) {
return;
}
}, this._asn1ToUnotice = function(t) {
try {
for (var e = {}, r = zt(t, "seq"), i = 0; i < r.length; i++) {
var n = this._asn1ToNoticeRef(r[i]);
void 0 != n && (e.noticeref = n);
var s = this.asn1ToDisplayText(r[i]);
void 0 != s && (e.exptext = s);
}
return Object.keys(e).length > 0 ? e : void 0;
} catch (t) {
return;
}
}, this._asn1ToNoticeRef = function(t) {
try {
for (var e = {}, r = zt(t, "seq"), i = 0; i < r.length; i++) {
var n = this._asn1ToNoticeNum(r[i]);
void 0 != n && (e.noticenum = n);
var s = this.asn1ToDisplayText(r[i]);
void 0 != s && (e.org = s);
}
return Object.keys(e).length > 0 ? e : void 0;
} catch (t) {
return;
}
}, this._asn1ToNoticeNum = function(t) {
try {
for (var e = zt(t, "seq"), r = [], i = 0; i < e.length; i++) {
var n = e[i];
r.push(parseInt(zt(n, "int.hex"), 16));
}
return r;
} catch (t) {
return;
}
}, this.getDisplayText = function(t) {
var e = {};
return e.type = {
"0c": "utf8",
16: "ia5",
"1a": "vis",
"1e": "bmp"
}[t.substr(0, 2)], e.str = gt(n(t, 0)), e;
}, this.asn1ToDisplayText = function(t) {
return void 0 != t.utf8str ? {
type: "utf8",
str: t.utf8str.str
} : void 0 != t.ia5str ? {
type: "ia5",
str: t.ia5str.str
} : void 0 != t.visstr ? {
type: "vis",
str: t.visstr.str
} : void 0 != t.bmpstr ? {
type: "bmp",
str: t.bmpstr.str
} : void 0 != t.prnstr ? {
type: "prn",
str: t.prnstr.str
} : void 0;
}, this.getExtPolicyMappings = function(t, e) {
var r = this.getCriticalExtV("policyMappings", t, e);
t = r[0], e = r[1];
if (null != t) {
var i = {
extname: "policyMappings"
};
e && (i.critical = !0);
try {
for (var n = s(t).seq, a = [], o = 0; o < n.length; o++) {
var h = n[o].seq;
a.push([ h[0].oid, h[1].oid ]);
}
i.array = a;
} catch (t) {
throw new m("malformed policyMappings");
}
return i;
}
}, this.getExtPolicyConstraints = function(t, e) {
var r = this.getCriticalExtV("policyConstraints", t, e);
t = r[0], e = r[1];
if (null != t) {
var i = {
extname: "policyConstraints"
};
e && (i.critical = !0);
var n = s(t);
try {
for (var a = n.seq, o = 0; o < a.length; o++) {
var h = a[o].tag;
0 == h.explicit && ("80" == h.tag && (i.reqexp = parseInt(h.hex, 16)), "81" == h.tag && (i.inhibit = parseInt(h.hex, 16)));
}
} catch (t) {
return new m("malformed policyConstraints value");
}
return i;
}
}, this.getExtInhibitAnyPolicy = function(t, e) {
var r = this.getCriticalExtV("inhibitAnyPolicy", t, e);
t = r[0], e = r[1];
if (null != t) {
var i = {
extname: "inhibitAnyPolicy"
};
e && (i.critical = !0);
var n = g(t, 0);
return -1 == n ? new m("wrong value") : (i.skip = n, i);
}
}, this.getExtCRLNumber = function(t, e) {
var r = {
extname: "cRLNumber"
};
e && (r.critical = !0);
if ("02" == t.substr(0, 2)) return r.num = {
hex: n(t, 0)
}, r;
throw new m("hExtV parse error: " + t);
}, this.getExtCRLReason = function(t, e) {
var r = {
extname: "cRLReason"
};
e && (r.critical = !0);
if ("0a" == t.substr(0, 2)) return r.code = parseInt(n(t, 0), 16), r;
throw new Error("hExtV parse error: " + t);
}, this.getExtOcspNonce = function(t, e) {
var r = {
extname: "ocspNonce"
};
e && (r.critical = !0);
var i = n(t, 0);
return r.hex = i, r;
}, this.getExtOcspNoCheck = function(t, e) {
var r = {
extname: "ocspNoCheck"
};
return e && (r.critical = !0), r;
}, this.getExtAdobeTimeStamp = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("adobeTimeStamp");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var n = {
extname: "adobeTimeStamp"
};
e && (n.critical = !0);
var s = i(t, 0);
if (s.length > 1) {
var o = a(t, s[1]), h = this.getGeneralName(o);
void 0 != h.uri && (n.uri = h.uri);
}
if (s.length > 2) {
var u = a(t, s[2]);
"0101ff" == u && (n.reqauth = !0), "010100" == u && (n.reqauth = !1);
}
return n;
}, this.getExtSubjectDirectoryAttributes = function(t, e) {
if (void 0 === t && void 0 === e) {
var r = this.getExtInfo("subjectDirectoryAttributes");
if (void 0 === r) return;
t = a(this.hex, r.vidx), e = r.critical;
}
var i = {
extname: "subjectDirectoryAttributes"
};
e && (i.critical = !0);
try {
for (var n = s(t), o = [], h = 0; h < n.seq.length; h++) {
var u = n.seq[h], c = zt(u, "seq.0.oid"), l = zt(u, "seq.1.set");
if (void 0 == c || void 0 == l) throw "error";
o.push({
attr: c,
array: l
});
}
return i.array = o, i;
} catch (t) {
throw new Error("malformed subjectDirectoryAttributes extension value");
}
};
var x = function(t) {
var e = {};
try {
var r = t.seq[0].oid, i = Z.asn1.x509.OID.name2oid(r);
e.type = Z.asn1.x509.OID.oid2atype(i);
var n = t.seq[1];
if (void 0 != n.utf8str) e.ds = "utf8", e.value = n.utf8str.str; else if (void 0 != n.numstr) e.ds = "num", 
e.value = n.numstr.str; else if (void 0 != n.telstr) e.ds = "tel", e.value = n.telstr.str; else if (void 0 != n.prnstr) e.ds = "prn", 
e.value = n.prnstr.str; else if (void 0 != n.ia5str) e.ds = "ia5", e.value = n.ia5str.str; else if (void 0 != n.visstr) e.ds = "vis", 
e.value = n.visstr.str; else {
if (void 0 == n.bmpstr) throw "error";
e.ds = "bmp", e.value = n.bmpstr.str;
}
return e;
} catch (t) {
throw new Erorr("improper ASN.1 parsed AttrTypeAndValue");
}
}, S = function(t) {
try {
return t.set.map(function(t) {
return x(t);
});
} catch (t) {
throw new Error("improper ASN.1 parsed RDN: " + t);
}
}, E = function(t) {
try {
return t.seq.map(function(t) {
return S(t);
});
} catch (t) {
throw new Error("improper ASN.1 parsed X500Name: " + t);
}
};
this.getX500NameRule = function(t) {
for (var e = null, r = [], i = 0; i < t.length; i++) for (var n = t[i], s = 0; s < n.length; s++) r.push(n[s]);
for (i = 0; i < r.length; i++) {
var a = r[i], o = a.ds, h = a.value, u = a.type;
":" + o;
if ("prn" != o && "utf8" != o && "ia5" != o) return "mixed";
if ("ia5" == o) {
if ("CN" != u) return "mixed";
if (Z.lang.String.isMail(h)) continue;
return "mixed";
}
if ("C" == u) {
if ("prn" == o) continue;
return "mixed";
}
":" + o;
if (null == e) e = o; else if (e !== o) return "mixed";
}
return null == e ? "prn" : e;
}, this.getAttrTypeAndValue = function(t) {
var e = s(t);
return x(e);
}, this.getRDN = function(t) {
var e = s(t);
return S(e);
}, this.getX500NameArray = function(t) {
var e = s(t);
return E(e);
}, this.getX500Name = function(t, e, r) {
var i = this.getX500NameArray(t), n = {
str: this.dnarraytostr(i)
};
return n.array = i, 1 == r && (n.hex = t), 1 == e && (n.canon = this.c14nRDNArray(i)), 
n;
}, this.readCertPEM = function(t) {
this.readCertHex(y(t));
}, this.readCertHex = function(t) {
this.hex = t, this.getVersion();
try {
l(this.hex, 0, [ 0, 7 ], "a3"), this.parseExt();
} catch (t) {}
}, this.getParam = function(t) {
var e = {};
return void 0 == t && (t = {}), e.version = this.getVersion(), e.serial = {
hex: this.getSerialNumberHex()
}, e.sigalg = this.getSignatureAlgorithmField(), e.issuer = this.getIssuer(t.dncanon, t.dnhex), 
e.notbefore = this.getNotBefore(), e.notafter = this.getNotAfter(), e.subject = this.getSubject(t.dncanon, t.dnhex), 
e.sbjpubkey = xt(this.getPublicKeyHex(), "PUBLIC KEY"), void 0 != this.aExtInfo && this.aExtInfo.length > 0 && (e.ext = this.getExtParamArray()), 
e.sighex = this.getSignatureValueHex(), 1 == t.tbshex && (e.tbshex = u(this.hex, 0, [ 0 ])), 
1 == t.nodnarray && (delete e.issuer.array, delete e.subject.array), e;
}, this.getExtParamArray = function(t) {
if (void 0 == t) {
-1 != f(this.hex, 0, [ 0, "[3]" ]) && (t = c(this.hex, 0, [ 0, "[3]", 0 ], "30"));
}
for (var e = [], r = i(t, 0), n = 0; n < r.length; n++) {
var s = a(t, r[n]), o = this.getExtParam(s);
null != o && e.push(o);
}
return e;
}, this.getExtParam = function(t) {
var e = i(t, 0).length;
if (2 != e && 3 != e) throw new Error("wrong number elements in Extension: " + e + " " + t);
var r = v(o(t, 0, [ 0 ], "06")), n = !1;
3 == e && "0101ff" == u(t, 0, [ 1 ]) && (n = !0);
var a = u(t, 0, [ e - 1, 0 ]), h = void 0;
"2.5.29.14" == r ? h = this.getExtSubjectKeyIdentifier(a, n) : "2.5.29.15" == r ? h = this.getExtKeyUsage(a, n) : "2.5.29.17" == r ? h = this.getExtSubjectAltName(a, n) : "2.5.29.18" == r ? h = this.getExtIssuerAltName(a, n) : "2.5.29.19" == r ? h = this.getExtBasicConstraints(a, n) : "2.5.29.30" == r ? h = this.getExtNameConstraints(a, n) : "2.5.29.31" == r ? h = this.getExtCRLDistributionPoints(a, n) : "2.5.29.32" == r ? h = this.getExtCertificatePolicies(a, n) : "2.5.29.33" == r ? h = this.getExtPolicyMappings(a, n) : "2.5.29.35" == r ? h = this.getExtAuthorityKeyIdentifier(a, n) : "2.5.29.36" == r ? h = this.getExtPolicyConstraints(a, n) : "2.5.29.37" == r ? h = this.getExtExtKeyUsage(a, n) : "2.5.29.54" == r ? h = this.getExtInhibitAnyPolicy(a, n) : "1.3.6.1.5.5.7.1.1" == r ? h = this.getExtAuthorityInfoAccess(a, n) : "2.5.29.20" == r ? h = this.getExtCRLNumber(a, n) : "2.5.29.21" == r ? h = this.getExtCRLReason(a, n) : "2.5.29.9" == r ? h = this.getExtSubjectDirectoryAttributes(a, n) : "1.3.6.1.5.5.7.48.1.2" == r ? h = this.getExtOcspNonce(a, n) : "1.3.6.1.5.5.7.48.1.5" == r ? h = this.getExtOcspNoCheck(a, n) : "1.2.840.113583.1.1.9.1" == r ? h = this.getExtAdobeTimeStamp(a, n) : void 0 != Zt.EXT_PARSER[r] && (h = Zt.EXT_PARSER[r](r, n, a));
if (void 0 != h) return h;
var c = {
extname: r,
extn: a
};
try {
c.extn = s(a);
} catch (t) {}
return n && (c.critical = !0), c;
}, this.findExt = function(t, e) {
for (var r = 0; r < t.length; r++) if (t[r].extname == e) return t[r];
return null;
}, this.updateExtCDPFullURI = function(t, e) {
var r = this.findExt(t, "cRLDistributionPoints");
if (null != r && void 0 != r.array) for (var i = r.array, n = 0; n < i.length; n++) if (void 0 != i[n].dpname && void 0 != i[n].dpname.full) for (var s = i[n].dpname.full, a = 0; a < s.length; a++) {
var o = s[n];
void 0 != o.uri && (o.uri = e);
}
}, this.updateExtAIAOCSP = function(t, e) {
var r = this.findExt(t, "authorityInfoAccess");
if (null != r && void 0 != r.array) for (var i = r.array, n = 0; n < i.length; n++) void 0 != i[n].ocsp && (i[n].ocsp = e);
}, this.updateExtAIACAIssuer = function(t, e) {
var r = this.findExt(t, "authorityInfoAccess");
if (null != r && void 0 != r.array) for (var i = r.array, n = 0; n < i.length; n++) void 0 != i[n].caissuer && (i[n].caissuer = e);
}, this.dnarraytostr = function(t) {
function e(t) {
return t.map(function(t) {
return r(t).replace(/\+/, "\\+");
}).join("+");
}
function r(t) {
return t.type + "=" + t.value;
}
return "/" + t.map(function(t) {
return e(t).replace(/\//, "\\/");
}).join("/");
}, this.setCanonicalizedDN = function(t) {
var e;
if (void 0 != t.str && void 0 == t.array) {
var r = new Z.asn1.x509.X500Name({
str: t.str
}).tohex();
e = this.getX500NameArray(r);
} else e = t.array;
void 0 == t.canon && (t.canon = this.c14nRDNArray(e));
}, this.c14nRDNArray = function(t) {
for (var e = [], r = 0; r < t.length; r++) {
for (var i = t[r], n = [], s = 0; s < i.length; s++) {
var a = i[s], o = a.value;
o = (o = (o = (o = o.replace(/^\s*/, "")).replace(/\s*$/, "")).replace(/\s+/g, " ")).toLowerCase(), 
n.push(a.type.toLowerCase() + "=" + o);
}
e.push(n.join("+"));
}
return "/" + e.join("/");
}, this.getInfo = function() {
var t, e, r, i = function(t) {
for (var e = "", r = t.array, i = 0; i < r.length; i++) {
var n = r[i];
void 0 != n.dn && (e += "    dn: " + n.dn.str + "\n");
void 0 != n.ip && (e += "    ip: " + n.ip + "\n");
void 0 != n.rfc822 && (e += "    rfc822: " + n.rfc822 + "\n");
void 0 != n.dns && (e += "    dns: " + n.dns + "\n");
void 0 != n.uri && (e += "    uri: " + n.uri + "\n");
if (void 0 != n.other) {
e += "    other: " + n.other.oid + "=" + JSON.stringify(n.other.value).replace(/\"/g, "") + "\n";
}
}
return e = e.replace(/\n$/, "");
}, n = function(t) {
for (var e = "", r = t.array, i = 0; i < r.length; i++) {
var n = r[i];
e += "    policy oid: " + n.policyoid + "\n";
if (void 0 !== n.array) for (var s = 0; s < n.array.length; s++) {
var a = n.array[s];
void 0 !== a.cps && (e += "    cps: " + a.cps + "\n");
}
}
return e;
}, s = function(t) {
for (var e = "", r = t.array, i = 0; i < r.length; i++) {
var n = r[i];
try {
void 0 !== n.dpname.full[0].uri && (e += "    " + n.dpname.full[0].uri + "\n");
} catch (t) {}
try {
void 0 !== n.dname.full[0].dn.hex && (e += "    " + Zt.hex2dn(n.dpname.full[0].dn.hex) + "\n");
} catch (t) {}
}
return e;
}, a = function(t) {
for (var e = "", r = t.array, i = 0; i < r.length; i++) {
var n = r[i];
void 0 !== n.caissuer && (e += "    caissuer: " + n.caissuer + "\n"), void 0 !== n.ocsp && (e += "    ocsp: " + n.ocsp + "\n");
}
return e;
};
t = "Basic Fields\n", t += "  serial number: " + this.getSerialNumberHex() + "\n", 
t += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n", t += "  issuer: " + this.getIssuerString() + "\n", 
t += "  notBefore: " + this.getNotBefore() + "\n", t += "  notAfter: " + this.getNotAfter() + "\n", 
t += "  subject: " + this.getSubjectString() + "\n", t += "  subject public key info: \n", 
t += "    key algorithm: " + (e = this.getPublicKey()).type + "\n";
"RSA" === e.type && (t += "    n=" + jt(e.n.toString(16)).substr(0, 16) + "...\n", 
t += "    e=" + jt(e.e.toString(16)) + "\n");
if (void 0 !== (r = this.aExtInfo) && null !== r) {
t += "X509v3 Extensions:\n";
for (var o = 0; o < r.length; o++) {
var h = r[o], u = Z.asn1.x509.OID.oid2name(h.oid);
"" === u && (u = h.oid);
var c = "";
!0 === h.critical && (c = "CRITICAL");
t += "  " + u + " " + c + ":\n";
if ("basicConstraints" === u) {
var l = this.getExtBasicConstraints();
void 0 === l.cA ? t += "    {}\n" : (t += "    cA=true", void 0 !== l.pathLen && (t += ", pathLen=" + l.pathLen), 
t += "\n");
} else if ("policyMappings" == u) {
t += "    " + this.getExtPolicyMappings().array.map(function(t) {
var e = t;
return e[0] + ":" + e[1];
}).join(", ") + "\n";
} else if ("policyConstraints" == u) {
t += "    ", void 0 != (f = this.getExtPolicyConstraints()).reqexp && (t += " reqexp=" + f.reqexp), 
void 0 != f.inhibit && (t += " inhibit=" + f.inhibit), t += "\n";
} else if ("inhibitAnyPolicy" == u) {
var f;
t += "    skip=" + (f = this.getExtInhibitAnyPolicy()).skip + "\n";
} else if ("keyUsage" == u) t += "    " + this.getExtKeyUsageString() + "\n"; else if ("subjectKeyIdentifier" == u) t += "    " + this.getExtSubjectKeyIdentifier().kid.hex + "\n"; else if ("authorityKeyIdentifier" == u) {
var d = this.getExtAuthorityKeyIdentifier();
void 0 !== d.kid && (t += "    kid=" + d.kid.hex + "\n");
} else if ("extKeyUsage" == u) {
t += "    " + this.getExtExtKeyUsage().array.join(", ") + "\n";
} else if ("subjectAltName" == u) {
t += i(this.getExtSubjectAltName()) + "\n";
} else if ("cRLDistributionPoints" == u) {
t += s(this.getExtCRLDistributionPoints());
} else if ("authorityInfoAccess" == u) {
t += a(this.getExtAuthorityInfoAccess());
} else "certificatePolicies" == u && (t += n(this.getExtCertificatePolicies()));
}
}
return t += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n", t += "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n";
}, "string" == typeof t && (-1 != t.indexOf("-----BEGIN") ? this.readCertPEM(t) : Z.lang.String.isHex(t) && this.readCertHex(t));
}
Zt.EXT_PARSER = {}, Zt.registExtParser = function(t, e) {
Zt.EXT_PARSER[t] = e;
}, Zt.hex2dn = function(t, e) {
void 0 === e && (e = 0);
var r = new Zt();
et.getTLV(t, e);
return r.getX500Name(t).str;
}, Zt.hex2rdn = function(t, e) {
void 0 === e && (e = 0);
if ("31" !== t.substr(e, 2)) throw new Error("malformed RDN");
for (var r = new Array(), i = et.getChildIdx(t, e), n = 0; n < i.length; n++) r.push(Zt.hex2attrTypeValue(t, i[n]));
return (r = r.map(function(t) {
return t.replace("+", "\\+");
})).join("+");
}, Zt.hex2attrTypeValue = function(t, e) {
var r = et, i = r.getV;
void 0 === e && (e = 0);
if ("30" !== t.substr(e, 2)) throw new Error("malformed attribute type and value");
var n = r.getChildIdx(t, e);
2 !== n.length || t.substr(n[0], 2);
var s = i(t, n[0]), a = Z.asn1.ASN1Util.oidHexToInt(s);
return Z.asn1.x509.OID.oid2atype(a) + "=" + gt(i(t, n[1]));
}, Zt.getPublicKeyFromCertHex = function(t) {
var e = new Zt();
return e.readCertHex(t), e.getPublicKey();
}, Zt.getPublicKeyFromCertPEM = function(t) {
var e = new Zt();
return e.readCertPEM(t), e.getPublicKey();
}, Zt.getPublicKeyInfoPropOfCertPEM = function(t) {
var e, r, i = et.getVbyList, n = {};
return n.algparam = null, (e = new Zt()).readCertPEM(t), r = e.getPublicKeyHex(), 
n.keyhex = i(r, 0, [ 1 ], "03").substr(2), n.algoid = i(r, 0, [ 0, 0 ], "06"), "2a8648ce3d0201" === n.algoid && (n.algparam = i(r, 0, [ 0, 1 ], "06")), 
n;
}, Zt.KEYUSAGE_NAME = [ "digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly" ];
("undefined" == typeof Z || !Z) && (Z = {}), ("undefined" == typeof Z.jws || !Z.jws) && (Z.jws = {}), 
Z.jws.JWS = function() {
var t = Z.jws.JWS.isSafeJSONString;
this.parseJWS = function(e, r) {
if (void 0 === this.parsedJWS || !r && void 0 === this.parsedJWS.sigvalH) {
var i = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
if (null == i) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
var n = i[1], s = i[2], a = i[3], o = n + "." + s;
this.parsedJWS = {}, this.parsedJWS.headB64U = n, this.parsedJWS.payloadB64U = s, 
this.parsedJWS.sigvalB64U = a, this.parsedJWS.si = o;
if (!r) {
var h = ut(a), u = z(h, 16);
this.parsedJWS.sigvalH = h, this.parsedJWS.sigvalBI = u;
}
var c = tt(n), l = tt(s);
this.parsedJWS.headS = c, this.parsedJWS.payloadS = l;
if (!t(c, this.parsedJWS, "headP")) throw "malformed JSON string for JWS Head: " + c;
}
};
}, Z.jws.JWS.sign = function(t, e, r, i, n) {
var s, a, o, h = Z, u = h.jws.JWS, c = u.readSafeJSONString, l = u.isSafeJSONString, f = h.crypto, d = (f.ECDSA, 
f.Mac), g = f.Signature, p = JSON;
if ("string" != typeof e && "object" != typeof e) throw "spHeader must be JSON string or object: " + e;
"object" == typeof e && (a = e, s = p.stringify(a));
if ("string" == typeof e) {
if (!l(s = e)) throw "JWS Head is not safe JSON string: " + s;
a = c(s);
}
o = r;
"object" == typeof r && (o = p.stringify(r));
("" == t || null == t) && void 0 !== a.alg && (t = a.alg);
"" != t && null != t && void 0 === a.alg && (a.alg = t, s = p.stringify(a));
if (t !== a.alg) throw "alg and sHeader.alg doesn't match: " + t + "!=" + a.alg;
var v = null;
if (void 0 === u.jwsalg2sigalg[t]) throw "unsupported alg name: " + t;
v = u.jwsalg2sigalg[t];
var y = Q(s) + "." + Q(o), m = "";
if ("Hmac" == v.substr(0, 4)) {
if (void 0 === i) throw "mac key shall be specified for HS* alg";
var x = new d({
alg: v,
prov: "cryptojs",
pass: i
});
x.updateString(y), m = x.doFinal();
} else if (-1 != v.indexOf("withECDSA")) {
(E = new g({
alg: v
})).init(i, n), E.updateString(y);
var S = E.sign();
m = Z.crypto.ECDSA.asn1SigToConcatSig(S);
} else if ("none" != v) {
var E;
(E = new g({
alg: v
})).init(i, n), E.updateString(y), m = E.sign();
}
return y + "." + ht(m);
}, Z.jws.JWS.verify = function(t, e, r) {
var i, n = Z, s = n.jws.JWS, a = s.readSafeJSONString, o = n.crypto, h = o.ECDSA, u = o.Mac, c = o.Signature;
void 0 !== typeof J && (i = J);
if (!Ot(t)) return !1;
var l = t.split(".");
if (3 !== l.length) return !1;
var f = l[0] + "." + l[1], d = ut(l[2]), g = a(tt(l[0])), p = null, v = null;
if (void 0 === g.alg) throw "algorithm not specified in header";
v = (p = g.alg).substr(0, 2);
if (null != r && "[object Array]" === Object.prototype.toString.call(r) && r.length > 0) {
if (-1 == (":" + r.join(":") + ":").indexOf(":" + p + ":")) throw "algorithm '" + p + "' not accepted in the list";
}
if ("none" != p && null === e) throw "key shall be specified to verify.";
"string" == typeof e && -1 != e.indexOf("-----BEGIN ") && (e = Wt.getKey(e));
if (!("RS" != v && "PS" != v || e instanceof i)) throw "key shall be a RSAKey obj for RS* and PS* algs";
if ("ES" == v && !(e instanceof h)) throw "key shall be a ECDSA obj for ES* algs";
var y = null;
if (void 0 === s.jwsalg2sigalg[g.alg]) throw "unsupported alg name: " + p;
if ("none" == (y = s.jwsalg2sigalg[p])) throw "not supported";
if ("Hmac" == y.substr(0, 4)) {
if (void 0 === e) throw "hexadecimal key shall be specified for HMAC";
var m = new u({
alg: y,
pass: e
});
return m.updateString(f), d == m.doFinal();
}
if (-1 != y.indexOf("withECDSA")) {
var x, S = null;
try {
S = h.concatSigToASN1Sig(d);
} catch (t) {
return !1;
}
return (x = new c({
alg: y
})).init(e), x.updateString(f), x.verify(S);
}
return (x = new c({
alg: y
})).init(e), x.updateString(f), x.verify(d);
}, Z.jws.JWS.parse = function(t) {
var e, r, i, n = t.split("."), s = {};
if (2 != n.length && 3 != n.length) throw "malformed sJWS: wrong number of '.' splitted elements";
return e = n[0], r = n[1], 3 == n.length && (i = n[2]), s.headerObj = Z.jws.JWS.readSafeJSONString(tt(e)), 
s.payloadObj = Z.jws.JWS.readSafeJSONString(tt(r)), s.headerPP = JSON.stringify(s.headerObj, null, "  "), 
null == s.payloadObj ? s.payloadPP = tt(r) : s.payloadPP = JSON.stringify(s.payloadObj, null, "  "), 
void 0 !== i && (s.sigHex = ut(i)), s;
}, Z.jws.JWS.verifyJWT = function(t, e, r) {
var i = Z.jws, n = i.JWS, s = n.readSafeJSONString, a = n.inArray, o = n.includedArray;
if (!Ot(t)) return !1;
var h = t.split(".");
if (3 != h.length) return !1;
var u = h[0], c = h[1], l = (ut(h[2]), s(tt(u))), f = s(tt(c));
if (void 0 === l.alg) return !1;
if (void 0 === r.alg) throw "acceptField.alg shall be specified";
if (!a(l.alg, r.alg)) return !1;
if (void 0 !== f.iss && "object" == typeof r.iss && !a(f.iss, r.iss)) return !1;
if (void 0 !== f.sub && "object" == typeof r.sub && !a(f.sub, r.sub)) return !1;
if (void 0 !== f.aud && "object" == typeof r.aud) if ("string" == typeof f.aud) {
if (!a(f.aud, r.aud)) return !1;
} else if ("object" == typeof f.aud && !o(f.aud, r.aud)) return !1;
var d = i.IntDate.getNow();
void 0 !== r.verifyAt && "number" == typeof r.verifyAt && (d = r.verifyAt);
(void 0 === r.gracePeriod || "number" != typeof r.gracePeriod) && (r.gracePeriod = 0);
return !(void 0 !== f.exp && "number" == typeof f.exp && f.exp + r.gracePeriod < d) && (!(void 0 !== f.nbf && "number" == typeof f.nbf && d < f.nbf - r.gracePeriod) && (!(void 0 !== f.iat && "number" == typeof f.iat && d < f.iat - r.gracePeriod) && ((void 0 === f.jti || void 0 === r.jti || f.jti === r.jti) && !!n.verify(t, e, r.alg))));
}, Z.jws.JWS.includedArray = function(t, e) {
var r = Z.jws.JWS.inArray;
if (null === t) return !1;
if ("object" != typeof t) return !1;
if ("number" != typeof t.length) return !1;
for (var i = 0; i < t.length; i++) if (!r(t[i], e)) return !1;
return !0;
}, Z.jws.JWS.inArray = function(t, e) {
if (null === e) return !1;
if ("object" != typeof e) return !1;
if ("number" != typeof e.length) return !1;
for (var r = 0; r < e.length; r++) if (e[r] == t) return !0;
return !1;
}, Z.jws.JWS.jwsalg2sigalg = {
HS256: "HmacSHA256",
HS384: "HmacSHA384",
HS512: "HmacSHA512",
RS256: "SHA256withRSA",
RS384: "SHA384withRSA",
RS512: "SHA512withRSA",
ES256: "SHA256withECDSA",
ES384: "SHA384withECDSA",
ES512: "SHA512withECDSA",
PS256: "SHA256withRSAandMGF1",
PS384: "SHA384withRSAandMGF1",
PS512: "SHA512withRSAandMGF1",
none: "none"
}, Z.jws.JWS.isSafeJSONString = function(t, e, r) {
var i = null;
try {
return "object" != typeof (i = Y(t)) ? 0 : i.constructor === Array ? 0 : (e && (e[r] = i), 
1);
} catch (t) {
return 0;
}
}, Z.jws.JWS.readSafeJSONString = function(t) {
var e = null;
try {
return "object" != typeof (e = Y(t)) ? null : e.constructor === Array ? null : e;
} catch (t) {
return null;
}
}, Z.jws.JWS.getEncodedSignatureValueFromJWS = function(t) {
var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
if (null == e) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
return e[1];
}, Z.jws.JWS.getJWKthumbprint = function(t) {
if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty) throw "unsupported algorithm for JWK Thumprint";
var e = "{";
if ("RSA" === t.kty) {
if ("string" != typeof t.n || "string" != typeof t.e) throw "wrong n and e value for RSA key";
e += '"e":"' + t.e + '",', e += '"kty":"' + t.kty + '",', e += '"n":"' + t.n + '"}';
} else if ("EC" === t.kty) {
if ("string" != typeof t.crv || "string" != typeof t.x || "string" != typeof t.y) throw "wrong crv, x and y value for EC key";
e += '"crv":"' + t.crv + '",', e += '"kty":"' + t.kty + '",', e += '"x":"' + t.x + '",', 
e += '"y":"' + t.y + '"}';
} else if ("oct" === t.kty) {
if ("string" != typeof t.k) throw "wrong k value for oct(symmetric) key";
e += '"kty":"' + t.kty + '",', e += '"k":"' + t.k + '"}';
}
var r = pt(e);
return ht(Z.crypto.Util.hashHex(r, "sha256"));
}, Z.jws.IntDate = {}, Z.jws.IntDate.get = function(t) {
var e = Z.jws.IntDate, r = e.getNow, i = e.getZulu;
if ("now" == t) return r();
if ("now + 1hour" == t) return r() + 3600;
if ("now + 1day" == t) return r() + 86400;
if ("now + 1month" == t) return r() + 2592e3;
if ("now + 1year" == t) return r() + 31536e3;
if (t.match(/Z$/)) return i(t);
if (t.match(/^[0-9]+$/)) return parseInt(t);
throw "unsupported format: " + t;
}, Z.jws.IntDate.getZulu = function(t) {
return wt(t);
}, Z.jws.IntDate.getNow = function() {
return ~~(new Date() / 1e3);
}, Z.jws.IntDate.intDate2UTCString = function(t) {
return new Date(1e3 * t).toUTCString();
}, Z.jws.IntDate.intDate2Zulu = function(t) {
var e = new Date(1e3 * t);
return ("0000" + e.getUTCFullYear()).slice(-4) + ("00" + (e.getUTCMonth() + 1)).slice(-2) + ("00" + e.getUTCDate()).slice(-2) + ("00" + e.getUTCHours()).slice(-2) + ("00" + e.getUTCMinutes()).slice(-2) + ("00" + e.getUTCSeconds()).slice(-2) + "Z";
}, ("undefined" == typeof Z || !Z) && (Z = {}), ("undefined" == typeof Z.jws || !Z.jws) && (Z.jws = {}), 
Z.jws.JWSJS = function() {
var t = Z.jws.JWS, e = t.readSafeJSONString;
this.aHeader = [], this.sPayload = "", this.aSignature = [], this.init = function() {
this.aHeader = [], this.sPayload = void 0, this.aSignature = [];
}, this.initWithJWS = function(t) {
this.init();
var e = t.split(".");
if (3 != e.length) throw "malformed input JWS";
this.aHeader.push(e[0]), this.sPayload = e[1], this.aSignature.push(e[2]);
}, this.addSignature = function(t, e, r, i) {
if (void 0 === this.sPayload || null === this.sPayload) throw "there's no JSON-JS signature to add.";
var n = this.aHeader.length;
if (this.aHeader.length != this.aSignature.length) throw "aHeader.length != aSignature.length";
try {
var s = Z.jws.JWS.sign(t, e, this.sPayload, r, i).split(".");
s[0], s[2];
this.aHeader.push(s[0]), this.aSignature.push(s[2]);
} catch (t) {
this.aHeader.length > n && this.aHeader.pop();
this.aSignature.length > n && this.aSignature.pop();
throw "addSignature failed: " + t;
}
}, this.verifyAll = function(t) {
if (this.aHeader.length !== t.length || this.aSignature.length !== t.length) return !1;
for (var e = 0; e < t.length; e++) {
var r = t[e];
if (2 !== r.length) return !1;
if (!1 === this.verifyNth(e, r[0], r[1])) return !1;
}
return !0;
}, this.verifyNth = function(e, r, i) {
if (this.aHeader.length <= e || this.aSignature.length <= e) return !1;
var n = this.aHeader[e], s = this.aSignature[e], a = n + "." + this.sPayload + "." + s, o = !1;
try {
o = t.verify(a, r, i);
} catch (t) {
return !1;
}
return o;
}, this.readJWSJS = function(t) {
if ("string" == typeof t) {
var r = e(t);
if (null == r) throw "argument is not safe JSON object string";
this.aHeader = r.headers, this.sPayload = r.payload, this.aSignature = r.signatures;
} else try {
if (!(t.headers.length > 0)) throw "malformed header";
this.aHeader = t.headers;
if ("string" != typeof t.payload) throw "malformed signatures";
this.sPayload = t.payload;
if (!(t.signatures.length > 0)) throw "malformed signatures";
this.aSignature = t.signatures;
} catch (t) {
throw "malformed JWS-JS JSON object: " + t;
}
}, this.getJSON = function() {
return {
headers: this.aHeader,
payload: this.sPayload,
signatures: this.aSignature
};
}, this.isEmpty = function() {
return 0 == this.aHeader.length ? 1 : 0;
};
}, t.SecureRandom = G, t.rng_seed_time = U, t.BigInteger = c, t.RSAKey = J, t.ECDSA = Z.crypto.ECDSA, 
t.DSA = Z.crypto.DSA, t.Signature = Z.crypto.Signature, t.MessageDigest = Z.crypto.MessageDigest, 
t.Mac = Z.crypto.Mac, t.KEYUTIL = Wt, t.ASN1HEX = et, t.X509 = Zt, t.X509CRL = function(t) {
var e = Z.lang.String.isHex, r = et, i = r.getV, n = r.getTLV, s = r.getVbyList, a = r.getTLVbyList, o = r.getTLVbyListEx, h = r.getIdxbyList, u = r.getIdxbyListEx, c = r.getChildIdx, l = new Zt();
this.hex = null, this.posSigAlg = null, this.posRevCert = null, this.parsed = null, 
this._setPos = function() {
var t = h(this.hex, 0, [ 0, 0 ]), e = this.hex.substr(t, 2);
if ("02" == e) this.posSigAlg = 1; else {
if ("30" != e) throw new Error("malformed 1st item of TBSCertList: " + e);
this.posSigAlg = 0;
}
var r = h(this.hex, 0, [ 0, this.posSigAlg + 3 ]), i = this.hex.substr(r, 2);
if ("17" == i || "18" == i) {
var n;
n = h(this.hex, 0, [ 0, this.posSigAlg + 4 ]), this.posRevCert = null, -1 != n && "30" == this.hex.substr(n, 2) && (this.posRevCert = this.posSigAlg + 4);
} else if ("30" == i) this.posRevCert = this.posSigAlg + 3; else {
if ("a0" != i) throw new Error("malformed nextUpdate or revCert tag: " + i);
this.posRevCert = null;
}
}, this.getVersion = function() {
return 0 == this.posSigAlg ? null : parseInt(s(this.hex, 0, [ 0, 0 ], "02"), 16) + 1;
}, this.getSignatureAlgorithmField = function() {
var t = a(this.hex, 0, [ 0, this.posSigAlg ], "30");
return l.getAlgorithmIdentifierName(t);
}, this.getIssuer = function() {
return l.getX500Name(this.getIssuerHex());
}, this.getIssuerHex = function() {
return a(this.hex, 0, [ 0, this.posSigAlg + 1 ], "30");
}, this.getThisUpdate = function() {
var t = s(this.hex, 0, [ 0, this.posSigAlg + 2 ]);
return result = gt(t);
}, this.getNextUpdate = function() {
var t = h(this.hex, 0, [ 0, this.posSigAlg + 3 ]), e = this.hex.substr(t, 2);
return "17" != e && "18" != e ? null : gt(i(this.hex, t));
}, this.getRevCertArray = function() {
if (null == this.posRevCert) return null;
for (var t = [], e = h(this.hex, 0, [ 0, this.posRevCert ]), r = c(this.hex, e), i = 0; i < r.length; i++) {
var s = n(this.hex, r[i]);
t.push(this.getRevCert(s));
}
return t;
}, this.getRevCert = function(t) {
var e = {}, r = c(t, 0);
return e.sn = {
hex: s(t, 0, [ 0 ], "02")
}, e.date = gt(s(t, 0, [ 1 ])), 3 == r.length && (e.ext = l.getExtParamArray(a(t, 0, [ 2 ]))), 
e;
}, this.findRevCert = function(t) {
var e = new Zt(t).getSerialNumberHex();
return this.findRevCertBySN(e);
}, this.findRevCertBySN = function(t) {
null == this.parsed && this.getParam();
if (null == this.parsed.revcert) return null;
for (var e = this.parsed.revcert, r = 0; r < e.length; r++) if (t == e[r].sn.hex) return e[r];
return null;
}, this.getSignatureValueHex = function() {
return s(this.hex, 0, [ 2 ], "03", !0);
}, this.verifySignature = function(t) {
var e = this.getSignatureAlgorithmField(), r = this.getSignatureValueHex(), i = a(this.hex, 0, [ 0 ], "30"), n = new Z.crypto.Signature({
alg: e
});
return n.init(t), n.updateHex(i), n.verify(r);
}, this.getParam = function(t) {
var e = {}, r = this.getVersion();
null != r && (e.version = r);
e.sigalg = this.getSignatureAlgorithmField(), e.issuer = this.getIssuer(), e.thisupdate = this.getThisUpdate();
var i = this.getNextUpdate();
null != i && (e.nextupdate = i);
var n = this.getRevCertArray();
null != n && (e.revcert = n);
if (-1 != u(this.hex, 0, [ 0, "[0]" ])) {
var s = o(this.hex, 0, [ 0, "[0]", 0 ]);
e.ext = l.getExtParamArray(s);
}
return e.sighex = this.getSignatureValueHex(), this.parsed = e, "object" == typeof t && (1 == t.tbshex && (e.tbshex = a(this.hex, 0, [ 0 ])), 
1 == t.nodnarray && delete e.issuer.array), e;
}, "string" == typeof t && (e(t) ? this.hex = t : t.match(/-----BEGIN X509 CRL/) && (this.hex = St(t)), 
this._setPos());
}, t.CryptoJS = i, t.b64tohex = o, t.b64toBA = h, t.ECFieldElementFp = W, t.ECPointFp = X, 
t.ECCurveFp = $, t.stoBA = rt, t.BAtos = it, t.BAtohex = nt, t.stohex = st, t.stob64 = function(t) {
return a(st(t));
}, t.stob64u = function(t) {
return at(a(st(t)));
}, t.b64utos = function(t) {
return it(h(ot(t)));
}, t.b64tob64u = at, t.b64utob64 = ot, t.hex2b64 = a, t.hextob64u = ht, t.b64utohex = ut, 
t.utf8tob64u = Q, t.b64utoutf8 = tt, t.utf8tob64 = function(t) {
return a(Ft(Bt(t)));
}, t.b64toutf8 = function(t) {
return decodeURIComponent(At(o(t)));
}, t.utf8tohex = ct, t.hextoutf8 = lt, t.hextorstr = gt, t.rstrtohex = pt, t.hextob64 = vt, 
t.hextob64nl = function(t) {
return yt(vt(t), 64);
}, t.b64nltohex = mt, t.hextopem = xt, t.pemtohex = St, t.hextoArrayBuffer = function(t) {
if (t.length % 2 != 0) throw "input is not even length";
if (null == t.match(/^[0-9A-Fa-f]+$/)) throw "input is not hexadecimal";
for (var e = new ArrayBuffer(t.length / 2), r = new DataView(e), i = 0; i < t.length / 2; i++) r.setUint8(i, parseInt(t.substr(2 * i, 2), 16));
return e;
}, t.ArrayBuffertohex = function(t) {
for (var e = "", r = new DataView(t), i = 0; i < t.byteLength; i++) e += ("00" + r.getUint8(i).toString(16)).slice(-2);
return e;
}, t.zulutomsec = Et, t.msectozulu = function(t) {
var e = new Date(t), r = ("0000" + e.getUTCFullYear()).slice(-4), i = ("00" + (e.getUTCMonth() + 1)).slice(-2), n = ("00" + e.getUTCDate()).slice(-2), s = ("00" + e.getUTCHours()).slice(-2), a = ("00" + e.getUTCMinutes()).slice(-2), o = ("00" + e.getUTCSeconds()).slice(-2), h = ("000" + e.getUTCMilliseconds()).slice(-3);
return r + i + n + s + a + o + (h = "" != (h = h.replace(/0+$/, "")) ? "." + h : h) + "Z";
}, t.zulutosec = wt, t.zulutodate = function(t) {
return new Date(Et(t));
}, t.datetozulu = function(t, e, r) {
var i, n = t.getUTCFullYear();
if (e) {
if (n < 1950 || 2049 < n) throw "not proper year for UTCTime: " + n;
i = ("" + n).slice(-2);
} else i = ("000" + n).slice(-4);
i += ("0" + (t.getUTCMonth() + 1)).slice(-2), i += ("0" + t.getUTCDate()).slice(-2), 
i += ("0" + t.getUTCHours()).slice(-2), i += ("0" + t.getUTCMinutes()).slice(-2), 
i += ("0" + t.getUTCSeconds()).slice(-2);
if (r) {
var s = t.getUTCMilliseconds();
0 !== s && (i += "." + (s = (s = ("00" + s).slice(-3)).replace(/0+$/g, "")));
}
return i += "Z";
}, t.uricmptohex = Ft, t.hextouricmp = At, t.ipv6tohex = It, t.hextoipv6 = Dt, t.hextoip = Ct, 
t.iptohex = Tt, t.ucs2hextoutf8 = Nt, t.encodeURIComponentAll = Bt, t.newline_toUnix = function(t) {
return t = t.replace(/\r\n/gm, "\n");
}, t.newline_toDos = function(t) {
return t = (t = t.replace(/\r\n/gm, "\n")).replace(/\n/gm, "\r\n");
}, t.hextoposhex = jt, t.intarystrtohex = function(t) {
t = (t = (t = t.replace(/^\s*\[\s*/, "")).replace(/\s*\]\s*$/, "")).replace(/\s*/g, "");
try {
return t.split(/,/).map(function(t, e, r) {
var i = parseInt(t);
if (i < 0 || 255 < i) throw "integer not in range 0-255";
return ("00" + i.toString(16)).slice(-2);
}).join("");
} catch (t) {
throw "malformed integer array string: " + t;
}
}, t.strdiffidx = function(t, e) {
var r = t.length;
t.length > e.length && (r = e.length);
for (var i = 0; i < r; i++) if (t.charCodeAt(i) != e.charCodeAt(i)) return i;
return t.length != e.length ? r : -1;
}, t.oidtohex = Vt, t.hextooid = kt, t.strpad = qt, t.bitstrtoint = Mt, t.inttobitstr = Ut, 
t.bitstrtobinstr = _t, t.binstrtobitstr = function(t) {
if ("string" != typeof t) return null;
if (null == t.match(/^[01]+$/)) return null;
try {
return Ut(parseInt(t, 2));
} catch (t) {
return null;
}
}, t.isBase64URLDot = Ot, t.namearraytobinstr = Gt, t.extendClass = Jt, t.foldnl = yt, 
t.b64topem = function(t, e) {
return "-----BEGIN " + e + "-----\r\n" + yt(t, 64) + "\r\n-----END " + e + "-----\r\n";
}, t.pemtob64 = function(t) {
return -1 == t.indexOf("-----BEGIN ") || -1 == t.indexOf("-----END ") ? null : (t = (t = (t = t.replace(/^[\s\S]*?-----BEGIN [^-]+-----/m, "")).replace(/-----END [\s\S]+$/m, "")).replace(/\s+/g, "")).match(/^[0-9a-zA-Z+/=]+$/) ? t : null;
}, t.timeogen = bt, t.aryval = zt, t.inttohex = Kt, t.twoscompl = Lt, t.KJUR = Z, 
t.crypto = Z.crypto, t.asn1 = Z.asn1, t.jws = Z.jws, t.lang = Z.lang, t.VERSION = "11.1.0", 
t.VERSION_FULL = "jsrsasign(all) 11.1.0 (2024-02-01) (c) 2010-2023 Kenji Urushima | kjur.github.io/jsrsasign/license";
}
})()), v = "/habbyid/verify/gameAccountId", y = "/habbyid/verify/email", m = "/habbyid/email/sendCode", x = "/habbyid/email/login", S = "/habbyid/email/generateCode", E = "/habbyid/email/pollingLogin", w = "/habbyid/userInfo", b = "/habbyid/logout", F = "/habbyid/auth/token", A = "https://dev-habbyid.habbyservice.com", I = "https://test-habbyid.habbyservice.com", D = "https://habbyid.habbyservice.com", C = [ -1191971242, 888632676, 788427371, -210682656, 100037995, -2030865309, -2033724830, 99997282, 91584102, 2102686823, -1074011017, 1894607673, 169635696, -493622306, 1964369025, -885416898, -254484271, 1385009573, 139652948, 1636284422, 1565982730, -262820388, 1069344757, 740319631, -2080495390, 1211424148, 1027511212, -1096709914, -1673858579, -1094599797, 1340736568, -540699230, 71273608, -1576269212, -2092985367, 132121570, 1758923945, 365496400, 113996059, 275353592, -1713523788, -571667302, -1752985282, 348461205, -129999578, -830614915, -71232274, -1161576928, 1178179480, -1808410211, -1476869570, -830714372, -2141206572, 1993853511, -1995831453, 102355604, 444728490, -809059592, 587078996, 284684558, 955337620, -1637886405, 1597418443, 943480950, -653477411, 180534171, -957350031, -632745689, 1105143278, 102772504, -218832445, 1119667029, -1087970198, 133536588, 116814951, 754415076, 1778125430, -1076817259, 601583665, -958485985, -485066507, -958535653, 303857107, 329880794, -1471094539, -1925405261, 1335166542, -199162268, -219395775, -510913016, -390205773, 665806645, 1457003669, -526284811, 1237111700, 1606231976, -594013785, 1861962680, 4516878, 718018567, 125082003, -2140940430, -1840904185, -590947530, -1648230038, 1607133011, -1388153171, -603959800, 1550785628, -2056175303, -2067318502, 1162360753, -1633741205, 281966007, 84025555, 1700012509, -1972731317, -749735968, 1117293240, 1191964055, 1745993251, 359045964, -598529031, -158513164, 2060559791, -1771738647, -531704441, -815755504, -1838918984, 2115397701, -386088616, 940743482, -405137863, 2042201259, -1050631826, 1222200981, 354528168, -1347967486, -736306196, 102111620, -587729433, 1451107970, -2072578108, -201091261, 926485174, -828832168, -1819858662, -354021933, -2134795812, 1435524923, -620386332, 1850133245, 922546273, 2067390724, -2037974625, 1194856741, 1035737839, 1544685541, -1260736911, -1034763706, -221381809, 387537446, 1342066322, -377177099, 1692677505, -35526074, -946978771, -1847613491, 1106583963, 1332162162, 332230278, 847958227, 103738176, -990382617, -2140896108, 35926234, 1049580460, -1660934386, 1644398075, -1167533840, 171445312, 317784061, 1426630592, -433677423, 392298833, -195722529, -2119723531, -152563530, -1440112749, -1880936587, -286623292, 709498433, -1434615347, -2054220442, -1766805388, 638241491, 658113411, 1657774896, -312306447, -146728978, 1578775650, -1646943153, -1958525951, 240406406, 1289159394, 116447353, -1950354201, -191924940, -1997206311, 1088545868, -1239399620, 476643213, -560307640, -2020197379, 1602735851, -1987088727, -1605807897, 2068740721, -985578374, 190312984, -1361720367, 1791746133, -724258678, -1447948043, -827697397, -1219984283, 468242595, 999532417, -1575413015, 850332605, -227670624, 60946761, -1861768919, -1414581668, -1863473642, -1829902261, -1005782189, -1173578755, -2047521320, -1772980506, -646301925, 9349105, -2127371767, 403713279, -1233787737, 984413947, 1335260377, -1711564111, -113659989, 1020937350, -1877424654, 1239613051, -25328548, -1759849182, -1766273077, 394932943, 1333889264, 2004223679, 1012180539, 932013525, 605841163, -43391436, 1507444818, -557901407, 1100324982, -2045472267, 629148522, -371803080, 656435288, -1593557508, 500259409, -2072611211, 1904526910, 11608081, 1661528829, -1864158008, 1207308153, -1385768014, 1742817374, -274396480, 148174822, -1916810336, 401806272, 917537006, 2062288939, -1539015820, -1465961321, -2072193419, 1998864670, -352294507, 845307694, 182702728, 1797477074, 27078679, -292052366, 722811828, 1251950497, 33063370, -405563132, -725389798, -324111129, 340006638, 1219731921, -587761415 ], P = 83326054, T = "__hiddata", R = null != (t = p.default) ? t : p, N = (() => {
try {
if ("undefined" != typeof localStorage) return localStorage;
} catch (t) {}
const t = {};
return {
getItem: e => {
var r;
return null != (r = t[e]) ? r : null;
},
setItem: (e, r) => {
t[e] = r;
},
removeItem: e => {
delete t[e];
}
};
})();
async function B(t, e) {
const r = U(), i = (null == e ? void 0 : e.method) || "GET";
console.log("[HabbyID][doFetch] request " + JSON.stringify({
url: t,
method: i,
preferXhr: r
}));
if (!r && "undefined" != typeof fetch) {
const r = await fetch(t, e);
return console.log("[HabbyID][doFetch] response(fetch) " + JSON.stringify({
url: t,
method: i,
status: r.status,
ok: r.ok
})), {
ok: r.ok,
status: r.status,
json: () => r.json()
};
}
return new Promise((r, n) => {
const s = new globalThis.XMLHttpRequest();
s.open(i, t, !0), e.headers && Object.entries(e.headers).forEach(([t, e]) => s.setRequestHeader(t, e)), 
s.onload = (() => {
const e = s.status >= 200 && s.status < 300, n = s.responseText || "";
console.log("[HabbyID][doFetch] response(xhr) " + JSON.stringify({
url: t,
method: i,
status: s.status,
ok: e,
textPreview: n.slice(0, 300)
})), r({
ok: e,
status: s.status,
json: () => {
try {
return n ? JSON.parse(n) : {};
} catch (t) {
return {
code: -2,
msg: "response is not valid json",
rawPreview: n.slice(0, 300)
};
}
}
});
}), s.onerror = (() => {
console.error("[HabbyID][doFetch] network error " + JSON.stringify({
url: t,
method: i
})), n(new Error("Network error"));
}), s.send(e.body || null);
});
}
var H = null, O = !1, j = !1, V = null, k = null, K = [];
function L() {
K.forEach(t => {
try {
t();
} catch (t) {}
});
}
function q() {
var t;
const e = null != (t = null == H ? void 0 : H.serverType) ? t : 0;
return 2 === e ? A : 1 === e ? I : D;
}
function M(t = !1) {
var e, r, i;
const n = {
"Content-Type": "application/json",
"App-Language": null != (e = null == H ? void 0 : H.language) ? e : "en",
game: null != (r = null == H ? void 0 : H.gameId) ? r : "",
clientVersion: null != (i = null == H ? void 0 : H.clientVersion) ? i : ""
};
if (t) {
const t = N.getItem(T);
if (t) {
const e = JSON.parse(t);
(null == e ? void 0 : e.accessToken) && (n.Authorization = "Bearer " + e.accessToken);
}
}
return n;
}
function U() {
var t;
const e = globalThis, r = null == (t = null == e ? void 0 : e.cc) ? void 0 : t.sys;
return !(!r || !r.isNative) || !!(null == e ? void 0 : e.jsb);
}
function _(t, e) {
const r = ((null == H ? void 0 : H.gameId) || "") + "; " + t + "; " + ((null == H ? void 0 : H.gameAccountId) || "") + "; " + e, i = new Uint8Array(4);
i[0] = 255 & P, i[1] = P >> 8 & 255, i[2] = P >> 16 & 255, i[3] = P >> 24 & 255;
const n = new Uint8Array(4 * C.length);
for (let t = 0; t < C.length; t++) {
const e = new Uint8Array(new Uint32Array([ C[t] ]).buffer);
for (let r = 0; r < 4; r++) n[4 * t + r] = e[r] ^ i[r];
}
let s = "";
n.forEach(t => s += String.fromCharCode(t));
const a = btoa(s), o = "-----BEGIN PRIVATE KEY-----\n" + (a.match(/.{1,64}/g) || [ a ]).join("\n") + "\n-----END PRIVATE KEY-----", h = new R.KJUR.crypto.Signature({
alg: "SHA256withRSA"
});
h.init(o), h.updateString(r);
const u = h.sign(), c = new Uint8Array(u.length / 2);
for (let t = 0; t < c.length; t++) c[t] = parseInt(u.slice(2 * t, 2 * t + 2), 16);
let l = "";
return c.forEach(t => l += String.fromCharCode(t)), btoa(l);
}
async function G() {
var t, e, r, i;
const n = N.getItem(T);
if (!n) return !1;
let s = null;
try {
s = null != (e = null == (t = JSON.parse(n)) ? void 0 : t.refreshToken) ? e : null;
} catch (t) {}
if (!s) return !1;
try {
const t = await B(q() + F, {
method: "GET",
headers: {
"Content-Type": "application/json",
game: null != (r = null == H ? void 0 : H.gameId) ? r : "",
clientVersion: null != (i = null == H ? void 0 : H.clientVersion) ? i : "",
Authorization: "Bearer " + s
}
}), e = await t.json();
if (0 !== e.code) return !1;
const n = JSON.parse(N.getItem(T) || "{}");
return N.setItem(T, JSON.stringify(d(f({}, n), {
accessToken: e.data.accessToken
}))), !0;
} catch (t) {
return !1;
}
}
globalThis.HabbyID = {
init: function(t) {
H = f({
language: "en",
clientVersion: "1.0.0",
serverType: 0
}, t);
},
setOnLogin: function(t) {
V = t;
},
setOnLogout: function(t) {
k = t;
},
setOnStateChanged: function(t) {
K.push(t);
},
checkBoundStatus: async function() {
var t;
if (!H) throw new Error("HabbyID SDK 未初始化，请先调用 init()");
const e = await B(q() + v, {
method: "POST",
headers: M(),
body: JSON.stringify({
gameId: H.gameId,
gameAccountId: H.gameAccountId
})
}), r = await e.json();
return {
isBound: "1" === (null == (t = null == r ? void 0 : r.data) ? void 0 : t.bindStatus)
};
},
getState: function() {
var t, e, r;
const i = N.getItem(T);
if (!i) return {
isBound: !1,
email: "",
habbyId: "",
accessToken: null
};
try {
const n = JSON.parse(i);
return {
isBound: !!(null == n ? void 0 : n.accessToken),
email: null != (t = null == n ? void 0 : n.email) ? t : "",
habbyId: null != (e = null == n ? void 0 : n.habbyId) ? e : "",
accessToken: null != (r = null == n ? void 0 : n.accessToken) ? r : null
};
} catch (t) {
return {
isBound: !1,
email: "",
habbyId: "",
accessToken: null
};
}
},
getUserInfo: async function() {
var t, e, r, i, n;
if (!H) throw new Error("HabbyID SDK 未初始化，请先调用 init()");
const s = N.getItem(T);
if (!s) return {
success: !1,
errorCode: 401
};
let a = null;
try {
a = null != (e = null == (t = JSON.parse(s)) ? void 0 : t.accessToken) ? e : null;
} catch (t) {}
if (!a) return {
success: !1,
errorCode: 401
};
const o = async t => {
var e, r, i;
return B(q() + w, {
method: "GET",
headers: {
"Content-Type": "application/json",
"App-Language": null != (e = null == H ? void 0 : H.language) ? e : "en",
game: null != (r = null == H ? void 0 : H.gameId) ? r : "",
clientVersion: null != (i = null == H ? void 0 : H.clientVersion) ? i : "",
Authorization: "Bearer " + t
}
});
};
try {
let t = await o(a), e = await t.json();
if (101102 === e.code) {
if (!await G()) return {
success: !1,
errorCode: 101102
};
const i = null == (r = JSON.parse(N.getItem(T) || "{}")) ? void 0 : r.accessToken;
if (!i) return {
success: !1,
errorCode: 101102
};
t = await o(i), e = await t.json();
}
if (0 !== e.code) return {
success: !1,
errorCode: e.code
};
const s = e.data, h = JSON.parse(N.getItem(T) || "{}");
return N.setItem(T, JSON.stringify(d(f({}, h), {
email: s.email,
habbyId: s.habbyId,
gameUpdatesAndNews: s.gameUpdatesAndNews,
eventsAndBonus: s.eventsAndBonus,
communityInteraction: s.communityInteraction,
shopSpecialOffer: s.shopSpecialOffer,
newsForHabby: s.newsForHabby
}))), L(), {
success: !0,
data: {
email: null != (i = s.email) ? i : "",
habbyId: null != (n = s.habbyId) ? n : "",
gameUpdatesAndNews: 1 == s.gameUpdatesAndNews,
eventsAndBonus: 1 == s.eventsAndBonus,
communityInteraction: 1 == s.communityInteraction,
shopSpecialOffer: 1 == s.shopSpecialOffer,
newsForHabby: 1 == s.newsForHabby
}
};
} catch (t) {
return {
success: !1,
errorCode: -1
};
}
},
checkEmail: async function(t) {
var e, r, i;
if (!H) throw new Error("HabbyID SDK 未初始化，请先调用 init()");
const n = await B(q() + y, {
method: "POST",
headers: M(),
body: JSON.stringify({
gameId: H.gameId,
gameAccountId: H.gameAccountId,
email: t
})
}), s = await n.json();
if (0 !== s.code) return O = !1, j = !1, {
canBind: !1,
needLogin: !1,
errorCode: s.code
};
const a = "1" === (null == (e = s.data) ? void 0 : e.bindStatus), o = 1 === (null == (r = s.data) ? void 0 : r.isSamePersonFlag) || "1" === (null == (i = s.data) ? void 0 : i.isSamePersonFlag);
O = a, j = o;
return a && !o ? {
canBind: !1,
needLogin: !1,
errorCode: 100084
} : a && o ? {
canBind: !0,
needLogin: !0
} : {
canBind: !0,
needLogin: !1
};
},
sendCode: async function(t) {
if (!H) throw new Error("HabbyID SDK 未初始化，请先调用 init()");
const e = Date.now().toString(), r = _(t, e), i = await B(q() + m, {
method: "POST",
headers: M(),
body: JSON.stringify({
gameId: H.gameId,
gameAccountId: H.gameAccountId,
email: t,
timestamp: e,
sign: r
})
}), n = await i.json();
return 0 === n.code ? {
success: !0
} : {
success: !1,
errorCode: n.code
};
},
verifyCode: async function(t, e) {
var r, i;
if (!H) throw new Error("HabbyID SDK 未初始化，请先调用 init()");
let n, s;
if (O) {
if (!j) return {
success: !1,
errorCode: 100084
};
n = "login", s = "login";
} else n = "register", s = "bind";
const a = await B(q() + x, {
method: "POST",
headers: M(),
body: JSON.stringify({
gameId: H.gameId,
gameAccountId: H.gameAccountId,
email: t,
emailCode: e,
action: n
})
}), o = await a.json();
if (0 !== o.code) return {
success: !1,
errorCode: o.code
};
const h = null != (i = null == (r = o.data) ? void 0 : r.authCode) ? i : "";
if (V && h) {
const e = await new Promise(e => {
V(h, t, s, (t, r) => e({
success: t,
errorCode: r
}));
});
if (!e.success) return {
success: !1,
errorCode: e.errorCode
};
}
return N.setItem(T, JSON.stringify(o.data)), L(), {
success: !0,
authCode: h
};
},
getCodeByClient: async function(t) {
if (!H) throw new Error("HabbyID SDK 未初始化，请先调用 init()");
const e = await B(q() + S, {
method: "POST",
headers: M(),
body: JSON.stringify({
gameId: H.gameId,
gameAccountId: H.gameAccountId,
email: t
})
}), r = await e.json();
return 0 !== r.code ? {
success: !1,
errorCode: r.code
} : {
success: !0,
data: {
emailCode: r.data.emailCode,
receiveEmail: r.data.receiveEmail
}
};
},
pollingLogin: async function(t) {
var e;
if (!H) throw new Error("HabbyID SDK 未初始化，请先调用 init()");
const r = await B(q() + E, {
method: "POST",
headers: M(),
body: JSON.stringify({
gameId: H.gameId,
gameAccountId: H.gameAccountId,
email: t,
receiveNewMessages: 0,
action: "login"
})
}), i = await r.json();
return 0 !== i.code ? {
success: !1,
errorCode: i.code
} : ((null == (e = i.data) ? void 0 : e.accessToken) && (N.setItem(T, JSON.stringify(i.data)), 
L()), {
success: !0
});
},
updateSubscription: async function(t) {
var e, r, i;
if (!H) throw new Error("HabbyID SDK 未初始化，请先调用 init()");
const n = N.getItem(T);
if (!n) return {
success: !1,
errorCode: 401
};
let s = null;
try {
s = null != (r = null == (e = JSON.parse(n)) ? void 0 : e.accessToken) ? r : null;
} catch (t) {}
if (!s) return {
success: !1,
errorCode: 401
};
const a = {}, o = {};
void 0 !== t.eventsAndBonus && (a.eventsAndBonus = t.eventsAndBonus ? 1 : 0, o.eventsAndBonus = t.eventsAndBonus);
void 0 !== t.shopSpecialOffer && (a.shopSpecialOffer = t.shopSpecialOffer ? 1 : 0, 
o.shopSpecialOffer = t.shopSpecialOffer);
void 0 !== t.gameUpdatesAndNews && (a.gameUpdatesAndNews = t.gameUpdatesAndNews ? 1 : 0, 
o.gameUpdatesAndNews = t.gameUpdatesAndNews);
void 0 !== t.communityInteraction && (a.communityInteraction = t.communityInteraction ? 1 : 0, 
o.communityInteraction = t.communityInteraction);
void 0 !== t.newsForHabby && (a.newsForHabby = t.newsForHabby ? 1 : 0, o.newsForHabby = t.newsForHabby);
if (0 === Object.keys(a).length) return {
success: !0
};
console.log("[HabbyID][updateSubscription] start " + JSON.stringify({
prefs: t,
hasToken: !!s
}));
const h = U(), u = h ? "POST" : "PATCH", c = async t => {
var e, r, i;
const n = q() + w, s = f({
"Content-Type": "application/json",
"App-Language": null != (e = null == H ? void 0 : H.language) ? e : "en",
game: null != (r = null == H ? void 0 : H.gameId) ? r : "",
clientVersion: null != (i = null == H ? void 0 : H.clientVersion) ? i : "",
Authorization: "Bearer " + t
}, h ? {
"X-HTTP-Method-Override": "PATCH"
} : {});
return console.log("[HabbyID][updateSubscription] try request " + JSON.stringify({
requestUrl: n,
method: u,
headers: d(f({}, s), {
Authorization: t ? "Bearer ***" + t.slice(-6) : ""
}),
payload: a
})), B(n, {
method: u,
headers: s,
body: JSON.stringify(a)
});
};
try {
let t = await c(s), e = await t.json();
console.log("[HabbyID][updateSubscription] response " + JSON.stringify({
status: t.status,
ok: t.ok,
code: null == e ? void 0 : e.code,
msg: null == e ? void 0 : e.msg
}));
if (101102 === e.code) {
console.warn("[HabbyID][updateSubscription] token expired, refreshing");
if (await G()) {
const r = null == (i = JSON.parse(N.getItem(T) || "{}")) ? void 0 : i.accessToken;
r && (t = await c(r), e = await t.json(), console.log("[HabbyID][updateSubscription] retry response " + JSON.stringify({
status: t.status,
ok: t.ok,
code: null == e ? void 0 : e.code,
msg: null == e ? void 0 : e.msg
})));
}
}
if (0 === e.code) {
const t = JSON.parse(N.getItem(T) || "{}");
return N.setItem(T, JSON.stringify(f(f({}, t), a))), L(), console.log("[HabbyID][updateSubscription] success"), 
{
success: !0
};
}
console.warn("[HabbyID][updateSubscription] failed " + JSON.stringify({
code: null == e ? void 0 : e.code,
msg: null == e ? void 0 : e.msg
}));
} catch (t) {
console.error("[HabbyID][updateSubscription] exception " + JSON.stringify({
error: t instanceof Error ? t.message : String(t)
}));
}
return console.error("[HabbyID][updateSubscription] all plans failed"), {
success: !1,
errorCode: -1
};
},
logout: async function(t = !0) {
if (t && N.getItem(T)) try {
await B(q() + b, {
method: "GET",
headers: M(!0)
});
} catch (t) {}
N.removeItem(T), k && await new Promise(t => {
k(e => t());
}), L();
},
clearLocalData: function() {
N.removeItem(T);
}
};
})();