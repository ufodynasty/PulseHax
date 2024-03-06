const openThemeEditor = document.getElementById("open-theme-editor");
openThemeEditor.addEventListener("click", function() {
    execute(`response = {user: newGrabUser(user.uuid, "uuid")}`, function(response) {
        userData = response.response.user;
        chrome.storage.local.set({UserData:userData})
        window.open(chrome.runtime.getURL("/pulsehax/windows/themeEditor.html"), "_blank")
    })
});
const browseThemes = document.getElementById("browse-themes");
browseThemes.addEventListener("click", function() {
    execute(`response = {user: newGrabUser(user.uuid, "uuid")}`, function(response) {
        userData = response.response.user;
        chrome.storage.local.set({UserData:userData})
        window.open(chrome.runtime.getURL("/pulsehax/windows/themeBrowser.html"), "_blank")
    })
});