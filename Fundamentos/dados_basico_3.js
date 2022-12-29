//string
 const nome = "Maria";

console.log(nome.charAt(4))

// nao retorna nada pq ultrapassa o tamanho da string
console.log(nome.charAt(7))

// retorna o codigo ASCII da letra da string na posicao 1
console.log(nome.charCodeAt(1)) 

// retorna o endereço da (primeira, caso haja mais de uma) letra
console.log(nome.indexOf('a'))

// retorna uma substring que começa a partir do endereço escrito
console.log(nome.substring(3))

// retorna uma substring no intervalo escrito
console.log(nome.substring(0,3))

// concatena as strings
console.log("nome: ".concat(nome))

// separa as strings a partir de um token
console.log("Ana, Luiza,Joao,Pedro".split(","))