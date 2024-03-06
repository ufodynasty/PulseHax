const openEditorMenu = document.getElementById("open-editor-menu");
execute(`response = {edit: game.edit, shiftTab: game.shiftTab}`, function(response) {
    openEditorMenu.value = response.response.shiftTab ? "Close Editor Menu" : "Open Editor Menu";
    openEditorMenu.disabled = openEditorMenu.value === "Close Editor Menu" ? false : !response.response.edit;
});
openEditorMenu.addEventListener("click", function() {
    execute(`game.shiftTab = !${openEditorMenu.value === "Close Editor Menu"};`, function(response) {
        if(response.response) {
            openEditorMenu.value = "Close Editor Menu";
        } else {
            openEditorMenu.value = "Open Editor Menu";
        }
    });
});