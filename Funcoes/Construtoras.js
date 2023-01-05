function Carro (velocMax = 200, delta = 5){
    // atributo privado
    let velocAtual = 0

    // metodos publico
    // this é meio que responsável por tornar as coisas publicas
    this.acelerar = function (){
        if (velocAtual + delta <= velocMax)
            velocAtual += delta
        else 
            velocAtual = velocMax
    }

    this.getVelocAtual = function (){
        return velocAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocAtual())