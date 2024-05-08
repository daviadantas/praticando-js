let quantidade = parseInt(prompt('digite quantos numeros deseja inserir'));
let arrey = [];
let contador = 0;
for(contador; contador < quantidade; contador++){
    numero = parseInt(prompt('digite um numero do seu desejo'));
    arrey[contador] = numero
}

arrey.reverse();

console.log(arrey);