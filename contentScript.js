inject("Init");
window.addEventListener("SetupComplete", function() {
  chrome.storage.local.get({Settings:{wave:false,disableMenuMusic:false},CustomTheme:{}}, function(result) {
    if(result.Settings.wave) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      xe.wave = 1;
      `}));
    }
    if(result.Settings.disableMenuMusic) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      Ot.disableMenuMusic = true;
      `}));
    }
    if(result.Settings.customTheme) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      H[yt].theme_CUSTOM = "Custom theme";
      zt.settings.menu.pages[1].items[1].options.push(10);
      zt.settings.menu.pages[1].items[1].labels.push('theme_CUSTOM');
      `}));
    }
    if(result.Settings.additionalThemes) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
        H[yt].theme_gufo = "Gufo's theme";
        H[yt].theme_floopy = "Floopy's theme";
        H[yt].theme_shia = "Shia's theme";
        H[yt].theme_lilyyy = "Lilyyy's theme";
        H[yt].theme_axye = "Axye's theme";
        zt.settings.menu.pages[1].items[1].options.push(11, 12, 13, 14, 15);
        zt.settings.menu.pages[1].items[1].labels.push('theme_gufo', 'theme_floopy', 'theme_shia', 'theme_lilyyy', 'theme_axye');
      `}));
    }
    Object.keys(result.CustomTheme).forEach(function (key){
      if(key != "active" && key != "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Ke[10].${key} = color(${result.CustomTheme[key].substr(1).match(/../g).map(x=>+`0x${x}`)});
        `}));
      } else if (key == "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Ke[10].${key} = ${result.CustomTheme[key]};
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

function inject(name) {
  var s = document.createElement('script');
  s.src = chrome.runtime.getURL(`${name}.js`);
  s.onload = function() {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}