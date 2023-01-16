function multiplicaComCondicao(vetor, numero){
    let multiplo = [];
    if(numero > 5){
        for(let i = 0; i < vetor.length; i++)
            multiplo.push(numero*vetor[i]);
    }
    else 
        return 'numero menor que 5'
    return multiplo;
}

function multiplicaVetor(vetor, numero){
    let multiplo = [];
    for(let i = 0; i < vetor.length; i++){
        multiplo.push(numero*vetor[i]);
    }
    
    return multiplo;
}


console.log(multiplicaVetor([1, 3, 6, 7, 2], 3))
console.log(multiplicaComCondicao([1, 4, 5, 7, 6], 4))
console.log(multiplicaComCondicao([2, 3, 0, 9, 8], 6))