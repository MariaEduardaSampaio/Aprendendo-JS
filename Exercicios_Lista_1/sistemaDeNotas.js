const sistemaDeNotas = function(notasIniciais){
    let notasFinais = [];

    for (let i = 0; i < notasIniciais.length; i++){
        if (notasIniciais[i] < 38)
            notasFinais.push(notasIniciais[i]);
        else {
            let multDeCinco = 0;
            do {
                multDeCinco += 5;
            } while (multDeCinco < notasIniciais[i])
            if ((multDeCinco - notasIniciais[i]) < 3)
                notasFinais.push(multDeCinco);
            else
                notasFinais.push(notasIniciais[i])
        }
    }
    return notasFinais
}

let vet = [29, 35, 38, 57, 60, 72, 81, 90, 99];
console.log(sistemaDeNotas(vet));