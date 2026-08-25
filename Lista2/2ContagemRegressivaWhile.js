const prompt = require ("prompt-sync")();

function contagemRegressiva(n){
  
    let resultado = [];
    while (n >= 1){
        resultado.push(n);
        n--;
    }
    return resultado;
}
  let p = Number(prompt("Digite um numero:"));
console.log(contagemRegressiva(p));