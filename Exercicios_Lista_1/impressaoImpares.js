const imprimeImpares = function(min = 0, max = 100){
    let impares = [];
    if (max < min)
        [min, max] = [max, min];
    
    let iterator = min;
    while(iterator <= max){
        if (iterator % 2 != 0)
            impares.push(iterator);
        iterator++;
    }
    return impares;
}

console.log(imprimeImpares());
console.log(imprimeImpares(250, 230));
console.log(imprimeImpares(1, 20));
console.log(imprimeImpares(-14, -2));