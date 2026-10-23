/* Preload every FGUI package's atlas images. The 2.2 build resolves package
   items by atlas file name; without the atlas textures registered those items
   silently render nothing. */
(function () {
  if (window.__ZZBX2_FGUI_ATLAS__) return;
  window.__ZZBX2_FGUI_ATLAS__ = true;

  function log() {
    try { console.log.apply(console, ['[fgui-atlas]'].concat([].slice.call(arguments))); } catch (e) {}
  }

  function install() {
    if (!window.fgui || !fgui.UIPackage || fgui.UIPackage.__atlasFix) return false;
    fgui.UIPackage.__atlasFix = true;

    var origAdd = fgui.UIPackage.addPackage;

    fgui.UIPackage.addPackage = function (name) {
      var pkg = origAdd.apply(this, arguments);
      try {
        var urls = (pkg && pkg.assetUrls) || [];
        if (urls.length) {
          cc.loader.loadResArray(urls, function (err) {
            if (err) log('atlas load error', err && (err.message || String(err)));
          });
        }
      } catch (e) {
        log('preload failed', e && e.message);
      }
      return pkg;
    };

    log('installed');
    return true;
  }

  var t = setInterval(function () { if (install()) clearInterval(t); }, 300);
  setTimeout(function () { clearInterval(t); }, 60000);
})();
