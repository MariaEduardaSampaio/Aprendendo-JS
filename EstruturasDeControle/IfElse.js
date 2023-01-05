Number.prototype.entre = function (inicio, fim) {
    if (inicio > fim) 
        [inicio, fim] = [fim, inicio]
    return this >= inicio && this <= fim
}

const Resultado = function(nota){
    if (nota.entre(9, 10))
        console.log('Quadro de honra')    
    else if (nota.entre(7, 8.99)) 
        console.log('Aprovado')
    else if (nota.entre(4, 6.99))
        console.log('Recuperação')
    else if (nota.entre(0, 3.99))
        console.log('Reprovado')
    else
        console.log('Nota inválida')
}

Resultado(9.5)
Resultado(8.3)
Resultado(6.2)
Resultado(2)
Resultado(-1)
Resultado(11)