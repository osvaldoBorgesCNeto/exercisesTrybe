// PARTE 01

// POR FOR

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers);

// POR REDUCE

const sumNumber = numbers.reduce((result, number) => result + number);
console.log(sumNumber);

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbe = numbers.reduce(getSum);
console.log(sumNumbe);

// PARTE 02

const collection = [1, 2, 3, 4, 5];

const getSum02 = (accumulator, number) => {
  console.log(accumulator);
  return accumulator + number;
};

const sumNumbers02 = collection.reduce(getSum02);
console.log(sumNumbers02);

// PARTE 03

const numbers03 = [32, 15, 3, 2, -5, 56, 10];

const getSum03 = (result, number) => {
  console.log(result);
  return result + number;
  };
const sumNumbers03 = numbers03.reduce(getSum03, 0);
console.log(sumNumbers);