//Create a new array. Store values one by one in such a way
//that you can access the values in the order in which they
//were stored. (FIFO-First In First Out)..

// Create a new array
let queue = new Array();

// Add elements to the array in FIFO order
queue.push("apple");
queue.push("banana");
queue.push("cherry");

// Display the elements in the array
document.write('<h2>Queue:</h2>');
document.write(queue + '<br><br>');

// Remove the first element from the array
queue.shift();

// Display the updated array
document.write('<h2>Queue after removing the first element:</h2>');
document.write(queue + '<br><br>');