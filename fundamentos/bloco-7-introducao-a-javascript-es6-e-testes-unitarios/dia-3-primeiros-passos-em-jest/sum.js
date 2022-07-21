function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }
  
 function myRemove(arr, item) {
    const itens = [];
    for(let i = 0; i <= arr.length; i += 1) {
        if(i[arr] === item) {
            delete i[arr];
        }
        else {
            itens.push(i[arr]);
        }
        return itens;

    }
 }
 console.log(itens);
    


module.exports = {sum, myRemove};