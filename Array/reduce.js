const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true}
]
// reduce(callback(acumulator, inicializer))
// se tiver valor inicial, ele vai ser considerado na primeira iteração da callback
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual;
})

console.log(alunos.map(a => a.nota), 'resultado final:', resultado)

// desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const SaoBolsistas = alunos.map(a => a.bolsista).reduce(todosBolsistas)

console.log(SaoBolsistas)

// desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

// implementação de reduce

Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce2(soma))