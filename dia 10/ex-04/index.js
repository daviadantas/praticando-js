let numero = parseInt(prompt('digite um número inteiro e positivo'))
let fn = []
fn[0] = numero - 1
fn[1] = numero

for(let i = 2; i < 10; i++){
    fn[i] = fn[i - 1] + fn [i -2]
}

console.log('fibonacci: ' + fn)