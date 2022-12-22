inject("Init");
window.addEventListener("SetupComplete", function() {
  chrome.storage.sync.get({Settings:{Wave:false}}, function(result) {
    if(result.Settings.Wave) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      h.wave = 1;
      `}));
    }
    if(result.Settings.additionalThemes) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
        W[gt].theme_gufo = "Gufo's theme";
        W[gt].theme_floopy = "Floopy's theme";`
        //W[gt].theme_tbd3 = "tbd3";
        +`
        ft.settings.menu.pages[1].items[1].options.push(10, 11);
        ft.settings.menu.pages[1].items[1].labels.push('theme_gufo', 'ttheme_floopy');
      `}));
    }
    if(result.Settings.customTheme.active) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
      W[gt].theme_CUSTOM = "Custom theme";
      ft.settings.menu.pages[1].items[1].options.push(13);
      ft.settings.menu.pages[1].items[1].labels.push('theme_CUSTOM');
      `}));
    }
    Object.keys(result.Settings.customTheme).forEach(function (key){
      console.log(key + ":" +result.Settings.customTheme[key])
      if(key != "active" && key != "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Ge[13].${key} = color(${result.Settings.customTheme[key].substr(1).match(/../g).map(x=>+`0x${x}`)});
        `}));
      } else if (key == "lightTheme") {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
          Ge[13].${key} = ${result.Settings.customTheme[key]};
        `}));
      }
    });
  });
  window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
    lowLag.load("${chrome.runtime.getURL("/assets/retry.wav")}", "retry")
  `}));
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