// Declarando um objeto literal
const pessoa = {
    nome: 'Murilo Ferreira',
    idade: 22,
    descrever: function () {
        this //This serve para o contexto em que ela esta
        console.log(`Meu nome é ${pessoa.nome} e minha idade é ${pessoa.idade}`)
    }
};

//Acessando métodos do objeto

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

//Adicionando um método no objeto
pessoa.altura = 1.72;

console.log(pessoa);

//Deletando um método do objeto
delete pessoa.idade;

console.log(pessoa);

pessoa.descrever();

//Acessando de forma dinamica uma informação de um objeto
console.log(pessoa['nome']);