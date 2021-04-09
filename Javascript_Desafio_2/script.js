const subtrai = function (a, b) {
    return console.log(a - b);
}

const testaZero = arg => {
    arg == 0 ? console.log("É 0.") : console.log("Não é 0.")
}


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
