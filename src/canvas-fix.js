/* Reveal the game canvas once the scene is running.
   The 2.2 boot script normally does this in its loadScene callback, which the
   web scene bridge bypasses. */
(function () {
  var shown = false;
  function show() {
    var c = document.getElementById('GameCanvas');
    if (!c) return false;
    if (c.style.visibility !== 'visible') c.style.visibility = 'visible';
    var div = document.getElementById('GameDiv');
    if (div) { div.style.visibility = ''; }
    var splash = document.getElementById('splash');
    if (splash) splash.style.display = 'none';
    shown = true;
    return true;
  }

  if (window.cc && cc.director && cc.director.on) {
    cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
      setTimeout(show, 0);
      setTimeout(show, 300);
      setTimeout(show, 1200);
    });
  }

  var tick = setInterval(function () {
    if (window.cc && cc.director && cc.director.getScene()) show();
    if (shown) clearInterval(tick);
  }, 250);

  setTimeout(function () { clearInterval(tick); }, 30000);
})();
