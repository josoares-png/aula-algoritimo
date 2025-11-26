const input = require("readline-sync");

let numero = input.questionInt("Digite um numero: ");

for(let cont = numero; cont >= 0; cont--){
    console.log(cont)
}
