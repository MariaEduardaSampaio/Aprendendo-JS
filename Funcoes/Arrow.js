dobro = a => 2 * a // retorno implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olá'
console.log(ola())

let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
