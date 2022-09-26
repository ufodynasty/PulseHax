import { hslToHex, rgbToHsv } from './util.js';

let userSettings = {};
chrome.storage.sync.get({Settings:{Wave:false,additionalThemes:false,customTheme:{}}}, function(result) {
  userSettings = result.Settings;
  console.log(userSettings);
  Object.keys(userSettings).forEach(function (key){
    let element = document.getElementById(key);
    if(key == "customTheme") {
      element.checked = userSettings.customTheme.active;
      if(element.checked) {
        document.getElementById("customThemeEditor").classList.add("active");
      }
    } else if(element.type == "checkbox") {
      element.checked = userSettings[key];
    } else {
      element.value = userSettings[key];
    }
  });
});

document.forms.startup.onchange = testsync;
function testsync(e) {
  const checked = e.target;
  let ID = e.target.id;
  if (checked.checked) {
    userSettings[ID] = true;
    chrome.storage.sync.set({Settings:userSettings}, function() {
      console.log(`${ID} is set to ${userSettings[ID]}`);
    });
  } else {
    userSettings[ID] = false;
    chrome.storage.sync.set({Settings:userSettings}, function() {
      console.log(`${ID} is set to ${userSettings[ID]}`);
    });
  }
  return false;
}

function execute(request,func = () => {}) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {payload: request}, function(response) {
      func(response);
      return false;
    });  
  });
  
}

function refresh() {
  execute("response = {zt:zt, Te:Te, lvlSel:bo(Pt[Et.lvl.sel], 'id')}", function(response) {
    refreshBeatMultiSelect(response);
    refreshRanked(response);
    refreshSkip(response);
    //setTimeout(refresh, 200);
  })
}refresh();

//This code is my code. There is much code out there that is like it but this one is mine. It may not be the best code
//but this is the one that I wrote that actually worked.
function darkmodetoggle() {
  let DarkHeaderToggle = document.getElementById("pain");
  DarkHeaderToggle.classList.toggle("header-dark-mode");
  document.querySelectorAll("*:not(.pain)").forEach(e => e.classList.toggle("dark-mode"));
}

function refreshBeatMultiSelect(response) {
  if(document.getElementById('uBound').max == 0 && response.response.zt.beat.length != 0) {
    document.getElementById('uBound').max = response.response.zt.beat.length - 1;
    document.getElementById('uBound').value = document.getElementById('uBound').max;
    document.getElementById('lBound').value = 0;
  }
  if(document.getElementById('lBound').max != Math.min(document.getElementById('uBound').value,response.response.zt.beat.length - 1)){
    document.getElementById('lBound').max = Math.min(document.getElementById('uBound').value,response.response.zt.beat.length);
  }
  if(document.getElementById('uBound').min != document.getElementById('lBound').value) {
    document.getElementById('uBound').min = document.getElementById('lBound').value;
  }
    
}
function refreshRanked(response){
  document.getElementById("ranked").checked = response.response.lvlSel.ranked;
}
function refreshSkip(response){
  document.getElementById("skipIntro").checked = response.response.zt.skipIntro;
}

document.getElementById("refresh").addEventListener("click", function() {
  refresh();
});

document.getElementById("darkmodetoggle").addEventListener("click", function() {
  darkmodetoggle();
});

document.getElementById("ranked").addEventListener("click", function(e) {
  e.preventDefault();
  execute(`Pt[Et.lvl.sel]`, function(response) {
    if(typeof response.response == "number") {
      document.getElementById("ranked").checked = !document.getElementById("ranked").checked;
      execute(`bo(Pt[Et.lvl.sel],"id").ranked = ${document.getElementById("ranked").checked}`);
    }
  });
});
document.getElementById("skipIntro").addEventListener("click", function(e) {
  execute(`zt.skipIntro = ${document.getElementById("skipIntro").checked}`);
});
document.getElementById("additionalThemes").addEventListener("click", function(e) {
  if(e.target.checked) {
    execute(`
      T[Ct].theme_gufo = "Gufo's theme";
      T[Ct].theme_tbd2 = "tbd2";
      T[Ct].theme_tbd3 = "tbd3";
      Et.settings.menu.pages[1].items[1].options.push(10,11,12);
      Et.settings.menu.pages[1].items[1].labels.push('theme_gufo','theme_tbd2','theme_tbd3');
    `);
  } else {
    execute(`
      Et.settings.menu.pages[1].items[1].options = Et.settings.menu.pages[1].items[1].options.filter((v,i,a) => {return ![10,11,12].includes(v)});
      Et.settings.menu.pages[1].items[1].labels = Et.settings.menu.pages[1].items[1].labels.filter((v,i,a) => {return !['theme_gufo','theme_tbd2','theme_tbd3'].includes(v)});
      Et.settings.themeSel = [10,11,12].includes(Et.settings.themeSel) ? 0 : Et.settings.themeSel;
    `)
  }
  let ID = e.target.id;
  userSettings[ID] = e.target.checked;
  chrome.storage.sync.set({Settings:userSettings}, function() {
  console.log(`${ID} is set to ${userSettings[ID]}`);
  });
});
document.getElementById("customTheme").addEventListener("click", function(e) {
  if(e.target.checked) {
    execute(`
      T[Ct].theme_CUSTOM = "Custom Theme";
      Et.settings.menu.pages[1].items[1].options.push(13);
      Et.settings.menu.pages[1].items[1].labels.push('theme_CUSTOM');
      Et.settings.themeSel = 13;
    `);
    document.getElementById("customThemeEditor").classList.add("active");
  } else {
    execute(`
      Et.settings.menu.pages[1].items[1].options = Et.settings.menu.pages[1].items[1].options.filter((v,i,a) => {return v != 13});
      Et.settings.menu.pages[1].items[1].labels = Et.settings.menu.pages[1].items[1].labels.filter((v,i,a) => {return v != 'theme_CUSTOM'});
      Et.settings.themeSel = Et.settings.themeSel == 13 ? 0 : Et.settings.themeSel;
    `)
    document.getElementById("customThemeEditor").classList.remove("active");
  }
  userSettings.customTheme.active = e.target.checked;
  chrome.storage.sync.set({Settings:userSettings}, function() {
    console.log(`Custom Theme is set to ${userSettings.customTheme.active}`);
  });
});
document.getElementById("attributes").addEventListener("change", function(e) {
  if(["main","text","overlayShade","shade","buttonDown","buttonUp","buttonText","textDown","select","modText","scrollbar","checkmark","dropdown"].includes(e.target.value)) {
    document.getElementById("cThemeColor").classList.add("active");
    document.getElementById("lightTheme").classList.remove("active");
    document.getElementById("lightThemeLabel").classList.remove("active");
    execute(`
    Le[13].${e.target.value}
    `,function(response) {
      let rgb = response.response.levels;
      console.log(rgb);
        document.getElementById("cThemeColor").value = `#${rgb[0].toString(16).padStart(2, '0')}${rgb[1].toString(16).padStart(2, '0')}${rgb[2].toString(16).padStart(2, '0')}`
      }
    );
  } else if(e.target.value == "lightTheme") {
    document.getElementById("lightTheme").classList.add("active");
    document.getElementById("lightThemeLabel").classList.add("active");
    document.getElementById("cThemeColor").classList.remove("active");
    execute(`
    Le[13].lightTheme
    `,function(response) {
        document.getElementById("lightTheme").checked = response.response;
      }
    );
  } else {
    document.getElementById("cThemeColor").classList.remove("active");
    document.getElementById("lightTheme").classList.remove("active");
    document.getElementById("lightThemeLabel").classList.remove("active");
  }
});
document.getElementById("cThemeColor").addEventListener("change", function() {
if(userSettings.customTheme.active) {
  let color = document.getElementById("cThemeColor").value;
  let attribute = document.getElementById("attributes").value;
  if(["main","text","overlayShade","shade","buttonDown","buttonUp","buttonText","textDown","select","modText","scrollbar","checkmark","dropdown"].includes(attribute)) {
    userSettings.customTheme[attribute] =  color;
    execute(`
      Le[13].${attribute} = color(${color.substr(1).match(/../g).map(x=>+`0x${x}`)});
    `)
  }
}
})


document.getElementById("selectInRange").addEventListener("click", function() {
  let ub = document.getElementById("uBound").value;
  let lb = document.getElementById("lBound").value;
  let bValue = document.getElementById('bType').value;
  let chValue = document.getElementById('chType').value;

  execute(`zt.beat.sort(function (e, t) {return e[1] - t[1]});
  zt.timelineMode = "select";
  zt.selectedBeats = []
  for (i=${lb}; i <= ${ub}; i++){
    if(${!(bValue == 'bSelect' || chValue == 'chSelect')}) {
      if(${(chValue == "1" || chValue == "2") ? "i+1 < zt.beat.length || zt.beat[i][1] != zt.beat[i+1][1]" : chValue == "3+" ? "i+1 < zt.beat.length && zt.beat[i][1] == zt.beat[i+1][1]" : "true"}) {
        if(${(chValue == "2" || chValue == "3+") ? "i > 0 && zt.beat[i][1] == zt.beat[i-1][1]" : chValue == "1" ? "i > 0 && zt.beat[i][1] != zt.beat[i-1][1]" : "true"}){
          if(${bValue == "beat" ? "!zt.beat[i][5]" : bValue == "hold" ? "zt.beat[i][5]" : "true"}){
            zt.selectedBeats.push(i);
            ${chValue == "2" || chValue == "3+" ? "zt.selectedBeats.push(i-1);" : ""}
            ${chValue == "3+" ? "zt.selectedBeats.push(i+1);" : ""}
            }
          }
        }
      }
    }
  `)
  document.getElementById("uBound").value = document.getElementById("uBound").max
  document.getElementById("lBound").vaule = document.getElementById("lBound").min
});

document.getElementById("deleteSelected").addEventListener("click", function() {
  execute(`
    zt.beat = zt.beat.filter((v,i,a) => {return !zt.selectedBeats.includes(i)})
    zt.selectedBeats = [];
  `)
});

document.getElementById("getTBar").addEventListener("click", function() {
  execute(`[zt.beatColor, zt.beatSaturation, zt.beatBrightness]`,function(response){
    if(response.response) {
      document.getElementById(document.getElementById('banks').value).value = hslToHex(response.response[0]*360/255,response.response[1]*100/255,response.response[2]*50/255);
    }
  })
});
document.getElementById("setTBar").addEventListener("click", function() {
  let temp = JSON.stringify(rgbToHsv(document.getElementById(document.getElementById('banks').value).value.substr(1).match(/../g).map(x=>+`0x${x}`)));
  execute(`[zt.beatColor, zt.beatSaturation, zt.beatBrightness] = JSON.parse("${temp}")`)
});
document.getElementById("getSBeat").addEventListener("click", function() {
  execute(`
  if(zt.selectedBeats.length > 0){
    [zt.beat[zt.selectedBeats[0]][11], zt.beat[zt.selectedBeats[0]][16], zt.beat[zt.selectedBeats[0]][17]]
  }
    `,function(response){
    if(response.response) {
      document.getElementById(document.getElementById('banks').value).value = hslToHex(response.response[0]*360/255,response.response[1]*100/255,response.response[2]*50/255);
    }
  })
});
document.getElementById("setSBeat").addEventListener("click", function() {
  let temp = JSON.stringify(rgbToHsv(document.getElementById(document.getElementById('banks').value).value.substr(1).match(/../g).map(x=>+`0x${x}`)));
  execute(`
  if(zt.selectedBeats.length > 0){
    for(i = 0; i < zt.selectedBeats.length; i++) {
      [zt.beat[zt.selectedBeats[i]][11], zt.beat[zt.selectedBeats[i]][16], zt.beat[zt.selectedBeats[i]][17]] = JSON.parse("${temp}")
    }
  }
  `)
});

document.forms.colors.onchange = (e) => {
  let ID = e.target.id;
  userSettings[ID] = e.target.value;
  chrome.storage.sync.set({Settings:userSettings}, function() {
    console.log(`${ID} is set to ${userSettings[ID]}`);
  });
}