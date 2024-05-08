let nome = prompt('qual seu nome?');
let idade = parseInt(prompt('qual sua idade?'));
let carta = prompt('você tem carta de motorista?');
let carro = prompt('você tem carro?');

if (idade <= 17 || carta =='não'){
    console.log('você não pode dirigir');
}
else if (idade >= 18 && carta == 'sim' && carro == 'não'){
    console.log('você pode dirigir mas você não tem carro');
}

else if (idade >= 18 && carta == 'sim' && carro == 'sim'){
    console.log('você pode ser um motorista!')
}