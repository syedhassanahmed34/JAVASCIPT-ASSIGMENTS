//Create a new array. Store values one by one in such a way

//that you can access the values in reverse order. (Last In-
//First Out)..

// Create a new array
let stack = new Array();

// Add elements to the array in LIFO order
stack.push("apple");
stack.push("banana");
stack.push("cherry");

// Display the elements in the array
document.write('<h2>Stack:</h2>');
document.write(stack + '<br><br>');

// Remove the last element from the array
stack.pop();

// Display the updated array
document.write('<h2>Stack after removing the last element:</h2>');
document.write(stack + '<br><br>');