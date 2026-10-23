"use strict";

(() => {
var e = Object.defineProperty, t = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable, a = (t, o, n) => o in t ? e(t, o, {
enumerable: !0,
configurable: !0,
writable: !0,
value: n
}) : t[o] = n, r = (e, r) => {
for (var s in r || (r = {})) o.call(r, s) && a(e, s, r[s]);
if (t) for (var s of t(r)) n.call(r, s) && a(e, s, r[s]);
return e;
}, s = null, d = !1, i = null, c = {
DEV: "https://dev-store.habby.com",
TEST: "https://test-store.habby.com",
PRODUCTION: "https://store.habby.com"
}, l = {
DEV: "https://dev-habbyid.habby.com",
TEST: "https://test-habbyid.habby.com",
PRODUCTION: "https://habbyid.habby.com"
};
function u() {
var e;
try {
const t = globalThis.HabbyID;
if (t && "function" == typeof t.getState) return null != (e = t.getState().accessToken) ? e : "";
} catch (e) {}
return "";
}
async function m(e, t) {
if ("undefined" != typeof fetch) {
const o = await fetch(e, t);
return {
ok: o.ok,
status: o.status,
json: () => o.json()
};
}
return new Promise((o, n) => {
const a = new globalThis.XMLHttpRequest();
a.open(t.method || "GET", e, !0), t.headers && Object.entries(t.headers).forEach(([e, t]) => a.setRequestHeader(e, t)), 
a.onload = (() => {
const e = a.status >= 200 && a.status < 300;
o({
ok: e,
status: a.status,
json: () => JSON.parse(a.responseText)
});
}), a.onerror = (() => n(new Error("Network error"))), a.send(t.body || null);
});
}
var p = null, y = null, b = null, g = null, h = null, f = null, I = null, w = null, T = null, _ = null;
function C(e, t) {
switch (e.toLowerCase()) {
case "login":
{
d = !1;
T && T();
const e = e => {
_ && _(e);
u() && s && S();
};
h ? h(e) : e(!1);
break;
}

case "paymentsuccess":
{
b && b({
goodsId: t.goodsId || t.goods_id || "",
productName: t.productName || t.product_name || "",
amount: t.amount || "",
currency: t.currency || ""
});
const e = {
orderId: t.orderId || t.order_id || "",
goodsId: t.goodsId || t.goods_id || "",
productName: t.productName || t.product_name || "",
amount: t.amount || "",
currency: t.currency || "",
paymentType: t.paymentType || t.payment_type || "",
paymentBrand: t.paymentBrand || t.payment_brand || "",
status: t.status || "success",
timestamp: t.timestamp || Date.now().toString(),
quantity: t.quantity || "1",
baseCoinNum: t.baseCoinNum || t.base_coin_num || "",
extraCoinNum: t.extraCoinNum || t.extra_coin_num || ""
};
p && p(e);
g && g({
success: !0,
message: "success",
orderId: e.orderId,
goodsId: e.goodsId
});
break;
}

case "paymentfailed":
{
const e = {
orderId: t.orderId || t.order_id || "",
goodsId: t.goodsId || t.goods_id || "",
productName: t.productName || t.product_name || "",
amount: t.amount || "",
currency: t.currency || "",
paymentType: t.paymentType || t.payment_type || "",
status: t.status || "failed",
errorCode: t.errorCode || t.error_code || t.code || "",
errorMessage: t.errorMessage || t.error_message || t.message || "",
timestamp: t.timestamp || Date.now().toString()
};
y && y(e);
g && g({
success: !1,
message: e.errorMessage
});
break;
}
}
}
"undefined" != typeof window && window.addEventListener("message", e => {
e.data && "habbystore" === e.data.type && C(e.data.command, e.data.data || {});
});
function S() {
var e, t, o;
if (!s) return;
const n = u();
if (!n) {
w && w({
errorType: "TokenError",
message: "accessToken 为空，请先登录 HabbyID"
});
return;
}
const a = (null != (e = c[s.serverType]) ? e : c.PRODUCTION) + (null != (t = s.gamePath) ? t : "") + "?accessToken=" + encodeURIComponent(n) + "&gameId=" + encodeURIComponent(s.gameId) + "&language=" + encodeURIComponent(null != (o = s.language) ? o : "en") + "&platform=web&_t=" + Date.now();
if ("undefined" != typeof document) {
let e = document.getElementById("__habbystore_iframe__");
!e && ((e = document.createElement("iframe")).id = "__habbystore_iframe__", e.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:99999;", 
document.body.appendChild(e)), e.src = a, e.style.display = "block", i = e;
}
d = !0;
f && f();
}
var k = {
init(e) {
s = r({
language: "en",
skipRegionCheck: !0,
skipEligibilityCheck: !0
}, e);
},
openStore() {
if (!s) throw new Error("HabbyStore 未初始化，请先调用 HabbyStore.init()");
S();
},
closeStore() {
i && (i.style.display = "none", i.src = "about:blank");
d = !1;
I && I();
},
isOpen: () => d,
canShowStore(e) {
var t, o, n;
if (s) if (null != (t = s.skipRegionCheck) && !t || null != (o = s.skipEligibilityCheck) && !o) if (null == (n = s.skipEligibilityCheck) || n) e(!0, "地区检查已跳过"); else {
const t = globalThis.HabbyID, o = t ? t.getState().habbyId : "";
m(l[s.serverType] + "/habbyid/payment/eligibility", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
gameId: s.gameId,
gameAccountId: o
})
}).then(async t => {
var o, n, a;
const r = await t.json();
0 === r.code ? e(!0 === (null == (o = r.data) ? void 0 : o.eligible), null != (a = null == (n = r.data) ? void 0 : n.reason) ? a : "") : e(!1, r.message || "API 错误");
}).catch(() => e(!1, "网络错误"));
} else e(!0, "检查已跳过"); else e(!1, "HabbyStore 未初始化");
},
getStoreUrl() {
var e, t, o;
if (!s) return "";
const n = u();
return (null != (e = c[s.serverType]) ? e : c.PRODUCTION) + (null != (t = s.gamePath) ? t : "") + "?accessToken=" + encodeURIComponent(n) + "&gameId=" + encodeURIComponent(s.gameId) + "&language=" + encodeURIComponent(null != (o = s.language) ? o : "en") + "&platform=android&_t=" + Date.now();
},
handleWebViewUrl(e) {
let t = "";
if (e.startsWith("habbystore://")) t = e.slice("habbystore://".length); else {
if (!e.startsWith("uniwebview://")) return;
t = e.slice("uniwebview://".length);
}
const [o, n] = t.split("?"), a = {};
n && n.split("&").forEach(e => {
const t = e.indexOf("=");
t > 0 && (a[e.slice(0, t)] = decodeURIComponent(e.slice(t + 1)));
});
if (a.data) try {
const e = JSON.parse(a.data);
C(e.command, e.data || {});
return;
} catch (e) {}
o && C(o, a);
},
onPaymentSuccess(e) {
p = e;
},
onPaymentFailure(e) {
y = e;
},
onPaymentStarted(e) {
b = e;
},
onPaymentCompleted(e) {
g = e;
},
onLoginRequired(e) {
h = e;
},
onStoreOpened(e) {
f = e;
},
onStoreClosed(e) {
I = e;
},
onError(e) {
w = e;
},
onLoginFlowStarted(e) {
T = e;
},
onLoginFlowCompleted(e) {
_ = e;
}
};
globalThis.HabbyStore = k;
})();