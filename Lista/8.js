// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const prompt = require ("prompt-sync")();

let pagHora = Number(prompt("quanto voce ganha por hora?"));
let mesHora = Number(prompt("quantas horas voce trabalha no mes?"));
salario = (pagHora*mesHora);
console.log("o seu salario no mes é: "+salario+" reais");
