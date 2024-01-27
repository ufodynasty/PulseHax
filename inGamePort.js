window.addEventListener("SetupComplete", function() {
Object.defineProperty(globalThis, 'clickMenu', { get: () => {return fs},set: (val) => {fs = val}}); // This is wrong
Object.defineProperty(globalThis, 'loadStartScreens', { get: () => {return Cs},set: (val) => {Cs = val}}); // This is wrong
Object.defineProperty(globalThis, 'newSettingsMenu', { get: () => {return Jo},set: (val) => {Jo = val}});
Object.defineProperty(globalThis, 'saveGameData', { get: () => {return Qn},set: (val) => {Qn = val}});
Object.defineProperty(globalThis, 'hitbox', { get: () => {return Ft},set: (val) => {Ft = val}});
Object.defineProperty(globalThis, 'promptRes', { get: () => {return ki},set: (val) => {ki = val}});
Object.defineProperty(globalThis, 'prmpt', { get: () => {return Ri},set: (val) => {Ri = val}});
Object.defineProperty(globalThis, 'loadLevel', { get: () => {return qi},set: (val) => {qi = val}});
Object.defineProperty(globalThis, 'popupMessage', { get: () => {return Gn},set: (val) => {Gn = val}}); // This is wrong

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

// Load JSZip
const JSZipScript = document.createElement('script');
JSZipScript.src = game.pulseHaxLogo.replace("assets/icon.ico", "jszip.min.js");
(document.head || document.documentElement).appendChild(JSZipScript);

// Fetch PulseHax's local storage values then set them in the PulseHax object
function fetchLocalStorage(item) {
    if(item==="settings"){
        if(JSON.parse(localStorage.getItem("pulseHaxSettings")) === null){return {
            additionalThemes: false,
            changeTab: true,
            customThemeName: "",
            sfxVolume: 50,
            skipIntro: false,
            welcomeText: "",
            welcomeWave: false
        }}
        let settings = {};
        const settingSel = {
        bool: ["welcomeWave", "skipIntro", "additionalThemes", "changeTab"],
        str: ["welcomeText", "customThemeName"],
        num: [],
        slider: ["sfxVolume"]};
        const types = ["bool", "str", "num", "slider"];
        const phStorage = JSON.parse(localStorage.getItem("pulseHaxSettings"))
        for(let type in types) {
            for(let setting in settingSel[types[type]]) {
                settings[settingSel[types[type]][setting]] = phStorage[settingSel[types[type]][setting]] === undefined ? [false, "", 0, 50][type] : phStorage[settingSel[types[type]][setting]]
            }
        }; return settings
    } else if(item==="customTheme") {
        return JSON.parse(localStorage.getItem("pulseHaxCustomTheme")) || defaultTheme
    } return console.error("Invalid Input")
};
const pulseHax = {
    settings: fetchLocalStorage("settings"),
    customTheme: fetchLocalStorage("customTheme"),
    editor: {
        noteType: "any",
        chordType: "any",
        snapDenominator: 0
    }
};

// Set language elements for PulseHax
pulseHax.langItems = {
    pulseHax_title: "PulseHax",

    theme_CUSTOM: pulseHax.settings.customThemeName === "" ? "Custom Theme" : pulseHax.settings.customThemeName,
    theme_gufo: "Gufo's theme",
    theme_floopy: "Floopy's theme",
    theme_shia: "Shia's theme",
    theme_lilyyy: "Lilyyy's theme",
    theme_axye: "Axye's theme",

    settings_header_extras: "Extras",
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
    settings_changeTab: "Change Tab Name and Icon",
    settings_changeTab_sub: "Changes the tab name and icon from Pulsus to PulseHax (restart to apply)",
    settings_sfxVolume: "SFX Volume",
    settings_sfxVolume_sub: "Sets the volume of the PulseHax sound effects (such as quick retry, scroll and quick load)",

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

// Load and save custom themes
function loadCustomTheme(obj=pulseHax.customTheme) {
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
    }
};

// Quick play bind disable for when the search box is brought up and enable for when the search box is not
let quickPlayEnabled = true;
function toggleQuickPlay(bool) {
    quickPlayEnabled = bool;
}

// Score submission toggle
let submission = true;
const toggleSearch = {
    on: `var e=""!==T.uuid&&!Tt.failed&&!Tt.mods.auto&&H(Rt[Bt.lvl.sel],"id").ranked&&!Tt.replay.on&&0===Tt.mods.startPos&&0===Tt.mods.endPos`,
    off: "var e = false"
}
function toggleSubmission() {
    let v = submission ? "on" : "off"
    let i = !submission ? "on" : "off";
    eval(`musicManager.resultsScreen = `+ musicManager.resultsScreen.toString().replace(toggleSearch[v], toggleSearch[i]))
    submission = !submission;
    popupMessage({
        type: "success",
        message: submission ? "submission_on" : "submission_off"
    })
}

// Skip intro
eval(`musicManager.musicTime = function() {
    var e;
    1 === soundManager.getSoundById("menuMusic").playState && (soundManager.stop("menuMusic"), soundManager.setVolume(game.song, menu.settings.musicVolume)), !1 === game.edit && (!1 === game.preLevelStart && (game.preLevelStart = millis()), 5e3 <= millis() - game.preLevelStart + (game.songOffset + game.mods.offset + menu.settings.offset) && !game.songPlaying && !game.paused ? (lvlHowl[game.song].rate(game.mods.bpm), lvlHowl[game.song].volume(menu.settings.musicVolume / 100), e = lvlHowl[game.song].play(), lvlHowl[game.song].seek((game.songOffset + game.mods.offset + menu.settings.offset) / 1e3 + ((pulseHax.settings.skipIntro ? game.beat[0][1] : 0) * game.mods.bpm / (game.bpm / 60)) - 5, e), game.songPlaying = !0) : game.paused && (lvlHowl[game.song].pause(), game.songPlaying = !1)), game.edit || !1 !== game.songEnded || lvlHowl[game.song].on("end", function() {
        game.songEnded = [millis(), lvlHowl[game.song].duration]
    }), !1 !== game.edit || game.paused || 1 !== game.disMode || (!1 !== game.songPlaying || !1 !== toLoad && "hidden" !== toLoad || !1 === game.preLevelStart ? (-1e3 < ((e = ((!1 === game.songEnded ? lvlHowl[game.song].seek() : lvlHowl[game.song].duration() + (!1 === game.songEnded ? 0 : (millis() - game.songEnded[0]) / 1e3 * game.mods.bpm)) - (game.songOffset + game.mods.offset + menu.settings.offset) / 1e3) * (game.bpm / 60) / game.mods.bpm) - game.time) * game.mods.bpm / (game.bpm / 60) || "set" === game.time) && (game.time = e) : game.time = (millis() - game.preLevelStart - 5e3) / 1e3 * (game.bpm / 60) / game.mods.bpm)
}`)

// Fix the damn toggle quick play not working on cancel
eval(`ki = ` + ki.toString().slice(0, -1) + `
    toggleQuickPlay(true);
}
`)

// Custom selection function
function customSelect(e) {
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
const newSettingsMenuReplace = `else if("color"===H.type){void 0===H.highlights&&(H.highlights=[0]),push(),translate(2*l,2.5*l/2);var y=(o-6*l)/3,P=u-2.5*l,P=(colorMode(H.mode),H.multiple?fill(te(H.hues[0]),te(H.saturations[0]),te(H.brightnesses[0]),void 0===H.alphas?255:te(H.alphas[0])):fill(te(H.hue),te(H.saturation),te(H.brightness),void 0===H.alpha?255:te(H.alpha)),stroke(255),strokeWeight(l),rect(0,0,y,P,P),H.multiple&&(fill($.text),textAlign(CENTER,CENTER),noStroke(),Dt(Pt("item_mixedValues",xt),y/2,P/2,y-2*l,P/1.5)),pop(),push(),(o-6*l)/3*2),O=u-1.5*l;translate(P/2,O/2),translate((o-6*l)/3+4*l,1.5*l/2),Ft("rcenter",zt.get().x,zt.get().y,P,O)?H.highlights[0]+=At(1,H.highlights[0],.2):H.highlights[0]+=At(0,H.highlights[0],.2),scale(1+.025*H.highlights[0]),rectMode(CENTER),noStroke(),0<H.highlights[0].toFixed(3)&&(push(),translate(d*lerp(0,1,H.highlights[0]),g*lerp(0,1,H.highlights[0])),fill(0,100),rect(0,0,P,O),pop()),noStroke(),fill(lerpColor($.buttonDown,$.buttonUp,H.highlights[0])),rect(0,0,P,O),fill($.buttonText),Dt(Pt("settings_editColor",xt),0,0,P-2*l,O/1.5),this.clickEvents.push({hitbox:Ft("rcenter",zt.get().x,zt.get().y,P,O),item:H,event:function(e){e.highlights[0]/=5,Ni({hue:e.hue,saturation:e.saturation,brightness:e.brightness,alpha:e.alpha,loops:e.loops,smooth:e.smooth,mode:HSB,title:e.name,multiple:e.multiple,hues:e.hues,saturations:e.saturations,brightnesses:e.brightnesses,alphas:e.alphas})}}),pop()}`;
const clickMenuScreensReplace = `else if("settings"===Bt.screen)Bt.settings.menu.click();`;
const drawMenuPagesReplace = `case"settings":c.settings();break;`;
const sgdString = saveGameData.toString()
const quickPlayReplace = `Bt.lvl.scrollNewLock||(Ft("rcorner",height/24*5,height/16,width/3-width/48-height/24*5,height/24)&&Ri({var:[Bt.lvl,"search"],title:"menu_lvl_search",type:"string",allowEmpty:!0,after:function(){Ht.search=[],Bt.lvl.sel=!1,Bt.lvl.searchSent=!1}})`

eval(`newSettingsMenu.prototype.draw = ` + ((newSettingsMenu.prototype.draw.toString().replace(
    newSettingsMenuReplace, newSettingsMenuReplace+newSettingsMenuReplace))
    .replace(`else if("color"===H.type)`, `else if("settingsMenuColor" === H.type)`))
    .replace(`rect(0,0,y,P,P)`, `rect(0, -P/2, y, P*2, P)`));
    
const clickMenuBuffer = clickMenu.screens;
eval(`clickMenu.screens = `+(clickMenu.screens.toString().replace(clickMenuScreensReplace, clickMenuScreensReplace+ `
else if ("pulseHax" === menu.screen)
    menu.pulseHax.menu.click();`))
    .replace(quickPlayReplace, `
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

JSON.stringify(eval(`nav.pages = `+ nav.pages.toString().replace(drawMenuPagesReplace, drawMenuPagesReplace+`
case "pulseHax":
    nav.pulseHax();
    break;`)))

eval(`saveGameData = function ${sgdString.slice(sgdString.search(/\(/),sgdString.search(/\){/) + 2)}
    localStorage.setItem("pulseHaxSettings", JSON.stringify(menu.pulseHax.settings)),${sgdString.slice(sgdString.search(/\){/) + 2)}`)

eval(loadStartScreens.toString().replace('(){', `(){
    welcome.wave = pulseHax.settings.welcomeWave ? 1 : welcome.wave;
    langs[langSel].welcome = pulseHax.settings.welcomeText === "" ? lang("welcome", langSel) : pulseHax.settings.welcomeText;
`));

eval(loadLevel.toString().replace('("game","menu")', `("game","menu"),lowLag.play("load", pulseHax.settings.sfxVolume/100)`))

// Add Skip Intro
musicManager.musicTime = function() {
    var e;
    1 === soundManager.getSoundById("menuMusic").playState && (soundManager.stop("menuMusic"), soundManager.setVolume(game.song, menu.settings.musicVolume)), !1 === game.edit && (!1 === game.preLevelStart && (game.preLevelStart = millis()), 5e3 <= millis() - game.preLevelStart + (game.songOffset + game.mods.offset + menu.settings.offset) && !game.songPlaying && !game.paused ? (lvlHowl[game.song].rate(game.mods.bpm), lvlHowl[game.song].volume(menu.settings.musicVolume / 100), e = lvlHowl[game.song].play(), lvlHowl[game.song].seek((game.songOffset + game.mods.offset + menu.settings.offset) / 1e3 + ((pulseHax.settings.skipIntro ? game.beat[0][1] : 0) * game.mods.bpm / (game.bpm / 60)) - 5, e), game.songPlaying = !0) : game.paused && (lvlHowl[game.song].pause(), game.songPlaying = !1)), game.edit || !1 !== game.songEnded || lvlHowl[game.song].on("end", function() {
        game.songEnded = [millis(), lvlHowl[game.song].duration]
    }), !1 !== game.edit || game.paused || 1 !== game.disMode || (!1 !== game.songPlaying || !1 !== toLoad && "hidden" !== toLoad || !1 === game.preLevelStart ? (-1e3 < ((e = ((!1 === game.songEnded ? lvlHowl[game.song].seek() : lvlHowl[game.song].duration() + (!1 === game.songEnded ? 0 : (millis() - game.songEnded[0]) / 1e3 * game.mods.bpm)) - (game.songOffset + game.mods.offset + menu.settings.offset) / 1e3) * (game.bpm / 60) / game.mods.bpm) - game.time) * game.mods.bpm / (game.bpm / 60) || "set" === game.time) && (game.time = e) : game.time = (millis() - game.preLevelStart - 5e3) / 1e3 * (game.bpm / 60) / game.mods.bpm)
};

// Add settings menu
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
        var: [pulseHax.settings, "skipIntro"]
    }, {
        name: "settings_additionalThemes",
        type: "boolean",
        hint: "settings_additionalThemes_sub",
        var: [pulseHax.settings, "additionalThemes"]
    }, {
        name: "settings_changeTab",
        type: "boolean",
        hint: "settings_changeTab_sub",
        var: [pulseHax.settings, "changeTab"]
    }, {
        type: "slider",
        name: "settings_sfxVolume",
        var: [pulseHax.settings, "sfxVolume"],
        min: 0,
        max: 100,
        step: 1,
        hint: "settings_sfxVolume_sub",
        display: ()=>lang("percentage", langSel, pulseHax.settings.sfxVolume.toFixed(0))
    }]}, {
        title: "settings_header_customTheme",
        items: [{
            type: "settingsMenuColor",
            name: "settings_customTheme_main",
            hint: "settings_customTheme_main_sub",
            mode: HSB,
            hue: [pulseHax.customTheme.main, "color"],
            saturation: [pulseHax.customTheme.main, "saturation"],
            brightness: [pulseHax.customTheme.main, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_text",
        hint: "settings_customTheme_text_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.text, "color"],
        saturation: [pulseHax.customTheme.text, "saturation"],
        brightness: [pulseHax.customTheme.text, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_overlayShade",
        hint: "settings_customTheme_overlayShade_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.overlayShade, "color"],
        saturation: [pulseHax.customTheme.overlayShade, "saturation"],
        brightness: [pulseHax.customTheme.overlayShade, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_shade",
        hint: "settings_customTheme_shade_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.shade, "color"],
        saturation: [pulseHax.customTheme.shade, "saturation"],
        brightness: [pulseHax.customTheme.shade, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_buttonDown",
        hint: "settings_customTheme_buttonDown_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.buttonDown, "color"],
        saturation: [pulseHax.customTheme.buttonDown, "saturation"],
        brightness: [pulseHax.customTheme.buttonDown, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_buttonUp",
        hint: "settings_customTheme_buttonUp_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.buttonUp, "color"],
        saturation: [pulseHax.customTheme.buttonUp, "saturation"],
        brightness: [pulseHax.customTheme.buttonUp, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_buttonText",
        hint: "settings_customTheme_buttonText_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.buttonText, "color"],
        saturation: [pulseHax.customTheme.buttonText, "saturation"],
        brightness: [pulseHax.customTheme.buttonText, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_textDown",
        hint: "settings_customTheme_textDown_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.textDown, "color"],
        saturation: [pulseHax.customTheme.textDown, "saturation"],
        brightness: [pulseHax.customTheme.textDown, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_select",
        hint: "settings_customTheme_select_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.select, "color"],
        saturation: [pulseHax.customTheme.select, "saturation"],
        brightness: [pulseHax.customTheme.select, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_modText",
        hint: "settings_customTheme_modText_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.modText, "color"],
        saturation: [pulseHax.customTheme.modText, "saturation"],
        brightness: [pulseHax.customTheme.modText, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_scrollbar",
        hint: "settings_customTheme_scrollbar_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.scrollbar, "color"],
        saturation: [pulseHax.customTheme.scrollbar, "saturation"],
        brightness: [pulseHax.customTheme.scrollbar, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_checkmark",
        hint: "settings_customTheme_checkmark_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.checkmark, "color"],
        saturation: [pulseHax.customTheme.checkmark, "saturation"],
        brightness: [pulseHax.customTheme.checkmark, "brightness"]
    }, {
        type: "settingsMenuColor",
        name: "settings_customTheme_dropdown",
        hint: "settings_customTheme_dropdown_sub",
        mode: HSB,
        hue: [pulseHax.customTheme.dropdown, "color"],
        saturation: [pulseHax.customTheme.dropdown, "saturation"],
        brightness: [pulseHax.customTheme.dropdown, "brightness"]
    }, {
        name: "settings_customTheme_lightTheme",
        type: "boolean",
        hint: "settings_customTheme_lightTheme_sub",
        var: [pulseHax.customTheme, "lightTheme"]
    }, {
        name: "settings_customTheme_name",
        type: "string",
        hint: "settings_customTheme_name_sub",
        var: [pulseHax.settings, "customThemeName"],
        allowEmpty: true
    }
    /* {
        type: "button",
        name: "settings_customTheme_applyChanges",
        event: function() {
            themes[10] = loadCustomTheme();
            langs[langSel].theme_CUSTOM = pulseHax.settings.customThemeName === "" ? "Custom Theme" : pulseHax.settings.customThemeName;
            },
        hint: "settings_customTheme_applyChanges_sub"
        }*/
    , {
        type: "button",
        name: "settings_customTheme_reset",
        event: function() {
            pulseHax.customTheme = JSON.parse(defaultThemeBuffer)
            localStorage.setItem("pulseHaxCustomTheme", JSON.stringify(pulseHax.customTheme))
            for(let i=0; i<13; i++) {
                const sections = ['main', 'text', 'overlayShade', 'shade', 'buttonDown', 'buttonUp', 'buttonText', 'textDown', 'select', 'modText', 'scrollbar', 'checkmark', 'dropdown']
                menu.pulseHax.menu.pages[1].items[i].hue[0] = pulseHax.customTheme[sections[i]];
                menu.pulseHax.menu.pages[1].items[i].saturation[0] = pulseHax.customTheme[sections[i]];
                menu.pulseHax.menu.pages[1].items[i].brightness[0] = pulseHax.customTheme[sections[i]];
            }
            themes[10] = loadCustomTheme();
            langs[langSel].theme_CUSTOM = pulseHax.settings.customThemeName === "" ? "Custom Theme" : pulseHax.settings.customThemeName;
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
}]);

// Editor features
const noteTypeLabel = ["edit_select_noteType_any", "edit_select_noteType_beat", "edit_select_noteType_hold"];
const noteTypeOptions = ["any", "beat", "hold"];
const chordTypeLabel = ["edit_select_chordType_any", "edit_select_chordType_singles", "edit_select_chordType_doubles", "edit_select_chordType_triplesFwd"];
const chordTypeOptions = ["any", "1", "2", "3+"]
eval(`musicManager.field.draw = ` + ((musicManager.field.draw.toString().replace(`beatNSM.pages.length-1].items.push({`, `beatNSM.pages.length-1].items.push({
        name: "edit_select_noteType",
        hint: "edit_select_noteType_sub",
        type: "dropdown",
        labels: noteTypeLabel,
        options: noteTypeOptions,
        var: [pulseHax.editor, "noteType"]
    }, {
        name: "edit_select_chordType",
        hint: "edit_select_chordType_sub",
        type: "dropdown",
        labels: chordTypeLabel,
        options: chordTypeOptions,
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
`)).replace(`mt((e,t)=>t<=e)`, `customSelect("before")`))
        .replace(`mt((e,t)=>e<=t)`, `customSelect("after")`)

);
/*game.beatNSM.pages[game.beatNSM.pages.length-1].items.push([
    {
        name: "edit_select_noteType",
        hint: "edit_select_noteType_sub",
        type: "dropdown",
        label: noteTypeLabel,
        options: noteTypeOptions,
        var: [pulseHax.editor, "noteType"]
    }, {
        name: "edit_select_chordType",
        hint: "edit_select_chordType_sub",
        type: "dropdown",
        label: chordTypeLabel,
        options: chordTypeOptions,
        var: [pulseHax.editor, "chordType"]
    }, {
        name: "edit_select_chordType",
        hint: "edit_select_chordType_sub",
        type: "dropdown",
        label: chordTypeLabel,
        options: chordTypeOptions,
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
    },

])*/

// Keybind stuff
document.addEventListener("keydown", function(e){
    if(e.shiftKey && e.ctrlKey){
        if(e.code === 'KeyC') {
          if(getLevelDownloadState(clevels[menu.lvl.sel]) == 2 && menu.screen === 'lvl') {
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
        } else if(e.code === 'KeyE' && clevels[menu.lvl.sel]?.local && menu.screen === 'lvl') {
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
        } else if(e.code === 'KeyI' && menu.screen !== 'menu') {
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
        if (e.code === 'F2') {
            toggleSubmission();
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
    if(e.code === "Tab"){
        e.preventDefault();
        if(!1 === game.edit && 1 === game.disMode && screen === "game"){
          game.retry = true;
          game.quickRetry = true;
          lowLag.play("retry",pulseHax.settings.sfxVolume/100);
        }
      }
      if(e.altKey){
        e.preventDefault();
      }
});

lvlImport.addEventListener("change", () => {
    for(file of lvlImportAction.files){
        let zip = new JSZip();
        if(/\.pls$/.exec(file.name)){
            zip.loadAsync(file)
            .then(function(zip) {
            console.log(file)
            console.log("file")
            console.log(Object.keys(zip.files)[0])
            console.log("keys")
            console.log(Object.keys(zip.files))
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
    console.log(customThemeImport.files[0].name)
        if(/\.pls$/.exec(customThemeImport.files[0].name)){
            zip.loadAsync(customThemeImport.files[0])
            .then(function(zip) {
            console.log(customThemeImport.files[0])
            console.log("file")
            console.log(Object.keys(zip.files)[0])
            console.log("keys")
            console.log(Object.keys(zip.files))
            zip.files[Object.keys(zip.files)[0]].async('string').then(function (fileData) {
                let vtest = JSON.parse(fileData);
                console.log(vtest)
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
                themes[10].lightTheme = vtest.lightTheme
                saveCustomTheme()
                } else {
                console.error("File Import Error: Invalid File");
                }
            })
            });
        } else {
            console.error("File Import Error: Invalid File");
        }
})

// Startup and settings saving shenanigans
setInterval(() => {
    if(menu.screen==="pulseHax"){
        themes[10] = loadCustomTheme();
        if(pulseHax.settings.additionalThemes && !menu.settings.menu.pages[0].items[2].options.includes(11)) {
            menu.settings.menu.pages[0].items[2].options.push(11, 12, 13, 14, 15);
        };
        if(!pulseHax.settings.additionalThemes && menu.settings.menu.pages[0].items[2].options.includes(11)) {
            menu.settings.menu.pages[0].items[2].options.splice(menu.settings.menu.pages[0].items[2].options.indexOf(11), 5)
        };
        if(pulseHax.settings.changeTab) {
            document.title = "PulseHax";
            document.querySelector('link[rel*="icon"]').href = game.pulseHaxLogo;
        };
        if(!pulseHax.settings.changeTab) {
            document.title = "Pulsus";
            document.querySelector('link[rel*="icon"]').href = 'https://www.pulsus.cc/play/client/favicon.ico';
        };
    }
    if(menu.screen==="settings"){
        langs[langSel].theme_CUSTOM = pulseHax.settings.customThemeName === "" ? "Custom Theme" : pulseHax.settings.customThemeName;
    }
    }, 300)
setTimeout(() => {
    loadStartScreens();
    themes[10] = loadCustomTheme();
    menu.settings.menu.pages[0].items[2].options.push(10);
    menu.settings.menu.pages[0].items[2].labels.push('theme_CUSTOM');
    if(pulseHax.settings.additionalThemes && !menu.settings.menu.pages[0].items[2].options.includes(11)) {
        menu.settings.menu.pages[0].items[2].options.push(11, 12, 13, 14, 15);
        menu.settings.menu.pages[0].items[2].labels.push('theme_gufo', 'theme_floopy', 'theme_shia', 'theme_lilyyy', 'theme_axye');
    };
    document.title = pulseHax.settings.changeTab ? "PulseHax" : "Pulsus";
    document.querySelector('link[rel*="icon"]').href = pulseHax.settings.changeTab ? game.pulseHaxLogo : 'https://www.pulsus.cc/play/client/favicon.ico';
}, 300);

});