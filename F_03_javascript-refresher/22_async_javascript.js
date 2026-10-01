function fetchInventoryMock(callback) {
  setTimeout(() => {
    callback({ item: "Coffee Beans", stock: 50 });
  }, 1000);
}

fetchInventoryMock((inventory) => {
  console.log("Inventory check:", inventory);
});

function fetchOrder() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ orderId: 101, status: "Ready" }), 1000);
  });
}

async function showOrder() {
  try {
    const order = await fetchOrder();
    console.log("Order update:", order);
  } catch (error) {
    console.log("Failed to load order");
  }
}

showOrder();

function getCoffeeMenu() {

  return fetch("https://api.sampleapis.com/coffee/hot/1")
    .then(response => response.json())
}

getCoffeeMenu()
    .then(data => console.log("Coffee Menu fetched (Using Promises): ", data.title))
    .catch(error => console.error("Network error: ", error))

async function getCoffeeMenuAsync() {
  const response = await fetch("https://api.sampleapis.com/coffee/hot/1");
  const data = await response.json();
  return data;
}

async function fetchCoffeeMenu() {
  try {
    const menuData = await getCoffeeMenuAsync();
    console.log("Coffee Menu (Using Async/Await): ", menuData.title, "-", menuData.description);
  } catch (error) {
    console.error("Network error: ", error);
  }
}

fetchCoffeeMenu();

// --- synchronous vs asynchronous ---

let customer = "Luis Narciso";
let order = "Iced Latte";
let table = "Table 5";

setTimeout(() => {
  console.log("Order is now being served...");
}, 2000);

console.log("Customer:", customer);
console.log("Order:", order);
console.log("Table:", table);