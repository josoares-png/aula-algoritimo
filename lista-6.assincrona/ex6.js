const input = require("readline-sync");

let qtdAlunos = input.questionInt("Digite a quantdade de alunos: ");
for(let aluno = 0; aluno<qtdAlunos; aluno++){
    console.log("-------------------------");
    console.log("          Aluno: " + aluno + 1);
    console.log("-------------------------");
    for(let prova  = 0; prova < 3; prova ++ ){
        let nota = input.questionInt('Digite a nota da - prova - ${prova + 1 }');
        somaNotas+=nota
    }
    let media = somaNotas/3;
    if(media>= 7 ){
        console.log("Alunon - ", aluno + 1, "Media = ", media, "## APROVADO ##");
   } else{
     console.log("Alunon - ", aluno + 1, "Media = ", media, "## REPROVADO ##");
 }

}
