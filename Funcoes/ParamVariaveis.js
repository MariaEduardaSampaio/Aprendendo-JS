function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(0))
console.log(soma(1, 2, 4.2, 41.0, -10, -16, 21))
console.log(soma(1.4, 2.0, ', duda'))
console.log(soma('a', 'b', 'c'))