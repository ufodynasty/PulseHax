let themes = [];
let themesDis = [];
function fetchThemes() {
	themes = [];
    themesDis = [];
	return new Promise((resolve, reject) => {
	fetch("https://sheets.googleapis.com/v4/spreadsheets/1DCSrdQKkB_EmuK3gtQZfHaY3jfcMo098P_cfUpESz94/values/themes?key=AIzaSyAWzpV8DqAgBZMbELavRkCevakEREU4XEk")
	.then(response => response.json())
	.then(data => {
		for (let i = 1; i < data.values.length; i++) {
			themes.push({
				name: data.values[i][0],
				author: data.values[i][1],
                theme: JSON.parse(data.values[i][2]),
                description: data.values[i][3]
			});
            themesDis.push({
				name: data.values[i][0],
				author: data.values[i][1],
                theme: JSON.parse(data.values[i][2]),
                description: data.values[i][3]
			})
		};
	}).then(themes => {
		resolve(themes);
	})
	});
}
async function init(startup) {
    if(startup) {
        await fetchThemes();
        themesDis.sort((a, b) => {
            var textA = a["name"].toLowerCase();
            var textB = b["name"].toLowerCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    console.log(themes);
    let div = document.getElementById("theme-main");    
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    };
    const loading = document.createElement("h1");
    loading.innerText = "Loading..."
    loading.id = "loading";
    loading.style.display = "none";
    let index = 0
    themesDis.forEach((theme) => {
        const themeDiv = document.createElement("div");
        themeDiv.className = "theme-div";
        themeDiv.id = `theme-div-${index}`
        const themeHeader = document.createElement("div");
        themeHeader.className = "theme-header";
        themeHeader.id = `header-${index}`;
        const themeItems = document.createElement("div");
        themeItems.className = "theme-items";
        themeItems.id = `items-${index}`;
        const name = document.createElement("h1");
        name.className = "name";
        name.innerText = theme.name;
        themeHeader.appendChild(name);
        const author = document.createElement("h1");
        author.className = "author";
        author.innerText = `By ${theme.author}`;
        themeHeader.appendChild(author);
        const description = document.createElement("p");
        description.className = "description";
        description.innerHTML = `"<i>${theme.description}</i>"`;
        themeItems.appendChild(description);
        const previewTheme = document.createElement("input");
        previewTheme.type = "button";
        previewTheme.className = "theme-btn";
        previewTheme.id = `preview-theme-${index}`;
        previewTheme.value = "Preview Theme";
        themeItems.appendChild(previewTheme);
        const applyTheme = document.createElement("input");
        applyTheme.type = "button";
        applyTheme.className = "theme-btn";
        applyTheme.id = `apply-theme-${index}`;
        applyTheme.value = "Apply Theme";
        themeItems.appendChild(applyTheme);
        themeDiv.append(themeHeader, themeItems);
        const downloadTheme = document.createElement("input");
        downloadTheme.type = "button";
        downloadTheme.className = "theme-btn small";
        downloadTheme.id = `download-theme-${index}`;
        downloadTheme.value = "Download Theme";
        themeItems.appendChild(downloadTheme);

        document.getElementById("theme-main").append(themeDiv);
        index++;
        previewTheme.addEventListener("click", function() {
            userTheme = theme.theme;
        })
        applyTheme.addEventListener("click", function() {
            userTheme = theme.theme;
            chrome.storage.local.set({CustomTheme:userTheme}, function() {
                savePopup("Custom Theme");
            });
        })
        downloadTheme.addEventListener("click", function() {
            let zip = new JSZip();
            zip.file(`Custom Theme.json`, JSON.stringify(userTheme));
            zip.generateAsync({type:"blob",compression: "DEFLATE"}).then(function (blob) {
            const a = document.createElement("a");
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = `${theme.name}.phk`;
            a.click();
            URL.revokeObjectURL(url);
            });
        })
    })
};
init(true);

const searchBox = document.getElementById("search");
searchBox.addEventListener("input", function(e) {
    const searchFor = document.getElementById("searchFilter").value;
    const sortBy = document.getElementById("sortBy");
    const search = new RegExp(`${e.target.value.toLowerCase().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}`, "g")
    themesDis = themes.filter(theme => theme[searchFor].toLowerCase().match(search));
    themesDis.sort((a, b) => {
        var textA = a[sortBy.value.split(" ")[0]].toLowerCase();
        var textB = b[sortBy.value.split(" ")[0]].toLowerCase();
        return sortBy.value.split(" ")[1] === "asc" ? (textA < textB) ? -1 : (textA > textB) ? 1 : 0 : (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    });
    init(false);
});

const searchFor = document.getElementById("searchFilter");
searchFor.addEventListener("change", function(e) {
    const search = new RegExp(`^${searchBox.value.toLowerCase()}`, "g")
    themesDis = themes.filter(theme => theme[e.target.value].toLowerCase().match(search));
    init(false)
});

const sortBy = document.getElementById("sortBy");
sortBy.addEventListener("change", function(e) {
    themesDis.sort((a, b) => {
        var textA = a[e.target.value.split(" ")[0]].toLowerCase();
        var textB = b[e.target.value.split(" ")[0]].toLowerCase();
        return e.target.value.split(" ")[1] === "asc" ? (textA < textB) ? -1 : (textA > textB) ? 1 : 0 : (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    });
    init(false);
});