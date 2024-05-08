let nomes = []
let notas = []
let contador = 0
let deseja = true
let total = 0
let mediaDosAlunos = 0

while(deseja){ 
    let   nome = prompt('insira o nome do aluno');
    let   nota = Number(prompt('insira a nota do aluno'));
    deseja = prompt('se deseja inserir outra nota pressione a tecla 1')
    nomes[contador] = nome
    notas[contador] = nota
    
    if(deseja != '1'){
        deseja = false
}

contador++
}

for(let i = 0; i < notas.length ; i++){
    total += notas[i];
}

mediaDosAlunos = total/contador

console.log('a soma total das notas é ' + total +' e a media dos alunos é ' + mediaDosAlunos)
