//Faça um Programa que peça as 4 notas bimestrais e mostre a média.
const prompt = require ("prompt-sync")();

let nota1 = Number(prompt("digite a primeira nota:"));
let nota2 = Number(prompt("digite a segunda nota:"));
let nota3 = Number(prompt("digite a terceira nota:"));
let nota4 = Number(prompt("digite a quarta nota:"));
media = (nota1+nota2+nota3+nota4)/4;
console.log("a media é: " +media);
