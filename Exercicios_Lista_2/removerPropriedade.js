const Pessoa = {
    nome: 'maria',
    idade: 19,
    peso: 72,
    apelido: 'duda',
    sobrenome: 'sampaio'
}

function removerPropriedade(obj, atr){
    const copia = Object.assign({}, obj)
    delete copia[atr];
    return copia
}

console.log(removerPropriedade(Pessoa, "idade"));
console.log(Object.is(removerPropriedade(Pessoa, "idade"), Pessoa))

console.log(removerPropriedade(Pessoa, "peso"));
console.log(Object.is(removerPropriedade(Pessoa, "peso"), Pessoa))