// null e undefined
let valor 
console.log(valor) // nao inicializada -> undefined

// console.log(valor2) // is not defined

valor = null // ausencia de valor, nao aponta para nenhum endereço
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)