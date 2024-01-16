function completeSetup() {
  Object.defineProperty(globalThis, 'calcLevelStars', { get: () => {return xn},set: (val) => {xn = val}});
  Object.defineProperty(globalThis, 'clevels', { get: () => {return Ht},set: (val) => {Ht = val}});
  Object.defineProperty(globalThis, 'copyLevel', { get: () => {return Ko},set: (val) => {Ko = val}});
  Object.defineProperty(globalThis, 'copyObject', { get: () => {return D},set: (val) => {D = val}});
  Object.defineProperty(globalThis, 'fitText', { get: () => {return Ft},set: (val) => {Ft = val}});
  Object.defineProperty(globalThis, 'game', { get: () => {return St},set: (val) => {St = val}});
  Object.defineProperty(globalThis, 'getLevelDownloadState', { get: () => {return Vo},set: (val) => {Vo = val}});
  Object.defineProperty(globalThis, 'lang', { get: () => {return Et},set: (val) => {Et = val}});
  Object.defineProperty(globalThis, 'langList', { get: () => {return U},set: (val) => {U = val}});
  Object.defineProperty(globalThis, 'langSel', { get: () => {return Pt},set: (val) => {Pt = val}});
  Object.defineProperty(globalThis, 'langs', { get: () => {return F},set: (val) => {F = val}});
  Object.defineProperty(globalThis, 'levels', { get: () => {return Tt},set: (val) => {Tt = val}});
  Object.defineProperty(globalThis, 'lvlHowl', { get: () => {return kt},set: (val) => {kt = val}});
  Object.defineProperty(globalThis, 'menu', { get: () => {return Bt},set: (val) => {Bt = val}});
  Object.defineProperty(globalThis, 'menuMusic', { get: () => {return eo},set: (val) => {eo = val}});
  Object.defineProperty(globalThis, 'musicManager', { get: () => {return hr},set: (val) => {hr = val}}); // This name is wrong
  Object.defineProperty(globalThis, 'nav', { get: () => {return p},set: (val) => {p = val}}); // This name is wrong
  Object.defineProperty(globalThis, 'newGrabLevelMeta', { get: () => {return Wt},set: (val) => {Wt = val}});
  Object.defineProperty(globalThis, 'screen', { get: () => {return Re},set: (val) => {Re = val}});
  Object.defineProperty(globalThis, 'theme', { get: () => {return _},set: (val) => {_ = val}});
  Object.defineProperty(globalThis, 'themes', { get: () => {return je},set: (val) => {je = val}});
  Object.defineProperty(globalThis, 'toLoad', { get: () => {return Qe},set: (val) => {Qe = val}});
  Object.defineProperty(globalThis, 'user', { get: () => {return y},set: (val) => {y = val}});
  Object.defineProperty(globalThis, 'welcome', { get: () => {return r},set: (val) => {r = val}});
  window.dispatchEvent(new CustomEvent('SetupComplete'));
}
eval(or.toString().slice(0,-1) + 
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

// Feature removed in V 0.6.1 due to gamma 0.28.12 including a menu music volume option

// menuMusic = function() {
//   soundManager.setup({
//       onready: function() {
//           var e = soundManager.createSound({
//               id: "menuMusic",
//               url: 0 === menu.settings.menuMusic.length ? "/client/resources/sound/pulsusMenu.mp3" : menu.settings.menuMusic
//           });
//           if(!game.disableMenuMusic) {
//             soundManager.play("menuMusic", {
//                 onfinish: function() {
//                     menuMusic()
//                 }
//             }), menu.loopPlayState = e.playState
//           }
//       },
//       ontimeout: function() {
//           alert("Switch to a better browser you memehead\nSeriously though, if you're seeing this message, contact us at pulsusgame@gmail.com with error menuMusic")
//       }
//   })
// }

  // Feature removed in V 0.6.1 due to gamma 0.28.12 migrating credits to the pulsus wiki

  // nav.credits = function() {
  //   var bufferSize = width > height ? width / 64 : height / 64;
  //   textAlign(CENTER, CENTER), fill(theme.text);
  //   var cred = [lang("credits_client", langSel), "TetroGem", lang("credits_server", langSel), langList(["TetroGem", "Epicness", "Quintec"]), lang("credits_programming", langSel), "cg505", lang("credits_security", langSel), "Quintec", lang("credits_art", langSel), lang("credits_and", langSel, "TetroGem", "Alexandre Declos"), lang("credits_translation_de", langSel), "Scath", lang("credits_translation_es", langSel), "Zemyro", lang("credits_translation_fr", langSel), lang("credits_and", langSel, "Alexandre Declos", "Zemyro"), lang("credits_translation_ru", langSel), lang("credits_and", langSel, "ConfiG", "Shiairo31"), lang("credits_translation_nl", langSel), "sbeve", lang("credits_translation_th", langSel), "oserottoNeko", lang("credits_translation_ro", langSel), "Stqrm26", lang("credits_patreon", langSel), langList(["-Wiffles-", "cg505", "tokaku", "Aero", "ari", "Lae_", "Mungaru", "rice", "Tele_Crab", "Tree42", "AFasterSlowpoke", "Arvid707", "Cynth", "Generic", "ito", "sbeve", "sneaki"]),"PulseHax Development",langList(["Mt.Gufo","Pickleman","shianara","floopy","Axye"])],
  //       ts = (height - height / 16) / (cred.length + 2);
  //   textSize(ts);
  //   for (var i = 0; i < cred.length; i++) fitText(cred[i], width / 2, height / 2 + ts * (-cred.length / 2 + i) + ts / 2 + ts / 1.5 / 2, width - 2 * bufferSize, ts / (i % 2 == 0 ? 1 : 1.5), i % 2 == 0 && "bold")
  // }

  themes.push({
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
    if(!1 === game.edit && 1 === game.disMode && screen === "game"){
      lvlHowl[game.song].pause()
      game.effectsCache.vignette = 15
      lowLag.play("retry",".5");
      game.disMode = 1,
      game.retry = !0,
      game.buttonHover[0] /= 2,
      menu.lvl.prevPlay = game.song,
      game.songVol = 100;
    }
  }
  if("AltLeft" === e.code || "AltRight" === e.code){
    e.preventDefault();
  }
}, !0);


window.addEventListener("InjectedScriptEval", function(evt) {
  try {
    response = JSON.parse(JSON.stringify(eval(evt.detail) ?? null, getCircularReplacer()));
  } catch(error) {
    console.error(error);
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
