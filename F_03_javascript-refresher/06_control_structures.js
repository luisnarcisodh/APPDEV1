let coffeeRating = 92;
if (coffeeRating >= 95) { console.log("Excellent Brew"); }
else if (coffeeRating >= 85) { console.log("Good Brew"); }
else if (coffeeRating >= 75) { console.log("Needs Improvement"); }
else { console.log("Too Bitter!"); }

for (let cup = 1; cup <= 5; cup++) { console.log("Brewing cup #" + cup); }

let queue = 0;
while (queue < 3) {
  console.log("Calling next customer...");
  queue++;
}