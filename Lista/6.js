c// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área
const prompt = require ("prompt-sync")();

let pi = 3.14;
let raio = Number(prompt("informe o raio do circulo: "));
area =(pi*raio**2);
console.log("a area do circulo é: "+area);
