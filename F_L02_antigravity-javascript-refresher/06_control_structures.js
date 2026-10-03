// 1. If / Else If / Else: Classifying a coffee rating
let coffeeRating = 92;

if (coffeeRating >= 90) {
  console.log("Rating " + coffeeRating + ": Excellent Brew!");
} else if (coffeeRating >= 80) {
  console.log("Rating " + coffeeRating + ": Good Brew.");
} else if (coffeeRating >= 70) {
  console.log("Rating " + coffeeRating + ": Needs Improvement.");
} else {
  console.log("Rating " + coffeeRating + ": Poor Quality.");
}

console.log("");

// 2. For Loop: Simulating brewing 5 cups of coffee
for (let cup = 1; cup <= 5; cup++) {
  console.log("Brewing cup #" + cup + "...");
}

console.log("");

// 3. While Loop: Simulating calling the next 3 customers in a queue
let customerNumber = 1;

while (customerNumber <= 3) {
  console.log("Calling customer #" + customerNumber + " to the counter!");
  customerNumber++;
}