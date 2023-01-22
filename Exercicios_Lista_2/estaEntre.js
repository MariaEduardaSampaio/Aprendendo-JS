function estaEntre (numero, minimo, maximo, inclusivo = false){
    if (minimo > maximo) [minimo, maximo] = [maximo, minimo];
    if (inclusivo){
        if (numero >= minimo && numero <= maximo)
            return true;
        else
            return false;
    }
    else {
        if (numero > minimo && numero < maximo)
            return true;
        else
            return false;
    }
}

console.log(estaEntre(10, 50, 100));
console.log(estaEntre(5, 0, 10, true));
console.log(estaEntre(5, 5, 10));
console.log(estaEntre(90, 0, 90, false));
console.log(estaEntre(6, -6, 12));
