console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = { // não é bom fazer dessa forma
    nome: 'teste'
}
console.log(module.exports) 

module.exports = {publico: true}
