const fatorial = function(numero){
    resultado = 1;
    while (numero > 0){
        resultado *= numero;
        numero--;
    }
    return resultado;
}

console.log(fatorial(4))