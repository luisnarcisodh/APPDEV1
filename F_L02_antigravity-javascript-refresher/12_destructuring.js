// 1. Customer object with customer name and reward points
const customer = {
  customerName: "Luis",
  rewardPoints: 150
};

// 2. Object destructuring to extract both values
const { customerName, rewardPoints } = customer;

console.log("--- Object Destructuring ---");
console.log("Customer Name:", customerName);
console.log("Reward Points:", rewardPoints);

console.log("");

// 3. Array containing three best-selling drinks
const bestSellers = ["Spanish Latte", "Matcha Frappe", "Cold Brew"];

// 4. Array destructuring to get the first two drinks
const [top1, top2] = bestSellers;

console.log("--- Array Destructuring ---");
console.log("Top 1 Drink:", top1);
console.log("Top 2 Drink:", top2);

console.log("");

// 5. Function parameter destructuring to print customer's name
function printCustomerName({ customerName }) {
  console.log("Serving customer:", customerName);
}

console.log("--- Function Parameter Destructuring ---");
printCustomerName(customer); 