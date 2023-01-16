const identificaTriangulo = function (a, b, c){
    if (a == b && b == c)
        return 'equilatero';
    else if (a == b || b == c)
        return 'isosceles';
    else
        return 'escaleno';
}

console.log(identificaTriangulo(3, 4, 4))
console.log(identificaTriangulo(3, 4, 5))
console.log(identificaTriangulo(7, 7, 7))