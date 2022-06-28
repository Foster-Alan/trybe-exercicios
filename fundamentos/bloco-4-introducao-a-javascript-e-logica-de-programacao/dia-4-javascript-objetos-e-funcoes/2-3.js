function menorValor(numeros) {
    let menorNumero = 0;
    for (i in numeros) {
        if (numeros[menorNumero] > numeros[i]) {
            menorNumero = i;
        }
    }
    return menorNumero;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));