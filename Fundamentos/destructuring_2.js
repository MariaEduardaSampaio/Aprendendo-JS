function rand([min = 0, max = 1000]){
    if (min > max) 
        [ min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 35])) // pode passar os dois valores
// um dos dois ou nenhum, ja que os valores possuem um valor padrao na chamada da função
// console.log(rand([])) deve ter a chave, msm q seja vazia
console.log(rand([990]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand()) dá erro