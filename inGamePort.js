window.addEventListener("SetupComplete", function() {
Object.defineProperty(globalThis, 'clickMenu', { get: () => {return fs},set: (val) => {fs = val}}); // This is wrong
Object.defineProperty(globalThis, 'ease', { get: () => {return At},set: (val) => {At = val}});
Object.defineProperty(globalThis, 'loadStartScreens', { get: () => {return Cs},set: (val) => {Cs = val}}); // This is wrong
Object.defineProperty(globalThis, 'newSettingsMenu', { get: () => {return Jo},set: (val) => {Jo = val}});
Object.defineProperty(globalThis, 'saveGameData', { get: () => {return Qn},set: (val) => {Qn = val}});
Object.defineProperty(globalThis, 'hitbox', { get: () => {return Ft},set: (val) => {Ft = val}});
Object.defineProperty(globalThis, 'promptRes', { get: () => {return ki},set: (val) => {ki = val}});
Object.defineProperty(globalThis, 'prmpt', { get: () => {return Ri},set: (val) => {Ri = val}});
Object.defineProperty(globalThis, 'loadLevel', { get: () => {return qi},set: (val) => {qi = val}});
Object.defineProperty(globalThis, 'popupMessage', { get: () => {return Gn},set: (val) => {Gn = val}}); // This is wrong
Object.defineProperty(globalThis, 'prmpting', { get: () => {return g},set: (val) => {g = val}});

eval(`musicManager.field.draw = ` + musicManager.field.draw.toString().replace(`0,width/1024`, `pulseHax.skin.currentSkin.URPos === "bottom" ? -height/16 + height - height/64*2 : 0,width/1024`))
// Stringified parameters
const NSMReplace = newSettingsMenu.prototype.draw.toString().slice(newSettingsMenu.prototype.draw.toString().indexOf('else if("color"==='), newSettingsMenu.prototype.draw.toString().lastIndexOf('alphas})}}),pop()}')+'alphas})}}),pop()}'.length);
const strParamsLength = {
    menu: 2,
}
const strParams = {
    clickMenu: clickMenu.name,
    loadStartScreens: loadStartScreens.name,
    newSettingsMenu: newSettingsMenu.name,
    saveGameData: saveGameData.name,
    hitbox: hitbox.name,
    promptRes: promptRes.name,
    prmpt: prmpt.name,
    loadLevel: loadLevel.name,
    popupMessage: popupMessage.name,
    prmpting: 'g',
    customURNewReplace: `height/64)}
    for(let i = game.hitValues.length-2; i >= 0; i--) {
        colorMode(RGB),
        fill(game.hitValues[i].color.levels[0], game.hitValues[i].color.levels[1], game.hitValues[i].color.levels[2], 255/5 * game.guiAlpha),
        rectMode(CENTER),
        noStroke(), 
        rect(0, pulseHax.skin.currentSkin.URPos === "top" ? -height/48 + height/64*2 : -height/16 + height - height/64*2, game.hitValues[i].timing * width / 2, height/64 * 2)
    };
    function getStandardDeviation (array) {
        const n = array.length
        if( n === 0) { return 0}
        const mean = array.reduce((a, b) => a + b) / n
        return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    };
    function calcUR() {
        let hitErrMs = []
        game.sectionPerformance.forEach((e) => { hitErrMs.push(Math.round(1000*(e[2] / game.bpm * 60 * 1e3))/100 )})
            return Math.round(getStandardDeviation(hitErrMs)*1000)/1000 * game.mods.hitWindow * game.mods.bpm
        };
    colorMode(RGB),
    unstableRate = calcUR(),
    unstableRateDis += ease(unstableRate, unstableRateDis, 0.35);
    textAlign(CENTER, CENTER),
    fill(255, 200*game.guiAlpha),
    textSize(height / 32 * 1.25),
    text(unstableRateDis.toFixed(1)+"UR", 0, height - height/16*1.5 - height/16*.5*4/3)
    pop()}`,
    customURBarReplace: `/6*game.mods.bpm)),rect((game.hitValues[3].timing * width / 2) * Math.round(1000*(P.error / game.bpm * 60 * 1e3))/1000/150*game.mods.bpm/2, pulseHax.skin.currentSkin.URPos === "top" ? -height/48 + height/64*2 : -height/16 + height - height/64*2, width/512, height/64 * 3)`,

    NSMtype: newSettingsMenu.prototype.draw.toString()[newSettingsMenu.prototype.draw.toString().indexOf(`.type`)-2] === "=" ?
    newSettingsMenu.prototype.draw.toString()[newSettingsMenu.prototype.draw.toString().indexOf(`.type`)-1] :
    newSettingsMenu.prototype.draw.toString()[newSettingsMenu.prototype.draw.toString().indexOf(`.type`)-1] + newSettingsMenu.prototype.draw.toString()[newSettingsMenu.prototype.draw.toString().search(`.type`)-2]
}

// Search string parameters
const searchParams = {
    clickMenu: {
        screensReplace: `settings.menu.click();`,
        quickPlayReplace: clickMenu.screens.toString().slice(clickMenu.screens.toString().indexOf(`.lvl.scrollNewLock`)-strParamsLength.menu, clickMenu.screens.toString().indexOf('lvl.searchSent=!1}})')+'lvl.searchSent=!1}})'.length)
    },
    newSettingsMenu: {
        replace: NSMReplace,
        y: NSMReplace[NSMReplace.indexOf('var')+4],
        P: NSMReplace.slice(NSMReplace.indexOf('var'))[NSMReplace.slice(NSMReplace.indexOf('var')).indexOf(',')+1]
    },
    musicManager: {
        field: {
            draw: {
                showURReplace: musicManager.field.draw.toString().slice(musicManager.field.draw.toString().indexOf("settings.showUR"), musicManager.field.draw.toString().indexOf(`width/1024,height/64)`)+`width/1024,height/64)`.length)
            }
        }
    }
}
strParams.defaultURBarReplace = searchParams.musicManager.field.draw.showURReplace.slice(searchParams.musicManager.field.draw.showURReplace.indexOf("/5)),"), searchParams.musicManager.field.draw.showURReplace.indexOf("/64)")+4);

// Set input elements for map and custom theme import
const body = document.body;
const lvlImport = document.createElement('input');
lvlImport.type = "file";
lvlImport.id = "lvlImportAction";
lvlImport.accept = ".pls";
lvlImport.multiple = "true";
lvlImport.style = "display:none;";
body.appendChild(lvlImport);
const customThemeImport = document.createElement('input');
customThemeImport.type = "file";
customThemeImport.id = "customThemeImportAction";
customThemeImport.accept = ".pls";
customThemeImport.multiple = "false";
customThemeImport.style = "display:none;";
body.appendChild(customThemeImport);
const skinImport = document.createElement('input');
skinImport.type = "file";
skinImport.id = "skinImportAction";
skinImport.accept = ".psk";
skinImport.multiple = "true";
skinImport.style = "display:none;";
body.appendChild(skinImport);

// Load JSZip
const JSZipScript = document.createElement('script');
JSZipScript.src = game.pulseHaxLogo.replace("assets/icon.ico", "jszip.min.js");
(document.head || document.documentElement).appendChild(JSZipScript);

// Fallback theme
const defaultTheme = {
    main: makeColorFormat(RGBToHSB(35, 50, 60, 255)),
    text: makeColorFormat(RGBToHSB(255, 255, 255, 255)),
    overlayShade: makeColorFormat(RGBToHSB(32, 45, 54, 255)),
    shade: makeColorFormat(RGBToHSB(20, 35, 45, 255)),
    buttonDown: makeColorFormat(RGBToHSB(240, 240, 240, 255)),
    buttonUp: makeColorFormat(RGBToHSB(255, 255, 255, 255)),
    buttonText: makeColorFormat(RGBToHSB(0, 0, 0, 255)),
    textDown: makeColorFormat(RGBToHSB(200, 200, 200, 255)),
    select: makeColorFormat(RGBToHSB(60, 50, 35, 255)),
    modText: makeColorFormat(RGBToHSB(255, 175, 0, 255)),
    scrollbar: makeColorFormat(RGBToHSB(255, 255, 255, 255)),
    checkmark: makeColorFormat(RGBToHSB(0, 175, 255, 255)),
    dropdown: makeColorFormat(RGBToHSB(225, 225, 225, 255)),
    lightTheme: false
};
const defaultThemeBuffer = JSON.stringify(defaultTheme);

// Fetch PulseHax's local storage values then set them in the PulseHax object
function fetchLocalStorage(item) {
    if(item==="settings"){
        if(JSON.parse(localStorage.getItem("pulseHaxSettings")) === null){return {
            additionalThemes: false,
            changeTab: true,
            customTheme: false,
            customThemeName: "",
            sfxVolume: 50,
            skipIntro: false,
            welcomeText: "",
            welcomeWave: false
        }}
        let settings = {};
        const settingSel = {
        bool: ["welcomeWave", "skipIntro", "additionalThemes", "changeTab", "customTheme"],
        str: ["welcomeText", "customThemeName"],
        num: ["preferredFS"],
        slider: ["sfxVolume"]};
        const defaultValues = [false, "", 0, 50]
        const types = ["bool", "str", "num", "slider"];
        const phStorage = JSON.parse(localStorage.getItem("pulseHaxSettings"))
        for(let type in types) {
            for(let setting in settingSel[types[type]]) {
                settings[settingSel[types[type]][setting]] = phStorage[settingSel[types[type]][setting]] === undefined ? defaultValues[type] : phStorage[settingSel[types[type]][setting]]
            }
        }; return settings
    } else if(item==="customTheme") {
        return JSON.parse(localStorage.getItem("pulseHaxCustomTheme")) || defaultTheme
    } else if(item==="colorBank") {
        return JSON.parse(localStorage.getItem("pulseHaxColorBank")) || {
            cb1: makeColorFormat([0, 0, 0]),
            cb2: makeColorFormat([0, 0, 0]),
            cb3: makeColorFormat([0, 0, 0]),
            cb4: makeColorFormat([0, 0, 0]),
            cb5: makeColorFormat([0, 0, 0]),
            cb6: makeColorFormat([0, 0, 0])
        }                                                                                   
    } else if(item==="skin") {
        return JSON.parse(localStorage.getItem("pulseHaxSkin")) || {
            skinSelect: 'default',
            currentSkin: {
                showReplayHeader: true,
                customUR: false,
                URPos: "top",
                customScore: "none"
            },
            skins: {
                default: {
                    name: "Default",
                    config: {
                        showReplayHeader: true,
                        customUR: false,
                        URPos: "top",
                        customScore: "none"
                    }
                }
            }
        }
    } else if(item==="startupWarning") {
        return JSON.parse(localStorage.getItem("startupWarning")) ?? true
    } return console.error("Invalid Input")
};
const pulseHax = {
    settings: fetchLocalStorage("settings"),
    customTheme: fetchLocalStorage("customTheme"),
    editor: {
        noteType: "any",
        chordType: "any",
        snapDenominator: 0,
        customSnap: 4,
        playbackRate: 1,
        beatBuffer: null,
        colorBankSel: 'cb1'
    },
    colorBank: fetchLocalStorage("colorBank"),
    skin: fetchLocalStorage("skin"),
    startupWarning: fetchLocalStorage("startupWarning"),
    dropdownClosed: false,
    isObfuscated: false,
    rankedSel: null
};

// Skin load
themeNames = {}
for(i in pulseHax.skin.skins) {
    themeNames["pulseHax_skin_" + i] = pulseHax.skin.skins[i].name
}
langs[langSel] = {...langs[langSel], ...themeNames}
let skinOptionBuffer = []
Object.keys(langs[langSel]).filter((e) => {return e.includes("pulseHax_skin")}).forEach((e) => {skinOptionBuffer.push(e.slice("pulseHax_skin_".length))})
pulseHax.skinsStartup = {
    skinLabels: Object.keys(langs[langSel]).filter((e) => {return e.includes("pulseHax_skin")}),
    skinOptions: skinOptionBuffer
}

function openWarning() {
    console.log(pulseHax.startupWarning)
    if(!pulseHax.startupWarning) { return; }
    open("https://github.com/ufodynasty/PulseHax/wiki/Ban-Warning");
    localStorage.setItem("startupWarning", "false")
}

// Set language elements for PulseHax
pulseHax.langItems = {
    pulseHax_title: "PulseHax",
    ERR_noSelect: "No Notes Selected!",
    ERR_multiSelect: "Too Many Notes Selected!",
    ERR_noBuffer: "No Notes Buffered!",

    game_customScore: "Custom Score: `1`",

    edit_hint_keybinds_array: ["I'm Too Lazy To Do Something About This", "No Keybinds For You!!!!!!", "", "", "Loser"],

    theme_CUSTOM: pulseHax.settings.customThemeName === "" ? "Custom Theme" : pulseHax.settings.customThemeName,
    theme_gufo: "Gufo's theme",
    theme_floopy: "Floopy's theme",
    theme_shia: "Shia's theme",
    theme_lilyyy: "Lilyyy's theme",
    theme_axye: "Axye's theme",

    settings_header_extras: "Extras",
    settings_header_skin: "Skin",
    settings_header_customTheme: "Custom Theme",
    settings_header_options: "Options",

    settings_welcomeWave: "Welcome Wave",
    settings_welcomeWave_sub: `Toggles whether or not "${pulseHax.settings.welcomeText === "" ? "welcome" : pulseHax.settings.welcomeText} o/" shows up upon opening the game`,
    settings_welcomeText: "Startup Text",
    settings_welcomeText_sub: `Sets a custom welcome message to show up on startup. Leave blank to show "welcome"`,
    settings_skipIntro: "Skip Intro",
    settings_skipIntro_sub: "Skips long empty sections at the start of maps",
    settings_additionalThemes: "Additional Themes",
    settings_additionalThemes_sub: `Adds extra themes to the "Theme" dropdown in Universal Settings (restart to apply changes)`,
    settings_preferredFS: "FS Preference",
    settings_preferredFS_sub: "Automatically tries to fine-tune the Foresight mod so it matches your preference (Set to 0 to disable)",
    settings_changeTab: "Change Tab Name and Icon",
    settings_changeTab_sub: "Changes the tab name and icon from Pulsus to PulseHax (restart to apply)",
    settings_sfxVolume: "SFX Volume",
    settings_sfxVolume_sub: "Sets the volume of the PulseHax sound effects (such as quick retry, scroll and quick load)",
    settings_enableCustomTheme: "Enable Custom Theme",
    settings_enableCustomTheme_sub: "Enables a fully customizable theme under PulseHax>Custom Theme",

    settings_skinSelect: "Skin",
    settings_skinSelect_sub: "Selects skin",
    settings_skin_showReplayHeader: "Show Replay Header",
    settings_skin_showReplayHeader_sub: "Toggles the grey bar thing at the bottom of the screen when using AT or a startpos",
    settings_skin_customUR: "Custom UR",
    settings_skin_customUR_sub: "Toggles the PulseHax UR",
    settings_skin_URPos: "UR Position",
    settings_skin_URPos_sub: "Sets the position of the UR",
    settings_skin_URPos_top: "Top",
    settings_skin_URPos_bottom: "Bottom",
    settings_skin_customScore: "Custom Score",
    settings_skin_customScore_sub: "Applies a custom scoring system to the upper right section of the playfield",
    settings_skin_customScore_none: "None",
    settings_skin_customScore_PWC: "Floopy's PWC Scoring",

    settings_customTheme_main: "Main",
    settings_customTheme_main_sub: "Sets the color of the main element",
    settings_customTheme_text: "Text",
    settings_customTheme_text_sub: "Sets the color of the text element",
    settings_customTheme_overlayShade: "Overlay Shade",
    settings_customTheme_overlayShade_sub: "Sets color of the overlayShade element",
    settings_customTheme_shade: "Shade",
    settings_customTheme_shade_sub: "Sets the color of the shade element",
    settings_customTheme_buttonDown: "Button Down",
    settings_customTheme_buttonDown_sub: "Sets the color of the buttonDown element",
    settings_customTheme_buttonUp: "Button Up",
    settings_customTheme_buttonUp_sub: "Sets the color of the buttonUp element",
    settings_customTheme_buttonText: "Button Text",
    settings_customTheme_buttonText_sub: "Sets the color of the buttonText element",
    settings_customTheme_textDown: "Text Down",
    settings_customTheme_textDown_sub: "Sets the color of the textDown element",
    settings_customTheme_select: "Select",
    settings_customTheme_select_sub: "Sets the color of the select element",
    settings_customTheme_modText: "Mod Text",
    settings_customTheme_modText_sub: "Sets the color of the modText element",
    settings_customTheme_scrollbar: "Scrollbar",
    settings_customTheme_scrollbar_sub: "Sets the color of the scrollbar element",
    settings_customTheme_checkmark: "Checkmark",
    settings_customTheme_checkmark_sub: "Sets the color of the checkmark element",
    settings_customTheme_dropdown: "Dropdown",
    settings_customTheme_dropdown_sub: "Sets the color of the dropdown element",
    settings_customTheme_lightTheme: "Light Mode",
    settings_customTheme_lightTheme_sub: "Toggles light mode (Makes some buttons black or white depending on the mode, like refresh)",
    settings_customTheme_reset: "Reset Custom Theme",
    settings_customTheme_reset_sub: "Resets the colors of the custom theme to default",
    settings_customTheme_applyChanges: "Apply Changes",
    settings_customTheme_applyChanges_sub: "Applies the colors above to the \"Custom Theme\" option in Universal>Theme",
    settings_customTheme_name: "Custom Theme Name",
    settings_customTheme_name_sub: "Sets a custom name for the \"Custom Theme\" setting in Universal>Themes",
    settings_customTheme_export: "Export Custom Theme",
    settings_customTheme_export_sub: "Exports your Custom Theme into a .pls file",
    settings_customTheme_import: "Import Custom Theme",
    settings_customTheme_import_sub: "Takes a .pls theme file and applies it to your custom theme",

    submission_on: "Turned score submission on!",
    submission_off: "Turned score submission off!",

    edit_edit: "Edit",
    edit_edit_customSnap: "Custom Snap Denominator",
    edit_edit_customSnap_sub: "Sets the timeline snap to 1 / (your input)",
    edit_edit_customPlaybackRate: "Playback Rate",
    edit_edit_customPlaybackRate_sub: "Sets the song playback rate",
    edit_selectionManip: "Selection",
    edit_selectionManip_createPracticeDiff: "Create Practice Diff",
    edit_selectionManip_createPracticeDiff_sub: "Trims the map to only have the selected notes",
    edit_buffers: "Buffers",
    edit_buffers_bufferSelectedBeats: "Buffer Selected Beats",
    edit_buffers_bufferSelectedBeats_sub: "Copies the selected notes globally so you can paste it in other maps",
    edit_buffers_pasteBufferedBeats: "Paste Buffered Beats",
    edit_buffers_pasteBufferedBeats_sub: "Pastes the globally copied notes in",
    
    edit_colorBank: "Color Bank",
    edit_colorBank_1: "Color Bank 1",
    edit_colorBank_1_sub: "Changes the value for the first color bank color",
    edit_colorBank_2: "Color Bank 2",
    edit_colorBank_2_sub: "Changes the value for the second color bank color",
    edit_colorBank_3: "Color Bank 3",
    edit_colorBank_3_sub: "Changes the value for the third color bank color",
    edit_colorBank_4: "Color Bank 4",
    edit_colorBank_4_sub: "Changes the value for the fourth color bank color",
    edit_colorBank_5: "Color Bank 5",
    edit_colorBank_5_sub: "Changes the value for the fifth color bank color",
    edit_colorBank_6: "Color Bank 6",
    edit_colorBank_6_sub: "Changes the value for the sixth color bank color",
    edit_colorBank_sel: "Color Bank",
    edit_colorBank_sel_sub: "Sets the color bank to apply changes to/from the editor",
    edit_colorBank_fetchCurrent: "Fetch Current Color",
    edit_colorBank_fetchCurrent_sub: "Applies the note color currently being used to the selected color bank",
    edit_colorBank_setCurrent: "Set Current Color",
    edit_colorBank_setCurrent_sub: "Applies the selected color bank's color to the note color",
    edit_colorBank_fetchSelected: "Fetch Selected Color",
    edit_colorBank_fetchSelected_sub: "Applies the selected note's color to the selected color bank",
    edit_colorBank_setSelected: "Set Selected Color",
    edit_colorBank_setSelected_sub: "Applies the selected color bank's color to the selected note(s)",

    edit_select_item_selectAll: "Select All",
    edit_select_item_selectAll_sub: "Selects all notes in the map (using the above filters)",
    edit_select_noteType: "Note Type",
    edit_select_noteType_sub: "Filters for beats or holds in Quick Select (Default is all)",
    edit_select_noteType_any: "Any",
    edit_select_noteType_beat: "Beat",
    edit_select_noteType_hold: "Hold",
    edit_select_chordType: "Chord Type",
    edit_select_chordType_sub: "Filters for singles, doubles and triples+ in Quick Select (Default is all) SNAP OVERRIDES THIS",
    edit_select_chordType_any: "Any",
    edit_select_chordType_singles: "Singles",
    edit_select_chordType_doubles: "Doubles",
    edit_select_chordType_triplesFwd: "Triples+",
    edit_select_snapDenominator: "Snap Denominator",
    edit_select_snapDenominator_sub: "Sets a filter for a specific snap to look for (i.e '4' looks for 1/4s, leave 0 for all)",
}; 
langs[langSel] = {...langs[langSel], ...pulseHax.langItems};
// Add the PulseHax menu to the nav menu
menu.pulseHax = pulseHax;
menu.nav.push(['pulseHax_title', 'pulseHax', 'pulseHax']);

// Refresh skin
function refreshSkin() {
    pulseHax.skin.currentSkin.showReplayHeader = pulseHax.skin.skins[pulseHax.skin.skinSelect].config.showReplayHeader;
    pulseHax.skin.currentSkin.customUR = pulseHax.skin.skins[pulseHax.skin.skinSelect].config.customUR;
    pulseHax.skin.currentSkin.URPos = pulseHax.skin.skins[pulseHax.skin.skinSelect].config.URPos;
    menu.pulseHax.menu.pages[1].items.forEach((e) => {try{e.event()} catch(e){}})
}

// Defining a bunch of color related conversion functions to use for custom themes
function HSBtoRGB(h, s, b) {
    h *= 360/255;
    s *= 100/255;
    b *= 100/255;
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [255 * f(5) , 255 * f(3) , 255 * f(1) ];
};
function RGBToHSB(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b),
        n = v - Math.min(r, g, b);
    const h =
        n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
    return [60 * (h < 0 ? h + 6 : h) * 255/360, v && (n / v) * 100 * 255/100, v * 100 * 255/100].map((x) => Math.round(x));
};
function makeColorFormat(hsba=[0, 0, 0, 0]) {
    return {
        color: hsba[0],
        saturation: hsba[1],
        brightness: hsba[2],
        alpha: hsba[3] === undefined ? 255 : hsba[3]
        }
};
function revertColorFormat(obj) {
    return [obj.color, obj.saturation, obj.brightness, obj.alpha === undefined ? 255 : obj.alpha]
};

// Load and save custom themes
function loadCustomTheme(colorSel="all", obj=pulseHax.customTheme) {
    if(colorSel !== "all") {
        return color(HSBtoRGB(...revertColorFormat(obj[colorSel])))
    };
    return {
        main: color(HSBtoRGB(...revertColorFormat(obj.main))),
        text: color(HSBtoRGB(...revertColorFormat(obj.text))),
        overlayShade: color(HSBtoRGB(...revertColorFormat(obj.overlayShade))),
        shade: color(HSBtoRGB(...revertColorFormat(obj.shade))),
        buttonDown: color(HSBtoRGB(...revertColorFormat(obj.buttonDown))),
        buttonUp: color(HSBtoRGB(...revertColorFormat(obj.buttonUp))),
        buttonText: color(HSBtoRGB(...revertColorFormat(obj.buttonText))),
        textDown: color(HSBtoRGB(...revertColorFormat(obj.textDown))),
        select: color(HSBtoRGB(...revertColorFormat(obj.select))),
        modText: color(HSBtoRGB(...revertColorFormat(obj.modText))),
        scrollbar: color(HSBtoRGB(...revertColorFormat(obj.scrollbar))),
        checkmark: color(HSBtoRGB(...revertColorFormat(obj.checkmark))),
        dropdown: color(HSBtoRGB(...revertColorFormat(obj.dropdown))),
        lightTheme: obj.lightTheme
    };
};
function saveCustomTheme(obj) {
    return pulseHax.customTheme = {
        main: makeColorFormat(RGBToHSB(...themes[10].main.levels)),
        text: makeColorFormat(RGBToHSB(...themes[10].text.levels)),
        overlayShade: makeColorFormat(RGBToHSB(...themes[10].overlayShade.levels)),
        shade: makeColorFormat(RGBToHSB(...themes[10].shade.levels)),
        buttonDown: makeColorFormat(RGBToHSB(...themes[10].buttonDown.levels)),
        buttonUp: makeColorFormat(RGBToHSB(...themes[10].buttonUp.levels)),
        buttonText: makeColorFormat(RGBToHSB(...themes[10].buttonText.levels)),
        textDown: makeColorFormat(RGBToHSB(...themes[10].textDown.levels)),
        select: makeColorFormat(RGBToHSB(...themes[10].select.levels)),
        modText: makeColorFormat(RGBToHSB(...themes[10].modText.levels)),
        scrollbar: makeColorFormat(RGBToHSB(...themes[10].scrollbar.levels)),
        checkmark: makeColorFormat(RGBToHSB(...themes[10].checkmark.levels)),
        dropdown: makeColorFormat(RGBToHSB(...themes[10].dropdown.levels)),
        lightTheme: themes[10].lightTheme,
    }
};
function getColorAfterPrompt() {
    return {
        color: prmpting.hue,
        saturation: prmpting.saturation,
        brightness: prmpting.brightness
    }
}

// Quick play bind disable for when the search box is brought up and enable for when the search box is not
let quickPlayEnabled = true;
function toggleQuickPlay(bool) {
    quickPlayEnabled = bool;
}

// Score submission toggle
const resultsScreenE = musicManager.resultsScreen.toString()[musicManager.resultsScreen.toString().indexOf('var')+4]
eval(`musicManager.resultsScreen = `+ musicManager.resultsScreen.toString().replace(musicManager.resultsScreen.toString().slice(musicManager.resultsScreen.toString().indexOf('var'), musicManager.resultsScreen.toString().indexOf('endPos')+6), `var ${resultsScreenE}=false`))

// Skip intro
eval(`musicManager.musicTime = function() {
    var e;
    1 === soundManager.getSoundById("menuMusic").playState && (soundManager.stop("menuMusic"), soundManager.setVolume(game.song, menu.settings.musicVolume)), !1 === game.edit && (!1 === game.preLevelStart && (game.preLevelStart = millis()), 5e3 <= millis() - game.preLevelStart + (game.songOffset + game.mods.offset + menu.settings.offset) && !game.songPlaying && !game.paused ? (lvlHowl[game.song].rate(game.mods.bpm), lvlHowl[game.song].volume(menu.settings.musicVolume / 100), e = lvlHowl[game.song].play(), lvlHowl[game.song].seek((game.songOffset + game.mods.offset + menu.settings.offset) / 1e3 + ((game.skipIntro ? game.beat[0]?.[1] || 0 : 0) * game.mods.bpm / (game.bpm / 60)) - 5, e), game.songPlaying = !0) : game.paused && (lvlHowl[game.song].pause(), game.songPlaying = !1)), game.edit || !1 !== game.songEnded || lvlHowl[game.song].on("end", function() {
        game.songEnded = [millis(), lvlHowl[game.song].duration]
    }), !1 !== game.edit || game.paused || 1 !== game.disMode || (!1 !== game.songPlaying || !1 !== toLoad && "hidden" !== toLoad || !1 === game.preLevelStart ? (-1e3 < ((e = ((!1 === game.songEnded ? lvlHowl[game.song].seek() : lvlHowl[game.song].duration() + (!1 === game.songEnded ? 0 : (millis() - game.songEnded[0]) / 1e3 * game.mods.bpm)) - (game.songOffset + game.mods.offset + menu.settings.offset) / 1e3) * (game.bpm / 60) / game.mods.bpm) - game.time) * game.mods.bpm / (game.bpm / 60) || "set" === game.time) && (game.time = e) : game.time = (millis() - game.preLevelStart - 5e3) / 1e3 * (game.bpm / 60) / game.mods.bpm)
}`)

// Fix the damn toggle quick play not working on cancel
eval(`${strParams.promptRes} = ` + promptRes.toString().slice(0, -1) + `
    toggleQuickPlay(true);
}
`)
// PULSUS IS CRINGE
function refreshColorBank(bank) {
    bankNum = parseInt(bank.slice(2))
    game.extrasNSM.pages[3].items[bankNum-1].hue[0] = pulseHax.colorBank[bank];
    game.extrasNSM.pages[3].items[bankNum-1].saturation[0] = pulseHax.colorBank[bank];
    game.extrasNSM.pages[3].items[bankNum-1].brightness[0] = pulseHax.colorBank[bank];
}

// Custom selection function
function customSelect(e) {
    if(game.selectedBeats.length === 0 && (e === "after" || e === "before")) {
        popupMessage({
            type: "error",
            message: "ERR_noSelect"
        })
        return;
    }
    game.beat.sort((a, b) => a[1] - b[1])
    let lb = e === "before" || e === "all" ? 0 : game.selectedBeats[0]
    let ub = e === "after" || e === "all" ? game.beat.length : game.selectedBeats[game.selectedBeats.length - 1]+1
    let selectedBuffer = [];
    game.selectedBeats = [];
    game.timelineMode = "select";
    for(let i=lb; i<ub; i++) {
        selectedBuffer.push(i);
    }
    const bValue = pulseHax.editor.noteType;
    const chValue = pulseHax.editor.chordType;
    const snapValue = pulseHax.editor.snapDenominator !== 0 ? 1/pulseHax.editor.snapDenominator : false;
    for (let i of selectedBuffer){
        if(bValue === "beat" ? !game.beat[i][5] : bValue === "hold" ? game.beat[i][5] : true){
            if(snapValue !== false){
                if((i-1 >= 0 && (Math.abs((game.beat[i][1]-game.beat[i-1][1])*game.beat[i][9]/120-snapValue) < 1e-10 || Math.abs((game.beat[i][1]-game.beat[i-1][1])*game.beat[i-1][9]/120-snapValue) < 1e-10)) || (i+1 < game.beat.length && (Math.abs((game.beat[i+1][1]-game.beat[i][1])*game.beat[i][9]/120-snapValue) < 1e-10 || Math.abs((game.beat[i+1][1]-game.beat[i][1])*game.beat[i+1][9]/120-snapValue) < 1e-10))) {
                    game.selectedBeats.push(i);
                    let j = 1;
                    while(i-j >= 0 && game.beat[i][1] == game.beat[i-j][1]) {
                        game.selectedBeats.push(i-j);
                        j++;
                    }
            while(i+1 < game.beat.length && game.beat[i][1] == game.beat[i+1][1]) {
                game.selectedBeats.push(i+1);
                i++;
            }
                }
            } else {
        if(chValue == "1" || chValue == "2" ? i+1 >= game.beat.length || game.beat[i][1] != game.beat[i+1][1] : chValue == "3+" ? i+1 < game.beat.length && game.beat[i][1] == game.beat[i+1][1] : true) {
            if(chValue == "1" ? i-1 < 0 || game.beat[i][1] != game.beat[i-1][1] : chValue == "2" ? i-1 >= 0 && game.beat[i][1] == game.beat[i-1][1] && (i-2 < 0 || game.beat[i][1] != game.beat[i-2][1]) : chValue == "3+" ? i-1 >= 0 && game.beat[i][1] == game.beat[i-1][1] : true){
                game.selectedBeats.push(i);
                chValue == "2" || chValue == "3+" ? game.selectedBeats.push(i-1) : ""
                chValue == "3+" ? game.selectedBeats.push(i+1) : ""
            }
        }
            }
        }
    }
    game.selectedBeats = [...new Set(game.selectedBeats)];
}
function pulseHaxCustomScore(system) {
    if(system === "none") {
        return {
            none: true
        };
    }
    else if(system === "PWC") {
        let hitStatsSum = game.hitStats.reduce((partialSum, a) => partialSum + a, 0);
        if(hitStatsSum === 0){
            return {
                val: 100,
                unit: "%",
                fix: 3
            }
        }
        let score = 
        (100 * game.hitStats[0] +
            95 * game.hitStats[1] +
            50 * game.hitStats[2] +
        20 * game.hitStats[3])/hitStatsSum;
        return {
            val: Math.round(1000 * (score * (1 - (0.15 * game.hitStats[4]) / hitStatsSum)))/1000,
            unit: "%",
            fix: 3
        };
    }
};
// Custom scoring systems and obfuscate
let customScore = 0;
let customScoreDis = 0;
const fieldSearch = musicManager.field.draw.toString().slice(musicManager.field.draw.toString().lastIndexOf('scoreDis')-11, musicManager.field.draw.toString().indexOf('height/32,height/32)),')+'height/32,height/32)),'.length);
const resultsSearch = musicManager.resultsScreen.toString().slice(musicManager.resultsScreen.toString().indexOf('textSize(i)'), musicManager.resultsScreen.toString().indexOf(`*3)`)+3);

// Add The UI
eval(`musicManager.field.draw = ` + musicManager.field.draw.toString().replace(`{`, `{let customScoreFunc = pulseHax?.skin?.currentSkin?.customScore || "none"; let resultFunction;`))
eval(`musicManager.resultsScreen = ` + musicManager.resultsScreen.toString().replace(`{`, `{let customScoreFunc = pulseHax?.skin?.currentSkin?.customScore || "none"; let resultFunction;`))
eval(`musicManager.field.draw = `+musicManager.field.draw.toString().replace(fieldSearch, fieldSearch+ `
!pulseHaxCustomScore(customScoreFunc)?.none && (
    resultFunction = pulseHaxCustomScore(customScoreFunc),
    textAlign(RIGHT, TOP),
    fill(150, 255, 255),
    customScore = resultFunction.val,
    customScoreDis += ease(customScore, customScoreDis, .35),
    text(customScoreDis.toFixed(resultFunction.fix)+resultFunction.unit, width - height / 32, height / 32 * 2.5)
    ),`)
);
eval(`musicManager.resultsScreen = `+ musicManager.resultsScreen.toString().replace(resultsSearch, `textSize(i);
let offset = false;
!pulseHaxCustomScore(customScoreFunc)?.none && (
    resultFunction = pulseHaxCustomScore(customScoreFunc),
    fill(150, 255, 255),
    text(lang("game_customScore", langSel, resultFunction.val.toFixed(resultFunction.fix)+resultFunction.unit), width / 2, 0),
    fill(255),
    offset = true
    ),
text(lang("game_score", langSel, t), width / 2, offset ? 1.25 * i : 0),
text(lang("game_accuracy", langSel, game.acc.toFixed(3)), width / 2, 1.25 * i * (offset ? 2 : 1)),
text(lang("game_maxCombo", langSel, game.comboMax), width / 2, 1.25 * i * (offset ? 3 : 2)),
v = ${resultsScreenE} ? game.submittedScore ? lang("game_pulse", langSel, game.submittedScore.performance.toFixed(2)) : lang("loading", langSel) : "";
text(v, width / 2, 1.25 * i * (offset ? 4 : 3))` ));

// Load additional themes
themes.push({
    main: color(35, 50, 60),
    text: color(255, 255, 255),
    overlayShade: color(32, 45, 54),
    shade: color(20, 35, 45),
    buttonDown: color(240, 240, 240),
    buttonUp: color(255, 255, 255),
    buttonText: color(0, 0, 0),
    textDown: color(200, 200, 200),
    select: color(60, 50, 35),
    modText: color(255, 175, 0),
    scrollbar: color(255, 255, 255),
    lightTheme: !1,
    checkmark: color(0, 175, 255),
    dropdown: color(225, 225, 225)
    },{
    main: color(0, 0, 0),
    text: color(64, 255, 64),
    overlayShade: color(16, 16, 16),
    shade: color(0, 0, 0),
    buttonDown: color(32, 32, 32),
    buttonUp: color(48, 48, 48),
    buttonText: color(64, 255, 64),
    textDown: color(32, 128, 32),
    select: color(30, 30, 30),
    modText: color(75, 175, 255),
    scrollbar: color(75, 175, 255),
    lightTheme: 1,
    checkmark: color(75, 175, 255),
    dropdown: color(24, 24, 24)
    },{
    main: color(20, 20, 20),
    text: color(255, 175, 175),
    overlayShade: color(10, 10, 10),
    shade: color(20, 20, 20),
    buttonDown: color(50, 50, 50),
    buttonUp: color(75, 75, 75),
    buttonText: color(255, 200, 200),
    textDown: color(170, 100, 100),
    select: color(75, 75, 75),
    modText: color(255, 150, 100),
    scrollbar: color(225, 225, 225),
    lightTheme: 0,
    checkmark: color(225, 225, 225),
    dropdown: color(50, 50, 50)
    },{
    main: color(10, 10, 10),
    text: color(255, 255, 255),
    overlayShade: color(10, 10, 10),
    shade: color(20, 20, 20),
    buttonDown: color(50, 50, 50),
    buttonUp: color(75, 75, 75),
    buttonText: color(255, 255, 255),
    textDown: color(150, 150, 150),
    select: color(75, 75, 75),
    modText: color(180, 100, 255),
    scrollbar: color(180, 100, 255),
    lightTheme: 1,
    checkmark: color(180, 100, 255),
    dropdown: color(180, 100, 255)
    },{
    main: color(238, 153, 255),
    text: color(255, 255, 255),
    overlayShade: color(204, 140, 217),
    shade: color(190, 130, 201),
    buttonDown: color(251, 299, 255),
    buttonUp: color(246, 204, 255),
    buttonText: color(143, 41, 163),
    textDown: color(246, 204, 255),
    select: color(219, 150, 233),
    modText: color(246, 204, 255),
    scrollbar: color(255, 255, 255),
    lightTheme: 1,
    checkmark: color(225, 77, 255),
    dropdown: color(234, 128, 255)
    },{
    main: color(31, 12, 21),
    text: color(244, 234, 179),
    overlayShade: color(83, 34, 42),
    shade: color(63, 24, 32),
    buttonDown: color(238, 134, 89),
    buttonUp: color(255, 213, 122),
    buttonText: color(31, 12, 21),
    textDown: color(225, 186, 132),
    select: color(143, 60, 45),
    modText: color(255, 51, 51),
    scrollbar: color(255, 213, 122),
    lightTheme: 1,
    checkmark: color(127, 41, 71),
    dropdown: color(226, 120, 75)
});

// Set replace search parameters for function refactoring
const sgdString = saveGameData.toString()

eval(`newSettingsMenu.prototype.draw = ` + (((((((newSettingsMenu.prototype.draw.toString().replace(
    searchParams.newSettingsMenu.replace, searchParams.newSettingsMenu.replace + searchParams.newSettingsMenu.replace))
    .replace(`else if("color"===${strParams.NSMtype}.type)`, `else if("settingsMenuColor" === ${strParams.NSMtype}.type)`))
    .replace(`rect(0,0,${searchParams.newSettingsMenu.y},${searchParams.newSettingsMenu.P},${searchParams.newSettingsMenu.P})`, `rect(0, -${searchParams.newSettingsMenu.P}/2, ${searchParams.newSettingsMenu.y}, ${searchParams.newSettingsMenu.P}*2, ${searchParams.newSettingsMenu.P})`))
    .replace(`hue:e.hue,`, `hue:e.hue, after: e.after,`))
    .replace(`open}})`, `open; if(!pulseHax.dropdownClosed) {
        let interval = setInterval(() => {
            if(e.animation.height === 0) {
                clearInterval(interval);
                e.after?.();
            }
        }, 500)
    }; console.log(pulseHax.dropdownClosed); pulseHax.dropdownClosed = false}})`))
    .replace(`${strParams.NSMtype}.animation.height=0,`, `(${strParams.NSMtype}.animation.height = 0, pulseHax.dropdownClosed = false),`))
    .replace(newSettingsMenu.prototype.draw.toString().slice(newSettingsMenu.prototype.draw.toString().lastIndexOf(`_(!`), newSettingsMenu.prototype.draw.toString().lastIndexOf(`_(!`)+5), `${newSettingsMenu.prototype.draw.toString().slice(newSettingsMenu.prototype.draw.toString().lastIndexOf(`_(!`), newSettingsMenu.prototype.draw.toString().lastIndexOf(`_(!`)+5)}, e.phBool ? e.event(e) : ''`))
);
    
const clickMenuBuffer = clickMenu.screens;
eval(`clickMenu.screens = `+ (((clickMenu.screens.toString().replace(searchParams.clickMenu.screensReplace, searchParams.clickMenu.screensReplace + `
else if ("pulseHax" === menu.screen)
    menu.pulseHax.menu.click();`))
    .replace(searchParams.clickMenu.quickPlayReplace, `
    menu.lvl.scrollNewLock || (hitbox("rcorner", height / 24 * 5, height / 16, width / 3 - width / 48 - height / 24 * 5, height / 24) && (prmpt({
        var: [menu.lvl, "search"],
        title: "menu_lvl_search",
        type: "string",
        allowEmpty: !0,
        after: function() {
            levels.search = [],
            menu.lvl.sel = !1,
            menu.lvl.searchSent = !1,
            toggleQuickPlay(true)
        }
    }), toggleQuickPlay(false))
    `)
    .replace(`.editorMode){`, `.editorMode){
        if (hitbox("rcorner", 0, height / 16 * 8/3, width / 4, height / 16 * 31/3)) {
            game.extrasNSM.click()
        }`)))
    .replace(`${clickMenu.name}.screens.logo(),`, `(clickMenu.screens.logo(),
    openWarning("https://github.com/ufodynasty/PulseHax/wiki/Ban-Warning")),
`));
clickMenu.screens.accountSignedIn = clickMenuBuffer.accountSignedIn;
clickMenu.screens.accountSignedOut = clickMenuBuffer.accountSignedOut;
clickMenu.screens.click = clickMenuBuffer.click;
clickMenu.screens.logo = clickMenuBuffer.logo;
clickMenu.screens.header = clickMenuBuffer.header;
clickMenu.screens.nav = clickMenuBuffer.nav;

nav.pulseHax = function() {
    menu.pulseHax.menu.draw({
        x: 0,
        y: height / 16,
        width: width,
        height: height - height / 16,
        stacked: !1,
        maxBarHeight: height / 16 / 1.23,
        buffer: (height - height / 16) / 64
    })
}

JSON.stringify(eval(`nav.pages = `+ nav.pages.toString().replace(`settings();break;`, `settings();break;
case "pulseHax":
    nav.pulseHax();
    break;`)))

eval(`saveGameData = function ${sgdString.slice(sgdString.search(/\(/),sgdString.search(/\){/) + 2)}
    var pulseHaxSettings = {
        additionalThemes: pulseHax.settings.additionalThemes,
        changeTab: pulseHax.settings.changeTab,
        customTheme: pulseHax.settings.customTheme,
        customThemeName: pulseHax.settings.customThemeName,
        preferredFS: pulseHax.settings.preferredFS,
        scoreSubmission: pulseHax.settings.scoreSubmission,
        sfxVolume: pulseHax.settings.sfxVolume,
        skipIntro: pulseHax.settings.skipIntro,
        themeSelLocal: pulseHax.settings.themeSelLocal,
        welcomeText: pulseHax.settings.welcomeText,
        welcomeWave: pulseHax.settings.welcomeWave
    };
    var pulseHaxCustomTheme = {
        main: pulseHax.customTheme.main,
        text: pulseHax.customTheme.text,
        overlayShade: pulseHax.customTheme.overlayShade,
        shade: pulseHax.customTheme.shade,
        buttonDown: pulseHax.customTheme.buttonDown,
        buttonUp: pulseHax.customTheme.buttonUp,
        buttonText: pulseHax.customTheme.buttonText,
        textDown: pulseHax.customTheme.textDown,
        select: pulseHax.customTheme.select,
        modText: pulseHax.customTheme.modText,
        scrollbar: pulseHax.customTheme.scrollbar,
        checkmark: pulseHax.customTheme.checkmark,
        dropdown: pulseHax.customTheme.dropdown,
        lightTheme: pulseHax.customTheme.lightTheme,
    };
    var pulseHaxSkin = {
        skinSelect: pulseHax.skin.skinSelect,
        skins: pulseHax.skin.skins,
        currentSkin: pulseHax.skin.currentSkin
    };
    var pulseHaxColorBank = pulseHax.colorBank;
    localStorage.setItem("pulseHaxSettings", JSON.stringify(pulseHaxSettings)),
    localStorage.setItem("pulseHaxCustomTheme", JSON.stringify(pulseHaxCustomTheme)),
    localStorage.setItem("pulseHaxColorBank", JSON.stringify(pulseHaxColorBank)),
    localStorage.setItem("pulseHaxSkin", JSON.stringify(pulseHaxSkin))
    ${sgdString.slice(sgdString.search(/\){/) + 2)}`)

eval(loadStartScreens.toString().replace('(){', `(){
    welcome.wave = pulseHax.settings.welcomeWave ? 1 : welcome.wave;
    langs[langSel].welcome = pulseHax.settings.welcomeText === "" ? lang("welcome", langSel) : pulseHax.settings.welcomeText;
`));

eval((loadLevel.toString().replace('("game","menu")', `("game","menu"),
lowLag.play("load", pulseHax.settings.sfxVolume/100),
pulseHax.rankedSel = newGrabLevelMeta(clevels[menu.lvl.sel], "id").ranked`))
    .replace(`{`, `{if(!game.edit && pulseHax.settings.preferredFS!==0){
        foresight = clevels[menu.lvl.sel]?.local ? (clevels[menu.lvl.sel].ar <= 0 ? 1 : clevels[menu.lvl.sel].ar) : newGrabLevelMeta(clevels[menu.lvl.sel], "id").ar <=0 ? 1 : newGrabLevelMeta(clevels[menu.lvl.sel], "id").ar;
        foresight = Math.round(pulseHax.settings.preferredFS / foresight * 100) / 100;
        if(foresight<.25) {foresight = .25}
        if(foresight>2) {foresight = 2}
        game.mods.foresight = foresight;
    };`))

// Editor extras menu
game.extrasNSM = new newSettingsMenu([{
    title: "edit_selectionManip",
    items: [{
        name: "edit_select_noteType",
        hint: "edit_select_noteType_sub",
        type: "dropdown",
        labels: ["edit_select_noteType_any", "edit_select_noteType_beat", "edit_select_noteType_hold"],
        options: ["any", "beat", "hold"],
        var: [pulseHax.editor, "noteType"]
    }, {
        name: "edit_select_chordType",
        hint: "edit_select_chordType_sub",
        type: "dropdown",
        labels: ["edit_select_chordType_any", "edit_select_chordType_singles", "edit_select_chordType_doubles", "edit_select_chordType_triplesFwd"],
        options: ["any", "1", "2", "3+"],
        var: [pulseHax.editor, "chordType"]
    }, {
        name: "edit_select_snapDenominator",
        hint: "edit_select_snapDenominator_sub",
        type: "number",
        min: 0,
        max: false,
        smallChange: 1,
        bigChange: 4,
        var: [pulseHax.editor, "snapDenominator"]
    }, {
        type: "button",
        name: "edit_select_item_selectAll",
        hint: "edit_select_item_selectAll_sub",
        event: () => customSelect("all")
    }, {
        type: "button",
        name: "edit_select_item_selectBefore",
        hint: "edit_select_item_selectBefore_sub",
        event: ()=>customSelect("before")
    }, {
        type: "button",
        name: "edit_select_item_selectAfter",
        hint: "edit_select_item_selectAfter_sub",
        event: ()=>customSelect("after")
    }, {
        name: "edit_selectionManip_createPracticeDiff",
        hint: "edit_selectionManip_createPracticeDiff_sub",
        type: "button",
        event: function() {
            if(game.selectedBeats.length === 0) {
                popupMessage({
                    type: "error",
                    message: "ERR_noSelect"
                });
                return;
            }
            game.songOffset = Math.round(game.songOffset + (game.beat[Math.min(...game.selectedBeats)][1] * 500))
            game.time = game.beat[Math.min(...game.selectedBeats)][1]
            game.beat = game.beat.slice(Math.min(...game.selectedBeats),Math.max(...game.selectedBeats)+1)
            game.selectedBeats = []
            for (beat of game.beat) {
                beat[1] -= game.time
            }
            for (section of game.sections) {
                section.time -= game.time
            }
            for (effect of game.effects) {
                effect.time -= game.time
            }
            game.time = 0
        }
    }]
}, {
    title: "edit_edit",
    items: [{
        name: "edit_edit_customSnap",
        hint: "edit_edit_customSnap_sub",
        type: "number",
        min: 0,
        max: false,
        smallChange: 1,
        bigChange: 4,
        var: [pulseHax.editor, "customSnap"],
        display: ()=>pulseHax.editor.customSnap,
        update: function() {
            if(pulseHax.editor.customSnap === 0) {pulseHax.editor.customSnap = 1}
            game.snap = 1/pulseHax.editor.customSnap;
        }
    }, {
        name: "edit_edit_customPlaybackRate",
        hint: "edit_edit_customPlaybackRate_sub",
        type: "number",
        min: 0,
        max: false,
        smallChange: .1,
        bigChange: .5,
        var: [pulseHax.editor, "customPlaybackRate"],
        display: ()=>pulseHax.editor.customPlaybackRate,
        update: function() {
            if(pulseHax.editor.customPlaybackRate === 0) {pulseHax.editor.customPlaybackRate = 1}
            game.playbackRate = pulseHax.editor.customPlaybackRate;
        }
    }]
}, {
    title: "edit_buffers",
    items: [{
        name: "edit_buffers_bufferSelectedBeats",
        hint: "edit_buffers_bufferSelectedBeats_sub",
        type: "button",
        event: function() {
            if(game.selectedBeats.length===0) {
                popupMessage({
                    type: "error",
                    message: "ERR_noSelect"
                });
                return;
            }
            pulseHax.editor.beatBuffer = game.selectedBeats.map((x) => game.beat[x])
        }
    }, {
        name: "edit_buffers_pasteBufferedBeats",
        hint: "edit_buffers_pasteBufferedBeats_sub",
        type: "button",
        event: function() {
            if(pulseHax.editor.beatBuffer === null) {
                popupMessage({
                    type: "error",
                    message: "ERR_noBuffer"
                });
                return;
            }
            JSON.parse(`${JSON.stringify(pulseHax.editor.beatBuffer).replace(/\\/g, '\\\\').replace(/\`/g, '\\\`')}`).forEach((beat) => {
                beat[1]+=game.time
                game.beat.push(beat);
                })
        }
    }]
}, {
    title: "edit_colorBank",
    items: [{
        type: "color",
        name: "edit_colorBank_1",
        hint: "edit_colorBank_1_sub",
        mode: HSB,
        var: [pulseHax.colorBank, "cb1"],
        hue: [pulseHax.colorBank.cb1, "color"],
        saturation: [pulseHax.colorBank.cb1, "saturation"],
        brightness: [pulseHax.colorBank.cb1, "brightness"],
        after: () => {
            pulseHax.colorBank.cb1 = getColorAfterPrompt();
        }
    }, {
        type: "color",
        name: "edit_colorBank_2",
        hint: "edit_colorBank_2_sub",
        mode: HSB,
        var: [pulseHax.colorBank, "cb2"],
        hue: [pulseHax.colorBank.cb2, "color"],
        saturation: [pulseHax.colorBank.cb2, "saturation"],
        brightness: [pulseHax.colorBank.cb2, "brightness"],
        after: () => {
            pulseHax.colorBank.cb2 = getColorAfterPrompt();
        }
    }, {
        type: "color",
        name: "edit_colorBank_3",
        hint: "edit_colorBank_3_sub",
        mode: HSB,
        var: [pulseHax.colorBank, "cb3"],
        hue: [pulseHax.colorBank.cb3, "color"],
        saturation: [pulseHax.colorBank.cb3, "saturation"],
        brightness: [pulseHax.colorBank.cb3, "brightness"],
        after: () => {
            pulseHax.colorBank.cb3 = getColorAfterPrompt();
        }
    }, {
        type: "color",
        name: "edit_colorBank_4",
        hint: "edit_colorBank_4_sub",
        mode: HSB,
        var: [pulseHax.colorBank, "cb4"],
        hue: [pulseHax.colorBank.cb4, "color"],
        saturation: [pulseHax.colorBank.cb4, "saturation"],
        brightness: [pulseHax.colorBank.cb4, "brightness"],
        after: () => {
            pulseHax.colorBank.cb4 = getColorAfterPrompt();
        }
    }, {
        type: "color",
        name: "edit_colorBank_5",
        hint: "edit_colorBank_5_sub",
        mode: HSB,
        var: [pulseHax.colorBank, "cb5"],
        hue: [pulseHax.colorBank.cb5, "color"],
        saturation: [pulseHax.colorBank.cb5, "saturation"],
        brightness: [pulseHax.colorBank.cb5, "brightness"],
        after: () => {
            pulseHax.colorBank.cb5 = getColorAfterPrompt();
        }
    }, {
        type: "color",
        name: "edit_colorBank_6",
        hint: "edit_colorBank_6_sub",
        mode: HSB,
        var: [pulseHax.colorBank, "cb6"],
        hue: [pulseHax.colorBank.cb6, "color"],
        saturation: [pulseHax.colorBank.cb6, "saturation"],
        brightness: [pulseHax.colorBank.cb6, "brightness"],
        after: () => {
            pulseHax.colorBank.cb6 = getColorAfterPrompt();
        }
    }, {
        name: "edit_colorBank_sel",
        hint: "edit_colorBank_sel_sub",
        type: "dropdown",
        labels: ["edit_colorBank_1", "edit_colorBank_2", "edit_colorBank_3", "edit_colorBank_4", "edit_colorBank_5", "edit_colorBank_6"],
        options: ['cb1', 'cb2', 'cb3', 'cb4', 'cb5', 'cb6'],
        var: [pulseHax.editor, "colorBankSel"]
    }, {
        name: "edit_colorBank_fetchCurrent",
        hint: "edit_colorBank_fetchCurrent_sub",
        type: "button",
        event: function() {
            pulseHax.colorBank[pulseHax.editor.colorBankSel] = makeColorFormat([game.beatColor, game.beatSaturation, game.beatBrightness])
            refreshColorBank(pulseHax.editor.colorBankSel);
        }
    }, {
        name: "edit_colorBank_setCurrent",
        hint: "edit_colorBank_setCurrent_sub",
        type: "button",
        event: function() {
            game.beatColor = pulseHax.colorBank[pulseHax.editor.colorBankSel].color;
            game.beatSaturation = pulseHax.colorBank[pulseHax.editor.colorBankSel].saturation;
            game.beatBrightness = pulseHax.colorBank[pulseHax.editor.colorBankSel].brightness;
        }
    }, {
        name: "edit_colorBank_fetchSelected",
        hint: "edit_colorBank_fetchSelected_sub",
        type: "button",
        event: function() {
            if(game.selectedBeats.length === 0) {
                popupMessage({
                    type: "error",
                    message: "ERR_noSelect"
                });
                return;
            } else if(game.selectedBeats.length > 1) {
                popupMessage({
                    type: "error",
                    message: "ERR_multiSelect"
                });
                return;
            }
            pulseHax.colorBank[pulseHax.editor.colorBankSel] = makeColorFormat([game.beat[game.selectedBeats[0]][11], game.beat[game.selectedBeats[0]][16], game.beat[game.selectedBeats[0]][17]]);
            refreshColorBank(pulseHax.editor.colorBankSel);
        }
    }, {
        name: "edit_colorBank_setSelected",
        hint: "edit_colorBank_setSelected_sub",
        type: "button",
        event: function() {
            if(game.selectedBeats.length === 0) {
                popupMessage({
                    type: "error",
                    message: "ERR_noSelect"
                });
                return;
            }
            for(i of game.selectedBeats) {
                game.beat[i][11] = pulseHax.colorBank[pulseHax.editor.colorBankSel].color;
                game.beat[i][16] = pulseHax.colorBank[pulseHax.editor.colorBankSel].saturation;
                game.beat[i][17] = pulseHax.colorBank[pulseHax.editor.colorBankSel].brightness;
            }
        }
    }]
}, ])

let unstableRate = 0;
let unstableRateDis = 0;
// Add settings menu
let dropdownFirstInstance = true;
menu.settings.menu.pages[0].items[2].after = function() {
    pulseHax.settings.themeSelLocal = menu.settings.themeSel;
}
menu.pulseHax.menu = new newSettingsMenu([{
    title: "settings_header_extras",
    items: [{
        name: "settings_welcomeWave",
        type: "boolean",
        hint: "settings_welcomeWave_sub",
        var: [pulseHax.settings, "welcomeWave"],
    }, {
        name: "settings_welcomeText",
        type: "string",
        hint: "settings_welcomeText_sub",
        var: [pulseHax.settings, "welcomeText"],
        allowEmpty: true
    }, {
        name: "settings_skipIntro",
        type: "boolean",
        hint: "settings_skipIntro_sub",
        var: [pulseHax.settings, "skipIntro"],
        phBool: true,
        event: function() {
            game.skipIntro = pulseHax.settings.skipIntro
            console.log(game.skipIntro);
        }
    }, {
        name: "settings_additionalThemes",
        type: "boolean",
        hint: "settings_additionalThemes_sub",
        var: [pulseHax.settings, "additionalThemes"],
        phBool: true,
        event: function() {
            menu.settings.menu.pages[0].items[2].options = menu.settings.menu.pages[0].items[2].options.filter((x) => !(x >= 11 && x <=15))
            if(pulseHax.settings.additionalThemes) {
                menu.settings.menu.pages[0].items[2].options.push(11, 12, 13, 14, 15);
            }
            if(!pulseHax.settings.additionalThemes && (menu.settings.themeSel >=11 || menu.settings.themeSel <=15)) {
                menu.settings.themeSel = 0;
        }
    }
    }, {
        name: "settings_preferredFS",
        type: "number",
        min: 0,
        max: 10,
        smallChange: .01,
        bigChange: .1,
        hint: "settings_preferredFS_sub",
        var: [pulseHax.settings, "preferredFS"],
        display: () => {
            return pulseHax.settings.preferredFS+"FS"
        }
    }, {
        name: "settings_changeTab",
        type: "boolean",
        hint: "settings_changeTab_sub",
        var: [pulseHax.settings, "changeTab"],
        phBool: true,
        event: function() {
                document.title = pulseHax.settings.changeTab ? "PulseHax" : "Pulsus";
                document.querySelector('link[rel*="icon"]').href = pulseHax.settings.changeTab ? game.pulseHaxLogo : 'https://www.pulsus.cc/play/client/favicon.ico';
    }
    }, {
        type: "slider",
        name: "settings_sfxVolume",
        var: [pulseHax.settings, "sfxVolume"],
        min: 0,
        max: 100,
        step: 1,
        hint: "settings_sfxVolume_sub",
        display: ()=>lang("percentage", langSel, pulseHax.settings.sfxVolume.toFixed(0))
    }, {
        type: "boolean",
        name: "settings_enableCustomTheme",
        hint: "settings_enableCustomTheme_sub",
        var: [pulseHax.settings, "customTheme"],
        event: function() {
            if(!pulseHax.settings.customTheme) {
                menu.pulseHax.menu.pages.splice(1, 2)
                menu.settings.menu.pages[0].items[2].options = menu.settings.menu.pages[0].items[2].options.filter((x) => !(x === 10))
                menu.settings.menu.pages[0].items[2].labels = menu.settings.menu.pages[0].items[2].labels.filter((x) => x!=='theme_CUSTOM')
                if(menu.settings.themeSel === 10) {
                    menu.settings.themeSel = 0;
                }
            }
            if(pulseHax.settings.customTheme) {
                menu.pulseHax.menu.pages.push(...customThemeNSM)
                menu.settings.menu.pages[0].items[2].options.push(10)
                menu.settings.menu.pages[0].items[2].labels.splice(menu.settings.menu.pages[0].items[2].labels.indexOf('theme_gufo'), 0, 'theme_CUSTOM')
                menu.settings.menu.pages[0].items[2].options.sort((a, b) => a-b)
            }
        }
    }]}, {
    title: "settings_header_skin",
    items: [{
        type: "dropdown",
        name: "settings_skinSelect",
        hint: "settings_skinSelect_sub",
        options: pulseHax.skinsStartup.skinOptions,
        labels: pulseHax.skinsStartup.skinLabels,
        var: [pulseHax.skin, "skinSelect"],
        after: function() {
            pulseHax.dropdownClosed = true
            if(!dropdownFirstInstance){
                console.log('did')
                refreshSkin();
                return;
            }
            dropdownFirstInstance = false
        }
        }, {
            type: "boolean",
            name: "settings_skin_showReplayHeader",
            hint: "settings_skin_showReplayHeader_sub",
            var: [pulseHax.skin.currentSkin, "showReplayHeader"],
            phBool: true,
            event: function() {
                console.log(pulseHax.skin.currentSkin.showReplayHeader)
                pulseHax.skin.skins[pulseHax.skin.skinSelect].config.showReplayHeader = pulseHax.skin.currentSkin.showReplayHeader
                !pulseHax.skin.currentSkin.showReplayHeader ? eval(`musicManager.field.draw = ` + musicManager.field.draw.toString().replace(`mods))),0<`, `mods))),100<`)) : eval(`musicManager.field.draw = ` + musicManager.field.draw.toString().replace(`mods))),100<`, `mods))),0<`))
            }
        }, {
            type: "boolean",
            name: "settings_skin_customUR",
            hint: "settings_skin_customUR_sub",
            var: [pulseHax.skin.currentSkin, "customUR"],
            phBool: true,
            event: function() {
                pulseHax.skin.skins[pulseHax.skin.skinSelect].config.customUR = pulseHax.skin.currentSkin.customUR
                if(pulseHax.skin.currentSkin.customUR) {
                    eval(`musicManager.field.draw = ` + (musicManager.field.draw.toString().replace(`height/64)}pop()}`, strParams.customURNewReplace))
                    .replace(strParams.defaultURBarReplace, strParams.customURBarReplace))
                } else {
                    // Needs to get executed twice I have no fuckin clue why but do not interfere
                    eval(`musicManager.field.draw = ` + (musicManager.field.draw.toString().replace(strParams.customURNewReplace, `height/64)}pop()}`))
                    .replace(strParams.customURBarReplace, strParams.defaultURBarReplace))
                    eval(`musicManager.field.draw = ` + (musicManager.field.draw.toString().replace(strParams.customURNewReplace, `height/64)}pop()}`))
                    .replace(strParams.customURBarReplace, strParams.defaultURBarReplace))
                }
            }
        }, {
            type: "dropdown",
            name: "settings_skin_URPos",
            hint: "settings_skin_URPos_sub",
            options: ["top", "bottom"],
            labels: ["settings_skin_URPos_top", "settings_skin_URPos_bottom"],
            var: [pulseHax.skin.currentSkin, "URPos"],
            after: function() {
                pulseHax.dropdownClosed = true
                console.log("URPos: " + pulseHax.skin.currentSkin.URPos)
                pulseHax.skin.skins[pulseHax.skin.skinSelect].config.URPos = pulseHax.skin.currentSkin.URPos


            }
        }, {
            type: "dropdown",
            name: "settings_skin_customScore",
            hint: "settings_skin_customScore_sub",
            options: ["none", "PWC"],
            labels: ["settings_skin_customScore_none", "settings_skin_customScore_PWC"],
            var: [pulseHax.skin.currentSkin, "customScore"],
            after: function() {
                pulseHax.dropdownClosed = true
                console.log("customScore: " + pulseHax.skin.currentSkin.customScore)
                pulseHax.skin.skins[pulseHax.skin.skinSelect].config.customScore = pulseHax.skin.currentSkin.customScore


            }
        }]
    }
]);

const customThemeNSM = [{
    title: "settings_header_customTheme",
    items: [{
        type: "settingsMenuColor",
        name: "settings_customTheme_main",
        hint: "settings_customTheme_main_sub",
        mode: HSB,
        var: [pulseHax.customTheme, "main"],
        hue: [pulseHax.customTheme.main, "color"],
        saturation: [pulseHax.customTheme.main, "saturation"],
        brightness: [pulseHax.customTheme.main, "brightness"],
        after: () => {
            pulseHax.customTheme.main = getColorAfterPrompt();
            themes[10].main = loadCustomTheme('main');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_text",
        hint: "settings_customTheme_text_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.text, "color"],
        saturation: [pulseHax.customTheme.text, "saturation"],
        brightness: [pulseHax.customTheme.text, "brightness"],
        after: function() {
            pulseHax.customTheme.text = getColorAfterPrompt();
            themes[10].text = loadCustomTheme('text');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_overlayShade",
        hint: "settings_customTheme_overlayShade_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.overlayShade, "color"],
        saturation: [pulseHax.customTheme.overlayShade, "saturation"],
        brightness: [pulseHax.customTheme.overlayShade, "brightness"],
        after: function() {
            pulseHax.customTheme.overlayShade = getColorAfterPrompt();
            themes[10].overlayShade = loadCustomTheme('overlayShade');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_shade",
        hint: "settings_customTheme_shade_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.shade, "color"],
        saturation: [pulseHax.customTheme.shade, "saturation"],
        brightness: [pulseHax.customTheme.shade, "brightness"],
        after: function() {
            pulseHax.customTheme.shade = getColorAfterPrompt();
            themes[10].shade = loadCustomTheme('shade');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_buttonDown",
        hint: "settings_customTheme_buttonDown_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.buttonDown, "color"],
        saturation: [pulseHax.customTheme.buttonDown, "saturation"],
        brightness: [pulseHax.customTheme.buttonDown, "brightness"],
        after: function() {
            pulseHax.customTheme.buttonDown = getColorAfterPrompt();
            themes[10].buttonDown = loadCustomTheme('buttonDown');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_buttonUp",
        hint: "settings_customTheme_buttonUp_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.buttonUp, "color"],
        saturation: [pulseHax.customTheme.buttonUp, "saturation"],
        brightness: [pulseHax.customTheme.buttonUp, "brightness"],
        after: function() {
            pulseHax.customTheme.buttonUp = getColorAfterPrompt();
            themes[10].buttonUp = loadCustomTheme('buttonUp');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_buttonText",
        hint: "settings_customTheme_buttonText_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.buttonText, "color"],
        saturation: [pulseHax.customTheme.buttonText, "saturation"],
        brightness: [pulseHax.customTheme.buttonText, "brightness"],
        after: function() {
            pulseHax.customTheme.buttonText = getColorAfterPrompt();
            themes[10].buttonText = loadCustomTheme('buttonText');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_textDown",
        hint: "settings_customTheme_textDown_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.textDown, "color"],
        saturation: [pulseHax.customTheme.textDown, "saturation"],
        brightness: [pulseHax.customTheme.textDown, "brightness"],
        after: function() {
            pulseHax.customTheme.textDown = getColorAfterPrompt();
            themes[10].textDown = loadCustomTheme('textDown');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_select",
        hint: "settings_customTheme_select_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.select, "color"],
        saturation: [pulseHax.customTheme.select, "saturation"],
        brightness: [pulseHax.customTheme.select, "brightness"],
        after: function() {
            pulseHax.customTheme.select = getColorAfterPrompt();
            themes[10].select = loadCustomTheme('select');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_modText",
        hint: "settings_customTheme_modText_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.modText, "color"],
        saturation: [pulseHax.customTheme.modText, "saturation"],
        brightness: [pulseHax.customTheme.modText, "brightness"],
        after: function() {
            pulseHax.customTheme.modText = getColorAfterPrompt();
            themes[10].modText = loadCustomTheme('modText');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_scrollbar",
        hint: "settings_customTheme_scrollbar_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.scrollbar, "color"],
        saturation: [pulseHax.customTheme.scrollbar, "saturation"],
        brightness: [pulseHax.customTheme.scrollbar, "brightness"],
        after: function() {
            pulseHax.customTheme.scrollbar = getColorAfterPrompt();
            themes[10].scrollbar = loadCustomTheme('scrollbar');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_checkmark",
        hint: "settings_customTheme_checkmark_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.checkmark, "color"],
        saturation: [pulseHax.customTheme.checkmark, "saturation"],
        brightness: [pulseHax.customTheme.checkmark, "brightness"],
        after: function() {
            pulseHax.customTheme.checkmark = getColorAfterPrompt();
            themes[10].checkmark = loadCustomTheme('checkmark');
            saveCustomTheme();
        }
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_dropdown",
        hint: "settings_customTheme_dropdown_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.dropdown, "color"],
        saturation: [pulseHax.customTheme.dropdown, "saturation"],
        brightness: [pulseHax.customTheme.dropdown, "brightness"],
        after: function() {
            pulseHax.customTheme.dropdown = getColorAfterPrompt();
            themes[10].dropdown = loadCustomTheme('dropdown');
            saveCustomTheme();
        }
    }, {
        name: "settings_customTheme_lightTheme",
        type: "boolean",
        hint: "settings_customTheme_lightTheme_sub",
        var: [pulseHax.customTheme, "lightTheme"],
        event: function() {
            pulseHax.customTheme.lightTheme = !pulseHax.customTheme.lightTheme;
            themes[10].lightTheme = pulseHax.customTheme.lightTheme;
            saveCustomTheme();
        }
    }, {
        name: "settings_customTheme_name",
        type: "string",
        hint: "settings_customTheme_name_sub",
        var: [pulseHax.settings, "customThemeName"],
        allowEmpty: true,
        after: function() {
            langs[langSel].theme_CUSTOM = pulseHax.settings.customThemeName === "" ? "Custom Theme" : pulseHax.settings.customThemeName;
        }
    }, {
        type: "button",
        name: "settings_customTheme_reset",
        event: function() {
            pulseHax.customTheme = JSON.parse(defaultThemeBuffer);
            localStorage.setItem("pulseHaxCustomTheme", JSON.stringify(pulseHax.customTheme))
            const sections = ['main', 'text', 'overlayShade', 'shade', 'buttonDown', 'buttonUp', 'buttonText', 'textDown', 'select', 'modText', 'scrollbar', 'checkmark', 'dropdown']
            for(let i=0; i<13; i++) {
                menu.pulseHax.menu.pages[1].items[i].hue[0] = pulseHax.customTheme[sections[i]];
                menu.pulseHax.menu.pages[1].items[i].saturation[0] = pulseHax.customTheme[sections[i]];
                menu.pulseHax.menu.pages[1].items[i].brightness[0] = pulseHax.customTheme[sections[i]];
            };
            menu.pulseHax.menu.pages[1].items[13].var[0].lightTheme = false;
            menu.pulseHax.menu.pages[1].items[14].var[0].customThemeName = "Custom Theme";
            themes[10] = loadCustomTheme();
            langs[langSel].theme_CUSTOM = "Custom Theme"
        },
        hint: "settings_customTheme_reset_sub"
    }]}, {
    title: "settings_header_options",
    items: [{
        type: "button",
        name: "settings_customTheme_export",
        event: function() {
            let zip = new JSZip();
            let response = loadCustomTheme()
            zip.file(`Custom Theme.json`, JSON.stringify(response));
            zip.generateAsync({type:"blob",compression: "DEFLATE"}).then(function (blob) {
            const a = document.createElement("a");
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = `${langs[langSel].theme_CUSTOM || "Custom Theme"}.pls`;
            a.click();
            URL.revokeObjectURL(url);
            });
        },
        hint: "settings_customTheme_export_sub"
    }, {
        type: "button",
        name: "settings_customTheme_import",
        event: function() {
            customThemeImport.click();
        },
        hint: "settings_customTheme_import_sub"
    }]
}];

// Editor menu and UR
eval(`musicManager.field.draw = ` + musicManager.field.draw.toString().replace(`128})}`, `128})} if(game.editorMode === 0) {
            if (fill(0, 0, 0, 200),
                rectMode(CORNER),
                noStroke(),
                rect(-width/16, height / 16 * 8/3, width / 4 + width / 16, height / 16 * 31/3, (width < height ? width : height) / 32)) {
            game.extrasNSM.draw({
            x: 0,
            y: height / 16 * 8/3,
            width: width / 4,
            height: height / 16 * 31/3,
            stacked: !0,
            maxBarHeight: height / 16 / 1.25,
            buffer: height / 16 * 12 / 128
            })
        }
    }`)
);

// Keybind stuff
document.addEventListener("keydown", function(e){
    if(e.shiftKey && e.ctrlKey && menu.screen === 'lvl'){
        if(e.code === 'KeyC') {
            if(getLevelDownloadState(clevels[menu.lvl.sel]) == 2) {
            if(confirm(`Copy ${newGrabLevelMeta(clevels[menu.lvl.sel], "id").title}?`))
                if(typeof clevels[menu.lvl.sel] == "number"){
                copyLevel(clevels[menu.lvl.sel]);
                levels.saved[levels.saved.length-1].stars = calcLevelStars(clevels[menu.lvl.sel]);
                } else {
                levels.saved.push(copyObject(clevels[menu.lvl.sel]));
                levels.saved[levels.saved.length-1].title += "(copy)";
                }
                if(menu.lvl.tab == 0) {
                levels.search = levels.saved;
                }
            }
        } else if(e.code === 'KeyE' && clevels[menu.lvl.sel]?.local) {
            if(!confirm(`Export ${clevels[menu.lvl.sel].title}.pls?`)) { return; }
            let zip = new JSZip();
            let response = clevels[menu.lvl.sel];
            zip.file(`${response.title.replace(/[^a-zA-Z0-9 ]/g, '')}.json`, JSON.stringify(response));
            zip.generateAsync({type:"blob",compression: "DEFLATE"}).then(function (blob) {
            const a = document.createElement("a");
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = `${response.title}.pls`;
            a.click();
            URL.revokeObjectURL(url);
            });
        } else if(e.code === 'KeyI') {
            if(!confirm("Import Maps?")) { return; }
            lvlImport.click();
        }
    }
    if(menu.screen === 'lvl' && clevels.length > 0 && screen === "menu") {
        let maxScroll = height - (height / 16 + height / 24 + (height - (height / 16 + height / 24)) / 12);
        if(e.code === 'F1') {
            menu.lvl.sel = parseInt(Math.random()*clevels.length);
            menu.lvl.scroll = menu.lvl.sel*maxScroll/(clevels.length-1);
            lowLag.play("scroll", pulseHax.settings.sfxVolume/100);
        }
        if(e.code === "ArrowUp") {
            let selBuffer = menu.lvl.sel;
            menu.lvl.sel -= (0 === menu.lvl.sel) ? 0 : 1;
            menu.lvl.scroll = menu.lvl.sel*maxScroll/(clevels.length-1);
            if(selBuffer === menu.lvl.sel) { return; }
            lowLag.play("scroll", pulseHax.settings.sfxVolume/100);

        }
        if(e.code === "ArrowDown") {
            let selBuffer = menu.lvl.sel;
            menu.lvl.sel = (clevels.length-1 === menu.lvl.sel) ? menu.lvl.sel : menu.lvl.sel === false ? 0 : menu.lvl.sel+1;
            menu.lvl.scroll = menu.lvl.sel*maxScroll/(clevels.length-1);
            if(selBuffer === menu.lvl.sel) { return; }
            lowLag.play("scroll", pulseHax.settings.sfxVolume/100);
        }
        if(e.code === "Enter" && quickPlayEnabled) {
            if(getLevelDownloadState(clevels[menu.lvl.sel]) == 2 && !game.edit) {
                game.edit = false;
                game.replay.on = false;
                loadLevel(menu.lvl.sel);
            } else {
                v.newGLRequested[Rt[menu.lvl.sel]] = true
                m(Rt[menu.lvl.sel], "id", true);
            }
        }
    }
    if(e.code === "Tab" && game.edit === false && game.disMode === 1 && screen === "game"){
        game.retry = true;
        game.quickRetry = true;
        lowLag.play("retry",pulseHax.settings.sfxVolume/100);
        }
});

lvlImport.addEventListener("change", () => {
    for(file of lvlImportAction.files){
        let zip = new JSZip();
        if(/\.pls$/.exec(file.name)){
            zip.loadAsync(file)
            .then(function(zip) {
            zip.files[Object.keys(zip.files)[0]].async('string').then(function (fileData) {
                let vtest = JSON.parse(fileData);
                if((Object.hasOwn(vtest,"beat") && Object.hasOwn(vtest,"effects"))) {
                levels.saved.push(vtest); levels.search = levels.saved
                } else {
                console.error("File Import Error: Invalid File");
                }
            })
            });
        } else {
            console.error("File Import Error: Invalid File");
        }
        }
    })

customThemeImport.addEventListener("change", () => {
    let zip = new JSZip();
        if(/\.pls$/.exec(customThemeImport.files[0].name)){
            zip.loadAsync(customThemeImport.files[0])
            .then(function(zip) {
            zip.files[Object.keys(zip.files)[0]].async('string').then(function (fileData) {
                let vtest = JSON.parse(fileData);
                if(!(Object.hasOwn(vtest,"beat"))) {
                themes[10].main.levels = vtest.main.levels;
                themes[10].text.levels = vtest.text.levels;
                themes[10].overlayShade.levels = vtest.main.levels;
                themes[10].shade.levels = vtest.shade.levels;
                themes[10].buttonDown.levels = vtest.buttonDown.levels;
                themes[10].buttonUp.levels = vtest.buttonUp.levels;
                themes[10].buttonText.levels = vtest.buttonText.levels;
                themes[10].textDown.levels = vtest.textDown.levels;
                themes[10].select.levels = vtest.main.levels;
                themes[10].modText.levels = vtest.modText.levels;
                themes[10].scrollbar.levels = vtest.scrollbar.levels;
                themes[10].checkmark.levels = vtest.checkmark.levels;
                themes[10].dropdown.levels = vtest.dropdown.levels;
                themes[10].lightTheme = vtest.lightTheme;
                pulseHax.settings.customThemeName = customThemeImport.files[0].name.split('.pls')[0];
                langs[langSel].theme_CUSTOM = pulseHax.settings.customThemeName;
                saveCustomTheme();
                const sections = ['main', 'text', 'overlayShade', 'shade', 'buttonDown', 'buttonUp', 'buttonText', 'textDown', 'select', 'modText', 'scrollbar', 'checkmark', 'dropdown']
                for(let i=0; i<13; i++) {
                    let format = makeColorFormat(RGBToHSB(...vtest[sections[i]].levels))
                    menu.pulseHax.menu.pages[1].items[i].hue[0] = format;
                    menu.pulseHax.menu.pages[1].items[i].saturation[0] = format;
                    menu.pulseHax.menu.pages[1].items[i].brightness[0] = format;
                };
                menu.pulseHax.menu.pages[1].items[13].var[0].lightTheme = vtest.lightTheme;
                menu.pulseHax.menu.pages[1].items[14].var[0].customThemeName = pulseHax.settings.customThemeName;
                } else {
                console.error("File Import Error: Invalid File");
                }
            })
            });
        } else {
            console.error("File Import Error: Invalid File");
        }
})

// Startup
setTimeout(() => {
    loadStartScreens();
    themes[10] = loadCustomTheme();
    eval(`musicManager.resultsScreen = `+ musicManager.resultsScreen.toString().replace(toggleSearch[!pulseHax.settings.scoreSubmission ? "on" : "off"], toggleSearch[pulseHax.settings.scoreSubmission ? "on" : "off"]))
    refreshSkin();
    if(pulseHax.settings.customTheme){
        menu.pulseHax.menu.pages.push(...customThemeNSM)
        menu.settings.menu.pages[0].items[2].options.push(10);
        menu.settings.menu.pages[0].items[2].labels.push('theme_CUSTOM')
    }
    if(!menu.settings.menu.pages[0].items[2].labels.includes('theme_gufo')) {
        menu.settings.menu.pages[0].items[2].labels.push('theme_gufo', 'theme_floopy', 'theme_shia', 'theme_lilyyy', 'theme_axye');
    };
    menu.settings.menu.pages[0].items[2].options = menu.settings.menu.pages[0].items[2].options.filter((x) => !(x >= 11 && x <=15))
    if(pulseHax.settings.additionalThemes) {
        menu.settings.menu.pages[0].items[2].options.push(11, 12, 13, 14, 15);
    };
    if(!pulseHax.settings.additionalThemes && (menu.settings.themeSel >=11 && menu.settings.themeSel <=15)) {
        menu.settings.themeSel = 0;
    };
    menu.settings.themeSel =
        menu.settings.menu.pages[0].items[2].options.includes(pulseHax.settings.themeSelLocal)
        && themes[pulseHax.settings.themeSelLocal] !== undefined
        ? pulseHax.settings.themeSelLocal : 0
    game.skipIntro = pulseHax.settings.skipIntro;
    document.title = pulseHax.settings.changeTab ? "PulseHax" : "Pulsus";
    document.querySelector('link[rel*="icon"]').href = pulseHax.settings.changeTab ? game.pulseHaxLogo : 'https://www.pulsus.cc/play/client/favicon.ico';
}, 300);

});