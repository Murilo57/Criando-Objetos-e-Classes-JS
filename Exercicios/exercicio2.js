/*
   2) Crie uma calsse para representar pessoas.
   Para cada pessoa teremos os atributos nome, peso e altura.
   As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
   Instancie uma pessoa chamada José que tenha 70kg de peso  e 1,75 de altura e peça ao José dizer o valor di sey IMC;
*/

class Pessoa{
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

        this.calculoIMC();
    }

    calculoIMC() {
        let IMC = this.peso / (this.altura * this.altura)
        console.log(`Meu nome é ${this.nome} tenho ${this.peso}kg e ${this.altura} e meu IMC é de: ${parseFloat(IMC.toFixed(2))}`);
    }            
}

const Jose = new Pessoa('José', 70, 1.75)

console.log(Jose)