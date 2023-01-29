function funcionarOuNao(valor, chanceErro){
    return new Promise ((resolve, reject) => {
        if (Math.random() < chanceErro) 
            reject('ocorreu um erro!')
        else 
            resolve(valor)
    })
}

funcionarOuNao('testando', 0.4)
    .then(console.log)
    .catch(err => console.log(err)) // trata o erro
    .then(v => console.log(v), err => console.log('erro na impressao do programa:', err))