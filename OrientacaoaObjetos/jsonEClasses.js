const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1.9, "b": "string", "c": true, "d": {}, "e": [] }'))

// classes

class Lancamento {
    constructor(nome = 'generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }

}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 45000)
const contaDeLuz = new Lancamento('Luz', -200)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())