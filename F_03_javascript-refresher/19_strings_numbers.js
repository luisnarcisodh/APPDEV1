const rawInput = "  Caramel Macchiato  ";
const cleanInput = rawInput.trim();
const [flavor, type] = cleanInput.split(" ");
console.log(flavor.toUpperCase()); 
console.log(cleanInput.includes("Macchiato")); 
console.log(cleanInput.slice(0, 7)); 
console.log(`Order: ${flavor} ${type}`);

console.log(parseInt("150php"));  
console.log((199.9999).toFixed(2)); 

const invalidMath = "coffee" / 2;
console.log(invalidMath);         
console.log(Number.isNaN(invalidMath)); 