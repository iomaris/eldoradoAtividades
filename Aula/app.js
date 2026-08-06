//importacao
const prompt = require("prompt-sync")();

let horaTrabalhadas, valorHora, valorFGTS;
let descontos, descontoIR;
const DESCONTO_INSS = 0.1;
const PORCENTAGEM_FGTS = 0.11;
let salarioLiquido = 0;

//entrada de dados

//processamento
salarioBruto = horaTrabalhadas * valorHora;

//calcular o valor do FGTS
valorFGTS = salarioBruto * PORCENTAGEM_FGTS;

//calcular o valor do INSS
let valorINSS = salarioBruto * DESCONTO_INSS;

//calcular o DESCONTO do IR

descontoIR = 0;
43;

if (salarioBruto > 900 && salarioBruto <= 1500) {
  descontoIR = 0.05;
} else if (salarioBruto > 1500 && salarioBruto <= 2500) {
  descontoIR = 0.1;
} else if (salarioBruto > 2500) {
  descontoIR = 0.2;
}

//valor do desconto IR
let valorIR = salarioBruto * descontoIR;

//valor total de desconto
descontos = valorIR + valorINSS;

//calcular salario liquido
salarioLiquido = salarioBruto - descontos;

//saida de dados

//1 Salario Bruto
console.log(
  "Salário Bruto: (" +
    valorHora +
    "*" +
    horaTrabalhadas +
    "): R$ " +
    salarioBruto.toFixed(2),
);
//2 IR
console.log(
  "(-) IR (" + (descontoIR * 100).toFixed(0) + ") : R$ " + valorIR.toFixed(2),
);
//3 INSS
console.log(
  "(-) INSS (" +
    (DESCONTO_INSS * 100).toFixed(0) +
    ") : R$ " +
    valorINSS.toFixed(2),
);
//4 FGTS
console.log(
  "FGTS (" +
    (PORCENTAGEM_FGTS * 100).toFixed(0) +
    ") : R$ " +
    valorFGTS.toFixed(2),
);
//5 Total descontos
console.log("Total Desconto : R$ " + descontos.toFixed(2));
//Salario Líquido
console.log("Salário Liquido : R$ " + salarioLiquido.toFixed(2));
