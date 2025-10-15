let input = require('readline-sync')

let n1 = input.questionInt("Digite o primeiro numero: ");
let n2 = input.questionInt("Digite o segundo numero: ");
let n3 = input.questionInt("Digite o terceiro numero: ");

let maior;

if (n1>n2 && n1>n3){
    maior = n1;
} else if (n2>n3){
    maior = n2;
} else {
    maior = n3;
}

console.log("Maior:", maior);
