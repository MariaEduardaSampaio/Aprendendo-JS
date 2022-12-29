const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 4)

const soma = (a, b) => {
    // evita o uso de function
    return a + b
}
console.log(soma(2, 7))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 9))

{
    {
        {
            var str = 'oi!'
            console.log(str)
        }
    }
}
console.log(str) // também consegue acessar, msm fora do escopo!!

function teste(){
    var teste_local = 123
    console.log(teste_local)
}
teste()
// console.log(teste_local) //dá erro!
// var sao tipo variaveis globais

