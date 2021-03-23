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
//ex 1.a
const result = colaboradores.reduce((acc, a) => {
    return acc + a.idade;
}, 0);

console.log("resposta:", result);


//ex 1.b
const objeto =
{
    'front-end': 2,
    'back-end': 2,
    'designer': 1,
    'estagiario': 1,
};

console.log(objeto);

//os returns do sort devem ser:
// negativo => quando a precede b
// positivo => quando b precede a
// zero => quando não há diferença de precedência entre a e b

//ex 2.a
const crescente = colaboradores.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    //se não cair em nenhum de ambos, quer dizer que os dois têm a mesma idade;
    return 0;

});
console.log("Crescente:", crescente);


//ex 2.b
const decrescente = colaboradores.sort((a, b) => {
    return -1;
});
console.log("Decrescente", decrescente)

//ex 2.c
const _cargos = {
    '1º': 'estagiario',
    '2º': 'front-end',
    '3º': 'back-end',
    '4º': 'designer'
}
console.log(_cargos);


//ex 2.d
const ex2_d = colaboradores.slice().sort((a, b) => {
    let pesos = {
        'estagiario': 1,
        'front-end': 2,
        'back-end': 3,
        'designer': 4
    }
    return ((a.idade - b.idade) === 0) ?
        (pesos[a.cargo] - pesos[b.cargo]) :
        (a.idade - b.idade)
})
console.log(ex2_d)

