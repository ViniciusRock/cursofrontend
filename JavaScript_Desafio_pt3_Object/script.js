//1.Com o acesso às propriedades com ponto:
const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
};

//2.Com o acesso às propriedades com colchetes
console.log(user["nome"]);
console.log(user.endereco["rua"]);
console.log(user.projetos[1]);
//d.

const nome = user.nome;
const idade = user.idade;
const endereco = user.endereco;
const rua = user.endereco["rua"];
const numero = user.endereco["numero"];
const projetos = user["projetos"];
console.log(user.endereco["numero"]);