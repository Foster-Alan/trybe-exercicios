const verificaValores = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Error!')
    } 
}
const soma = (a, b) => {
    try {
        verificaValores(a, b);
        return a + b;
    } catch (error) {
        return error.message;
    }
    
}
console.log(soma(1, '2'));
