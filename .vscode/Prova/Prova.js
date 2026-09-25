/* Crie uma classe ProdutoRoupa com nome, preco e estoque. Implemente um metodo estaEmFalta() que retorne true se estoque < 5
(usando uma decisao simples). EM seguida, use map para gerar um vetor com {nome, emFalta} de todos os produtos de um array.


Entrada para teste de mesa : produtos = [new ProdutoRoupa("Camisa", 50, 3), new ProdutoRoupa("Calça", 80, 10),
new ProdutoRoupa("Jaqueta", 150,2)]       */

const prompt = require("prompt-sync")();

class ProdutoRoupa {
    constructor(nome, preco, estoque) {
this.nome = nome;
this.preco = preco;
this.estoque = estoque;
    }

    estaEmFalta() {
        if (this.estoque < 5) {
            return true;
        }
        return false;
    }
}
let roupa = [];
for (let i = 1; i <= 1; i++) {
   
    let nome = prompt("Nome: ");
    let preco = Number(prompt("Preço: "));
    let estoque = Number(prompt("Estoque: "));
    roupa.push(new ProdutoRoupa(nome, preco, estoque));
}
let statusProdutos = roupa.map(produto => {
    return {
        nome: produto.nome,
        emFalta: produto.estaEmFalta()
    };
});

console.log(statusProdutos);