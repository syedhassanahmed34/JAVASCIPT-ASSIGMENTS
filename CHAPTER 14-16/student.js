//Write a program to store 3 student names in an array.Take
//another array to store score of these three students.
//Assume that total marks are 500 for each student, display
//the scores & percentages of students like:

// Array of student scores
let studentScores = [320, 230, 480, 450, 300];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
  return a - b;
});

// Display the sorted array
document.write('<h2>Sorted Array:</h2>');
document.write(studentScores + '<br><br>');