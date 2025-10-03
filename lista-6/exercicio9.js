const prompt = require("prompt-sync")();

let n;

do {
  n = parseInt(prompt("Digite um número maior que 20: "));
} while (n <= 20);

for (let i = n; i >= 1; i--) {
  console.log(i);
}
