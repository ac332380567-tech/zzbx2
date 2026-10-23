# zzbx2 web 播放器骨架

Cocos Creator 2.2 原生构建 -> 2.4.2 web 运行时的最小宿主。

## 启动

```bash
cd C:\Users\Administrator\lobsterai\project\zzbx2-web
python -m http.server 8899 --bind 127.0.0.1
```

然后打开 http://127.0.0.1:8899/index.html

## 目录

1. `index.html`：宿主页面，加载引擎、settings、shim、project.js，再按 `settings.jsList` 注入 27 个游戏脚本，最后调 `window.boot()`。
2. `main.js`：原包 `assets/main.js`（Cocos 2.2 的标准启动脚本，未改动）。
3. `src/cocos2d-js.js`：Cocos Creator 2.4.2 的 web-mobile 引擎（来自 `cocos-creator@2.4.2-q` npm 包的 `engine/bin/.cache/web-mobile/cocos2d-js-min.js`）。
4. `src/settings.js`：解密还原的 `settings.jsc`，仅把 `platform` 从 `android` 改为 `web`。
5. `src/project.js`：原包的模块加载器，提供 `window.__require`。
6. `src/shim.js`：把 2.2 的场景启动桥接到 2.4 的 assetManager（`loadScene` 按 uuid 走 `loadAny`，并把场景注册进 resources bundle）。
7. `assets/Script/**`：解密还原的 27 个脚本（路径与 `settings.jsList` 一致）。
8. `res/import`、`res/raw-assets`：原包资源。
9. `res/raw-`：指向 `res/raw-assets` 的目录联接（2.2 的 `rawAssetsBase` 是 `res/raw-`，2.4 的默认布局是 `res/raw-assets`）。

## 已验证

1. 引擎启动：日志 `Cocos Creator v2.4.2`。
2. 首场景 `loading_openew` 加载并运行：根节点 Canvas 下 Main Camera、bg、bgChar、logoName、progressBar（cc.ProgressBar）、logText、updateText 等全部实例化。
3. 脚本注册成功：场景内 `cc.MissingScript` 数量为 0。
4. 渲染中：约 48 draw calls。
5. 25 个 FairyGUI 包全部加载（loading、common、login、home、shop、battle、map、pvp 等）。
6. 91 张配置表加载完成（`config/all` 73 张 + `config/text`）。
7. **登录界面自动弹出**：`loginMix`（960×1600、27 个子节点，含 googleplayLoginBtn / facebookLoginBtn / quickLoginBtn / localLoginBtn / isSelectAgree）。

## web-boot.js 做的四处接管

1. 脚本与资源的 2.2→2.4 差异（`jsb` 兜底、场景注册、路径别名）。
2. FairyGUI：补 `asset.rawBuffer`，并把 `UIPackage.loadPackage` 改成按 `.bin` 加载 + 预载 atlas。
3. 隐私弹窗 `showPrivacyTermsWnd` 直接 resolve（原实现要等原生 SDK 回调，网页上永不返回）。
4. 网络：`Net.SConn.connectServer` / `ping` 置空，`checkServerAvailable` 强制返回 ok，热更 `_checkHotUpdate` 直接 resolve。
5. `GameLogic.entry` 加幂等守卫，避免 `startGame → entry → enterGame` 递归。

## 网络层现状（2026-10-23 实测）

1. `Net.SConn.connectServer()` → `start()` → `_connectCore()` → `_serverlist.getNextServer()` → `dial(server)`。
2. `dial()` 固定拼 `wss://<wsshost>:<wssport>`，通过 `Net.WebSocketWrapper` 的 `socket.connectByUrl()` 建连。
3. 在本构建中 `egret.WebSocket === undefined`，wrapper 的 socket 是空壳，`connectByUrl` 不会真的建连——这就是抓不到任何报文的原因，不是服务端问题。
4. `_serverType` 为 `debug` 时 `_connectCore` 直接短路；改成非 debug 后就会走 `dial()`，但因为第 3 点仍然连不出去。
5. 已在 `ws-mock/` 起了本地 WebSocket 服务（端口 9001）验证：只有手工 curl 能连上，游戏客户端未发起任何连接。

结论：要抓真实协议，必须先给 `WebSocketWrapper` 注入一个可用的 WebSocket 实现（native WebSocket 桥），或者换回 2.2 的 web 引擎。


1. 包里 12 个场景全是 `loading_*` 变体，登录/主城/战斗都是同场景内切换 FGUI 界面，不靠 `loadScene`。
2. 点登录按钮会进入真实账号校验（`GameAccount` / `Net.SConn`），当前被桩掉，只能停在登录界面。
3. `res/raw-` 是 Windows 目录联接；换机器时需要重新创建或用 `nativeBase` 覆盖。
