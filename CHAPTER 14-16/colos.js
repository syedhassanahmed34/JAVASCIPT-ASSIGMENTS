//Initialize an array with color names. Display the array
//elements in your browser.
//a. Ask the user what color he/she wants to add to the
//beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
//b. Ask the user what color he/she wants to add to the end
//& add that color to the end of the array. Display the
//updated array in your browser.
//c. Add two more color to the beginning of the array.
//Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated
//array in your browser.
//e. Delete the last color in the array. Display the updated
//array in your browser.
//f. Ask the user at which index he/she wants to add a color
//& color name. Then add the color to desired
//position/index. . Display the updated array in your
//browser.
//g. Ask the user at which index he/she wants to delete
//color(s) & how many colors he/she wants to delete. Then

//Arrays | JAVASCRIPT

//Page 3 of 6
//remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your
//browser.

// Array of color names
let colorNames = ['red', 'blue', 'green', 'yellow', 'orange'];

// Display the initial array
document.write('<h2>Initial Array:</h2>');
document.write(colorNames + '<br><br>');

// Add color to the beginning of the array
let colorToAddToBeginning = prompt('Enter a color to add to the beginning of the array:');
colorNames.unshift(colorToAddToBeginning);
document.write('<h2>Array after adding color to the beginning:</h2>');
document.write(colorNames + '<br><br>');

// Add color to the end of the array
let colorToAddToEnd = prompt('Enter a color to add to the end of the array:');
colorNames.push(colorToAddToEnd);
document.write('<h2>Array after adding color to the end:</h2>');
document.write(colorNames + '<br><br>');

// Add two colors to the beginning of the array
colorNames.unshift('purple', 'pink');
document.write('<h2>Array after adding two colors to the beginning:</h2>');
document.write(colorNames + '<br><br>');

// Delete the first color in the array
colorNames.shift();
document.write('<h2>Array after deleting the first color:</h2>');
document.write(colorNames + '<br><br>');

// Delete the last color in the array
colorNames.pop();
document.write('<h2>Array after deleting the last color:</h2>');
document.write(colorNames + '<br><br>');

// Add color to a user-defined position/index
let indexToAddColor = prompt('Enter the index at which you want to add a color:');
let colorToAdd = prompt('Enter the color to add:');
colorNames.splice(indexToAddColor, 0, colorToAdd);
document.write('<h2>Array after adding color to user-defined position:</h2>');
document.write(colorNames + '<br><br>');

// Delete colors from a user-defined position/index
let indexToDeleteColor = prompt('Enter the index from which you want to delete colors:');
let numColorsToDelete = prompt('Enter the number of colors to delete:');
colorNames.splice(indexToDeleteColor, numColorsToDelete);
document.write('<h2>Array after deleting colors from user-defined position:</h2>');
document.write(colorNames + '<br><br>');