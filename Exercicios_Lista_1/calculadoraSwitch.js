const calculadora = function(a, b, str){
    switch(str){
        case '+':
            return a + b; break;
        case '-':
            return a - b; break;
        case '/':
            return a / b; break;
        case '*':
            return a * b; break;
        default:
            return 'operação inválida'; break;
        }
}

console.log(calculadora(2, 3, '+'));
console.log(calculadora(6, 7, '-'));
console.log(calculadora(5, 2, '/'));
console.log(calculadora(4, 8, '*'));
console.log(calculadora(2, 3, '='));