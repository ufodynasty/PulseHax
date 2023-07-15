let Buffers = {};
chrome.storage.local.get({Buffers:{beat:[],effect:[],section:[]}}, function(result) {
  Buffers = result.Buffers;
  if(Buffers.beat.length != 0) {
    document.getElementById("beatBuffPaste").value = `Paste Beats (${Buffers.beat.length})`;
    document.getElementById("beatBuffFull").classList.add("active");
  } else {
    document.getElementById("beatBuffEmpty").classList.add("active");
  }
  if(Buffers.effect.length != 0) {
    document.getElementById("effectBuffPaste").value = `Paste Effects (${Buffers.effect.length})`;
    document.getElementById("effectBuffFull").classList.add("active");
  } else {
    document.getElementById("effectBuffEmpty").classList.add("active");
  }
  if(Buffers.section.length != 0) {
    document.getElementById("sectionBuffPaste").value = `Paste Bookmarks (${Buffers.section.length})`;
    document.getElementById("sectionBuffFull").classList.add("active");
  } else {
    document.getElementById("sectionBuffEmpty").classList.add("active");
  }
});

function refresh() {
  execute(`Ot.beat.sort(function (e, t) {return e[1] - t[1]});
    Ot.effects.sort(function(e, t) {return e.time - t.time});
    response = {Ot, Te, we}`, function(response) {
      refreshBounds(response);
      refreshDisabled(response);
  })
}refresh()

function refreshBounds(response) {
  if(((response.response.Ot.editorMode == 0 && response.response.Ot.beat.length != 0) || (response.response.Ot.editorMode == 1 && response.response.Ot.effects.length != 0))) {
    if(response.response.Ot.editorMode == 0) {
      document.getElementById('uBound').max = response.response.Ot.beat.length - 1;
      uBoundMax = response.response.Ot.beat.length - 1;
      document.getElementById('uBound').value = document.getElementById('uBound').max;
      document.getElementById('lBound').value = 0;
      document.getElementById('qdenom').value = 1/response.response.Ot.snap;
    } else {
      document.getElementById('uBound').max = response.response.Ot.effects.length - 1;
      uBoundMax = response.response.Ot.effects.length - 1;
      document.getElementById('uBound').value = document.getElementById('uBound').max;
      document.getElementById('lBound').value = 0;
    }
    
  } else {
    document.getElementById('uBound').min = 0;
    document.getElementById('lBound').min = 0;
    document.getElementById('uBound').max = 0;
    document.getElementById('lBound').max = 0;
    document.getElementById('uBound').value = "";
    document.getElementById('lBound').value = "";
  }
  if(response.response.Ot.editorMode == 0 && response.response.Ot.selectedBeats.length != 0) {
    document.getElementById('selectedBeatsMin').value = Math.min(...response.response.Ot.selectedBeats);
    document.getElementById('selectedBeatsMax').value = Math.max(...response.response.Ot.selectedBeats);
  } else if(response.response.Ot.editorMode == 1 && response.response.Ot.effectMultiSel.length != 0){
    document.getElementById('selectedBeatsMin').value = Math.min(...response.response.Ot.effectMultiSel);
    document.getElementById('selectedBeatsMax').value = Math.max(...response.response.Ot.effectMultiSel);
  } else {
    document.getElementById('selectedBeatsMin').value = "";
    document.getElementById('selectedBeatsMax').value = "";
  }
  if(!response.response.Ot.edit) {
    document.getElementById('uBound').value = "";
    document.getElementById('lBound').value = "";
  }
}

function refreshDisabled(response) {
  let edit = !response.response.Ot.edit || response.response.we != "game";
  let editorMode = response.response.Ot.editorMode == 1;
  if(editorMode) {
    document.getElementById('bType').value = "all";
    document.getElementById('chType').value = "all";
  }
  document.getElementById('bType').disabled = editorMode || edit;
  document.getElementById('chType').disabled = editorMode || edit;
  let selectedBeats = response.response.Ot.selectedBeats.length == 0;
  document.getElementById('flipV').disabled = selectedBeats || edit;
  document.getElementById('flipH').disabled = selectedBeats || edit;
  document.getElementById('rotateCW').disabled = selectedBeats || edit;
  document.getElementById('rotateCCW').disabled = selectedBeats || edit;
  document.getElementById('createPracticeDiff').disabled = selectedBeats || edit;
  document.getElementById('getSBeat').disabled = selectedBeats || edit;
  document.getElementById('setSBeat').disabled = selectedBeats || edit;
  document.getElementById('beatBuff').disabled = selectedBeats || edit;
  let selectedEffects = response.response.Ot.effectMultiSel.length == 0;
  document.getElementById('effectBuff').disabled = selectedEffects || edit;
  let sections = response.response.Ot.sections.length == 0;
  document.getElementById('sectionBuff').disabled = sections || edit;
  document.getElementById('beatBuffPaste').disabled = edit;
  document.getElementById('effectBuffPaste').disabled =  edit;
  document.getElementById('sectionBuffPaste').disabled = edit;
  document.getElementById('deleteSelected').disabled = (selectedBeats && selectedEffects) || edit
  document.getElementById('selectInRange').disabled = (response.response.Ot.beat.length == 0 && !editorMode) || (response.response.Ot.effects.length == 0 && editorMode) || edit;
  document.getElementById('uBound').disabled = edit;
  document.getElementById('lBound').disabled = edit;
  document.getElementById('banks').disabled = edit;
  document.getElementById('getTBar').disabled = edit;
  document.getElementById('setTBar').disabled = edit;
}


document.getElementById("selectInRange").addEventListener("click", function() {
  let ub = document.getElementById("uBound").value;
  let lb = document.getElementById("lBound").value;
  let bValue = document.getElementById('bType').value;
  let chValue = document.getElementById('chType').value;
  let q = document.getElementById('qnum').value/document.getElementById('qdenom').value;
  if(!(bValue == 'bSelect' || chValue == 'chSelect')) {
    execute(`Ot.beat.sort(function (e, t) {return e[1] - t[1]});
    Ot.timelineMode = "select";
    if(Ot.editorMode == 0) {
      Ot.selectedBeats = []
      for (let i=${lb}; i <= ${ub}; i++){
        if(${bValue == "beat" ? "!Ot.beat[i][5]" : bValue == "hold" ? "Ot.beat[i][5]" : "true"}){
          if(${chValue == "quant"}){
            if((i-1 >= 0 && (Math.abs((Ot.beat[i][1]-Ot.beat[i-1][1])*Ot.beat[i][9]/120-${q}) < 1e-10 || Math.abs((Ot.beat[i][1]-Ot.beat[i-1][1])*Ot.beat[i-1][9]/120-${q}) < 1e-10)) || (i+1 < Ot.beat.length && (Math.abs((Ot.beat[i+1][1]-Ot.beat[i][1])*Ot.beat[i][9]/120-${q}) < 1e-10 || Math.abs((Ot.beat[i+1][1]-Ot.beat[i][1])*Ot.beat[i+1][9]/120-${q}) < 1e-10))) {
              Ot.selectedBeats.push(i);
              let j = 1;
              while(i-j >= 0 && Ot.beat[i][1] == Ot.beat[i-j][1]) {
                Ot.selectedBeats.push(i-j);
                j++;
              }
              while(i+1 < Ot.beat.length && Ot.beat[i][1] == Ot.beat[i+1][1]) {
                Ot.selectedBeats.push(i+1);
                i++;
              }
            }
          } else {
            if(${(chValue == "1" || chValue == "2") ? "i+1 >= Ot.beat.length || Ot.beat[i][1] != Ot.beat[i+1][1]" : chValue == "3+" ? "i+1 < Ot.beat.length && Ot.beat[i][1] == Ot.beat[i+1][1]" : "true"}) {
              if(${chValue == "1" ? "i-1 < 0 || Ot.beat[i][1] != Ot.beat[i-1][1]" : chValue == "2" ? "i-1 >= 0 && Ot.beat[i][1] == Ot.beat[i-1][1] && (i-2 < 0 || Ot.beat[i][1] != Ot.beat[i-2][1])" : chValue == "3+" ? "i-1 >= 0 && Ot.beat[i][1] == Ot.beat[i-1][1]" : "true"}){
                Ot.selectedBeats.push(i);
                ${chValue == "2" || chValue == "3+" ? "Ot.selectedBeats.push(i-1);" : ""}
                ${chValue == "3+" ? "Ot.selectedBeats.push(i+1);" : ""}
              }
            }
          }
        }
      }
      Ot.selectedBeats = [...new Set(Ot.selectedBeats)];
    } else {
      Ot.effectMultiSel = []
      for (let i=${lb}; i <= ${ub}; i++){
        Ot.effectMultiSel.push(i);
      }
    }
    `)
  }
  refresh();
});

document.getElementById("deleteSelected").addEventListener("click", function() {
  execute(`
    if(Ot.editorMode == 0) {
      Ot.beat = Ot.beat.filter((v,i,a) => {return !Ot.selectedBeats.includes(i)})
      Ot.selectedBeats = [];
    } else {
      Ot.effects = Ot.effects.filter((v,i,a) => {return !Ot.effectMultiSel.includes(i)})
      Ot.effectMultiSel = [];
    }
  `)
  refresh();
});

/*

  yooo im 0.2% of pulsehax now - Shia whose code I borrowed here

*/
document.getElementById("createPracticeDiff").addEventListener("click", function() {
  execute(`
  Ot.songOffset = Math.round(Ot.songOffset + (Ot.beat[Math.min(...Ot.selectedBeats)][1] * 500))
  Ot.time = Ot.beat[Math.min(...Ot.selectedBeats)][1]
  Ot.beat = Ot.beat.slice(Math.min(...Ot.selectedBeats),Math.max(...Ot.selectedBeats)+1)
  Ot.selectedBeats = []
  for (beat of Ot.beat) {
    beat[1] -= Ot.time
  }
  for (section of Ot.sections) {
    section.time -= Ot.time
  }
  for (effect of Ot.effects) {
    effect.time -= Ot.time
  }

  Ot.time = 0
  `)
  refresh();
})

function applyMap(map) {
  execute(`
  let map = [${map}]
  Ot.beat.forEach((b,i) => {
    if(Ot.selectedBeats.includes(i)) {
      b[0] = map[b[0]]
    }
  })
  `)
}


document.getElementById("flipV").addEventListener("click", function() {
  applyMap([6,7,8,3,4,5,0,1,2])
  refresh()
});
document.getElementById("flipH").addEventListener("click", function() {
  applyMap([2,1,0,5,4,3,8,7,6])
  refresh()
});
document.getElementById("rotateCW").addEventListener("click", function() {
  applyMap([2,5,8,1,4,7,0,3,6])
  refresh()
});
document.getElementById("rotateCCW").addEventListener("click", function() {
  applyMap([6,3,0,7,4,1,8,5,2])
  refresh()
});

/*
  haha, i have no idea what i'm doing!
  - axye
*/
document.getElementById("customSnapDiv").addEventListener("change", function() {
  let div = document.getElementById("customSnapDiv").value;
  execute(`
    Ot.snap = 1 / ${div}
    `)
  refresh();
})

document.getElementById("customSpd").addEventListener("change", function() {
  let rate = document.getElementById("customSpd").value;
  execute(`
  Ot.playbackRate = ${rate}
  `)
  refresh();
})

document.getElementById("beatBuff").addEventListener("click", function() {
  execute(`Ot.selectedBeats.map((x) => Ot.beat[x])`,function(response) {
    Buffers.beat = response.response;
    document.getElementById("beatBuffPaste").value = `Paste Beats (${Buffers.beat.length})`;
    document.getElementById("beatBuffEmpty").classList.remove("active");
    document.getElementById("beatBuffFull").classList.add("active");
    chrome.storage.local.set({Buffers:Buffers});
  })
})
document.getElementById("beatBuffPaste").addEventListener("click", function() {
  execute(`
    JSON.parse(\`${JSON.stringify(Buffers.beat).replace(/\\/g, '\\\\').replace(/\`/g, '\\\`')}\`).forEach((beat) => {
    Ot.beat.push(beat);
  })`)
  Buffers.beat = [];
  document.getElementById("beatBuffFull").classList.remove("active");
  document.getElementById("beatBuffEmpty").classList.add("active");
  document.getElementById("beatBuffPaste").value = ``;
  chrome.storage.local.set({Buffers:Buffers});
  refresh();
})
document.getElementById("beatBuffClear").addEventListener("click", function() {
  Buffers.beat = [];
  document.getElementById("beatBuffFull").classList.remove("active");
  document.getElementById("beatBuffEmpty").classList.add("active");
  document.getElementById("beatBuffPaste").value = ``;
  chrome.storage.local.set({Buffers:Buffers});
})

document.getElementById("effectBuff").addEventListener("click", function() {
  execute(`Ot.effectMultiSel.map((x) => Ot.effects[x])`,function(response) {
    Buffers.effect = response.response;
    document.getElementById("effectBuffPaste").value = `Paste Effectss (${Buffers.effect.length})`;
    document.getElementById("effectBuffEmpty").classList.remove("active");
    document.getElementById("effectBuffFull").classList.add("active");
    chrome.storage.local.set({Buffers:Buffers});
  })
})
document.getElementById("effectBuffPaste").addEventListener("click", function() {
  execute(`
    JSON.parse(\`${JSON.stringify(Buffers.effect).replace(/\\/g, '\\\\').replace(/\`/g, '\\\`')}\`).forEach((effect) => {
      Ot.effects.push(effect);
    })
  `)
  Buffers.effect = [];
  document.getElementById("effectBuffFull").classList.remove("active");
  document.getElementById("effectBuffEmpty").classList.add("active");
  document.getElementById("effectBuffPaste").value = ``;
  chrome.storage.local.set({Buffers:Buffers})
  refresh();
})
document.getElementById("effectBuffClear").addEventListener("click", function() {
  Buffers.effect = [];
  document.getElementById("effectBuffFull").classList.remove("active");
  document.getElementById("effectBuffEmpty").classList.add("active");
  document.getElementById("effectBuffPaste").value = ``;
  chrome.storage.local.set({Buffers:Buffers});
})

document.getElementById("sectionBuff").addEventListener("click", function() {
  execute(`Ot.sections`,function(response) {
    Buffers.section = response.response;
    document.getElementById("sectionBuffPaste").value = `Paste Bookmarks (${Buffers.section.length})`;
    document.getElementById("sectionBuffEmpty").classList.remove("active");
    document.getElementById("sectionBuffFull").classList.add("active");
    chrome.storage.local.set({Buffers:Buffers});
  })
})
document.getElementById("sectionBuffPaste").addEventListener("click", function() {
  execute(`
    JSON.parse(\`${JSON.stringify(Buffers.section).replace(/\\/g, '\\\\').replace(/\`/g, '\\\`')}\`).forEach((section) => {
      Ot.sections.push(section);
    })
  `)
  Buffers.section = [];
  document.getElementById("sectionBuffFull").classList.remove("active");
  document.getElementById("sectionBuffEmpty").classList.add("active");
  document.getElementById("sectionBuffPaste").value = ``;
  chrome.storage.local.set({Buffers:Buffers});
  refresh();
})
document.getElementById("sectionBuffClear").addEventListener("click", function() {
  Buffers.section = [];
  document.getElementById("sectionBuffFull").classList.remove("active");
  document.getElementById("sectionBuffEmpty").classList.add("active");
  document.getElementById("sectionBuffPaste").value = ``;
  chrome.storage.local.set({Buffers:Buffers});
})

document.getElementById("getTBar").addEventListener("click", function() {
  execute(`[Ot.beatColor, Ot.beatSaturation, Ot.beatBrightness]`,function(response){
    if(response.response) {
      document.getElementById(document.getElementById('banks').value).value = hslToHex(response.response[0]*360/255,response.response[1]*100/255,response.response[2]*50/255);
      userSettings[document.getElementById('banks').value] = document.getElementById(document.getElementById('banks').value).value;
      chrome.storage.local.set({Settings:userSettings}, function() {
        console.log(`${document.getElementById('banks').value} is set to ${userSettings[document.getElementById('banks').value]}`);
      });
    }
  })
});
document.getElementById("setTBar").addEventListener("click", function() {
  let temp = JSON.stringify(rgbToHsv(document.getElementById(document.getElementById('banks').value).value.substr(1).match(/../g).map(x=>+`0x${x}`)));
  execute(`[Ot.beatColor, Ot.beatSaturation, Ot.beatBrightness] = JSON.parse("${temp}")`)
});
document.getElementById("getSBeat").addEventListener("click", function() {
  execute(`
  if(Ot.selectedBeats.length > 0){
    [Ot.beat[Ot.selectedBeats[0]][11], Ot.beat[Ot.selectedBeats[0]][16], Ot.beat[Ot.selectedBeats[0]][17]]
  }
    `,function(response){
    if(response.response) {
      document.getElementById(document.getElementById('banks').value).value = hslToHex(response.response[0]*360/255,response.response[1]*100/255,response.response[2]*50/255);
      userSettings[document.getElementById('banks').value] = document.getElementById(document.getElementById('banks').value).value;
      chrome.storage.local.set({Settings:userSettings}, function() {
        console.log(`${document.getElementById('banks').value} is set to ${userSettings[document.getElementById('banks').value]}`);
      });
    }
  })
});
document.getElementById("setSBeat").addEventListener("click", function() {
  let temp = JSON.stringify(rgbToHsv(document.getElementById(document.getElementById('banks').value).value.substr(1).match(/../g).map(x=>+`0x${x}`)));
  execute(`
  if(Ot.selectedBeats.length > 0){
    for(i = 0; i < Ot.selectedBeats.length; i++) {
      [Ot.beat[Ot.selectedBeats[i]][11], Ot.beat[Ot.selectedBeats[i]][16], Ot.beat[Ot.selectedBeats[i]][17]] = JSON.parse("${temp}")
    }
  }
  `)
});

document.forms.colors.onchange = (e) => {
  let ID = e.target.id;
  userSettings[ID] = e.target.value;
  chrome.storage.local.set({Settings:userSettings}, function() {
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