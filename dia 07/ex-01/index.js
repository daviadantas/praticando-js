
let Mulher7 = 0
let maiorHomen = 0
let qMolher = 0
let qHomens = 0
let contador = 0
let pergunta ='s'
while(pergunta ==='s' ){
    let nota = Number(prompt('digite a nota do ' + contador + ' aluno'));
    let sexo = prompt('digite seu sexo (m/f)');
    contador++
    
    pergunta = prompt('deseja cadastrar outra nota s/n?');

    if(sexo == 'm'){
        if(nota > maiorHomen){
            maiorHomen = nota
        }
        qHomens++
    }

    if(sexo == 'f' && nota > 7){
        Mulher7++
    }

    if(pergunta == 'n'){
        nota = nota * contador
        console.log('a media geral dos alunos é ' + (nota / contador));
        console.log('a quantidade de homens quem enviaram foi de ', qHomens );
        console.log('a quantidade de mulheres que tiraram a cima de 7 foi de ', Mulher7);
        console.log('a maior nota entre os homens foi ',maiorHomen);
    }

}



