let userSettings = {};
let userData = {};
chrome.storage.local.get({Settings:{
    theme: "dark-theme",

    wave: false,
    welcomeText: "",

    additionalThemes: false,
    customTheme: false,
    sfxVolume: 50,

    skipIntro: false,
    preferredFS: 1,

    changeTab: false
}, UserData:{
    user: null
}}, function(response) {
    userSettings = response.Settings;
    userData = response.UserData;
    const html = document.getElementsByTagName("html")[0];
    const themeToggle = document.getElementById("theme-toggle");
    html.className = userSettings.theme;
    themeToggle.value = userSettings.theme === "dark-theme" ? "Switch to Light Theme" : "Switch to Dark Theme";
    Object.keys(userSettings).filter((key) => key!=="theme").forEach((key) => {
        let element = document.getElementById(key);
        if(element !== null) {
            if(element.type === "checkbox") {
                element.checked = userSettings[key];
            }
            if(element.type === "range") {
                element.value = userSettings[key];
                element.style.setProperty('--r', (360 + 11.25) / 100 * element.value + 'deg')
            }
            if(element.type === "text" || element.type === "number") {
                element.value = userSettings[key];
            }
        }
    })
    document.dispatchEvent(new CustomEvent("FetchLocalStorage"))
});

function execute(request,responseHandler = () => {}) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {type: "exec", content: request}, function(response) {
            responseHandler(response);
            return false;
        });  
    });
};

function refreshValue(value, valueArg) {
    switch(value) {
        case "wave":
            execute(`
                welcome.wave = welcome.wave ? 1 : Math.round(Math.random() * 1000)
            `);
        case "welcomeText":
            break;
        case "additionalThemes":
            execute(`
                menu.settings.menu.pages[0].items[2].options = menu.settings.menu.pages[0].items[2].options.filter((x) => !(x >= 11 && x <=15));
                menu.settings.menu.pages[0].items[2].labels = menu.settings.menu.pages[0].items[2].labels.filter((x) => !x.includes('addt'));
                if(menu.PHSettings.additionalThemes) {
                    menu.settings.menu.pages[0].items[2].options.push(11, 12, 13, 14, 15);
                    menu.settings.menu.pages[0].items[2].labels.push('theme_addt_gufo', 'theme_addt_floopy', 'theme_addt_shia', 'theme_addt_lilyyy', 'theme_addt_axye');
                };
                if(!menu.PHSettings.additionalThemes && (menu.settings.themeSel >=11 || menu.settings.themeSel <=15)) {
                    menu.settings.themeSel = 0;
                };
            `);
            break;
        case "customTheme":
            execute(`
                if(!menu.PHSettings.customTheme) {
                    menu.settings.menu.pages[0].items[2].options = menu.settings.menu.pages[0].items[2].options.filter((x) => !(x === 10));
                    menu.settings.menu.pages[0].items[2].labels = menu.settings.menu.pages[0].items[2].labels.filter((x) => x!=='theme_CUSTOM');
                    if(menu.settings.themeSel === 10) {
                        menu.settings.themeSel = 0;
                    }
                } else {
                    menu.settings.menu.pages[0].items[2].options.push(10);
                    if(menu.PHSettings.additionalThemes) {
                        menu.settings.menu.pages[0].items[2].labels.splice(menu.settings.menu.pages[0].items[2].labels.indexOf('theme_addt_gufo'), 0, 'theme_CUSTOM');
                    } else {
                        menu.settings.menu.pages[0].items[2].labels.push("theme_CUSTOM")
                    }
                    menu.settings.menu.pages[0].items[2].options.sort((a, b) => a-b);
                };
            `);
            break;
        case "sfxVolume":
            break;
        case "skipIntro":
            break;
        case "preferredFS":
            break;
        case "changeTab":
            execute(`
                document.querySelector('link[rel*="icon"]').href = ${valueArg ? "game.pulseHaxIcon" : '"' + 'https://www.pulsus.cc/play/client/favicon.ico' + '"'};
                document.title = "${valueArg ? "PulseHax" : "Pulsus"}";
            `)
        default:
            console.error("Invalid refreshValue value used")
    }
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
        };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function rgbToHsv([r,g,b]) {
    let v=Math.max(r,g,b), c=v-Math.min(r,g,b);
    let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); 
    return [(h<0?h+6:h)/6 * 255, (v&&c/v) * 255, v];
}