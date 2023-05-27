inject("Init");
window.addEventListener("SetupComplete", function() {
  chrome.storage.local.get({Settings:{wave:false,disableMenuMusic:false},CustomTheme:{}}, function(result) {
    if(result.Settings.wave) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      h.wave = 1;
      `}));
    }
    if(result.Settings.disableMenuMusic) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      ut.disableMenuMusic = true;
      `}));
    }
    if(result.Settings.additionalThemes) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
        W[gt].theme_gufo = "Gufo's theme";
        W[gt].theme_floopy = "Floopy's theme";
        W[gt].theme_shia = "Shia's theme";
        W[gt].theme_lilyyy = "Lilyyy's theme";
        W[gt].theme_axye = "Axye's theme";
        ft.settings.menu.pages[1].items[1].options.push(10, 11, 12, 13, 14);
        ft.settings.menu.pages[1].items[1].labels.push('theme_gufo', 'theme_floopy', 'theme_shia', 'theme_lilyyy', 'theme_axye');
      `}));
    }
    if(result.Settings.customTheme) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      W[gt].theme_CUSTOM = "Custom theme";
      ft.settings.menu.pages[1].items[1].options.push(15);
      ft.settings.menu.pages[1].items[1].labels.push('theme_CUSTOM');
      `}));
    }
    Object.keys(result.CustomTheme).forEach(function (key){
      if(key != "active" && key != "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Ge[15].${key} = color(${result.CustomTheme[key].substr(1).match(/../g).map(x=>+`0x${x}`)});
        `}));
      } else if (key == "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Ge[15].${key} = ${result.CustomTheme[key]};
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