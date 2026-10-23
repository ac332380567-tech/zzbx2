if (window.qq) {
lmd5 = window.lmd5;
var _this;
class e {
constructor(e) {
var o = this;
try {
if (this.isInit = !1, this.isLogin = !1, this.isRightParams = !1, this.roleLoginData, 
this.channelTokenK = "abcdefghijklmn", this.pMoney = "1", this.channelArr = [ "meituan", "vivo", "oppo", "qq", "uc", "xiaomi", "weixin", "bili", "weixinGame", "ZJSILANG", "DALU", "MIQI", "shouqDYB", "lwsdkwx", "ucmoy", "kuaishou", "douyinGame" ], 
this.qqOppId = "", this.xiaomisession = "", this.xiaomiACCOUNTID = "", this.wxADquery = "", 
this.wxADweixinadinfo = "", this.ttclue_token = "", this.ttad_id = "", this.ttcreative_id = "", 
this.czzzPlatform = "android", this.czzzPlatMode = "HUAWEI", this.czzzPlatSystem = "Android9.0", 
this.czzzPaltInfoJson = {}, !o.isEmpty(e) || !o.isEmpty(!e.channelType) || !o.isEmpty(!e.appID)) for (var s in this.channelArr) e.channelType === this.channelArr[s] && (o.isInit = !0, 
this.isRightParams = !0);
if (!this.isRightParams) return console.log("初始化参数/设置渠道类型错误channelType:" + e.channelType + " gameAbb:" + e.appID), 
!1;
switch (this.configure = {
url: "https://zzh5.xiaomaigame.cn/",
urlSDK: "https://zzsdk.xiaomaigame.cn/",
channelType: e.channelType,
appID: e.appID,
channelID: e.channelID,
debug: e.debug,
CHANNELAPPID: e.CYAPPID,
CHANNELAPPKEY: e.CYAPPKEY,
CHANNELAPPCID: e.CYAPPCID
}, this.configure.channelType) {
case "kuaishou":
console.log("=>初始化kuaishou成功");
break;

case "douyinGame":
console.log("=>初始化douyinGame成功");
break;

case "oppo":
qg.getSystemInfo({
success: e => {
this.isInit = !0, this.oppoConfigure = e, window.Global = {
platformVersion: e.platformVersion
}, console.log("=>初始化oppo成功");
},
fail: e => {
o.message("获取系统信息出错" + JSON.stringify(e));
}
});
break;

case "ZJSILANG":
console.log("初始化ZJSILANG"), mlh5.init({
appId: this.configure.CHANNELAPPID,
channelId: this.configure.CHANNELAPPCID,
appKey: this.configure.CHANNELAPPKEY,
version: "1.0.1",
callback: () => {
console.log("【初始化ZJSILANG】"), o.isInit = !0;
}
});
break;

case "lwsdkwx":
console.log("【初始化 lwsdkwx】");
break;

case "qq":
console.log("【初始化 QQ】"), qq.showShareMenu({
showShareItems: [ "qq", "qzone", "wechatFriends", "wechatMoment" ]
}), qq.onShareAppMessage(() => ({
title: "QQ小游戏",
imageUrl: ""
})), o.isInit = !0;
break;

case "ucmoy":
console.log("【初始化 UCMoY】");
var n = {
url: "https://cps.moyangmoyang.com",
appid: this.configure.CHANNELAPPID,
pay_biz_id: this.configure.CHANNELAPPKEY
};
Sdk.init(n);
break;

case "weixinGame":
console.log("【初始化 weixinGame】"), console.log("【初始化 weixinGameTT】:" + this.wxADquery);
o = this;
var t = (console.log("V0 getLaunchOptionsSync 获取的数据 >>>>> "), wx.getLaunchOptionsSync());
console.log("V1 getLaunchOptionsSync 获取的数据 >>>>> " + JSON.stringify(t)), o.wxADquery = t.query, 
console.log("V1 getLaunchOptionsSync 获取的数据 >>>>> " + JSON.stringify(o.wxADquery)), 
wx.onShow(e => {
o.wxADquery = e.query, o.showDLog("V2 来源⼴告id：" + JSON.stringify(o.wxADquery)), o.wxADquery.gdt_vid && o.wxADquery.weixinadinfo && (o.wxADweixinadinfo = o.wxADquery.weixinadinfo), 
o.wxADweixinadinfo && (e = o.wxADweixinadinfo.split("."), console.log("V2 wxad - 来源⼴告的⼴告wxADaid是 ：" + e[0])), 
o.wxADquery = JSON.stringify(o.wxADquery);
});
break;

default:
o.isInit = !0;
}
this.isInit ? (this.isInit = !0, console.log(" 初始化成功 MiniSDK Version：2004  .Support ZADVS")) : console.log("初始化失败，请检查参数是否完整");
} catch (e) {
console.log("初始化错误" + e.toString());
}
}
onShareAppMessageListener(e, o, s, n) {
var t = this;
if (console.log("右上角监听分享"), "qq" == t.configure.channelType) {
var a = "" == e ? "" : "&" + e;
let i = {
cid: t.configure.channelID,
shareId: 1
}, r = {};
t.httpRequestPay({
url: "sdk/xyxShare",
method: "POST",
data: i,
success: function(c) {
1 == c.state ? r = JSON.parse(c.extension) : (r.title = o, r.imageUrl = s), qq.onShareAppMessage(() => ({
title: r.title,
imageUrl: r.imageUrl,
query: "openid=" + t.roleLoginData.sdkUserID + a,
success: function(o) {
n(1, e);
},
fail: function(o) {
n(0, e);
},
complete: function(e) {
t.httpRequestPay({
url: "sdk/xyxShare",
method: "POST",
data: i,
success: function(e) {
1 == e.state ? r = JSON.parse(e.extension) : (r.title = o, r.imageUrl = s);
},
error: function(e) {
t.showDLog("error====失败onShareAppMessage");
}
});
}
}));
},
error: function(o) {
t.showDLog("error====失败onShareAppMessage" + o), n(0, e);
}
});
}
}
isEmpty(e) {
return null == typeof e || !e || null == e || "" == e;
}
message(e) {
"vivo" == this.configure.channelType ? qg.showToast({
message: e,
duration: 1
}) : console.log(e);
}
showDLog(e) {
"60001" === this.configure.debug ? console.log("ZJ ** " + e) : "80001" === this.configure.debug && (this.configure.url = "http://testh5.xiaomaigame.cn/", 
this.configure.urlSDK = "http://testsdk.xiaomaigame.cn/", console.log("ZJ TT** " + e));
}
httpRequestUpdate(e) {
var o = this;
if ("qq" === this.configure.channelType) {
o.showDLog("------------httpRequest qq update x-------------");
var s = qq.getSystemInfoSync(), n = (s = JSON.stringify(s), this.changePostToGetParamRemoveExt(e.data)), t = (o.showDLog("N update post1:" + n), 
n + "&updateExt=" + encodeURIComponent(s)), a = o.configure.url + e.url + "?" + t;
qq.request({
url: a,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
o.showDLog("N 上报获取返回数据Suc"), o.showDLog("N " + JSON.stringify(s.data)), e.success(JSON.stringify(s.data));
},
fail(e) {
o.showDLog("qq请求失败fail：" + JSON.stringify(e));
}
});
} else if ("vivo" === this.configure.channelType) {
o.showDLog("------------httpRequest vivo update x-------------");
var i = qg.getSystemInfoSync();
s = JSON.stringify(i), n = this.changePostToGetParamRemoveExt(e.data), t = (o.showDLog("N update post1:" + n), 
n + "&updateExt=" + encodeURIComponent(s)), a = o.configure.url + e.url + "?" + t;
qg.request({
url: a,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
o.showDLog("N 上报返回获取返回数据Suc"), o.showDLog("N " + JSON.stringify(s.data)), e.success(JSON.stringify(s.data));
},
fail(e) {
o.showDLog("qq请求失败fail：" + JSON.stringify(e));
}
});
} else if ("uc" === this.configure.channelType && "string" == typeof (i = uc.getSystemInfoSync())) try {
i = JSON.parse(i), s = JSON.stringify(i);
var r = (n = this.changePostToGetParamRemoveExt(e.data)) + "&updateExt=" + encodeURIComponent(s), c = (a = o.configure.url + e.url + "?" + r, 
o.showDLog("N httpRequest uc 。。。"), new XMLHttpRequest());
c.open(e.method, a, !0), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
c.onreadystatechange = (() => {
4 == c.readyState && 200 == c.status ? e.success(c.responseText) : (o.showDLog("ing……" + c.responseText), 
e.error(c.responseText));
}), c.send(e.data);
} catch (s) {
o.showDLog("N uc post catch:" + s);
}
}
httpRequest(e) {
var o, s, n, t, a = this;
try {
"[object Object]" === String(e) && (s = this.configure.url + e.url, "GET" === e.method ? (o = Object.keys(e.data).map(function(o) {
return encodeURIComponent(o) + "=" + encodeURIComponent(e.data[o]);
}).join("&"), s = s + "?channelType=" + a.configure.channelType + "&" + o) : "bili" === this.configure.channelType ? s = s + "?channelType=" + a.configure.channelType + "&data=" + e.data : "qq" !== this.configure.channelType && "shouqDYB" !== this.configure.channelType && "vivo" !== this.configure.channelType || (s = s + "?channelType=" + a.configure.channelType + "&" + e.data), 
"vivo" === this.configure.channelType ? qg.request({
url: s,
success: o => {
a.showDLog("获取vivo返回数据Suc"), a.showDLog(JSON.stringify(o.data)), e.success(JSON.stringify(o.data));
},
fail: (o, s) => {
a.showDLog("获取vivo返回数据fail" + s + " error:" + o), e.error(o);
}
}) : "qq" === this.configure.channelType ? (a.showDLog("调用qq请求"), qq.request({
url: s,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("获取qq返回数据Suc"), a.showDLog(JSON.stringify(o.data)), e.success(JSON.stringify(o.data));
},
fail(e) {
a.showDLog("qq请求失败fail：" + JSON.stringify(e));
}
})) : "weixin" === this.configure.channelType ? wx.request({
url: s,
method: "POST",
data: e.data,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("------------httpRequest weixin1 -------------");
o = JSON.stringify(o.data);
e.success(o), a.showDLog("------------httpRequest weixin2 -------------");
},
fail(e) {
a.showDLog("------------httpRequest weixin3 -------------"), a.showDLog("--weixin3 login fail--");
}
}) : "weixinGame" === this.configure.channelType ? (a.showDLog("------------weixinGameV2.0 -------------\x3e>" + this.configure.CHANNELAPPID), 
wx.request({
url: s,
method: "POST",
data: e.data,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("------------httpRequest weixinGame11 -------------");
o = JSON.stringify(o.data);
e.success(o), a.showDLog("------------httpRequest weixinGame22 -------------");
},
fail(e) {
a.showDLog("------------httpRequest weixinGame33 -------------"), a.showDLog("--weixinGame login fail--");
}
})) : "douyinGame" === this.configure.channelType ? (a.showDLog("------------douyinGameV2.0 -------------\x3e>" + this.configure.CHANNELAPPID), 
tt.request({
url: s,
method: "POST",
data: e.data,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("------------httpRequest douyinGame11 -------------");
o = JSON.stringify(o.data);
e.success(o), a.showDLog("------------httpRequest douyinGame 22 -------------");
},
fail(e) {
a.showDLog("------------httpRequest douyinGame 33 -------------"), a.showDLog("--douyinGame login fail--");
}
})) : "kuaishou" === this.configure.channelType ? (a.showDLog("------------kuaishouV2.0 -------------\x3e>" + this.configure.CHANNELAPPID), 
wx.request({
url: s,
method: "POST",
data: e.data,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("------------httpRequest kuaishou11 -------------");
o = JSON.stringify(o.data);
e.success(o), a.showDLog("------------httpRequest kuaishou22 -------------");
},
fail(e) {
a.showDLog("------------httpRequest kuaishou33 -------------"), a.showDLog("--kuaishou login fail--");
}
})) : "bili" === this.configure.channelType ? bl.request({
url: s,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("获取bili返回数据"), a.showDLog(o.data), e.success(o.data);
},
fail(e) {
a.showDLog("bili请求失败");
}
}) : "meituan" === this.configure.channelType ? wx.request({
url: s,
method: "POST",
data: e.data,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("------------httpRequest meituan1 -------------");
o = JSON.stringify(o.data);
e.success(o), a.showDLog("------------httpRequest meituan2 -------------");
},
fail(e) {
a.showDLog("------------httpRequest meituan3 -------------"), a.showDLog("--meituan login fail--");
}
}) : "oppo" === this.configure.channelType || "xiaomi" == this.configure.channelType ? (a.showDLog("--oppo post:" + e.data), 
a.showDLog("--oppo post:" + s), (n = new XMLHttpRequest()).open(e.method, s, !0), 
n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.showDLog("--oppo post................:"), 
n.onreadystatechange = (() => {
4 == n.readyState && 200 == n.status ? (a.showDLog("oppo post suc:" + n.responseText), 
e.success(n.responseText)) : (a.showDLog("ing……" + n.responseText), e.error(n.responseText));
}), n.send(e.data)) : "uc" === this.configure.channelType || "ucmoy" === this.configure.channelType ? (a.showDLog("《------------httpRequest uc x-------------》"), 
n = new XMLHttpRequest(), t = null, a.showDLog("post request ucmoy:"), "GET" === e.method ? (a.showDLog("get:"), 
n.open(e.method, s + t, !0)) : (a.showDLog("post port:"), n.open(e.method, s, !0), 
t = "channelID=" + this.configure.channelID + "&appID=" + this.configure.appID + "&extension=" + e.data), 
a.showDLog("post send:" + t), n.onreadystatechange = function() {
4 === n.readyState && 200 === n.status && e.success && "function" == typeof e.success ? e.success(n.response) : e.error && "function" == typeof e.error && (a.showDLog("请求中……:" + n.readyState), 
e.error());
}, n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(t)) : "ZJSILANG" === this.configure.channelType ? (a.showDLog("请求中……:"), 
wx.request({
url: s,
method: "POST",
data: e.data,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("------------httpRequest ZJSILANG11 -------------");
o = JSON.stringify(o.data);
a.showDLog("------------httpRequest -------------" + o), e.success(o), a.showDLog("------------httpRequest ZJSILANG22 -------------");
},
fail(o) {
a.showDLog("------------httpRequest ZJSILANG33 -------------"), a.showDLog("--ZJSILANG login fail--"), 
e.error();
}
})) : "lwsdkwx" === this.configure.channelType ? (a.showDLog("请求中……:"), wx.request({
url: s,
method: "POST",
data: e.data,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("------------httpRequest lwsdkwx 1 -------------");
o = JSON.stringify(o.data);
a.showDLog("------------httpRequest -------------" + o), e.success(o), a.showDLog("------------httpRequest lwsdkwx 2 -------------");
},
fail(o) {
a.showDLog("------------httpRequest lwsdkwx 3 -------------"), a.showDLog("--ZJSILANG login fail--"), 
e.error();
}
})) : "shouqDYB" === this.configure.channelType ? (a.showDLog("URL default " + e.method), 
window.XMLHttpRequest ? (n = new XMLHttpRequest(), a.showDLog("XMLHttpRequest is ok.")) : window.ActiveXObject ? (n = new ActiveXObject("Microsoft.XMLHTTP"), 
a.showDLog("XMLHTTP is ActiveXObject.")) : a.showDLog("XMLHTTP is null."), a.showDLog("Your browser does not support XMLHTTP.Now .We are Use Request"), 
qq.request({
url: s,
data: {
x: "$",
y: "$"
},
header: {
"content-type": "application/x-www-form-urlencoded"
},
success(o) {
a.showDLog("获取返回数据"), a.showDLog(JSON.stringify(o.data)), e.success(JSON.stringify(o.data));
},
fail(e) {
a.showDLog("qq请求失败");
}
})) : (a.showDLog("NO.1 Please scontact Developer ."), e.method = e.method ? e.method.toUpperCase() : "GET", 
n = new XMLHttpRequest(), t = null, n.responseType = e.responseType || "json", "GET" === e.method ? (a.showDLog("get:"), 
n.open(e.method, s + t, !0)) : (a.showDLog("post d:"), n.open(e.method, s, !0), 
t = "channelID=" + this.configure.channelID + "&appID=" + this.configure.appID + "&extension=" + e.data, 
a.showDLog("post:" + t)), n.onreadystatechange = function() {
4 === n.readyState && 200 === n.status && e.success && "function" == typeof e.success ? (a.showDLog("ok:"), 
e.success(n.response)) : e.error && "function" == typeof e.error && e.error();
}, a.showDLog("post send:" + t), n.send(t)));
} catch (o) {
this.showDLog("发送信息到服务器出错:" + o);
}
}
toLogin(e) {
var o = this;
try {
switch (o.showDLog("发起了" + o.configure.channelType + "登陆"), o.configure.channelType) {
case "kuaishou":
ks.login({
success: s => {
console.log("登录成功，gameUserId值为${result.gameUserId}" + s.gameUserId), console.log("登录成功，gameToken值为${result.gameToken}" + s.gameToken);
s = {
userId: s.gameUserId,
token: s.gameToken
}, o.showDLog("<-- login 01010101010101010101 --\x3e" + JSON.stringify(s)), s = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + JSON.stringify(s);
o.sendLogin(s, e);
},
fail: o => {
console.log("kuaishou登录失败:" + JSON.stringify(o)), e(0, JSON.stringify(o));
}
});
break;

case "douyinGame":
tt.login({
force: !0,
success(s) {
console.log(`login 调用成功${s.code} ` + s.anonymousCode), console.log("登录成功，gameUserId值为${result.gameUserId}" + s.code), 
console.log("登录成功，gameUserId值为${result.anonymousCode}" + s.anonymousCode);
s = {
code: s.code,
token: s.code,
anonymousCode: s.anonymousCode
}, o.showDLog("<-- login 01010101010101010101 --\x3e" + JSON.stringify(s)), s = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + JSON.stringify(s);
o.sendLogin(s, e);
},
fail(o) {
console.log("douyin login 调用失败"), e(0, JSON.stringify(o));
}
});
break;

case "ucmoy":
Sdk.getUserInfo(function(s) {
console.log("ucmoy----\x3e:", s), console.log("ucmoy----\x3e:", s.openid), o.sendLogin(s.openid, e);
});
break;

case "vivo":
1053 <= qg.getSystemInfoSync().platformVersionCode ? qg.login().then(s => {
o.czzzPaltInfoJson = {
code: s.data.token,
czzzPlatform: o.czzzPlatform,
czzzPlatMode: o.czzzPlatMode,
czzzPlatSystem: o.czzzPlatSystem
};
var n = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + encodeURIComponent(JSON.stringify(o.czzzPaltInfoJson));
o.channelTokenK = s.data.token, o.sendLogin(n, e);
}, s => {
o.handleVivoErr("登录失败", "请点击确认按钮重新登录", e);
}) : qg.authorize({
type: "token",
success: s => {
qg.getProfile({
token: s.token,
success: n => {
o.czzzPaltInfoJson = {
code: s.data.token,
czzzPlatform: o.czzzPlatform,
czzzPlatMode: o.czzzPlatMode,
czzzPlatSystem: o.czzzPlatSystem
};
var t = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + encodeURIComponent(JSON.stringify(o.czzzPaltInfoJson));
o.channelTokenK = s.data.token, o.sendLogin(t, e);
},
fail: (s, n) => {
o.handleVivoErr("温馨提示", "获取用户信息失败，请重新授权获取", e);
}
});
},
fail: s => {
o.handleVivoErr("温馨提示", "未授权登录无法畅玩游戏哦～，请点击下面按钮重新登录", e);
}
});
break;

case "oppo":
console.log("oppo go:"), qg.login({
success: function(s) {
var n = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + s.data.token;
o.channelTokenK = s.data.token, o.sendLogin(n, e);
},
fail: function(s) {
o.showDLog("-oppo登陆failed-:" + JSON.stringify(s)), e(0, s);
}
});
break;

case "qq":
qq.login({
success: s => {
if (s.code) {
var n = qq.getSystemInfoSync(), t = qq.getLaunchOptionsSync();
try {
var a = qq.getSystemInfoSync();
o.czzzPlatform = a.platform, o.czzzPlatMode = a.model, o.czzzPlatSystem = a.system;
} catch (s) {
o.showDLog("login platform error.but login is ok----\x3e"), o.czzzPlatform = "android";
}
o.czzzPaltInfoJson = {
code: s.code,
czzzPlatform: o.czzzPlatform,
czzzPlatMode: o.czzzPlatMode,
czzzPlatSystem: o.czzzPlatSystem,
addPlatform: n,
addLaunchInfo: t
};
a = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + encodeURIComponent(JSON.stringify(o.czzzPaltInfoJson));
o.showDLog("qq login platform ----\x3e+" + JSON.stringify(a)), o.sendLogin(a, e);
} else o.showDLog("登录失败！" + s.errMsg), e(0, s.errMsg);
}
});
const s = qq.getUpdateManager();
s.onCheckForUpdate(function(e) {
console.log(e.hasUpdate);
}), s.onUpdateReady(function() {
qq.showModal({
title: "更新提示",
content: "新版本已经准备好，是否重启应用？",
success(e) {
e.confirm && s.applyUpdate();
}
});
}), s.onUpdateFailed(function() {});
break;

case "weixin":
o.showDLog("登录weixin小程序"), wx.login({
success: s => {
var n;
s.code ? (n = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + s.code, 
o.showDLog("login----\x3e"), o.sendLogin(n, e)) : (o.showDLog("登录失败！" + s.errMsg), 
e(0, s.errMsg));
}
});
break;

case "weixinGame":
o.showDLog("------------登录weixinGame小游戏-----------"), wx.login({
success: s => {
if (s.code) {
try {
var n = wx.getSystemInfoSync();
o.showDLog(n.model), o.showDLog(n.platform), t = n.platform;
} catch (s) {
o.showDLog("login platform error.but login is ok----\x3e"), czPayParam.channelExt = "android";
}
n = {
code: s.code,
wxPlatform: t,
wxADquery: o.wxADquery,
wxADgdt_vid: o.wxADgdt_vid,
wxADweixinadinfo: o.wxADweixinadinfo,
wxADaid: o.wxADaid
};
var t = (o.showDLog("<-- login 01010101010101010101 --\x3e" + JSON.stringify(n)), 
"channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + JSON.stringify(n));
o.sendLogin(t, e);
} else o.showDLog("登录失败！" + s.errMsg), e(0, s.errMsg);
}
});
break;

case "meituan":
o.showDLog("login----\x3emeituanmeituan"), wx.login({
success: s => {
var n;
s.code ? (n = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + s.code, 
o.showDLog("login----\x3e"), o.sendLogin(n, e)) : (o.showDLog("mgc登录失败！" + s.errMsg), 
e(0, s.errMsg));
}
});
break;

case "uc":
uc.login({
success: function(s) {
o.showDLog("-----》UC登录成功" + s.code), o.sendLogin(s.code, e), o.channelTokenK = s.code + "";
},
fail: function(e) {
o.showDLog("登录失败", e);
}
});
break;

case "xiaomi":
qg.login({
success: function(s) {
o.showDLog("登录成功xm" + s.data.appAccountId), o.showDLog("登录成功xm" + s.data.session), 
o.czzzPaltInfoJson = {
appAccountId: s.data.appAccountId,
session: s.data.session
}, o.showDLog("xm login platform ----\x3e+" + JSON.stringify(o.czzzPaltInfoJson));
var n = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + encodeURIComponent(JSON.stringify(o.czzzPaltInfoJson));
o.sendLogin(n, e), o.xiaomisession = s.data.session, o.xiaomiACCOUNTID = s.data.appAccountId;
},
fail: function(s) {
o.showDLog("登录失败xm" + s), e(0, "登录失败:" + JSON.stringfy(s));
}
});
break;

case "bili":
bl.login({
success: s => {
s.code ? o.sendLogin({
code: s.code
}, e) : (o.showDLog("登录失败！" + s.errMsg), e(0, s.errMsg));
}
});
break;

case "ZJSILANG":
o.showDLog("login----\x3eZJSILANG"), mlh5.login({
callback: s => {
var n, t = s.userToken;
o.showDLog("login----\x3eZJSILANG: " + JSON.stringify(s)), t ? (n = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + encodeURIComponent(s.userToken), 
o.showDLog("login----\x3e"), o.sendLogin(n, e), console.log("[客户端] 登录成功", t)) : (o.showDLog("登录失败！" + s), 
e(0, s));
}
});
break;

case "shouqDYB":
o.showDLog("login----\x3eshouqDYB"), qq.dyb.getDybUserInfo(function(s) {
var n;
null != s.user && (n = s.user.openid, s = s.user.sign, n = {
app_id: o.configure.app_id,
openid: n,
sign: s
}, s = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + encodeURIComponent(JSON.stringify(n)), 
o.sendLogin(s, e));
});
break;

case "lwsdkwx":
sdk.WeChatLoginNoAuth({
debug: !0,
game: "yinyangjie-weixin",
version: "1.0.0",
dev_platform: "weixin",
callback: (s, n) => {
s && n ? (o.showDLog("初始化成功:" + JSON.stringify(s), n), sdk.onShareAppMessage(), 
n = "channelID=" + o.configure.channelID + "&appID=" + o.configure.appID + "&extension=" + encodeURIComponent(JSON.stringify(s)), 
o.sendLogin(n, e)) : (o.showDLog("-> sdk初始化失败，重试。"), setTimeout(() => {}, 1e3));
}
});
break;

default:
this.showDLog("=调用登陆类型错误="), e(0, "调用登陆类型错误");
}
} catch (o) {
e(0, o), this.showDLog("发起登陆发生错误" + o.toString());
}
}
sendLogin(e, o) {
var s = this;
try {
this.showDLog("-SDK Request..." + e), s.httpRequest({
url: "sdk/getWdToken",
method: "POST",
data: e,
success: function(e) {
var n;
1 === (e = JSON.parse(e)).state ? (s.isLogin = !0, s.showDLog("-SDK 返回LOGIN信息成功" + e.data), 
"meituan" === s.configure.channelType ? (s.showDLog("-SDK post:"), s.roleLoginData = e.data, 
n = JSON.parse(s.roleLoginData.extension), s.channelTokenK = n.accessToken, s.showDLog("==》MT返回登陆信息成功" + s.channelTokenK)) : s.roleLoginData = e.data, 
o(1, e.data)) : (s.showDLog("-SDK 返回登陆信息失败Failed..."), o(e.state, e.msg));
},
error: function(e) {
s.showDLog("-SDK 返回登陆信息error失败：轮询"), o(-1, "获取失败，请求获取中……");
}
});
} catch (e) {
this.showDLog("sendLogin" + e), o(0, "sendLogin" + e);
}
}
handleVivoErr(e, o, s) {
qg.showDialog({
title: e,
message: o,
buttons: [ {
text: "确定",
color: "#000000"
} ],
success: () => {
_this.login(s);
},
cancel: e => {
qg.exitApplication();
}
});
}
toPay(e, o) {
try {
var s = this;
if (!e || null == e || !this.isInit || !this.isLogin) return o(0, "请检查支付参数、是否完成初始化及登陆"), 
s.showDLog("请检查支付参数、是否完成初始化及登陆"), !1;
if (e.appID = this.configure.appID, e.userID = this.roleLoginData.userID, this.pMoney = e.money, 
"oppo" === s.configure.channelType || "uc" === s.configure.channelType || "xiaomi" === s.configure.channelType || "meituan" === s.configure.channelType || "vivo" === s.configure.channelType || "weixin" === s.configure.channelType || "weixinGame" === s.configure.channelType || "ZJSILANG" === s.configure.channelType || "qq" === s.configure.channelType || "shouqDYB" === this.configure.channelType || "lwsdkwx" === this.configure.channelType || "ucmoy" === this.configure.channelType || "kuaishou" === this.configure.channelType || "douyinGame" === this.configure.channelType) {
if ("weixinGame" === s.configure.channelType) {
e.channelExt = "";
try {
var n = wx.getSystemInfoSync();
s.showDLog(n.model), s.showDLog(n.platform), e.channelExt = n.platform;
} catch (n) {
s.showDLog("login platform error.but login is ok----\x3e"), e.channelExt = "android";
}
} else if ("qq" === s.configure.channelType) {
e.channelExt = "";
try {
var t = qq.getSystemInfoSync();
s.showDLog(t.model), s.showDLog(t.platform), e.channelExt = t.platform;
} catch (n) {
s.showDLog("login platform error.but login is ok----\x3e"), e.channelExt = "android";
}
} else if ("kuaishou" === s.configure.channelType) {
e.channelExt = "";
try {
var a = ks.getSystemInfoSync();
s.showDLog(a.model), s.showDLog(a.platform), e.channelExt = a.platform;
} catch (n) {
s.showDLog("login platform error.but login is ok----\x3e"), e.channelExt = "android";
}
} else if ("douyinGame" === s.configure.channelType) {
e.channelExt = "";
try {
var i = tt.getSystemInfoSync();
s.showDLog(i.model), s.showDLog("platform:" + i.platform), e.channelExt = i.platform;
} catch (n) {
s.showDLog("login platform error.but login is ok----\x3e"), e.channelExt = "android";
}
} else if ("vivo" === s.configure.channelType || "xiaomi" === s.configure.channelType) {
e.channelExt = "";
try {
var r = qg.getSystemInfoSync();
s.showDLog("get platform pay:" + r.model), e.channelExt = r.osType;
} catch (n) {
s.showDLog("login platform error.but login is ok----\x3e"), e.channelExt = "android";
}
}
s.showDLog("-SDK 发起Pay one ->" + JSON.stringify(e) + "预下订单"), s.httpRequestPay({
url: "sdk/getWdOrderId",
method: "POST",
data: e,
success: function(e) {
s.showDLog("-SDK 获取Pay成功:"), s.showDLog("-SDK 获取Pay 成功:" + e.state), s.showDLog("->-SDK 获取Pay 成功:" + JSON.stringify(e)), 
1 === e.state ? (s.showDLog("-SDK pay state:"), s.channelPay(e.data, o)) : (s.showDLog("-SDK 发起" + s.configure.channelType + "预支付失败:" + JSON.stringify(e)), 
o(e.state, JSON.stringify(e)));
},
error: function(e) {
s.showDLog("-SDK 预支付失败" + JSON.stringify(e)), o(0, e);
}
});
} else s.showDLog("[未设置支付]：DD发起Pay two ->" + JSON.stringify(e) + "预下订单"), s.httpRequest({
url: "sdk/getWdOrderId",
method: "POST",
data: e,
success: function(e) {
e && e.state && 200 === e.state ? (s.showDLog("DD获取服务器支付信息成功"), s.channelPay(e.payParams, o)) : (s.showDLog("DD发起" + s.configure.channelType + "预支付失败:" + JSON.stringify(e)), 
o(e.state, JSON.stringify(e)));
},
error: function(e) {
s.showDLog("DD预支付失败" + JSON.str_thisngify(e)), o(0, e);
}
});
} catch (n) {
s.showDLog("-SDK 预订单发生错误：" + n.toString()), o(0, "toPay" + n);
}
}
httpRequestPay(e) {
var o = this;
try {
if ("[object Object]" === String(e)) {
var s, n, t = this.configure.url + e.url;
if ("GET" === e.method ? (s = Object.keys(e.data).map(function(o) {
return encodeURIComponent(o) + "=" + encodeURIComponent(e.data[o]);
}).join("&"), t = t + "?channelType=" + o.configure.channelType + "&" + s) : "bili" === this.configure.channelType ? t = t + "?channelType=" + o.configure.channelType + "&data=" + e.data : "qq" !== this.configure.channelType && "shouqDYB" !== o.configure.channelType && "vivo" !== this.configure.channelType || (t = t + "?channelType=" + o.configure.channelType), 
"oppo" === this.configure.channelType) {
o.showDLog("```-SDK oppo Request Pay ````");
var a = e.data.extension;
e.data.extension = "";
var i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a), r = ((g = new XMLHttpRequest()).open(e.method, t, !0), 
g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), {
token: this.channelTokenK,
engineVersion: this.oppoConfigure.platformVersion
});
i = i + "&channelExt=" + JSON.stringify(r), g.send(i), g.onreadystatechange = function() {
4 == g.readyState && 200 == g.status ? e.success(JSON.parse(g.responseText)) : (o.showDLog("oppo post fail:" + g.responseText), 
e.error(g.responseText));
};
} else if ("vivo" === this.configure.channelType) {
o.showDLog("-SDK Paychannel Request ...");
a = e.data.extension;
e.data.extension = "";
i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a);
qg.request({
url: t,
method: "POST",
data: i,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
o.showDLog("------------httpRequest vivo 4 -------------"), e.success(s.data), o.showDLog("------------httpRequest vivo 5 -------------");
},
fail(e) {
o.showDLog("------------httpRequest vivo 6 -------------"), o.showDLog("vivo自身支付 请求失败");
}
});
} else if ("xiaomi" === this.configure.channelType) {
var c = qg.getSystemInfoSync();
o.showDLog("-SDK Paychannel Request ...xiaomi..");
try {
c.session = o.xiaomisession, c.appAccountId = o.xiaomisession, c.appAccountId = o.xiaomiACCOUNTID, 
o.showDLog("-SDK Paychannel Request ...x:" + c.session);
} catch (s) {
o.showDLog("-SDK Paychannel systemInfo ...error:" + s);
}
a = e.data.extension;
e.data.extension = "";
i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a);
(g = new XMLHttpRequest()).open(e.method, t, !0), i = i + "&channelExt=" + encodeURIComponent(JSON.stringify(c)), 
o.showDLog("====>-SDK XM发起Pay  ->预下订单" + JSON.stringify(c)), o.showDLog("-SDK 发起Pay XMExt->" + JSON.stringify(i) + "预下订单"), 
g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), g.send(i), 
g.onreadystatechange = (() => {
4 == g.readyState && 200 == g.status ? (o.showDLog("XM->支付查询中,支付成功:", g.responseText), 
e.success(JSON.parse(g.responseText))) : (o.showDLog("XM->查询中:", g.responseText), 
e.error("XM->---SDK预支付失败---"));
});
} else if ("uc" === this.configure.channelType || "ucmoy" === this.configure.channelType) {
let n = uc.getSystemInfoSync();
if ("string" == typeof n) try {
n = JSON.parse(n);
} catch (s) {}
a = e.data.extension;
e.data.extension = "";
var h, g;
i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a);
o.showDLog("uc post1:" + h), (g = new XMLHttpRequest()).open(e.method, t, !0), o.showDLog("-SDK 发起Pay ucExt->预下订单"), 
i = i + "&channelExt=" + JSON.stringify(n), o.showDLog("-SDK 发起Pay ucExt->" + JSON.stringify(i) + "预下订单"), 
g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), g.send(i), 
g.onreadystatechange = (() => {
4 == g.readyState && 200 == g.status ? (o.showDLog("UC->支付查询中,支付成功:", g.responseText), 
e.success(JSON.parse(g.responseText))) : (o.showDLog("UC->查询中:", g.responseText), 
e.error("UC->---SDK预支付失败---"));
});
} else "meituan" === this.configure.channelType ? (o.showDLog("-SDK 发起Pay meituan->预下订单"), 
i = h = this.changePostToGetParam(e.data), o.showDLog("-SDK 发起Pay meituan->预下订单" + i), 
i = i + "&channelExt=" + this.channelTokenK, wx.request({
url: t,
method: "POST",
data: i,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
o.showDLog("------------httpRequest meituan4 -------------"), o.showDLog("美团自身支付请求成功" + s.data), 
e.success(s.data), o.showDLog("------------httpRequest meituan5 -------------");
},
fail(e) {
o.showDLog("------------httpRequest meituan6 -------------"), o.showDLog("美团自身支付 请求失败");
}
})) : "weixin" === this.configure.channelType || "weixinGame" === this.configure.channelType || "kuaishou" === this.configure.channelType ? (o.showDLog("-SDK WEIXIN Request"), 
a = e.data.extension, e.data.extension = "", i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a), 
o.showDLog("-SDK 发起Pay weixin-> 预下订单" + i), i = i + "&channelExt=" + this.channelTokenK, 
wx.request({
url: t,
method: "POST",
data: i,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
o.showDLog("------------httpRequest weixin4 -------------"), e.success(s.data), 
o.showDLog("------------httpRequest weixin5 -------------");
},
fail(e) {
o.showDLog("------------httpRequest weixin6 -------------"), o.showDLog("weixin自身支付 请求失败");
}
})) : "qq" === this.configure.channelType || "shouqDYB" === this.configure.channelType ? (o.showDLog("-SDK QQ Request"), 
a = e.data.extension, e.data.extension = "", i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a), 
qq.request({
url: t,
method: "POST",
data: i,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
e.success(s.data), o.showDLog("------------httpRequest QQ 5 -------------");
},
fail(e) {
o.showDLog("------------httpRequest QQ 6 -------------"), o.showDLog("QQ自身支付 请求失败");
}
})) : "douyinGame" === this.configure.channelType ? (o.showDLog(">>> -SDK douyinGame Request"), 
a = e.data.extension, e.data.extension = "", i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a), 
o.showDLog("-SDK 发起Pay douyinGame-> 预下订单" + i), i = i + "&channelExt=" + this.channelTokenK, 
tt.request({
url: t,
method: "POST",
data: i,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
e.success(s.data), o.showDLog("------------httpRequest douyinGame -------------");
},
fail(e) {
o.showDLog("douyinGame自身支付 请求失败");
}
})) : "ZJSILANG" === this.configure.channelType ? (o.showDLog("```-SDK ZJSILANG Request Pay ````"), 
a = e.data.extension, e.data.extension = "", i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a), 
n = {
productID: e.data.productID,
roleLevel: e.data.roleLevel
}, i = i + "&channelExt=" + JSON.stringify(n), wx.request({
url: t,
method: "POST",
data: i,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
o.showDLog("------------httpRequest Pay 4 -------------"), o.showDLog("weixin自身支付请求成功" + JSON.stringify(s.data)), 
e.success(s.data), o.showDLog("------------httpRequest Pay 5 -------------");
},
fail(e) {
o.showDLog("------------httpRequest Pay 6 -------------"), o.showDLog("Pay 自身支付 请求失败");
}
})) : "lwsdkwx" === this.configure.channelType ? (o.showDLog("Pay lwsdkwx:" + JSON.stringify(e.data)), 
a = e.data.extension, e.data.extension = "", i = (h = this.changePostToGetParamRemoveExt(e.data)) + "&extension=" + JSON.stringify(a), 
wx.request({
url: t,
method: "POST",
data: i,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(s) {
o.showDLog("------------httpRequest weixin 4 -------------"), o.showDLog("weixin自身支付请求成功" + JSON.stringify(s.data)), 
e.success(s.data), o.showDLog("------------httpRequest weixin 5 -------------");
},
fail(e) {
o.showDLog("------------httpRequest weixin 6 -------------"), o.showDLog("weixin自身支付 请求失败");
}
})) : console.log("Not support pay setting.");
}
} catch (s) {
this.showDLog("发送信息到服务器出错:" + s);
}
}
changePostToGetParam(e) {
return JSON.stringify(e).replace(/:/g, "=").replace(/,/g, "&").replace(/{/g, "").replace(/}/g, "").replace(/"/g, "");
}
changePostToGetParamRemoveExt(e) {
return JSON.stringify(e).replace(/:/g, "=").replace(/,/g, "&").replace(/{/g, "").replace(/}/g, "").replace(/"/g, "").replace("&extension=", "");
}
channelPay(e, o) {
var s, n = this;
this.showDLog("发起" + n.configure.channelType + "支付");
try {
switch (n.configure.channelType) {
case "vivo":
var t = JSON.parse(e.extension);
n.showDLog("vivo 开始支付" + t), n.showDLog("vivo 开始支付" + t.cpOrderNumber), qg.pay({
orderInfo: t,
success: function(e) {
o(1, "vivo支付成功" + e), n.showDLog("vivo支付成功" + e);
},
fail: function(e, s) {
n.showDLog("发起vivo支付失败, errcode:" + s.toString() + " erromsg:" + e.toString()), 
o(0, "发起vivo支付失败, errcode:" + s.toString() + " erromsg:" + e.toString());
},
complete: function() {}
});
break;

case "douyinGame":
n.showDLog("-------- GO TO douyinGame Pay----------");
t = JSON.parse(e.extension);
this.showDLog("douyinGame发起支付界面："), t.hasOwnProperty("item") ? (console.log("===>支付douyinGame选择"), 
1 == (a = t.item) ? this.showDLog("go to douyin services.normal.") : 2 == a ? (this.showDLog("go to douyin services.chrome"), 
o(2, t.url)) : 3 == a && (this.showDLog("go to douyin services nums:" + n.pMoney), 
this.dogaWX(n.pMoney, e.orderID))) : (console.log("===>no"), 1 == t.code && (n.showDLog("-------- GO TO douyinGame Pay----------" + JSON.stringify(t)), 
n.showDLog("-------- GO TO douyinGame Pay----------" + t.data), t = t.data, n.showDLog("-------- GO TO douyinGame Pay----------" + t), 
tt.requestGamePayment({
mode: t.mode,
offerId: t.offerId,
zoneId: t.zoneId,
platform: t.platform,
currencyType: t.currencyType,
env: t.env,
buyQuantity: t.buyQuantity,
customId: t.customId,
extraInfo: t.extraInfo,
success: e => {
n.showDLog("微信成功-获取 douyinGame, code:" + JSON.stringify(e)), o(1, e);
},
fail: e => {
n.showDLog("weixinGame支付失败:" + JSON.stringify(e)), o(0, e);
}
})));
break;

case "qq":
this.showDLog("QQ发起支付界面：");
var a, i = JSON.parse(e.extension);
i.hasOwnProperty("item") ? (console.log("===>支付qq选择"), 1 == (a = i.item) ? (this.showDLog("go to qq services.normal."), 
this.doga(2, i.number, "", o)) : 2 == a ? (this.showDLog("go to qq services.chrome"), 
o(2, i.url)) : 3 == a && (this.showDLog("go to qq services nums:" + i.number), this.doga(1, i.number, "", o))) : (console.log("===>no"), 
qq.requestMidasPayment({
prepayId: i.prepayId,
starCurrency: i.starCurrency,
setEnv: 0,
success: e => {
this.showDLog("qq支付成功, code:" + e), this.showDLog(e), o(1, e);
},
fail: e => {
this.showDLog("qq支付失败:" + JSON.stringify(e)), this.showDLog(e), o(0, e);
}
}));
break;

case "kuaishou":
n.showDLog("-------- GO TO kuaishou Pay----------"), (t = JSON.parse(e.extension)).hasOwnProperty("url") ? (console.log("===>had"), 
o(2, t.url)) : (console.log("===>no"), wx.requestPayment({
game_user_id: t.game_user_id,
app_id: t.app_id,
zone_id: t.zone_id,
os: t.os,
currency_type: t.currency_type,
buy_quantity: t.buy_quantity,
user_ip: t.user_ip,
third_party_trade_no: t.third_party_trade_no,
extension: t.extension,
sign: t.sign,
success: e => {
n.showDLog("获取 kuaishou, code:" + e.code), o(1, e);
},
fail: e => {
n.showDLog("kuaishou 支付失败:" + JSON.stringify(e)), o(0, e);
}
}));
break;

case "weixin":
n.showDLog("-------- GO TO WEIXIN 小程序----------");
t = JSON.parse(e.extension);
wx.requestPayment({
timeStamp: t.timeStamp,
nonceStr: t.nonceStr,
package: t.package,
signType: t.signType,
paySign: t.paySign,
success: e => {
n.showDLog("获取WEIXIN, code:" + e.code), e.code ? o(1, e) : n.showDLog("WEIXIN failed.Exception is time to out.");
},
fail: e => {
n.showDLog("WEIXIN支付失败:" + JSON.stringify(e)), o(0, e);
}
});
break;

case "weixinGame":
n.showDLog("-------- GO TO weixinGame 微信小游戏支付----------"), (t = JSON.parse(e.extension)).hasOwnProperty("item") ? (console.log("===>pay is weixinGame."), 
1 == (a = t.item) ? this.showDLog("go to pay services.normal.but don't option.") : 2 == a ? (this.showDLog("go to pay services.chrome"), 
o(2, t.url)) : 3 == a && (this.showDLog("go to pay services nums:robot"), this.dogaWX(n.pMoney, e.orderID))) : (console.log("===>Pay is Normal."), 
n.showDLog("-------- GO TO weixinGame 微信小游戏支付-------\x3e>>" + e.orderID), s = t.code, 
n.showDLog("-------- GO TO weixinGame 小游戏----------" + s), t = t.data, 1 == s ? wx.requestMidasPayment({
mode: t.mode,
offerId: t.offerId,
zoneId: t.zoneId,
platform: t.platform,
currencyType: t.currencyType,
env: t.env,
buyQuantity: t.buyQuantity,
success: e => {
n.showDLog("微信成功-获取 weixinGame, code:" + JSON.stringify(e)), n.showDLog("微信成功-获取 weixinGame, code:" + e);
e = this.configure.urlSDK + "pay/wxxyx2/payCallback.do";
wx.request({
url: e,
method: "POST",
data: t,
header: {
"Content-Type": "application/x-www-form-urlencoded"
},
success(e) {
n.showDLog("------------httpRequest weixinGame 回调请求1 -------------" + e.data), "SUCCESS" == e.data ? (o(1, "支付成功，已到账"), 
n.showDLog("------------httpRequest weixinGame 回调请求2 suc -------------")) : (n.showDLog("------------httpRequest weixinGame 回调请求3 fail -------------"), 
o(0, "已支付，回调失败，请联系客服"));
},
fail(e) {
n.showDLog("--weixinGame 回调请求失败--"), o(1, "weixinGame 回调请求失败，但已支付");
}
});
},
fail: e => {
n.showDLog("weixinGame支付失败:" + JSON.stringify(e)), o(0, e);
}
}) : 2 == s ? (n.showDLog("weixinGame请求，不需要拉起支付，余额支付成功"), o(1, "weixinGame请求，不需要拉起支付，余额支付成功")) : 3 == s && (n.showDLog("weixinGame请求IOS不允许支付"), 
n.dogaWX(n.pMoney, e.orderID)));
break;

case "meituan":
n.showDLog("meituan 开始支付" + e.extension);
t = JSON.parse(e.extension);
n.showDLog("meituan 开始支付" + t), n.showDLog("meituan 开始支付" + t.bizOrderNo), n.showDLog("meituan 开始支付" + t.productId), 
n.showDLog("meituan 开始支付" + t.productName), n.showDLog("meituan 开始支付" + t.productDesc), 
n.showDLog("meituan 开始支付" + t.appId), n.showDLog("meituan 开始支付" + t.mgcId), n.showDLog("meituan 开始支付" + n.channelTokenK), 
mt.requestMidasPayment({
mgcId: t.mgcId,
appId: t.appId,
accessToken: n.channelTokenK,
productId: t.productId,
bizOrderNo: t.bizOrderNo,
productName: t.productName,
productDesc: t.productDesc,
productUrl: "",
needRefresh: 0,
success(e) {
n.showDLog("------------httpRequest meituan11 -------------"), n.showDLog("meituan 支付成功, code:" + e.code), 
o(1, e), n.showDLog("------------httpRequest meituan22 -------------");
},
fail(e) {
n.showDLog("------------httpRequest meituan33 -------------"), n.showDLog("meituan33支付失败:" + e), 
o(0, e);
}
});
break;

case "oppo":
n.showDLog("oppo go to pay....");
t = JSON.parse(e.extension);
qg.pay({
appId: t.appId,
token: t.token,
timestamp: t.timestamp,
paySign: t.paySign,
orderNo: t.orderNo,
success: function(e) {
o(1, "oppo支付成功");
},
fail: function(e) {
n.showDLog("调用oppo支付失败" + e), n.showDLog("调用oppo支付失败" + JSON.stringify(e)), o(0, JSON.stringify(e));
}
});
break;

case "uc":
t = JSON.parse(e.extension);
uc.requestPayment({
biz_id: t.biz_order_id,
token: t.token,
trade_id: t.order_id,
success: function(e) {
n.showDLog("调用uc支付成功：" + e), o(1, e);
},
fail: function(e) {
n.showDLog("调用uc支付失败：" + e), n.showDLog("调用uc支付失败：" + JSON.stringify(e)), o(0, JSON.stringify(e));
}
});
break;

case "ucmoy":
n.showDLog("发起" + n.configure.channelType + "支付" + JSON.stringify(e));
var r = {
pay_amount: (t = JSON.parse(e.extension)).pay_amount,
extra_info: t.extra_info,
goods_name: t.goods_name,
redirect_uri: t.redirect_uri,
role_name: t.role_name,
server_name: t.server_name,
order_sn: t.order_sn
};
Sdk.submitOrder(r, function(e) {
n.showDLog("ucmoy pay:" + e), n.showDLog("ucmoy pay:" + JSON.stringify(e)), n.showDLog("ucmoy pay:" + e.code), 
n.showDLog("ucmoy pay:" + e.msg), o(e.code, e.msg);
});
break;

case "xiaomi":
n.showDLog("xiaomi pay:");
t = JSON.parse(e.extension);
qg.pay({
orderInfo: {
appId: t.appId,
appAccountId: t.appAccountId,
session: t.session,
cpOrderId: t.cpOrderId,
cpUserInfo: t.cpUserInfo,
displayName: t.displayName,
feeValue: t.feeValue,
sign: t.sign
},
success: function(e) {
o(1, "xiaomi 支付成功");
},
fail: function(e) {
alert("--" + e.memo), o(0, "xiaomi:" + e.toString());
}
});
break;

case "bili":
bl.requestRecharge({
customerId: e.customer_id,
merchantCode: e.merchant_code,
coinType: e.coin_type,
customerUserType: e.customer_user_type,
customerUserId: e.customer_user_id,
platformType: e.platform_type,
transAmount: e.trans_amount,
customerSeq: e.customer_seq,
smallGameName: e.small_game_name,
orientation: 2,
sign: e.sign,
success(e) {
this.showDLog("suc：" + e.code + " " + e.msg);
},
fail(e) {
console.error("fail：" + e.code + " " + e.msg);
}
});
break;

case "ZJSILANG":
t = JSON.parse(e.extension);
mlh5.pswitch({
roleId: t.roleId,
roleName: t.roleName,
roleLevel: t.roleLevel,
serverId: t.serverId,
serverName: t.serverName,
roleVip: t.roleVip,
rolePower: t.rolePower,
callback: e => {
console.log("pswitch:", e), 1 === e ? (n.showDLog("channel support pay."), mlh5.pay({
amount: t.amount,
currency: t.currency,
productId: t.productId,
productName: t.productName,
productDesc: t.productDesc,
roleId: t.roleId,
roleName: t.roleName,
roleLevel: t.roleLevel,
serverId: t.serverId,
serverName: t.serverName,
orderExt: t.orderExt,
callback: function(e) {
console.log(e), n.showDLog("channel support result." + e), 200 == e.reuslt ? (n.showDLog("channel pay suc." + e), 
o(1, "suc." + e.orderId)) : (n.showDLog("channel pay fail." + e.msg), o(0, e.msg));
}
})) : n.showDLog("channel not support pay.");
}
});
break;

case "shouqDYB":
t = JSON.parse(e.extension);
var c = (n.showDLog("channel pay shouqDYB"), this.isEmpty(t.redirect_uri) || t.redirect_uri, 
n.showDLog("oppo post1:" + t), {
goods_count: 1,
goods_des: t.goods_des,
goods_identifier: t.goods_identifier,
goods_name: t.goods_name,
pay_amount: t.pay_amount,
redirect_uri: t.redirect_uri,
extra_info: t.extra_info,
order_sn: t.order_sn,
role_id: t.role_id,
role_name: t.role_name,
server_id: t.server_id,
server_name: t.server_name
});
n.showDLog("传入-> " + JSON.stringify(c)), qq.dyb.submitOrder(c, function(e) {
n.showDLog("getDybUserInfo:" + JSON.stringify(e)), 0 === e.code ? (n.showDLog("最后，我们支付失败了"), 
o(0, "支付失败")) : 1 === e.code && (n.showDLog("最后，我们支付成功了"), o(1, "支付成功"));
});
break;

case "lwsdkwx":
n.showDLog("--\x3e发起渠道支付" + e.extension);
t = JSON.parse(e.extension);
n.showDLog("--\x3e发起渠道支付" + t.cpOrderSn), sdk.payOrder(t.cpOrderSn, t.amount, t.propName, t.serverId, t.roleId, t.attach, function(e) {
console.log("支付结果", e.errMsg), -1 === e.errCode || null == typeof e || "" == e ? o(0, "支付失败") : o(1, "支付失败");
}, "");
}
} catch (e) {
this.showDLog("发起渠道支付失败" + e.toString()), o(0, "发起渠道支付失败" + e.toString());
}
}
doga(e, o, s, n) {
this.showDLog("------------Pay Listener-------------"), doga(e, o, s, "", n);
}
doga(e, o, s, n, t) {
if (this.showDLog("------------Customer Server Listener-------------"), 1 == e) this.showDLog("------------Customer Server Pay-------------"), 
qq.setClipboardData({
data: o + "",
success(e) {
qq.getClipboardData({
success(e) {
console.log("获取到的粘贴内容：" + e.data);
}
});
}
}), qq.showModal({
title: "提示",
content: "【已复制，可粘贴使用】请在客服对话框回复数字:" + o,
showCancel: !1,
confirmText: "立即购买",
success: function(e) {
console.log("立即购买，弹出授权界面"), e.confirm && qq.authorize({
scope: "setting.addFriend",
success: function(e) {
qq.openCustomerServiceConversation({
success: function(e) {
console.log("玩家同意授权1");
},
fail: function(e) {
console.log("玩家拒绝授权1" + e), console.log("玩家拒绝授权1" + JSON.stringify(e)), t(0, JSON.stringify(e));
}
});
},
fail: function(e) {
console.log("玩家拒绝", e), qq.showModal({
title: "提示",
content: "请同意向我发起加好友请求:" + o,
showCancel: !1,
confirmText: "确定",
success: function(e) {
e.confirm && qq.openSetting({
success: function(e) {
console.log(e, "opensetttttt"), e.authSetting["setting.addFriend"] && qq.openCustomerServiceConversation({
success: function(e) {
console.log(e, "玩家同意授权2");
},
fail: function(e) {
console.log("玩家拒绝授权2" + e), console.log("玩家拒绝授权2" + JSON.stringify(e)), t(0, JSON.stringify(e));
}
});
}
});
}
});
}
});
}
}); else if (2 == e) {
this.showDLog("------------Customer Server Bind-------------"), this.showDLog("客服ID：" + o);
let e = "";
return "" == s ? (this.showDLog("客服默认样式："), (e = qq.createAddFriendButton({
type: "image",
text: "添加好友",
openid: o,
image: "https://zzresource. xiaomaigame.cn/images/qqvipuser2.png",
style: {
left: 20,
top: 100,
width: 300,
height: 100,
lineHeight: 1,
backgroundColor: "#5566AA",
color: "#FFFFFF",
textAlign: "center",
borderRadius: 80,
borderRadius: 6,
borderWidth: 100,
fontSize: 22
}
})).onTap(function(o) {
console.log(o), o.errMsg, e.hide();
})) : (this.showDLog("客服自定义设置样式："), s.openid = o, (e = qq.createAddFriendButton(s)).onTap(n)), 
e.show(), qq.getSetting({
success(e) {
console.log("getSetting=" + JSON.stringify(e.authSetting)), e.authSetting = {
"scope.userInfo": !0,
"scope.userLocation": !0
};
}
}), e;
}
}
dogaWX(e, o) {
var s = this;
this.showDLog("weixinGame请求IOS不允许支付" + e), wx.showModal({
title: "温馨提示",
confirmText: "前往充值",
confirmColor: "#576B95",
content: "请进入【客服会话】窗口点击右下角卡片获取支付链接",
success(n) {
n.confirm ? "douyinGame" == s.configure.channelType ? (console.log("--抖音客服--"), 
tt.onTouchEnd(function(e, o, s) {
tt.openCustomerServiceConversation({
type: 1,
success(e) {
console.log("===>>>>>>" + e);
},
fail(e) {
console.log(e);
}
});
})) : (console.log("--微信客服--"), wx.openCustomerServiceConversation({
showMessageCard: !0,
sendMessageTitle: "我要充值 " + e + "元",
sendMessagePath: "./?" + o,
sessionFrom: s.roleLoginData.suid,
sendMessageImg: "https://zzresource. xiaomaigame.cn/image/pubpay.png",
success: e => {
s.showDLog("weixinGame请求IOS SUC" + e);
},
fail: e => {
s.showDLog("weixinGame请求IOS FAIE" + JSON.stringify(e));
}
})) : n.cancel && console.log("用户点击取消");
}
});
}
shareOnQueryIDInWx(e, o, s, n, t) {
this.shareOnQueryIDInAll("wechatFriends", e, o, s, n, t);
}
shareOnQueryIDInQQFastShare(e, o, s, n, t) {
this.shareOnQueryIDInAll("qqFastShare", e, o, s, n, t);
}
shareOnQueryIDInQQFastShareList(e, o, s, n, t) {
this.shareOnQueryIDInAll("qqFastShareList", e, o, s, n, t);
}
shareOnQueryIDInQzone(e, o, s, n, t) {
this.shareOnQueryIDInAll("qzone", e, o, s, n, t);
}
shareOnQueryIDInWxMoment(e, o, s, n, t) {
this.shareOnQueryIDInAll("wechatMoment", e, o, s, n, t);
}
shareOnQueryIDInAll(e, o, s, n, t, a) {
var i = this;
this.showDLog("==发起主动分享：" + i.configure.channelType + "分享");
try {
if ("qq" == i.configure.channelType) {
var r = "", c = r = "" == s ? "" : "&" + s, h = (c = 0 == Number.isInteger(o) ? 1 : o, 
{
cid: i.configure.channelID,
shareId: c
});
let g = {};
this.showDLog("==发起主动分享到：" + e), i.httpRequestPay({
url: "sdk/xyxShare",
method: "POST",
data: h,
success: function(o) {
1 == o.state ? g = JSON.parse(o.extension) : (g.title = n, g.shareTemplateId = "", 
g.shareTemplateData = "", g.imageUrl = t), qq.shareAppMessage({
title: g.title,
shareTemplateId: g.shareTemplateId,
shareTemplateData: g.shareTemplateData,
imageUrl: g.imageUrl,
shareAppType: e,
entryDataHash: "openid=" + i.roleLoginData.sdkUserID + r,
query: "openid=" + i.roleLoginData.sdkUserID + r,
success: e => {
qq.showToast({
title: "成功",
icon: "success",
duration: 2e3
}), i.showDLog("qq分享成功, code:" + e), i.showDLog(e), a(1, "qq分享成功");
},
fail: e => {
i.showDLog("qq分享失败:" + e), i.showDLog(e), a(0, e);
}
});
},
error: function(e) {
i.showDLog("err====》请求 失败：" + JSON.stringify(e));
}
});
} else "vivo" == i.configure.channelType || "oppo" == i.configure.channelType ? qg.share({
success: function(e) {
i.showDLog("ov分享成功, code:" + e), a(1, "分享成功");
},
fail: function(e) {
i.showDLog("ov分享失败:" + e), a(0, e);
},
cancel: function() {
i.showDLog("ov分享cancel:"), a(0, res);
}
}) : "mcGame" == i.configure.channelType ? (r = (r = "") == s ? "" : "&" + s, mt.shareAppMessage({
title: n,
imageUrl: t,
query: "openid=" + i.roleLoginData.sdkUserID + r,
success: e => {
i.showDLog("分享成功, code:" + e), i.showDLog(e), a(1, "分享成功");
},
fail: e => {
i.showDLog("分享失败:" + e), i.showDLog(e), a(0, e);
}
})) : "weixinGame" == i.configure.channelType ? (r = (r = "") == s ? "" : "&" + s, 
wx.shareAppMessage({
title: n,
imageUrl: t,
query: "openid=" + i.roleLoginData.sdkUserID + r,
success: e => {
i.showDLog("分享成功, code:" + e), i.showDLog(e), a(1, "分享成功");
},
fail: e => {
i.showDLog("分享失败:" + e), i.showDLog(e), a(0, e);
}
})) : (console.log(i.configure.channelType + "无此功能，请联系技术询问"), console.log("可能版本太低，请更新或者接入对应渠道的分享即可。"), 
console.log("微信参考：https://developers.weixin.qq.com/minigame/dev/api/share/wx.shareAppMessage.html"));
} catch (o) {
this.showDLog("发起渠道分享失败" + o.toString()), a(0, o);
}
}
shareOnQueryID(e, o, s, n, t) {
this.shareOnQueryIDInAll("qq", e, o, s, n, t);
}
shareOnQuery(e, o, s, n) {
this.shareOnQueryID(1, e, o, s, n);
}
share(e, o, s) {
console.log("如果想要带参数请调用 shareOnQuery(query,title, imageUrl, callback) 方法 "), this.shareOnQuery("", e, o, s);
}
gameZzJSubscribeMsgLong(e) {
var o = this;
o.showDLog("发起" + o.configure.channelType + "订阅");
try {
"qq" == o.configure.channelType ? qq.subscribeAppMsg({
subscribe: !0,
success(s) {
console.log("----subscribeAppMsg----success", s), o.showDLog("qq订阅成功, code:" + JSON.stringify(s)), 
o.showDLog(s), e(1, "订阅信息成功");
},
fail(s) {
console.log("----subscribeAppMsg----fail", s), o.showDLog("qq订阅失败:" + JSON.stringify(s)), 
qq.openSetting({
withSubscriptions: !0,
success(e) {
console.log(e.authSetting), e.authSetting = {
"scope.userInfo": !0,
"scope.userLocation": !0,
"setting.appMsgSubscribed": !0
}, console.log(e.subscriptionsSetting);
}
}), o.showDLog(s), e(0, s);
}
}) : "shouqDYB" == o.configure.channelType && this.gameSubscribeByChannel(this.configure.channelType, 1, tmplIdsArr, e);
} catch (s) {
o.showDLog(" -- 发起渠道订阅失败" + s.toString()), e(0, s);
}
}
gameZzJSubscribeMsg(e, o, s) {
var n = this;
n.showDLog("发起" + n.configure.channelType + "订阅");
try {
"qq" == n.configure.channelType ? qq.subscribeAppMsg({
tmplIds: e,
subscribe: o,
success: e => {
n.showDLog("qq订阅成功, code:" + e), n.showDLog(e), s(1, "订阅信息成功");
},
fail: e => {
n.showDLog("qq订阅失败:" + e), n.showDLog(e), s(0, e);
}
}) : "ZJSILANG" == n.configure.channelType ? wx.requestSubscribeMessage({
tmplIds: e,
success(e) {
n.showDLog("订阅成功" + JSON.stringify(e)), s(1, e);
},
fail(e) {
n.showDLog("订阅失败" + JSON.stringify(e)), s(0, e);
},
complete(e) {
n.showDLog("订阅动作完成"), mlh5.templateMsgComplete(e);
}
}) : "shouqDYB" == n.configure.channelType && this.gameSubscribeByChannel(this.configure.channelType, 2, e, s);
} catch (e) {
n.showDLog("发起渠道订阅失败" + e.toString()), s(0, e);
}
}
gameSubscribeByChannel(e, o, s, n) {
var t = this;
t.showDLog("渠道单独订阅"), "shouqDYB" === e && (1 === o ? (t.showDLog("长期订阅"), qq.dyb.subscribeMsg(function(e) {
t.showDLog(JSON.stringify(e) + "长期订阅"), n(e.code, e.msg);
})) : (t.showDLog("单次订阅"), qq.dyb.oneceSubscribeMsg(s, function(e) {
t.showDLog(JSON.stringify(e) + "单次订阅"), n(e.code, e.msg);
})));
}
uploadRole(e, o, s) {
var n, t, a = this;
if (a.isEmpty(o) || a.isEmpty(e)) return a.showDLog("角色信息上报、角色类型不能为空"), s(0, "角色信息上报、角色类型不能为空"), 
!1;
"qq" == a.configure.channelType && (t = qq.getSystemInfoSync(), o.brand = t.brand, 
o.model = t.model), o.appID = a.configure.appID, o.channelID = a.configure.channelID, 
o.userID = a.roleLoginData.suid, o.onlineTime = "0";
var i = 0;
try {
switch (e) {
case "creatRole":
n = "sdk/reportWdRoleInfo", a.showDLog("创建角色"), o.type = 0, i = 2;
break;

case "enterGame":
n = "sdk/reportWdRoleInfo", a.showDLog("进入游戏"), o.type = 2, i = 1;
break;

case "updateRole":
n = "sdk/reportWdRoleInfo", a.showDLog("更新角色信息:角色升级"), o.type = 1, i = 3;
break;

default:
a.showDLog("输入上传角色类型有误"), s(0, "输入上传角色类型有误");
}
"ZJSILANG" == a.configure.channelType ? (a.showDLog("ZJSILANG 渠道上报"), mlh5.gameReport({
eventTYpe: i,
roleId: o.roleID,
roleName: o.roleName,
roleLevel: o.roleLevel,
roleVip: o.roleVip,
rolePower: o.rolePower,
serverId: o.serverID,
serverName: o.serverName
})) : "shouqDYB" != a.configure.channelType && "lwsdkwx" != a.configure.channelType && "weixinGame" != a.configure.channelType && "kuaishou" != a.configure.channelType && "ucmoy" != a.configure.channelType || this.channelUpdateMethod(a.configure.channelType, o);
var r = this.changePostToGetParam(o);
"qq" == a.configure.channelType || "uc" == a.configure.channelType || "vivo" == a.configure.channelType ? (this.showDLog("New Version update22:" + JSON.stringify(o)), 
a.httpRequestUpdate({
url: n,
method: "POST",
data: r,
success: function(e) {
var n = JSON.parse(e);
a.showDLog("-SDK 发送角色state:" + n.code), 1 === n.code ? (a.showDLog("发送角色信息成功"), 
s(1, "发送角色信息成功")) : (a.showDLog("发起" + a.configure.channelType + "角色信息时报:" + JSON.stringify(e)), 
a.showDLog("发送角色信息参数:" + JSON.stringify(o)), s(e.code, JSON.stringify(e)));
},
error: function(e) {
a.showDLog("上报发送信息失败:轮询"), s(0, e);
}
})) : (this.showDLog("OLD Version update1::" + JSON.stringify(o)), a.httpRequest({
url: n,
method: "POST",
data: r,
success: function(e) {
var n = JSON.parse(e);
a.showDLog("-SDK 发送角色state:" + n.code), 1 === n.code ? (a.showDLog("发送角色信息成功"), 
s(1, "发送角色信息成功")) : (a.showDLog("发起" + a.configure.channelType + "角色信息时报:" + JSON.stringify(e)), 
a.showDLog("发送角色信息参数:" + JSON.stringify(o)), s(e.code, JSON.stringify(e)));
},
error: function(e) {
a.showDLog("上报发送信息失败:轮询"), s(0, e);
}
}));
} catch (e) {
this.showDLog("角色信息上报发生严重错误！" + e.toString()), s(0, "角色信息上报发生严重错误！" + e.toString());
}
}
channelUpdateMethod(e, o) {
var s, n = this;
n.showDLog("--------------------------   上报  --------------------------------"), 
n.showDLog("<>发起渠道" + n.configure.channelType + "上报<>");
try {
switch (n.configure.channelType) {
case "ucmoy":
n.showDLog("<>发起渠道上报<>上报等级：" + o.roleLevel), n.showDLog("<>发起渠道上报<>上报区服ID：" + o.serverID), 
n.showDLog("<>发起渠道上报<>上报区服名称：" + o.serverName), n.showDLog("<>发起渠道上报<>上报角色名：" + o.roleName), 
0 === o.type ? (t = {
server_id: o.serverID,
server_name: o.serverName,
nickname: o.roleName
}, Sdk.createRole(t, function(e) {
console.log("嘟嘟嘟:" + JSON.stringify(e));
})) : 1 === o.type && Sdk.gameLevel(2, function(e) {
console.log("嘟嘟嘟 game_level:" + JSON.stringify(e));
});
break;

case "shouqDYB":
n.showDLog("I'm " + n.configure.channelType);
var t = {
server_id: o.serverID,
server_name: o.serverName,
nickname: o.roleName,
level: o.roleLevel
};
n.showDLog("I'm ：" + JSON.stringify(t)), n.showDLog("I'm ：" + o.type), 0 === o.type ? qq.dyb.createRole(t, function(e) {
n.showDLog("dyb创角上报:" + JSON.stringify(e));
}) : 1 === o.type && qq.dyb.gameLevel(t.level, function(e) {
n.showDLog("dyb等级提升上报:" + JSON.stringify(e));
});
break;

case "lwsdkwx":
n.showDLog(o.type + " I'm " + n.configure.channelType), 0 === o.type ? sdk.setCreateRoleEvent(o.serverID, o.serverName, o.roleID, o.roleName) : 2 === o.type && sdk.setRoleLoginEvent(o.serverID, o.serverName, o.roleID, o.roleName);
break;

case "weixinGame":
2 === o.type && (n.showDLog("------增值"), s = this.configure.urlSDK + "/pay/wxxyx/gotoGame.do?channelId=" + this.configure.channelID, 
wx.request({
url: s,
header: {
"content-type": "application/x-www-form-urlencoded"
},
success(e) {
console.log("==================================================================>" + JSON.stringify(e.data));
let o = e;
e.data && 0 != e.data.type && wx.showModal({
title: "温馨提示",
content: "提示内容。。。。。。。",
showCancel: !0,
cancelText: "取消",
cancelColor: "#000000",
confirmText: "确定",
confirmColor: "#3cc51f",
success: function(e) {
e.cancel || (console.log("==================================================================>" + o.data.goto_appid), 
wx.navigateToMiniProgram({
appId: e.data.goto_appid,
envVersion: "release",
success(e) {
n.showDLog("------增值服务" + JSON.stringify(e));
},
fail(e) {
n.showDLog("------fail." + JSON.stringify(e));
}
}));
},
fail: function(e) {},
complete: function(e) {}
});
},
fail(e) {
console.log("增值 fail:上报失败-");
}
}));
break;

case "kuaishou":
2 === o.type && n.showDLog("------kuaishou");
}
n.showDLog("--------------------------     ---------------------------------");
} catch (e) {
console.log("上报出错" + e);
}
}
httpRequestMsgCheck(e, o) {
var s;
try {
"[object Object]" !== String(e) && (s = this.configure.urlSDK + "/pay/shouq/msg_sec_check/" + this.configure.channelID + ".do", 
"qq" === this.configure.channelType ? (this.showDLog("qq关键词服务检测中... " + this.roleLoginData.userID), 
s = this.configure.urlSDK + "/pay/shouq/msg_sec_check/" + this.configure.channelID + ".do", 
qq.request({
url: s,
data: {
context: e,
userid: this.roleLoginData.userID
},
header: {
"content-type": "application/x-www-form-urlencoded"
},
success(e) {
console.log("==========>QQ"), o(e.data.errcode, e.data.errmsg);
},
fail(e) {
o(0, "关键词失败");
}
})) : "weixinGame" === this.configure.channelType ? (this.showDLog("weixinGame关键词服务检测中... " + this.roleLoginData.userID), 
s = this.configure.urlSDK + "/pay/wxxyx/msg_sec_check/" + this.configure.channelID + ".do", 
wx.request({
url: s,
data: {
content: e,
userid: this.roleLoginData.userID
},
header: {
"content-type": "application/x-www-form-urlencoded"
},
success(e) {
console.log(e.data.errcode + "关键词服务检测返回: -- " + e.data.errmsg), o(1, e.data.errmsg);
},
fail(e) {
o(0, "关键词失败");
}
})) : "kuaishou" === this.configure.channelType && (this.showDLog("weixinGame关键词服务检测中... " + this.roleLoginData.userID), 
s = this.configure.urlSDK + "/pay/ksxyx/msg_sec_check/" + this.configure.channelID + ".do", 
wx.request({
url: s,
data: {
content: e,
userid: this.roleLoginData.userID
},
header: {
"content-type": "application/x-www-form-urlencoded"
},
success(e) {
console.log(e.data.errcode + "关键词服务检测返回: -- " + e.data.errmsg), o(e.data.errcode, e.data.errmsg);
},
fail(e) {
o(0, "关键词失败");
}
})));
} catch (e) {
this.showDLog("发送信息到服务器出错:" + e);
}
}
gameZzJCheckByMSG(e, o, s) {
console.log("***此方法依旧可用，但建议使用 gameZzJCheckByMSGAndImg 方法***"), this.gameZzJCheckByMSGAndImg(e, o, "", "", s);
}
gameZzJCheckByMSGAndImg(e, o, s, n, t) {
var a = this;
a.showDLog("发起" + a.configure.channelType + "关键词检测：" + o);
try {
"ZJSILANG" == a.configure.channelType ? mlh5.msgSecCheck({
content: o,
scene: 2,
callback(e) {
a.showDLog("----------\x3e" + JSON.stringify(e)), 200 == e.result ? t(1, e) : t(0, e);
}
}) : "qq" == a.configure.channelType ? this.httpRequestMsgCheck(o, t) : "lwsdkwx" === a.configure.channelType ? (console.log("-lwsdk关键词检测-"), 
this.channelCheckMsgOrImg(this.configure.channelType, e, o, s, n, t)) : "shouqDYB" === a.configure.channelType ? (console.log("shouqDYB关键词检测"), 
this.channelCheckMsgOrImg(this.configure.channelType, e, o, s, n, t)) : "weixinGame" === a.configure.channelType || "kuaishou" === a.configure.channelType ? (console.log(" 关键词检测- " + a.configure.channelType), 
this.httpRequestMsgCheck(o, t)) : (console.log("Sorry.此渠道暂不支持关键词检测"), console.log("Sorry.暂时不支持此渠道关键词检测.请自行接入or联系技术"));
} catch (e) {
a.showDLog("发起渠道关键词检测失败" + e.toString()), t(0, e);
}
}
channelCheckMsgOrImg(e, o, s, n, t, a) {
var i = this;
"shouqDYB" === e ? (i.showDLog("检查是否违规"), 1 === o ? qq.dyb.msg_check(s, function(e) {
i.showDLog("内容检测:" + JSON.stringify(e)), 0 == e.code ? (i.showDLog("检测结果：内容不合格"), 
a(0, e)) : (i.showDLog("检测结果：内容通过-成功"), a(1, e));
}) : 2 === o ? qq.dyb.img_check(n, function(e) {
i.showDLog("图片检测:" + JSON.stringify(e)), 0 == e.code ? (i.showDLog("内容不通过-失败"), 
a(0, e)) : (i.showDLog("内容通过-成功"), a(1, e));
}) : qq.dyb.media_check(t, n, function(e) {
i.showDLog("音频图片检测：" + JSON.stringify(e)), 0 == e.code ? (i.showDLog("内容不通过-失败"), 
a(0, e)) : (i.showDLog("内容通过-成功"), a(1, e));
})) : "lwsdkwx" === e ? (i.showDLog("->渠道暂时只支持关键词检测。"), sdk.wxCheckWord({
content: s,
callback: function(e) {
1 === e.code ? (i.showDLog("内容通过-成功"), i.showDLog(e.data.suggest), i.showDLog(e.data.label), 
a(1, "" + JSON.stringify(e.data))) : (i.showDLog("内容不通过-失败"), i.showDLog(e.data), 
a(0, "" + JSON.stringify(e.data)));
}
})) : "weixinGame" === e && (i.showDLog("->weixinGame 关键词检测"), this.httpRequestMsgCheck(s, a));
}
gameZzJByWXOnshared(e) {
var o, s = this;
this.showDLog("特殊：" + this.configure.channelType + "分享转发");
try {
"ZJSILANG" == s.configure.channelType ? mlh5.H5Core.share({
title: e.title,
imageUrl: e.imageUrl,
query: e.query,
imageUrlId: e.imageUrlId,
toCurrentGroup: e.toCurrentGroup,
path: e.path
}) : "lwsdkwx" == s.configure.channelType ? (this.showDLog(s.configure.channelType + "无此功能"), 
this.showDLog("title：" + e.title), this.showDLog("imageUrl" + e.imageUrl), sdk.shareAppMessage({
type: 1,
success: function() {
s.showDLog("发起渠道分享success");
},
fail: function() {
s.showDLog("发起渠道分享fail");
}
})) : "shouqDYB" == s.configure.channelType && (this.showDLog("准备分享 " + e.title), 
this.showDLog("准备分享 " + e.imageUrl), this.showDLog("准备分享 " + e.query), this.showDLog("准备分享 " + e.callback), 
o = {
title: e.title,
imageUrl: e.imageUrl,
query: e.query
}, qq.dyb.share(o, e.callback), qq.dyb.onShare(o, e.callback));
} catch (e) {
s.showDLog("发起渠道分享失败" + e.toString());
}
}
gameZzJByWXOnsharedGetV() {
var e = this;
let o;
return "qq" == e.configure.channelType ? (o = qq.getLaunchOptionsSync(), e.showDLog("QQ分享获取query的数据query>>>>>" + JSON.stringify(o.query)), 
e.showDLog("QQ分享获取query的数据scene>>>>>" + JSON.stringify(o.scene)), e.showDLog("QQ分享获取query的数据shareTicket>>>>>" + JSON.stringify(o.shareTicket)), 
e.showDLog("QQ分享获取query的数据entryDataHash>>>>>" + JSON.stringify(o.entryDataHash)), 
e.showDLog("QQ分享获取query的数据extendData>>>>>" + JSON.stringify(o.extendData))) : (o = wx.getLaunchOptionsSync(), 
e.showDLog("其他分享获取query的数据>>>>>" + JSON.stringify(o.query))), o.query;
}
gameZzJByWXOnsharedGetDeskTop() {
var e, o = this;
return "qq" == o.configure.channelType ? (e = qq.getLaunchOptionsSync(), console.log("scene:" + JSON.stringify(e.scene)), 
o.showDLog("QQ分享获取query的数据query>>>>>" + JSON.stringify(e.query)), o.showDLog("QQ分享获取query的数据scene>>>>>" + JSON.stringify(e.scene)), 
o.showDLog("QQ分享获取query的数据shareTicket>>>>>" + JSON.stringify(e.shareTicket)), o.showDLog("QQ分享获取query的数据entryDataHash>>>>>" + JSON.stringify(e.entryDataHash)), 
o.showDLog("QQ分享获取query的数据extendData>>>>>" + JSON.stringify(e.extendData)), "1023" == e.scene || "1011" == e.scene) : "kuaishou" == o.configure.channelType ? !!ks.isLaunchFromShortcut() && (o.showDLog("KS从手机桌面快捷方式启动"), 
!0) : void o.showDLog("暂时不支持该渠道");
}
gameEnterGetVByCode() {
var e, o = this;
if ("qq" == o.configure.channelType) return e = qq.getLaunchOptionsSync(), o.showDLog("QQ分享获取query的数据query>>>>>" + JSON.stringify(e.query)), 
o.showDLog("QQ分享获取query的数据scene>>>>>" + JSON.stringify(e.scene)), o.showDLog("QQ分享获取query的数据shareTicket>>>>>" + JSON.stringify(e.shareTicket)), 
o.showDLog("QQ分享获取query的数据entryDataHash>>>>>" + JSON.stringify(e.entryDataHash)), 
o.showDLog("QQ分享获取query的数据extendData>>>>>" + JSON.stringify(e.extendData)), e.scene;
o.showDLog("暂时不支持该渠道");
}
zhijianToADVideosByWx(e, o) {
let s = this;
s.showDLog("---------观看广告-------"), wx.showModal({
title: "温馨提示",
confirmText: "确定",
confirmColor: "#576B95",
content: "观看可获得游戏奖励",
success(n) {
wx.showLoading({
title: "加载中",
success: function() {
if (console.log("-------------------sssssssss---------------------" + e), wx.createRewardedVideoAd) {
let n = wx.createRewardedVideoAd({
adUnitId: e
});
n.onLoad(() => {
s.showDLog("GO:激励视频 广告加载完成");
}), n.onError(e => {
s.showDLog("1.调用正常，但没有合适的广告返回给用户。 2. 错误的调用导致的异常返回。");
}), n.onClose(e => {
e && e.isEnded ? (o("1", "正常播放结束，可以下发游戏奖励"), n.offClose()) : o("0", "播放中途退出，不下发游戏奖励");
}), n && n.show().catch(() => {
n.load().then(() => n.show()).catch(e => {
s.showDLog("-激励视频 广告显示失败-"), o("0", "播放中途退出，不下发游戏奖励");
});
});
} else s.showDLog("《无广告展示》");
}
}), setTimeout(function() {
wx.hideLoading();
}, 200);
}
});
}
zhijianToADVideos(e, o) {
var s = this;
if (s.showDLog("--视频ID：" + e), "qq" == s.configure.channelType) {
let n = qq.createRewardedVideoAd({
adUnitId: e
});
s.showDLog("--视频ID：" + n), n.onError(function(e) {
console.log("videoAd onError", e), s.showDLog("1.调用正常，但没有合适的广告返回给用户。 2. 错误的调用导致的异常返回。" + e);
}), n.onLoad(function(e) {
s.showDLog("GO:激励视频 广告加载完成" + JSON.stringify(e));
}), n.onClose(function(e) {
console.log("videoAd onClose", e), s.showDLog("关闭广告"), e && e.isEnded ? (o("1", "正常播放结束，可以下发游戏奖励"), 
n.offClose()) : o("0", "播放中途退出，不下发游戏奖励");
}), n.load().then(() => {
n.show().then(() => {}).catch(e => {
s.showDLog("-激励视频 广告显示失败-"), o("0", "播放中途退出，不下发游戏奖励");
});
}).catch(e => {
console.log("激励视频加载失败"), o("0", "播放中途退出，不下发游戏奖励");
});
} else if ("kuaishou" == s.configure.channelType) {
var n;
(n = ((n = {}).adUnitId = e, ks.createRewardedVideoAd(n))) ? (n.onClose(e => {
e && e.isEnded ? o("1", "正常播放结束，可以下发游戏奖励") : o("0", "播放中途退出，不下发游戏奖励");
}), n.onError(e => {
o("0", "展示失败");
}), n.show().then(function(e) {
console.log("show rewarded video ad success, result is " + e);
}).catch(function(e) {
o("0", "展示失败");
})) : (console.log("创建激励视频组件失败"), o("0", "创建激励视频组件失败"));
} else if ("uc" == s.configure.channelType) (n = uc.createRewardVideoAd()).show().then().catch(e => s.showDLog("激励视频ERROR：" + e)), 
n.onLoad(() => {
s.showDLog("激励视频-广告加载成功");
}), n.onError(e => {
s.showDLog("激励视频-广告加载失败", e), o("0", "激励视频-广告加载失败" + e);
}), n.onClose(e => {
e && e.isEnded ? (o("1", "正常播放结束，可以下发游戏奖励"), s.showDLog("正常播放结束，可以下发游戏奖励 res: ", e)) : (s.showDLog("播放中途退出，不下发游戏奖励 res : ", e), 
o("0", "播放中途退出，不下发游戏奖励"));
}); else if ("xiaomi" == s.configure.channelType || "vivo" == s.configure.channelType || "oppo" == s.configure.channelType) try {
s.showDLog("_版本库需设定1070+ / 1061+");
var t = qg.createRewardedVideoAd({
adUnitId: e
});
t.load(), t.onLoad(() => {
t.show();
}), t.onError(e => {
console.log("onError:" + JSON.stringify(e)), o("0", "广告error :" + JSON.stringify(e));
}), t.onClose(e => {
null == e || e.isEnded ? o("1", "广告播放完成") : (console.log("广告没看完"), o("0", "广告没看完"));
});
} catch (e) {
console.log("联系技术RewardVideoAd error：", e), o("0", "广告error :" + e);
}
}
sendMsgByCode(e, o) {
var s, n, t;
"qq" === this.configure.channelType && (s = (s = qq.getSystemInfoSync()).model + "_" + s.windowWidth + "_" + s.windowHeight + "_" + s.version + "_" + s.platform + "_" + s.system + "_" + this.roleLoginData.suid + "_" + this.roleLoginData.userID, 
this.showDLog("UDID====>:" + s), t = e + (n = new Date().valueOf()) + this.roleLoginData.suid, 
t = lmd5.hex_md5(t), qq.request({
url: this.configure.url + "api/sendBindMobileCode",
method: "POST",
data: {
appid: this.configure.appID,
mobile: e,
uid: this.roleLoginData.suid,
udid: s,
timestamp: n,
sign: t
},
header: {
"content-type": "application/x-www-form-urlencoded"
},
success(e) {
1 === e.data.code ? o(1, "验证码:" + e.data.message) : o(0, "验证码：" + e.data.message);
},
fail(e) {
o(0, "发送失败");
}
}));
}
sendMsgByCodeBIND(e, o, s) {
var n, t, a;
"qq" === this.configure.channelType && (n = (n = qq.getSystemInfoSync()).model + "_" + n.windowWidth + "_" + n.windowHeight + "_" + n.version + "_" + n.platform + "_" + n.system + "_" + this.roleLoginData.suid + "_" + this.roleLoginData.userID, 
a = e + (t = new Date().valueOf()) + this.roleLoginData.suid + o, a = lmd5.hex_md5(a), 
qq.request({
url: this.configure.url + "api/bindMobile",
method: "POST",
data: {
appid: this.configure.appID,
mobile: e,
uid: this.roleLoginData.suid,
udid: n,
timestamp: t,
vcode: o,
sign: a
},
header: {
"content-type": "application/x-www-form-urlencoded"
},
success(e) {
1 === e.data.code ? s(1, "绑定号码:" + e.data.message) : s(0, "绑定号码：" + e.data.message);
},
fail(e) {
s(0, "绑定失败");
}
}));
}
bindServiceByUserIDIsVIP(e, o, s) {
var n = this;
if (this.authFriendByUsers(), n.showDLog("VIP客服"), this.roleLoginData.hasOwnProperty("serverVipUser")) return n.showDLog("VIP客服 已绑定，直接打开"), 
n.doga(2, this.roleLoginData.serverVipUser, e, o, s);
n.showDLog("VIP客服 无绑定，直接绑定"), this.bindServicedoPostByUser(1, function(t, a) {
1 == t ? (n.showDLog("====VIP客服绑定成功:" + JSON.stringify(a)), n.showDLog("VIP客服绑定成功" + (t = a).serverUser), 
n.showDLog("====VIP客服绑定成功:" + a), n.showDLog("VIP客服绑定成功" + a.cid), n.showDLog("VIP客服绑定成功" + a.id), 
n.showDLog("VIP客服绑定成功" + a.isVip), n.showDLog("VIP客服绑定成功" + a.serverUser), n.showDLog("VIP客服绑定成功" + JSON.stringify(n.roleLoginData)), 
n.roleLoginData.serverVipUser = t.serverUser, a = n.doga(2, t.serverUser, e, o, s), 
s(1, a)) : n.showDLog("VIP客服绑定失败");
});
}
bindServiceByUserID(e, o, s) {
var n = this;
if (this.authFriendByUsers(), this.roleLoginData.hasOwnProperty("serverUser")) return n.showDLog("普通客服 已绑定，直接打开"), 
n.doga(2, this.roleLoginData.serverUser, e, o, s);
n.showDLog("普通客服 无绑定，直接绑定"), this.bindServicedoPostByUser(0, function(t, a) {
1 == t && (n.showDLog("====普通客服绑定成功data:" + JSON.stringify(a)), n.showDLog("====普通客服绑定成功data:" + (t = a)), 
n.showDLog("普通客服绑定成功" + a.cid), n.showDLog("普通客服绑定成功" + a.id), n.showDLog("普通客服绑定成功" + a.isVip), 
n.showDLog("普通客服绑定成功" + a.serverUser), n.showDLog("普通客服绑定成功" + JSON.stringify(n.roleLoginData)), 
n.roleLoginData.serverUser = t.serverUser, a = n.doga(2, t.serverUser, e, o, s), 
s(1, a));
}), n.showDLog("普通客服 无绑定，直接绑定。结束！");
}
bindServicedoPostByUser(e, o) {
this.showDLog("是否是VIP：" + e);
var s = this.configure.channelID + this.roleLoginData.suid + "q2Hkr";
s = lmd5.hex_md5(s);
qq.request({
url: this.configure.urlSDK + "/api/bindServerUser/" + this.configure.channelID + ".do",
method: "POST",
data: {
userID: this.roleLoginData.suid,
isVip: e,
sign: s
},
header: {
"content-type": "application/x-www-form-urlencoded"
},
success(e) {
var s;
1 === e.data.code ? (console.log("绑定返回的data：" + e.data), s = JSON.stringify(e.data), 
console.log("绑定返回的data：" + s), s = JSON.parse(s), console.log("绑定返回的gggg：" + s), 
console.log("=>->" + s.data.serverUser), o(1, s.data)) : o(0, "客服绑定客服失败：" + e.data.msg);
},
fail(e) {
o(0, "客服绑定客服请求失败：" + e.data.msg);
}
});
}
authFriendByUsers() {
qq.getSetting({
success(e) {
e.authSetting["setting.addFriend"] || qq.authorize({
scope: "setting.addFriend",
success() {
qq.startRecord();
}
});
}
});
}
addColorSign(e) {
qq.addColorSign({
success(o) {
e.success(o);
},
fail(o) {
e.fail(o);
},
complete(o) {
e.complete(o);
}
});
}
saveAppToDesktop(e) {
var o = this;
o.showDLog("提示：回调需要监听complete(res)方法"), "qq" == this.configure.channelType ? qq.saveAppToDesktop({
success(o) {
e.success(o);
},
fail(o) {
e.fail(o);
},
complete(o) {
e.complete(o);
}
}) : "xiaomi" == this.configure.channelType ? (shortcut = qg.getShortcut()).hasInstalled({
success: function() {
e.success(res);
},
fail: function() {
shortcut.install({
success: function() {
e.success(res);
},
fail: function() {
e.fail(err);
}
});
}
}) : "oppo" == this.configure.channelType || "vivo" == this.configure.channelType ? qg.hasShortcutInstalled({
success: function(s) {
0 == s ? qg.installShortcut({
success: function() {
e.success(s);
},
fail: function(o) {
e.fail(o);
},
complete: function() {
e.complete("完成");
}
}) : o.showDLog("已经创建过了快捷图标");
},
fail: function(e) {},
complete: function() {}
}) : "kuaishou" == this.configure.channelType && ks.addShortcut({
success() {
console.log("添加桌面成功"), e.success("添加桌面成功");
},
fail(o) {
-10005 === o.code ? (console.log("暂不支持该功能"), e.fail("暂不支持该功能")) : (console.log("添加桌面失败", o.msg), 
e.fail("添加桌面失败", o.msg));
}
});
}
openGroupProfile(e, o) {
1 === arguments.length ? (console.log("频道---open"), qq.openGuildProfile && (void 0 !== this.roleLoginData.qqAppKey ? "" == this.roleLoginData.qqAppKey ? qq.openGuildProfile(e) : (console.log("打印：" + this.roleLoginData.qqAppKey), 
qq.openGuildProfile(this.roleLoginData.qqAppKey)) : console.log("error"))) : 2 === arguments.length && (console.log("一键加群---open"), 
qq.openGroupProfile({
groupId: e,
success(e) {
o.success(e);
},
fail(e) {
o.fail(e);
},
complete(e) {
o.complete(e);
}
}));
}
startLoadingCheck() {
console.log("需要升级基础库版本 —— 1.62.3 开始支持"), qq.startLoadingCheck();
}
notifyGameCanPlay() {
console.log("需要升级基础库版本 —— 1.62.3 开始支持"), qq.notifyGameCanPlay();
}
onGameFix(e) {
console.log("需要升级基础库版本 —— 1.62.3 开始支持"), qq.onGameFix(e);
}
onShowonShareAppMessage(e, o, s) {
var n = this;
qq.onShareAppMessage(() => ({
title: e,
imageUrl: o,
query: "openid=" + n.roleLoginData.sdkUserID + "&" + s
}));
}
shareOnVideoCircle(e, o) {
var s = this, n = {
cid: s.configure.channelID,
shareId: 10
};
let t = {};
s.httpRequestPay({
url: "sdk/xyxShare",
method: "POST",
data: n,
success: function(n) {
1 == n.state ? "是" == (t = JSON.parse(n.extension)).isLandscape ? t.isLandscape = !0 : t.isLandscape = !1 : (t.content = e.content, 
t.tagList = e.tagList, t.coverUrl = e.coverUrl, t.videoUrl = e.videoUrl, t.isLandscape = e.isLandscape);
try {
qq.shareQQCircle({
tagList: t.tagList,
title: t.content,
content: t.content,
coverUrl: t.coverUrl,
videoUrl: t.videoUrl,
isLandscape: t.isLandscape,
success(e) {
s.showDLog("--success--"), o(1, "发布成功");
},
fail(e) {
s.showDLog("--fail--"), o(0, "发布失败");
},
complete() {
s.showDLog("发布：拉起完成--");
}
});
} catch (n) {
s.showDLog("ERROR shareOnVideoCircle()=>请检查基础库版本 — 最低版本需 1.64.1"), s.showDLog("ERROR shareOnVideoCircle()=>请使用真机测试");
}
},
error: function(e) {
s.showDLog("error====网络请求失败，请检查网络或上报");
}
});
}
}
window.XMaiMiniXyx = e;
window.GameLogic.XMaiMiniXyx = e;
}