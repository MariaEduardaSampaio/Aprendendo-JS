function QuantasPalavras(str){
    const palavras = str.split(' ')
    return palavras.length;
}

// função arrow
// QuantasPalavras = str => { const palavras = str.split(" "); return palavras.length}

console.log(QuantasPalavras("meu nome é maria eduarda"))
console.log(QuantasPalavras("eu tenho um irmão e uma irmã mais velhos"))
console.log(QuantasPalavras("olá! como você está?"))