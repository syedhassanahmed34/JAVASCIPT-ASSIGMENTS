// q1. Write a loop to print numbers from 1 to 10.

for (var i = 1; i <= 10; i++) {
    console.log('Numbers from 1 to 20--->', i)
}

// q2. Write a loop to print even numbers from 1 to 20.

for (var even = 2; even <= 20; even += 2) {
    console.log('even numbers from 1 to 20.---->', even)
}

// q3. Write a loop to print odd numbers from 1 to 15.

for (var odd = 1; odd <= 20; odd += 2) {
    console.log('odd numbers from 1 to 15.---->', odd)
}

// q4. Write a loop to calculate and print the factorial of a number (let's say 5).

var num = 5;
factorial = 1;
for (var i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("The factorial of " + num + " is " + factorial);

// q5. Write a loop to print the multiplication table of a number (let's say 7) up to 10.

var n = 7;
for (var i = 1; i <= 10; i++) {
    console.log(' multiplication table ---->', n + " x " + i + " = " + (n * i));
}

// q6. Write a loop to print the Fibonacci series up to the 10th term.

var n = 10;
var a = 0;
var b = 1;
for (var i = 1; i <= n; i++) {
    console.log('the Fibonacci series up to the 10th term.---->', a + " ");
    var c = a + b;
    a = b;
    b = c;
}

// q7. Write a loop to find and print the sum of digits of a number (let's say 123).

var num = 123;
var sum = 0;
while (num != 0) {
    sum += num % 10;
    num /= 10;
}
console.log("Sum of digits: " + sum);

// q8. Write a loop to print the reverse of a string (let's say "hello").

var str = "hello";
var rev = "";
for (var i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
}
console.log("Original String: " + str);
console.log("Reversed String: " + rev);

// q9. Write a loop to print the square of numbers from 1 to 10.

var i = 1;
while (i <= 10) {
    console.log(i + " x " + i + " = " + i * i);
    i++;
}