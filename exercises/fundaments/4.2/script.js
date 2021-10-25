let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// 1
console.log('Exercicio 01');

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// 2
console.log('Exercicio 02');
let resultado02 = null;

for (let index = 0; index < numbers.length; index += 1) {
    resultado02 += numbers[index];
}

console.log(resultado02);

// 3
console.log('Exercicio 03');
let resultado03 = null;
let resultadoMediaAritmetica = null;

for (let index = 0; index < numbers.length; index += 1) {
    resultado03 += numbers[index];
}

resultadoMediaAritmetica = resultado03 / numbers.length;

console.log(resultadoMediaAritmetica);

// 4
console.log('Exercicio 04');

if (resultado03 > 20) {
    console.log('valor maior que 20');
}else if (resultado03 <= 20) {
    console.log('valor manor ou igual a 20');
}

// 5
console.log('Exercicio 05');
let valorMaior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (valorMaior < numbers[index]) {
        valorMaior = numbers[index];
    }    
}

console.log(valorMaior);

// 6
console.log('Exercicio 06');
let valorImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        valorImpar += 1;
    }    
}

console.log(valorImpar);

// 7
console.log('Exercicio 07');
let valorMenor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (valorMenor > numbers[index]) {
        valorMenor = numbers[index];
    }    
}

console.log(valorMenor);

// 8
console.log('Exercicio 08');
let resultado08 = [];

for (let index08 = 1; index08 < 26; index08 += 1) {
    resultado08.push(index08);
}

console.log(resultado08);

// 9
console.log('Exercicio 09');
let resultado09 = [];

for (let index09 = 1; index09 < 26; index09 += 1) {
    resultado09.push(index09);
}

for (let index09 = 0; index09 < resultado09.length; index09 += 1) {
    resultado09[index09] = resultado09[index09] / 2;
} 

console.log(resultado09);

// BONUS 01
console.log('BONUS 01');

for (let indexI = 1; indexI < numbers.length; indexI += 1){
    for(let indexJ = 0; indexJ < indexI; indexJ += 1) {
        if (numbers[indexI] < numbers[indexJ]) {
            let position = numbers[indexI];
            numbers[indexI] = numbers[indexJ];
            numbers[indexJ] = position;
        }
    }
}

console.log(numbers);

// BONUS 02
console.log('BONUS 02');

for (let indexI = 1; indexI < numbers.length; indexI += 1){
    for(let indexJ = 0; indexJ < indexI; indexJ += 1) {
        if (numbers[indexI] > numbers[indexJ]) {
            let position = numbers[indexI];
            numbers[indexI] = numbers[indexJ];
            numbers[indexJ] = position;
        }
    }
}

console.log(numbers);

// BONUS 03
console.log('BONUS 03');
let numbersBonus = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let indexJV = 0;
let bonus03 = [];

for (let indexI = 0; indexI < numbersBonus.length; indexI += 1){
    if (numbersBonus[indexI + 1]) {
        bonus03.push(numbersBonus[indexI] * numbersBonus[indexI + 1])
    }else {
        bonus03.push(numbersBonus[indexI] * 2);
    }
}

console.log(bonus03);