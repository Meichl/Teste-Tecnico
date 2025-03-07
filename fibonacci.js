function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num || num === 0;
}

const numeroInformado = 21; // Número informado

if (isFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
