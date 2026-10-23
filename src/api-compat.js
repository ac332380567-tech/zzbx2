/* 2.2 -> 2.4 API compatibility shims used by the 2.2 build. */
(function () {
  if (!window.cc) return;

  /* FGUI's grayed setter calls cc.Material.getInstantiatedMaterial (2.2 API). */
  if (cc.Material && !cc.Material.getInstantiatedMaterial) {
    cc.Material.getInstantiatedMaterial = function (material, defines) {
      try {
        if (cc.MaterialVariant && cc.MaterialVariant.create) {
          var v = cc.MaterialVariant.create(material, defines);
          if (v) return v;
        }
      } catch (e) {}
      return material;
    };
  }

  /* Some 2.2 code paths call material.init / setProperty on plain materials. */
  if (cc.Material && cc.Material.prototype) {
    if (!cc.Material.prototype.init) {
      cc.Material.prototype.init = function () { return true; };
    }
    if (!cc.Material.prototype.getInstantiatedMaterial) {
      cc.Material.prototype.getInstantiatedMaterial = function (defines) {
        return cc.Material.getInstantiatedMaterial(this, defines);
      };
    }
  }
})();
