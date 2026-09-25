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

// FUNÇÃO 1: Focada apenas em coletar os dados e retornar a lista de roupas
function cadastrarProdutos(quantidade) {
    let listaDeRoupas = [];
    
    for (let i = 1; i <= quantidade; i++) {
        console.log(`--- Cadastro do Produto ${i} ---`);
        let nome = prompt("Nome: ");
        let preco = Number(prompt("Preço: "));
        let estoque = Number(prompt("Estoque: "));
        
        listaDeRoupas.push(new ProdutoRoupa(nome, preco, estoque));
    }
    
    return listaDeRoupas;
}

// FUNÇÃO 2: Focada apenas em processar e mapear o status de uma lista qualquer
function analisarStatusEstoque(listaDeProdutos) {
    return listaDeProdutos.map(produto => {
        return {
            nome: produto.nome,
            emFalta: produto.estaEmFalta()
        };
    });
}

// --- EXECUÇÃO DO PROGRAMA ---

// 1. Chamamos a função de cadastro pedindo para registrar 2 produtos
let roupa = cadastrarProdutos(2);

// 2. Passamos a lista gerada para a função que analisa o estoque
let statusProdutos = analisarStatusEstoque(roupa);

// 3. Exibimos o resultado final
console.log("\nResultado do Mapeamento:");
console.log(statusProdutos);
