/* 
closure é o escopo criado quando uma função é declarada
esse escopo permite a função acessar e manipular variáveis externas à função
"contexto léxico em ação!"
*/

const x = 'global'

function fora() {
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())


// se passar as linhas 11-13 para fora da função fora, o retorno é "global"