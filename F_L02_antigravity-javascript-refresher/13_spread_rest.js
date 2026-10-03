// 1. Spread Operator with Arrays: Combining morning sales with afternoon sales
const morningSales = [1200, 1500, 900];
const allDaySales = [...morningSales, 2000, 3100];

console.log("--- Spread Operator (Arrays) ---");
console.log("Morning Sales:", morningSales);
console.log("All-Day Sales (combined):", allDaySales);

console.log("");

// 2. Spread Operator with Objects: Adding a new property to a coffee product
const coffeeProduct = { item: "Coffee Beans", weight: "250g" };
const updatedProduct = { ...coffeeProduct, origin: "Sagada" };

console.log("--- Spread Operator (Objects) ---");
console.log("Original Product:", coffeeProduct);
console.log("Updated Product (with origin):", updatedProduct);

console.log("");

// 3. Rest Parameter with Functions: Accepting any number of item prices
function calculateTotalBill(...prices) {
  // '...prices' gathers all individual arguments into an array
  return prices.reduce((total, price) => total + price, 0);
}

console.log("--- Rest Parameter (Functions) ---");
const totalBill = calculateTotalBill(150, 120, 80, 50);
console.log("Total Bill (150, 120, 80, 50): PHP " + totalBill); 