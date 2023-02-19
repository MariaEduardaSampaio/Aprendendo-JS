const gulp = require('gulp')
const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2!')
    return cb()
}

function copiar(cb){
/*     gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    pode ser feito tanto do jeito acima quanto do jeito abaixo
    a forma abaixo é mais generalista, e pega todos os arquivos
    do formato txt, entrando até em outra pasta dps de pastaA */    
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB')) 
        /* transformação nos arquivos do gulp.src - pipeline ou pipe and filters */
/*         .pipe(transformacaoA()) */        
    return cb()
}

const fim = cb => {
    console.log('tarefa fim')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
    )
