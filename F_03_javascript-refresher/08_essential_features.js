const addOns = ["Oat Milk", "Vanilla Syrup", "Espresso Shot"];
addOns.map(addon => console.log("Add-on available: " + addon));

const barista = { name: "Juan", shift: "Morning" };
const { name, shift } = barista;
console.log(name, shift);

const coldDrinks = ["Iced Coffee", "Frappe"];
const allDrinks = [...coldDrinks, "Hot Choco", "Tea"]; 
console.log(allDrinks);