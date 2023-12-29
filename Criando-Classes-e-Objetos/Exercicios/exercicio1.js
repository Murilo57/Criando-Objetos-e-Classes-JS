/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustivel gasto em reais para realizar este percurso
 */

class Carro {    
    constructor(marca, cor, distanciaKM, litrosTanque) {
        this.marca = marca;
        this.cor = cor;   
        this.distanciaKM = distanciaKM;
        this.litrosTanque = litrosTanque; 
        this.gastoMedioKM();
    }

    
    gastoMedioKM() {
        let consumoMedio = (this.distanciaKM / this.litrosTanque)
        console.log(`O seu carro da marca ${this.marca} da cor ${this.cor} tem o consumo médio de: ${consumoMedio}`)
    }

}

const Toyota = new Carro('Toyota','vermelho', 320, 25)

console.log(Toyota)