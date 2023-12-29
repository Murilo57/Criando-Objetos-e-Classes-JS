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

//Função para utilizar o objeto
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Murilo = new Pessoa('Murilo', 22);

const Marcos = new Pessoa('Marcos', 51);

compararPessoas(Murilo, Marcos);