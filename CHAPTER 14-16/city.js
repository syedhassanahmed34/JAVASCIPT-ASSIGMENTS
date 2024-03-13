//Write a program to initialize an array with city names.
//Copy 3 array elements from cities array to selectedCities
//array.

// Array of city names
let cities = ['rachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

// Array to store selected cities
let selectedCities = [];

// Copy 3 array elements from cities array to selectedCities array
for (let i = 0; i < 3; i++) {
  selectedCities.push(cities[i]);
}

// Display the selected cities
document.write('<h2> Cities:</h2>');
document.write(cities + '<br><br>');
document.write('<h2> Selected Cities:</h2>');
document.write(selectedCities + '<br><br>');