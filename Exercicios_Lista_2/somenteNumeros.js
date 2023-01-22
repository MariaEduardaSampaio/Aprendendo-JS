function somenteNumeros (valor){
    if (typeof valor == "number")
        return valor;
}

const v1 = [1, 'a', '3', 'maria eduarda', true, 10, 98]
console.log(v1.filter(somenteNumeros))