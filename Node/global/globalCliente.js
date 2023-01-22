require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'eita'
// se colocar object.freeze não é possivel alterar os parametros globais
//trazendo mais controle 
console.log(MinhaApp.nome)
