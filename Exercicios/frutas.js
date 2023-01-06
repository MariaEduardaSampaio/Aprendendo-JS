const mercado = function(fruta){
    switch(fruta){
        case 'maçã':
            return 'não vendemos esta fruta aqui';
            break;
        case 'kiwi':
            return 'estamos com escassez de kiwis';
            break;
        case 'melancia':
            return 'aqui está, são 3 reais o quilo';
            break;
        default:
            return 'não possuimos essa fruta aqui'
            break;
    }
}

console.log(mercado('kiwi'))
console.log(mercado('banana'))
console.log(mercado('maçã'))
console.log(mercado('melancia'))
