const input = require("readline-sync");

let n = input.questionInt("Digite a quantidade de termos da sequência de Fibonacci: ");
let a = 1;
let b = 1;
console.log("Sequência de Fibonacci ");

if(n >= 1 ){
    console.log(a);
}
if(n >= 2){
    console.log(b);
}
for(let i = 3; i <=n; i ++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}