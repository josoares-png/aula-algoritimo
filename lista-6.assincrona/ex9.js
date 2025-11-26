const input = require("readline-sync");

const palavra = input.question("Digite uma palavra: ").toLowerCase();
let contadorVogais = 0;

for(let i = 0; i< palavra.length; i ++){
    let letra = palavra[i]
    if(letra == "a"){contadorVogais ++}
    if(letra == "e"){contadorVogais ++}
    if(letra == "i"){contadorVogais ++}
    if(letra == "o"){contadorVogais ++}
    if(letra == "u"){contadorVogais ++}
}
console.log('A palavra "${palavra}" tem ${contadorVogais} vogais. ');
