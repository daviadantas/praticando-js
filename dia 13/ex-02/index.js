class Carro{
    nome
    potencia
    velocidadeMax
    aceleracao

    constructor(nome, potencia, velocidadeMax, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMax = velocidadeMax
        this.aceleracao = aceleracao
    }

    quantoTempo(distancia){
       let resultado = distancia / (this.velocidadeMax / this.aceleracao)
        return resultado
    }
}

class Corrida{
    local
    tipo
    distancia
    participantes
    vencedor

    constructor(local, tipo, distancia){
        this.local = local
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = ''
    }

    vencedor(){
        let menorTempo = this.participantes[0].quantoTempo(this.distancia)
        let vencedor = this.participantes[0]

        for(let i = 1; i < this.participantes.length; i++){
            let tempo = this.participantes[i].quantoTempo(this.distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[i]
            }

        }

        return this.vencedor = vencedor
    }

    ExibirVencedor(){
        alert('o vencedor é: ' + this.vencedor.nome)
    }

}

let carros = []
let continuar = true
let contador = 0

while(continuar){
    let nome = prompt('qual a equipe do carro?')
    let potencia = parseInt(prompt('qual e o numeros de cavolos de potencia dele?'))
    let velocidadeMax = parseInt(prompt('qual a maior velocidade que ele pode alcançar em km'))
    let aceleracao = parseInt(prompt('o tempo em segundos que ele leva pra ir de 0 a 100 km/h'))


    let carro = new Carro(nome, potencia, velocidadeMax, aceleracao)
    carros[contador] = carro
    corrida.participantes[contador] = carro
    

    let desejaContinuar = prompt('digite 1 se deseja continuar')

    if(desejaContinuar != '1'){
        continuar = false
    }
    else{
        contador++
    }

}

let local = prompt('qual o local da corrida?')
let tipo = prompt('qual o tipo de corrida')
let distancia = parseInt(prompt('qual a distancia em km?'))

let corrida = new Corrida(local, tipo, distancia)