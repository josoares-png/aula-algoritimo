const input = require("readline-sync");

let numeroFinal = input.question("Digite um final")

for(let i = 0; i <= numeroFinal; i++){
    if(i % 2 === 0){
        console.log(i + "é par");
    }else{
        console.log(i + "é impar");
    }
}