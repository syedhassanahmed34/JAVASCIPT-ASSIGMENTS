// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseChar = char.toLowerCase();

    return vowels.includes(lowerCaseChar);
  }

  const vowelForm = document.getElementById("vowelForm");
  const vowelInput = document.getElementById("vowelInput");
  const result = document.getElementById("result");

  vowelForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const char = vowelInput.value;
    const output = isVowel(char) ? "It's a vowel." : "It's not a vowel.";
    result.textContent = output;
  });