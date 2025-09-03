// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Example usage:
let celsius = 25; // you can change this value
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(celsius + "°C is equal to " + fahrenheit + "°F");

// Store the temperature in Celsius
    let temperature = 30; // you can change this value

    // Convert Celsius to Fahrenheit
    let fahrenheit = (temperature * 9/5) + 32;

    // Display in the console
    console.log(temperature + "°C is " + fahrenheit + "°F");

    // Display in the HTML
    document.getElementById("result").innerText = 
      temperature + "°C is equal to " + fahrenheit + "°F";