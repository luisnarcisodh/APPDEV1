const coffeeDetails = {
  name: "Caramel Macchiato",
  price: 180,
  category: "Cold Brew",
  describe: function () {
    console.log(`We serve ${this.name} for only PHP ${this.price}.`);
  }
};

coffeeDetails.stock = 50;
coffeeDetails.describe();