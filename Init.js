Mn.musicTime = function() {
    var e;
    1 === soundManager.getSoundById("menuMusic").playState && (soundManager.stop("menuMusic"), soundManager.setVolume(Ot.song, zt.settings.musicVolume)), !1 === Ot.edit && (!1 === Ot.preLevelStart && (Ot.preLevelStart = millis()), 5e3 <= millis() - Ot.preLevelStart + (Ot.songOffset + Ot.mods.offset + zt.settings.offset) && !Ot.songPlaying && !Ot.paused ? (Ht[Ot.song].rate(Ot.mods.bpm), Ht[Ot.song].volume(zt.settings.musicVolume / 100), e = Ht[Ot.song].play(), Ht[Ot.song].seek((Ot.songOffset + Ot.mods.offset + zt.settings.offset) / 1e3 + ((Ot.skipIntro ? Ot.beat[0][1] : 0) * Ot.mods.bpm / (Ot.bpm / 60)) - 5, e), Ot.songPlaying = !0) : Ot.paused && (Ht[Ot.song].pause(), Ot.songPlaying = !1)), Ot.edit || !1 !== Ot.songEnded || Ht[Ot.song].on("end", function() {
        Ot.songEnded = [millis(), Ht[Ot.song].duration]
    }), !1 !== Ot.edit || Ot.paused || 1 !== Ot.disMode || (!1 !== Ot.songPlaying || !1 !== ye && "hidden" !== ye || !1 === Ot.preLevelStart ? (-1e3 < ((e = ((!1 === Ot.songEnded ? Ht[Ot.song].seek() : Ht[Ot.song].duration() + (!1 === Ot.songEnded ? 0 : (millis() - Ot.songEnded[0]) / 1e3 * Ot.mods.bpm)) - (Ot.songOffset + Ot.mods.offset + zt.settings.offset) / 1e3) * (Ot.bpm / 60) / Ot.mods.bpm) - Ot.time) * Ot.mods.bpm / (Ot.bpm / 60) || "set" === Ot.time) && (Ot.time = e) : Ot.time = (millis() - Ot.preLevelStart - 5e3) / 1e3 * (Ot.bpm / 60) / Ot.mods.bpm)
}
function Li() {
  soundManager.setup({
      onready: function() {
          soundManager.createSound({
              id: Li,
              url: "/client/resources/sound/pulsusOpen.mp3"
          });
          if(!Ot.disableMenuMusic) {
            soundManager.play(Li, {
                onfinish: function() {}
            })
          }
      },
      ontimeout: function() {
          alert("Switch to a better browser you memehead\nSeriously though, if you're seeing this message, contact us at pulsusgame@gmail.com with error openSound")
      }
  })
}
er.credits = function() {
  var e = width > height ? width / 64 : height / 64;
  textAlign(CENTER, CENTER), fill(We.text);
  var t = [pt("credits_client", yt), "TetroGem", pt("credits_server", yt), Q(["TetroGem", "Epicness", "Quintec"]), pt("credits_programming", yt), "cg505", pt("credits_security", yt), "Quintec", pt("credits_art", yt), pt("credits_and", yt, "TetroGem", "Alexandre Declos"), pt("credits_translation_de", yt), "Scath", pt("credits_translation_es", yt), "Zemyro", pt("credits_translation_fr", yt), pt("credits_and", yt, "Alexandre Declos", "Zemyro"), pt("credits_translation_ru", yt), pt("credits_and", yt, "ConfiG", "Shiairo31"), pt("credits_translation_nl", yt), "sbeve", pt("credits_translation_th", yt), "oserottoNeko", pt("credits_translation_ro", yt), "Stqrm26", pt("credits_patreon", yt), Q(["-Wiffles-", "cg505", "tokaku", "Aero", "ari", "Lae_", "Mungaru", "rice", "Tele_Crab", "Tree42", "AFasterSlowpoke", "Arvid707", "Cynth", "Generic", "ito", "sbeve", "sneaki"]),"PulseHax development",Q(["Mt.Gufo","Pickleman","shianara","floopy","Axye"])],
      i = (height - height / 16) / (t.length + 2);
  textSize(i);
  for (var o = 0; o < t.length; o++) Pi(t[o], width / 2, height / 2 + i * (-t.length / 2 + o) + i / 2 + i / 1.5 / 2, width - 2 * e, i / (o % 2 == 0 ? 1 : 1.5), o % 2 == 0 && "bold")
}

eval(Vn.toString().slice(0,-1) + ",window.dispatchEvent(new CustomEvent('SetupComplete'));}");
window.addEventListener("SetupComplete", function() {
  Le.push({
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
    lightTheme: 1,
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
    modText: color(225, 225, 225),
    scrollbar: color(225, 225, 225),
    lightTheme: 1,
    checkmark: color(225, 225, 225),
    dropdown: color(50, 50, 50)
    },{
    main: color(10, 10, 10),
    text: color(255, 255, 255),
    overlayShade: color(10, 10, 10),
    shade: color(20, 20, 20),
    buttonDown: color(50, 50, 50),
    buttonUp: color(75, 75, 75),
    buttonText: color(255, 255, 255),
    textDown: color(150, 150, 150),
    select: color(75, 75, 75),
    modText: color(180, 100, 255),
    scrollbar: color(180, 100, 255),
    lightTheme: 1,
    checkmark: color(180, 100, 255),
    dropdown: color(180, 100, 255)
    },{
    main: color(238, 153, 255),
    text: color(255, 255, 255),
    overlayShade: color(204, 140, 217),
    shade: color(190, 130, 201),
    buttonDown: color(251, 299, 255),
    buttonUp: color(246, 204, 255),
    buttonText: color(143, 41, 163),
    textDown: color(246, 204, 255),
    select: color(219, 150, 233),
    modText: color(246, 204, 255),
    scrollbar: color(255, 255, 255),
    lightTheme: 1,
    checkmark: color(225, 77, 255),
    dropdown: color(234, 128, 255)
    },{
    main: color(31, 12, 21),
    text: color(244, 234, 179),
    overlayShade: color(83, 34, 42),
    shade: color(63, 24, 32),
    buttonDown: color(238, 134, 89),
    buttonUp: color(255, 213, 122),
    buttonText: color(31, 12, 21),
    textDown: color(225, 186, 132),
    select: color(143, 60, 45),
    modText: color(255, 51, 51),
    scrollbar: color(255, 213, 122),
    lightTheme: 1,
    checkmark: color(127, 41, 71),
    dropdown: color(226, 120, 75)
    });
});

window.addEventListener("keydown", function(e) {
  if("Tab" === e.code){
    e.preventDefault();
    if(!1 === Ot.edit && 1 === Ot.disMode && be === "game"){
      Ht[Ot.song].pause()
      Ot.effectsCache.vignette = 15
      lowLag.play("retry",".5");
      Ot.disMode = 1,
      Ot.retry = 1,
      Ot.buttonHover[0] /= 2,
      zt.lvl.prevPlay = Ot.song,
      Ot.songVol = 100;
    }
  }
}, !0);

window.addEventListener("InjectedScriptEval", function(evt) {
  try {
    response = JSON.parse(JSON.stringify(eval(evt.detail) ?? null, getCircularReplacer()));
  } catch(error) {
    console.log(error);
    response = undefined;
  }
  var evalEvent = new CustomEvent("InjectedScriptResponse", {detail: response});
  window.dispatchEvent(evalEvent);
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
