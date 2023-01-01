function tratarErroELancar(erro) {
    throw "mensagem de erro";
}

function imprimirNomeGritado(obj){
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)

const obj2 = {nome: 'Duda'}
imprimirNomeGritado(obj2)