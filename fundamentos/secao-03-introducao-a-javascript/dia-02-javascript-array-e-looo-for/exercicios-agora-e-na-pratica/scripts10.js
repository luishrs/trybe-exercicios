let number = 7;
let factorization = number;
for (let index = number - 1; index > 0; index -= 1) {
    factorization = factorization * index
}
console.log(factorization);

/* ou
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
  }
  
  console.log(fatorial);*/