const numeros = [1, 2, 2, 3, 3, 3, 4];

function contarOcorrencias(arr) {
    const contagem = {};
  
    for (const item of arr) {
      if (contagem[item]) {
        contagem[item] += 1;
      } else {
        contagem[item] = 1;
      }
    }
  
    return contagem;
  }
  
  const resultado = contarOcorrencias(numeros);
  console.log(resultado);
  
