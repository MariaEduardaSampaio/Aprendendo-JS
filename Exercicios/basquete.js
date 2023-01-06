const desempenho = function(str){
    let pontos = [];
    pontos = str.split(" ");
    pontos = pontos.map(Number); // map itera sobre o vetor de string e inclui no vetor
    //fazendo o typecasting de number
    let maiorPontuacao = 0;
    let bateuRecorde = -1; // porque a primeira partida não conta
    for (let i = 0; i < pontos.length; i++){
        if (maiorPontuacao < pontos[i]){
            maiorPontuacao = pontos[i];
            bateuRecorde++;
        }
    }
    let menorPontuacao = maiorPontuacao;
    let indiceMenorPontuacao;
    for (let i = 0; i < pontos.length; i++){
        if (menorPontuacao > pontos[i]){
            menorPontuacao = pontos[i];
            indiceMenorPontuacao = i + 1;
        }
    }

    let resultado = [bateuRecorde, indiceMenorPontuacao];
    return resultado;
}

console.log(desempenho("10 20 20 8 25 3 0 30 1"))