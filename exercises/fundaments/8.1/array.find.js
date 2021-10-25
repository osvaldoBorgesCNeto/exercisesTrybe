// PARTE 01

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven);

console.log(verifyEven(9));
console.log(verifyEven(14));   

// PARTe 02

const isEven02 = numbers.find((number) => number % 2 === 0);

console.log(isEven02);