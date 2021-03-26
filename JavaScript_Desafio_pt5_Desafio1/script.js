
// l. Como auxílio da função setTimeout crie três promises, duas que resolvem e uma que rejeita, o que essas promises retornarão será uma string.de sua escolha.

// 2. "Construa uma função assíncrona com tratamento de erros que executará todas as três promises criadas no exercício 1 e imprimirá suas respostas.

// 3. “Construa uma função assíncrona com tratamento de erros que executará as duas promises que resolvem criadas no exercício 1 e imprimirá suas respostas, além disso deverá ter um bloco finally que imprime no console “Final da execução”.


//ex.1
const p1 = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                return resolve("1ª Promise resolvida com sucesso!");
            }, 3000)
        }
    )
};

const p2 = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                return resolve("2ª Promise resolvida com sucesso!");
            }, 2000)
        }
    )
};


const p3 = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                return reject("3º Promise foi rejeitada!");
            }, 3000)
        }
    )
};

//ex.2
async function func() {
    try {
        const res = await Promise.all([p1(), p2(), p3()]);
        return console.log(res);
    } catch (error) {
        return console.log(error);
    }
}
func();

//ex.3
async function func2() {
    try {
        const res = await Promise.all([p1(), p2()]);
        return console.log(res);
    } catch (error) {
        return console.log(error);
    }
}
func2();