//Write a program to store phone manufacturers (Apple,
//  Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your
//browser using document.write() method:


// Array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Function to display the dropdown menu
function displayDropdown() {
    document.write("<select>");
    for (var i = 0; i < phoneManufacturers.length; i++) {
        document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
    }
    document.write("</select>");
}

// Call the function to display the dropdown menu
displayDropdown();