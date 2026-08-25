const prompt = require ("prompt-sync")();
function somarMultiplos(n){
    
let soma = 0;
for (let i = 1; i <= n; i++){
if(i% 3 === 0 || i%5 === 0){
soma += i;

}
}
return soma;
}
let p = Number(prompt("Digite um numero:"));
console.log(somarMultiplos(p));