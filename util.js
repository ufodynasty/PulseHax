let userSettings = {};
chrome.storage.local.get({Settings:{wave:false,additionalThemes:false,customTheme:false}}, function(result) {
  userSettings = result.Settings;
  Object.keys(userSettings).forEach(function (key){
    if(key == "darkmodetoggle") {
      if(userSettings[key]) {
        document.querySelectorAll("*").forEach(e => e.classList.toggle("dark-mode"));
      }
      return;
    } else {
      let element = document.getElementById(key);
      if(element) {
        if(element.type == "checkbox") {
          element.checked = userSettings[key];
        } else {
          element.value = userSettings[key];
        }
      }
    }
  });
});

function execute(request,responseHandler = () => {}) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {type: "exec", content: request}, function(response) {
      responseHandler(response);
      return false;
    });  
  });
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function rgbToHsv([r,g,b]) {
  let v=Math.max(r,g,b), c=v-Math.min(r,g,b);
  let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); 
  return [(h<0?h+6:h)/6 * 255, (v&&c/v) * 255, v];
}