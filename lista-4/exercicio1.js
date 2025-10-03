let input = require('readline-sync')

let n1 = input.questionInt("Digite um numero: ")

let n2 = input.questionInt("Digite outro numero: ")

if (n1<n2,n2>n1){
    console.log("Menor", n1);
}else{
 console.log("Menor", n2);
}
