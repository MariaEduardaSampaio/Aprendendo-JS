// IIFE: Immediately invoked function expression (função imediatamente invocada)

(function(){
    console.log('será executado na hora')
    console.log('foge do escopo mais abrangente')
})()

// Call e Apply
function getPreco(imposto = 0, moeda = 'R$'){
    return `${this.nome}: ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4800,
    desc: 0.15,
    getPreco
}

global.nome = 'generico'
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {nome: 'mobi', preco: 45000, desc: 0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.30, 'Euro'])) // passa os parametros dentro de uma array