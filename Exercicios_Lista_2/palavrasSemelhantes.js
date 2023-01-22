function busca(inicio, palavras){
    const resultado = []
    for (let palavra of palavras){
        if (palavra.includes(inicio))
            resultado.push(palavra)
    }
    return resultado
}

const v1 = ["java", "javascript", "python", "c", "c++", "c#"]
console.log(busca("java", v1))
console.log(busca("pro", v1))
console.log(busca("c", v1))