// 1. Function that welcomes a customer using their name
function welcomeCustomer(name) {
  return "Welcome to our Coffee Shop, " + name + "!";
}

// 2. Arrow function that computes 12% VAT from an amount
const computeVAT = (amount) => {
  return amount * 0.12;
};

// 3. POS function that calculates total price and VAT for an item quantity
function calculateOrder(price, quantity) {
  let totalPrice = price * quantity;
  let vatAmount = computeVAT(totalPrice);
  return {
    totalPrice: totalPrice,
    vatAmount: vatAmount
  };
}

// 4. Calling each function with sample coffee shop values
console.log(welcomeCustomer("Luis"));
console.log("VAT (12% of 500):", computeVAT(500));
console.log("POS Order (Price: 150, Quantity: 3):", calculateOrder(150, 3));