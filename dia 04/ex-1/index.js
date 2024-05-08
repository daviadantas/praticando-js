let fome = prompt('esta com fome?');
let dinheiro = prompt('você tem dinheiro?');
let restaurante = prompt('o restaurante esta aberto?');

if(dinheiro == 'não' || fome == 'não'){
    console.log('sua janta sera em casa');
} 
else if(dinheiro == 'sim' &&  fome == 'sim' && restaurante == 'não'){
    console.log('peça um delivery!');
}
else if(fome == 'sim' && dinheiro == 'sim' && restaurante == 'sim'){
    console.log('hoje o jantar sera no seu restaurante favorito!')
}