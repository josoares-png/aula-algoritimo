const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite um número menor que 10: "));

if (n < 10) {
  console.log("Número digitado:", n);
} else {
  console.log("O número não é menor que 10.");
}
