const menuItems = [
  { name: "Americano", price: 100 },
  { name: "Frappuccino", price: 180 },
  { name: "Black Tea", price: 80 },
];

const expensiveDrinks = menuItems.filter(item => item.price >= 150);
console.log(expensiveDrinks.map(item => item.name));

const tea = menuItems.find(item => item.name === "Black Tea");
console.log(tea); 

console.log(menuItems.some(item => item.price < 90)); 
console.log(menuItems.every(item => item.price >= 100)); 

const sortedByPrice = [...menuItems].sort((a, b) => b.price - a.price);
console.log(sortedByPrice.map(item => item.name)); 