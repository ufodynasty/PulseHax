document.forms.startup.onchange = (e) => {
  const checked = e.target;
  let ID = e.target.id;
  if (checked.checked) {
    userSettings[ID] = true;
    chrome.storage.local.set({Settings:userSettings}, function() {
      console.log(`${ID} is set to ${userSettings[ID]}`);
    });
  } else {
    userSettings[ID] = false;
    chrome.storage.local.set({Settings:userSettings}, function() {
      console.log(`${ID} is set to ${userSettings[ID]}`);
    });
  }
  return false;
}

document.getElementById("darkmodetoggle").addEventListener("click", function(e) {
  /*
  This code is my code. There is much code out there that is like it but this one is mine. It may not be the best code
  But this is the one that I wrote that actually worked.
  
  - Musings of a pickle
  
  */
  document.querySelectorAll("*").forEach(e => e.classList.toggle("dark-mode"));
  let ID = e.target.id;
  userSettings[ID] = (userSettings[ID] ? false : true);
  chrome.storage.local.set({Settings:userSettings}, function() {
    console.log(`${ID} is set to ${userSettings[ID]}`);
  });
});

function refresh() {
  execute("response = {ut:ut, v:v, Qe:Qe, lvlSel:mt[ft.lvl.sel], onlineLvlSel:w(mt[ft.lvl.sel], 'id')}", function(response) {
    refreshSkip(response);
    refreshSelected(response);
    refreshExport(response);
    refreshCopy(response);
  })
}refresh();

function refreshSkip(response){
  document.getElementById("skipIntro").checked = response.response.ut.skipIntro;
}
function refreshExport(response){
  document.getElementById("lvlExport").disabled = (typeof response.response.lvlSel == "number" || response.response.Qe != "menu");
}
function refreshCopy(response){
  if(typeof response.response.lvlSel == "number") {
    execute(`Io(mt[ft.lvl.sel]) == 2`,(r)=>{
      document.getElementById("lvlCopy").disabled = !r.response || response.response.Qe != "menu";
    })
  } else {;
    document.getElementById("lvlCopy").disabled = !response.response.lvlSel || response.response.Qe != "menu"
  }
}
function refreshSelected(response) {
  if(response.response.lvlSel) {
    let title = typeof response.response.lvlSel  == "number" ? response.response.onlineLvlSel.title : response.response.lvlSel.title;
    let id = typeof response.response.lvlSel  == "number" ? response.response.lvlSel : response.response.lvlSel.copy ? response.response.lvlSel.copy : "Not Uploaded";
    id = id.toString();
    document.getElementById("SelectedId").value = title.length + id.length + 3 <= 25 ? `${title} (${id})` : `${title.substr(0,21-id.length)}... (${id})`;
  }
}

document.getElementById("skipIntro").addEventListener("click", function() {
  execute(`ut.skipIntro = ${document.getElementById("skipIntro").checked}`);
});

document.getElementById("lvlCopy").addEventListener("click", function() {
  execute(`
  if(typeof mt[ft.lvl.sel] == "number"){
    ko(mt[ft.lvl.sel]);
    vt.saved[vt.saved.length-1].stars = un(mt[ft.lvl.sel]);
  } else {
    vt.saved.push(P(mt[ft.lvl.sel]));
    vt.saved[vt.saved.length-1].title += "(copy)";
  }
  if(ft.lvl.tab == 0) {
    vt.search = vt.saved;
  }`
  )
})
document.getElementById("lvlExport").addEventListener("click", function() {
  let zip = new JSZip();
  execute(`mt[ft.lvl.sel]`, function(response) {
    zip.file(`${response.response.title.replace(/[^a-zA-Z0-9 ]/g, '')}.json`, JSON.stringify(response.response));
    zip.generateAsync({type:"blob",compression: "DEFLATE"}).then(function (blob) {
      const a = document.createElement("a");
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = `${response.response.title}.pls`;
      a.click();
      URL.revokeObjectURL(url);
    });
  })
});
document.getElementById("lvlImport").addEventListener("click", function() {
  document.getElementById("lvlImportAction").click();
})
document.getElementById("lvlImportAction").addEventListener("change",function() {
  for(file of document.getElementById("lvlImportAction").files){
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
            execute(`vt.saved.push(${fileData}); vt.search = vt.saved`)
          } else {
            document.getElementById("fileError").classList.add("active");
          }
        })
      });
    } else {
      document.getElementById("fileError").classList.add("active");
    }
  }
})
document.getElementById("additionalThemes").addEventListener("click", function(e) {
  if(e.target.checked) {
    execute(`
      W[gt].theme_gufo = "Gufo's theme";
      W[gt].theme_floopy = "Floopy's theme";
      W[gt].theme_shia = "Shia's theme";
      ft.settings.menu.pages[1].items[1].options.push(10, 11, 12);
      ft.settings.menu.pages[1].items[1].labels.push('theme_gufo', 'theme_floopy', 'theme_shia');
    `);
  } else {
    execute(`
      ft.settings.menu.pages[1].items[1].options = ft.settings.menu.pages[1].items[1].options.filter((v,i,a) => {return ![10,11,12].includes(v)});
      ft.settings.menu.pages[1].items[1].labels = ft.settings.menu.pages[1].items[1].labels.filter((v,i,a) => {return !['theme_gufo','theme_floopy','theme_shia'].includes(v)});
      ft.settings.themeSel = [10,11,12].includes(ft.settings.themeSel) ? 0 : ft.settings.themeSel;
    `)
  }
  let ID = e.target.id;
  userSettings[ID] = e.target.checked;
  chrome.storage.local.set({Settings:userSettings}, function() {
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
  } else {
    execute(`
      ft.settings.menu.pages[1].items[1].options = ft.settings.menu.pages[1].items[1].options.filter((v,i,a) => {return v != 13});
      ft.settings.menu.pages[1].items[1].labels = ft.settings.menu.pages[1].items[1].labels.filter((v,i,a) => {return v != 'theme_CUSTOM'});
      ft.settings.themeSel = ft.settings.themeSel == 13 ? 0 : ft.settings.themeSel;
    `)
  }
  userSettings.customTheme = e.target.checked;
  chrome.storage.local.set({Settings:userSettings}, function() {
    console.log(`Custom Theme is set to ${userSettings.customTheme}`);
  });
});