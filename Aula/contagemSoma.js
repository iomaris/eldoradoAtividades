const prompt = require("prompt-sync")();

let sum = 0;
for (let i = 1; i <= 5; i++){
let value = Number(prompt("Number:"));
sum = sum + value;
}
let avg = sum /5;
console.log("Sum:", sum, "Average", avg);