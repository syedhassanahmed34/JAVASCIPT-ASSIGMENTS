// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

function checkNumberSign(num) {
    let sign;

    if (num > 0) {
      sign = "positive";
    } else if (num < 0) {
      sign = "negative";
    } else {
      sign = "zero";
    }

    return sign;
  }

  const numberForm = document.getElementById("numberForm");
  const numberInput = document.getElementById("numberInput");
  const result = document.getElementById("result");

  numberForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = parseFloat(numberInput.value);
    const output = checkNumberSign(num);
    result.textContent = `The number is ${output}.`;
  });