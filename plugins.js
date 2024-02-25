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

let plugins = [];
let pluginsEnd = 0;
chrome.storage.local.get({Plugins:[]}, function(result) {
  plugins = result.Plugins;
  for(i in plugins) {
    createPluginButtons(plugins[i].name,i);
    if(!plugins[i].active) {
      document.getElementById("refreshPlugins").classList.add("active");
      document.getElementById("refreshPluginsWs").classList.remove("active");
    }
  }
})

document.getElementById("pluginImport").addEventListener("click", function() {
  if(!plugins.length) {
    if(confirm("Plugins can damage your profile and compromise account security. Be sure to only add plugins from devs you trust.")) {
      document.getElementById("pluginImportAction").click();
    }
  } else {
    document.getElementById("pluginImportAction").click();
  }
})
document.getElementById("pluginImportAction").addEventListener("change",function() {
  let file = document.getElementById("pluginImportAction").files[0]
  file.text().then(content => {
    createPluginButtons(file.name,plugins.length);
    document.getElementById("refreshPlugins").classList.add("active");
    document.getElementById("refreshPluginsWs").classList.remove("active");
    document.getElementById("pluginImportAction").value = '';
    plugins.push({name:file.name,active:false,script:content});
    chrome.storage.local.set({Plugins:plugins.filter(i => i)});
  })
})

function createPluginButtons(name,index) {
  let pluginManager = document.getElementById("pluginManager");
  let e,e2;
  e = document.createElement("input");
  e.type = "text";
  e.style = "pointer-events:none; width: calc(80%);";
  e.value = name.length <= 22 ? name.substr(0,name.length-3) :  name.substr(0,20) + "..."
  e2 = document.createElement("input");
  e2.type = "button";
  e2.style = "width: calc(15%);";
  e2.value = "X";
  e2.addEventListener("click", function() {
    e.remove();
    e2.remove();
    delete plugins[index];
    document.getElementById("refreshPlugins").classList.add("active");
    document.getElementById("refreshPluginsWs").classList.remove("active");
    chrome.storage.local.set({Plugins:plugins.filter(i => i)});
  })
  if(userSettings.darkmodetoggle) {
    e.classList.toggle("dark-mode");
    e2.classList.toggle("dark-mode");
  }
  pluginManager.appendChild(e);
  pluginManager.appendChild(e2);
}