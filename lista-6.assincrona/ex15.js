const input = require('readline-sync');

let opcao = -1;

while (opcao != 0) {
    console.log("========= 🧭 MENU PRINCIPAL =========");
    console.log("1 - Contagem Simples (1 a 20)");
    console.log("2 - Pares e Impares ate um numero");
    console.log("3 - Soma de 5 numeros");
    console.log("4 - Contagem regressiva");
    console.log("5 - Calcular tabuada");
    console.log("6 - Media de notas");
    console.log("7 - Maior e Menor numero");
    console.log("8 - Senha correta");
    console.log("9 - Contar Vogais");
    console.log("10 - Calcular Fatorial");
    console.log("11 - Sequencia de Fibonnaci");
    console.log("12 - Numero Primo");
    console.log("13 - Estatisticas");
    console.log("14 - Caixa de Loja");
    console.log("0 - Sair");
    console.log("=====================================");
    opcao = input.questionInt("Escolha uma opcao --> ")
    switch (opcao) {
        case 1:
            console.log("1 - Contagem Simples (1 a 20)");
            
            console.log("Mostre toos os numeros de 1 até 20");
            for (let numero = 1; numero <= 20; numero++) {
                console.log("Numero",numero);
            }
            break;

        case 2:
            console.log("2 - Pares e Impares ate um numero");
        
            let numFinal = input.questionInt("Digite um Numero Final --> ");

            for(let i=0; i <= numFinal; i++){
                if (i%2 == 0) {
                    console.log(i, "é par");
                } else {
                    console.log(i, "é impar");
                }
            }
            break;

        case 3:
            console.log("3 - Soma de 5 numeros");

            let soma = 0;

            for (let contador = 0; contador < 5; contador++) {
                let numero = input.questionInt("Digite o "+(contador+1)+"o numero --> ");
                soma = soma + numero;
            }
            console.log("A SOMA DOS 5 NUMEROS É:",soma);
            break;

        case 4:
            console.log("4 - Contagem regressiva");
           
            let numero_regressivo = input.questionInt("Digite o numero --> ");

            for (let cont = numero_regressivo; cont >= 0; cont--) {
                console.log(cont);   
            }
            break;

        case 5:
            console.log("5 - Calcular tabuada");
        
            let numero_tabuada = input.questionInt("Digite o numero para ser multiplicado --> ");
            console.log("-------- TABUADA DO",numero_tabuada,"--------");
            for (let i = 1; i <= 10; i++) {
                console.log(i,"*",numero_tabuada,"=",i*numero_tabuada);
            }
            break;

        case 6:
            console.log("6 - Media de notas");
        
            let qtdAlunos = input.questionInt("Digite a quantidade de alunos --> ");
            for (let aluno = 0; aluno < qtdAlunos; aluno++) {
                console.log('=====================================');
                console.log('       Aluno:',aluno+1);
                console.log('=====================================');
                let somaNotas = 0;
                for (let prova = 0; prova < 3; prova++) {
                    let nota = input.questionInt(`Digite a nota da Prova ${prova + 1} --> `);
                    somaNotas+=nota
                }
                let media = somaNotas/3
                if (media >= 7) {
                    console.log("Aluno -",aluno+1,"Media -",media,"## APROVADO ##");
                } else {
                    console.log("Aluno -",aluno+1,"Media -",media,"## REPROVADO ##");
                }
            }
            console.log('=====================================');
            break;

        case 7:
            console.log("7 - Maior e Menor numero");
            
            let numero_maior_menor = -1;
            let maior = null;
            let menor = null;
            
            while (numero_maior_menor != 0) {
                numero_maior_menor = input.questionInt("Digite um numero (0 para sair) --> ");
                if (numero_maior_menor != 0) {
                    if (maior == null || numero_maior_menor > maior) {
                        maior = numero_maior_menor;
                    }
             
                    if (menor == null || numero_maior_menor < menor) {
                        menor = numero_maior_menor;
                    }
                }
            }
            if (maior == null) {
                console.log("Usuario nao digitou numeros");
            } else {
                console.log(`O maior numero é ${maior}`);
                console.log(`O menor numero é ${menor}`);
            }
            break;

        case 8:
            console.log("8 - Senha correta");
            
            let senha = "";
            
            while (senha != "1234") {
                senha = input.questionInt("Digite sua senha --> ");
            }
            
            console.log('=====================================');
            console.log('           Acesso permitido"');
            console.log('=====================================');
            break;

        case 9:
            console.log("9 - Contar Vogais");
           
            const palavra = input.question("Escreva uma palavra --> ").toLowerCase();
            let contadorVogais = 0;

            for (let i = 0; i < palavra.length; i++) {
                let letra = palavra[i]
                if (letra == 'a') {contadorVogais++;}
                if (letra == 'e') {contadorVogais++;}
                if (letra == 'i') {contadorVogais++;}
                if (letra == 'o') {contadorVogais++;}
                if (letra == 'u') {contadorVogais++;}
            }
            console.log(`A palavra "${palavra}" tem "${contadorVogais}" vogais.`);
            break;

        case 10:
            console.log("10 - Calcular Fatorial");
            
            let numero_fatorial = input.questionInt("Digite um numero --> ");
            let fatorial = 1;
            if (numero_fatorial == 0) {
                fatorial = 1;
            } else {
                for (let i = numero_fatorial; i > 1; i--) {
                    fatorial = fatorial * i
                    console.log(`${i} => fatorial = ${fatorial}`);
                }
                console.log(`${numero_fatorial}! = ${fatorial}`);
                
            }
            break;

        case 11:
            console.log("11 - Sequencia de Fibonnaci");
        
            let n = input.questionInt("Digite a quantidade de termos da sequencia de Fibonacci --> ");
            let a = 1;
            let b = 1;
            console.log("Sequencia de Fibonacci");

            if (n >= 1) {
                console.log(a);
                
            }
            if (n >= 2) {
                console.log(b);
                
            }
            for (let i = 3; i <= n; i++) {
                let c = a + b;
                console.log(c);
                a = b;
                b = c;
            }
            break;

        case 12:
            console.log("12 - Numero Primo");
            
            let numero_primo  = input.questionInt("Digite um numero --> ");
            
            let ehPrimo = true;
            
            if (numero_primo <= 1) {
                ehPrimo = false;
            } else {
                for (let i = 2; i < numero_primo; i++) {
                    if (numero_primo%i == 0) {
                        ehPrimo = false;
                        break
                    }
                }
            }
            
            if (ehPrimo) {
                console.log("O numero digitado e primo");
            } else {
                console.log("O numero digitado nao e primo");
            }
            break;

        case 13:
            console.log("13 - Estatisticas");
        
            let numero_status = -1;
            let soma_status = 0;
            let cont = 0;
            let media = 0;
            let maior_status = null;
            let menor_status = null;
            
            while (numero_status != 0) {
                numero_status = input.questionInt("Digite um numero (0 para sair) --> ")
                if (numero_status != 0) {
                    soma_status = soma_status + numero_status;
                    cont++;
                    if (maior_status == null || numero_status > maior_status) {
                        maior_status = numero_status;
                    }
             
                    if (menor_status == null || numero_status < menor_status) {
                        menor_status = numero_status;
                    }
                }
            }
            
            if (cont > 0) {
                media = soma_status/cont;
                console.log("Quantidade:",cont);
                console.log("Media:",media);
                console.log("Maior:",maior_status);
                console.log("Menor:",menor_status);
            }
            break;
        case 14:
            console.log("14 - Caixa de Loja");
         
            let totalPagar = 0;
            let valor = -1;
            
            while (valor != 0) {
                valor = input.questionInt("Digite um valor (0 para confirmar) R$");
                totalPagar = totalPagar + valor;
            }
            console.log("O total a pagar:  R$"+totalPagar+",00 Reais");
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opcao invalida");
    }
}