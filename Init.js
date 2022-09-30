Zn.musicTime = function () {
  var e;
  1 === soundManager.getSoundById('menuMusic').playState && (soundManager.stop('menuMusic'), soundManager.setVolume(zt.song, Et.settings.musicVolume)),
  !1 === zt.edit && (!1 === zt.preLevelStart && (zt.preLevelStart = millis()), 5000 <= millis() - zt.preLevelStart + (zt.songOffset + zt.mods.offset + Et.settings.offset) && !zt.songPlaying && !zt.paused ? (St[zt.song].rate(zt.mods.bpm), St[zt.song].volume(Et.settings.musicVolume / 100), e = St[zt.song].play(), St[zt.song].seek((zt.songOffset + zt.mods.offset + Et.settings.offset) / 1000 + ((zt.skipIntro ? zt.beat[0][1] : 0) * zt.mods.bpm / (zt.bpm / 60)) - 5, e), zt.songPlaying = !0) : zt.paused && (St[zt.song].pause(), zt.songPlaying = !1)),
  zt.edit || !1 !== zt.songEnded || St[zt.song].on('end', function () {
    zt.songEnded = [
      millis(),
      St[zt.song].duration
    ]
  }),
  !1 !== zt.edit || zt.paused || 1 !== zt.disMode || (!1 !== zt.songPlaying || !1 !== ye && 'hidden' !== ye || !1 === zt.preLevelStart ? ( - 1000 < ((e = ((!1 === zt.songEnded ? St[zt.song].seek() : St[zt.song].duration() + (!1 === zt.songEnded ? 0 : (millis() - zt.songEnded[0]) / 1000 * zt.mods.bpm)) - (zt.songOffset + zt.mods.offset + Et.settings.offset) / 1000) * (zt.bpm / 60) / zt.mods.bpm) - zt.time) * zt.mods.bpm / (zt.bpm / 60) || 'set' === zt.time) && (zt.time = e) : zt.time = (millis() - zt.preLevelStart - 5000) / 1000 * (zt.bpm / 60) / zt.mods.bpm)
}

eval(Ln.toString().slice(0,-1) + ",window.dispatchEvent(new CustomEvent('SetupComplete'));}");
window.addEventListener("SetupComplete", function() {
  zt.skipIntro = false;
  console.log("Setup is done");
  Le.push({
    main: color(0, 0, 0),
    text: color(64, 255, 64),
    overlayShade: color(16, 16, 16),
    shade: color(0, 0, 0),
    buttonDown: color(32, 32, 32),
    buttonUp: color(48, 48, 48),
    buttonText: color(64, 255, 64),
    textDown: color(32, 128, 32),
    select: color(30, 30, 30),
    modText: color(75, 175, 255),
    scrollbar: color(75, 175, 255),
    lightTheme: !1,
    checkmark: color(75, 175, 255),
    dropdown: color(24, 24, 24)
  },{
    main: color(35, 50, 60),
    text: color(255, 255, 255),
    overlayShade: color(32, 45, 54),
    shade: color(20, 35, 45),
    buttonDown: color(240, 240, 240),
    buttonUp: color(255, 255, 255),
    buttonText: color(0, 0, 0),
    textDown: color(200, 200, 200),
    select: color(60, 50, 35),
    modText: color(255, 175, 0),
    scrollbar: color(255, 255, 255),
    lightTheme: !1,
    checkmark: color(0, 175, 255),
    dropdown: color(225, 225, 225)
  },{
    main: color(35, 50, 60),
    text: color(255, 255, 255),
    overlayShade: color(32, 45, 54),
    shade: color(20, 35, 45),
    buttonDown: color(240, 240, 240),
    buttonUp: color(255, 255, 255),
    buttonText: color(0, 0, 0),
    textDown: color(200, 200, 200),
    select: color(60, 50, 35),
    modText: color(255, 175, 0),
    scrollbar: color(255, 255, 255),
    lightTheme: !1,
    checkmark: color(0, 175, 255),
    dropdown: color(225, 225, 225)
  },{
    main: color(35, 50, 60),
    text: color(255, 255, 255),
    overlayShade: color(32, 45, 54),
    shade: color(20, 35, 45),
    buttonDown: color(240, 240, 240),
    buttonUp: color(255, 255, 255),
    buttonText: color(0, 0, 0),
    textDown: color(200, 200, 200),
    select: color(60, 50, 35),
    modText: color(255, 175, 0),
    scrollbar: color(255, 255, 255),
    lightTheme: !1,
    checkmark: color(0, 175, 255),
    dropdown: color(225, 225, 225)
  });
});

// window.addEventListener("keydown", function(e) {
//   if("Tab" === e.code){
//       e.preventDefault();
//       lowLag.play("retry",".5");
//       zt.disMode = zt.paused ? 1 : 3,
//       zt.retry = !0,
//       zt.buttonHover[0] /= 2,
//       Et.lvl.prevPlay = zt.song,
//       zt.songVol = 100;
//   }
// }, !0);

window.addEventListener("InjectedScriptEval", function(evt) {
  try {
    response = JSON.parse(JSON.stringify(eval(evt.detail) ?? null, getCircularReplacer()));
  } catch(error) {
    response = undefined;
  }
  var test = new CustomEvent("InjectedScriptResponse", {detail: response});
  window.dispatchEvent(test);
}, false);

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};