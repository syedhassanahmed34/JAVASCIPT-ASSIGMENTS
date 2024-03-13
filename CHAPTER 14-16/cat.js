//Write a program to create a single string from the
//below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)

// Array of string fragments
var arr = ["This ", " is ", " my ", " cat"];

// Create a single string from the array
var sentence = arr.join("");

// Display the single string
document.write('<h2>Array:</h2>');
document.write(arr + '<br><br>');
document.write('<h2>String:</h2>');
document.write(sentence + '<br><br>');

