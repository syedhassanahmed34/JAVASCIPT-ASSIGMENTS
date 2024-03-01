// 11. The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored
//values.

//Output them to the screen like so: “They are either NN or NN
//years old”.

function calculateAge(age2) {
    // Store the current year and birth year in variables
    var currentYear = document.getElementById('currentYear').value;
    var birthYear = document.getElementById('birthYear').value;
}
  
    // Calculate their ages
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;
  
    // Output the ages to the screen
    var ageResultHTML = "They are either " + age2 + " or " + age1 + " years old.";
    document.getElementById('ageResult').innerHTML = ageResultHTML;