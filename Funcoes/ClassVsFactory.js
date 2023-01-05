class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    
    falar(){
        console.log('meu nome é ', this.nome)
    }
}

const p1 = new Pessoa ('joao')
p1.falar()

// outra forma de fazer
function Pessoas (nome){
    this.nome = nome
    this.falar = function(){
        console.log('meu nome é', this.nome)
    }
}
// para instanciar é da mesma forma que se o obj for feito por uma classe 
// ou por uma função construtora
const p3 = new Pessoas('maria')
p3.falar()

// outra forma de fazer 
const criarPessoa = nome => {
    return {
        falar: () => console.log('meu nome é ', nome)
    }
}

const p2 = criarPessoa('joão')
p2.falar()