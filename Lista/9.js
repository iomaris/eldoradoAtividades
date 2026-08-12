// Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius. C = (5 * (F-32) / 9).

const prompt = require ("prompt-sync")();

let f =Number(prompt("informe a temperatura em Farenheit"));
C = (5 * (f-32) / 9);
console.log("a temperatura em celsius é: "+C+"º");
