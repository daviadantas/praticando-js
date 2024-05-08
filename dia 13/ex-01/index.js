class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }

    mostrarConfiguracoes(){
        console.log('o tipo desse computador é: ' + this.tipo)
        console.log('o processador desse computador é: ' + this.processador)
        console.log('a placa de video desse computador é: ' + this.video)
        console.log('o armazenamento desse computador tem: ' + this.armazenamento + 'GB')
        console.log('a memoria RAM desse computador tem: ' + this.memoriaRam + 'GB')
        console.log('esse computador ' + this.ssd + ' ssd')
    }
}

let Computadores = []
let continuar = true
let contador = 0

while(continuar){
    let tipo = prompt('seu computador e desktop ou notebook')
    let processador = prompt('qual é seu processador')
    let video = prompt('sua placa de video e integrada ou dedicada?')
    let armazenamento = prompt('quantos GB de armazenamento você tem ?')
    let memoriaRam = prompt('qaunto o seu computador tem de memoria ram disponivel?')
    let ssd = prompt('seu computador tem ssd ?')

    let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)

    Computadores[contador] = computador

    let desejaContinuar = prompt('digite 1 se deseja continuar')

    if(desejaContinuar != '1'){
        continuar = false
    }
    else{
        contador++
    }

}