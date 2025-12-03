const jogadores = [
{ nome: "Jovanna", pontos: 1500 },
{ nome: "Eduarda", pontos: 1500 },
{ nome: "Mileny", pontos: 1600 },
{ nome: "Vitoria", pontos: 1400 },
];

function ordenarRanking(arrayDeJogadores) {
  
  const rankingOrdenado = [...arrayDeJogadores];

  rankingOrdenado.sort((a, b) => {

    return b.pontos - a.pontos;
  });

  return rankingOrdenado;
}

const rankingFinal = ordenarRanking(jogadores);

console.log("Ranking de Pontuação (Maior para o Menor):");
console.log(rankingFinal);