const jurosSimples = function (capital, taxa, tempo){
    let montante = capital * taxa * tempo;
    return montante;
}

const jurosCompostos = function (capital, taxa, tempo){
    let montante = capital * Math.pow((1 + taxa), tempo);
    return montante;
}

console.log('juros simples: ', jurosSimples(1000, 0.1, 6));
console.log('\njuros compostos: ', jurosCompostos(1000, 0.1, 6));