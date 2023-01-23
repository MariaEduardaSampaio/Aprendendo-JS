const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'função'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
//nao é possivel ter dois valores associados a mesma chave,
// entao é sobreposto com o ultimo valor inserido
console.log(chavesVariadas)