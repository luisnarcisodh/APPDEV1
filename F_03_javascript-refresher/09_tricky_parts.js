console.log(150 == "150");   // true
console.log(150 === "150");  // false

let outOfStockItem;
let soldOut = null;

console.log(outOfStockItem); // undefined
console.log(soldOut);        // null

const employee = {
  name: "Maria",
  regularMethod: function () {
    console.log("Barista:", this.name);
  },
  arrowMethod: () => {
    console.log("Barista:", this.name);
  },
};

employee.regularMethod(); // "Maria"
employee.arrowMethod();   // undefined

const originalMenu = ["Espresso", "Latte"];

const sameMenuReference = originalMenu;
sameMenuReference.push("Mocha");
console.log(originalMenu); // ["Espresso", "Latte", "Mocha"]

const clonedMenu = [...originalMenu];
clonedMenu.push("Matcha");
console.log(originalMenu); // ["Espresso", "Latte", "Mocha"]
console.log(clonedMenu);   // ["Espresso", "Latte", "Mocha", "Matcha"]