let x = 1, y = 3;
const soma = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const multiplicacao = (x, y) => x * y;
const divisao = (x, y) => x /y;
console.log("soma: ", soma(x, y),
            "\nsubtração: ", subtracao(x, y),
            "\nmultiplicação: ", multiplicacao(x, y),
            "\ndivisão: ", divisao(x, y).toFixed(2));