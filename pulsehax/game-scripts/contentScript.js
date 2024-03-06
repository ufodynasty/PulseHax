let initScript = document.createElement('script');
initScript.src = chrome.runtime.getURL(`/pulsehax/game-scripts/Init.js`);
initScript.onload = function() {
  this.remove();
};
let editorMenu = document.createElement('script');
editorMenu.src = chrome.runtime.getURL(`/pulsehax/game-scripts/editorMenu.js`);
editorMenu.onload = function() {
  this.remove();
};
(document.documentElement || document.head).append(initScript, editorMenu);

chrome.storage.onChanged.addListener(function(changes, areaName) {
    if(areaName === "local" && Object.hasOwn(changes, "CustomTheme")) {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
            let newVal = JSON.parse(JSON.stringify(${JSON.stringify(changes.CustomTheme.newValue)}));
            game.dsa = newVal;
            for(i in newVal) {
                if(i === "lightTheme") {
                    themes[10]["lightTheme"] = newVal.lightTheme;
                } else {
                    themes[10][i] = color(game.hexToRgb(newVal[i]).r, game.hexToRgb(newVal[i]).g, game.hexToRgb(newVal[i]).b);
                }
            }
        `})
    );
    }
})
window.addEventListener("SetupComplete", function() {
    let defaultTheme = {};
    window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
    for(let i in themes[10]) {
        if(i === "lightTheme") {
            defaultTheme[i] = themes[10][i]
        }
        defaultTheme[i] = game.rgbToHex(...themes[10][i]);
    }
    `})
    );
    chrome.storage.local.get({
        Settings: {
            wave: false,
            welcomeText: "",
            additionalThemes: false,
            customTheme: false,
            sfxVolume: 50,
            skipIntro: false,
            preferredFSEnabled: false,
            preferredFS: 1,
            changeTab: false
        },
        CustomTheme: {
            main: "#23323c",
            text: "#ffffff",
            overlayShade: "#202d36",
            shade: "#14232d",
            buttonDown: "#f0f0f0",
            buttonUp: "#ffffff",
            buttonText: "#000000",
            textDown: "#c8c8c8",
            select: "#3c3223",
            modText: "#ffaf00",
            scrollbar: "#ffffff",
            lightTheme: false,
            checkmark: "#00afff",
            dropdown: "#e1e1e1"
        }, Plugins:[]}, function(response) {
    let userSettings = response.Settings;
    let customTheme = response.CustomTheme;
    let plugins = response.Plugins;
    for(i of plugins) {
        window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: i.script}));
        i.active = true;
    };
    chrome.storage.local.set({Plugins:plugins});
    // Setup
    window.dispatchEvent(new CustomEvent("InjectedScriptEval", {detail: `
        let customTheme = JSON.parse(JSON.stringify(${JSON.stringify(customTheme)}));
        let customThemeNew = new Object();
        for(let i in customTheme) {
            if(i === "lightTheme") {
                customThemeNew[i] = customTheme[i];   
            } else {
                customThemeNew[i] = color(game.hexToRgb(customTheme[i]).r, game.hexToRgb(customTheme[i]).g, game.hexToRgb(customTheme[i]).b)
            }
        };
        themes[10] = customThemeNew
        menu.PHSettings = {
            additionalThemes: ${userSettings.additionalThemes},
            changeTab: ${userSettings.changeTab},
            customTheme: ${userSettings.customTheme},
            preferredFSEnabled: ${userSettings.preferredFSEnabled},
            preferredFS: ${userSettings.preferredFS === "" ? '""' : userSettings.preferredFS},
            sfxVolume: ${userSettings.sfxVolume}
        };
        welcome.wave = ${userSettings.wave === true ? 1 : `welcome.wave`};
        langs[langSel].welcome = ${userSettings.welcomeText !== "" ? '"' + userSettings.welcomeText + '"' : `lang("welcome", langSel)`};
        game.pulseHaxIcon = "${chrome.runtime.getURL("./assets/game/icon.ico")}";
        game.skipIntro = ${userSettings.skipIntro};

        game.shiftTab = false;
        game.quickPlayEnabled = true;
        game.toggleQuickPlay = function(bool) {
            game.quickPlayEnabled = bool
        };
        game.functionParams = function(funcName) {
            return "(" + funcName.toString().split("{")[0].split("(")[1]
        };
        document.querySelector('link[rel*="icon"]').href = menu.PHSettings.changeTab ? game.pulseHaxIcon : 'https://www.pulsus.cc/play/client/favicon.ico';
        document.title = menu.PHSettings.changeTab ? "PulseHax" : "Pulsus";
        lowLag.load("${chrome.runtime.getURL("/assets/audio/retry.wav")}", "retry");
        lowLag.load("${chrome.runtime.getURL("/assets/audio/load.wav")}", "load");
        lowLag.load("${chrome.runtime.getURL("/assets/audio/scroll.wav")}", "scroll");
        `})
    );
    window.dispatchEvent(new CustomEvent("StorageToGame"))
});
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