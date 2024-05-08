let nome = prompt('Digite seu nome');
let idade = parseInt(prompt('Digite sua idade'));
let altura = Number(prompt('Digite sua altura'));
let peso = parseInt(prompt('Digite seu peso'));
anoDeNacismento = 2023 - idade ;
imc = peso / (altura * altura);
console.log('Olá ', nome,' você tem ',idade,' anos, nasceu em ', anoDeNacismento,' , tem '
,altura,' de altura, pesa ', peso,'kg seu IMC é ',imc,'kg/m2');