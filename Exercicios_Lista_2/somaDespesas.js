const produtos = [
    {nome: "oculos", preco: 489.91},
    {nome: "cadeira", preco: 57.42},
    {nome: "disco cd", preco: 23.06}   
]

const comidas = [
    {nome: "ovos", preco: 30.12},
    {nome: "melancia", preco: 9.45},
    {nome: "picanha", preco: 67.88}   
]


const preco = produto => produto.preco;
const soma = function(acumulador, atual){
    return acumulador + atual;
}

const somaDespesa = function(objeto){
    console.log(objeto.map(preco).reduce(soma).toFixed(2))
}

somaDespesa(produtos);
somaDespesa(comidas);