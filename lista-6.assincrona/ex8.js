const input = require("readline-sync");

let senha = "";

while(senha != "1234"){
    senha = input.question("Digite sua senha: ");
}

console.log('------------------------------------');
console.log("          Acesso permitido!");
console.log('------------------------------------');
