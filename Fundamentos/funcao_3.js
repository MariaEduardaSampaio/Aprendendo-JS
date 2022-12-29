var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// var não é "suportado" dentro de um bloco

// LAÇOS
for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i = ', i)

/*
for (let i = 0; i < 10; i++){
    console.log(i)
}
console.log('i = ', i)
NAO FUNCIONA POIS A LINHA 20 ESTÁ FORA DO ESCOPO EM QUE i FOI CRIADO
*/

const funcs = []
for (let i = 0; i < 10; i++){ 
    // Com var não tem o comportamento esperado, com let funciona
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[6]()
