let nomes = []
let senhas = []
let contador = 0

let deseja = true


while(deseja){
    let opcao = parseInt(prompt('digite 1 se deseja se cadastras digite 2 se deseja fazer login e digite 3 se deseja excluir uma conta e 4 se quiser encerrar o programa'));

    switch (opcao){
        case 1:
            nomes[contador] = prompt('digite seu nome')
            senhas[contador] = prompt('digite sua senha')
            contador++
            break;

        case 2:
           let nome = prompt('digite o nome da sua conta')
           let senha = prompt('digite a senha da sua conta')
        
            for(let i = 0; i <nomes.length; i++){
                if(nome == nomes[i] && senha == senhas[i]){
                    loginValido = true;
                }
            }
        
            if(loginValido){
                alert('logando...')
            }
            else{
                alert('usuario ou senha incorreta')
            }
            break;
        
        case 3:
          let nomeExcluir = prompt('qual nome deseja excluir')
          let nomesAux = []
          let senhasAux = []
          let contadorAux = 0

          for(let i = 0; i <contador; i++){
            if(nomeExcluir == nomes[i]){
                alert('cadatro excluido')
            }
            else{
                nomesAux[contadorAux] = nomes[i]
                senhasAux[contadorAux] = senhas[i]
            }
          }

          nomes = nomesAux
          senhas = senhasAux
          contador--
          break;

        case 4:
            deseja = false
            break;
        default:
            alert('opção invalida')
            break;
    }


}