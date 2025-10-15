let input = require('readline-sync');

let n1 = input.questionInt("Digite o primeiro numero: ");
let n2 = input.questionInt("Digite o segundo numero: ");
let n3 = input.questionInt("Digite o terceiro numero: ");
let n4 = input.questionInt("Digite o quarto numero: ");

let soma1 = n1 + n2;
let sub = n3 - n4;
let resultado = soma1 + sub;

if (resultado > 10) {
  console.log("Resultado maior que dez:", resultado);
} else {
  console.log("Resultado menor ou igual a dez:", resultado);
}
