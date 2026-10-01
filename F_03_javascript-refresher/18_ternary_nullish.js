const pointsEarned = 150;
const membership = pointsEarned >= 100 ? "VIP" : "Regular";
console.log(membership); 

const tableNumber = 4;
console.log(tableNumber % 2 === 0 ? "Even Table" : "Odd Table"); 

const deliveryDetails = { buyer: "Rocelyn" }; 

console.log(deliveryDetails.address?.street); 

const cupsOrdered = 0;
console.log(cupsOrdered || 1); 
console.log(cupsOrdered ?? 1); 