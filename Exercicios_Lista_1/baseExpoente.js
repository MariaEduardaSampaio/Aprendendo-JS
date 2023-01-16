let base = 2;
let expoente = 5;
let resultado = 1;

while (expoente > 0){
    resultado *= base;
    expoente--;
}
console.log(resultado)

// outra forma de fazer
for (; expoente > 0; expoente--){
    resultado *= expoente;
}
console.log(resultado)