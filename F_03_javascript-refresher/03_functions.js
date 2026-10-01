function greetCustomer(name) {
  return "Welcome to our Coffee Shop, " + name + "!";
}

const computeVAT = (amount) => {
  return amount * 0.12;
};

function posSystem(price, qty) {
  return { itemTotal: price * qty, vatAmount: (price * qty) * 0.12 };
}

console.log(greetCustomer("Luis Narciso"));
console.log(computeVAT(500));
console.log(posSystem(150, 3));