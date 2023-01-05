//factory simples -> função que retorna um objeto
function criarPessoa(){
    return {
        nome: 'ana',
        sobrenome: 'silva'
    }
}

console.log(criarPessoa())

// segundo exemplo:
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2199.43))
console.log(criarProduto('Iphone 13', 6989.90))