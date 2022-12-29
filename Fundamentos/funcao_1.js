/* console.log(typeof Object)

class Produto {}
console.log(typeof Produto) */

// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // soma 2 com undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // ignora outros valores
imprimirSoma()

// função com retorno 
function soma (a, b = 0){
    return a + b
}
console.log(soma(2, 3)) // ignora a inicialização na função
console.log(soma(2)) //como n tem o segundo parametro, considera o segundo valor como 0
console.log(soma()) // como a não foi tratado, retorna NaN pq soma undefined com 0
console.log(soma("d")) // soma string com o valor b