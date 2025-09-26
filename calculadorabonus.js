const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculadora() {
    rl.question("Ingresa el primer número: ", (num1) => {
        rl.question("Ingresa el operador (+, -, *, /): ", (op) => {
            rl.question("Ingresa el segundo número: ", (num2) => {
                let resultado = operar(parseFloat(num1), parseFloat(num2), op);
                if (resultado === null) {
                    rl.close();
                    return;
                }
                ciclo(resultado);
            });
        });
    });
}

function ciclo(resultado) {
    console.log(`Resultado actual: ${resultado}`);
    rl.question("¿Quieres seguir operando con este resultado? (s/n): ", (respuesta) => {
        if (respuesta.toLowerCase() === "s") {
            rl.question("Ingresa un operador (+, -, *, /): ", (op) => {
                rl.question("Ingresa el siguiente número: ", (signum) => {
                    let nuevo = operar(resultado, parseFloat(signum), op);
                    if (nuevo === null) {
                        rl.close();
                        return;
                    }
                    ciclo(nuevo); 
                });
            });
        } else {
            console.log(`Resultado final: ${resultado}`);
            rl.close();
        }
    });
}

function operar(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-": 
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                console.log("Error: división por cero");
                return null;
            }
            return a / b;
        default:
            console.log("Operador inválido");
            return null;
    }
}

calculadora();