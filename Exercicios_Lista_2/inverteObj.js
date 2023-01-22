const categoria = {
    graduacao: 1,
    pos_graduacao: 2,
    mestrado: 3,
    doutorado: 4,
    tecnologo: 5
}

const conceitos = {
    a: 90,
    b: 80,
    c: 70,
    d: 60
}

function inverteObjeto(obj){
    let inv_obj = {}
    for (const [key, value] of Object.entries(obj)){
        console.log(key, value)
        inv_obj[value] = key;
    }
    return inv_obj;
}

console.log(inverteObjeto(categoria))
console.log(inverteObjeto(conceitos))