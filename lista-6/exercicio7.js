const prompt = require("prompt-sync")();

let maior, menor;

do {
  maior = parseInt(prompt("Digite um número maior que 10: "));
} while (maior <= 10);

do {
  menor = parseInt(prompt("Digite um número menor que 5: "));
} while (menor >= 5);

console.log("Número maior que 10:", maior);
console.log("Número menor que 5:", menor);
