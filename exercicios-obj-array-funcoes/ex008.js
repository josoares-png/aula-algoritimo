const pessoas = [
  { nome: "João", idade: 16 },
  { nome: "Alan", idade: 38 },
  { nome: "Maria", idade: 19 },
  { nome: "Felipe", idade: 10 },
  { nome: "Pedro", idade: 24 },
  { nome: "Ana", idade: 13 }
];

function maioresDeIdade(lista) {
  return lista.filter(p => p.idade > 18);
}

console.log(maioresDeIdade(pessoas));
