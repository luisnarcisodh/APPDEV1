// 1. Loose Equality (==) vs Strict Equality (===)
console.log("--- 1. Equality: == vs === ---");
let priceNumber = 150;
let priceString = "150";

console.log("Loose equality (150 == '150'):", priceNumber == priceString);   // true (type coercion)
console.log("Strict equality (150 === '150'):", priceNumber === priceString); // false (different types)

console.log("");

// 2. undefined vs null
console.log("--- 2. undefined vs null ---");
let outOfStockItem;     // Declared but never assigned a value
let soldOutItem = null; // Explicitly set to represent the intentional absence of a value

console.log("Unassigned item (outOfStockItem):", outOfStockItem); // undefined
console.log("Intentionally empty (soldOutItem):", soldOutItem);   // null

console.log("");

// 3. 'this' in Regular Function vs Arrow Function
console.log("--- 3. 'this' Keyword Behavior ---");
const barista = {
  name: "Maria",
  regularMethod: function () {
    // Regular function: 'this' refers to the object calling the method
    console.log("Regular Method - Barista:", this.name);
  },
  arrowMethod: () => {
    // Arrow function: 'this' inherits from the outer lexical scope (not barista)
    console.log("Arrow Method - Barista:", this.name);
  }
};

barista.regularMethod(); // Logs: "Maria"
barista.arrowMethod();   // Logs: undefined

console.log("");

// 4. Reference by Assignment (Mutating the shared array)
console.log("--- 4. Array Reference by Assignment ---");
const originalMenu = ["Espresso", "Latte"];
const menuReference = originalMenu; // Points to the exact same array in memory

menuReference.push("Mocha");
console.log("Original menu after reference change:", originalMenu); // ["Espresso", "Latte", "Mocha"]

console.log("");

// 5. Shallow Copy with Spread Operator (...) (Independent arrays)
console.log("--- 5. Copying Array with Spread Operator ---");
const menuCopy = [...originalMenu]; // Creates a new independent array

menuCopy.push("Matcha");
console.log("Original menu remains unchanged:", originalMenu); // ["Espresso", "Latte", "Mocha"]
console.log("Copied menu with new item:", menuCopy);           // ["Espresso", "Latte", "Mocha", "Matcha"]