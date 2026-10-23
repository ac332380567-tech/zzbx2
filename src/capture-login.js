/* Capture the server's LoginReply payload (contains XlsDatas) and forward it
   to the local dump server so it can be turned into an offline data pack. */
(function () {
  if (window.__ZZBX2_CAPTURE__) return;
  window.__ZZBX2_CAPTURE__ = true;

  function post(bytes, name) {
    try {
      var u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
      fetch('http://127.0.0.1:9004/dump?name=' + (name || 'loginreply'), {
        method: 'POST',
        body: u8
      }).then(function (r) { return r.text(); })
        .then(function (t) { console.log('[capture] ' + name + ' -> ' + t); })
        .catch(function (e) { console.log('[capture] post failed', e && e.message); });
    } catch (e) {
      console.log('[capture] error', e && e.message);
    }
  }

  function install() {
    if (!window.pb || !pb.LoginReply || pb.LoginReply.__cap) return false;
    var orig = pb.LoginReply.decode;
    pb.LoginReply.decode = function (buf) {
      try { post(buf, 'loginreply'); } catch (e) {}
      return orig.apply(this, arguments);
    };
    pb.LoginReply.__cap = true;
    console.log('[capture] LoginReply.decode hooked');
    return true;
  }

  if (!install()) {
    var t = setInterval(function () { if (install()) clearInterval(t); }, 300);
    setTimeout(function () { clearInterval(t); }, 60000);
  }
})();
