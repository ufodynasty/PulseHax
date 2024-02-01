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
  execute("response = {game, user, screen, lvlSel: clevels[menu.lvl.sel], onlineLvlSel: newGrabLevelMeta(clevels[menu.lvl.sel], 'id')}", function(response) {
    refreshSelected(response);
    refreshExport(response);
    refreshCopy(response);
  })
}refresh();

// function refreshMute(response){
//   document.getElementById("disableMenuMusic").checked = response.response.game.disableMenuMusic;
// }
function refreshExport(response){
  document.getElementById("lvlExport").disabled = (!response.response.lvlSel || typeof response.response.lvlSel == "number" || response.response.screen != "menu");
}
function refreshCopy(response){
  if(typeof response.response.lvlSel == "number") {
    execute(`getLevelDownloadState(clevels[menu.lvl.sel]) == 2`,(r)=>{
      document.getElementById("lvlCopy").disabled = !r.response || response.response.screen != "menu";
    })
  } else {;
    document.getElementById("lvlCopy").disabled = !response.response.lvlSel || response.response.screen != "menu"
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

// Feature removed in V 0.6.1 due to gamma 0.28.12 including a menu music volume option

// document.getElementById("disableMenuMusic").addEventListener("click", function() {
//   execute(`
//   game.disableMenuMusic = ${document.getElementById("disableMenuMusic").checked}
//   if(game.disableMenuMusic) {
//     soundManager.stop("menuMusic")
//   } else {
//     menuMusic()
//   }
//   `);
// });

document.getElementById("lvlCopy").addEventListener("click", function() {
  execute(`
  if(typeof clevels[menu.lvl.sel] == "number"){
    copyLevel(clevels[menu.lvl.sel]);
    levels.saved[levels.saved.length-1].stars = calcLevelStars(clevels[menu.lvl.sel]);
  } else {
    levels.saved.push(copyObject(clevels[menu.lvl.sel]));
    levels.saved[levels.saved.length-1].title += "(copy)";
  }
  if(menu.lvl.tab == 0) {
    levels.search = levels.saved;
  }`
  )
})
document.getElementById("lvlExport").addEventListener("click", function() {
  let zip = new JSZip();
  execute(`clevels[menu.lvl.sel]`, function(response) {
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
            execute(`levels.saved.push(${fileData}); levels.search = levels.saved`)
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