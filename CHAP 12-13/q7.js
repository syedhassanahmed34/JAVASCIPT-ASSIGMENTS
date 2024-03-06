// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

const timeForm = document.getElementById("timeForm");
const timeInput = document.getElementById("timeInput");
const result = document.getElementById("result");

timeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userTime = timeInput.value.trim();

  if (userTime.length !== 4) {
    result.textContent = 'Please enter a 4-digit time in 24-hour clock format.';
    return;
  }

  const hour = parseInt(userTime.substring(0, 2));

  if (isNaN(hour)) {
    result.textContent = 'Please enter a valid 4-digit time in 24-hour clock format.';
    return;
  }

  let message;

  if (hour < 6) {
    message = "It's early. Go back to sleep.";
  } else if (hour < 12) {
    message = "Good morning! Have a great day!";
  } else if (hour < 18) {
    message = "Good afternoon! Keep up the good work!";
  } else {
    message = "Good evening! Time to relax.";
  }

  result.textContent = message;
});