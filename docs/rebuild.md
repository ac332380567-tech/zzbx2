# 从 APK 重建运行环境

仓库不包含 `res/`（约 261 MB），需要从原 APK 重新导出。完整步骤如下。

## 1. 解出资源

从 `zzbx2-openew.apk` 中提取以下目录，放到本仓库根目录：

```text
assets/res/import      -> res/import
assets/res/raw-assets  -> res/raw-assets
```

## 2. 补齐纹理路径

2.2 引擎会去 `res/import/xx/<uuid>.png` 找贴图，需要把 `res/raw-assets` 里的图片同时暴露在 `res/import` 下：

```powershell
$raw = "res\raw-assets"
$imp = "res\import"
Get-ChildItem $raw -Recurse -File | ForEach-Object {
  $rel = $_.FullName.Substring((Resolve-Path $raw).Path.Length + 1)
  $dst = Join-Path $imp $rel
  if (!(Test-Path $dst)) { New-Item -ItemType HardLink -Path $dst -Target $_.FullName | Out-Null }
}
```

## 3. 建立脚本目录联接

2.2 引擎按 `src/assets/Script/...` 加载脚本：

```powershell
cmd /c mklink /J "src\assets" "assets"
```

## 4. 引擎文件

`src/cocos2d-js.js` 已随仓库提供（Cocos Creator 2.2.2 的 web 引擎）。如需替换，取安装目录下：

```text
<CocosCreator>\resources\engine\bin\cocos2d-js-for-preview.js
```

## 5. 启动

```powershell
python -m http.server 8899 --bind 127.0.0.1
```

浏览器打开：

```text
http://127.0.0.1:8899/index.html
```

## 6. 两种模式

1. 离线模式（默认）：自动登录并加载 `data/loginreply.bin` 里的真实服务器表。
2. 联网模式：`index.html?real=1&channel=td_openew`，会连接官方服务器（需要有效账号）。

## 7. 关键文件

1. `src/login-shim.js`：离线登录、真实 LoginReply 注入、埋点打桩。
2. `src/uuid-fix.js`：把压缩 uuid 展开成完整 uuid。
3. `src/scene-fix.js`：场景与贴图修复（2.4 用，2.2 下自动跳过）。
4. `src/fgui-atlas-fix.js`：FGUI 图集预载。
5. `src/canvas-fix.js`：显示画布、隐藏 splash。
6. `data/loginreply.bin`：抓取的真实登录回复（含 15 张服务器表）。
