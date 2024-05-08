let arrey = []
let contador = 0
for(contador; contador < 5; contador++){
    let numero = parseInt(prompt('insira um numero:'))
    arrey[contador] = numero
}

arrey.reverse()
console.log(arrey);