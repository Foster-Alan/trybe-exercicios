let maiorNumeroPrimo = 0;

for (let i = 2; i <= 50; i += 1) {
  let primo = true;
  for (let i1 = 2; i1 < i; i1 += 1) {
    if (i % i1 === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorNumeroPrimo = i;
  }
}

console.log(maiorNumeroPrimo);