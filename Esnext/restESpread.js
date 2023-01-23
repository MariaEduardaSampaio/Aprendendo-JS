// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de função

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))

// usar spread com objeto
const funcionario = {nome: 'maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

delete funcionario.nome
console.log(funcionario) // pra mostrar que é um clone

console.log(clone)

// usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['lucas', ...grupoA, 'raissa', 'bruno']
console.log(grupoFinal)