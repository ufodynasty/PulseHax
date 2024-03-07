import os.path
import re
import io
import pyperclip

def main() -> None:
    # Get the .osu file
    osu: str = os.path.join(os.path.dirname(os.path.abspath(__file__)), "osu.txt")
    # Open it
    file = open(osu, "r", encoding="utf8")
    # Read it
    file: str = file.read()
    # Search for the timing points
    file: str = re.search("\[TimingPoints\].*\[Colours\]", file.replace("\n", "placeholder")).group(0).replace("placeholder", "\n")[len("[TimingPoints]"):-len("[Colours]")].strip("\n")
    # Turn it into a list cotaining all the lines (aka each timing point is now a list item)
    file: list[str] = io.StringIO(file).readlines()
    # Strip the \n
    for i in file:
        file[file.index(i)] = i.strip("\n")
    # Check for uninheriteds
    uninherited_points: list[list[str]] = []
    for i in file:
        current_value: list[str] = i.split(",")
        if current_value[-2] == '1': 
            uninherited_points.append([current_value[0], current_value[1]])
    # Filter for bpm changes only
    timing_points: list[list[float]] = []
    for i in uninherited_points:
        current_value: list[str] = i
        previous_value: list[str] = [uninherited_points[uninherited_points.index(current_value) - 1][0], uninherited_points[uninherited_points.index(current_value) - 1][1]] if uninherited_points.index(i) != len(uninherited_points)-1 else ["", ""]
        if previous_value[1] != current_value[1]: 
            timing_points.append([float(current_value[0]), round(60000 / float(current_value[1]), 3)])
    print(f"Fetched {len(timing_points)} bpm change{'s' if len(timing_points) > 1 else ''}...")
    # Write the command for pushing to game.sections
    result: str = ""
    for i in timing_points:
        result += "{" + f"time:{(i[0] - timing_points[0][0]) * 2 / 1000},bpm:{i[1]},offset:{(i[0] - timing_points[0][0])},color:0,saturation:205,brightness:255,name:`{i[1]}BPM`,visible:false" + "}"
        result += "," if timing_points.index(i) != len(timing_points) - 1 else ""
    result = f"game.sections = [{result}]"
    print(result)
    pyperclip.copy(result)

if __name__ == "__main__":
    main()