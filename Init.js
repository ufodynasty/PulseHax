jn.musicTime = function() {
  var e;
  1 === soundManager.getSoundById("menuMusic").playState && (soundManager.stop("menuMusic"),
  soundManager.setVolume(ut.song, ft.settings.musicVolume)),
  !1 === ut.edit && (!1 === ut.preLevelStart && (ut.preLevelStart = millis()),
  5e3 <= millis() - ut.preLevelStart + (ut.songOffset + ut.mods.offset + ft.settings.offset) && !ut.songPlaying && !ut.paused ? (wt[ut.song].rate(ut.mods.bpm),
  wt[ut.song].volume(ft.settings.musicVolume / 100),
  e = wt[ut.song].play(),
  wt[ut.song].seek((ut.songOffset + ut.mods.offset + ft.settings.offset) / 1e3 - 5, e),
  ut.songPlaying = !0) : ut.paused && (wt[ut.song].pause(),
  ut.songPlaying = !1)),
  ut.edit || !1 !== ut.songEnded || wt[ut.song].on("end", function() {
      ut.songEnded = [millis(), wt[ut.song].duration]
  }),
  !1 !== ut.edit || ut.paused || 1 !== ut.disMode || (!1 !== ut.songPlaying || !1 !== Ie && "hidden" !== Ie || !1 === ut.preLevelStart ? (-1e3 < ((e = ((!1 === ut.songEnded ? wt[ut.song].seek() : wt[ut.song].duration() + (!1 === ut.songEnded ? 0 : (millis() - ut.songEnded[0]) / 1e3 * ut.mods.bpm)) - (ut.songOffset + ut.mods.offset + ft.settings.offset) / 1e3) * (ut.bpm / 60) / ut.mods.bpm) - ut.time) * ut.mods.bpm / (ut.bpm / 60) || "set" === ut.time) && (ut.time = e) : ut.time = (millis() - ut.preLevelStart - 5e3) / 1e3 * (ut.bpm / 60) / ut.mods.bpm)
}

eval(Zn.toString().slice(0,-1) + ",window.dispatchEvent(new CustomEvent('SetupComplete'));}");
window.addEventListener("SetupComplete", function() {
  ut.skipIntro = false;
  console.log("Setup is done");
  Ge.push({
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
    main: color(20, 20, 20),
    text: color(255, 255, 255),
    overlayShade: color(10, 10, 10),
    shade: color(20, 20, 20),
    buttonDown: color(50, 50, 50),
    buttonUp: color(75, 75, 75),
    buttonText: color(255, 255, 255),
    textDown: color(150, 150, 150),
    select: color(75, 75, 75),
    modText: color(220, 150, 150),
    scrollbar: color(255, 100, 100),
    lightTheme: 1,
    checkmark: color(255, 100, 100),
    dropdown: color(50, 50, 50)
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

window.addEventListener("keydown", function(e) {
  e.preventDefault();
  if("Tab" === e.code){
      ut.effectsCache.vignette += 15
      lowLag.play("retry",".5");
      ut.disMode = 1,
      ut.retry = !0,
      ut.buttonHover[0] /= 2,
      ft.lvl.prevPlay = ut.song,
      ut.songVol = 100;
  }
}, !0);

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