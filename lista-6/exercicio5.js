const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Digite o 1º número: "));

let n2 = parseInt(prompt("Digite o 2º número: "));

let n3 = parseInt(prompt("Digite o 3º número: "));


let numeros = [n1, n2, n3];

numeros.sort((a, b) => b - a); // ordem decrescente

let maior = numeros[0];

let segundoMaior = numeros[1];

console.log(`Números entre ${segundoMaior} e ${maior}:`);
for (let i = segundoMaior + 1; i < maior; i++) {
  console.log(i);

}
