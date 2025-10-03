let input = require('readline-sync')
let n1 = input.questionInt("Digite um numero: ");

if (n1>10){
    console.log("Numero maior que dez");
}else{
   console.log("Numero menor ou igual que dez");
}
