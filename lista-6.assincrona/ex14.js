const input = require("readline-sync");

let totalPagar = 0;
let valor = -1;

while(valor !== 0){
    valor = input.questionFloat("Digite um numero (0 para sair): ");
    totalPagar = totalPagar + valor;
}
console.log("Total a pagar: R$", totalPagar.toFixed(2));