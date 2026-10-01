import openStore from "./15_modules_export.js";
import { baristaInfo } from "./15_modules_export.js";

console.log(openStore());
console.log(`Barista: ${baristaInfo.name}, Branch: ${baristaInfo.branch}`);