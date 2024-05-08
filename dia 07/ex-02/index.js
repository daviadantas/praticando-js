
let nome = prompt('digite seu nome');
let cpf = parseInt(prompt('digite seu cpf'));
let valor = 1
let pergunta = 1

do {
    valor = parseInt(prompt('qual é seu saldo'))
    operacao = prompt('você deseja sacar ou depositar?')
    if(operacao == 'sacar'){
        valorDeOperacao = parseInt(prompt('digite quanto você quer sacar'))
        console.log('seu saldo atual é de ', valor - valorDeOperacao )
    }

    else if (operacao == 'depositar'){
        valorDeOperacao = parseInt(prompt('digite quanto você quer depositar'))
        console.log('seu saldo atual é de ', valor + valorDeOperacao )

    }

    else{
        console.log('essa operação é invalida')
    }

    pergunta = parseInt(prompt('deseja continuar se sim digite 1 se não digite 2'))

}while(pergunta == 1);