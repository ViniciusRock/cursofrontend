const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]
//ex1.Imprime todos os nomes
students.forEach((elem) => {
    console.log(elem.name);
});


//ex2.Imprime todos que têm idade maior que 20.
console.log("Maiores de idade:");
students.forEach((elem) => {
    if (elem.age > 20) {
        console.log(elem.name, elem.age, "anos.");
    }
});
//ex3.Novo array contendo somente os estudantes com bolsa e imprima esse novo array no console.
const newArray = [];

students.forEach((elem) => {
    if (elem.scholarship) {
        newArray.push(elem);
    }
});

console.log(newArray);