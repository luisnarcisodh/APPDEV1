### 01_base_syntax.js

**Prompt**
Open 01_base_syntax.js and use it as the only target file.

Create a simple implementation based on the existing Kape System example.

Requirements:

Keep the Kape System theme.
Display a welcome message using console.log.
Create two variables, shopName and shopname, with different values to demonstrate that JavaScript variable names are case-sensitive.
Include basic variables for a price, discount code, total sales, and customer name.
Log the variables so their values can be seen in the output.
Use only basic JavaScript syntax such as let and console.log.
Do not introduce functions, arrays, objects, or other advanced concepts.

**Reflection**
This part helped me review the basic syntax of JavaScript, especially how variables are declared and displayed using console.log. I also understood better that JavaScript is case-sensitive because shopName and shopname are treated as different variables even though they have almost the same spelling. The Kape System example made the exercise easier to understand because the variables represent simple data like a shop name, price, discount code, sales, and customer name.

### 02_variables.js

**Prompt**
Open 02_variables.js and use it as the only target file.

Create a simple JavaScript implementation that demonstrates basic variables, data types, arithmetic, and comparisons.

Requirements:

Use a coffee order example with a coffee name, price, and availability status.
Demonstrate a string, number, and boolean.
Use typeof to display the data type of each variable.
Calculate the total bill using the order quantity and price per cup.
Calculate how the bill would be divided between two friends.
Compare a string value and a number using both == and ===.
Use only basic JavaScript syntax and keep the implementation beginner-friendly.

**Reflection**
This part helped me understand the basic data types in JavaScript through a simple coffee order example. I learned that `"Iced Latte"` is a string, `150` is a number, and `true` is a boolean. I also understood how `typeof` can be used to check the data type of a value. 

### 03_functions.js

**Prompt**
Open 03_functions.js and use it as the only target file.

Create a beginner-friendly implementation that demonstrates how JavaScript functions work.

Requirements:

Create a function that welcomes a customer using their name.
Create an arrow function that computes 12% VAT from an amount.
Create a POS function that calculates the total price and VAT for an item quantity.
Call each function with sample coffee shop values.
Use basic functions, parameters, return values, and an arrow function only.
Keep the Coffee Shop / POS System theme.

**Reflection**
Dito ko na-refresh kung paano gumagana yung functions, parameters, at return. Mas gets ko rin yung arrow function dahil may actual example siya sa pag-compute ng VAT.

### 04_objects.js

**Prompt**
Open 04_objects.js and use it as the only target file.

Create a simple JavaScript object representing a coffee product.

Requirements:

Include properties for the coffee name, price, and category.
Add a method that displays a sentence using the object's own values.
Add a stock property after creating the object.
Use this inside the method to access the object's properties.
Call the method to show the result.
Keep the code beginner-friendly and use the coffee shop theme.

**Reflection**
Interesting yung part na pwede pala maglagay ng function sa loob ng object. Mas clear sakin yung purpose ng this kasi ginagamit siya para ma-access yung details ng same object. Yung stock naman, pwede pala idagdag kahit nagawa na yung object. Nakita ko rin na mas organized yung code kapag magkakasama yung related information. Simple lang yung example pero mas nakita ko kung saan useful ang objects sa actual system.

### 05_arrays.js

**Prompt**
Open 05_arrays.js and use it as the only target file.

Create a simple coffee shop menu program that demonstrates basic array manipulation.

Requirements:

Start with three coffee drinks in an array.
Add a new drink using push().
Remove the first drink using shift().
Use a for...of loop to display the remaining drinks.
Use map() to create a promotional version of the menu with "Buy 1 Take 1" added to each drink.
Keep the code simple and beginner-friendly.

**Reflection**
Mas interesting sakin dito kasi parang actual menu yung ginagalaw instead na random numbers lang. Yung push() nag-add ng bagong drink habang shift() naman nagtanggal ng first item. Nagamit din yung for...of para isa-isang i-display yung laman ng menu. Yung map() naman gumawa ng panibagong version ng menu with the promo. Parang mas nakita ko dito kung paano useful ang arrays sa systems na maraming items.

### 06_control_structures.js

**Prompt**
Open 06_control_structures.js and use it as the only target file.

Create a simple coffee shop program that demonstrates different control structures.

Requirements:

Use an if, else if, and else statement to classify a coffee rating.
Display different messages depending on the rating.
Use a for loop to simulate brewing five cups of coffee.
Use a while loop to simulate calling the next three customers in a queue.
Keep the examples beginner-friendly and use the coffee shop theme.

**Reflection**
Mas nakita ko dito kung paano nagde-decide yung program depende sa value ng coffee rating. Sa if at else if, iba yung message na lalabas based sa score. Yung for loop naman useful kapag alam na natin kung ilang beses uulitin yung action. Sa while loop, nag-stop lang siya kapag na-reach na yung required number sa queue. Magandang example siya kasi madaling ma-imagine kung paano ginagamit ang loops sa actual shop system.

### 07_dom.html

**Prompt**
Open 07_dom.html and use it as the only target file.

Create a simple coffee shop page that demonstrates how JavaScript can interact with HTML elements.

Requirements:

Add a button that allows the user to change the page background color.
Use document.getElementById() to access the button and message elements.
Use addEventListener() so the button responds when clicked.
Use prompt() to ask the user for a preferred POS theme color.
Use setTimeout() to automatically change the promo message after 2 seconds.
Keep the implementation simple and beginner-friendly.

**Reflection**
Dito ko nakita na hindi lang pang-console yung JavaScript kasi kaya pala niyang baguhin yung actual webpage. Yung getElementById() yung ginagamit para mahanap yung button at message sa HTML. Nagustuhan ko rin yung addEventListener() kasi doon nagre-react yung page kapag may click. Yung setTimeout() naman nagpakita kung paano automatic na pwedeng magbago yung content after a few seconds. Mas naging clear sakin dito kung paano connected ang HTML at JavaScript sa isang interactive page.

### 08_essential_features.js

**Prompt**
Open 08_essential_features.js and use it as the only target file.

Create a simple coffee shop example that demonstrates three useful JavaScript features.

Requirements:

Store three coffee add-ons in an array and use map() to display each available add-on.
Create a barista object with a name and shift, then use destructuring to get those values.
Create an array of cold drinks and use the spread operator to add more drinks into a new array.
Display the results using console.log().
Keep the code beginner-friendly and stay with the coffee shop theme.

**Reflection**
Dito ko nakita na may shortcuts pala sa JavaScript para hindi maging mahaba yung code. Yung map() useful kapag gusto kong gawin yung same action sa bawat item ng array. Sa destructuring naman, mas mabilis kunin yung specific values na kailangan ko from an object. Yung spread operator naman nakatulong para makagawa ng bagong array without manually adding each item one by one. Simple lang yung examples pero useful sila lalo na pag mas marami nang data yung system.

### 09_tricky_parts.js

**Prompt**
Open 09_tricky_parts.js and use it as the only target file.

Create a beginner-friendly Coffee Shop example that demonstrates some tricky JavaScript concepts.

Requirements:

Show the difference between == and === using a number and a string with the same value.
Demonstrate the difference between undefined and null using an out-of-stock and sold-out item.
Create an object with both a regular method and an arrow method, then compare how this.name behaves in each one.
Create an original menu array, assign it to another variable, and demonstrate how changing the reference also changes the original array.
Create a separate copy using the spread operator and show that adding an item to the copy does not change the original array.
Keep the examples simple and use the Coffee Shop theme.

**Reflection**
Ito yung part na pinaka-nagulat ako kasi may mga behavior sa JavaScript na hindi agad obvious. Akala ko dati halos same lang ang == at ===, pero magkaiba pala sila sa pag-check ng type. Naging interesting din yung this sa regular function at arrow function kasi magkaiba yung result. Mas naintindihan ko rin why modifying a copied reference can still affect the original array. Yung spread operator naman showed me a simple way to make a separate copy.

### 10_let_const.js

**Prompt**
Open 10_let_const.js and use it as the only target file.

Create a simple JavaScript example that demonstrates the difference between let, const, and var.

Requirements:

Create a let variable for the current coffee order and change its value to another drink.
Create a const variable for the store branch and keep its value unchanged.
Create a var variable for the cashier system version.
Display all three values using console.log().
Keep the example simple and use the coffee shop theme.

**Reflection**
Dito ko nakita yung practical difference ng tatlong ways ng pag-declare ng variable. Yung currentOrder kayang palitan kasi let yung gamit. Yung storeBranch naman stays the same dahil const siya. May var pa sa example for comparison kahit less common na siya sa modern code. Mas clear sakin ngayon na dapat piliin yung declaration depende kung kailangan bang mabago yung value.

### 11_arrow_functions.js

**Prompt**
Open 11_arrow_functions.js and use it as the only target file.

Create a few small arrow functions for a coffee shop system.

Requirements:

Create an arrow function that receives a drink name and returns a preparation message.
Create another arrow function that calculates a 20% discount from a given price.
Create an arrow function without parameters that prints a receipt message.
Use concise arrow function syntax where appropriate.
Keep the examples simple and beginner-friendly.

**Reflection**
Mas compact pala yung arrow functions compared sa usual function syntax. Nagustuhan ko yung => kasi mas mabilis basahin lalo na sa short functions. Yung first function may input na drink, habang yung discount function naman may price na ginagamit sa calculation. May function din na walang parameter para sa simple receipt message. Helpful siya kapag maraming small actions sa isang system.

### 12_destructuring.js

**Prompt**
Open 12_destructuring.js and use it as the only target file.

Create a beginner-friendly example that demonstrates destructuring in JavaScript.

Requirements:

Create a customer object containing a customer name and reward points.
Use object destructuring to get those two values and display them.
Create an array containing three best-selling drinks.
Use array destructuring to get the first two drinks and display them.
Create a function that accepts a customer object through destructuring and prints the customer's name.
Keep the code simple and use the coffee shop theme.

**Reflection**
Dito ko nalaman na hindi pala kailangan kunin nang mano-mano bawat value sa object or array. Sa customer object, direct kong nakuha yung custName at points using destructuring. Same idea sa best-sellers, pero array naman yung pinagkuhanan ng values. Interesting din na pwedeng gamitin yung destructuring mismo sa parameter ng function. Mas neat tingnan yung code dahil less repeated yung syntax.

### 13_spread_rest.js

**Prompt**
Open 13_spread_rest.js and use it as the only target file.

Create a simple coffee shop example that demonstrates the spread and rest operators.

Requirements:

Start with an array of morning sales and create a new array by adding more sales values using the spread operator.
Create a coffee product object and add another property to it by using the spread operator.
Create a function that accepts any number of prices using the rest parameter.
Use the received prices to calculate the total bill.
Display the resulting arrays, object, and total bill.
Keep the implementation beginner-friendly and use the coffee shop theme.

**Reflection**
Dito ko nakita na parehong ... ang spread at rest pero magkaiba pala yung purpose nila. Sa sales array, ginagamit yung spread para pagsamahin yung existing values with new ones. Sa product object, nakatulong siya para mag-add ng property without rewriting the original details. Yung rest naman sa function, parang nilagay niya sa isang group lahat ng prices na ipapasa. Useful siya kapag hindi fixed yung number of values na kailangan ng function.

### 14_classes_inheritance.js

**Prompt**
Open 14_classes_inheritance.js and use it as the only target file.

Create a simple JavaScript example that demonstrates classes and inheritance.

Requirements:

Create a Staff class with a name property and a method for clocking in.
Create a Barista class that extends Staff.
Add a barista-specific method for brewing coffee.
Create a new Barista object and call both the inherited and barista-specific methods.
Keep the example simple and use the coffee shop workplace theme.

**Reflection**
Dito ko nakita kung paano pwedeng gumawa ng general class para sa common staff details. Yung Barista naman nag-extend sa Staff, kaya nagamit niya yung clockIn() without writing it again. Nag-add lang siya ng sariling brew() method para sa barista-specific action. Mas na-appreciate ko yung inheritance kasi nakakatulong siyang iwasan yung paulit-ulit na code. Parang useful siya kapag maraming roles sa isang system na may shared features.