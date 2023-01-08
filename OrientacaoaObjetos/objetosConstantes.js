const produto = new Object
produto.nome = 'cadeira';
produto['marca do produto'] = 'generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 43,
        endereco:{
            logradouro: 'rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 26
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

console.log(carro.proprietario);
delete carro.proprietario.endereco
console.log(carro)

Object.freeze(carro);
delete carro.condutores; //como 'congelou' o objeto nao eh possivel excluir esse atributo de carro
console.log(carro);