let fruits = [3, 4, 10, 1, 12];
let somaFrutas = null;

for (let index = 0; index < fruits.length; index += 1){
    somaFrutas += fruits[index];
}

if (somaFrutas > 15) {
    console.log(somaFrutas);
}else {
    console.log('Valor menor que 16');
}

// Exercicio 01
console.log('Exercicio 01');

let valorN = 5;
let quadrado = '';

for (let indexI = 0; indexI < valorN; indexI += 1) {
    quadrado += '*';
}
for (let indexJ = 0; indexJ < valorN; indexJ += 1) {
    console.log(quadrado); 
}


// Exercicio 02
console.log('Exercicio 02');

quadrado = '';

for (let indexI = 0; indexI < valorN; indexI += 1) {
    quadrado += '*';
    console.log(quadrado);
}

// Exercicio 03
console.log('Exercicio 03');

quadrado = '';
let inputP = valorN;

for (let indexJ = 0; indexJ < valorN; indexJ += 1){
    for (let indexI = 0; indexI <= valorN; indexI += 1) {
        if (indexI < inputP) {
            quadrado += ' ';
        }else {
            quadrado += '*';
        }
    }
    console.log(quadrado);
    quadrado = '';
    inputP -= 1;
}

// Exercicio 04
console.log('Exercicio 04');

