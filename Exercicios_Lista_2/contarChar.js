function contarCaractere(sub_str, str){
    let somador = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] == sub_str)
            somador++;
    }
    return somador
}

console.log(contarCaractere("a","maria"))
console.log(contarCaractere("e", "eu queria saber como escrever poemas"))
