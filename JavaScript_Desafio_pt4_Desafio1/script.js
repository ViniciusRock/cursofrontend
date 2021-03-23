const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]
//map: cria e imprime os nomes de todos no array usando o map
//*DESAFIO 1*
//ex1
const nomes = colaboradores.map((ex1) => {
    return ex1.name;
});
console.log(nomes);

//ex2
const frontend = colaboradores.filter((ex2) => {
    return ex2.cargo == 'front-end';
});
console.log("Todos os Devs Front-end:", frontend);

//ex3
const primeiro = colaboradores.find((ex3) => {
    return ex3.idade > 23;
});
console.log("Primeiro colaborador maior que 23 anos", primeiro);

//ex4
const semaior18 = colaboradores.every((ex4) => {
    if (ex4.idade > 18) {
        return console.log("Todos os colaboradores são maiores de 18 anos");
    } else {
        return console.log("Nem todos os colaboradores são maiores de 18 anos");
    }
});

//ex5
const estagiario = colaboradores.some((ex5) => {
    return ex5.cargo == 'estagiario';
});
console.log("Tem algum estagiário? ->", estagiario);
