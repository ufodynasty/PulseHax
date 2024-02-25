let userTheme = {};
chrome.storage.local.get({CustomTheme: {
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
}}, function(response) {
    userTheme = response.CustomTheme;
    Object.keys(userTheme).forEach((key) => {
        let element = document.getElementById(key);
        if(element !== null) {
            if(element.type === "checkbox") {
                element.checked = userTheme[key];
            }
            if(element.type === "color") {
                element.value = userTheme[key];
            }
        }
    });
});