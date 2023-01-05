function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao sorteada: ${opcao}.`)
}
// poderia ser também:
/*
let opcao
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao sorteada: ${opcao}.`)
} while (opcao != -1)
*/

console.log('Até a próxima!')