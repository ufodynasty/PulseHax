let s = document.createElement('script');
s.src = chrome.runtime.getURL(`Init.js`);
s.onload = function() {
  this.remove();
};
let s1 = document.createElement('script');
s1.src = chrome.runtime.getURL(`editorAddon.js`);
s1.onload = function() {
  this.remove();
};
(document.head || document.documentElement).append(s, s1);
window.addEventListener("SetupComplete", function() {
  chrome.storage.local.get({Settings:{wave:false,disableMenuMusic:false},CustomTheme:{},plugins:[]}, function(result) {
    if(result.Settings.wave) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      welcome.wave = 1;
      `}));
    }
    // if(result.Settings.disableMenuMusic) {
    //   window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
    //   game.disableMenuMusic = true;
    //   `}));
    // }
    if(result.Settings.customTheme) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      langs.en.theme_CUSTOM = "Custom theme";
      menu.settings.menu.pages[0].items[2].options.push(10);
      menu.settings.menu.pages[0].items[2].labels.push('theme_CUSTOM');
      `}));
    }
    if(result.Settings.additionalThemes) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
        langs[langSel].theme_gufo = "Gufo's theme";
        langs[langSel].theme_floopy = "Floopy's theme";
        langs[langSel].theme_shia = "Shia's theme";
        langs[langSel].theme_lilyyy = "Lilyyy's theme";
        langs[langSel].theme_axye = "Axye's theme";
        menu.settings.menu.pages[0].items[2].options.push(11, 12, 13, 14, 15);
        menu.settings.menu.pages[0].items[2].labels.push('theme_gufo', 'theme_floopy', 'theme_shia', 'theme_lilyyy', 'theme_axye');
      `}));
    }
    Object.keys(result.CustomTheme).forEach(function (key){
      if(key != "active" && key != "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          themes[10].${key} = color(${result.CustomTheme[key].substr(1).match(/../g).map(x=>+`0x${x}`)});
        `}));
      } else if (key == "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          themes[10].${key} = ${result.CustomTheme[key]};
        `}));
      }
    });
    for(i of result.plugins) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: i.script}));
      i.active = true;
    }
    chrome.storage.local.set({plugins:result.plugins});
  });
  window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
    lowLag.load("${chrome.runtime.getURL("/assets/retry.wav")}", "retry")
  `}));
})


chrome.runtime.onMessage.addListener((obj,sender, response) => {
	if(obj.type == "exec", obj.content) {
		window.addEventListener("InjectedScriptResponse", function(evt) {
      response( {response: evt.detail})
      return false;
		},{once: true});
		let responseEvent = new CustomEvent("InjectedScriptEval", {detail: obj.content});
		window.dispatchEvent(responseEvent);
	} else if(obj.type == "ping") {
    response("pong")
  }
	return false;
});

