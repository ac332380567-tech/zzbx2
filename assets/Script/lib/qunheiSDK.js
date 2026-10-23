(function() {
var e = function() {};
e.prototype = {
unid: "1",
uid: "0",
gid: "0",
source: "0",
isinit: "0",
uninit: "0",
qhage: "0",
qhverifymd5: "0",
qhlogin: "0",
channel: "0",
channelid: "0",
qhext: "0",
qhdata: "{}",
qhorder: "{}",
sharedata: "{}",
gzdata: "{}",
isgzdata: "{}",
initdata: "{}",
roledata: "{}",
qhaddata: "{}",
qhsfdata: "{}",
qhcheckstr: "0",
qhact: "0",
qhinitact: "0",
qhisgzact: "0",
qhsfyztype: "0",
qhadact: "0",
qhxtuid: "0",
ltime: "0",
isfcm: "0",
isqhiframe: "0",
isqhapp: "0",
qhpwdtop: "0",
qhpaytime: "0",
onlinetime: "0",
qhinterval: null,
qhdomain: "http://m.heitu.com",
payListener: null,
init: function(e) {
"3229962" == e.username && (console.log = function() {
return !1;
});
"54150656x" != e.username && "3229962" != e.username || qhsdk.loadJs("https://unpkg.com/vconsole@latest/dist/vconsole.min.js", function() {
new VConsole();
console.log("tsok");
console.log("qhsdkuid1 = " + qhsdk.uid);
}, "15");
console.log("qhinit ok!" + this.formatParams(e));
var s = document.location.protocol;
this.qhdomain = "https:" == s ? "https://m.heitu.com" : "http://m.heitu.com";
console.log("protocol = " + s);
this.qhinitact = 4;
this.uid = e.username;
this.gid = e.gid;
setTimeout(function() {
console.log("qhsdkuid2 = " + qhsdk.uid);
}, 3e4);
if (e.qhchannel && e.qhchannelid) {
var t = e.qhchannel.split("_");
this.channel = "jiuyoucube" == t[0] ? "jiuyou_cube" : t[0];
this.channelid = e.qhchannelid;
t[1] && (this.ltime = t[1]);
t[2] && (this.qhxtuid = t[2]);
t[3] && (this.isqhapp = t[3]);
t[4] && (this.qhpwdtop = t[4]);
t[5] && (this.qhage = t[5]);
t[6] && (this.qhlogin = t[6]);
t[7] && (this.qhext = t[7]);
t[8] && (this.qhverifymd5 = t[8]);
t[9] && (this.isfcm = t[9]);
var i = this.qhdomain + "/game/getInit.html?gameact=1&uid=" + this.uid + "&gid=" + e.gid + "&channel=" + this.channel + "&channelid=" + this.channelid + "&qhxtuid=" + this.qhxtuid + "&ltime=" + this.ltime + "&qhext=" + encodeURIComponent(this.qhext);
console.log("initurl = " + i);
this.qhjsonp(i, function(e) {
console.log("isqhlogin = " + e.islogin);
if (1 != e.code) {
if ("hzapp" == qhsdk.isqhapp) var s = "http://adgame.heitu.com/adgame/gamelogin.html?gid=" + qhsdk.gid; else s = qhsdk.qhdomain + "/game/login.html?gid=" + qhsdk.gid;
var t = qhsdk.isqhapp.split(",");
2 == e.islogin && "isqhsy" != t[0] && qhsdk.errortips("登录账号过期", s);
if (2 == e.isltime && "isqhsy" != t[0]) {
window.parent.postMessage({
isqhiframe: 1
}, qhsdk.qhdomain);
onmessage = function(e) {
"isqhiframe" == (e = e || event).data && (qhsdk.isqhiframe = "1");
};
setTimeout(function() {
"1" != qhsdk.isqhiframe && qhsdk.errortips("登录地址过期", s);
}, 3e3);
}
if ("1" == qhsdk.qhlogin || "2" == qhsdk.qhlogin) {
console.log("qhonlinetime = start1");
qhsdk.qhinterval = null;
if (null != qhsdk.qhinterval) {
clearInterval(qhsdk.qhinterval);
qhsdk.qhinterval = null;
}
qhsdk.qhinterval = setInterval(qhsdk.onlinetime, 6e4);
}
return !0;
}
qhsdk.initdata = e.msg;
if (2 == e.msg.version) {
qhsdk.isunion = 1;
qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/" + e.msg.unid + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5");
}
});
} else {
var a = this.qhdomain + "/game/getUnid/gameact/1/cschannel/2/uid/" + this.uid + "/gid/" + e.gid;
this.qhjsonp(a, function(e) {});
}
e.source && window.parent.postMessage({
qhtguser: 1,
source: e.source,
gid: e.gid
}, "*");
console.log("qhinit ok2!");
},
onlinetime: function() {
console.log("qhonlinetime = start2");
var e = "https://wlc.heitu.com/Include/wlc/api.php?uid=" + qhsdk.uid + "&gid=" + qhsdk.gid + "&qhage=" + qhsdk.qhage + "&channel=" + qhsdk.channel;
qhsdk.qhjsonp(e, function(e) {
console.log("qhonlinetime = " + e.onlinetime);
if (1 == e.code && 1 == qhsdk.qhlogin) {
qhsdk.onlinetime = e.onlinetime;
e.qhage > 0 && (qhsdk.qhage = e.qhage);
if (1 == e.islock) {
clearInterval(qhsdk.qhinterval);
qhsdk.qhinterval = null;
var s = qhsdk.qhdomain + "/game/login.html?gid=" + qhsdk.gid;
qhsdk.errortips("登录超时2", s);
} else if (0 == qhsdk.qhage) {
if (20 == e.onlinetime || 30 == e.onlinetime || 58 == e.onlinetime) window.parent.postMessage({
qhshowverify: 1
}, "*"); else if (e.onlinetime >= 60) {
clearInterval(qhsdk.qhinterval);
qhsdk.qhinterval = null;
s = qhsdk.qhdomain + "/game/login.html?gid=" + qhsdk.gid;
qhsdk.errortips("登录超时", s);
}
} else if (qhsdk.qhage < 18 && e.onlinetime > 60) {
clearInterval(qhsdk.qhinterval);
qhsdk.qhinterval = null;
qhsdk.errortips("你是未成年用户,累计在线已超过1小时,请明天再来吧！", "onshow");
} else if (1 == e.isover) {
clearInterval(qhsdk.qhinterval);
qhsdk.qhinterval = null;
qhsdk.errortips("你是未成年用户,只能在20点到21点体验游戏！", "onshow");
}
}
});
},
share: function(e) {
e = arguments[0] ? arguments[0] : {
source: 1
};
console.log("qhshare ok!" + e.source);
0 != this.uid && 0 != this.gid || alert("init error!");
this.qhact = 2;
var s = this.qhdomain + "/game/getShare.html?username=" + this.uid + "&gid=" + this.gid;
this.qhjsonp(s, function(s) {
if (1 == s.code) {
qhsdk.sharedata = s.msg;
if (2 == s.msg.version) qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/" + s.msg.unid + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5"); else {
s.msg.openwx = e.openwx;
s.msg.sharetitle = e.sharetitle;
t(s.msg);
}
}
});
if (1 != e.source) {
console.log("qhshare source ok!");
window.parent.postMessage({
qhtguser: 1,
source: e.source,
gid: this.gid
}, "*");
}
},
wxgz: function() {
console.log("qhwxgz ok!");
this.qhact = 3;
var e = this.qhdomain + "/game/getUnid/gameact/1/uid/" + this.uid + "/gid/" + this.gid + "/channel/" + this.channel + "/channelid/" + this.channelid + "/qhxtuid/" + this.qhxtuid;
this.qhjsonp(e, function(e) {
"419104" != e.uid && "fenxiang" != qhsdk.channel && "qunhei" != qhsdk.channel || window.parent.postMessage({
qhshowgz: 1,
imgsrc: qhsdk.qhdomain + "/Static/Default/Home/images/wxgzqrcode.png"
}, "*");
if (1 == e.code) {
qhsdk.gzdata = e.msg;
2 == e.msg.version && qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/" + e.msg.unid + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5");
}
});
},
iswxgz: function(e) {
console.log("iswxgz ok!");
this.qhisgzact = 6;
var s = this.qhdomain + "/game/getWxGz/gameact/1/uid/" + this.uid + "/gid/" + this.gid + "/channel/" + this.channel + "/channelid/" + this.channelid + "/qhxtuid/" + this.qhxtuid;
this.qhjsonp(s, function(s) {
11 == s.code ? qhsdk.isgzdata = s.rdata : qhsdk.isgzdata = s;
startisgz2(function(s) {
e(s);
}, "qunhei");
});
},
userVerify: function(e, s) {
console.log("userVerify ok!s");
this.qhsfyzact = 7;
this.qhsfyztype = e;
if ("1" == this.qhlogin || "3" == this.qhlogin) {
console.log("userfcm back1!act=" + e + "&qhage=" + this.qhage);
if (3 == e && "0" == this.qhage) window.parent.postMessage({
qhshowverify: 1
}, "*"); else {
if (1 == e) {
if ("35219651" == this.uid) {
s({
code: "2",
msg: "关闭验证"
});
return;
}
s({
code: "1",
msg: "开启验证"
});
return;
}
if ("0" == this.qhage) {
s({
code: "2"
});
return;
}
if (this.qhage >= 18) {
s({
code: "1",
state: "1",
age: this.qhage,
cardmd5: this.qhverifymd5
});
return;
}
if (this.qhage < 18) {
s({
code: "1",
state: "2",
age: this.qhage,
cardmd5: this.qhverifymd5
});
return;
}
}
} else if (3626 == this.gid && "gameshandian" == this.channel) {
if (1 == e) {
s({
code: "1",
msg: "开启验证"
});
return;
}
qhsdk.loadJs(this.qhdomain + "/Upload/jsport/" + this.channel + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5");
} else if (3630 == this.gid && "gamekele" == this.channel) {
if (1 == e) {
s({
code: "1",
msg: "开启验证"
});
return;
}
qhsdk.loadJs(this.qhdomain + "/Upload/jsport/" + this.channel + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5");
} else {
if ("gameqidu" != this.channel && "onesgame" != this.channel) {
4289 == this.gid ? s({
code: "1",
msg: "开启验证"
}) : s({
code: "2",
msg: "关闭验证"
});
return;
}
if (1 == e) {
s({
code: "1",
msg: "开启验证"
});
return;
}
if ("0" == this.qhage) {
s({
code: "2"
});
return;
}
if (this.qhage >= 18) {
s({
code: "1",
state: "1",
age: this.qhage,
cardmd5: this.qhverifymd5
});
return;
}
if (this.qhage < 18) {
s({
code: "1",
state: "2",
age: this.qhage,
cardmd5: this.qhverifymd5
});
return;
}
}
onmessage = function(e) {
if (1 == (e = e || event).data.qhverifyCodes) {
qhsdk.qhage = e.data.qhage;
qhsdk.qhverifymd5 = e.data.qhverifymd5;
console.log("userfcm back2!" + qhsdk.formatParams(e.data));
if (qhsdk.qhage >= 18) {
s({
code: "1",
state: "1",
age: qhsdk.qhage,
cardmd5: qhsdk.qhverifymd5
});
return;
}
if (qhsdk.qhage < 18) {
s({
code: "1",
state: "2",
age: qhsdk.qhage,
cardmd5: qhsdk.qhverifymd5
});
return;
}
} else if (2 == e.data.qhverifyCodes) {
console.log("userfcm back3!" + qhsdk.formatParams(e.data));
s({
code: "2"
});
}
};
},
pay: function(e, t) {
e.channel = this.channel;
e.channelid = this.channelid;
e.qhlogin = this.qhlogin;
e.isqhapp = this.isqhapp;
console.log(this.formatParams(e));
var i = new Date().getTime();
if (1 * i - 1 * this.qhpaytime < 2e3) console.log("qh sub pay error!"); else {
this.qhpaytime = i;
this.qhact = 1;
var a = qhsdk.qhdomain + "/pay/getOrder.html?" + this.formatParams(e);
this.qhjsonp(a, function(e) {
if (1 == e.code) {
qhsdk.qhdata = e.qhdata;
qhsdk.qhorder = e.msg;
if (2 == e.msg.version) {
var i = "jsjump" == e.qhdata.unid ? 7 : 5;
qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/" + e.qhdata.unid + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, i);
} else {
if (0 == qhsdk.qhage && "qunhei" == qhsdk.channel) {
window.parent.postMessage({
qhshowverify: 1
}, "*");
return;
}
if (qhsdk.qhage < 18 && "qunhei" == qhsdk.channel) {
qhsdk.errortips("您未满18岁不能充值！", !1);
return;
}
s(e.msg, e.qhdata);
}
onmessage = function(e) {
(e = e || event).data.codes && t(e.data.codes, e.data.msg);
};
} else {
if (71 == e.code) {
qhsdk.errortips("游戏无法充值，请联系客服！", !1);
return;
}
t(e.code, e.msg);
}
});
}
},
role: function(e) {
if (0 != this.uid && 0 != this.gid) {
console.log("isrole ok!");
this.qhact = 5;
console.log("isroledata:uid=" + qhsdk.uid + this.formatParams(e));
var s = qhsdk.qhdomain + "/game/creatRole/gameact/1.html?uid=" + qhsdk.uid + "&gid=" + this.gid + "&isqhapp=" + this.isqhapp + "&serverid=" + e.serverid + "&servername=" + e.servername + "&rolename=" + e.rolename + "&roleid=" + e.roleid + "&level=" + e.level + "&vip=" + e.vip + "&power=" + e.power + "&act=" + e.act + "&channel=" + this.channel + "&channelid=" + this.channelid + "&qhxtuid=" + this.qhxtuid + "&qhpwdtop=" + this.qhpwdtop + "&ltime=" + this.ltime + "&sign=" + e.sign + "&rolecreatetime=" + e.rolecreatetime;
console.log("roleurl" + s);
4 != e.act || "gamexyou2" == qhsdk.channel || "gamewl" == qhsdk.channel ? this.qhjsonp(s, function(s) {
var t = qhsdk.qhdomain + "/game/login.html?gid=" + qhsdk.gid;
if (2 != s.pwdtop) if (2 != s.isltime) {
if (1 == s.code) {
qhsdk.roledata = s.msg;
2 == s.msg.version ? qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/" + s.msg.unid + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5") : window.top.postMessage({
roleUp: 1,
roledata: e
}, "*");
}
} else qhsdk.errortips("登录地址过期2", t); else {
console.log("istop error!");
qhsdk.errortips("登录账号异常", t);
}
}) : console.log("roleact ok!");
} else console.log("init error!");
},
createAd: function(e, s, t) {
console.log("qhsdk createAd ok!" + e);
this.qhact = 6;
this.qhadact = e;
var i = this.qhdomain + "/game/manageAd/gameact/1.html?uid=" + this.uid + "&gid=" + this.gid + "&channel=" + this.channel + "&channelid=" + this.channelid;
this.qhjsonp(i, function(s) {
if (1 == s.code) {
qhsdk.qhaddata = s.msg;
2 == s.msg.version ? qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/" + s.msg.unid + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5") : window.top.postMessage({
createAd: 1,
adact: e,
extend: t
}, "*");
}
});
onmessage = function(e) {
if ((e = e || event).data.adcodes) {
console.log("adorigin:" + e.origin);
var t = e.origin.split(".");
"heitu" == t[1] || "qunhei" == t[1] ? s({
adcodes: e.data.adcodes,
msg: e.data.msg
}) : 1 == e.data.isapp && s({
adcodes: e.data.adcodes,
msg: e.data.msg
});
}
};
},
checkWord: function(e, s) {
console.log("checkWord ok!");
this.qhact = 7;
qhsdk.qhcheckstr = e;
if ("yx4399" == this.channel) {
qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/yx4399.sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5");
onmessage = function(e) {
if (1 == (e = e || event).data.checkword) {
var t = e.data.info;
s({
code: t.data.code,
words: t.data.words
});
} else s({
code: "10000",
words: "0"
});
};
} else s({
code: "10000",
words: "0"
});
},
jumpLS: function() {
this.qhact = 8;
qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/" + this.channel + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5");
},
argPrivacy: function() {
this.qhact = 9;
qhsdk.loadJs(qhsdk.qhdomain + "/Upload/jsport/" + this.channel + ".sdk.js?v=" + Math.random(), function() {
startunsdk();
}, "5");
},
loadJs: function(e, s, t) {
t || (t = 1);
if (document.getElementById("qhjsid" + t)) {
s();
return !1;
}
var i = document.getElementsByTagName("head").item(0), a = document.createElement("script");
a.type = "text/javascript";
a.src = e;
a.id = "qhjsid" + t;
i.appendChild(a);
a.onload = a.onreadystatechange = function() {
this.readyState && "loaded" != this.readyState && "complete" != this.readyState || s();
a.onload = a.onreadystatechange = null;
};
},
loadCss: function(e, s) {
s || (s = 1);
if (document.getElementById("qhcssid" + s)) return !1;
var t = document.getElementsByTagName("head").item(0), i = document.createElement("link");
i.type = "text/css";
i.rel = "stylesheet";
i.href = e;
i.id = "qhcssid" + s;
t.appendChild(i);
i.onload = i.onreadystatechange = function() {
!this.readyState || "loaded" == this.readyState || this.readyState;
i.onload = i.onreadystatechange = null;
};
},
qhjsonp: function(e, s) {
if (e) {
var t = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ], i = Math.floor(10 * Math.random()), a = Math.floor(10 * Math.random()), n = Math.floor(10 * Math.random()), o = "getJSONP" + t[i] + t[a] + t[n], d = "qhsdk.qhjsonp." + o;
-1 === e.indexOf("?") ? e += "?callback=" + d : e += "&callback=" + d;
var h = document.createElement("script");
qhsdk.qhjsonp[o] = function(e) {
try {
s && s(e);
} catch (e) {} finally {
delete qhsdk.qhjsonp[o];
h.parentNode.removeChild(h);
}
};
h.src = e;
document.getElementsByTagName("head")[0].appendChild(h);
}
},
formatParams: function(e) {
var s, t = [];
for (s in e) e.hasOwnProperty(s) && t.push(encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
return t.join("&");
},
getParams: function(e) {
var s = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), t = window.location.search.substr(1).match(s);
return null != t ? unescape(t[2]) : null;
},
sharetips: function() {
var e = document.getElementById("wxshare");
if (e) e.style.display = "inline"; else {
var s = document.createElement("img");
s.id = "wxshare";
s.src = this.qhdomain + "/Static/Default/Home/images/wxshtip.png?v=2";
s.style.top = "0px";
s.style.right = "10px";
s.style.height = "auto";
s.style.position = "absolute";
s.style.width = "40%";
s.style.zIndex = "10000";
document.getElementsByTagName("body")[0].appendChild(s);
}
setTimeout(function() {
document.getElementById("wxshare").style.display = "none";
}, 3e3);
},
wxgztips: function(e) {
var s = document.getElementById("wxgzimg");
if (s) s.style.display = "inline"; else {
var t = document.createElement("img");
t.id = "wxgzimg";
t.src = e;
t.style.top = "25%";
t.style.right = "50%";
t.style.marginRight = "-115px";
t.style.height = "auto";
t.style.position = "absolute";
t.style.width = "auto";
t.style.zIndex = "10000";
document.getElementsByTagName("body")[0].appendChild(t);
document.getElementById("wxgzimg").onclick = function() {
document.getElementById("wxgzimg").style.display = "none";
};
}
},
errortips: function(e, s) {
var t = document.getElementById("notice-errortips");
if (t) t.style.display = "inline"; else {
var i = document.createElement("div");
i.id = "notice-errortips";
i.style.top = "0";
i.style.left = "0";
i.style.padding = "200px 10px";
i.style.height = "100%";
i.style.background = "rgba(0,0,0,0.5)";
i.style.width = "100%";
i.style.zIndex = "9998";
i.style.position = "fixed";
i.style.color = "#fff";
i.style.textAlign = "center";
i.innerHTML = e;
document.getElementsByTagName("body")[0].appendChild(i);
}
"onshow" != s && setTimeout(function() {
document.getElementById("notice-errortips").style.display = "none";
s && (top.location.href = s);
}, 3e3);
}
};
window.qhsdk = new e();
function s(e, s) {
switch (e.channel) {
case "steam123":
var t = {
action: "subpay",
key: "A411F5D6C98A4DA35B352D6D23800359",
orderid: e.ext,
steamid: e.channelid,
appid: "1395790",
currency: "CNY",
amount: 100 * e.money,
description: e.goodsName
};
alert(t);
window.parent.postMessage(t, "*");
break;

case "jsjump":
if ("-1" == s.jsurl.indexOf("?")) var i = s.jsurl + "?" + qhsdk.formatParams(e); else i = s.jsurl + "&" + qhsdk.formatParams(e);
if (e.unionpayurl) i = e.unionpayurl;
1 == s.jself ? location.href = i : top.location.href = i;
break;

default:
if ("1" == e.qhpay && "3609" != qhsdk.gid) "3290" == qhsdk.gid || "4682" == qhsdk.gid ? window.top.postMessage(e, "*") : window.parent.postMessage(e, "*"); else if ("iosapp" == qhsdk.isqhapp) {
e.qhpay = 1;
"3290" == qhsdk.gid || "4682" == qhsdk.gid ? window.top.postMessage(e, "*") : window.parent.postMessage(e, "*");
} else {
if ("-1" == s.jsurl.indexOf("?")) i = s.jsurl + "?" + qhsdk.formatParams(e); else i = s.jsurl + "&" + qhsdk.formatParams(e);
location.href = i;
}
}
}
function t(e) {
switch (e.unid) {
case "gameqidu":
qhsdk.loadJs(e.jsurl, function() {});
break;

case "gamexmly":
window.postMessage("shareok", "*");
break;

case "stargame":
qhsdk.sharetips();
window.postMessage("shareok", "*");
break;

default:
if ("4596" == qhsdk.gid && !i()) {
window.postMessage("shareok", "*");
break;
}
"3542" != qhsdk.gid && "2422" != qhsdk.gid && window.parent.postMessage(e, "*");
if ("3883" == qhsdk.gid || "4973" == qhsdk.gid) {
window.postMessage("shareok", "*");
break;
}
}
}
function i() {
return !!navigator.userAgent && "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
}
})();

function wxShareRes() {
window.postMessage("shareok", "*");
}

function isJson(e) {
if ("string" != typeof e) return !1;
try {
JSON.parse(e);
return !0;
} catch (e) {
return !1;
}
}

function startisgz2(e, s) {
console.log("isgz!" + s);
console.log("qhuid!" + qhsdk.uid);
var t = qhsdk.isgzdata;
if ("doggame" == t.unid) qhsdk.loadJs(t.jsurl + "?v=" + Math.random(), function() {
if (!s) var s = new GameGD({
appid: t.appid,
token: t.token
});
s.checkFollow(function(s) {
if (s) var t = {
code: 1,
msg: "已关注"
}; else t = {
code: 2,
msg: "未关注"
};
e(t);
});
}); else if ("game9g" == t.unid) qhsdk.loadJs(t.jsurl, function() {
new Game9G({
gameid: t.gameid,
channel: t.channel,
token: t.token
}).checkSubscribe(function(s) {
if (1 == s) var t = {
code: 1,
msg: "已关注"
}; else t = {
code: 2,
msg: "未关注"
};
e(t);
});
}); else if ("gameshandian" == t.unid) {
qhsdk.loadJs("https://pay.17m3.com/gamepay/dhpay.min.js?v=" + Math.random(), function() {}, "2");
qhsdk.loadJs(t.jsurl, function() {
sdw.getSdwQcodeInfo(t.gid, function(s) {
var t = s.atSDW;
if (1 == t) var i = {
code: 1,
msg: "已关注"
}; else if (0 == t) i = {
code: 2,
msg: "未关注"
};
e(i);
});
});
} else {
console.log(t);
e(t);
}
}

window.addEventListener("message", function(e) {
if ("ShareAppMessageSucc" == e.data || "ShareTimelineSucc" == e.data || "shareSuccess" == e.data || "qhshareok" == e.data) {
window.postMessage("shareok", "*");
return !1;
}
if (1 == e.data.qhverifyCodes) {
qhsdk.qhage = e.data.qhage;
qhsdk.qhverifymd5 = e.data.qhverifymd5;
}
if (isJson(e.data)) {
var s = JSON.parse(e.data);
if ("f" == s.type && "fx" == s.name && 1 == s.issuccess) {
window.postMessage("shareok", "*");
return !1;
}
if ("shareNotify" == s.apiName) {
window.postMessage("shareok", "*");
return !1;
}
}
});

window.GameLogic.QunHei = window.qhsdk;