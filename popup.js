chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  chrome.tabs.sendMessage(tabs[0].id, {type: "ping"}, function(response) {
    if(chrome.runtime.lastError) {
      console.warn("PulseHax can only be run on Pulsus γ")
    }else if(response == "pong") {
      window.location.href="home.html";
    }
    return false;
  });  
});


