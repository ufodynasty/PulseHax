const html = document.getElementsByTagName("html")[0];
const themeToggle = document.getElementById("theme-toggle");
const save = document.getElementById("save-popup");
let saveTransCompleted = true;
function savePopup(text) {
    save.innerText = `Saved ${text}!`;
    save.className = "save-popup-show";
    if(saveTransCompleted) {
        saveTransCompleted = false;
        setTimeout(() => {
            save.className = "save-popup-hidden";
            saveTransCompleted = true;
        }, 1000);
    }
};
themeToggle.addEventListener("click", function() {
    userSettings.theme = userSettings.theme === "dark-theme" ? "light-theme" : "dark-theme";
    chrome.storage.local.set({Settings:userSettings}, function() {
        savePopup("Theme");
    });
    html.className = userSettings.theme;
    themeToggle.value = userSettings.theme === "dark-theme" ? "Switch to Light Theme" : "Switch to Dark Theme";
});

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
})

let p = {};
let themeDis = {
    main: [0, 0, 0],
    text: [0, 0, 0],
    overlayShade: [0, 0, 0],
    shade: [0, 0, 0],
    buttonDown: [0, 0, 0],
    buttonUp: [0, 0, 0],
    buttonText: [0, 0, 0],
    textDown: [0, 0, 0],
    select: [0, 0, 0],
    modText: [0, 0, 0],
    scrollbar: [0, 0, 0],
    checkmark: [0, 0, 0],
    dropdown: [0, 0, 0]
};
let clevels = {
    0: {
        title: "Potat",
        author: "TetroGem",
        song: "Potat 2k18",
        artist: "TetroTunes",
        sr: Math.random()*5,
        id: 1,
        bpm: 140,
        fs: 2,
        hw: 2,
        hpd: 15,
        duration: '04:27',
        status: "Unawarded",
        desc: "potat desc"
    },
    1: {
        title: "gay sex",
        author: "regvulcan",
        song: "Processing",
        artist: "TetroTunes",
        sr: Math.random()*5,
        id: 4893,
        bpm: 999,
        fs: 2,
        hw: 2,
        hpd: 15,
        duration: '00:00',
        status: "Unawarded",
        desc: ""
    },
    2: {
        title: "I Love It!",
        author: "mtgufo",
        song: "I Love It",
        artist: "Icona Pop",
        sr: Math.random()*5,
        id: 15797,
        bpm: 126,
        fs: 1,
        hw: 1,
        hpd: 15,
        duration: '00:30',
        status: "Unawarded",
        desc: "Approved patterns only (no soul included)"
    }
}
let csel = 1;
var txtW = {}; //list of all textWidths for each string
var txtPF = ""; //previous font for fitText function
let menu = {
    side: false,
	sideBtn: {
		es: 0.2,
		l1: [0, 0, 25, 0],
		l2: [0, 12.5, 25, 12.5],
		l3: [0, 25, 25, 25],
	},
    buttonHover: [0]
}
let img = {};
let cachedImgs = {};
let sentGetImageReq = {};
let matrix = new Matrix();
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
     ] : [0, 0, 0];
};
function loadAllThemes(theme) {
    for(i in themeDis) {
        themeDis[i][0] += ease(theme[i][0], themeDis[i][0], .25);
        themeDis[i][1] += ease(theme[i][1], themeDis[i][1], .25);
        themeDis[i][2] += ease(theme[i][2], themeDis[i][2], .25);
    };
};
function preload() {
    p.fontRegular = loadFont("assets/font/Pulsus.otf");
    p.fontBold = loadFont("assets/font/Pulsus-Bold.otf");
    p.fontItalic = loadFont("assets/font/Pulsus-Italic.otf");
    p.navItems = ["Menu", "Settings"];
    p.currentWindow = "Menu";
    p.lightTheme = false;
    img = {
        loading: loadImage("https://pulsus.cc/play/client/resources/img/loading.png"),
        bookmark: loadImage("https://pulsus.cc/play/client/resources/img/bookmark.png"),
        online: loadImage("https://pulsus.cc/play/client/resources/img/online.png"),
        ranked: loadImage("https://pulsus.cc/play/client/resources/img/ranked.png"),
        sort: loadImage("https://pulsus.cc/play/client/resources/img/sort.png"),
        searchFor: loadImage("https://pulsus.cc/play/client/resources/img/searchFor.png"),
        new: loadImage("https://pulsus.cc/play/client/resources/img/new.png"),
        refresh: loadImage("https://pulsus.cc/play/client/resources/img/refresh.png"),
        refreshInvert: loadImage("https://pulsus.cc/play/client/resources/img/refreshInvert.png")
    }
};
function setup() {
    p.canvas = createCanvas(windowWidth/2.5, windowWidth/2.5/16*9 /*+ windowWidth / 32*/);
    p.canvas.parent(document.getElementById("p5Canvas"));
};
function draw() {
    let width = windowWidth/2.5;
    let height = windowWidth/2.5/16*9;
    let theme = {
        main: hexToRgb(userTheme.main),
        text: hexToRgb(userTheme.text),
        overlayShade: hexToRgb(userTheme.overlayShade),
        shade: hexToRgb(userTheme.shade),
        buttonDown: hexToRgb(userTheme.buttonDown),
        buttonUp: hexToRgb(userTheme.buttonUp),
        buttonText: hexToRgb(userTheme.buttonText),
        textDown: hexToRgb(userTheme.textDown),
        select: hexToRgb(userTheme.select),
        modText: hexToRgb(userTheme.modText),
        scrollbar: hexToRgb(userTheme.scrollbar),
        checkmark: hexToRgb(userTheme.checkmark),
        dropdown: hexToRgb(userTheme.dropdown),
        lightTheme: userTheme.lightTheme
    };
    background(themeDis.main);
    loadAllThemes(theme)
    if(p.currentWindow === "Menu") {
        menuDraw();
    } else if(p.currentWindow === "Settings") {
        settings();
    }
    nav();
};

function nav() {
    let width = windowWidth/2.5;
    let height = windowWidth/2.5/16*9;
    let theme = {
        main: hexToRgb(userTheme.main),
        text: hexToRgb(userTheme.text),
        overlayShade: hexToRgb(userTheme.overlayShade),
        shade: hexToRgb(userTheme.shade),
        buttonDown: hexToRgb(userTheme.buttonDown),
        buttonUp: hexToRgb(userTheme.buttonUp),
        buttonText: hexToRgb(userTheme.buttonText),
        textDown: hexToRgb(userTheme.textDown),
        select: hexToRgb(userTheme.select),
        modText: hexToRgb(userTheme.modText),
        scrollbar: hexToRgb(userTheme.scrollbar),
        checkmark: hexToRgb(userTheme.checkmark),
        dropdown: hexToRgb(userTheme.dropdown),
        lightTheme: userTheme.lightTheme
    };
    let hoverCheck = false;
    loadAllThemes(theme);
    push();
    /*
    for(i in p.navItems) {
        menuButton(width/p.navItems.length*i, height, width/p.navItems.length, windowWidth/32, p.navItems[i], menu.buttonHover, 100+i)
    };
    */
    pop();
};

function settings() {
    let width = windowWidth/2.5;
    let height = windowWidth/2.5/16*9;
    let theme = {
        main: hexToRgb(userTheme.main),
        text: hexToRgb(userTheme.text),
        overlayShade: hexToRgb(userTheme.overlayShade),
        shade: hexToRgb(userTheme.shade),
        buttonDown: hexToRgb(userTheme.buttonDown),
        buttonUp: hexToRgb(userTheme.buttonUp),
        buttonText: hexToRgb(userTheme.buttonText),
        textDown: hexToRgb(userTheme.textDown),
        select: hexToRgb(userTheme.select),
        modText: hexToRgb(userTheme.modText),
        scrollbar: hexToRgb(userTheme.scrollbar),
        checkmark: hexToRgb(userTheme.checkmark),
        dropdown: hexToRgb(userTheme.dropdown),
        lightTheme: userTheme.lightTheme
    };
    loadAllThemes(theme);
    background(themeDis.main);
    textFont(p.fontRegular);
    noStroke();
    push();
    fill(themeDis.buttonDown)
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth/2.5, windowWidth/2.5/16*9 /*+ windowWidth/32*/);
};

function mouseClicked() {
    let width = windowWidth/2.5;
    let height = windowWidth/2.5/16*9;

    /*
    // Nav
    for(let i in p.navItems) {
        if(hitbox("rcorner", width/p.navItems.length*i, height, width/p.navItems.length, windowWidth/32)) {
            p.currentWindow = p.navItems[i]
        }
    }
    */

    // Header
    if (hitbox("rcorner", height / (16 * 4) - ((height / 128) / 4), height / (16 * 4) - ((height / 128) / 4), height / (16 * 2) + (height / 128 / 2), height / (16 * 2) + (height / 128 / 2))) {
        menu.side = !menu.side;
    };

    // Level sel
    for (let i = 0; i < 3; i++) {
        if(hitbox("rcorner", 0, (height / 16 + height / 24) + (height / 12 * i), width / 3, height / 12)) {
            csel = i;
        }
    }
}

function menuDraw() {
    let width = windowWidth/2.5;
    let height = windowWidth/2.5/16*9;
    let theme = {
        main: hexToRgb(userTheme.main),
        text: hexToRgb(userTheme.text),
        overlayShade: hexToRgb(userTheme.overlayShade),
        shade: hexToRgb(userTheme.shade),
        buttonDown: hexToRgb(userTheme.buttonDown),
        buttonUp: hexToRgb(userTheme.buttonUp),
        buttonText: hexToRgb(userTheme.buttonText),
        textDown: hexToRgb(userTheme.textDown),
        select: hexToRgb(userTheme.select),
        modText: hexToRgb(userTheme.modText),
        scrollbar: hexToRgb(userTheme.scrollbar),
        checkmark: hexToRgb(userTheme.checkmark),
        dropdown: hexToRgb(userTheme.dropdown),
        lightTheme: userTheme.lightTheme
    };
    let bufferSize = width / 64;
    loadAllThemes(theme);
    background(themeDis.main);
    textFont(p.fontRegular);
    noStroke();
    push();

    // Header
    fill(themeDis.shade);
    rect(0, 0, width, ceil(height / 16));

    // Sidebar button
    fill(themeDis.text);
    stroke(themeDis.text);
    strokeWeight((height / (lerp(128, 256, 0.25))));
    menuBtn(height / (16 * 4), height / (16 * 4), menu.side);

    // Pfp
    imageMode(CORNER);
    image(getImage(userData.pp), height / (16), ((height / (16)) - (height / (16 * 1.5))) / 2, height / (16 * 1.5), height / (16 * 1.5));

    // Username
    textAlign(LEFT, CENTER);
    fill(themeDis.text);
    noStroke();
    fitText(`${userData.user} / #${userData.rank} / ${round(userData.performance, 2)}p`, (height / (16)) + (height / (16 * 2)) + (height / (16 * 4)), (height / (16 * 2)), width, (height / (16 * 2)));

    pop();
    
    // Level bar
    rectMode(CORNER);
	fill(themeDis.overlayShade);
	rect(0, height / 16, width / 3, height);
	for (let i = 0; i < 3; i++) {
		let yOffset = (height / 16 + height / 24) + (height / 12 * i);
			push();
			translate(0, yOffset);
			if (csel === i) {
				fill(themeDis.select);
			} else {
				fill(lerpColor(i % 2 !== 0 ? color(...themeDis.shade) : color(...themeDis.overlayShade), color(0, 0, 0), 0.15));
			}
			rect(0, 0, width / 3, height / 12);
            imageMode(CENTER);
            diffCircle(
                (width < height ? width : height) / 16 / 2 + bufferSize / 4, height / 12 / 2, (width < height ? width : height) / 16, (width < height ? width : height) / 16,
                clevels[i].sr, false    
            );
            push();
            translate((width < height ? width : height) / 16 + bufferSize / 4 * 2, 0);
            textAlign(LEFT, CENTER);
            fill(themeDis.text);
            fitText(
                (clevels[i].title),
                0, height / 12 / 4, width / 3 - width / 48 - ((width < height ? width : height) / 16 + bufferSize / 4 * 4), height / 12 / 2 / 1.5, "bold"
            );
            fitText(
                `By ${clevels[i].author}`,
                0, height / 12 / 2 + height / 12 / 16, width / 3 - width / 48 - ((width < height ? width : height) / 16 + bufferSize / 4 * 4), height / 12 / 4 / 1.5
            );
            fitText(
                `Song: ${clevels[i].song} - ${clevels[i].artist}`,
                0, (height / 12 / 2) + (height / 12 / 4), width / 3 - width / 48 - ((width < height ? width : height) / 16 + bufferSize / 4 * 4), height / 12 / 4 / 1.5
            );
            pop();
			pop();
		};
    
    // Top bar buttons
	push();
	fill(30);
	rect(0, height / 16, width / 3 - width / 48, height / 24);
	imageMode(CENTER);
	translate(height / 24 / 2, height / 24 / 2);
	fill(255);
	image(img.bookmark, 0, height / 16, height / 24 / 1.5, height / 24 / 1.5);
	image(img.online, height / 24, height / 16, height / 24 / 1.5, height / 24 / 1.5);
    image(img.ranked, height / 24 * 2, height / 16, height / 24 / 1.5, height / 24 / 1.5);
    image(img.sort, height / 24 * 3, height / 16, height / 24 / 1.5, height / 24 / 1.5);
    image(img.searchFor, height / 24 * 4, height / 16, height / 24 / 1.5, height / 24 / 1.5);
	pop();
    push();
    fill(10);
	rect(height / 24 * 5 , height / 16, width / 3 - width / 48 - height / 24 * 5, height / 24);
	textAlign(LEFT, CENTER)
	fill(255, 255/2);
    // Search box
	fitText("Search", height / 24 * 5 + (height / 24 / 2 / 2), height / 16 + (height / 24 / 2), width / 3 - width / 48 - height / 24 * 5 - (height / 24 / 2), height / 24 / 2, "italics");
    fill(30);
	rect(width / 3 - width / 48, height / 16, width / 48, height);
	// Scroll bar
	fill(themeDis.scrollbar);
	rect(width / 3 - width / 48, (height / 16 + height / 24), width / 48, (height - (height / 16 + height / 24)) / 12);
    fill(255);
	imageMode(CENTER);
	image(img.new, (width / 3) - (width / 48 / 2), height / 16 + (height / 24 / 2), (width / 48 < height / 24 ? width / 48 : height / 24) / 1.5, (width / 48 < height / 24 ? width / 48 : height / 24) / 1.5);
    
    // Extra level box
			fill(0, 25);
    rect(width / 3 + bufferSize, height / 16 + bufferSize, (width / 3 * 2) / 3 * 2 - (bufferSize * 2), ((height - height / 16) / 3) - bufferSize * 2, bufferSize);
    //difficulty
    imageMode(CENTER);
    diffCircle((width / 3 + bufferSize * 2) + ((((((height - height / 16) / 3) - bufferSize * 2) / 2) - bufferSize) / 2), height / 16 + bufferSize * 2 + ((((((height - height / 16) / 3) - bufferSize * 2) / 2) - bufferSize) / 2), ((((height - height / 16) / 3) - bufferSize * 2) / 2) - bufferSize, ((((height - height / 16) / 3) - bufferSize * 2) / 2) - bufferSize, clevels[csel].sr, false, false);
    //title
    fill(themeDis.text);
    textAlign(LEFT, CENTER);
    fitText(clevels[csel].title, (width / 3 + bufferSize * 3) + (((((height - height / 16) / 3) - bufferSize * 2) / 2) - bufferSize), height / 16 + bufferSize * 2 + ((((((height - height / 16) / 3) - bufferSize * 2) / 2) - bufferSize) / 2), (((width / 3 * 2) / 3 * 2 - (bufferSize * 2)) - bufferSize * 3) - ((((((height - height / 16) / 3) - bufferSize * 2) / 2) - bufferSize)), ((((height - height / 16) / 3) - bufferSize * 2) / 2) - bufferSize, "bold");
    //author
    fitText("By " + clevels[csel].author, width / 3 + bufferSize * 2, height / 16 + bufferSize * 2 + ((((height - height / 16) / 3) - bufferSize * 2) / 2), (((width / 3 * 2) / 3 * 2 - (bufferSize * 2)) - bufferSize * 2), ((((height - height / 16) / 3) - bufferSize * 2) / 4) - bufferSize);
    //song
    fitText("Song: " + clevels[csel].artist + " - " + clevels[csel].song,
        width / 3 + bufferSize * 2, height / 16 + bufferSize * 1.5 + ((((height - height / 16) / 3) - bufferSize * 2) / 2) + ((((height - height / 16) / 3) - bufferSize * 2) / 4), (((width / 3 * 2) / 3 * 2 - (bufferSize * 2)) - bufferSize * 2), ((((height - height / 16) / 3) - bufferSize * 2) / 4) - bufferSize);
    fill(0, 25);
    rect((width / 3 + bufferSize) + ((width / 3 * 2) / 3 * 2 - (bufferSize * 2)) + bufferSize, height / 16 + bufferSize, (width / 3 * 2) / 3 - (bufferSize), ((height - height / 16) / 3) - bufferSize * 2, bufferSize);
    // Info
    var bt = 8;
    textAlign(LEFT, CENTER);
    for (var i = 0; i < bt; i++) {
        push();
        fill(themeDis.text)
        let text = "";
        switch (i) {
            case 0:
                text = `ID: ${clevels[csel].id}`
                break;
            case 1:
                text = `BPM: ${round(clevels[csel].bpm*1.1, 2)}`
                fill(themeDis.modText)
                break;
            case 2:
                text = `Foresight: ${clevels[csel].fs}`
                break;
            case 3:
                text = `Hit Window: ${clevels[csel].hw}`
                break;
            case 4:
                text = `HP Drain: ${clevels[csel].hpd}`
                break;
            case 5:
                text = `Length: ${clevels[csel].duration}`
                break;
            case 6:
                text = `Difficulty: ${round(clevels[csel].sr, 2)} Stars`
                break;
            case 7:
                text = clevels[csel].status
                break;
            default:
                break;
        }
        fitText(text, (width / 3 + bufferSize) + ((width / 3 * 2) / 3 * 2 - (bufferSize * 2)) + bufferSize * 2, height / 16 + bufferSize * 1.75 + ((((height - height / 16) / 3) - bufferSize * 4) / bt) * (i + 1) - ((((height - height / 16) / 3) - bufferSize * 3) / bt / 4), ((width / 3 * 2) / 3 - (bufferSize)) - bufferSize * 2, (((height - height / 16) / 3) - bufferSize * 4) / bt);
        
        // Buttons
        menuButton(width / 3 + bufferSize,
            height / 16 + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize,
            ((width / 3 * 2) - bufferSize * 2),
            (((height - height / 16) / 3) / 3 * 2) - bufferSize / 2,
            "Play",
            menu.buttonHover,
            4
        );
        //bookmark button
        menuButton(width / 3 + bufferSize,
            height / 16 + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + ((((height - height / 16) / 3) / 3 * 2)) + bufferSize / 2,
            ((width / 3 * 2) - bufferSize * 4) / 3,
            (((height - height / 16) / 3) / 3) - bufferSize / 2,
            "Bookmark",
            menu.buttonHover,
            5
        );
        //mods button
        menuButton(width / 3 + bufferSize * 2 + (((width / 3 * 2) - bufferSize * 4) / 3),
            height / 16 + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + ((((height - height / 16) / 3) / 3 * 2)) + bufferSize / 2,
            ((width / 3 * 2) - bufferSize * 4) / 3,
            (((height - height / 16) / 3) / 3) - bufferSize / 2,
            "Mods",
            menu.buttonHover,
            10
        );
        //copy button
        menuButton(width / 3 + bufferSize * 3 + (((width / 3 * 2) - bufferSize * 4) / 3) * 2,
            height / 16 + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + ((((height - height / 16) / 3) / 3 * 2)) + bufferSize / 2,
            ((width / 3 * 2) - bufferSize * 4) / 3,
            (((height - height / 16) / 3) / 3) - bufferSize / 2,
            "Copy",
            menu.buttonHover,
            8
        );
        pop();
    }
    // Refresh
    fill(theme.lightTheme ? 0 : 255);
    ellipse((width / 3 + bufferSize) + ((width / 3 * 2) / 3 * 2 - (bufferSize * 2)) + bufferSize + (width / 3 * 2) / 3 - (bufferSize) - bufferSize * 1.5, height / 16 + bufferSize + ((height - height / 16) / 3) - bufferSize * 2 - bufferSize * 1.5, bufferSize * 1.5, bufferSize * 1.5);
    push();
    translate((width / 3 + bufferSize) + ((width / 3 * 2) / 3 * 2 - (bufferSize * 2)) + bufferSize + (width / 3 * 2) / 3 - (bufferSize) - bufferSize * 1.5, height / 16 + bufferSize + ((height - height / 16) / 3) - bufferSize * 2 - bufferSize * 1.5);
    imageMode(CENTER);
    image(theme.lightTheme ? img.refreshInvert : img.refresh, 0, 0, bufferSize * 0.8, bufferSize * 0.8);
    pop();
    // Description & Top score box
    fill(0, 25);
    rect(width / 3 + bufferSize, height / 16 + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize, (width / 3 * 2) - (bufferSize * 2), ((height - height / 16) / 3) - bufferSize * 2, bufferSize);
    // Divider
    fill(themeDis.main);
    rect(width / 3 + bufferSize, height / 16 + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + ((((height - height / 16) / 3) - bufferSize * 2) / 2 - bufferSize / 2 / 2), (width / 3 * 2) - (bufferSize * 2), bufferSize / 2);
    // Description
    fill(themeDis.text);
    textAlign(CENTER, CENTER);
    textSize(bufferSize / 1.25);
    text(clevels[csel].desc === "" ? "No Description" : `"${clevels[csel].desc}"`, (width / 3 * 2) - (((width / 3 * 2) - (bufferSize * 2)) / 2), (height / 16 + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + (((((height - height / 16) / 3) - bufferSize * 2) + (bufferSize / 2 / 2)) / 2) / 2) - ((((((height - height / 16) / 3) - bufferSize * 2) + (bufferSize / 2 / 2)) / 2) / 2) - bufferSize / 2 / 2, (width / 3 * 2) - (bufferSize * 2), (((((height - height / 16) / 3) - bufferSize * 2) + (bufferSize / 2 / 2)) / 2));
    fitText("Not Completed Yet", width / 3 * 2, height / 16 + bufferSize + (((height - height / 16) / 3) - bufferSize * 2) + bufferSize + (((((height - height / 16) / 3) - bufferSize * 2) + (bufferSize / 2 / 2)) / 2) / 2 + (((((((height - height / 16) / 3) - bufferSize * 2) + (bufferSize / 2 / 2)) / 2))), ((width / 3 * 2) - (bufferSize * 5)) - bufferSize * 2, ((((((height - height / 16) / 3) - bufferSize * 2) + (bufferSize / 2 / 2)) / 2)) / 3);
    pop();
};

function hitbox(a, x, y, w, h, mx, my) {
	if (mx === undefined || my === undefined) {
		mx = mouseX;
		my = mouseY;
	}
	if (h < 0) {
		y = y + h;
		h = abs(h);
	}
	if (w < 0) {
		x = x + w;
		w = abs(w);
	}
	if (a === "rcorner") {
		return mx > x && mx < x + w && my > y && my < y + h;
	} else if (a === "rcenter") {
		return mx > x - (w / 2) && mx < x + (w / 2) && my > y - (h / 2) && my < y + (h / 2);
	} else if (a === "ccenter") {
		return (pow(mx - x, 2) / pow(w / 2, 2)) + (pow(my - y, 2) / pow(h / 2, 2)) <= 1;
	} else if (a === "ccorner") {
		return (pow(mx - x - (w / 2), 2) / pow(w / 2, 2)) + (pow(my - y - (h / 2), 2) / pow(h / 2, 2)) <= 1;
	} else if (a === "rcornerP") {
		return pmouseX > x && pmouseX < x + w && pmouseY > y && pmouseY < y + h;
	} else {
		throw ("Undocumented hitbox type: " + a);
	}
};
function ease(a, b, c) {
	if (!isNaN(a) && !isNaN(b)) {
		if (abs(a - b) > 0.00001) {
			c *= 1.2 * (deltaTime / (1000 / 60));
			if (abs(a - b) > 0.00001) {
				var d = (a - b) * c;
				return (b < a && b + d > a) ? (a - b) : ((b > a && b + d < a) ? (a - b) : d);
			} else {
				return a - b;
			}
		}
	}
	return 0;
};
function calcTextWidth(a, t) {
	textFont(p.fontRegular);
	if (txtPF !== t) {
		switch (t) {
			case "italic":
			case "italics":
				textFont(p.fontItalic);
				break;
			case "bold":
				textFont(p.fontBold);
				break;
			default:
				textFont(p.fontRegular);
				break;
		}
		txtPF = t;
	}
	textSize(20);
	if (txtW[a] === undefined) {
		txtW[a] = textWidth(a);
	}
	return txtW[a] === undefined ? 20 : txtW[a];
}
function fitText(txt, posX, posY, fitX, fitY, styleT) {
    textSize(min(20 * fitX / calcTextWidth(txt, styleT), fitY));
    if (textAlign().vertical === "center") {
        posY -= textSize() / 12;
    } else if (textAlign().vertical === "bottom") {
        posY += textSize() / 4.5;
    } else if (textAlign().vertical === "top") {
        posY -= textSize() / 22;
    }
	text(txt, posX, posY);
	textFont(p.fontRegular);
};

function menuBtn(x, y, act) {
	if (act) {
		menu.sideBtn.l1[0] += ease(0, menu.sideBtn.l1[0], menu.sideBtn.es);
		menu.sideBtn.l1[1] += ease(0, menu.sideBtn.l1[1], menu.sideBtn.es);
		menu.sideBtn.l1[2] += ease((height / (16 * 2)), menu.sideBtn.l1[2], menu.sideBtn.es);
		menu.sideBtn.l1[3] += ease((height / (16 * 2)), menu.sideBtn.l1[3], menu.sideBtn.es);
		menu.sideBtn.l2[0] += ease(0, menu.sideBtn.l2[0], menu.sideBtn.es);
		menu.sideBtn.l2[1] += ease((height / (16 * 2)), menu.sideBtn.l2[1], menu.sideBtn.es);
		menu.sideBtn.l2[2] += ease((height / (16 * 2)), menu.sideBtn.l2[2], menu.sideBtn.es);
		menu.sideBtn.l2[3] += ease(0, menu.sideBtn.l2[3], menu.sideBtn.es);
		menu.sideBtn.l3[0] += ease(0, menu.sideBtn.l3[0], menu.sideBtn.es);
		menu.sideBtn.l3[1] += ease((height / (16 * 2)), menu.sideBtn.l3[1], menu.sideBtn.es);
		menu.sideBtn.l3[2] += ease((height / (16 * 2)), menu.sideBtn.l3[2], menu.sideBtn.es);
		menu.sideBtn.l3[3] += ease(0, menu.sideBtn.l3[3], menu.sideBtn.es);
		if (round(menu.sideBtn.l1[3]) === (height / 16 * 2)) {
			menu.sideBtn.l1[0] = 0;
			menu.sideBtn.l1[1] = 0;
			menu.sideBtn.l1[2] = (height / (16 * 2));
			menu.sideBtn.l1[3] = (height / (16 * 2));
			menu.sideBtn.l2[0] = 0;
			menu.sideBtn.l2[1] = (height / (16 * 2));
			menu.sideBtn.l2[2] = (height / (16 * 2));
			menu.sideBtn.l2[3] = 0;
			menu.sideBtn.l3[0] = 0;
			menu.sideBtn.l3[1] = (height / (16 * 2));
			menu.sideBtn.l3[2] = (height / (16 * 2));
			menu.sideBtn.l3[3] = 0;
		}
	} else {
		menu.sideBtn.l1[0] += ease(0, menu.sideBtn.l1[0], menu.sideBtn.es);
		menu.sideBtn.l1[1] += ease(0, menu.sideBtn.l1[1], menu.sideBtn.es);
		menu.sideBtn.l1[2] += ease((height / (16 * 2)), menu.sideBtn.l1[2], menu.sideBtn.es);
		menu.sideBtn.l1[3] += ease(0, menu.sideBtn.l1[3], menu.sideBtn.es);
		menu.sideBtn.l2[0] += ease(0, menu.sideBtn.l2[0], menu.sideBtn.es);
		menu.sideBtn.l2[1] += ease((height / (16 * 4)), menu.sideBtn.l2[1], menu.sideBtn.es);
		menu.sideBtn.l2[2] += ease((height / (16 * 2)), menu.sideBtn.l2[2], menu.sideBtn.es);
		menu.sideBtn.l2[3] += ease((height / (16 * 4)), menu.sideBtn.l2[3], menu.sideBtn.es);
		menu.sideBtn.l3[0] += ease(0, menu.sideBtn.l3[0], menu.sideBtn.es);
		menu.sideBtn.l3[1] += ease((height / (16 * 2)), menu.sideBtn.l3[1], menu.sideBtn.es);
		menu.sideBtn.l3[2] += ease((height / (16 * 2)), menu.sideBtn.l3[2], menu.sideBtn.es);
		menu.sideBtn.l3[3] += ease((height / (16 * 2)), menu.sideBtn.l3[3], menu.sideBtn.es);
		if (round(menu.sideBtn.l1[3]) === 0) {
			menu.sideBtn.l1[0] = 0;
			menu.sideBtn.l1[1] = 0;
			menu.sideBtn.l1[2] = (height / (16 * 2));
			menu.sideBtn.l1[3] = 0;
			menu.sideBtn.l2[0] = 0;
			menu.sideBtn.l2[1] = (height / (16 * 4));
			menu.sideBtn.l2[2] = (height / (16 * 2));
			menu.sideBtn.l2[3] = (height / (16 * 4));
			menu.sideBtn.l3[0] = 0;
			menu.sideBtn.l3[1] = (height / (16 * 2));
			menu.sideBtn.l3[2] = (height / (16 * 2));
			menu.sideBtn.l3[3] = (height / (16 * 2));
		}
	}
	push();
	translate(x, y);
	line(menu.sideBtn.l1[0], menu.sideBtn.l1[1], menu.sideBtn.l1[2], menu.sideBtn.l1[3]);
	line(menu.sideBtn.l2[0], menu.sideBtn.l2[1], menu.sideBtn.l2[2], menu.sideBtn.l2[3]);
	line(menu.sideBtn.l3[0], menu.sideBtn.l3[1], menu.sideBtn.l3[2], menu.sideBtn.l3[3]);
	pop();
}

function toDataURL(url, callback) {
	if (url.match(/^data:image\/[a-zA-Z]+;base64,[a-zA-Z0-9+\/]+$/g)) {
		callback(url);
	} else {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			var reader = new FileReader();
			reader.onloadend = function() {
				callback(reader.result);
			}
			reader.readAsDataURL(xhr.response);
		};
		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.send();
	}
};

function storeGetImage(url, data) {
	cachedImgs[url] = loadImage(data);
};
function getImage(url) {
	if (cachedImgs[url] === undefined) {
		if (sentGetImageReq[url] === undefined) {
			toDataURL(url, function(dataUrl) {
				storeGetImage(url, dataUrl);
			});
			sentGetImageReq[url] = true;
		}
		return img.loading;
	} else {
		return cachedImgs[url];
	}
};

function diffCircle(x, y, w, h, d, r, sp) {
	if (d === undefined || d === null || isNaN(d)) {
		d = -1;
	}
	if (r === undefined || r === null) {
		r = false;
	}
	d = floor(d + 1);
	if (d > 5) {
		d = 5;
	}
	x = round(x);
	y = round(y);
	w = round(w);
	h = round(h);
	ellipseMode(CENTER);
	imageMode(CENTER);
	smooth();
    if (sp) {
        d = -1;
    }
    var inC = color(100, 100, 100);
    var barC = color(255);
    var shadows = true;
    var shadowOff = ceil(w / 25);
    if (r === undefined || r === null) {
        r = false;
    }
    if (r) {
        switch (d) {
            case 1:
                inC = color(75, 175, 255);
                break;
            case 2:
                inC = color(75, 225, 75);
                break;
            case 3:
                inC = color(255, 175, 75);
                break;
            case 4:
                inC = color(255, 75, 75);
                break;
            case 5:
                inC = color(255, 75, 255);
                break;
            case -1:
                inC = color(225, 225, 125);
                break;
        }
    } else {
        switch (d) {
            case 1:
                barC = color(75, 175, 255);
                break;
            case 2:
                barC = color(75, 225, 75);
                break;
            case 3:
                barC = color(255, 175, 75);
                break;
            case 4:
                barC = color(255, 75, 75);
                break;
            case 5:
                barC = color(255, 75, 255);
                break;
            case -1:
                barC = color(225, 225, 125);
                break;
        }
    }
    noStroke();
    fill(255);
    ellipse(x, y, w, h);
    /*fill(0,100);
    ellipse(x+w/50*2,y+w/50*2,w*0.9,h*0.9);*/
    fill(inC);
    ellipse(x, y, w * 0.9, h * 0.9);
    if (d === 1 || d === 3 || d === 5) {
        rectMode(CENTER);
        if (shadows) {
            push();
            translate(shadowOff, shadowOff);
            fill(0, 100);
            rect(x, y, w / 9, h * (4 / 9), w);
            pop();
        }
        fill(barC);
        rect(x, y, w / 9, h * (4 / 9), w);
    }
    if (d === 2 || d === 3 || d === 4 || d === 5) {
        rectMode(CENTER);
        if (shadows) {
            push();
            translate(shadowOff, shadowOff);
            fill(0, 100);
            rect(x - (w / 9) * 1.5, y, w / 9, h * (4 / 14), w);
            rect(x + (w / 9) * 1.5, y, w / 9, h * (4 / 14), w);
            pop();
        }
        fill(barC);
        rect(x - (w / 9) * 1.5, y, w / 9, h * (4 / 14), w);
        rect(x + (w / 9) * 1.5, y, w / 9, h * (4 / 14), w);
    }
    if (d === 4 || d === 5) {
        rectMode(CENTER);
        if (shadows) {
            push();
            translate(shadowOff, shadowOff);
            fill(0, 100);
            rect(x - (w / 9) * 3, y, w / 9, w / 9, w);
            rect(x + (w / 9) * 3, y, w / 9, w / 9, w);
            pop();
        }
        fill(barC);
        rect(x - (w / 9) * 3, y, w / 9, w / 9, w);
        rect(x + (w / 9) * 3, y, w / 9, w / 9, w);
    }
    if (d === -1) {
        rectMode(CENTER);
        if (shadows) {
            push();
            translate(shadowOff, shadowOff);
            if (d !== -1) {
                fill(0, 100);
            } else {
                if (!r) {
                    fill(61, 61, 61);
                } else {
                    fill(lerpColor(inC, color(0, 0, 0), 100 / 255));
                }
            }
            for (var i = 0; i < 3; i++) {
                push();
                translate(x, y);
                rotate(360 / 6 * i);
                rect(0, 0, w / 9, h * (4 / 9), w);
                pop();
            }
            pop();
        }
        fill(barC);
        for (var i = 0; i < 3; i++) {
            push();
            translate(x, y);
            rotate(360 / 6 * i);
            rect(0, 0, w / 9, h * (4 / 9), w);
            pop();
        }
    }
	rectMode(CORNER);
	imageMode(CORNER);
	noStroke();
}

function menuButton(x, y, w, h, t, hl, hlI, extra) {
	if (extra === undefined) {
		extra = {
			discord: false
		};
	}
	if (hl[hlI] === undefined) {
		hl[hlI] = 0;
	}
	if (hitbox("rcenter", x + w / 2 + matrix.get().x, y + h / 2 + matrix.get().y, w, h)) {
		hl[hlI] += ease(1, hl[hlI], 0.2);
	} else {
		hl[hlI] += ease(0, hl[hlI], 0.2);
	}
	push();
	var bufferSize = width / 64;
	var modCheck = false;
	if (t === "Mods") {
		modCheck = true;
	}
	translate(x + w / 2, y + h / 2);
	scale(1 + ((((w + (width < width > height ? width / 64 : height / 64) * 2) / w) - 1) * hl[hlI]));
	rectMode(CENTER);
	if (extra.discord) {
		imageMode(CENTER);
		image(img.discordLogo, 0, 0, w, h);
	} else {
		push();
		translate(cos(30) * (bufferSize / 2) * lerp(0, 1, hl[hlI]), sin(30) * (bufferSize / 2) * lerp(0, 1, -hl[hlI]/2));
		fill(0, 100);
		rect(0, 0, w, h);
		pop();
		if (modCheck) {
			fill(themeDis.modText);
		} else {
			fill(lerpColor(color(...themeDis.buttonDown), color(...themeDis.buttonUp), hl[hlI]));
		}
		rect(0, 0, w, h);
	}
	textAlign(CENTER, CENTER);
	if (modCheck) {
		fill(themeDis.buttonUp);
	} else {
		fill(themeDis.buttonText);
	}
	noStroke();
	fitText(t, 0, 0, w - bufferSize * 2, h / 1.5);
	pop();
}

function MatrixData() {
	return {
		x: 0,
		y: 0,
		w: 1,
		h: 1,
		r: 0
	};
}

function Matrix() {
	this.data = [MatrixData()];
	this.cache = MatrixData();
}
Matrix.prototype.get = function(back) {
	if (back === undefined) {
		back = 0;
	}
	this.cache = MatrixData();
	if (back <= 0) {
		for (var i = 0; i < this.data.length + back; i++) {
			for (var key in this.cache) {
				this.cache[key] += this.data[i][key];
			}
		}
	} else if (back > 0) {
		for (var i = this.data.length - back; i < this.data.length; i++) {
			for (var key in this.cache) {
				this.cache[key] += this.data[i][key];
			}
		}
	}
	return {
		x: this.cache.x,
		y: this.cache.y,
		w: this.cache.w,
		h: this.cache.h,
		r: this.cache.r
	};
}