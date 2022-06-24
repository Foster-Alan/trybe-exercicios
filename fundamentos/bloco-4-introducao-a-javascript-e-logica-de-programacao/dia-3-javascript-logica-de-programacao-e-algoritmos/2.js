let word = 'tryber';
let contrario = '';

contrario = word.split('').reverse().join('');
console.log(contrario);

// ----- outra sololução -----

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);