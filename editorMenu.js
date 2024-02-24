window.addEventListener("SetupComplete", function() {
    const colorBankImport = document.createElement('input');
    colorBankImport.type = "file";
    colorBankImport.id = "colorBankImportAction";
    colorBankImport.accept = ".phb";
    colorBankImport.multiple = "false";
    colorBankImport.style = "display:none;";
    document.body.appendChild(colorBankImport);
    colorBankImport.addEventListener("change", function() {
        let zip = new JSZip();
        if(/\.plsb$/.exec(colorBankImport.files[0].name)){
            zip.loadAsync(colorBankImport.files[0])
            .then(function(zip) {
            zip.files[Object.keys(zip.files)[0]].async('string').then(function (fileData) {
                let vtest = JSON.parse(fileData);
                game.pulseHax.colorBank = vtest;
                for(i in game.pulseHax.colorBankLangItems) {
                    delete langs[langSel][i]
                }
                game.pulseHax.colorBankLangItems = {};
                game.pulseHax.editor.colorBank.colorBankLabels = [];
                game.pulseHax.editor.colorBank.colorBankOptions = [];
                for(i in game.pulseHax.colorBank){
                    game.pulseHax.colorBankLangItems[`edit_colorBank_${i}`] = i;
                    game.pulseHax.editor.colorBank.colorBankLabels.push(`edit_colorBank_${i}`);
                    game.pulseHax.editor.colorBank.colorBankOptions.push(i);
                    game.extrasNSM.pages[3].items[1].labels = game.pulseHax.editor.colorBank.colorBankLabels;
                    game.extrasNSM.pages[3].items[1].options = game.pulseHax.editor.colorBank.colorBankOptions;
                    game.pulseHax.editor.colorBank.sel = game.pulseHax.editor.colorBank.colorBankOptions[0];
                    game.extrasNSM.pages[3].items[1].after();
                };
                langs[langSel] = {
                    ...langs[langSel],
                    ...game.pulseHax.colorBankLangItems
                }
            })
            });
        } else {
            console.error("File Import Error: Invalid File");
        }
    });
    game.makeColorFormat = function(hsba=[0, 0, 0, 0]) {
        return {
            color: hsba[0],
            saturation: hsba[1],
            brightness: hsba[2],
            alpha: hsba[3] === undefined ? 255 : hsba[3]
            }
    };
    
    game.getColorAfterPrompt = function() {
        return {
            color: prmpting.hue,
            saturation: prmpting.saturation,
            brightness: prmpting.brightness
        }
    };
    
    game.refreshColorBank = function(bank) {
        console.log(bank)
        let bankNum = game.pulseHax.editor.colorBank.colorBankOptions.indexOf(game.pulseHax.editor.colorBank.sel)
        game.extrasNSM.pages[3].items[0].hue[0] = game.pulseHax.colorBank[bank];
        game.extrasNSM.pages[3].items[0].saturation[0] = game.pulseHax.colorBank[bank];
        game.extrasNSM.pages[3].items[0].brightness[0] = game.pulseHax.colorBank[bank];
        game.extrasNSM.pages[3].items[0].name = game.pulseHax.editor.colorBank.colorBankLabels[bankNum];
    };
    langItems = {
        ERR_noSelect: "No notes selected!",
        ERR_multiSelect: "Too many notes selected!",
        ERR_noBuffer: "No notes buffered!",
        ERR_duplicateBank: "A color bank with this name already exists!",
        ERR_tooLittleBanks: "Cannot delete when there is only 1 color bank added!",
        ERR_invalidBankName: "Don't even try bruh",

        edit_hint_keybinds_array: [""],

        settings_header_extras: "Extras",
    
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
        edit_colorBank_sub: "Sets a custom color for the selected bank",
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
        edit_colorBank_bankName: "Color Bank Name",
        edit_colorBank_bankName_sub: "Applies a name to the selected bank for more readability",
        edit_colorBank_addBank: "Add Color Bank",
        edit_colorBank_addBank_sub: "Adds a new color bank to dropdown",
        edit_colorBank_removeBank: "Remove Color Bank",
        edit_colorBank_removeBank_sub: "Removes the selected color bank from dropdown",
        edit_colorBank_export: "Export Color Bank",
        edit_colorBank_export_sub: "Exports your color banks to a .plsb file",
        edit_colorBank_import: "Import Color Bank",
        edit_colorBank_import_sub: "Imports a .plsb file as a color bank and overrides your current one",
    
        edit_select_item_selectInRange: "Select In Range",
        edit_select_item_selectInRange_sub: "Selects all notes in the selected range",
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
        edit_select_snapDenominator_sub: "Sets a filter for a specific snap to look for (i.e '4' looks for 1/4s, leave 0 for all)"
    }; 
    game.pulseHax.dropdownClosed = true;
    game.pulseHax.editor = {
        noteType: "any",
        chordType: "any",
        snapDenominator: 0,
        customSnap: 4,
        playbackRate: 1,
        beatBuffer: null,
        colorBank: {
            name: ''
        }
    };
    if(localStorage.getItem("pulseHaxColorBankNew") === 'undefined') {
        localStorage.setItem("pulseHaxColorBankNew", null);
    };
    if(localStorage.getItem("pulseHaxColorBanksAdded") === 'undefined') {
        localStorage.setItem("pulseHaxColorBanksAdded", null);
    };
    game.pulseHax.colorBank = JSON.parse(localStorage.getItem("pulseHaxColorBankNew")) || {
        "Default": {
            ...game.makeColorFormat([141, 255, 255]),
            name: "Default",
        }
    };
    game.pulseHax.colorBanksAdded = JSON.parse(localStorage.getItem("pulseHaxColorBanksAdded")) || 1
    game.pulseHax.editor.colorBank.colorBankLabels = new Array();
    Object.keys(game.pulseHax.colorBank).forEach((e) => game.pulseHax.editor.colorBank.colorBankLabels.push(`edit_colorBank_${game.pulseHax.colorBank[e].name}`));

    game.pulseHax.editor.colorBank.colorBankOptions = new Array();
    Object.keys(game.pulseHax.colorBank).forEach((e) => game.pulseHax.editor.colorBank.colorBankOptions.push(game.pulseHax.colorBank[e].name));
    game.pulseHax.editor.colorBank.sel = game.pulseHax.editor.colorBank.colorBankOptions[0]

    game.pulseHax.colorBankLangItems = new Object();
    Object.keys(game.pulseHax.colorBank).forEach((e) => game.pulseHax.colorBankLangItems[`edit_colorBank_${game.pulseHax.colorBank[e].name}`] = game.pulseHax.colorBank[e].name)

    langs[langSel] = {...langs[langSel], ...langItems, ...game.pulseHax.colorBankLangItems};
    game.customSelect = function(e) {
        if(game.selectedBeats.length === 0 && (e === "after" || e === "before" || e === "inRange")) {
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
        const bValue = game.pulseHax.editor.noteType;
        const chValue = game.pulseHax.editor.chordType;
        const snapValue = game.pulseHax.editor.snapDenominator !== 0 ? 1/game.pulseHax.editor.snapDenominator : false;
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
    game.extrasNSM = new newSettingsMenu([{
        title: "edit_selectionManip",
        items: [{
            name: "edit_select_noteType",
            hint: "edit_select_noteType_sub",
            type: "dropdown",
            labels: ["edit_select_noteType_any", "edit_select_noteType_beat", "edit_select_noteType_hold"],
            options: ["any", "beat", "hold"],
            var: [game.pulseHax.editor, "noteType"]
        }, {
            name: "edit_select_chordType",
            hint: "edit_select_chordType_sub",
            type: "dropdown",
            labels: ["edit_select_chordType_any", "edit_select_chordType_singles", "edit_select_chordType_doubles", "edit_select_chordType_triplesFwd"],
            options: ["any", "1", "2", "3+"],
            var: [game.pulseHax.editor, "chordType"]
        }, {
            name: "edit_select_snapDenominator",
            hint: "edit_select_snapDenominator_sub",
            type: "number",
            min: 0,
            max: false,
            smallChange: 1,
            bigChange: 4,
            var: [game.pulseHax.editor, "snapDenominator"]
        }, {
            type: "button",
            name: "edit_select_item_selectInRange",
            hint: "edit_select_item_selectInRange_sub",
            event: () => game.customSelect("inRange")
        }, {
            type: "button",
            name: "edit_select_item_selectAll",
            hint: "edit_select_item_selectAll_sub",
            event: () => game.customSelect("all")
        }, {
            type: "button",
            name: "edit_select_item_selectBefore",
            hint: "edit_select_item_selectBefore_sub",
            event: () => game.customSelect("before")
        }, {
            type: "button",
            name: "edit_select_item_selectAfter",
            hint: "edit_select_item_selectAfter_sub",
            event: () => game.customSelect("after")
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
            max: 1024,
            smallChange: 1,
            bigChange: 4,
            var: [game.pulseHax.editor, "customSnap"],
            display: ()=>game.pulseHax.editor.customSnap,
            update: function() {
                if(game.pulseHax.editor.customSnap === 0) {game.pulseHax.editor.customSnap = 1}
                if(1/game.pulseHax.customSnap === game.snap) {return;}
                game.snap = 1/game.pulseHax.editor.customSnap;
            }
        }, {
            name: "edit_edit_customPlaybackRate",
            hint: "edit_edit_customPlaybackRate_sub",
            type: "number",
            min: 0,
            max: 1000,
            smallChange: .1,
            bigChange: .5,
            var: [game.pulseHax.editor, "customPlaybackRate"],
            display: ()=>game.pulseHax.editor.customPlaybackRate,
            update: function() {
                let playAction = false;
                if(!game.pulseHax.editor.customPlaybackRate) {game.pulseHax.editor.customPlaybackRate = 1}
                if(game.pulseHax.editor.customPlaybackRate === game.playbackRate) {return;}
                if(game.playing) {executePlay(); playAction = true}
                game.pulseHax.editor.customPlaybackRate = Math.round(1000 * game.pulseHax.editor.customPlaybackRate)/1000;
                game.playbackRate = game.pulseHax.editor.customPlaybackRate;
                if(playAction) {executePlay()}
            }
        }, {
            name: "settings_backgroundDim",
            hint: "settings_backgroundDim_sub",
            type: "slider",
            min: 0,
            max: 100,
            step: 1,
            var: [menu.settings, "bgDim"],
            display: ()=>lang("percentage", langSel, menu.settings.bgDim.toFixed(0))
        }, {
            name: "settings_musicVolume",
            hint: "settings_musicVolume_sub",
            type: "slider",
            min: 0,
            max: 100,
            step: 1,
            var: [menu.settings, "musicVolume"],
            display: ()=>lang("percentage", langSel, menu.settings.musicVolume.toFixed(0)),
            update: ()=>lvlHowl[game.song].volume(menu.settings.musicVolume / 100)
        }, {
            name: "settings_hitsoundVolume",
            hint: "settings_hitsoundVolume_sub",
            type: "slider",
            min: 0,
            max: 100,
            step: 1,
            var: [menu.settings, "hitsoundVolume"],
            display: ()=>lang("percentage", langSel, menu.settings.hitsoundVolume.toFixed(0))
        }, {
            name: "mods_hidden",
            hint: "mods_hidden_sub",
            type: "boolean",
            var: [game.mods, "hidden"]
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
                game.pulseHax.editor.beatBuffer = game.selectedBeats.map((x) => game.beat[x])
            }
        }, {
            name: "edit_buffers_pasteBufferedBeats",
            hint: "edit_buffers_pasteBufferedBeats_sub",
            type: "button",
            event: function() {
                if(game.pulseHax.editor.beatBuffer === null) {
                    popupMessage({
                        type: "error",
                        message: "ERR_noBuffer"
                    });
                    return;
                }
                JSON.parse(`${JSON.stringify(game.pulseHax.editor.beatBuffer).replace(/\\/g, '\\\\').replace(/\`/g, '\\\`')}`).forEach((beat) => {
                    beat[1]+=game.time
                    game.beat.push(beat);
                    })
            }
        }]
    }, {
        title: "edit_colorBank",
        items: [{
            type: "color",
            name: `edit_colorBank_${game.pulseHax.editor.colorBank.sel}`,
            hint: "edit_colorBank_sub",
            mode: HSB,
            var: [game.pulseHax.colorBank, game.pulseHax.editor.colorBank.sel],
            hue: [game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel], "color"],
            saturation: [game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel], "saturation"],
            brightness: [game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel], "brightness"],
            after: () => {
                game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel] = {...game.getColorAfterPrompt(), name: game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].name};
            }
        }, {
            name: "edit_colorBank_sel",
            hint: "edit_colorBank_sel_sub",
            type: "dropdown",
            labels: game.pulseHax.editor.colorBank.colorBankLabels,
            options: game.pulseHax.editor.colorBank.colorBankOptions,
            var: [game.pulseHax.editor.colorBank, "sel"],
            after: function() {
                game.refreshColorBank(game.pulseHax.editor.colorBank.sel)
            }
        }, {
            name: "edit_colorBank_fetchCurrent",
            hint: "edit_colorBank_fetchCurrent_sub",
            type: "button",
            event: function() {
                game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel] = {...game.makeColorFormat([game.beatColor, game.beatSaturation, game.beatBrightness]), name: game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].name}
                console.log(game.pulseHax.editor.colorBank.sel)
                game.refreshColorBank(game.pulseHax.editor.colorBank.sel);
            }
        }, {
            name: "edit_colorBank_setCurrent",
            hint: "edit_colorBank_setCurrent_sub",
            type: "button",
            event: function() {
                game.beatColor = game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].color;
                game.beatSaturation = game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].saturation;
                game.beatBrightness = game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].brightness;
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
                game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel] = {...game.makeColorFormat([game.beat[game.selectedBeats[0]][11], game.beat[game.selectedBeats[0]][16], game.beat[game.selectedBeats[0]][17]]), name: game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].name};
                game.refreshColorBank(game.pulseHax.editor.colorBank.sel);
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
                    game.beat[i][11] = game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].color;
                    game.beat[i][16] = game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].saturation;
                    game.beat[i][17] = game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].brightness;
                }
            }
        }, {
            type: "string",
            name: "edit_colorBank_bankName",
            hint: "edit_colorBank_bankName_sub",
            var: [game.pulseHax.editor.colorBank, "name"],
            after: function() {
                if(langs[langSel]["edit_colorBank_" + game.pulseHax.editor.colorBank.name] !== undefined) {
                    popupMessage({
                        type: "error",
                        message: "ERR_duplicateBank"
                    });
                    return;
                }
                if(game.pulseHax.editor.colorBank.name.includes("Color Bank ")) {
                    popupMessage({
                        type: "error",
                        message: "ERR_invalidBankName"
                    });
                    return;
                }
                langs[langSel]["edit_colorBank_" + game.pulseHax.editor.colorBank.name] = game.pulseHax.editor.colorBank.name;
                delete langs[langSel]["edit_colorBank_" + game.pulseHax.editor.colorBank.sel]
                game.pulseHax.editor.colorBank.colorBankLabels[game.pulseHax.editor.colorBank.colorBankLabels.indexOf("edit_colorBank_" + game.pulseHax.editor.colorBank.sel)] = "edit_colorBank_" + game.pulseHax.editor.colorBank.name;
                game.pulseHax.editor.colorBank.colorBankOptions[game.pulseHax.editor.colorBank.colorBankOptions.indexOf(game.pulseHax.editor.colorBank.sel)] = game.pulseHax.editor.colorBank.name;
                game.pulseHax.colorBank[game.pulseHax.editor.colorBank.name] = game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel];
                game.pulseHax.colorBank[game.pulseHax.editor.colorBank.name].name = game.pulseHax.editor.colorBank.name;
                game.extrasNSM.pages[3].items[0].name = "edit_colorBank_" + game.pulseHax.editor.colorBank.name
                delete game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel];
                game.pulseHax.editor.colorBank.sel = game.pulseHax.editor.colorBank.name;
            }
        }, {
            name: "edit_colorBank_addBank",
            hint: "edit_colorBank_addBank_sub",
            type: "button",
            event: function() {
                game.pulseHax.colorBank["Color Bank " + game.pulseHax.colorBanksAdded] = {
                    ...game.makeColorFormat([141, 255, 255]),
                    name: "Color Bank " + game.pulseHax.colorBanksAdded
                };
                game.pulseHax.editor.colorBank.colorBankLabels.push("edit_colorBank_Color Bank " + game.pulseHax.colorBanksAdded)
                langs[langSel]["edit_colorBank_Color Bank " + game.pulseHax.colorBanksAdded] = "Color Bank " + game.pulseHax.colorBanksAdded;
                game.pulseHax.editor.colorBank.colorBankOptions.push("Color Bank " + game.pulseHax.colorBanksAdded);
                game.pulseHax.editor.colorBank.sel = "Color Bank " + game.pulseHax.colorBanksAdded;
                game.refreshColorBank(game.pulseHax.editor.colorBank.sel);
                game.pulseHax.colorBanksAdded++;
            }
        }, {
            name: "edit_colorBank_removeBank",
            hint: "edit_colorBank_removeBank_sub",
            type: "button",
            event: function() {
                if(game.pulseHax.editor.colorBank.colorBankLabels.length <=1) {
                    popupMessage({
                        type: "error",
                        message: "ERR_tooLittleBanks"
                    })
                    return;
                }
                let selNum = game.pulseHax.editor.colorBank.colorBankOptions.indexOf(game.pulseHax.editor.colorBank.sel);
                delete langs[langSel]["edit_colorBank_" + game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel].name];
                game.pulseHax.editor.colorBank.colorBankLabels.splice(selNum, 1)
                game.pulseHax.editor.colorBank.colorBankOptions.splice(selNum, 1)
                delete game.pulseHax.colorBank[game.pulseHax.editor.colorBank.sel];
    
                game.pulseHax.editor.colorBank.sel = game.pulseHax.editor.colorBank.colorBankOptions[selNum === 0 ? selNum : selNum-1];
                game.refreshColorBank(game.pulseHax.editor.colorBank.sel)
            }
        }, {
            type: "button",
            name: "edit_colorBank_export",
            event: function() {
                let zip = new JSZip();
                let response = game.pulseHax.colorBank
                zip.file(`Color Bank.json`, JSON.stringify(response));
                zip.generateAsync({type:"blob",compression: "DEFLATE"}).then(function (blob) {
                const a = document.createElement("a");
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = `${newGrabUser(user.uuid, "uuid").user}'s Color Bank.plsb`;
                a.click();
                URL.revokeObjectURL(url);
                });
            },
            hint: "edit_colorBank_export_sub"
        }, {
            type: "button",
            name: "edit_colorBank_import",
            event: function() {
                colorBankImport.click();
            },
            hint: "edit_colorBank_import_sub"
        }]
    }
    ]);

    game.pulseHaxEditorDraw = function() {
        if(game.shiftTab && !game.menu && game.edit === true && game.editorMode === 0) {
            game.extrasNSM.draw({
                x: 0,
                y: height / 16 * 8/3,
                width: width / 4,
                height: height / 16 * 31/3,
                stacked: !0,
                maxBarHeight: height / 16 / 1.25,
                buffer: height / 16 * 12 / 128
            });
        }
    }

    document.addEventListener("keydown", function(e) {
        if(e.shiftKey && e.code === "Tab") {
            game.shiftTab = !game.shiftTab;
        }
    });
    document.addEventListener("click", function(e) {
        if(game.shiftTab && !game.menu && game.edit === true && game.editorMode === 0 && hitbox("rcorner", 0, height / 16 * 8/3, width / 4, height / 16 * 31/3)) {
            game.extrasNSM.click()
        };
    })
});