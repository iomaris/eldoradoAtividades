// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: o produto do
//dobro do primeiro com metade do segundo. a soma do triplo do primeiro com o terceiro. o terceiro
// elevado ao cubo.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro numero inteiro:"));
let num2 = Number(prompt("Digite o segundo numero inteiro:"));
let num3 = Number(prompt("Digite um numero real:"));

let produto = (num1 * 2) * (num2 / 2);
let soma = (num1 * 3) + num3;
let cubo = num3 ** 3;

console.log("O produto do dobro do primeiro com metade do segundo é:" +produto);
console.log("A soma do triplo do primeiro com o terceiro é:" +soma);
console.log("O terceiro elevado ao cubo é" +cubo);