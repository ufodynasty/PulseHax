const html = document.getElementsByTagName("html")[0];
const themeToggle = document.getElementById("theme-toggle");
const save = document.getElementById("save-popup");
let saveTransCompleted = true;
function savePopup(text) {
    save.innerText = `Saved ${text}!`;
    save.className = "save-popup-show";
    if(saveTransCompleted) {
        saveTransCompleted = false;
        setTimeout(() => {
            save.className = "save-popup-hidden";
            saveTransCompleted = true;
        }, 1000);
    }
}
themeToggle.addEventListener("click", function() {
    userSettings.theme = userSettings.theme === "dark-theme" ? "light-theme" : "dark-theme";
    chrome.storage.local.set({Settings:userSettings}, function() {
        savePopup("Theme");
    });
    html.className = userSettings.theme;
    themeToggle.value = userSettings.theme === "dark-theme" ? "Switch to Light Theme" : "Switch to Dark Theme";
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.log(tabs[0].id)
    chrome.tabs.sendMessage(tabs[0].id, {type: "ping"}, function(response) {
        console.log(response);
        console.log(chrome.runtime)
        if(chrome.runtime.lastError) {
            console.warn("PulseHax can only be run on Pulsus γ")
        } else if(response == "pong") {
            window.location.href="extras.html";
        }
        return false;
    });  
});