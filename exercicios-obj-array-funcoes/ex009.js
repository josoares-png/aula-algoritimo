const conta = {
    agencia: "1234",
    numero: "56789-0",
    senha: "4321",
    saldo: 1500,
    historico: []
};

// função para validar acesso
function validarAcesso(agencia, numero, senha) {
    return (
        agencia === conta.agencia &&
        numero === conta.numero &&
        senha === conta.senha
    );
}

function exibirSaldo() {
    console.log(`Saldo atual: R$ ${conta.saldo}`);
    conta.historico.push(`Consulta de saldo: R$ ${conta.saldo}`);
}

// função para realizar saque
function realizarSaque(valor) {
    if (valor > conta.saldo) {
        console.log(" Saldo insuficiente.");
        return;
    }

    if (valor % 10 !== 0) {
        console.log("O valor deve ser múltiplo de 10.");
        return;
    }

    let cedulas = {};
    let restante = valor;

    const notas = [100, 50, 20, 10];

    for (let nota of notas) {
        if (restante >= nota) {
            cedulas[nota] = Math.floor(restante / nota);
            restante %= nota;
        }
    }

    conta.saldo -= valor;

    conta.historico.push(`Saque de R$ ${valor}. Cédulas: ${JSON.stringify(cedulas)}`);

    console.log(`Saque realizado: R$ ${valor}`);
    console.log("Cédulas entregues:");

    for (let nota in cedulas) {
        console.log(`R$ ${nota}: ${cedulas[nota]} cédula(s)`);
    }
}

if (validarAcesso("1234", "56789-0", "4321")) {
    console.log("Acesso permitido!");
    exibirSaldo();
    realizarSaque(1000);
    exibirSaldo();
    console.log(conta.historico);
} else {
    console.log("Acesso negado!");
}

