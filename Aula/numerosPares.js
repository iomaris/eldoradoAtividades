const prompt = require("prompt-sync")();

let pairs = 0;
for(let i = 1; i<= 10; i++){
let n = Number(prompt("Number:"));
if (n%2 === 0){
pairs = pairs +1;
}
}
console.log("Number of ever numbers:", pairs);
