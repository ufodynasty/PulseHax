import os.path
import re
import pyperclip

def main() -> None:
    print("Starting")
    pulsus_txt = os.path.join(os.path.dirname(os.path.abspath(__file__)), "pulsus.txt")
    file = open(pulsus_txt, "r", encoding="utf8")
    file = file.read()

    def get_variable(search: str = "") -> str:
        is_double = False
        result = re.search(f"..{search}", file)
        if(result == None):
            is_double = True
            result = re.search(f".{search}", file)
            if(result == None):
                raise ValueError(f"Invalid parameter(s) used for ${search}")
        result = result.group(0)
        return result[1 if result[0] == " " or result[0] == "," else 0 : 2 if not is_double else 3]
    
    def get_function(param_length: int = 0, start_search: str = "") -> str:
        is_double = False
        result = re.search(f"..\({','.join(['.' for i in range(param_length)])}\)" + "{" + f"{start_search}", file)
        if(result == None):
            is_double = True
            result = re.search(f".\({','.join(['.' for i in range(param_length)])}\)" + "{" + f"{start_search}", file)
            if(result == None):
                raise ValueError(f"Invalid parameter(s) used for {start_search}")
        result = result.group(0)
        return result[0 if result[0] != " " else 1 : 2 if not is_double else 3]
    names = {
        "calcLevelStars": get_function(1, "if\(!0===.\.local\)"),
        "clevels": get_variable('\[..\.lvl.sel\]'),
        "clickMenu": get_function(0, '\}mouse'),
        "copyLevel": get_function(1, '..\.saved\[..\.saved.length\]=\{\};var .=..\.saved.length-1;..\.saved\[.\]\.local=!0,..\.saved\[.\]\.copy'),
        "copyObject": get_function(1, 'if\(void 0!==.\)return JSON'),
        "drawScreens": get_function(0, '..\(\),"click"'),
        "ease": get_function(3, 'return Number\.isNaN'),
        "editorAction": get_function(1, '"objType"'),
        "executePlay": get_function(0, 'var .=..\.timelineBPM/..\.bpm;!1'),
        "fitText": get_function(6, '..\.n=..'),
        "game": get_variable('\.selectedBeats'),
        "getLevelDownloadState": get_function(1, 'return void 0===.\.newGrabbedLevels'),
        "getObject": get_function(1, 'for\(var .=.\[0\]'),
        "hitbox": get_function(7, 'if\(void 0!==.'),
        "img": get_variable('\.contributorBadge'),
        "lang": get_function(7, '.=.\[..\?"en":.\]'),
        "langList": get_function(1, 'for\(var .="",.'),
        "langSel": get_variable('="en"'),
        "langs": get_variable('\[..\?"en"'),
        "levels": get_variable('\.localOffsets'),
        "loadLevel": get_function(3, 'if\("new"!==.'),
        "loadStartScreens": get_function(0, 'background\(255\);var'),
        "lvlHowl": get_variable('\[..\.lvl\.prevPlay\]'),
        "matrix": get_variable('\.get\(\)\.x'),
        "menu": get_variable('\.lvl\.sel'),
        "menuMusic": get_function(0, 'soundManager.setup\(\{onready'),
        "musicManager": get_function(0, 'var .,.;0===..\.disMode'),
        "nav": get_function(0, 'imageMode\(CORNER\),..'),
        "newGrabLevel": get_function(3, 'var .=\{id:0'),
        "newGrabLevelMeta": get_function(2, 'var .=\{id:0'),
        "newGrabUser": get_function(2, 'var .=\{uuid'),
        "newSettingsMenu": get_function(1, 'for\(var .=0;.<.\.length;.\+\+\)for\(var .=0;.<.\[.\]\.items'),
        "popupMessage": get_function(1, '..\.push\(\{type'),
        "prmpt": get_function(1, 'var .;..\.active'),
        "prmpting": get_variable(' of ..\.beat'),
        "prmptingString": get_variable('\.inp=..\.inp'),
        "promptRes": get_function(1, 'null!==\(.="submit"'),
        "saveGameData": get_function(0, 'localStorage.setItem'),
        "screen": get_variable(',..,..,..,.=..\.newHits'),
        "scrollTimeline": get_function(3, 'var .=..\.timelineBPM/..\.bpm'),
        "server": get_variable('\.userStatus\[.\]\[1\]<.'),
        "theme": get_variable('=\{main'),
        "themes": get_variable('=\[\{main'),
        "toLoad": get_variable('="hidden",.\.finishFade'),
        "user": get_variable('.uuid=.\.uuid\}\)'),
        "welcome": get_variable('\.textA\),textSize\(100\)')
    }
    parameters: str = ""
    for i in names:
        parameters += "Object.defineProperty(globalThis, '" + i + "', {get:()=>{  return  " + names[i] + "  },set:(val)=>{  " + names[i] + "  =val}});" + ("\n" if i != "welcome" else "")
    print(parameters)
    if input("Copy to clipboard?"):
        pyperclip.copy(parameters)

if(__name__ == "__main__"):
    main()