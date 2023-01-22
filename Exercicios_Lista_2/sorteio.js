function rand(){
    const min = 0, max = 10;
    return Math.floor((Math.random() * (max - min) + min));
}

function funcaoDaSorte(numero){
    numeroSorteado = rand();
    if (numero == numeroSorteado)
        return "parabens! o numero sorteado foi " + numeroSorteado;
    else
        return "que pena! o numero sorteado foi " + numeroSorteado;
}

console.log(funcaoDaSorte(1))

console.log(funcaoDaSorte(3))

console.log(funcaoDaSorte(7))