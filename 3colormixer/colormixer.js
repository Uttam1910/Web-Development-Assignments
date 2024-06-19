function colorMixer(color1, color2) {
    let result;

    // Normalize the input to lowercase to make the function case-insensitive
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            result = "purple";
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            result = "orange";
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            result = "green";
            break;
        default:
            result = "Invalid color combination";
    }

    console.log(result);
}


colorMixer("red", "blue");    // Outputs: purple
colorMixer("blue", "red");    // Outputs: purple
colorMixer("red", "yellow");  // Outputs: orange
colorMixer("yellow", "red");  // Outputs: orange
colorMixer("blue", "yellow"); // Outputs: green
colorMixer("yellow", "blue"); // Outputs: green
colorMixer("green", "blue");  // Outputs: Invalid color combination
