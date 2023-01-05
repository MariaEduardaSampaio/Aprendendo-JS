const fabricantes = ['Mercedes', 'Audi', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))


const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// com callback:
notasBaixas = notas.filter(function(nota){
    return nota < 7
})
// com callback e arrow:
notasBaixasArrow = notas.filter(nota => nota < 7)

// definindo uma funcao anonima como constante:
const notasMenorQue7 = nota => nota < 7
const notasBaixasConst = notas.filter(notasMenorQue7)
console.log('apenas com callback: ', notasBaixas)
console.log('com callback e arrow: ', notasBaixasArrow)
console.log('com callback e funcao anonima: ', notasBaixasConst)