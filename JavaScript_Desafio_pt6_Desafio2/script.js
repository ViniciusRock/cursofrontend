//ex1
function imprime(...num) {
    resultado1 = num;
    console.log(...resultado1);
}
imprime(1, 2, 3, 4, 5);

const obj1 = {
    name: 'Vinicius'
}

const obj2 = {
    idade: '21'
}


//exercicio 2
function desestrutura({ name } = obj1) {
    return name;
}
resultado2 = desestrutura();
console.log(resultado2);

//exercicio 3
function concatena(obj1, obj2) {
    const newObj = {
        ...obj1,
        ...obj2
    }
    return newObj;
}
const result = concatena(obj1, obj2);
console.log(result);

const arr1 = [-15, 0, 8, 21, 125];
const arr2 = [45, 72, 754, 998, 11];

//exercicio 4
function aarray() {
    const newArr = [...arr1, ...arr2]
    return newArr;
}
const resultadoArr = aarray(arr1, arr2);
console.log(resultadoArr.sort());