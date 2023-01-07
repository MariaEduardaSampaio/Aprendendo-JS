const maquinaDeTroco = function(valor){
    const notas = [100, 50, 20, 10, 5, 2, 1];
    let troco = [], i = 0;
    while (valor != 0){
        if (notas[i] <= valor){
            valor -= notas[i];
            troco.push(notas[i]);
        }
        else
            i++;
    
    }
    return troco;
}

console.log(maquinaDeTroco(124));
console.log(maquinaDeTroco(17));
console.log(maquinaDeTroco(56));
console.log(maquinaDeTroco(88));


