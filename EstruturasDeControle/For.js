const notas = [3.3, 4.2, 1.6, 8.4, 7.2, 9.0]
for (let i = 0; i < notas.length; i++){
    console.log(`contador: ${i} nota: ${notas[i]}`)
}

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Sampaio',
    idade: 19,
    peso: 70
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}