// 6. This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//if (hour < 18) {
//greeting = "Good day";
//else
//greeting = "Good evening";
//}

var greeting;
var hour = new Date().getHours();

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

const greetingElement = document.getElementById("greeting");
greetingElement.textContent = greeting;
