let numero1 = Number(prompt('digite um numero'));
let numero2 = Number(prompt('digite outro numero'));
let operacao = parseInt(prompt('digite 1 para soma, 2 para subtração, 3 para multiplicação, 4 pra divisão'));

switch(operacao){
    case 1:
        console.log('a soma dos numeros é ', numero1 + numero2)
        break;
    case 2:
        console.log('a subtração dos numeros é ', numero1 - numero2)
        break;
    case 3:
        console.log('a multiplicação dos numeros é ', numero1 * numero2)
        break;
    case 4:
        console.log('a divisão dos numeros é ', numero1 / numero2)
        break;
    default:
        console.log('operação invalida')
        break;
}