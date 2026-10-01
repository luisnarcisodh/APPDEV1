let menu = ["Espresso", "Americano", "Cappuccino"];
menu.push("Matcha Latte"); 
menu.shift(); 

for (const drink of menu) {
  console.log("Serving: " + drink);
}

const promoMenu = menu.map(drink => "Buy 1 Take 1 " + drink);
console.log(promoMenu);