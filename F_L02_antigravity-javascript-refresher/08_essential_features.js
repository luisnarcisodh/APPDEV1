// 1. Array map(): Display each available coffee add-on
const addOns = ["Oat Milk", "Vanilla Syrup", "Espresso Shot"];
console.log("--- Coffee Add-Ons ---");
addOns.map(addon => console.log("Available add-on: " + addon));

console.log("");

// 2. Object Destructuring: Extract name and shift from barista object
const barista = { name: "Juan", shift: "Morning" };
const { name, shift } = barista;

console.log("--- Barista on Duty ---");
console.log("Barista Name: " + name);
console.log("Assigned Shift: " + shift);

console.log("");

// 3. Spread Operator (...): Combine cold drinks with additional drinks
const coldDrinks = ["Iced Latte", "Cold Brew"];
const allDrinks = [...coldDrinks, "Hot Cappuccino", "Caramel Macchiato"];

console.log("--- Complete Drink Menu ---");
console.log(allDrinks);