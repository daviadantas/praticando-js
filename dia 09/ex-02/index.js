let coloquei = true
let salario
while (coloquei){

let nome = prompt('digite seu nome');
let idade = parseInt(prompt('digite sua idade'));
salario = parseInt(prompt('digite seu salario'));

coloquei = prompt('colocou as informações corretamente s/n ?');

if(coloquei == 'n'){
    coloquei = true
}
else{
    coloquei = false
}

}

let almentoSalarial = 0.015

console.log('sua previsão salarial para os proximos 10 anos:');

for(let ano = 1; ano <= 10; ano++){
    salario += salario * almentoSalarial
    almentoSalarial *= 2
    console.log((2023 + ano) + ' =R$ ' +salario)
}


