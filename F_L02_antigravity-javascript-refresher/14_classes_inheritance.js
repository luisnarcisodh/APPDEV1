// 1. Parent Class: Staff
class Staff {
  constructor(name) {
    this.name = name;
  }

  // Method for clocking in (available to all staff)
  clockIn() {
    console.log(this.name + " has clocked in for work.");
  }
}

// 2. Child Class: Barista extends Staff
class Barista extends Staff {
  // Barista-specific method for brewing coffee
  brewCoffee(drink) {
    console.log(this.name + " is brewing a fresh cup of " + drink + ".");
  }
}

// 3. Create a new Barista instance
const barista = new Barista("Luis");

// 4. Call inherited method from Staff
barista.clockIn();

// 5. Call barista-specific method
barista.brewCoffee("Spanish Latte");