 const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 9.85, fragil: true},
    {nome: 'copo de plastico', preco: 4.60, fragil: true}
]

console.log(produtos.filter(function(p){
    return (p.preco > 500) && p.fragil == true;
}))

// tbm poderia ser feito assim:

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil));

// implementação do filter
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
            newArray.push(this[i])
    }
    return newArray;
}

console.log(produtos.filter2(caro).filter2(fragil));
