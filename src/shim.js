/* zzbx2 web shim: bridge the 2.2-style settings/build onto the 2.4 engine. */
(function () {
  /* __ver_guard__ */
  if (window.cc && cc.ENGINE_VERSION && String(cc.ENGINE_VERSION).indexOf('2.2') === 0) { return; }

  var S = window.__SETTINGS_REF__ || window._CCSettings;

  function resourcesBundle() {
    if (!window.cc || !cc.assetManager || !cc.assetManager.bundles) return null;
    var b = cc.assetManager.bundles;
    return b.find ? b.find(function (x) { return x.name === 'resources'; }) : null;
  }

  /* 2.2 resolved "UI/loading" to "UI/loading.bin"; 2.4 wants the exact path.
     Register an extension-less alias for every known asset path. */
  function aliasExtensions(bundle) {
    if (!bundle || !bundle._config || !bundle._config.paths) return 0;
    var paths = bundle._config.paths;
    var todo = [];
    paths.forEach(function (value, key) {
      var m = /\.(bin|json|png|jpg|jpeg|plist|fnt|mp3|wav|ogg|ttf|atlas|webp)$/i.exec(key);
      if (!m) return;
      var alias = key.slice(0, key.length - m[1].length - 1);
      if (!alias || paths.has && paths.has(alias)) return;
      todo.push([alias, value]);
    });
    var added = 0;
    todo.forEach(function (pair) {
      try { paths.add(pair[0], pair[1]); added++; } catch (e) {}
    });
    if (added) console.log('[shim] path aliases added: ' + added);
    return added;
  }

  function registerScenes(bundle) {
    if (!bundle || !S || !S.scenes) return;
    S.scenes.forEach(function (s) {
      try { bundle._config.scenes.add(s.url, s.uuid); } catch (e) {}
      try { bundle._config.scenes.add(s.url.replace('db://', ''), s.uuid); } catch (e) {}
    });
  }

  function uuidOf(name) {
    if (!S || !S.scenes) return null;
    for (var i = 0; i < S.scenes.length; i++) {
      if (S.scenes[i].url === name) return S.scenes[i].uuid;
    }
    return null;
  }

  function install() {
    if (!window.cc || !cc.director || !cc.assetManager) return false;
    if (cc.director.__zzbx2Patched) return true;
    cc.director.__zzbx2Patched = true;

    var orig = cc.director.loadScene;
    cc.director.loadScene = function (name, onLaunched, onUnloaded) {
      var bundle = resourcesBundle();
      if (bundle && typeof name === 'string' && name.indexOf('.fire') >= 0) {
        registerScenes(bundle);
        var compressed = bundle.getSceneInfo(name) || uuidOf(name);
        var uuid = compressed && cc.assetManager.utils.decodeUuid
          ? cc.assetManager.utils.decodeUuid(compressed)
          : compressed;
        if (uuid) {
          cc.assetManager.loadAny({ uuid: uuid }, function (err, asset) {
            if (err) {
              cc.error(err);
              onLaunched && onLaunched(err);
              return;
            }
            var scene = asset && (asset.scene || asset);
            if (!scene) {
              onLaunched && onLaunched(new Error('scene asset has no scene'));
              return;
            }
            cc.director.runSceneImmediate(scene, onUnloaded, onLaunched);
          });
          return true;
        }
      }
      return orig.apply(this, arguments);
    };
    return true;
  }

  window.__zzbx2Alias = function () {
    var b = resourcesBundle();
    return b ? aliasExtensions(b) : 0;
  };

  if (!install()) {
    var timer = setInterval(function () {
      if (install()) clearInterval(timer);
    }, 20);
  }
})();
