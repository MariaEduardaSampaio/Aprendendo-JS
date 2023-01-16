const diaDaSemana = function(dia){
    switch(dia){
        case 1:
        case 7:
            return 'fim de semana';
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'dia útil';
            break;
        default:
            return 'dia inválido';
            break;
    }
}

console.log(diaDaSemana(6));