// notação literal
const obj1 = {};
console.log(obj1);

const obj2 = new Object;
console.log(obj2);

function Produto(nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('caneta', 6.89, 0.15);
const p2 = new Produto('notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4);
const f2 = criarFuncionario('maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

const filha = Object.create(null);
filha.nome = 'ana';
console.log(filha)
