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
        ERR_tooLittleSelected: "Please select at least 2 notes before using Range!",
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
        edit_select: "Selection",
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
        edit_select_noteType_sub: "Filters for beats, holds and anchors",
        edit_select_noteType_any: "Any",
        edit_select_noteType_beat: "Beat",
        edit_select_noteType_hold: "Hold",
        edit_select_noteType_anchor: "Anchor",
        edit_select_chordType: "Chord Type",
        edit_select_chordType_sub: "Chooses how many notes should be in each tick (0 for any)",
        edit_select_snapSelect: "Snap Select",
        edit_select_snapSelect_sub: "Takes an expression a/b and applies it to the snap filter (Leave blank for any)",
        edit_select_selectStreamEnd: "Select Stream End",
        edit_select_selectStreamEnd_sub: "Toggles if the last beat of a stream is selected",
        edit_select_createPracticeDiff: "Create Practice Diff",
        edit_select_createPracticeDiff_sub: "Trims the map to only have the selected notes"
    }; 
    game.pulseHax.dropdownClosed = true;
    game.pulseHax.editor = {
        noteType: "any",
        chordType: 0,
        snapSelect: 0,
        snapSelectDis: "All",
        selectStreamEnd: false,
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
    game.extrasNSM = new newSettingsMenu([{
        title: "edit_select",
        items: [{
            name: "edit_select_noteType",
            hint: "edit_select_noteType_sub",
            type: "dropdown",
            labels: ["edit_select_noteType_any", "edit_select_noteType_beat", "edit_select_noteType_hold", "edit_select_noteType_anchor"],
            options: ["any", "beat", "hold", "anchor"],
            var: [game.pulseHax.editor, "noteType"]
        }, {
            name: "edit_select_chordType",
            hint: "edit_select_chordType_sub",
            type: "number",
            min: 0,
            max: 9,
            smallChange: 1,
            bigChange: 2,
            var: [game.pulseHax.editor, "chordType"],
            update: () => game.pulseHax.editor.chordType = Math.floor(game.pulseHax.editor.chordType)
        }, {
            name: "edit_select_snapSelect",
            hint: "edit_select_snapSelect_sub",
            type: "string",
            allowEmpty: true,
            var: [game.pulseHax.editor, "snapSelectDis"],
            after: function() {
                let splitVer = game.pulseHax.editor.snapSelectDis.split("/");
                game.pulseHax.editor.snapSelect = splitVer[0] / splitVer[1];
                if(isNaN(game.pulseHax.editor.snapSelect) || game.pulseHax.editor.snapSelectDis === "") {
                    game.pulseHax.editor.snapSelectDis = "All";
                    game.pulseHax.editor.snapSelect = 0;
                }
            }
        }, {
            name: "edit_select_selectStreamEnd",
            hint: "edit_select_selectStreamEnd_sub",
            type: "boolean",
            var: [game.pulseHax.editor, "selectStreamEnd"]
        }, {
            type: "button",
            name: "edit_select_item_selectInRange",
            hint: "edit_select_item_selectInRange_sub",
            event: () => game.selectBeats("range", game.pulseHax.editor)
        }, {
            type: "button",
            name: "edit_select_item_selectAll",
            hint: "edit_select_item_selectAll_sub",
            event: () => game.selectBeats("all", game.pulseHax.editor)
        }, {
            type: "button",
            name: "edit_select_item_selectBefore",
            hint: "edit_select_item_selectBefore_sub",
            event: () => game.selectBeats("before", game.pulseHax.editor)
        }, {
            type: "button",
            name: "edit_select_item_selectAfter",
            hint: "edit_select_item_selectAfter_sub",
            event: () => game.selectBeats("after", game.pulseHax.editor)
        }, {
            name: "edit_select_createPracticeDiff",
            hint: "edit_select_createPracticeDiff_sub",
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

    eval(`musicManager.field.draw = ` + musicManager.field.draw.toString().replace(`128})}`, `128})} if(game.editorMode === 0 && game.shiftTab) {
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

game.selectBeats = function(condition, options) {
    if(condition === "current") {
        if(options === "checkCurrent") {
            return game.beat.filter((b) => { 
                if(!game.playing) {
                    return game.timelineTickFor(b[1]) === round(game.timelineTickFor(game.time) / game.snap, 6) * game.snap;
                } else {
                    return game.timelineTickFor(b[1]) <= round(game.timelineTickFor(game.time) / game.snap, 6) * game.snap + game.snap/2 && game.timelineTickFor(b[1]) >= round(game.timelineTickFor(game.time) / game.snap, 6) * game.snap - game.snap/2;
                }
            }
        ).map((b) => game.beat.indexOf(b)).length === 0};
        game.beat.filter((b) => { 
            if(!game.playing) {
                return game.timelineTickFor(b[1]) === round(game.timelineTickFor(game.time) / game.snap, 6) * game.snap;
            } else {
                return game.timelineTickFor(b[1]) <= round(game.timelineTickFor(game.time) / game.snap, 6) * game.snap + game.snap/2 && game.timelineTickFor(b[1]) >= round(game.timelineTickFor(game.time) / game.snap, 6) * game.snap - game.snap/2;
            }
        }
    ).map((b) => game.beat.indexOf(b)).forEach((b) => {
            if(game.selectedBeats.includes(b)) {
                game.selectedBeats.splice(game.selectedBeats.indexOf(b), 1)
            } else {
                game.selectedBeats.push(b)
            }
            game.selectedBeats.sort((a, b) => a-b)
        });
        return true;
    };
    let basicTest = new Function();
    options = options === undefined ? null : options
    switch(condition) {
        case "all":
            basicTest = (() => true);
            break;
        case "before":
            basicTest = ((a, b) => a >= b);
            break;
        case "after":
            basicTest = ((a, b) => a <= b);
            break;
        case "current":
            basicTest = ((a, b) => a === b);
            options = null;
            break;
        case "range":
            basicTest = ((a, b, c) => b >= a - 1/1e6 && b <= c + 1/1e6);
            break;
        default:
            basicTest = (() => true);
            break;
    };
    if(game.selectedBeats.length < 2 && condition === "range") {
        popupMessage({
            type: "error",
            message: "ERR_tooLittleSelected"
        });
        return;
    };
    game.timelineMode = "select";
    function testOptions(options, beat) {
        // Return true if no options are given (specifically for current select which should not take any filters)
        if(options === null) {
            return true;
        };
        // Setting some useful variables
        const beatTime = game.timelineTickFor(beat[1]);
        const currentBeatChord = game.beat.filter((b) => game.timelineTickFor(b[1]) === beatTime);
        const beatToCheck = game.beat[Math.min(...currentBeatChord.map((b) => game.beat.indexOf(b)))];
        // Run checks for note type if it's not all
        if(options.noteType !== "any") {
            const noteType = options.noteType === "beat" ? 0 : options.noteType === "hold" ? 1 : 2;
            // Check for anchors
            if(noteType === 2) {
                let returnValue = false;
                if(beat[5] === 1 && game.beat.filter((b) => b[1] > beat[1] && b[1] < beat[1] + beat[6]).length !== 0) {
                    returnValue = true;
                }
                if(!returnValue) {
                    return false;
                }
            }
            // Check if current beat is a beat (0) or a hold (1). If not, return false
            if(beat[5] !== noteType && noteType !== 2) {
                return false;
            };
        };
        // Run checks for chord type if it's not all
        if(options.chordType !== 0) {
            const chordType = options.chordType;
            // Check if the current tick has a n-chord that matches with chordType. If not, return false
            if(currentBeatChord.length !== chordType) {
                return false;
            };
        };
        // Run checks for snap select if it's not all
        if(options.snapSelect !== 0) {
            const snapSelect = options.snapSelect;
            const successor = game.beat[game.beat.indexOf(beatToCheck)+1];
            const predescescor = game.beat[game.beat.indexOf(beatToCheck)-1];
            // Failsafe
            if(predescescor === undefined || successor === undefined) {return false;}
            else if(predescescor !== undefined && successor !== undefined) {
                // Check for stream end
                if(!options.selectStreamEnd) {
                    if(round(beatTime + snapSelect, 6) !== round(game.timelineTickFor(successor[1]), 6)) {
                        return false;
                    }
                }

                // Check if it is snapped
                if(round(game.timelineTickFor(predescescor[1]) + snapSelect, 6) !== round(beatTime, 6)
                && round(game.timelineTickFor(successor[1]) - snapSelect, 6) !== round(beatTime, 6)) {
                    return false;
                }
            };
        };

        // If everything matches up, return true
        return true;
    };
    const beforeAfter = game.beat.filter((b) => condition === "before" ? b[1] <= game.time + 1/1e6 : b[1] >= game.time - 1/1e6).map((b) => game.beat.indexOf(b))
    var firstSelected = condition === "all" ? 0 : condition === "after" ? beforeAfter[0] : condition === "before" ? beforeAfter[beforeAfter.length - 1] : game.selectedBeats[0];
    var lastSelected = condition === "all" ? game.beat.length-1 : condition === "after" ? beforeAfter[beforeAfter.length - 1] : condition === "before" ? beforeAfter[0] : game.selectedBeats[game.selectedBeats.length - 1];
    if(firstSelected !== undefined && lastSelected !== undefined) {
        const firstBeat = game.beat[firstSelected];
        const lastBeat = game.beat[lastSelected];
        if(firstBeat && lastBeat) {
            var fbTime = game.timelineTickFor(firstBeat[1]);
            var lbTime = game.timelineTickFor(lastBeat[1]);
            for(let note = game.selectedBeats.length = 0; note < game.beat.length; note++) {
                const currentBeat = game.beat[note];
                if(basicTest(condition === "current" ? game.timelineTickFor(game.time) : fbTime, game.timelineTickFor(currentBeat[1]), lbTime)
                    && testOptions(game.pulseHax.editor, currentBeat, note)) {
                    game.selectedBeats.push(note);
                }
            };
        }
    };
};

    document.addEventListener("keydown", function(e) {
        if(e.shiftKey && e.code === "Tab") {
            game.shiftTab = !game.shiftTab;
        }
        if(e.code === "KeyT" && screen === "game" && game.disMode === 1 && game.edit && game.editorMode === 0 && !game.menu) {
            if(game.selectBeats("current", "checkCurrent")) {return;}
            game.timelineMode = "select";
            game.selectBeats("current");
        }
    });
    document.addEventListener("contextmenu", function(e) {
        if(e.button === 2) {
            if(game.selectBeats("current", "checkCurrent")) {return;}
            game.timelineMode = "select";
            game.selectBeats("current")
        }
    });
});