let customTheme = {};
let defaultTheme = {
  main: '#23323c',
  text: '#ffffff',
  overlayShade: '#232d36',
  shade: '#14232d',
  buttonDown: '#f0f0f0',
  buttonUp: '#ffffff',
  buttonText: '#000000',
  textDown: '#c8c8c8',
  select: '#3c3223',
  modText: '#ffaf00',
  scrollbar: '#ffffff',
  lightTheme: !1,
  checkmark: '#00afff',
  dropdown: '#ffffff'

}
chrome.storage.local.get({CustomTheme:defaultTheme}, function(result) {
  customTheme = result.CustomTheme;
  Object.keys(customTheme).forEach(function (key){
    let element = document.getElementById("custom" + key.charAt(0).toUpperCase() + key.slice(1));
    if(element) {
      if(key == "lightTheme") {
        if(!customTheme[key]) {
          element.value = "Dark Theme"
        }
      } else {
        element.value = customTheme[key];
      }
    }
  })
});

document.forms.customTheme.onchange = (e) => {
  let ID = e.target.id.charAt(6).toLowerCase() + e.target.id.slice(7);
  let color = e.target.value
  customTheme[ID] = color;
  execute(`
    Ke[10].${ID} = color(${color.substr(1).match(/../g).map(x=>+`0x${x}`)});
  `)
  chrome.storage.local.set({CustomTheme:customTheme}, function() {
    console.log(`${ID} is set to ${customTheme[ID]}`);
  });
}

document.getElementById("customLightTheme").addEventListener("click", function(e) {
  let toggle = e.target.value != "Light Theme";
  customTheme.lightTheme = toggle;
  execute(`
    Ke[10].lightTheme = ${toggle};
  `)
  e.target.value = toggle ? "Light Theme" : "Dark Theme";
  chrome.storage.local.set({CustomTheme:customTheme}, function() {
    console.log(`lightTheme is set to ${toggle}`);
  });
})

document.getElementById("resetCustomTheme").addEventListener("click", function(e) {
  customTheme = JSON.parse(JSON.stringify(defaultTheme));
  Object.keys(customTheme).forEach(function (key){
    let element = document.getElementById("custom" + key.charAt(0).toUpperCase() + key.slice(1));
    if(key == "lightTheme") {
      if(userSettings.customTheme) {
        execute(`
          Ke[10].${key} = ${customTheme[key]}
        `)
      }
      if(!customTheme[key]) {
        element.value = "Dark Theme"
      }
    } else {
      if(userSettings.customTheme) {
        execute(`
          Ke[10].${key} = color(${customTheme[key].substr(1).match(/../g).map(x=>+`0x${x}`)});
        `)
      }
      element.value = customTheme[key];
    }
  })
  chrome.storage.local.set({CustomTheme:customTheme}, function() {
    console.log("Custom theme reset to classic");
  });
})