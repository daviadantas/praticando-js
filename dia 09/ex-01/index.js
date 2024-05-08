let desejo = true

while(desejo){

let nome = prompt('digite seu nome');
let profissao = prompt('digite sua profissão');
let idade = parseInt(prompt('digite sua idade'));
let peso = parseInt(prompt('digite seu peso'));
let altura = Number(prompt('digite sua altura'));

console.log('Olá ',nome,'você tem ',idade,' anos, é ', profissao,', tem ', altura,' e pesa ',peso,' kg');

if(idade >= 18){
    console.log('esta liberado pra tomar umas geladas!!');
}
else{
    console.log('OPA!, sem geladas pra você');
}

let idadeMeses = idade*12
let idadeSemanas = idade*52
let idadeDias = idade*365

console.log('você tem ', idadeMeses,' meses de vida');
console.log('você tem ', idadeSemanas,' semanas de vida');
console.log('você tem ', idadeDias,' dias de vida');

let imc = peso / (altura * altura);

if(imc < 18.5){
    console.log('de acordo com a tabela do imc você esta na faixa de magreza')
}
else if(imc >= 18.5 && imc < 24.9){
    console.log('de acordo com a tabela do imc você esta na faixa normal')
}
else if(imc >= 24.9 && imc < 30){
    console.log('de acordo com a tabela do imc você esta na faixa de sobrepeso')
}
else if(imc > 30){
    console.log('de acordo com a tabela do imc você esta na faixa de obeso')
}

let anoDeNascimento = 2023 - idade ;
idade =  0
for(let ano = anoDeNascimento; ano <= 2023; ano++, idade++){
    
    console.log('em ', ano,' você tinha', idade )
    
}

desejo = prompt('você deseja continuar s/n ?')
if(desejo == 's'){
    desejo = true;
}
else{
    desejo = false;
}

}

