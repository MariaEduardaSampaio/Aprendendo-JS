const ProgressaoAritmetica = function(n, a1, r){
    let resultado = [];
    for (let i = 1; i <= n; i++)
        resultado.push(a1 + (i - 1)*r);

    let somatoria = (a1 + resultado.at(n - 1))* n / 2;

    const PA = {
        resultado, 
        somatoria
    }
    return PA;
}

const ProgressaoGeometrica = function(n, a1, q){
    let resultado = [];
    for (let i = 1; i <= n; i++)
        resultado.push(a1 * Math.pow(q, i - 1));

    let somatoria = ((a1 * (Math.pow(q, n) - 1))/(q - 1));

    const PG = {
        resultado, 
        somatoria
    }
    return PG;
}

console.log(ProgressaoAritmetica(6, 3, 4))
console.log(ProgressaoGeometrica(6, 3, 4))
