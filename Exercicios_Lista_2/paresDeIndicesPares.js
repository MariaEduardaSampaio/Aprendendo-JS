const v1 = [1, 2, 3, 4, 5]
const v2 = [0, 1, 2, 3, 4]
const v3 = [18, 99, 101, 64, 108, 120, 112, 123]

valores = function(valor){
    return valor.filter((numero, indice) => {
        const numeroPar = numero % 2 == 0;
        const indicePar = indice % 2 == 0;

        return numeroPar && indicePar
    })
}

console.log(valores(v1))
console.log(valores(v2))
console.log(valores(v3))


