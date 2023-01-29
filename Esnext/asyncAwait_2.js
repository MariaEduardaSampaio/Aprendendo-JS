function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('executando promise')
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(esperarPor)
//     .then(esperarPor)

async function executar() {
    let valor = await retornarValor()

    await esperarPor(2000)
    console.log('async await ', valor)
    await esperarPor(2000)
    console.log('async await ', valor + 1)
    await esperarPor(2000)
    console.log('async await ', valor + 2)
}

executar()

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}