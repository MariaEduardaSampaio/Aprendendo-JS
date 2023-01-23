function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            // reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'que legal')
    .then(frase => frase.concat('???'))
    .then(outraFrase => console.log(outraFrase)) // outraFrase é que legal???
    .catch(e => console.log(e))