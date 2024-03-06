chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.log(tabs[0].id)
    chrome.tabs.sendMessage(tabs[0].id, {type: "ping"}, function(response) {
        console.log(response);
        console.log(chrome.runtime)
        if(chrome.runtime.lastError) {
            console.warn("PulseHax can only be run on Pulsus γ")
        } else if(response == "pong") {
            window.location.href="/pulsehax/popup-windows/extras.html";
        }
        return false;
    });  
});