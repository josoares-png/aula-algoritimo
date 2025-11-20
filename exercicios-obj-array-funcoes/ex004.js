let listaDeNomes = ["Maria", "Jovanna", "Luisa"]

function pushArray(valor, array=[]){
    array[array.length]=valor
}

pushArray("Gabriela", listaDeNomes)
console.log(listaDeNomes)
