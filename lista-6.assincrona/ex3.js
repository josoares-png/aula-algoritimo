const input = require("readline-sync");

let soma = 0;

for(let contador = 0; contador < 5; contador ++){
    let numero = input.questionInt("Digite o" + (contador + 1) + "o numero: " );
    soma = soma + numero;
}
console.log("a soma dos numeros 5 é", soma);
