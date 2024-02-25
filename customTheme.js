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
};
themeToggle.addEventListener("click", function() {
    userSettings.theme = userSettings.theme === "dark-theme" ? "light-theme" : "dark-theme";
    chrome.storage.local.set({Settings:userSettings}, function() {
        savePopup("Theme");
    });
    html.className = userSettings.theme;
    themeToggle.value = userSettings.theme === "dark-theme" ? "Switch to Light Theme" : "Switch to Dark Theme";
});

const openThemeEditor = document.getElementById("open-theme-editor");
openThemeEditor.addEventListener("click", function() {
    execute(`response = {user: newGrabUser(user.uuid, "uuid")}`, function(response) {
        userData = response.response.user;
        chrome.storage.local.set({UserData:userData})
        window.open(chrome.runtime.getURL("/themeEditor.html"), "_blank")
    })
});