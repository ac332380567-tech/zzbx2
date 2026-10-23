/* Decode Cocos compressed uuids (22-char base64) to full hex form.
   The 2.2 engine expects the on-disk import paths to use full uuids. */
(function () {
  var S = window._CCSettings;
  if (!S) return;

  var B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var VAL = new Array(128).fill(64);
  for (var i = 0; i < 64; i++) VAL[B64.charCodeAt(i)] = i;
  var HEX = '0123456789abcdef';
  var _t = ['', '', '', ''];
  var TPL = _t.concat(_t, '-', _t, '-', _t, '-', _t, '-', _t, _t, _t);
  var IDX = TPL.map(function (x, k) { return x === '-' ? NaN : k; }).filter(Number.isFinite);

  function decodeUuid(base64) {
    if (!base64 || base64.length !== 22) return base64;
    TPL[0] = base64[0];
    TPL[1] = base64[1];
    for (var a = 2, j = 2; a < 22; a += 2) {
      var lhs = VAL[base64.charCodeAt(a)];
      var rhs = VAL[base64.charCodeAt(a + 1)];
      TPL[IDX[j++]] = HEX[lhs >> 2];
      TPL[IDX[j++]] = HEX[((lhs & 3) << 2) | (rhs >> 4)];
      TPL[IDX[j++]] = HEX[rhs & 0xF];
    }
    return TPL.join('');
  }

  function fixMap(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    var out = {};
    for (var k in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      out[decodeUuid(k)] = obj[k];
    }
    return out;
  }

  try {
    if (S.scenes) {
      for (var s = 0; s < S.scenes.length; s++) {
        if (S.scenes[s] && typeof S.scenes[s].uuid === 'string') {
          S.scenes[s].uuid = decodeUuid(S.scenes[s].uuid);
        }
      }
    }
    if (S.rawAssets) {
      for (var mount in S.rawAssets) {
        S.rawAssets[mount] = fixMap(S.rawAssets[mount]);
      }
    }
    if (S.packedAssets) {
      for (var pack in S.packedAssets) {
        var arr = S.packedAssets[pack];
        if (Array.isArray(arr)) {
          for (var n = 0; n < arr.length; n++) {
            if (typeof arr[n] === 'string') arr[n] = decodeUuid(arr[n]);
          }
        }
      }
    }
    console.log('[uuid-fix] decoded scenes:', S.scenes ? S.scenes.length : 0);
  } catch (e) {
    console.error('[uuid-fix] failed', e);
  }
})();
