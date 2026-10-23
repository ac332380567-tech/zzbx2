var hexcase = 0, b64pad = "", chrsz = 8;

let lmd5 = {};

function md5_vm_test() {
return "96e79218965eb72c92a549dd5a330112" == hex_md5("111111");
}

function core_md5(d, m) {
d[m >> 5] |= 128 << m % 32;
d[14 + (m + 64 >>> 9 << 4)] = m;
for (var r = 1732584193, _ = -271733879, n = -1732584194, h = 271733878, t = 0; t < d.length; t += 16) {
var i = r, f = _, e = n, c = h;
_ = md5_ii(_ = md5_ii(_ = md5_ii(_ = md5_ii(_ = md5_hh(_ = md5_hh(_ = md5_hh(_ = md5_hh(_ = md5_gg(_ = md5_gg(_ = md5_gg(_ = md5_gg(_ = md5_ff(_ = md5_ff(_ = md5_ff(_ = md5_ff(_, n = md5_ff(n, h = md5_ff(h, r = md5_ff(r, _, n, h, d[t + 0], 7, -680876936), _, n, d[t + 1], 12, -389564586), r, _, d[t + 2], 17, 606105819), h, r, d[t + 3], 22, -1044525330), n = md5_ff(n, h = md5_ff(h, r = md5_ff(r, _, n, h, d[t + 4], 7, -176418897), _, n, d[t + 5], 12, 1200080426), r, _, d[t + 6], 17, -1473231341), h, r, d[t + 7], 22, -45705983), n = md5_ff(n, h = md5_ff(h, r = md5_ff(r, _, n, h, d[t + 8], 7, 1770035416), _, n, d[t + 9], 12, -1958414417), r, _, d[t + 10], 17, -42063), h, r, d[t + 11], 22, -1990404162), n = md5_ff(n, h = md5_ff(h, r = md5_ff(r, _, n, h, d[t + 12], 7, 1804603682), _, n, d[t + 13], 12, -40341101), r, _, d[t + 14], 17, -1502002290), h, r, d[t + 15], 22, 1236535329), n = md5_gg(n, h = md5_gg(h, r = md5_gg(r, _, n, h, d[t + 1], 5, -165796510), _, n, d[t + 6], 9, -1069501632), r, _, d[t + 11], 14, 643717713), h, r, d[t + 0], 20, -373897302), n = md5_gg(n, h = md5_gg(h, r = md5_gg(r, _, n, h, d[t + 5], 5, -701558691), _, n, d[t + 10], 9, 38016083), r, _, d[t + 15], 14, -660478335), h, r, d[t + 4], 20, -405537848), n = md5_gg(n, h = md5_gg(h, r = md5_gg(r, _, n, h, d[t + 9], 5, 568446438), _, n, d[t + 14], 9, -1019803690), r, _, d[t + 3], 14, -187363961), h, r, d[t + 8], 20, 1163531501), n = md5_gg(n, h = md5_gg(h, r = md5_gg(r, _, n, h, d[t + 13], 5, -1444681467), _, n, d[t + 2], 9, -51403784), r, _, d[t + 7], 14, 1735328473), h, r, d[t + 12], 20, -1926607734), n = md5_hh(n, h = md5_hh(h, r = md5_hh(r, _, n, h, d[t + 5], 4, -378558), _, n, d[t + 8], 11, -2022574463), r, _, d[t + 11], 16, 1839030562), h, r, d[t + 14], 23, -35309556), n = md5_hh(n, h = md5_hh(h, r = md5_hh(r, _, n, h, d[t + 1], 4, -1530992060), _, n, d[t + 4], 11, 1272893353), r, _, d[t + 7], 16, -155497632), h, r, d[t + 10], 23, -1094730640), n = md5_hh(n, h = md5_hh(h, r = md5_hh(r, _, n, h, d[t + 13], 4, 681279174), _, n, d[t + 0], 11, -358537222), r, _, d[t + 3], 16, -722521979), h, r, d[t + 6], 23, 76029189), n = md5_hh(n, h = md5_hh(h, r = md5_hh(r, _, n, h, d[t + 9], 4, -640364487), _, n, d[t + 12], 11, -421815835), r, _, d[t + 15], 16, 530742520), h, r, d[t + 2], 23, -995338651), n = md5_ii(n, h = md5_ii(h, r = md5_ii(r, _, n, h, d[t + 0], 6, -198630844), _, n, d[t + 7], 10, 1126891415), r, _, d[t + 14], 15, -1416354905), h, r, d[t + 5], 21, -57434055), n = md5_ii(n, h = md5_ii(h, r = md5_ii(r, _, n, h, d[t + 12], 6, 1700485571), _, n, d[t + 3], 10, -1894986606), r, _, d[t + 10], 15, -1051523), h, r, d[t + 1], 21, -2054922799), n = md5_ii(n, h = md5_ii(h, r = md5_ii(r, _, n, h, d[t + 8], 6, 1873313359), _, n, d[t + 15], 10, -30611744), r, _, d[t + 6], 15, -1560198380), h, r, d[t + 13], 21, 1309151649), n = md5_ii(n, h = md5_ii(h, r = md5_ii(r, _, n, h, d[t + 4], 6, -145523070), _, n, d[t + 11], 10, -1120210379), r, _, d[t + 2], 15, 718787259), h, r, d[t + 9], 21, -343485551);
r = safe_add(r, i);
_ = safe_add(_, f);
n = safe_add(n, e);
h = safe_add(h, c);
}
return Array(r, _, n, h);
}

function md5_cmn(d, m, r, _, n, h) {
return safe_add(bit_rol(safe_add(safe_add(m, d), safe_add(_, h)), n), r);
}

function md5_ff(d, m, r, _, n, h, t) {
return md5_cmn(m & r | ~m & _, d, m, n, h, t);
}

function md5_gg(d, m, r, _, n, h, t) {
return md5_cmn(m & _ | r & ~_, d, m, n, h, t);
}

function md5_hh(d, m, r, _, n, h, t) {
return md5_cmn(m ^ r ^ _, d, m, n, h, t);
}

function md5_ii(d, m, r, _, n, h, t) {
return md5_cmn(r ^ (m | ~_), d, m, n, h, t);
}

function core_hmac_md5(d, m) {
var r = str2binl(d);
r.length > 16 && (r = core_md5(r, d.length * chrsz));
for (var _ = Array(16), n = Array(16), h = 0; h < 16; h++) {
_[h] = 909522486 ^ r[h];
n[h] = 1549556828 ^ r[h];
}
var t = core_md5(_.concat(str2binl(m)), 512 + m.length * chrsz);
return core_md5(n.concat(t), 640);
}

function safe_add(d, m) {
var r = (65535 & d) + (65535 & m);
return (d >> 16) + (m >> 16) + (r >> 16) << 16 | 65535 & r;
}

function bit_rol(d, m) {
return d << m | d >>> 32 - m;
}

function str2binl(d) {
for (var m = Array(), r = (1 << chrsz) - 1, _ = 0; _ < d.length * chrsz; _ += chrsz) m[_ >> 5] |= (d.charCodeAt(_ / chrsz) & r) << _ % 32;
return m;
}

function binl2str(d) {
for (var m = "", r = (1 << chrsz) - 1, _ = 0; _ < 32 * d.length; _ += chrsz) m += String.fromCharCode(d[_ >> 5] >>> _ % 32 & r);
return m;
}

function binl2hex(d) {
for (var m = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", _ = 0; _ < 4 * d.length; _++) r += m.charAt(d[_ >> 2] >> _ % 4 * 8 + 4 & 15) + m.charAt(d[_ >> 2] >> _ % 4 * 8 & 15);
return r;
}

function binl2b64(d) {
for (var m = "", r = 0; r < 4 * d.length; r += 3) for (var _ = (d[r >> 2] >> r % 4 * 8 & 255) << 16 | (d[r + 1 >> 2] >> (r + 1) % 4 * 8 & 255) << 8 | d[r + 2 >> 2] >> (r + 2) % 4 * 8 & 255, n = 0; n < 4; n++) 8 * r + 6 * n > 32 * d.length ? m += b64pad : m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(_ >> 6 * (3 - n) & 63);
return m;
}

lmd5.hex_md5 = function(d) {
return binl2hex(core_md5(str2binl(d), d.length * chrsz));
};

lmd5.b64_md5 = function(d) {
return binl2b64(core_md5(str2binl(d), d.length * chrsz));
};

lmd5.str_md5 = function(d) {
return binl2str(core_md5(str2binl(d), d.length * chrsz));
};

lmd5.hex_hmac_md5 = function(d, m) {
return binl2hex(core_hmac_md5(d, m));
};

lmd5.b64_hmac_md5 = function(d, m) {
return binl2b64(core_hmac_md5(d, m));
};

lmd5.str_hmac_md5 = function(d, m) {
return binl2str(core_hmac_md5(d, m));
};

window.lmd5 = lmd5;