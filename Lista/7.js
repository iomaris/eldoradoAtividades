
// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuario.

const prompt = require ("prompt-sync")();

let lado = Number(prompt("digite o lado do quadrado"));
area =(lado**2);
area2x =(2*area);
console.log("a area é: "+area+" e o dobro é: "+area2x);
