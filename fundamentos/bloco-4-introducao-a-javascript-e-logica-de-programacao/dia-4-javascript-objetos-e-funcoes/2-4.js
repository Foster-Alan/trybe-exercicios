function arrayDeNomes(nomes) {
    let maiorNome = nomes[0];
    for (let i in nomes) {
        if (maiorNome.length < nomes[i].length) {
            maiorNome = nomes[i];
        }
    }
    return maiorNome;
}
console.log(arrayDeNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));