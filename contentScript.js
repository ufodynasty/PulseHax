chrome.storage.sync.get({Settings:{Wave:false}}, function(result) {
    if(result.Settings.Wave) {
        inject("Wave");
    }
    inject("Init");
});


// window.addEventListener("InjectedScriptResponse", function(evt) {
//     console.log("This is the response:");
//     console.log(evt.detail);
// }, false);

chrome.runtime.onMessage.addListener((obj,sender, response) => {
    window.addEventListener("InjectedScriptResponse", function(evt) {
        response( {response: evt.detail})
        return false;
    }, false);
    var test = new CustomEvent("InjectedScriptEval", {detail: obj.message});
    window.dispatchEvent(test);
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




