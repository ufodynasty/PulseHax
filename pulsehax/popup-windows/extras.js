document.addEventListener("FetchLocalStorage", function() {
    document.getElementById("preferredFSEnabled").value = userSettings.preferredFSEnabled
    document.querySelectorAll('input[type="range"]').forEach((element) => {
        let id = element.id;
        let numberField = document.querySelector(`.inline-field[target="${id}"]`);
        let label = document.querySelector(`label[for="${id}"]`);
        element = document.getElementById(id);
        numberField.value = element.value;
        element.addEventListener("input", function(event) {
            event.target.style.setProperty('--r', (360 + 11.25) / 100 * event.target.value + 'deg');
            numberField.value = event.target.value;
            userSettings[id] = event.target.value;
        });
        element.addEventListener("mouseup", function(event) {
        chrome.storage.local.set({Settings:userSettings}, function() {
            savePopup(label.getAttribute("display"));
            execute(`${element.getAttribute("game-value")} = ${userSettings[id]}`);
            let valueArg;
            execute(`
                valueArg = 
                    ${element.getAttribute("game-value")} === menu.PHSettings.changeTab ? menu.PHSettings.changeTab
                    : null;
            `, function(response) {
                valueArg = response.response;
                refreshValue(element.id, valueArg);
            });
            });
        });
    });
    document.querySelectorAll(`.inline-field`).forEach((element) => {
        let targetID = element.getAttribute("target");
        let targetElement = document.getElementById(targetID);
        let label = document.querySelector(`label[for="${targetID}"]`);
        element = document.getElementById(element.id);
        element.addEventListener("change", function(event) {
            if(event.target.value === "") {
                event.target.value = targetElement.value;
            }
            else {
                event.target.value = Math.round(Math.max(0, Math.min(event.target.value, 100)));
                document.querySelector(`.inline-field[target="${targetID}"]`).value = event.target.value;
                userSettings[targetElement.id] = event.target.value;
                targetElement.style.setProperty('--r', (360 + 11.25) / 100 * event.target.value + 'deg');
                targetElement.value = event.target.value;
                chrome.storage.local.set({Settings:userSettings}, function() {
                    savePopup(label.getAttribute("display"));
                    execute(`${element.getAttribute("game-value")} = ${userSettings[id]}`);
                    let valueArg;
                    execute(`
                        valueArg = 
                            ${element.getAttribute("game-value")} === menu.PHSettings.changeTab ? menu.PHSettings.changeTab
                            : null;
                    `, function(response) {
                        valueArg = response.response;
                        refreshValue(element.id, valueArg);
                    });
                    });
                }
        });
    });
    document.querySelectorAll("[disable-target]").forEach((checkbox) => {
        const targetValue = checkbox.getAttribute("disable-target");
        const targetElement = document.getElementById(targetValue);
        targetElement.disabled = !checkbox.checked;
    });
});
document.querySelectorAll('input[type="number"][complementary="false"]').forEach((element) => {
    let id = element.id;
    let label = document.querySelector(`label[for="${id}"]`);
    element = document.getElementById(id);
    let min = element.getAttribute("min");
    let max = element.getAttribute("max");
    element.addEventListener("change", function(event) {
        element.value = element.value === "" ? "" : element.getAttribute("round") === true ? Math.round(Math.max(min, Math.min(event.target.value, max))) : Math.max(min, Math.min(event.target.value, max));
        userSettings[id] = element.value;
        chrome.storage.local.set({Settings:userSettings}, function() {
            savePopup(label.getAttribute("display"));
            execute(`${element.getAttribute("game-value")} = ${userSettings[id]}`);
            let valueArg;
            execute(`
                valueArg = 
                    ${element.getAttribute("game-value")} === menu.PHSettings.changeTab ? menu.PHSettings.changeTab
                    : null;
            `, function(response) {
                valueArg = response.response;
                refreshValue(element.id, valueArg);
            });
        });
    });
});
document.querySelectorAll('input[type="checkbox"], input[type="text"]').forEach((element) => {
    let id = element.id;
    let label = document.querySelector(`label[for="${id}"]`);
    element = document.getElementById(id);
    let isCheckbox = element.type === "checkbox";
    element.addEventListener(isCheckbox ? "click" : "change", function(event) {
        userSettings[id] = isCheckbox ? event.target.checked : event.target.value;
        chrome.storage.local.set({Settings:userSettings}, function() {
            savePopup(label.getAttribute("display"));
            execute(`${element.getAttribute("game-value")} = ${isCheckbox ? userSettings[id] : '"' + userSettings[id] + '"'}`);
            let valueArg;
            execute(`
                valueArg = 
                    ${element.getAttribute("game-value")} === menu.PHSettings.changeTab ? menu.PHSettings.changeTab
                    : null;
            `, function(response) {
                valueArg = response.response;
                refreshValue(element.id, valueArg);
            });
        });
        console.log(element.getAttribute("disable-target"))
        console.log(element)
        if(element.getAttribute("disable-target") !== null) {
            document.getElementById(element.getAttribute("disable-target")).disabled = !event.target.checked;
        }
    });
});

const copyMap = document.getElementById("copy-map");
const exportMap = document.getElementById("export-map");
const importMap = document.getElementById("import-maps-display");
const importMapAction = document.getElementById("import-maps");

execute("response = {screen, lvlSel: clevels[menu.lvl.sel]}", function(response) {
    exportMap.disabled = (!response.response.lvlSel || typeof response.response.lvlSel == "number" || response.response.screen != "menu");
    if(typeof response.response.lvlSel == "number") {
        execute(`getLevelDownloadState(clevels[menu.lvl.sel]) == 2`,(r)=>{
            copyMap.disabled = !r.response || response.response.screen != "menu";
    })
    } else {
        copyMap.disabled = !response.response.lvlSel || response.response.screen != "menu";
    };
});

copyMap.addEventListener("click", function() {
    execute(`
        if(typeof clevels[menu.lvl.sel] == "number") {
            copyLevel(clevels[menu.lvl.sel]);
            levels.saved[levels.saved.length-1].stars = calcLevelStars(clevels[menu.lvl.sel]);
        } else {
            levels.saved.push(copyObject(clevels[menu.lvl.sel]));
            levels.saved[levels.saved.length-1].title = "Copy of " + levels.saved[levels.saved.length-1].title;
        }
        if(menu.lvl.tab == 0) {
        levels.search = levels.saved;
        }
    `);
});


exportMap.addEventListener("click", function() {
    let zip = new JSZip();
    execute(`clevels[menu.lvl.sel]`, function(response) {
        zip.file(`${response.response.title.replace(/[^a-zA-Z0-9 ]/g, '')}.json`, JSON.stringify(response.response));
        zip.generateAsync({type:"blob",compression: "DEFLATE"}).then(function (blob) {
            const a = document.createElement("a");
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = `${response.response.title}.phz`;
            a.click();
            URL.revokeObjectURL(url);
        });
    });
});
importMap.addEventListener("click", function() {
    importMapAction.click();
});
importMapAction.addEventListener("change",function() {
    for(file of importMapAction.files) {
        let zip = new JSZip();
        if(/\.pls$|\.phz$/.exec(file.name)) {
            zip.loadAsync(file).then(function(zip) {
                zip.files[Object.keys(zip.files)[0]].async('string').then(function (fileData) {
                    let vtest = JSON.parse(fileData);
                    if((Object.hasOwn(vtest,"beat") && Object.hasOwn(vtest,"effects"))) {
                        execute(`levels.saved.push(${fileData}); levels.search = levels.saved`);
                        save.innerText = "Imported Map!";
                        save.className = "save-popup-show success";
                        if(saveTransCompleted) {
                            saveTransCompleted = false;
                            setTimeout(() => {
                                save.className = "save-popup-hidden success";
                                saveTransCompleted = true;
                            }, 1000);
                        }
                    } else {
                        save.innerText = `Invalid .${file.name.split(".")[file.name.split(".").length-1]} file`;
                        save.className = "save-popup-show error";
                        if(saveTransCompleted) {
                            saveTransCompleted = false;
                            setTimeout(() => {
                                save.className = "save-popup-hidden error";
                                saveTransCompleted = true;
                            }, 1000);
                        }
                    }
                });
            });
        } else {
            save.innerText = `Invalid File Extension ".${file.name.split(".")[file.name.split(".").length-1]}"`;
            save.className = "save-popup-show error";
            if(saveTransCompleted) {
                saveTransCompleted = false;
                setTimeout(() => {
                    save.className = "save-popup-hidden error";
                    saveTransCompleted = true;
                }, 1000);
            }
        }
    }
});

const exportSettings = document.getElementById("export-settings");
const importSettings = document.getElementById("import-settings-display");
const importSettingsAction = document.getElementById("import-settings");

importSettings.addEventListener("click", function() {
    importSettingsAction.click();
});
exportSettings.addEventListener("click", function() {
    let zip = new JSZip();
    execute(`JSON.parse(localStorage.getItem("pulsusGammaSettings"))`, function(response) {
      zip.file(`settings.json`, JSON.stringify(response.response));
      zip.generateAsync({type:"blob",compression: "DEFLATE"}).then(function (blob) {
        const a = document.createElement("a");
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = `settings.phs`;
        a.click();
        URL.revokeObjectURL(url);
      });
    })
});

importSettingsAction.addEventListener("change", function() {
    for(file of importSettingsAction.files) {
        if(/\.phs$/.exec(file.name)) {
            let zip = new JSZip();
            zip.loadAsync(file).then(function(zip) {
                zip.files[Object.keys(zip.files)[0]].async('string').then(function (fileData) {
                    fileData = JSON.parse(fileData);
                    for(i in fileData) {
                        execute(`
                        menu.settings["${i}"] = ${typeof fileData[i] === "string" ? '"' + fileData[i] + '"' : fileData[i]}
                        `);
                    }
                });
                save.innerText = "Loaded Settings!";
                save.className = "save-popup-show success";
                if(saveTransCompleted) {
                    saveTransCompleted = false;
                    setTimeout(() => {
                        save.className = "save-popup-hidden success";
                        saveTransCompleted = true;
                    }, 1000);
                }
            });
        } else {
            save.innerText = `Invalid File Extension "${file.name.split(".")[file.name.split(".").length-1]}"`;
            save.className = "save-popup-show error";
            if(saveTransCompleted) {
                saveTransCompleted = false;
                setTimeout(() => {
                    save.className = "save-popup-hidden error";
                    saveTransCompleted = true;
                }, 1000);
            }
        }
    }
});