let nomes = []
let senhas = []
let continuar = true

while(continuar){
let opcao = parseInt(prompt('digite 1 para se cadastrar | digite 2 para fazer login | digite 3 pra excluir | digite 4 para encerar o programa'))

Opcao(opcao);

function Opcao(opcao){

    switch(opcao){
        case 1:
            Cadastro()
            break;
        case 2:
            Login()
            break;
        case 3:
            Excluir()
            break;
        case 4:
            continuar = false
            break;
        default:
            alert('opção invalida')
            break;
}
}
}

function Cadastro(){
    nomes.push(prompt('digite o seu nome:'))
    senhas.push(prompt('digite sua senha'))
    alert('CADASTRO FEITO COM SUCESSO =)')
}

function Login(){
    let nome = prompt('digite seu nome:')
    let senha = prompt('digite sua senha')
    
    let nomeValido = nomes.includes(nome)
    let senhaValida = senhas.includes(senha)
    if(nomeValido && senhaValida){
        alert('login foi feito com sucesso !!')
    }
    else{
        alert('senha ou nome incorreto')
    }
}

function Excluir(){
    let nome = prompt('digite seu nome:')
    let senha = prompt('digite sua senha')
    
    let nomeValido = nomes.includes(nome)
    let senhaValida = senhas.includes(senha)

    if(nomeValido && senhaValida){
        let localNome =  nomes.indexOf(nome)
        let localSenha = senhas.indexOf(senha)

        nomes.splice(localNome, 1)
        senhas.splice(localSenha, 1)
        alert('sua conta foi excluida com sucesso')
    }
    else{
        alert('senha ou nome incorreto')
    }
    
}