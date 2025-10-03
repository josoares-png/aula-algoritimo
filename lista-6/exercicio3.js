const prompt = require("prompt-sync")();

let a = parseInt(prompt("Digite o primeiro número: "));

let b = parseInt(prompt("Digite o segundo número: "));

if (a < b) {
  for (let i = a + 1; i < b; i++) {
    console.log(i);
  }
} else {
  for (let i = b + 1; i < a; i++) {
   console.log(i);
  }
}
