// 1. 'let': Can be re-assigned (mutable within block scope)
let currentOrder = "Flat White";
currentOrder = "Spanish Latte"; // Value changed to another drink

// 2. 'const': Cannot be re-assigned (constant within block scope)
const storeBranch = "Balagtas, Bulacan"; // Remains unchanged

// 3. 'var': Traditional variable declaration (function-scoped/global)
var cashierSystem = "v1.0"; // Cashier system version

// Displaying all three values
console.log("Current Coffee Order (let):", currentOrder);
console.log("Store Branch (const):", storeBranch);
console.log("Cashier System Version (var):", cashierSystem);