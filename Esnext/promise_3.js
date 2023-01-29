// setTimeout(function(){
//     console.log('executando callback1')

//     setTimeout(function(){
//         console.log('executando callback2')

//         setTimeout(function(){
//             console.log('executando callback3')  
//         }, 2000)            
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('executando promise')
            resolve()
        }, tempo)
    })
}

let p = esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)