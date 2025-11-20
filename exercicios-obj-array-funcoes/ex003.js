const aluno = {
    notas: [9, 8, 7, 5, 8],
    media() {
      const soma = this.notas.reduce((acc, nota) => acc + nota, 0); 

      return soma / this.notas.length;
    }
  };
  
  console.log(aluno.media());
