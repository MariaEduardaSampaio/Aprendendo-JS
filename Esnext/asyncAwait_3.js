function gerarNumerosEntre(min, max, numerosProibidos){
    if (min > max) [min, max] = [max, min]

    return new Promise ((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio))
            reject('numero repetido!')
        else 
            resolve(aleatorio)
        })
}

async function gerarMegaSena(qntdDeNumeros, tentativas = 1){
    try {
        const numeros = []
        for (let _ of Array(20).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e){
        if (tentativas > 10)
            throw "nao deu certo!"
        else 
            return gerarMegaSena(qntdDeNumeros, tentativas + 1)
    }
}

gerarMegaSena(20)
    .then(console.log)
    .catch(console.log)

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)