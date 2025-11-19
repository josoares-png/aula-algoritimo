const aluno = {
    Nome: "João",
    Idade: "22 anos",
    Curso: "Medicina"
};

function Apresentando (aluno){
    return `O ${aluno.Nome} tem ${aluno.Idade} e esta cursando ${aluno.Curso}`;
}

console.log(Apresentando(aluno));
