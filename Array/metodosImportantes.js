const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() // retira da pilha
console.log(pilotos)

pilotos.push('verstappen') // acrescenta na pilha
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

//splice pode adicionar ou remover elementos
// adicionando
pilotos.splice(2, 0, 'bottas', 'massa')
console.log(pilotos)

// removendo
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // retorna um novo array a partir da posicao especifica
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // no intervalo, sendo [2, 4) neste exemplo
console.log(algunsPilotos2)