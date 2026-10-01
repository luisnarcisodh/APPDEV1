if (true) {
  let kitchenSecret = "Secret Recipe";
  console.log(kitchenSecret); 
}

try {
  console.log(kitchenSecret); 
} catch (error) {
  console.log("kitchenSecret is strictly for kitchen staff only");
}

function createOrderQueue() {
  let orderNumber = 0;
  return function nextOrder() {
    orderNumber++;
    return orderNumber;
  };
}

const counter1Queue = createOrderQueue();
const counter2Queue = createOrderQueue();

console.log("Counter 1 Now Serving: ", counter1Queue()); 
console.log("Counter 1 Now Serving: ", counter1Queue()); 
console.log("Counter 2 Now Serving: ", counter2Queue());