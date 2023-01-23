// promessa gera um unico valor, mesmo que sejam passados mais de um
// eh possivel passar um objeto, de forma que o retorno contenha mais de um atributo
// que pode ser interpretado como varios valores depois de certo tipo de tratamento

const primeiroElemento = (array) => array[0]
const primeiraLetra = (string) => string[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve('ana', 'bia', 'carlos', 'daniel')
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)