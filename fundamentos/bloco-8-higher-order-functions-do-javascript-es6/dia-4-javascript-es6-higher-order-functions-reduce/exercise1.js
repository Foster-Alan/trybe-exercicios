// 1 - Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    // escreva seu código aqui
    const result = arrays.reduce((acc, curr) => acc.concat(curr), []);
    return result;
}
console.log(flatten(arrays));