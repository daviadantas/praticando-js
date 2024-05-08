let array1 = []
let array2 = []

for(i = 0; i < 10; i++){
    array1[i] = parseInt(prompt('digite um numero para o primeiro array'))
}

for(i = 0; i < 10; i++){
    array2[i] = parseInt(prompt('digite um numero para o segundo array'))
}

const iguais = array1.filter(elementos => array2.includes(elementos));
console.log(iguais)
