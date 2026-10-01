const inputs = [0, "", "latte", null, undefined, [], {}];

inputs.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

const activeUser = "admin_ln";
const activePass = "kape123";

const canAccessPOS = activeUser !== "" && activePass !== "";
console.log(canAccessPOS); 

const isManager = false;
const isSupervisor = true;
const canVoidTransaction = isManager || isSupervisor;
console.log(canVoidTransaction); 

console.log("" || "Guest Customer");        
console.log(activeUser && "Access Granted!"); 
console.log(!canAccessPOS);                 