const pessoa = {
    saudacao: 'bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
// falar() // conflito entre paradigma funcional e paradigma OO

const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()

function Pessoa() {
    this.idade = 0
    
    /*    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) */
    
    // possivel tbm criar uma constante com o this para manter o this constante sempre q for usar
    const self = this
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Pessoa