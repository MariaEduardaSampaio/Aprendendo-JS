const aprovados = ['maria', 'flavio', 'sabrina', 'livia', 'tiago']

aprovados.forEach(function(nome, indice, array, x){ // x é undefined
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) 
// o primeiro parametro é sempre o valor e o segundo o indice
// para ter acesso ao indice eh preciso por um primeiro parametro para o valor, mesmo que nao for ser usado
const exibirAprovados = aprovado => console.log()
aprovados.forEach(exibirAprovados)

// pt.2 
// implementando o proprio forEach
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
console.log('Segundo caso:')
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})