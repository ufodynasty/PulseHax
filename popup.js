import { hslToHex, rgbToHsv } from './util.js';

let userSettings = {};
chrome.storage.sync.get({Settings:{Wave:false,additionalThemes:false,customTheme:{}}}, function(result) {
  userSettings = result.Settings;
  console.log(userSettings);
  Object.keys(userSettings).forEach(function (key){
    if(key == "darkmodetoggle") {
      if(userSettings[key]) {
        document.querySelectorAll("*").forEach(e => e.classList.toggle("dark-mode"));
      }
      return;
    }
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
  execute("response = {ut:ut, v:v, lvlSel:b(mt[ft.lvl.sel], 'id')}", function(response) {
    console.log(response);
    refreshBeatMultiSelect(response);
    refreshRanked(response);
    refreshSkip(response);
    //setTimeout(refresh, 200);
  })
}refresh();

function refreshBeatMultiSelect(response) {
  if(document.getElementById('uBound').max == 0 && response.response.ut.beat.length != 0) {
    document.getElementById('uBound').max = response.response.ut.beat.length - 1;
    document.getElementById('uBound').value = document.getElementById('uBound').max;
    document.getElementById('lBound').value = 0;
    document.getElementById('selectedBeatsMin').innerHTML = response.response.ut.selectedBeats.length > 0 ? `Min Selected:${Math.min(...response.response.ut.selectedBeats)}` : ``;
    document.getElementById('selectedBeatsMax').innerHTML = response.response.ut.selectedBeats.length > 0 ? `Max Selected:${Math.max(...response.response.ut.selectedBeats)}` : ``;
    document.getElementById('qdenom').value = 1/response.response.ut.snap;
  }
  if(document.getElementById('lBound').max != Math.min(document.getElementById('uBound').value,response.response.ut.beat.length - 1)){
    document.getElementById('lBound').max = Math.min(document.getElementById('uBound').value,response.response.ut.beat.length);
  }
  if(document.getElementById('uBound').min != document.getElementById('lBound').value) {
    document.getElementById('uBound').min = document.getElementById('lBound').value;
  }
    
}
function refreshRanked(response){
  document.getElementById("ranked").checked = response.response.lvlSel.ranked;
}
function refreshSkip(response){
  document.getElementById("skipIntro").checked = response.response.ut.skipIntro;
}

document.getElementById("refresh").addEventListener("click", function() {
  refresh();
});

document.getElementById("darkmodetoggle").addEventListener("click", function(e) {
  /*
  This code is my code. There is much code out there that is like it but this one is mine. It may not be the best code
  But this is the one that I wrote that actually worked.
  
  - Musings of a pickle
  
  */
  document.querySelectorAll("*").forEach(e => e.classList.toggle("dark-mode"));
  let ID = e.target.id;
  userSettings[ID] = (userSettings[ID] ? false : true);
  chrome.storage.sync.set({Settings:userSettings}, function() {
    console.log(`${ID} is set to ${userSettings[ID]}`);
  });
});

document.getElementById("ranked").addEventListener("click", function(e) {
  e.preventDefault();
  execute(`mt[ft.lvl.sel]`, function(response) {
    if(typeof response.response == "number") {
      document.getElementById("ranked").checked = !document.getElementById("ranked").checked;
      execute(`b(mt[ft.lvl.sel], "id").ranked = ${document.getElementById("ranked").checked}`);
    }
  });
});
document.getElementById("skipIntro").addEventListener("click", function(e) {
  execute(`ut.skipIntro = ${document.getElementById("skipIntro").checked}`);
});
document.getElementById("additionalThemes").addEventListener("click", function(e) {
  if(e.target.checked) {
    execute(`
      W[gt].theme_gufo = "Gufo's theme";
      W[gt].theme_floopy = "Floopy's theme";
      `
      //W[gt].theme_tbd3 = "tbd3";
      +`ft.settings.menu.pages[1].items[1].options.push(10, 11);
      ft.settings.menu.pages[1].items[1].labels.push('theme_gufo', 'theme_floopy');
    `);
  } else {
    execute(`
      ft.settings.menu.pages[1].items[1].options = ft.settings.menu.pages[1].items[1].options.filter((v,i,a) => {return ![10,11,12].includes(v)});
      ft.settings.menu.pages[1].items[1].labels = ft.settings.menu.pages[1].items[1].labels.filter((v,i,a) => {return !['theme_gufo','theme_floopy','theme_tbd3'].includes(v)});
      ft.settings.themeSel = [10,11,12].includes(ft.settings.themeSel) ? 0 : ft.settings.themeSel;
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
      W[gt].theme_CUSTOM = "Custom theme";
      ft.settings.menu.pages[1].items[1].options.push(13);
      ft.settings.menu.pages[1].items[1].labels.push('theme_CUSTOM');
      ft.settings.themeSel = 13;
    `);
    document.getElementById("customThemeEditor").classList.add("active");
  } else {
    execute(`
      ft.settings.menu.pages[1].items[1].options = ft.settings.menu.pages[1].items[1].options.filter((v,i,a) => {return v != 13});
      ft.settings.menu.pages[1].items[1].labels = ft.settings.menu.pages[1].items[1].labels.filter((v,i,a) => {return v != 'theme_CUSTOM'});
      ft.settings.themeSel = ft.settings.themeSel == 13 ? 0 : ft.settings.themeSel;
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
    Ge[13].${e.target.value}
    `,function(response) {
      let rgb = response.response.levels;
      document.getElementById("cThemeColor").value = `#${rgb[0].toString(16).padStart(2, '0')}${rgb[1].toString(16).padStart(2, '0')}${rgb[2].toString(16).padStart(2, '0')}`
      }
    );
  } else if(e.target.value == "lightTheme") {
    document.getElementById("lightTheme").classList.add("active");
    document.getElementById("lightThemeLabel").classList.add("active");
    document.getElementById("cThemeColor").classList.remove("active");
    execute(`
    Ge[13].lightTheme
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
document.getElementById("cThemeColor").addEventListener("change", function(e) {
if(userSettings.customTheme.active) {
  let color = e.target.value;
  let attribute = document.getElementById("attributes").value;
  if(["main","text","overlayShade","shade","buttonDown","buttonUp","buttonText","textDown","select","modText","scrollbar","checkmark","dropdown"].includes(attribute)) {
    userSettings.customTheme[attribute] = color;
    execute(`
      Ge[13].${attribute} = color(${color.substr(1).match(/../g).map(x=>+`0x${x}`)});
    `)
    chrome.storage.sync.set({Settings:userSettings}, function() {
      console.log(`${attribute} is set to ${userSettings.customTheme[attribute]}`);
    });
  }
}
});
document.getElementById("lightTheme").addEventListener("click", function(e) {
  if(userSettings.customTheme.active) {
    let attribute = document.getElementById("attributes").value;
    let value = e.target.checked;
    if(attribute == "lightTheme") {
      userSettings.customTheme[attribute] = value;
      execute(`
        Ge[13].${attribute} = ${value};
      `)
      chrome.storage.sync.set({Settings:userSettings}, function() {
        console.log(`${attribute} is set to ${userSettings.customTheme[attribute]}`);
      });
    }
  }
});
document.getElementById("customThemeEditorLegend").addEventListener("click", function() {
  document.getElementById("customThemeEditor").children[1].classList.toggle("active");
  let legend = document.getElementById("customThemeEditor").children[0].innerHTML;
  console.log(legend.slice(-1) == "⏶")
  document.getElementById("customThemeEditor").children[0].innerHTML = legend.slice(-1) == "⏷" ? legend.slice(0,-1) + "⏶" : legend.slice(0,-1) + "⏷";
});


document.getElementById("selectInRange").addEventListener("click", function() {
  let ub = document.getElementById("uBound").value;
  let lb = document.getElementById("lBound").value;
  let bValue = document.getElementById('bType').value;
  let chValue = document.getElementById('chType').value;
  let q = 1/4;
  execute(`ut.beat.sort(function (e, t) {return e[1] - t[1]});
  ut.timelineMode = "select";
  ut.selectedBeats = []
  for (let i=${lb}; i <= ${ub}; i++){
    if(${!(bValue == 'bSelect' || chValue == 'chSelect')}) {
      if(${bValue == "beat" ? "!ut.beat[i][5]" : bValue == "hold" ? "ut.beat[i][5]" : "true"}){
        if(${chValue == "quant"}){
          if((i-1 >= 0 && (Math.abs((ut.beat[i][1]-ut.beat[i-1][1])*ut.beat[i][9]/120-${q}) < 10*Number.EPSILON || Math.abs((ut.beat[i][1]-ut.beat[i-1][1])*ut.beat[i][9]/120-${q}) < 10*Number.EPSILON)) || (i+1 < ut.beat.length && (Math.abs((ut.beat[i+1][1]-ut.beat[i][1])*ut.beat[i][9]/120-${q}) < 10*Number.EPSILON || Math.abs((ut.beat[i+1][1]-ut.beat[i][1])*ut.beat[i+1][9]/120-${q}) < 10*Number.EPSILON))) {
            ut.selectedBeats.push(i);
            let j = 1;
            while(i-j >= 0 && ut.beat[i][1] == ut.beat[i-j][1]) {
              ut.selectedBeats.push(i-j);
              j++;
            }
            while(i+1 < ut.beat.length && ut.beat[i][1] == ut.beat[i+1][1]) {
              ut.selectedBeats.push(i+1);
              i++;
            }
          }
        } else {
          if(${(chValue == "1" || chValue == "2") ? "i+1 > ut.beat.length || ut.beat[i][1] != ut.beat[i+1][1]" : chValue == "3+" ? "i+1 < ut.beat.length && ut.beat[i][1] == ut.beat[i+1][1]" : "true"}) {
            if(${chValue == "1" ? "i-1 < 0 || ut.beat[i][1] != ut.beat[i-1][1]" : chValue == "2" ? "i-1 >= 0 && ut.beat[i][1] == ut.beat[i-1][1] && (i-2 < 0 || ut.beat[i][1] != ut.beat[i-2][1])" : chValue == "3+" ? "i-1 >= 0 && ut.beat[i][1] == ut.beat[i-1][1]" : "true"}){
              ut.selectedBeats.push(i);
              ${chValue == "2" || chValue == "3+" ? "ut.selectedBeats.push(i-1);" : ""}
              ${chValue == "3+" ? "ut.selectedBeats.push(i+1);" : ""}
            }
          }
        }
      }
    }
  }
  ut.selectedBeats = [...new Set(ut.selectedBeats)];
  `)
  document.getElementById("uBound").value = document.getElementById("uBound").max
  document.getElementById("lBound").vaule = document.getElementById("lBound").min
});

document.getElementById("deleteSelected").addEventListener("click", function() {
  execute(`
    ut.beat = ut.beat.filter((v,i,a) => {return !ut.selectedBeats.includes(i)})
    ut.selectedBeats = [];
  `)
});

function applyMap(map) {
  execute(`
  let map = [${map}]
  ut.beat.forEach((b,i) => {
    if(ut.selectedBeats.includes(i)) {
      b[0] = map[b[0]]
    }
  })
  `)
}


document.getElementById("flipV").addEventListener("click", function() {
  applyMap([6,7,8,3,4,5,0,1,2])
});
document.getElementById("flipH").addEventListener("click", function() {
  applyMap([2,1,0,5,4,3,8,7,6])
});
document.getElementById("rotateCW").addEventListener("click", function() {
  applyMap([2,5,8,1,4,7,0,3,6])
});
document.getElementById("rotateCCW").addEventListener("click", function() {
  applyMap([6,3,0,7,4,1,8,5,2])
});

document.getElementById("getTBar").addEventListener("click", function() {
  execute(`[ut.beatColor, ut.beatSaturation, ut.beatBrightness]`,function(response){
    if(response.response) {
      document.getElementById(document.getElementById('banks').value).value = hslToHex(response.response[0]*360/255,response.response[1]*100/255,response.response[2]*50/255);
    }
  })
});
document.getElementById("setTBar").addEventListener("click", function() {
  let temp = JSON.stringify(rgbToHsv(document.getElementById(document.getElementById('banks').value).value.substr(1).match(/../g).map(x=>+`0x${x}`)));
  execute(`[ut.beatColor, ut.beatSaturation, ut.beatBrightness] = JSON.parse("${temp}")`)
});
document.getElementById("getSBeat").addEventListener("click", function() {
  execute(`
  if(ut.selectedBeats.length > 0){
    [ut.beat[ut.selectedBeats[0]][11], ut.beat[ut.selectedBeats[0]][16], ut.beat[ut.selectedBeats[0]][17]]
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
  if(ut.selectedBeats.length > 0){
    for(i = 0; i < ut.selectedBeats.length; i++) {
      [ut.beat[ut.selectedBeats[i]][11], ut.beat[ut.selectedBeats[i]][16], ut.beat[ut.selectedBeats[i]][17]] = JSON.parse("${temp}")
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

document.getElementById('chType').onchange = () => {
  if(document.getElementById('chType').value == "quant") {
    document.getElementById("qdiv").classList.add("active");
  } else {
    document.getElementById("qdiv").classList.remove("active");
  }
}