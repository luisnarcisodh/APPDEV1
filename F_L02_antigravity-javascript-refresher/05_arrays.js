// 1. Start with an array of three coffee drinks
let menu = ["Espresso", "Americano", "Cappuccino"];

// 2. Add a new drink to the end of the array using push()
menu.push("Mocha");

// 3. Remove the first drink from the beginning of the array using shift()
menu.shift();

// 4. Use a for...of loop to display the remaining drinks
console.log("Current Menu:");
for (const drink of menu) {
  console.log(drink);
}

// 5. Use map() to create a promotional version with "Buy 1 Take 1" added
const promoMenu = menu.map(drink => "Buy 1 Take 1 " + drink);

console.log("\nPromotional Menu:");
console.log(promoMenu);