const cliente = {
    nome: 'maria',
    idade: 19,
    peso: 72,
    endereco: {
        logradouro: 'rua abcde',
        numero: '123'
    }
}

console.log(cliente)
console.log(typeof cliente)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log(nome, 'em estoque')
    }
}

const obj1 = new Obj('Cadeira')
const obj2 = new Obj('Mesa')
const obj3 = new Obj('Mouse')
console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()