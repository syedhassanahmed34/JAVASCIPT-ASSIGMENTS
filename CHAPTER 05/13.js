// 13. The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is?
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.

const favoriteSnack = "chocolate";

// Store your current age
const currentAge = 30;

// Store a maximum age
const maxAge = 80;

// Store an estimated amount per day
const amountPerDay = 2;

// Calculate the number of days left until the maximum age
const daysLeft = (maxAge - currentAge) * 365;

// Calculate the total amount needed for the rest of your life
const totalAmountNeeded = daysLeft * amountPerDay;

// Output the result to the screen
console.log(`You will need ${totalAmountNeeded} ${favoriteSnack} to last you until the ripe old age of ${maxAge}`);