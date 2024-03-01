// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

function calculatePercentage() {
    var totalMarks = document.getElementById('totalMarks').value;
    var obtainedMarks = document.getElementById('obtainedMarks').value;
  
    // Calculate the percentage
    var percentage = (obtainedMarks / totalMarks) * 100;
  
    // Display the percentage in the browser
    document.getElementById('percentage').innerHTML = "Percentage: " + percentage + "%";
  }