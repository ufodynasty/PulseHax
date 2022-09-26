inject("Init");
window.addEventListener("SetupComplete", function() {
  chrome.storage.sync.get({Settings:{Wave:false}}, function(result) {
    if(result.Settings.Wave) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      Pe.wave = 1;
      `}));
    }
    if(result.Settings.additionalThemes) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
        T[Ct].theme_gufo = "Gufo's theme";
        T[Ct].theme_tbd2 = "tbd2";
        T[Ct].theme_tbd3 = "tbd3";
        Et.settings.menu.pages[1].items[1].options.push(10,11,12);
        Et.settings.menu.pages[1].items[1].labels.push('theme_gufo','theme_tbd2','theme_tbd3');
      `}));
    }
    if(result.Settings.customTheme.active) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      T[Ct].theme_CUSTOM = "Custom Theme";
      Et.settings.menu.pages[1].items[1].options.push(13);
      Et.settings.menu.pages[1].items[1].labels.push('theme_CUSTOM');
      `}));
    }
    Object.keys(result.Settings.customTheme).forEach(function (key){
      console.log(key + ":" +result.Settings.customTheme[key])
      if(key != "active" && key != "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Le[13].${key} = color(${result.Settings.customTheme[key].substr(1).match(/../g).map(x=>+`0x${x}`)});
        `}));
      } else if (key == "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Le[13].${key} = ${result.Settings.customTheme[key]};
        `}));
      }
    });
  });
})


chrome.runtime.onMessage.addListener((obj,sender, response) => {
	if(obj.payload) {
		window.addEventListener("InjectedScriptResponse", function(evt) {
				response( {response: evt.detail})
				return false;
		},{once: true});
		var test = new CustomEvent("InjectedScriptEval", {detail: obj.payload});
		window.dispatchEvent(test);
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