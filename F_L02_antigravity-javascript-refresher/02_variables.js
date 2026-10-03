// 1. Variables and Data Types (String, Number, Boolean)
let coffeeName = "Iced Latte";
let coffeePrice = 150;
let isAvailable = true;

// 2. Data Type Checking using typeof
console.log("Coffee Name:", coffeeName, "| Type:", typeof coffeeName);
console.log("Coffee Price:", coffeePrice, "| Type:", typeof coffeePrice);
console.log("Available:", isAvailable, "| Type:", typeof isAvailable);

// 3. Arithmetic Operations (Multiplication and Division)
let orderQuantity = 2;
let pricePerCup = 150;

let totalBill = orderQuantity * pricePerCup;
let dividedBill = totalBill / 2;

console.log("Total Bill:", totalBill);
console.log("Bill divided between 2 friends:", dividedBill);

// 4. Comparisons: Loose Equality (==) vs Strict Equality (===)
let priceString = "150";
let priceNumber = 150;

console.log("Loose equality ('150' == 150):", priceString == priceNumber);
console.log("Strict equality ('150' === 150):", priceString === priceNumber);  