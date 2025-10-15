let input = require('readline-sync');

let n1 = input.questionInt("Digite o primeiro numero: ");
let n2 = input.questionInt("Digite o segundo numero: ");

let menor, maior;

if (n1 < n2) {
  menor = n1;
  maior = n2;
} else {
  menor = n2;
  maior = n1;
}

let somaFinal = (menor*10) + (maior/2);

if (somaFinal % 2 === 0) {
  console.log("O resultado é par:", somaFinal);
} else {
  console.log("O resultado é ímpar:", somaFinal);
}
