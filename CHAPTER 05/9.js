// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

const USD_EXCHANGE_RATE = 104.80;
const SAR_EXCHANGE_RATE = 28;

const USD_AMOUNT = 10;
const SAR_AMOUNT = 25;

const totalAmountInPKR = (USD_AMOUNT * USD_EXCHANGE_RATE) + (SAR_AMOUNT * SAR_EXCHANGE_RATE);

document.getElementById('result').innerHTML = "Total Currency in PKR: " + totalAmountInPKR;