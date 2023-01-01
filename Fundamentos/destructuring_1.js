const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 123
    }
}

const {nome, idade} = pessoa // faz a destructuring de nome e idade do objeto pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // faz a dest e cria uma cópia para n e i
console.log(n, i)

const [n1, , n3, , n5, n6 = -1] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [a, [, nota, nota2, nota3]] = [[, 8, 8], [9, 6, 8]]
console.log(a, nota, nota2, nota3)

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({max: 50, min: 30}))
const obj = {max: 10, min: 100}
console.log(rand(obj))
console.log(rand({})) // entre 0 e 1000, padrão
// console.log(rand()) dá erro!