// 6. The Temperature Converter: It’s hot out! Let’s make a
 //converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

function convertCelsiusToFahrenheit() {
    var celsius = document.getElementById('celsius').value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('celsiusToFahrenheit').innerHTML = celsius + "°C is " + fahrenheit + "°F";
  }
  
  function convertFahrenheitToCelsius() {
    var fahrenheit = document.getElementById('fahrenheit').value;
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('fahrenheitToCelsius').innerHTML = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
  }