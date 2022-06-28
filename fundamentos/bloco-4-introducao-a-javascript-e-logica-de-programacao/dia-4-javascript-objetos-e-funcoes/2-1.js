function verificarPalindrome(nome) {
    for (i in nome) {
        if (nome[i] != nome[(nome.length - 1) - i]) {
            return false;
        }
    }
    return true;
}
function verificarPalindrome(nome2) {
    let reverse = nome2.split('').reverse().join('');
    if (reverse === nome2) {
        return true; 
    }
    else {
        return false;
    } 
}
console.log(verificarPalindrome('arara'));
console.log(verificarPalindrome('desenvolvimento'));