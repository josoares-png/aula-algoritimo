const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite um número: "));

for (let i = n + 1; i < 20; i++) {
  console.log(i);
}
for (let i = n - 1; i > 20; i--) {
  console.log(i);
  
