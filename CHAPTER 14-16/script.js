//Declare an empty array using JS literal notation to store
//student names in future.

var studentNames = [];
studentNames.push('John Doe');
studentNames.push('Jane Doe');
console.log(studentNames[0]); // Output: 'John Doe'
console.log(studentNames[1]); // Output: 'Jane Doe'

//Declare and initialize a strings array.

var stringsArray = ['apple', 'banana', 'cherry', 'date'];
console.log(stringsArray[0]); // Output: 'apple'
console.log(stringsArray[1]); // Output: 'banana'
console.log(stringsArray[2]); // Output: 'cherry'
console.log(stringsArray[3]); // Output: 'date'
stringsArray.push('elderberry');
stringsArray.pop();

//Declare and initialize a numbers array.

let numbersArray = [1, 2, 3, 4, 5];
console.log('numbers array', numbersArray[0]); // Output: 1
console.log('numbers array', numbersArray[1]); // Output: 2
console.log('numbers array', numbersArray[2]); // Output: 3
console.log('numbers array', numbersArray[3]); // Output: 4
console.log('numbers array', numbersArray[4]); // Output: 5
numbersArray.push(6);
numbersArray.pop();
let mixedArray = ['apple', 1, 'banana', 2, 'cherry', 3];

//Declare and initialize a boolean array.

var booleanArray = [true, false, true, false];
console.log('boolean array', booleanArray[0]); // Output: true
console.log('boolean array', booleanArray[1]); // Output: false
console.log('boolean array', booleanArray[2]); // Output: true
console.log('boolean array', booleanArray[3]); // Output: false
booleanArray.push(true);
booleanArray.pop();
let mixedboolean = [true, 1, false, 'apple', true, 2];

//Declare and initialize a mixed array.

var mixed = ['apple', 1, true, { name: 'John', age: 30 }, [1, 2, 3]];
console.log(mixed[0]); // Output: 'apple'
console.log(mixed[1]); // Output: 1
console.log(mixed[2]); // Output: true
console.log(mixed[3]); // Output: { name: 'John', age: 30 }
console.log(mixed[4]); // Output: [ 1, 2, 3 ]
mixedArray.push('orange');
mixedArray.pop();

//Declare and Initialize an array and store available
//education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//BS, BCOM, MS, M. Phil., PhD). Show the listed
//qualifications in your browser

var educationQualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

console.log('Qualifications:');
for (let i = 0; i < educationQualifications.length; i++) {
  console.log((i + 1) + ') ' + educationQualifications[i]);
}



