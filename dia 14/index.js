let salario;
let nome;


function InformacaoBasica(nome, salario){
 nome = prompt('digite seu nome')
 salario  = Number(prompt('digite seu salario'))
 CalcularAlmento(nome, salario)
}

function CalcularAlmento(nome, salario){
    if(salario <= 1500){
        console.log('ola senhor '+nome+' seu salario irá aumentar 20% ele atualmente esta: ' + salario + ' mas depois do reajuste ficara: ' + (salario +(salario * 0.2)))
    }
    else if(salario > 1500 && salario <= 2000){
        console.log('ola senhor '+nome+' seu salario irá aumentar 15% ele atualmente esta: ' + salario + ' mas depois do reajuste ficara: ' + (salario +(salario * 0.15)))
    }
    else if(salario > 2000 && salario <= 3000){
        console.log('ola senhor '+nome+' seu salario irá aumentar 10% ele atualmente esta: ' + salario + ' mas depois do reajuste ficara: ' + (salario +(salario * 0.1)))
    }
    else{
        console.log('ola senhor '+nome+' seu salario irá aumentar 5% ele atualmente esta: ' + salario + ' mas depois do reajuste ficara: ' + (salario +(salario * 0.05)))
    
}
Continuar()
}

function Continuar(){
    
        continuar = prompt('digite 1 se deseja ver o aumento salario de outra colaborador')
        if(continuar != '1'){
            continuar = alert('programa encerrado')
        }
        else{
            InformacaoBasica()
        }
}

InformacaoBasica();