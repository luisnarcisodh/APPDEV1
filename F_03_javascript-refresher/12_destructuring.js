const customer = { custName: "Luis Narciso", points: 150 };
const { custName, points } = customer;
console.log(custName, points); 

const bestSellers = ["Spanish Latte", "Matcha Frappe", "Cold Brew"];
const [top1, top2] = bestSellers;
console.log(top1, top2); 

function printCustomer({ custName }) {
  console.log(custName);
}

printCustomer(customer); 