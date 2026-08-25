
const prompt = require ("prompt-sync")();

function ehPrimo(n){
   
    if (n < 2) return false;

     for(let i = 2; i * i <= n; i++){
        if (n% i == 0)
           
            return false;
        
    }
    return true;

}
 let p= console.log(prompt("Digite o numero:"));
console.log (ehPrimo(p));