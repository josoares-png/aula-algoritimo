const input = require("readline-sync");

let numero = input.questionIntp("Digite um numero: ");
let fatorial = 1;

if(numero == 0){
    fatorial = 1 ;
}else{
    for(let i = numero; i >1; i--);{
        fatorial = fatorial * i;
    }
    //resultado
    console.log('${numero}! = ${fatorial}');
}