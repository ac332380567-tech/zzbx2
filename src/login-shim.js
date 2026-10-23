/* zzbx2 web: offline login using the captured official LoginReply.
   The reply carries all 15 server tables (lead/entity/monster/skill2/...). */
(function () {
  if (window.__ZZBX2_LOGIN_SHIM__) return;
  window.__ZZBX2_LOGIN_SHIM__ = true;

  var cachedPayload = null;

  function log() {
    try { console.log.apply(console, ['[login-shim]'].concat([].slice.call(arguments))); } catch (e) {}
  }

  function loadServerReply() {
    if (cachedPayload) return Promise.resolve(cachedPayload);
    return fetch('data/loginreply.bin')
      .then(function (r) { return r.arrayBuffer(); })
      .then(function (buf) {
        var reply = pb.LoginReply.decode(new Uint8Array(buf));
        cachedPayload = pb.LoginReply.encode(reply).finish();
        log('loaded official LoginReply: uid=' + reply.Uid + ' tables=' + (reply.XlsDatas || []).length);
        return cachedPayload;
      })
      .catch(function (e) {
        log('official reply unavailable, fallback to empty', e && e.message);
        return null;
      });
  }

  function emptyReply() {
    var reply = pb.LoginReply.create({
      Uid: 10001,
      Name: 'webuser',
      IsForbid: false,
      Ver: {}, FuncConfig: {}, Wall: {}, Rune: {}, Shop: {}, Gem: {},
      LastChapter: {}, Box: {}, RankActivity: {}, WorkShops: [],
      XlsDatas: [], Hints: [], Levels: [], Heros: [], Res: [],
      Head: [], CanShowHeads: [], HeroConfigs: []
    });
    return pb.LoginReply.encode(reply).finish();
  }

  function install() {
    if (!window.Net || !window.pb || !window.Login || !window.GameAccount) return false;
    if (Net.__zzbx2LoginShim) return true;
    Net.__zzbx2LoginShim = true;

    try {
      platform.getUserInfo = function () {
        return { nickname: 'webuser', openid: 'webopenid', token: 'local', uid: 10001,
                 channel_user_name: 'webuser', avatarUrl: '' };
      };
      platform.init = platform.init || function () { return Promise.resolve(); };
      platform.login = platform.login || function () { return Promise.resolve({}); };
      platform.logout = platform.logout || function () { return Promise.resolve(); };
      platform.clearUserInfo = platform.clearUserInfo || function () {};
      platform.pay = platform.pay || function () { return Promise.resolve({}); };
      platform.canMakePay = platform.canMakePay || function () { return true; };
      platform.reportRoleInfo = platform.reportRoleInfo || function () {};
      platform.share = platform.share || function () { return Promise.resolve(); };
      Core.GetSDKInfo = function () { return Promise.resolve(''); };
      Core.GetIsProxy = function () { return Promise.resolve(false); };
      Core.GetIsVPN = function () { return Promise.resolve(false); };
    } catch (e) { log('stub error', e && e.message); }

    try {
      var trackProxy = new Proxy({ heroCards: [], buffCards: [] }, { get: function (t, k) { if (k in t) return t[k]; return function () {}; }, set: function (t, k, v) { t[k] = v; return true; } });
      Object.defineProperty(Core.TrackingTagMgr, 'tag', { get: function () { return trackProxy; }, configurable: true });
    } catch (e) { log('track stub error', e && e.message); }

    try {
      GameAccount.inst._accountArchieve = {
        Players: [{ Uid: 10001, Name: 'webuser', IsLastLogin: true, CreateTime: 0, Level: 1 }]
      };
    } catch (e) { log('archive error', e && e.message); }

    Net.rpcCall = function (msgID) {
      var name = '';
      try { name = pb.MessageID[msgID] || String(msgID); } catch (e) {}
      if (msgID >= 100 && msgID <= 105) {
        log('rpc', name);
        return loadServerReply().then(function (p) {
          return { errcode: 0, payload: p || emptyReply() };
        });
      }
      return Promise.resolve({ errcode: 0, payload: new Uint8Array(0) });
    };

    log('installed');
    return true;
  }

  function enterGame() {
    try {
      var wl = Login.LoginMgr.inst.loginHandler._webLogin;
      if (wl.__zzbx2Entered) return;
      wl.__zzbx2Entered = true;
      log('start local login');

      function attempt(n) {
        return Promise.resolve()
          .then(function () {
            if (window.Entry && Entry.inst && Entry.inst._loadJson) {
              log('[' + n + '] loading config tables');
              return Entry.inst._loadJson();
            }
          })
          .then(function () { return loadServerReply(); })
          .then(function () { return wl._internalLogin(); })
          .then(function () { log('[' + n + '] login done'); })
          .catch(function (e) {
            log('[' + n + '] failed: ' + (e && e.message));
            if (n < 3) {
              return new Promise(function (r) { setTimeout(r, 1500); }).then(function () { return attempt(n + 1); });
            }
            throw e;
          });
      }

      attempt(1).catch(function (e) { log('giving up: ' + (e && e.message)); });
    } catch (e) { log('enter error', e && e.message); }
  }

  var tick = setInterval(function () {
    if (!install()) return;
    if (window.Entry && Entry.inst && Entry.inst._loadingView) {
      clearInterval(tick);
      setTimeout(enterGame, 500);
    }
  }, 300);

  setTimeout(function () { clearInterval(tick); }, 60000);
})();
