const avaliacaoAluno = function(codigo, notas) {
    let maiorNota, indiceMaiorNota, mediaPonderada, statusAluno;

    for (let i = 0; i < notas.length; i++){
        if (i == 0){
            maiorNota = notas[i];
            indiceMaiorNota = 0;
        }
        
        if (maiorNota < notas[i]){
            maiorNota = notas[i];
            indiceMaiorNota = i;
        }
    }

    for (let i = 0; i < notas.length; i++){
        if (i == indiceMaiorNota)
            mediaPonderada += (4*notas[i]);
        else
            mediaPonderada += (3*notas[i]);
    }
    
    if (mediaPonderada >= 5)
        statusAluno = 'APROVADO';
    else
        statusAluno = 'REPROVADO';

    const Aluno = {
        codigo,
        mediaPonderada,
        statusAluno,
        notas
    }
    return Aluno;
}

console.log(avaliacaoAluno(2, [10, 4, 8]));
console.log(avaliacaoAluno(5, [5, 7, 2]));
