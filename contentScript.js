let s = document.createElement('script');
s.src = chrome.runtime.getURL(`Init.js`);
s.onload = function() {
  this.remove();
};
let s1 = document.createElement('script');
s1.src = chrome.runtime.getURL(`inGamePort.js`);
s1.onload = function() {
  this.remove();
};
(document.head || document.documentElement).append(s, s1);
window.addEventListener("SetupComplete", function() {
  chrome.storage.local.get({Settings:{wave:false,disableMenuMusic:false},CustomTheme:{},plugins:[]}, function(result) {
    for(i of result.plugins) {
      window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: i.script}));
      i.active = true;
    }
    chrome.storage.local.set({plugins:result.plugins});
  });
  window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
    lowLag.load("${chrome.runtime.getURL("/assets/retry.wav")}", "retry");
    lowLag.load("${chrome.runtime.getURL("/assets/load.wav")}", "load");
    lowLag.load("${chrome.runtime.getURL("/assets/scroll.wav")}", "scroll");
    game.pulseHaxLogo = "${chrome.runtime.getURL("/assets/icon.ico")}"
    img.pulseHax = loadImage("${chrome.runtime.getURL("/assets/icon.png")}")
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

