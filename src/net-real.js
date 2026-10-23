/* Real-network mode: give the 2.2 build a working WebSocket and let it talk
   to the official server instead of the local stubs. */
(function () {
  if (location.search.indexOf('real=1') < 0) return;
  if (window.__ZZBX2_NET_REAL__) return;
  window.__ZZBX2_NET_REAL__ = true;

  function log() {
    try { console.log.apply(console, ['[net-real]'].concat([].slice.call(arguments))); } catch (e) {}
  }

  function install() {
    if (!window.Net || !Net.SConn || !Net.WebSocketWrapper) return false;
    if (Net.__zzbx2Real) return true;
    Net.__zzbx2Real = true;
    var P = Net.WebSocketWrapper.prototype;

    P.dial = function (host, port, wssHost, wssPort) {
      var self = this;

      function NativeSocket(owner) {
        this.owner = owner;
        this.ws = null;
      }

      NativeSocket.prototype.connectByUrl = function (url) {
        var s2 = this;
        var ws = new WebSocket(url);
        ws.binaryType = 'arraybuffer';
        ws.onopen = function () {
          var o = s2.owner;
          o._state = 1;
          o._connected = true;
          try { o._onConnected(); } catch (e) {}
          if (o._conecting) {
            var c = o._conecting;
            o._conecting = null;
            try { c[0](); } catch (e) {}
          }
          log('connected', url);
        };
        ws.onmessage = function (ev) {
          try {
            var u8 = new Uint8Array(ev.data);
            var rb = s2.owner._readByte;
            var pos = rb.write_position || 0;
            if (pos + u8.length > rb._bytes.length) {
              var b = new Uint8Array(Math.max(pos + u8.length, rb._bytes.length * 2));
              b.set(rb._bytes.subarray(0, pos));
              rb._bytes = b;
              rb.data = new DataView(b.buffer);
            }
            rb._bytes.set(u8, pos);
            rb.write_position = pos + u8.length;
          } catch (e) {}
          try { s2.owner._onSocketData(ev); } catch (e) {}
        };
        ws.onclose = function () {
          s2.owner._connected = false;
          try { s2.owner._onClosed(); } catch (e) {}
          log('closed');
        };
        ws.onerror = function () { log('socket error'); };
        this.ws = ws;
      };

      NativeSocket.prototype.send = function (buffer) {
        try { this.ws.send(buffer); } catch (e) { log('send error', e && e.message); }
      };
      NativeSocket.prototype.writeBytes = NativeSocket.prototype.send;
      NativeSocket.prototype.readBytes = function () {};
      NativeSocket.prototype.read = function () {};
      NativeSocket.prototype.close = function () {
        try { if (this.ws) this.ws.close(); } catch (e) {}
      };

      this.socket = new NativeSocket(this);
      return new Promise(function (res, rej) {
        self._conecting = [res, rej];
        self.connectByUrl('wss://' + wssHost + ':' + wssPort);
      });
    };

    /* remove the local stub so the real prototype implementation runs */
    try { delete Net.SConn.inst.connectServer; } catch (e) {}
    try { delete Net.SConn.inst.ping; } catch (e) {}

    log('installed');
    return true;
  }

  /* The native SDK normally supplies the release channel. On web it falls back
     to "debug", which the server treats as a banned channel. Allow an override
     via ?channel=... and default to a production channel. */
  function applyChannel() {
    try {
      if (!window.Home || !Home.GlobalConfig || !Home.GlobalConfig.inst) return;
      var c = Home.GlobalConfig.inst;
      if (c.__zzbx2ChannelForced) return;
      var m = /[?&]channel=([^&]+)/.exec(location.search);
      var ch = m ? decodeURIComponent(m[1]) : 'td_openew';
      c.__zzbx2ChannelForced = true;
      try {
        Object.defineProperty(c, 'channel', { get: function () { return ch; }, set: function () {}, configurable: true });
        Object.defineProperty(c, 'subChannel', { get: function () { return ''; }, set: function () {}, configurable: true });
      } catch (e) {
        c.channel = ch;
        c.subChannel = '';
      }
      log('channel forced -> ' + ch);
    } catch (e) {}
  }

  var t = setInterval(function () {
    install();
    applyChannel();
  }, 100);
  setTimeout(function () { clearInterval(t); }, 60000);
})();
