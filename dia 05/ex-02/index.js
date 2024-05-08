let escolha = prompt('você deseja a bastecer com gasolina com álcool ou só calibrar os pneus ?');

switch(escolha){
    case 'gasolina':
        let gasosa = Number(prompt('quantos litros você quer colocar ?'))
        console.log('você colocou ' + gasosa + ' litros de gasolina e deu ' + gasosa * 5  )
        break;
    case 'alcool':
        let alcool = Number(prompt('quantos litros você quer colocar ?'))
        console.log('você colocou ' + alcool + ' litros de álcool e deu ' + alcool * 3  )
        break;
    case 'calibrar':
        console.log('pneus calibrados!')
        break;
    default:
        console.log('não entendi')
        break;
}