function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

// Example usage:
let celsiusTemp = 25;
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp} degrees Celsius is equal to ${fahrenheitTemp} degrees Fahrenheit.`);
