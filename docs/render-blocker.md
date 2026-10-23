# 渲染阻塞结论：需要 2.2.x 引擎

日期：2026-10-23

## 现象

主城逻辑已就绪（`GRoot` 有 `home`，17 个子节点），但画面全黑。

## 实测数据

1. 渲染循环停死：帧数恒定 59/60，1.2 秒内捕获 72～475 次异常。
2. 异常链：`_checkBacth` 里 `getDefine` → 修掉后变成 `effect`（材质为 null）。
3. `cc.assetManager.builtins._resources` 为空（count = 0）。
4. `cc.Material.getBuiltinMaterial('2d-sprite')` 返回 false；`builtinResMgr` 不存在。
5. `getBuiltinMaterial` 的实现是 `cc.assetManager.builtins.getBuiltin("material", "builtin-" + name)`，内置资源为空时必然返回 null。

## 根因

1. 项目资源由 Cocos Creator **2.2** 构建。
2. 当前引擎是 **2.4.2**（npm `cocos-creator@2.4.2-q` 里的 `engine/bin/.cache/web-mobile/cocos2d-js-min.js`）。
3. 2.4 的 2D 渲染要求内置材质/effect 资源（`assets/internal` 构建产物），2.2 的包里没有这套资源。
4. npm 包内只有编辑器侧的源资产（`.effect` / `.material` JSON），不是运行时可直接加载的编译产物，无法在运行时注册。
5. 引擎源码仓库 `cocos-creator/engine` 已并入 `cocos/cocos-engine`，`v2.2.x` 标签已不存在；`download.cocos.com` 的 2.2 编辑器路径全部 404。

## 结论

渲染问题不是补丁能修的，必须换 **Cocos Creator 2.2.x 的 web-mobile 引擎**。

## 处理方式

拿到 2.2.x 引擎后，只需替换 `src/cocos2d-js.js` 一个文件，其余工程不用改：

1. 场景桥接（`src/shim.js`）解决 2.2 场景注册。
2. 路径别名（`raw-` 目录联接）。
3. 登录假数据与 RPC 拦截（`src/login-shim.js`）。
4. 游戏代码的 4 处空值防护。

## 可选获取途径

1. Cocos Dashboard 安装 Cocos Creator 2.2.x，从安装目录取 `resources/engine/bin/.cache/web-mobile/cocos2d-js-min.js`。
2. 任意 2.2.x 的 web-mobile 构建产物里的引擎文件（`cocos2d-js-min.js`，约 1.9 MB）。
3. 安装后放到 `src/cocos2d-js.js` 即可。
