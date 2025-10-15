let input = require('readline-sync');


let n1 = input.questionInt("Digite um numero: ");
let soma;

if (n1>10) {
  soma = n1 + 5;
} else {
  soma = n1 + 20;
}

if (soma>25) {
  console.log("Resultado da soma: ", soma,  " (maior que 25)");
} else {
  console.log("Resultado da soma: ", soma);
}
