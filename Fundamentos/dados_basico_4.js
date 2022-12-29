// ARRAY
const valores = [2, 3, 4.2, 1.9]
console.log(valores[0], valores[3])
console.log(valores[4]) // acessa endereço não definido, imprime undefined
valores[6] = 4
console.log(valores) // mostra dois indices vazios
console.log(valores.length) // total de elementos

valores.push({id: 3}, false, null, 'teste')
console.log(valores) // imprime todos os valores do array

console.log(valores.pop()) // imprime o que foi delevado
delete valores[0]
console.log(valores) // deleta o valor, mas o indice continua existindo

console.log(typeof valores) // array é do tipo object / objeto

// OBJETOS

const prod1 = {} // tem que ser chave para ser um objeto
prod1.nome = 'Celular Iphone 13'
prod1.preco = 7898.90

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 59.90
}
console.log(prod2)