document.querySelectorAll('input[type="color"]').forEach((element) => {
    let id = element.id;
    let display = document.querySelector(`h1[display="${id}"]`);
    element.addEventListener("input", function(event) {
        userTheme[id] = event.target.value;
    });
    element.addEventListener("change", function(event) {
        userTheme[id] = event.target.value;
        chrome.storage.local.set({CustomTheme:userTheme}, function() {
            savePopup(display.innerText);
        });
    });
});
document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
    let id = element.id;
    let display = document.querySelector(`h1[display="${id}"]`);
    element.addEventListener("click", function(event) {
        userTheme[id] = event.target.checked;
        chrome.storage.local.set({CustomTheme:userTheme}, function() {
            savePopup(display.innerText);
        });
    });
});

const resetTheme = document.getElementById("reset-theme");
const importTheme = document.getElementById("import-theme");
const importThemeAction = document.getElementById("import-theme-action");
const exportTheme = document.getElementById("export-theme");
const randomizeTheme = document.getElementById("randomize-theme");
resetTheme.addEventListener("click", function() {
    userTheme = {
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
    };
    document.querySelectorAll('input[type="color"]').forEach((element) => {
        element.value = userTheme[element.id];
    });
    chrome.storage.local.set({CustomTheme:userTheme}, function() {
        savePopup("Theme");
    });
});
importTheme.addEventListener("click", function() {
    importThemeAction.click();
})
importThemeAction.addEventListener("change", function() {
    let zip = new JSZip();
    for(file of importThemeAction.files) {
        if(/.phk$/.exec(file.name)) {
            zip.loadAsync(file).then(function(zip) {
                zip.files[Object.keys(zip.files)[0]].async('string').then(function (fileData) {
                    let vtest = JSON.parse(fileData);
                    if((Object.hasOwn(vtest,"main"))) {
                        userTheme = vtest;
                        document.querySelectorAll('input[type="color"]').forEach((element) => {
                            element.value = vtest[element.id];
                        });
                        chrome.storage.local.set({CustomTheme:userTheme}    )
                        save.innerText = "Imported Theme!";
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
exportTheme.addEventListener("click", function() {
    let zip = new JSZip();
    zip.file(`Custom Theme.json`, JSON.stringify(userTheme));
    zip.generateAsync({type:"blob",compression: "DEFLATE"}).then(function (blob) {
    const a = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = `${userData.user}'s Theme.phk`;
    a.click();
    URL.revokeObjectURL(url);
    });
});
randomizeTheme.addEventListener("click", function() {
    document.querySelectorAll('input[type="color"]').forEach((element) => {
        userTheme[element.id] = "#" + [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        element.value = userTheme[element.id];
    });
    document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
        userTheme[element.id] = !Math.round(Math.random()) 
        element.checked = userTheme[element.id];
    });
    chrome.storage.local.set({CustomTheme:userTheme}, function() {
        savePopup("Theme");
    });
});