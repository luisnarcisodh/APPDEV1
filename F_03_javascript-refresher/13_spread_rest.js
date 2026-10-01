const morningSales = [1200, 1500, 900];
const totalSalesArray = [...morningSales, 2000, 3100];
console.log(totalSalesArray); 

const product = { item: "Coffee Beans", weight: "250g" };
const updatedProduct = { ...product, origin: "Sagada" };
console.log(updatedProduct); 

function computeTotalBill(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}
console.log(computeTotalBill(150, 120, 80, 50)); 