let coffeeName = "Iced Latte";
let coffeePrice = 150;
let isAvailable = true;

console.log(coffeeName, typeof coffeeName);
console.log(coffeePrice, typeof coffeePrice);
console.log(isAvailable, typeof isAvailable);

let orderQty = 2, pricePerCup = 120;
console.log("Total Bill:", orderQty * pricePerCup);
console.log("Divide Bill for 2 friends:", (orderQty * pricePerCup) / 2);

console.log("150" == 150);   
console.log("150" === 150);  