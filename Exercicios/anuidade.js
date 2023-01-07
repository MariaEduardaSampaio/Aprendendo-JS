const pagarAnuidade = function(mes, valor){
    switch(mes){
        case 1:
            return valor;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return valor * Math.pow(1.05, mes - 1);
            break;
        default:
            return 'mes nao identificado';
            break;                                
    }
}

console.log(pagarAnuidade(4, 100).toFixed(2));
console.log(pagarAnuidade(1, 100).toFixed(2));
console.log(pagarAnuidade(10, 100).toFixed(2));