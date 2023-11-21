//Declarando uma classe pessoa, o intuito dela é definir cada pessoa como caracteristicas diferentes
class Pessoa {
    nome;
    idade;

    //Sempre que eu instanciar uma nova classe o constructor vai criar algo a partir daqui
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    //Na sintaxe da classe não é necessario declarar a função com 'function'
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

//Instanciando uma 'pessoa nova'
const Murilo = new Pessoa('Murilo',22);

console.log(Murilo)

Murilo.descrever();


