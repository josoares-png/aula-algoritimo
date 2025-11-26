const input = require("readline-sync");

let numero = input.questionInt("Digite o numeor para a Tabuada");
console.log("-----Tabuada do", numero,"-----");
for(let i = 1; i <= 10; i++){
    console.log(i + "x" + numero + "=" + i * numero);
}
console.log("-------------------------");