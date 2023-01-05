function soma1 (a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // mais segura dentro de soma1
    return a + b + c
}

function soma2(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log('soma 1: ', soma1(), soma1(3), soma1(1, 2, 3), soma1(2, 3)) 
console.log('soma 2: ', soma2(), soma2(3), soma2(1, 2, 3), soma2(2, 3))