### 00_script_in_html.html
Dito ko naintindihan nang kaunti yung pag-link ng JavaScript sa HTML. May normal na <script> pala tapos may type="module". Ang pagkakaintindi ko, mas okay gamitin yung module kapag marami nang files kasi pwede na gumamit ng import at export. Hindi ko siya gaanong gets nung una pero mas naging clear nung pinag-practice namin.

### 01_base_syntax.js
Dito namin binalikan yung basic syntax sa JavaScript. Natutunan ko na may rules pala sa pag-name ng variables, like hindi pwede mag-start sa number. Nag-try din ako ng mga mali para makita kung anong error lalabas. Simple lang siya pero importante pala talaga kasi isang maliit na mali sa syntax pwedeng hindi na gumana yung code.

### 02_variables.js
Dito ako medyo nalito sa == at ===. Akala ko dati same lang sila pero may difference pala. Yung ===, chine-check pati yung data type ng value. Na-practice ko rin yung typeof para malaman kung number, string, or ibang type yung data. Mas naintindihan ko siya nung gumawa kami ng simple examples.

### 03_functions.js
Dito naman yung functions, from regular function hanggang arrow function. Mas familiar ako sa regular function pero napansin ko na mas maikli yung arrow function. Natutunan ko rin na pwede mag-return ng object sa function. At first medyo weird siya tingnan pero habang nagpa-practice, nasasanay din naman.

### 04_objects.js
Dito ko mas nakilala yung objects sa JavaScript. Pwede pala maglagay ng properties tapos pwede rin ng function sa loob, which is method. Yung this naman medyo kailangan ko pa tandaan kung ano exactly ang tinutukoy niya, pero gets ko na ginagamit siya para ma-access yung properties ng sariling object.

### 05_arrays.js
Dito na-refresh sa akin yung arrays. Nagamit ko yung push() para magdagdag and shift() para magtanggal. Yung map() yung medyo interesting para sa akin kasi pwede niyang baguhin or i-transform yung mga nasa array nang hindi kailangan ng sobrang habang loop. Mas na-gets ko siya after gumawa ng examples.

### 06_control_structures.js
Dito naman yung if-else at loops. Basic na siya pero mas naintindihan ko kung saan siya ginagamit sa actual na program. Halimbawa, may condition muna bago gumawa ng action, or paulit-ulit na process gamit yung loop. Hindi siya bagong concept pero kailangan pala talaga sa halos lahat ng programs.

### 07_dom.html
Dito ko nakita kung paano nagiging interactive yung HTML gamit ang JavaScript. Natutunan ko yung getElementById, addEventListener, at setTimeout. Mas nagustuhan ko yung part na to kasi may actual na buttons na kapag clinick, may nagbabago sa webpage. Doon ko mas nakita kung para saan talaga yung JavaScript.

### 08_essential_features.js
Dito yung destructuring at spread operator naman. Yung destructuring, pwede pala kunin agad yung kailangan na property sa object. Yung spread naman, parang pwede siyang gamitin para pagsamahin or gumawa ng copy ng arrays or objects. Medyo bago siya sa akin pero useful pala kapag maraming data.

### 09_tricky_parts.js
Ito yung part na medyo nakakalito para sa akin, lalo na yung this sa regular function at arrow function. Natutunan ko na iba yung behavior nila. Nalaman ko rin na kapag nag-assign ka ng array sa ibang variable, hindi pala automatic na separate copy yun. Same reference pa rin pala sila. Kaya doon ko rin mas naintindihan kung bakit ginagamit yung spread operator para gumawa ng separate copy.

### 10_let_const.js
Dito naging mas clear sa akin yung difference ng let at const. Yung const, para sa values na hindi naman dapat magbago, habang yung let para sa values na possible mag-change. Dati basta ginagamit ko lang kung ano yung nakasanayan, pero ngayon mas may idea na ako kung kailan gagamitin bawat isa. Yung var, tinuro rin na usually hindi na siya yung preferred gamitin ngayon.

### 11_arrow_functions.js
Dito mas na-practice ko yung arrow functions. Nalaman ko na kapag simple lang yung function at may isang return, pwede pala mas pinaiksi gamit yung implicit return. Sa una parang iba lang yung itsura niya sa nakasanayan ko, pero habang ginagamit ko siya mas nagiging familiar na rin.

### 12_destructuring.js
Dito mas pinag-aralan ko yung destructuring. Nalaman ko na hindi lang pala sa loob ng function pwede gamitin. Pwede rin sa parameters mismo. So parang makukuha mo na agad yung property na kailangan mo instead na buong object pa yung gamitin tapos saka mo kukunin yung value. Medyo advanced siya para sa akin pero useful siya kapag nasanay ka na.

### 13_spread_rest.js
Dito naman nagkaroon ako ng idea sa difference ng spread at rest. Yung spread, usually ginagamit para mag-copy or combine ng arrays and objects, habang yung rest parameter naman kinukuha yung remaining arguments at ginagawa silang array. Hindi ko agad na-gets yung difference nung una pero mas naging okay nung may examples na.

### 14_classes_inheritance.js
Dito naman yung OOP concepts na may class at inheritance. Medyo familiar yung idea dahil naturo na rin before, pero ibang syntax lang sa JavaScript. Natutunan ko yung extends para magkaroon ng class na nag-iinherit from another class. Hindi ko pa siguro ganun kagaling gamitin pero at least mas naiintindihan ko na kung paano siya gumagana.

### 15_modules_export.js
Dito naman ginawa yung paghiwalay ng code sa different files gamit ang export. So hindi na kailangan nasa isang malaking file lahat ng data at functions. May default export at named export din pala. Medyo kailangan ko pa tingnan yung syntax minsan pero gets ko naman na ginagawa ito para mas organized yung code.

### 16_modules_import.js
Dito naman namin ginamit yung import para kunin yung mga galing sa ibang file. Napansin ko na iba yung syntax kapag default export compared sa named export. At first nalilito pa ako kung may braces ba or wala, pero habang nagpa-practice mas madaling maalala.

### 17_logical_operators.js
Dito namin binalikan yung truthy at falsy values. Dati ang alam ko lang falsy is false, pero may iba pa pala tulad ng 0, empty string, null, at undefined. Na-practice din yung && at || para sa conditions. Simple tingnan pero marami palang gamit kapag gumagawa ng actual logic.

### 18_ternary_nullish.js
Dito ko na-practice yung ternary operator, optional chaining, at nullish coalescing. Yung ternary, parang shortened version ng if-else. Yung optional chaining naman nakita ko na useful kapag possible na undefined yung data para hindi agad mag-error. Yung ?? naman para sa null at undefined. Medyo maraming symbols pero mas okay na yung idea ko ngayon kaysa nung una.

### 19_strings_numbers.js
Dito naman yung mga built-in methods for strings and numbers. Nagamit namin yung trim(), split(), at toUpperCase(). May toFixed(2) din para sa numbers, lalo na kapag gusto ng two decimal places. Basic methods lang sila pero nakita ko na useful talaga sa pag-handle ng user input at values.

### 20_array_methods.js
Ito yung part na maraming bagong methods para sa arrays. Kasama yung filter(), find(), some(), every(), at sort(). Hindi ko pa kabisado lahat nang automatic pero alam ko na ngayon kung para saan sila. Mas convenient sila kaysa gumawa lagi ng mahahabang loops depende sa gagawin sa data.

### 21_errors_json.js
Dito naman natutunan ko yung basic error handling gamit ang try...catch at throw new Error. Mas naintindihan ko na hindi dapat basta mag-crash yung program kapag may problem, dapat may way para ma-handle yung error. Kasama rin dito yung JSON.stringify() at JSON.parse(). Magkaiba pala sila, yung isa ginagawang string yung object, tapos yung isa binabalik siya as object.

### 22_async_javascript.js
Ito yung part na medyo nahirapan ako kasi async JavaScript na. Tinuro yung callbacks, promises, at async/await. Mas madali para sa akin intindihin yung async/await kasi mas mukhang normal na flow ng code.

### 23_closures_scope.js
Ito yung isa sa mga part na medyo kailangan ko talagang balikan. Dito ko natutunan yung scope ng variables at kung paano gumagana yung closure. Yung idea na kahit tapos na yung outer function, naa-access pa rin ng inner function yung variable niya, medyo kakaiba sa una. Pero after ng examples, nagkaroon na ako ng idea kung bakit siya useful lalo na sa mga bagay na may sariling counter or stored values.