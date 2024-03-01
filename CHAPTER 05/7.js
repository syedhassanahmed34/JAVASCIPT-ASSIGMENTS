// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

function calculateTotalCost() {
    var price1 = document.getElementById('price1').value;
    var price2 = document.getElementById('price2').value;
    var quantity1 = document.getElementById('quantity1').value;
    var quantity2 = document.getElementById('quantity2').value;
    var shipping = document.getElementById('shipping').value;
}
  
    // Calculate the subtotal
    var subtotal = (price1 * quantity1) + (price2 * quantity2);
  
    // Calculate the total cost
    var totalCost = subtotal + parseFloat(shipping);
  
    // Display the receipt in the browser
    var receiptHTML = "Receipt:\n\n";
    receiptHTML += "Item 1: " + price1 + " x " + quantity1 + " = $" + (price1 * quantity1) + "\n";
    receiptHTML += "Item 2: " + price2 + " x " + quantity2 + " = $" + (price2 * quantity2) + "\n";
    receiptHTML += "Subtotal: $" + subtotal + "\n";
    receiptHTML += "Shipping: $" + shipping + "\n";
    receiptHTML += "Total Cost: $" + totalCost;
  
    document.getElementById('receipt').innerHTML = receiptHTML;