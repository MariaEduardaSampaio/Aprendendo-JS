function inverso(dado){
    if (typeof dado == "boolean")
        return !dado;
    else if (dado == 0)
        return dado;
    else if (typeof dado == "number")
        return -dado;
    else 
        return "booleano ou numero esperados, mas o parametro é do tipo " + typeof dado;
}

console.log(inverso(true));
console.log(inverso(false));
console.log(inverso(1));
console.log(inverso(0));
console.log(inverso(-200));
console.log(inverso("numero 2"));