# 离线登录到主城（已跑通）

日期：2026-10-23
入口：`http://127.0.0.1:8899/index.html`（静态站 8899）

## 结果

无需服务器、无需 socket，页面加载后自动完成登录并进入主城。`GRoot` 实测为：

```
["loading", "loginMix", "home"]
```

`home` 尺寸 960×1600，17 个子节点：sceneBg、bg、qqtext、posHolder、posHolder2、centerGroup、BlackBG、top、resBar、topGroup 等。

## 实现方式（`src/login-shim.js`）

1. 原生桥接打桩：`platform.getUserInfo` 返回假用户，`Core.GetSDKInfo` / `GetIsProxy` / `GetIsVPN` 直接 resolve。
2. 账号存档注水：`GameAccount.inst._accountArchieve = { Players: [{ Uid: 10001, ... }] }`。
3. RPC 拦截：直接替换 `Net.rpcCall`，返回 `{ errcode: 0, payload }`，其中 payload 是序列化后的 `pb.LoginReply`。
4. 自动触发：等 `Entry.inst._loadingView` 就绪后调用 `LoginMgr.loginHandler._webLogin._internalLogin()`。

## 登录协议的关键细节

1. `pb.LoginReply.decode(d.payload)` —— 包装层字段是 `payload`，不是 `data`。
2. 包装层是 `{ errcode, payload }`，`errcode != 0` 会走提示/重登分支。
3. `LoginReply` 是扁平消息（Uid/Name/Ver/Wall/Gem/Rune/Shop/...），不是嵌套的 `Res[0].Players`。
4. 消息字段给空对象（`Wall: {}` 等）比给 `null` 安全，protobuf 会补默认值。

## 对游戏代码做的 4 处空值防护

数据缺失时这些初始化路径会抛异常，加了最小防护：

1. `setLockLevel`：`a && n > a._id_`（关卡数据缺失时跳过钳制）。
2. `refreshWallPalace`：`this._wallInfo && this._wallInfo.Level > 0`。
3. `refreshGem`：`(this._gemInfo && this._gemInfo.Gems || [])`，`e && e.GemSuccinct`。
4. `refreshData`：入口处 `if (!this._gemInfo) return;`。

## 已知残留

1. 主城打开后 `CCClass._activateMaterial` 报 `Cannot read properties of null (reading 'define')`，是 3D 材质初始化，暂不影响 UI 显示。
2. `loading` 与 `loginMix` 视图仍留在 `GRoot` 上（未执行 `loadingDone()` 的清理分支）。
3. 服务端网络层（socket / 握手 / AES-GCM）已单独验证通过，但当前流程不依赖它。
