// 1. Single parameter with implicit return: returns a preparation message
const prepareDrink = drink => "Preparing your " + drink + "...";

// 2. Single parameter with implicit return: calculates 20% discount
const calculateDiscount = price => price * 0.20;

// 3. No parameters: prints a receipt message
const printReceipt = () => {
  console.log("Printing receipt: Thank you for visiting Kape System!");
};

// Calling the functions to demonstrate results
console.log(prepareDrink("Caramel Macchiato"));
console.log("20% Discount on PHP 150: PHP " + calculateDiscount(150));
printReceipt();