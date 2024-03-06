// 5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then
//give message “ Please enter your password”
//ii. Check if both passwords are same. If they are
//same, show message “Correct! The password you
//entered matches the original password”. Show
//“Incorrect password” otherwise.


const correctPassword = 'secret123';

    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("passwordInput");
    const result = document.getElementById("result");

    passwordForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const userPassword = passwordInput.value.trim();

      if (userPassword === '') {
        result.textContent = 'Please enter your password.';
        return;
      }

      if (userPassword === correctPassword) {
        result.textContent = 'Correct! The password you entered matches the original password.';
      } else {
        result.textContent = 'Incorrect password.';
      }
    });