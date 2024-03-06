// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

function checkCharType(input) {
    const asciiCode = input.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
      return "The given input is a number.";
    } else if (asciiCode >= 65 && asciiCode <= 90) {
      return "The given input is an uppercase letter.";
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      return "The given input is a lowercase letter.";
    } else {
      return "The given input is not a number or a letter.";
    }
  }

  const charForm = document.getElementById("charForm");
  const charInput = document.getElementById("charInput");
  const result = document.getElementById("result");

  charForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = charInput.value;
    const output = checkCharType(input);
    result.textContent = output;
  });