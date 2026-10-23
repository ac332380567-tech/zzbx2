/* zzbx2 web boot: emulate the native <-> JS handshake the loading scene expects. */
(function () {
  if (window.__ZZBX2_WEB_BOOT__) return;
  window.__ZZBX2_WEB_BOOT__ = true;

  /* minimal jsb surface used by the 2.2 build */
  window.jsb = window.jsb || {
    fileUtils: {
      getWritablePath: function () { return ''; },
      getSearchPaths: function () { return []; },
      setSearchPaths: function () {}
    },
    reflection: { callStaticMethod: function () { return null; } }
  };

  function log() {
    try { console.log.apply(console, ['[web-boot]'].concat([].slice.call(arguments))); } catch (e) {}
  }

  /* 2.2 FairyGUI expects asset.rawBuffer; 2.4 BufferAsset keeps it in _nativeAsset. */
  function patchFairyGUI() {
    var UP = window.fgui && fgui.UIPackage;
    if (!UP || UP.__zzbx2Patched) return !!UP;
    UP.__zzbx2Patched = true;

    UP.loadPackage = function (name, onProgress, cb) {
      var url = /\.bin$/i.test(name) ? name : name + '.bin';
      cc.loader.loadRes(url, cc.BufferAsset, function (err, asset) {
        if (err) { cb && cb(err); return; }
        if (!asset.rawBuffer) asset.rawBuffer = asset._nativeAsset || asset._buffer;
        var pkg;
        try {
          pkg = UP.addPackage(url);
        } catch (e) {
          cb && cb(e);
          return;
        }
        var urls = pkg.assetUrls || [];
        if (!urls.length) { cb && cb(null, pkg); return; }
        cc.loader.loadResArray(urls, function (e2) { cb && cb(e2 || null, pkg); });
      });
    };
    return true;
  }

  /* GameLogic.entry() re-enters the same flow; on web that only recurses. */
  function patchEntryOnce() {
    if (!window.GameLogic || GameLogic.__zzbx2EntryPatched) return false;
    GameLogic.__zzbx2EntryPatched = true;
    var entered = false;
    GameLogic.entry = function main() {
      if (entered) { log('entry() skipped (already entered)'); return; }
      entered = true;
      try { Entry.inst.enterGame(); } catch (e) { log('entry error', e && e.message); }
    };
    return true;
  }

  function forceServerOk() {
    if (!window.GameLogic) return;
    GameLogic.checkServerAvailable = function (cb) {
      log('checkServerAvailable -> ok');
      setTimeout(function () { cb(true, ''); }, 0);
    };
  }

  /* skip the privacy modal (it waits on a native/SDK round trip) */
  function patchLogin() {
    try {
      if (window.Login && Login.LoginMgr && Login.LoginMgr.inst && !Login.LoginMgr.inst.__zzbx2Privacy) {
        Login.LoginMgr.inst.__zzbx2Privacy = true;
        Login.LoginMgr.inst.showPrivacyTermsWnd = function () { return Promise.resolve(); };
        log('privacy modal skipped');
      }
    } catch (e) { log('privacy patch error', e && e.message); }

    try {
      if (window.Net && Net.SConn && Net.SConn.inst && !Net.SConn.inst.__zzbx2Patched) {
        Net.SConn.inst.__zzbx2Patched = true;
        Net.SConn.inst.connectServer = function () { return Promise.resolve(); };
        Net.SConn.inst.ping = function () {};
        log('socket connect stubbed');
      }
    } catch (e) { log('socket patch error', e && e.message); }
  }

  var started = false;

  function kick(inst) {
    if (started) return;
    started = true;

    try { window.__zzbx2Alias && window.__zzbx2Alias(); } catch (e) { log('alias error', e && e.message); }
    patchFairyGUI();
    patchEntryOnce();
    forceServerOk();
    patchLogin();

    log('enterGame');
    Promise.resolve()
      .then(function () { return inst.enterGame(); })
      .catch(function (e) { log('enterGame failed:', e && e.message); });
  }

  /* also patch the loading component's own server check as soon as it exists */
  var tick = setInterval(function () {
    patchLogin();
    if (window.Entry && window.Entry.inst && window.GameLogic && window.fgui) {
      var inst = window.Entry.inst;
      if (!inst.__zzbx2Patched) {
        inst.__zzbx2Patched = true;
        inst._checkHotUpdate = function () { return Promise.resolve(); };
        setTimeout(function () { kick(inst); }, 300);
      } else if (!inst.__zzbx2CompPatched) {
        var scene = cc.director.getScene();
        if (scene) {
          var comp = null;
          (function walk(n) {
            if (n.name === 'loadingLayout') comp = n._components[3];
            n.children.forEach(walk);
          })(scene);
          if (comp) {
            inst.__zzbx2CompPatched = true;
            comp.checkServerAvailable = function (cb) { log('component server check -> ok'); setTimeout(function () { cb(true, ''); }, 0); };
          }
        }
      }
      if (inst.__zzbx2CompPatched) clearInterval(tick);
    }
  }, 200);

  setTimeout(function () { clearInterval(tick); }, 30000);
})();
