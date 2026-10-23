# 网络层与握手协议（静态还原 + 实测）

日期：2026-10-23
来源：`assets/Script/src/GameLogic.js` 的 `Net.SConn` / `Net.SNetCrypto` / `Net.WebSocketWrapper`

## 连接流程

1. `Net.SConn.connectServer()` → `start()`；`start()` 在 `_closed === false` 时直接 return（所以默认什么都不做）。
2. `start()` → `connect()` → `_connectCore()`：
   - `_serverlist.refresh()` → `getNextServer()` → `dial(server)`
   - `dial(host, port, wssHost, wssPort)` 固定拼 **`wss://<wssHost>:<wssPort>`**
   - 通过 `Net.WebSocketWrapper.socket.connectByUrl()` 建连
3. 本构建中 `egret.WebSocket === undefined`，wrapper 的 socket 是空壳，不会真正建连。这是"点了没反应、抓不到包"的根本原因。

## 握手协议（`_doNewConnHandshake`）

| 方向 | 长度 | 内容 |
|---|---|---|
| 客户端 → 服务器 | 33 B | `[0x01]` + X25519 客户端公钥（32 B） |
| 服务器 → 客户端 | 112 B | 服务器公钥 32 B + connID（u64 小端 8 B）+ salt 8 B + 签名 64 B |
| 客户端 → 服务器 | 32 B | `HMAC-SHA256(salt, X25519(clientPriv, serverPub))` |

握手之后进入 AES-GCM 加密通道：`_sharedSecret = X25519(...)`，`_packetCipher = PacketAesGcmCipher.createForClient(sharedSecret)`。

## 关键发现

1. **签名校验可绕过**：`verifyServerHello(...)` 的结果仅在 `channel != "debug"` 时才抛错。本项目 `channel = "debug"`，所以服务器 hello 的 64 字节签名可以填 0。
2. `_connID` 来自服务器返回的 u64。
3. `_sharedSecret` 由 X25519 派生，之后所有业务包都走 AES-GCM，需要按 `PacketAesGcmCipher` 的帧格式封装。

## 已搭好的验证设施

1. `ws-mock/server2.js`：本地 9001 端口，收到 33 B 客户端 hello 后生成 X25519 密钥对、回 112 B server hello（签名填 0）、校验并记录客户端 HMAC，之后记录业务包。
2. 浏览器侧 native WebSocket 桥：解决了 `egret.WebSocket` 缺失问题，已能让 Chrome 真正连上本地 9001（服务端日志有 origin=`http://127.0.0.1:8899` 的连接记录）。

## 业务层（已定位）

1. `Net.rpcCall(msgID, payloadBuilder, showMask, ...)` 构造 `Packet{seq, msgID, msgType: MsgReq, payload: payload.finish()}`。
2. `pb.MessageID` 共 193 条，含 `C2S_PING = 110`、`C2S_LOGIN`、`C2S_ACCOUNT_LOGIN`、`C2S_SDK_ACCOUNT_LOGIN`、`C2S_TOURIST_REGISTER_ACCOUNT` 等。
3. 消息类只导出了数据结构（`pb.LoginArg`、`pb.LoginReply`、`pb.AccountLoginArg`、`pb.SdkAccountLoginArg` 等），没有 `pb.C2S_PING` 构造函数，说明 C2S_PING 是无 payload 的空消息。
4. 传 `null` 作为 payload 会在编码阶段报 `Cannot read properties of null (reading 'getDefine')`，说明编码器会按 msgID 查消息定义，空消息也需要映射。

## 当前阻塞

握手完成后 socket 会在数秒内被对端（客户端自身）关闭，日志为 `WebSocket onClosed` → `_tryReconn dial "_onClosed"`。怀疑是旧连接的重连循环与新手握的 generation 冲突，或是 readLoop 在解析首帧时抛错触发 `_stopReadLoop`。


1. 桥接对象的 `close()` / `readFull()` 语义与真实 wrapper 不完全一致，握手流程目前会中途失败。
2. 完成握手后，需要按 `PacketAesGcmCipher` 解密首个业务包（登录请求），才能拿到消息结构。


## 已解出第一条业务包（2026-10-23 13:10）

抓到的帧：`00000019` + 25 字节密文。解密结果（9 字节）：

```
01 0000006e 00000002
```

1. `01` = msgType（MsgReq）。
2. `0000006e` = 110 = `C2S_PING`，与手工发起的 rpcCall 完全对应。
3. `00000002` = 包序号 seq。

解密参数（已实测验证）：

1. 密钥：`AES-256-GCM key = SHA256(sharedSecret || "iscream.PacketAesGcm.v1")`。
2. Nonce：12 字节，`[0xA1][00 00 00][u64 LE seq]`，客户端到服务器 seq 从 0 开始；服务器到客户端前缀 `0xB2`。
3. AAD：帧头 4 字节大端长度（密文长度 + 16 字节 tag）。
4. 帧格式：`[len:4 BE][ciphertext][tag:16]`。
5. 明文格式：`[msgType:1][msgID:4 BE][seq:4 BE][payload]`。

解密器：`ws-mock/decrypt.js`。
