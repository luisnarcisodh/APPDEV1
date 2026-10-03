// 1. Create a coffee product object with properties and a method
const coffeeProduct = {
  name: "Caramel Macchiato",
  price: 180,
  category: "Cold Brew",

  // Method using 'this' to access the object's own properties
  describe: function () {
    console.log(`We serve ${this.name} (${this.category}) for PHP ${this.price}. In stock: ${this.stock} cups.`);
  }
};

// 2. Add a stock property after creating the object
coffeeProduct.stock = 50;

// 3. Call the method to display the result
coffeeProduct.describe();