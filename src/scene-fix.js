// LobsterAI web shim for the Creator 2.2 APK running on a 2.4 web engine.
(function () {
  /* __ver_guard__ */
  if (window.cc && cc.ENGINE_VERSION && String(cc.ENGINE_VERSION).indexOf('2.2') === 0) { return; }

  if (typeof window.platform === 'undefined') {
    window.platform = {
      _userInfo: { channel_user_name: 'local', avatarUrl: '' },
      init: function () { return Promise.resolve(); },
      login: function () { return Promise.resolve({}); },
      getUserInfo: function () { return Promise.resolve(window.platform._userInfo); },
      logout: function () { return Promise.resolve(); },
      share: function () { return Promise.resolve(); },
      pay: function () { return Promise.resolve({}); }
    };
  }
  window.__REA_WEB__ = true;

  var BOOT_SETTINGS = window._CCSettings || {};
  var TYPES = BOOT_SETTINGS.assetTypes || [];

  function fullUuid(id) {
    var map = BOOT_SETTINGS.uuids || {};
    return map[id] || id;
  }
  function normType(t) {
    return typeof t === 'number' ? (TYPES[t] || t) : t;
  }

  // Rebind a SpriteFrame to the texture named by its import record. The 2.2
  // scene stores a compressed texture uuid that the 2.4 deserializer keeps as
  // an empty placeholder texture.
  function bindFrame(sp) {
    var sf = sp && sp.spriteFrame;
    if (!sf || !sf._uuid || sf.__reaTex || !sf._uuid.match(/^[0-9a-f-]{36}$/)) return;
    if (sf._texture && sf._texture._uuid) { sf.__reaTex = true; return; }
    var url = 'res/import/' + sf._uuid.slice(0, 2) + '/' + sf._uuid + '.json';
    fetch(url).then(function (r) { return r.json(); }).then(function (j) {
      var tid = j && j.content && j.content.texture;
      if (!tid) return;
      cc.assetManager.loadAny({ uuid: tid }, function (err, tex) {
        if (err || !tex) return;
        if (sf._refreshTexture) sf._refreshTexture(tex);
        else sf._texture = tex;
        // 2.2 atlases often describe a rect that is a few pixels larger than
        // the standalone raw texture shipped in this APK; clamp it so UV
        // calculation does not read outside the texture.
        if (sf._rect && tex.width && tex.height &&
            (sf._rect.x + sf._rect.width > tex.width || sf._rect.y + sf._rect.height > tex.height)) {
          sf._rect = cc.rect(0, 0, Math.min(sf._rect.width, tex.width), Math.min(sf._rect.height, tex.height));
        }
        if (sf._calculateUV) sf._calculateUV();
        sf.__reaTex = true;
        try { sp.spriteFrame = sf; } catch (e) { }
      });
    }).catch(function () { });
  }

  function walkSprites(node) {
    if (!node) return;
    var sp = node.getComponent && node.getComponent(cc.Sprite);
    if (sp) {
      try {
        var mats = sp._materials || [];
        var bad = !mats[0];
        if (!bad) { try { bad = !mats[0].effect; } catch (e) { bad = true; } }
        if (bad && cc.Material && cc.Material.getBuiltinMaterial) {
          var bm = cc.Material.getBuiltinMaterial('2d-sprite');
          if (bm) {
            sp._materials = [bm];
            if (sp._activateMaterial) sp._activateMaterial();
          }
        }
      } catch (e) { }
      bindFrame(sp);
      if (sp._activateMaterial) { try { sp._activateMaterial(); } catch (e) { } }
    }
    var kids = node.children || [];
    for (var i = 0; i < kids.length; i++) walkSprites(kids[i]);
  }

  window.__reaFixScene = function () {
    try { walkSprites(cc.director.getScene()); } catch (e) { console.error('scene fix failed', e); }
  };

  if (window.cc && cc.AssetLibrary && cc.AssetLibrary.init) {
    var origInit = cc.AssetLibrary.init;
    cc.AssetLibrary.init = function (options) {
      var ret = origInit.call(cc.AssetLibrary, options);
      cc.assetManager.generalNativeBase = 'res/raw-assets';
      try {
        var i, k, entry, full;
        var mounts = options.rawAssets || {};

        // Rebuild the resources bundle with full path metadata (extensions kept).
        var raw = {};
        for (var mount in mounts) {
          var entries = mounts[mount] || {};
          for (k in entries) raw[k] = entries[k];
        }
        var uuids = [], paths = {};
        for (k in raw) {
          entry = raw[k];
          full = fullUuid(k);
          uuids.push(full);
          paths[full] = [entry[0], normType(entry[1])];
        }
        var res = cc.assetManager.getBundle && cc.assetManager.getBundle('resources');
        if (res && res._config && res._config.init) {
          res._config.init({
            name: 'resources',
            importBase: options.libraryPath,
            nativeBase: 'res/raw-assets',
            uuids: uuids,
            paths: paths
          });
          var cfg = res._config;
          var origGet = cfg.getInfoWithPath;
          cfg.getInfoWithPath = function (path, type) {
            var hit = origGet.call(this, path, type);
            if (hit || !path || path.indexOf('.') >= 0) return hit;
            var exts = ['.json', '.png', '.jpg', '.webp', '.bin', '.plist', '.fnt', '.mp3', '.wav', '.ttf', '.otf', '.xml', '.txt', '.atlas', '.skel', '.prefab', '.fire'];
            for (var n = 0; n < exts.length; n++) {
              hit = origGet.call(this, path + exts[n], type);
              if (hit) return hit;
            }
            return null;
          };
        }

        // Creator 2.4 loads builtin effects/materials from the "internal"
        // bundle; the 2.2 build keeps them in settings.rawAssets.internal.
        var intRaw = mounts.internal || {};
        var iu = [], ip = {};
        for (k in intRaw) {
          entry = intRaw[k];
          iu.push(k);
          ip[k] = [entry[0], normType(entry[1])];
        }
        if (iu.length && !cc.assetManager.bundles.has('internal')) {
          var ib = new cc.AssetManager.Bundle();
          ib.init({
            name: 'internal',
            importBase: options.libraryPath,
            nativeBase: 'res/raw-assets',
            uuids: iu,
            paths: ip
          });
        }
        if (cc.assetManager.builtins && cc.assetManager.builtins.init) {
          cc.assetManager.builtins.init(function () {
            window.__reaFixScene();
          });
        }
      } catch (e) {
        cc.error('resources/internal bundle shim failed', e);
      }
      return ret;
    };
  }

  if (window.cc && cc.director && cc.director.loadScene) {
    var origLoadScene = cc.director.loadScene;
    cc.director.loadScene = function (sceneName, onLaunched, onUnloaded) {
      try {
        var bundles = cc.assetManager.bundles;
        var found = false;
        if (bundles && bundles.find) {
          found = !!bundles.find(function (b) { return b && b.getSceneInfo && b.getSceneInfo(sceneName); });
        }
        if (found) return origLoadScene.apply(this, arguments);
        var scenes = BOOT_SETTINGS.scenes || [];
        var info = scenes.filter(function (s) { return s.url === sceneName || sceneName.indexOf(s.url) >= 0 || s.url.indexOf(sceneName) >= 0; })[0];
        if (!info) return origLoadScene.apply(this, arguments);
        var uuid = fullUuid(info.uuid);
        cc.assetManager.loadAny({ uuid: uuid }, function (err, scene) {
          if (err) {
            cc.error('scene load failed', err);
            if (onLaunched) onLaunched(err);
            return;
          }
          cc.director.runSceneImmediate(scene, onUnloaded, onLaunched);
          setTimeout(window.__reaFixScene, 300);
          setTimeout(window.__reaFixScene, 1500);
        });
        return true;
      } catch (e) {
        cc.error('loadScene shim failed', e);
        return origLoadScene.apply(this, arguments);
      }
    };
  }

  if (window.cc && cc.director && cc.director.on) {
    cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
      setTimeout(window.__reaFixScene, 200);
    });
  }
})();
