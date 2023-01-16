const exibirDinheiro = function(valor) {
    valor = `R$${valor.toFixed(2).toString().replace('.', ',')}`
    console.log(valor)
}
exibirDinheiro(0.1 + 0.2)