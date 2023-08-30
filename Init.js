<<<<<<< HEAD
eval($n.toString().slice(0,-1) + ",window.dispatchEvent(new CustomEvent('SetupComplete'));}");
window.addEventListener("SetupComplete", function() {
  ir.musicTime = function() {
    var e;
    1 === soundManager.getSoundById("menuMusic").playState && (soundManager.stop("menuMusic"), soundManager.setVolume(zt.song, Et.settings.musicVolume)), !1 === zt.edit && (!1 === zt.preLevelStart && (zt.preLevelStart = millis()), 5e3 <= millis() - zt.preLevelStart + (zt.songOffset + zt.mods.offset + Et.settings.offset) && !zt.songPlaying && !zt.paused ? (Tt[zt.song].rate(zt.mods.bpm), Tt[zt.song].volume(Et.settings.musicVolume / 100), e = Tt[zt.song].play(), Tt[zt.song].seek((zt.songOffset + zt.mods.offset + Et.settings.offset) / 1e3 + ((zt.skipIntro ? zt.beat[0][1] : 0) * zt.mods.bpm / (zt.bpm / 60)) - 5, e), zt.songPlaying = !0) : zt.paused && (Tt[zt.song].pause(), zt.songPlaying = !1)), zt.edit || !1 !== zt.songEnded || Tt[zt.song].on("end", function() {
        zt.songEnded = [millis(), Tt[zt.song].duration]
    }), !1 !== zt.edit || zt.paused || 1 !== zt.disMode || (!1 !== zt.songPlaying || !1 !== te && "hidden" !== te || !1 === zt.preLevelStart ? (-1e3 < ((e = ((!1 === zt.songEnded ? Tt[zt.song].seek() : Tt[zt.song].duration() + (!1 === zt.songEnded ? 0 : (millis() - zt.songEnded[0]) / 1e3 * zt.mods.bpm)) - (zt.songOffset + zt.mods.offset + Et.settings.offset) / 1e3) * (zt.bpm / 60) / zt.mods.bpm) - zt.time) * zt.mods.bpm / (zt.bpm / 60) || "set" === zt.time) && (zt.time = e) : zt.time = (millis() - zt.preLevelStart - 5e3) / 1e3 * (zt.bpm / 60) / zt.mods.bpm)
  }

  Zi = function() {
=======
function completeSetup() {
  Object.defineProperty(globalThis, 'calcLevelStars', { get: () => {return En},set: (val) => {En = val}});
  Object.defineProperty(globalThis, 'clevels', { get: () => {return xt},set: (val) => {xt = val}});
  Object.defineProperty(globalThis, 'copyLevel', { get: () => {return Uo},set: (val) => {Uo = val}});
  Object.defineProperty(globalThis, 'copyObject', { get: () => {return x},set: (val) => {x = val}});
  Object.defineProperty(globalThis, 'fitText', { get: () => {return Bi},set: (val) => {Bi = val}});
  Object.defineProperty(globalThis, 'game', { get: () => {return zt},set: (val) => {zt = val}});
  Object.defineProperty(globalThis, 'getLevelDownloadState', { get: () => {return Wo},set: (val) => {Wo = val}});
  Object.defineProperty(globalThis, 'lang', { get: () => {return pt},set: (val) => {pt = val}});
  Object.defineProperty(globalThis, 'langList', { get: () => {return Q},set: (val) => {Q = val}});
  Object.defineProperty(globalThis, 'langSel', { get: () => {return Ct},set: (val) => {Ct = val}});
  Object.defineProperty(globalThis, 'langs', { get: () => {return T},set: (val) => {T = val}});
  Object.defineProperty(globalThis, 'levels', { get: () => {return Pt},set: (val) => {Pt = val}});
  Object.defineProperty(globalThis, 'lvlHowl', { get: () => {return Tt},set: (val) => {Tt = val}});
  Object.defineProperty(globalThis, 'menu', { get: () => {return Et},set: (val) => {Et = val}});
  Object.defineProperty(globalThis, 'menuMusic', { get: () => {return Zi},set: (val) => {Zi = val}});
  Object.defineProperty(globalThis, 'musicManager', { get: () => {return ir},set: (val) => {ir = val}}); // This name is wrong
  Object.defineProperty(globalThis, 'nav', { get: () => {return lr},set: (val) => {lr = val}}); // This name is wrong
  Object.defineProperty(globalThis, 'newGrabLevelMeta', { get: () => {return Bo},set: (val) => {Bo = val}});
  Object.defineProperty(globalThis, 'screen', { get: () => {return M},set: (val) => {M = val}});
  Object.defineProperty(globalThis, 'theme', { get: () => {return Ke},set: (val) => {Ke = val}});
  Object.defineProperty(globalThis, 'themes', { get: () => {return Ve},set: (val) => {Ve = val}});
  Object.defineProperty(globalThis, 'toLoad', { get: () => {return te},set: (val) => {te = val}});
  Object.defineProperty(globalThis, 'user', { get: () => {return le},set: (val) => {le = val}});
  Object.defineProperty(globalThis, 'welcome', { get: () => {return re},set: (val) => {re = val}});
  window.dispatchEvent(new CustomEvent('SetupComplete'));
}
eval($n.toString().slice(0,-1) + 
`
completeSetup()
}`);

window.addEventListener("SetupComplete", function() {
  musicManager.musicTime = function() {
    var e;
    1 === soundManager.getSoundById("menuMusic").playState && (soundManager.stop("menuMusic"), soundManager.setVolume(game.song, menu.settings.musicVolume)), !1 === game.edit && (!1 === game.preLevelStart && (game.preLevelStart = millis()), 5e3 <= millis() - game.preLevelStart + (game.songOffset + game.mods.offset + menu.settings.offset) && !game.songPlaying && !game.paused ? (lvlHowl[game.song].rate(game.mods.bpm), lvlHowl[game.song].volume(menu.settings.musicVolume / 100), e = lvlHowl[game.song].play(), lvlHowl[game.song].seek((game.songOffset + game.mods.offset + menu.settings.offset) / 1e3 + ((game.skipIntro ? game.beat[0][1] : 0) * game.mods.bpm / (game.bpm / 60)) - 5, e), game.songPlaying = !0) : game.paused && (lvlHowl[game.song].pause(), game.songPlaying = !1)), game.edit || !1 !== game.songEnded || lvlHowl[game.song].on("end", function() {
        game.songEnded = [millis(), lvlHowl[game.song].duration]
    }), !1 !== game.edit || game.paused || 1 !== game.disMode || (!1 !== game.songPlaying || !1 !== toLoad && "hidden" !== toLoad || !1 === game.preLevelStart ? (-1e3 < ((e = ((!1 === game.songEnded ? lvlHowl[game.song].seek() : lvlHowl[game.song].duration() + (!1 === game.songEnded ? 0 : (millis() - game.songEnded[0]) / 1e3 * game.mods.bpm)) - (game.songOffset + game.mods.offset + menu.settings.offset) / 1e3) * (game.bpm / 60) / game.mods.bpm) - game.time) * game.mods.bpm / (game.bpm / 60) || "set" === game.time) && (game.time = e) : game.time = (millis() - game.preLevelStart - 5e3) / 1e3 * (game.bpm / 60) / game.mods.bpm)
  }

  menuMusic = function() {
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
    soundManager.setup({
        onready: function() {
            var e = soundManager.createSound({
                id: "menuMusic",
<<<<<<< HEAD
                url: 0 === Et.settings.menuMusic.length ? "/client/resources/sound/pulsusMenu.mp3" : Et.settings.menuMusic
            });
            if(!zt.disableMenuMusic) {
              soundManager.play("menuMusic", {
                  onfinish: function() {
                      Zi()
                  }
              }), Et.loopPlayState = e.playState
=======
                url: 0 === menu.settings.menuMusic.length ? "/client/resources/sound/pulsusMenu.mp3" : menu.settings.menuMusic
            });
            if(!game.disableMenuMusic) {
              soundManager.play("menuMusic", {
                  onfinish: function() {
                      menuMusic()
                  }
              }), menu.loopPlayState = e.playState
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
            }
        },
        ontimeout: function() {
            alert("Switch to a better browser you memehead\nSeriously though, if you're seeing this message, contact us at pulsusgame@gmail.com with error menuMusic")
        }
    })
  }

<<<<<<< HEAD
  lr.credits = function() {
    var e = width > height ? width / 64 : height / 64;
    textAlign(CENTER, CENTER), fill(We.text);
    var t = [pt("credits_client", Ct), "TetroGem", pt("credits_server", Ct), Q(["TetroGem", "Epicness", "Quintec"]), pt("credits_programming", Ct), "cg505", pt("credits_security", Ct), "Quintec", pt("credits_art", Ct), pt("credits_and", Ct, "TetroGem", "Alexandre Declos"), pt("credits_translation_de", Ct), "Scath", pt("credits_translation_es", Ct), "Zemyro", pt("credits_translation_fr", Ct), pt("credits_and", Ct, "Alexandre Declos", "Zemyro"), pt("credits_translation_ru", Ct), pt("credits_and", Ct, "ConfiG", "Shiairo31"), pt("credits_translation_nl", Ct), "sbeve", pt("credits_translation_th", Ct), "oserottoNeko", pt("credits_translation_ro", Ct), "Stqrm26", pt("credits_patreon", Ct), Q(["-Wiffles-", "cg505", "tokaku", "Aero", "ari", "Lae_", "Mungaru", "rice", "Tele_Crab", "Tree42", "AFasterSlowpoke", "Arvid707", "Cynth", "Generic", "ito", "sbeve", "sneaki"]),"PulseHax development",Q(["Mt.Gufo","Pickleman","shianara","floopy","Axye"])],
        i = (height - height / 16) / (t.length + 2);
    textSize(i);
    for (var o = 0; o < t.length; o++) Pi(t[o], width / 2, height / 2 + i * (-t.length / 2 + o) + i / 2 + i / 1.5 / 2, width - 2 * e, i / (o % 2 == 0 ? 1 : 1.5), o % 2 == 0 && "bold")
  }

  Ve.push({
=======
  nav.credits = function() {
    var bufferSize = width > height ? width / 64 : height / 64;
    textAlign(CENTER, CENTER), fill(theme.text);
    var cred = [lang("credits_client", langSel), "TetroGem", lang("credits_server", langSel), langList(["TetroGem", "Epicness", "Quintec"]), lang("credits_programming", langSel), "cg505", lang("credits_security", langSel), "Quintec", lang("credits_art", langSel), lang("credits_and", langSel, "TetroGem", "Alexandre Declos"), lang("credits_translation_de", langSel), "Scath", lang("credits_translation_es", langSel), "Zemyro", lang("credits_translation_fr", langSel), lang("credits_and", langSel, "Alexandre Declos", "Zemyro"), lang("credits_translation_ru", langSel), lang("credits_and", langSel, "ConfiG", "Shiairo31"), lang("credits_translation_nl", langSel), "sbeve", lang("credits_translation_th", langSel), "oserottoNeko", lang("credits_translation_ro", langSel), "Stqrm26", lang("credits_patreon", langSel), langList(["-Wiffles-", "cg505", "tokaku", "Aero", "ari", "Lae_", "Mungaru", "rice", "Tele_Crab", "Tree42", "AFasterSlowpoke", "Arvid707", "Cynth", "Generic", "ito", "sbeve", "sneaki"]),"PulseHax Development",langList(["Mt.Gufo","Pickleman","shianara","floopy","Axye"])],
        ts = (height - height / 16) / (cred.length + 2);
    textSize(ts);
    for (var i = 0; i < cred.length; i++) fitText(cred[i], width / 2, height / 2 + ts * (-cred.length / 2 + i) + ts / 2 + ts / 1.5 / 2, width - 2 * bufferSize, ts / (i % 2 == 0 ? 1 : 1.5), i % 2 == 0 && "bold")
  }

  themes.push({
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
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
<<<<<<< HEAD
    if(!1 === zt.edit && 1 === zt.disMode && M === "game"){
      Tt[zt.song].pause()
      zt.effectsCache.vignette = 15
      lowLag.play("retry",".5");
      zt.disMode = 1,
      zt.retry = !0,
      zt.buttonHover[0] /= 2,
      zt.lvl.prevPlay = zt.song,
      zt.songVol = 100;
=======
    if(!1 === game.edit && 1 === game.disMode && screen === "game"){
      lvlHowl[game.song].pause()
      game.effectsCache.vignette = 15
      lowLag.play("retry",".5");
      game.disMode = 1,
      game.retry = !0,
      game.buttonHover[0] /= 2,
      menu.lvl.prevPlay = game.song,
      game.songVol = 100;
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
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
