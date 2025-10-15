const input = require('readline-sync');

const n1 = input.questionInt("Digite o primeiro numero: ");
const n2 = input.questionInt("Digite o segundo numero: ");
const n3 = input.questionInt("Digite o terceiro numero: ");

let menor, meio, maior;

if (n1<=n2 && n1<=n3) {
  menor = n1;
  if (n2<=n3) {
    meio = n2;
    maior = n3;
  } else {
    meio = n3;
    maior = n2;
  }
} else if (n2<=n1 && n2<=n3) {
  menor = n2;
  if (n1<=n3) {
    meio = n1;
    maior = n3;
  } else {
    meio = n3;
    maior = n1;
  }
} else {
  menor = n3;
  if (n1<=n2) {
    meio = n1;
    maior = n2;
  } else {
    meio = n2;
    maior = n1;
  }
}


console.log(menor, meio, maior);
