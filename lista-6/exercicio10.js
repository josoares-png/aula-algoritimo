const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite um número entre 5 e 10: "));

if (n >= 5 && n <= 10) {
  console.log("Número digitado:", n);
}
