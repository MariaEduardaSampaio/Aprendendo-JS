function realizarBhaskara(a, b, c){
    let resultados = [];

    let bhaskara_positivo = (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);
    let bhaskara_negativo = (-b - Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);

    if (bhaskara_negativo < 0)
        resultados.push(`delta é negativo: ${bhaskara_negativo}`);

    if (bhaskara_positivo < 0)
        resultados.push(`delta é negativo: ${bhaskara_positivo}`);

    if (bhaskara_negativo >= 0)
        resultados.push(bhaskara_negativo);

    if (bhaskara_positivo >= 0)
        resultados.push(bhaskara_positivo);
        
    return resultados;
}

console.log(realizarBhaskara(1, 2, -15)) // -5, 3
console.log(realizarBhaskara(4, 6, 0)) // -3/2, 0