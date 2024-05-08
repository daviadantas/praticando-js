let contador = 0
let deseja = true
let modelos = []
let anos = []
let valores = []

while(deseja){
    let modelo = prompt('digite o modelo do carro');
    let ano = parseInt(prompt('digite o ano do carro'));
    let valor = Number(prompt('digite o valor do carro'));

    modelos[contador] = modelo
    anos[contador] = ano
    valores[contador] = valor
    contador++

    deseja = prompt('se deseja inserir mais algum dado digite 1')
    if(deseja != '1'){
        deseja = false
    }
}

for(let i = 0; i < modelos.length ; i++){
    console.log(modelos[i]+ ', ' +  anos[i] + ' valor: ' + valores[i])
}

for(let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j <valores.length - i - 1; j++){
        if(valores[j] > valores [j + 1]){
            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores [j + 1] = maiorValor
        }
    }
}

console.log('Carros ordenados pro preço:')
    for (let i = 0; i < modelos.length; i++){
        console.log (modelos[i] + '-' + anos[i] + '-' + valores[i])
}