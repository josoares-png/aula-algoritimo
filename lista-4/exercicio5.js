let input = require('readline-sync')

let n1 = input.questionInt("Digite o primeiro numero: ");
let n2 = input.questionInt("Digite o segundo numero: ");
let n3 = input.questionInt("Digite o terceiro numero: ");

let menor;

if (n1<n2 && n1<n3){
    menor = n1;
} else if (n2<n3){
    menor = n2;
} else {
    menor = n3;
}

let resultado = menor + 5;
console.log("Resultado: ", resultado);
