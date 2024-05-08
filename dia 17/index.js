let hoteis = []
let reservas = []
let continuar = true

class Hotel {
    id
    nome
    categoria
    endereco
    telefone
    constructor(id,nome,categoria,endereco,telefone){
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.endereco = endereco
        this.telefone = telefone
    }
}

class Reserva{
    id
    idDoHotel
    nomeResponsavel
    diaEntrada
    diaSaida
    constructor(id,idDoHotel,nomeResponsavel,diaEntrada,diaSaida){
        this.id = id
        this.idDoHotel = idDoHotel
        this.nomeResponsavel = nomeResponsavel
        this.diaEntrada = diaEntrada
        this.diaSaida = diaSaida
    }
}

function CadastroHotel(){
    let contador = 0
    let id = prompt('digite o id do hotel')
    let nome = prompt('digite o nome do hotel')
    let categoria = prompt('digite a categoria do hotel')
    let endereco = prompt('digite o endereço do hotel')
    let telefone = prompt('digite o numero do hotel')
    


    let hotel = new Hotel(id,nome,categoria,endereco,telefone)
    hoteis[contador] = hotel
    contador++
}

function CadastroReserva(){
    let contador = 0
    let id = prompt('digite o id da reserva')
    let idDoHotel = prompt('digite o id do hotel')
    let nomeResponsavel = prompt('digite o nome do responsavel pela reserva')
    let diaEntrada = prompt('digite o dia de entrada')
    let diaSaida = prompt('digite o dia de saida')

    let reserva = new Reserva(id,idDoHotel,nomeResponsavel,diaEntrada,diaSaida)
    reservas[contador] = reserva
    contador++
}

function AgendaDoHotel(){
    let idDoHotel = prompt('digite o id do hotel')
    let hotel = hoteis.find((elemento) => elemento.id == idDoHotel)

    if(hotel){
        console.log(`o id digitado é do hotel: ${hotel.nome}`)
        let reservasDoHotel = reservas.filter((reserva) => reserva.idDoHotel == idDoHotel)
        for(i = 0; i < reservasDoHotel.length; i++){
            console.log(`o nome do responsavel: ${reservasDoHotel[i].nomeResponsavel} dia da entrada: ${reservasDoHotel[i].diaEntrada} dia da saida: ${reservasDoHotel[i].diaSaida}`)
        }
    }
}

function InformacaoDaReserva (){
    let id = prompt('digite o id da reserva')
    let reserva = reservas.find((elemento) => elemento.id == id) 
    
    if(reserva){
        let hotel = hoteis.find((elemento) => elemento.id == reserva.idDoHotel)
        let reservadia = reservas.find(elemento => elemento.id == reserva.id)
        console.log('nome do hotel: ' + hotel.nome+ ' endereço do hotel: ' +hotel.endereco+' dia da entrada: '+reservadia.diaEntrada+' dia da saida: ' +reservadia.diaSaida)
    }
}

function NomeRegistro(){
 let nome = prompt('digite o seu nome')
 let localNome = reservas.filter(elemento => elemento.nomeResponsavel == nome)
 console.log('reservas do senhor: ' + nome)
 for(i = 0; i < localNome.length; i++){
    console.log(localNome[i])
 }
}

function CategoriaDoHotel(){
 let nomeCategoria = prompt('digite a categoria do hotel que você busca')
 let arraycategorias = hoteis.filter(elemento => elemento.categoria == nomeCategoria)
 console.log('esses são os hoteis com a categoria '+ nomeCategoria)
 for(i = 0; i < arraycategorias.length; i++){
    console.log(arraycategorias[i])
 }
}

function AtualizarNumero(){
 let id = prompt('digite o id do hotel que você quer atualizar o numero')
 let hotel = hoteis.find(elemento => elemento.id == id)

 if(hotel){
    let novoTelefone = prompt('digite o seu novo numero')
    hotel.telefone = novoTelefone
    console.log('atualização feita =)')
 }
 else{
    console.log('id não encontrado')
 }
}

while(continuar){
    let opcao = parseInt(prompt('digite: 1 para cadastrar um hotel/ 2 para fazer uma reserva/ 3 para ver a agenda de um hotel/ 4 para ver uma reserva/ 5 para ver suas reservas/ 6 para ver hoteis com a categoria deu seu gosto/ 7 para atualizar o numero de telefone de um hotel/ 8 para encerrar o programa'))
    switch(opcao){
        case 1:
            CadastroHotel();   
            break;
        case 2:
            CadastroReserva();
            break;
        case 3:
            AgendaDoHotel();
            break;
        case 4:
            InformacaoDaReserva();
            break;
        case 5:
            NomeRegistro();
            break;
        case 6:
            CategoriaDoHotel();
            break;
        case 7:
            AtualizarNumero();
            break;
        case 8:
            continuar = false
            break;
        default:
            alert('opção invalida')
            break;
}
}
