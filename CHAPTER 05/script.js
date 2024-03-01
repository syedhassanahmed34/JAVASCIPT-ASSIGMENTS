// q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = 5
// var num2 = 2

// var addition = num1+num2
// document.write('the sum of the two number is ' + addition)

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

// Display the result in the browser
document.getElementById('one').innerHTML = sum;

// q2 . Repeat task1 for subtraction, multiplication, division & modulus.


//subtraction
var num1 = 7;
var num2 = 4;
var difference = num1 - num2;

document.getElementById('subtr').innerHTML = difference;

//multipilication
var num1 = 6;
var num2 = 8;
var product = num1 * num2;

document.getElementById('mult').innerHTML = product;

//devision
var num1 = 10;
var num2 = 2;
var quotient = num1 / num2;

document.getElementById('devide').innerHTML = quotient;

//modulus
var num1 = 11;
var num2 = 3;
var remainder = num1 % num2;

document.getElementById('mod').innerHTML = remainder;


// q3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial
//value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value
//after increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value
//after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value
//after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value
//by 3.
//l. Output : “The remainder is : 0”.

        
                               var myVariable;
  document.getElementById('a').innerHTML = "Value after variable declaration is: " + myVariable;

var myVariable = 5;
document.getElementById('two').innerHTML = "Initial value: " + myVariable;
        
var myVariable = 5;
myVariable++;

document.getElementById('three').innerHTML = "Value after increment is: " + myVariable;

var myVariable = 5;
myVariable += 8;

document.getElementById('four').innerHTML = "Value after addition is: " + myVariable;

var myVariable = 13;
myVariable--;

document.getElementById('five').innerHTML = "Value after decrement is: " + myVariable;


var myVariable = 12;
var remainder = myVariable % 3;

document.getElementById('six').innerHTML = "The remainder is: " + remainder;
