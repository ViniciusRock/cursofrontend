const subtrai = function (a, b) {
    return console.log(a - b);
}
//testando função no console
subtrai(1, 2);

const testaZero = arg => {
    if (arg == 0) {
        console.log("É 0.");
    } else {
        console.log("Não é 0.");
    }
}
//testando função no console
testaZero(0)
//testando função no console
testaZero(1)

const testaSinal = (a, b) => {
    let resultado = a - b;
    if (resultado == 0) {
        console.log("É 0.");
    } else if (((a > 0) && (b > 0)) || (a < 0) && (b < 0)) {
        console.log("Subtração entre números de mesmo sinal.");
    } else if ((a < 0) && (b > 0) || (a > 0) && (b < 0)) {
        console.log("Subtração de números de sinais diferentes.");
    } else {
        console.log("Fim.");
    }
}
//testando função no console
testaSinal(1, 1);
//testando função no console
testaSinal(2, 1);
//testando função no console
testaSinal(-2, 1);
//testando função no console
testaSinal(1, -2);