let a = 7
let b = 94
console.log("a: " + a + " b: ", b)

let aux = a
a = b
b = aux
console.log("a: " + a + " b: ", b)

let num1 = 1
let num2 = 4;
[num1, num2] = [num2, num1]
console.log("num1: ", num1, "num2: ", num2)

// calcula area de circunferencia
{
    const raio = 3.2
    const area = Math.PI * Math.pow(raio, 2)
    console.log("a area do circulo de raio ", raio, "é ", area)
}