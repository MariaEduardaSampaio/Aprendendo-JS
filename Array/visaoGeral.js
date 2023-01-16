console.log(typeof Array, typeof new Array);

let aprovados = new Array('bia', 'carlos', 'ana') // nao muito recomendado fazer dessa forma
console.log(aprovados)

console.log(aprovados[0])

aprovados.push('sabrina')
console.log(aprovados.length)

aprovados[9] = 'bruno'

console.log(aprovados)

console.log(aprovados.sort())

delete aprovados[1]
console.log(aprovados)
aprovados.splice(0, 2) // intervalo de elementos para ser excluido
console.log(aprovados)

aprovados.splice(1, 0, 'elemento 1', 'elemento 2')
console.log(aprovados)