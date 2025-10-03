let input = require('readline-sync')

let n1 = input.questionInt("Digite um numero: ");

let n2 = input.questionInt("Digite outro numero: ")

let menor, maior;


if (n1 < n2) {
    menor = n1 + 5;
    maior = n2
} else {
    menor = n2 + 5;
    maior = n1;
}

if (menor > maior){
    console.log("Maior valor", menor);
}else{
    console.log("Maior valor", maior);

