function maiorNumero(numeros) {
    let maiorNumero = 0;
    for (let i in numeros) {
        if (numeros[maiorNumero] < numeros[i]) {
            maiorNumero = i;
        }
    }
    return maiorNumero;
}
console.log(maiorNumero([2, 3, 6, 7, 10, 1]));