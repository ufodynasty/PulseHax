var s = document.createElement('script');
s.src = chrome.runtime.getURL(`Init.js`);
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
window.addEventListener("SetupComplete", function() {
  chrome.storage.local.get({Settings:{wave:false,disableMenuMusic:false},CustomTheme:{}}, function(result) {
    if(result.Settings.wave) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
<<<<<<< HEAD
      re.wave = 1;
=======
      welcome.wave = 1;
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
      `}));
    }
    if(result.Settings.disableMenuMusic) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
<<<<<<< HEAD
      zt.disableMenuMusic = true;
=======
      game.disableMenuMusic = true;
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
      `}));
    }
    if(result.Settings.customTheme) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
<<<<<<< HEAD
      T[Ct].theme_CUSTOM = "Custom theme";
      Et.settings.menu.pages[1].items[1].options.push(10);
      Et.settings.menu.pages[1].items[1].labels.push('theme_CUSTOM');
=======
      langs[langSel].theme_CUSTOM = "Custom theme";
      menu.settings.menu.pages[1].items[1].options.push(10);
      menu.settings.menu.pages[1].items[1].labels.push('theme_CUSTOM');
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
      `}));
    }
    if(result.Settings.additionalThemes) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
<<<<<<< HEAD
        T[Ct].theme_gufo = "Gufo's theme";
        T[Ct].theme_floopy = "Floopy's theme";
        T[Ct].theme_shia = "Shia's theme";
        T[Ct].theme_lilyyy = "Lilyyy's theme";
        T[Ct].theme_axye = "Axye's theme";
        Et.settings.menu.pages[1].items[1].options.push(11, 12, 13, 14, 15);
        Et.settings.menu.pages[1].items[1].labels.push('theme_gufo', 'theme_floopy', 'theme_shia', 'theme_lilyyy', 'theme_axye');
=======
        langs[langSel].theme_gufo = "Gufo's theme";
        langs[langSel].theme_floopy = "Floopy's theme";
        langs[langSel].theme_shia = "Shia's theme";
        langs[langSel].theme_lilyyy = "Lilyyy's theme";
        langs[langSel].theme_axye = "Axye's theme";
        menu.settings.menu.pages[1].items[1].options.push(11, 12, 13, 14, 15);
        menu.settings.menu.pages[1].items[1].labels.push('theme_gufo', 'theme_floopy', 'theme_shia', 'theme_lilyyy', 'theme_axye');
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
      `}));
    }
    Object.keys(result.CustomTheme).forEach(function (key){
      if(key != "active" && key != "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
<<<<<<< HEAD
          Ve[10].${key} = color(${result.CustomTheme[key].substr(1).match(/../g).map(x=>+`0x${x}`)});
        `}));
      } else if (key == "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Ve[10].${key} = ${result.CustomTheme[key]};
=======
          themes[10].${key} = color(${result.CustomTheme[key].substr(1).match(/../g).map(x=>+`0x${x}`)});
        `}));
      } else if (key == "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          themes[10].${key} = ${result.CustomTheme[key]};
>>>>>>> bbe15ae0ba06eff98a4529a7107e7c6b88be831e
        `}));
      }
    });
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

