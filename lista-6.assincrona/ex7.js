const input = require("readline-sync");

let numero = -1;
let maior = null;
let menor = null;

while(numero != 0 ){
    numero = input.questionInt("Digite um numero (0 para sair): ");
    if(numero !=0){
        if(maior == null || numero > maior ){
            maior = numero;
        }

        if(menor == null || numero > menor ){
            menor = numero;
        }
    }
}
if(maior === null){
    console.log("Usuario não digitou numero");
}else{
    console.log('O maior numero é: ${maior}');
     console.log('O menor numero é: ${menor}');
}
 