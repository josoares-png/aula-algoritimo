const prompt = require("prompt-sync")();

let n;

do {
  n = parseInt(prompt("Digite um número menor que 5: "));
} while (n >= 5);

for (let i = n; i <= 20; i++) {
  if (i % 2 === 0) {
   console.log(i);
  }
}
