// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit.
const prompt = require ("prompt-sync")();

let c = Number (prompt("Informe a temperatura em graus Celsius:"));
let f = (c * 9/5) + 32;
console.log("A temperatura em graus Farenheit é: " +f);