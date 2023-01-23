// nao aceita repetição e não é indexado como um array
const times = new Set()
times.add('vasco')
times.add('são paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco') // é ignorado

console.log(times)
console.log(times.has('são paulo'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'laura', 'bruno', 'bruno', 'duda']
const nomesSet = new Set(nomes)
console.log(nomesSet)