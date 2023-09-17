
// Define the dishData array with sample data.
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian Pizza", price: 6.45 }
];





// Step 1: Create the getPrices() function with a taxBoolean parameter.
function getPrices(taxBoolean) {
  // Step 2: Loop over all the objects in the dishData array.
  for (let i = 0; i < dishData.length; i++) {
    // Step 3: Declare a finalPrice variable without assigning it a value.
    let finalPrice;

    // Step 4: Check if taxBoolean is true and calculate the final price accordingly.
    if (taxBoolean === true) {
      finalPrice = dishData[i].price * 1.2;
    }
    // Step 5: Check if taxBoolean is false and assign the dish price to finalPrice.
    else if (taxBoolean === false) {
      finalPrice = dishData[i].price;
    }
    // Step 6: Handle the else case.
    else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }

    // Step 7: Output the dish name and final price.
    console.log("Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2));
  }
}

// Step 8: Create the getDiscount() function with taxBoolean and guests parameters.
function getDiscount(taxBoolean, guests) {
  // Step 9: Invoke the getPrices() function with the taxBoolean argument.
  getPrices(taxBoolean);

  // Step 10: Check the type and value of the guests parameter.
  if (typeof guests === 'number' && guests > 0 && guests < 30) {
    // Step 11: Calculate and display the discount based on the number of guests.
    let discount = 0;

    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }

    console.log('Discount is: $' + discount);
  } else {
    // Step 12: Handle invalid guests parameter.
    console.log('The second argument must be a number between 0 and 30');
  }
}

// Example usage:
console.log("Prices with 20% tax:");
getDiscount(true, 2);

console.log("\nPrices without tax:");
getDiscount(false, 10);
