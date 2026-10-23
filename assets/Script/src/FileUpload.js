cc.Class({
name: "FileUpload",
extends: cc.Component,
properties: {
myButton: cc.Button
},
onLoad: function() {
var t = new cc.Button.EventHandler();
t.target = this.node;
t.component = "FileUpload";
t.handler = "onButtonClick";
t.customEventData = "Hello from Code!";
var e = this.myButton || this.getComponent(cc.Button);
e && e.clickEvents.push(t);
this.fileInput = document.createElement("input");
this.fileInput.type = "file";
this.fileInput.accept = "image/*";
this.fileInput.style.opacity = "0";
this.fileInput.style.position = "absolute";
this.fileInput.style.left = "0";
this.fileInput.style.top = "0";
this.fileInput.style.width = "100%";
this.fileInput.style.height = "100%";
this.fileInput.style.zIndex = "10";
this.fileInput.style.cursor = "pointer";
this.node, document.querySelector("canvas");
this.fileInput.addEventListener("change", this.onFileSelected.bind(this));
},
onButtonClick: function(t, e) {
cc.log("按钮被点击了！");
cc.log("自定义数据是：" + e);
this.fileInput && this.fileInput.click();
},
onFileSelected(t) {
const e = t.target.files[0];
e && this.uploadImage(e);
},
uploadImage(t) {
const e = new FormData();
e.append("upFile", t);
const n = new XMLHttpRequest();
var i = window.GameLogic.HabbyGameMgr.getUploadUrl(!0);
n.open("POST", i);
n.upload.onprogress = (t => {
if (t.lengthComputable) {
const e = t.loaded / t.total * 100;
cc.log("上传进度：" + e + "%");
}
});
n.onload = (() => {
if (200 === n.status) {
window.GameLogic.EventCenter.dispatchEventWith("feedbackimgupload", !1, {
isSuccess: !0,
result: n.responseText
});
cc.log("上传成功：", n.responseText);
} else {
window.GameLogic.EventCenter.dispatchEventWith("feedbackimgupload", !1, {
isSuccess: !1
});
cc.error("上传失败：", n.status);
}
});
n.onerror = (t => {
cc.error("网络错误：", t);
});
n.send(e);
},
onDestroy() {
this.fileInput && this.fileInput.parentNode && this.fileInput.parentNode.removeChild(this.fileInput);
}
});