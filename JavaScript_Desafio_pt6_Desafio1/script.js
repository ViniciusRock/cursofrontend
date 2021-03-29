const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
}

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]

//ex1.a
let { nome } = user;

console.log(nome);

//ex1.b
let { endereco: { rua } } = user;

console.log(rua);

//ex1.c
let { projetos } = user;

console.log(projetos);

//ex1.d
let { projetos: [, segunda] } = user;

console.log(segunda);

//ex2.a
const [primeiro] = students
console.log(primeiro);

//ex2.b
const [, , terceiro] = students;
console.log(terceiro);

//ex2.c
const [, { name: nome }] = students;
console.log(nome);