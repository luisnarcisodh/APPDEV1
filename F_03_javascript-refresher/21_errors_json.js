function processPayment(amount, cashHanded) {
  if (cashHanded < amount) {
    throw new Error("Insufficient cash provided by customer.");
  }
  return cashHanded - amount;
}

try {
  console.log("Change: ", processPayment(150, 100));
} catch (error) {
  console.log("Transaction failed:", error.message);
}

const receiptData = { item: "Mocha", price: 160, isPaid: true };

const jsonReceipt = JSON.stringify(receiptData);
console.log(jsonReceipt); 

const parsedReceipt = JSON.parse(jsonReceipt);
console.log(parsedReceipt.item); 
console.log(typeof jsonReceipt, typeof parsedReceipt); 