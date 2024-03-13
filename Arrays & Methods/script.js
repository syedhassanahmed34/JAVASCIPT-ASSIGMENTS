// q1.Create an empty array and use the push method to add five different elements to it.

var myArray = [];
myArray.push('Karachi');
myArray.push('Lahore');
myArray.push('Peshawar');
myArray.push('Sawabi');
myArray.push('Faisalabad');
console.log('Push method -->', myArray);

// q2. Use the pop method to remove the last element from the array.

let cities = ['Karachi', 'Lahore', 'Peshawar', 'Sawabi', 'Faisalabad'];
let lastcity = cities.pop();
// console.log(lastcity);
console.log('Pop method -->',cities); 

// q3. Use the shift method to remove the first element from the array.

var Array = [1, 2, 3, 4, 5];

var x = Array.shift();


console.log('Shift method -->',Array);
console.log(`variable x value: ${x}`);

// q4. Use the unshift method to add a new element at the beginning of the array.

var unshift = [2, 3, 4, 5, 6];
var newunshift = [1, ...myArray];
console.log('Unsift method',unshift);

// q5. Print the final array after each operation to observe the changes.

const my = ['Karachi', 'Lahore', 'Peshawar', 'Sawabi', 'Faisalabad'];

console.log('Original array:', myArray);

// Use the push() method to add an element to the end of the array
my.push('fig');
console.log('After push-->:', myArray.push);

// Use the pop() method to remove the last element from the array
const poppedElement = my.pop();
console.log('After pop-->:', my);
console.log('Popped element:', cities);

// Use the shift() method to remove the first element from the array
const shiftedElement = my.shift();
console.log('After shift-->:', my);
console.log('Shifted element:', x);

// Use the unshift() method to add an element to the beginning of the array
my.unshift('grape');
console.log('After unshift-->:', newunshift);


// Create an array with at least 5 elements.

var element = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
console.log(element);

//Use the length property to find the number of elements in the array.

console.log(element.length)

//Access and print the first and last elements of the array using their indices.

var indices = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

console.log('First element:', indices[0]);
console.log('Last element:', indices[indices.length - 1]);