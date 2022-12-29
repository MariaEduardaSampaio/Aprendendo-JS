const peso1 = 1.0
const peso2 = 1.5

console.log(peso1, " ", peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

let media = (5.4*peso1 + 6.3*peso2)/ (peso1 + peso2)
console.log(media.toFixed(3)) // fixa a qntd de casas decimais
console.log(media.toString(2)) // imprime o num em binario
console.log(typeof media) // imprime o tipo do dado
console.log(7 / 0)
console.log("10.4" / 3) //se n for um numero na string gera NaN (Not a Number)

// TESTES COM VARIAVEIS BOOLEANAS
let isAtivo = true
let isReal = 1
console.log(!!isReal) // transforma para booleano
console.log(!!-4)
console.log(!![])
console.log(isAtivo)

console.log(!!"") // string vazia retorna falso
console.log(!!(isReal == false))
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

let nome = 'maria'
let nomevazio = ''
console.log(nome || "Desconhecido") // qnd string estiver vazia retorna o que está do lado direito
console.log(nomevazio || "Desconhecido")
