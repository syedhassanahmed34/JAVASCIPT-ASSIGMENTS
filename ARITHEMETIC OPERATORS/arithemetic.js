function calculateSum() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById('result').innerHTML = "Result: " + sum;
  }
  
  function calculateDifference() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var difference = num1 - num2;
    document.getElementById('result').innerHTML = "Result: " + difference;
  }
  
  function calculateProduct() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var product = num1 * num2;
    document.getElementById('result').innerHTML = "Result: " + product;
  }
  
  function calculateQuotient() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if (num2 != 0) {
      var quotient = num1 / num2;
      document.getElementById('result').innerHTML = "Result: " + quotient;
    } else {
      document.getElementById('result').innerHTML = "Error: Division by zero";
    }
  }
  
  function calculateModulus() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if (num2 != 0) {
      var modulus = num1 % num2;
      document.getElementById('result').innerHTML = "Result: " + modulus;
    } else {
      document.getElementById('result').innerHTML = "Error: Division by zero";
    }
  }
  
  function calculateSquare() {
    var num1 = parseInt(document.getElementById('num1').value);
    var square = num1 * num1;
    document.getElementById('result').innerHTML = "Result: " + square;
  }
  
  function calculatePercentage() {
    var math = parseFloat(prompt("Enter math marks (out of 100):"));
    var urdu = parseFloat(prompt("Enter urdu marks (out of 100):"));
    var english = parseFloat(prompt("Enter english marks (out of 100):"));
    var chemistry = parseFloat(prompt("Enter chemistry marks (out of 100):"));
    var physics = parseFloat(prompt("Enter physics marks (out of 100):"));
    var totalMarksObtained = math + urdu + english + chemistry + physics;
    var totalMarks = 5 * 100;
    var percentage = (totalMarksObtained / totalMarks) * 100;
    document.getElementById('result').innerHTML = "Result: " + percentage + "%";
  }