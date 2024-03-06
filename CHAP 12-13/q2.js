// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

function findLargerInteger(num1, num2) {
    let larger;

    if (num1 === num2) {
      larger = "The two integers are equal.";
    } else if (num1 > num2) {
      larger = num1;
    } else {
      larger = num2;
    }

    return larger;
  }

  const integerForm = document.getElementById("integerForm");
  const integer1 = document.getElementById("integer1");
  const integer2 = document.getElementById("integer2");
  const result = document.getElementById("result");

  integerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num1 = parseInt(integer1.value);
    const num2 = parseInt(integer2.value);
    const output = findLargerInteger(num1, num2);
    result.textContent = output;
  });