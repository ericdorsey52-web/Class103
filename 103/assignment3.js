// Function to convert temperature
    function convertTemperature(temp, scale) {
      let convertedTemp;
      let resultText = "";
      let resultElement = document.getElementById("result");

      if (scale === "C") {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temp * 9/5) + 32;
        resultText = temp + "°C is equal to " + convertedTemp.toFixed(2) + "°F";
      } else if (scale === "F") {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temp - 32) * 5/9;
        resultText = temp + "°F is equal to " + convertedTemp.toFixed(2) + "°C";
      } else {
        resultText = "Invalid scale. Use 'C' or 'F'.";
      }

      // Display result
      resultElement.innerText = resultText;

      // Extra Challenge: Change color according to temperature
      if (!isNaN(convertedTemp)) {
        if (convertedTemp <= 0) {
          resultElement.style.color = "blue";  // Cold
        } else if (convertedTemp > 0 && convertedTemp < 25) {
          resultElement.style.color = "green"; // Mild
        } else {
          resultElement.style.color = "red";   // Hot
        }
      }
    }

    // Example usage
    convertTemperature(30, "C");  