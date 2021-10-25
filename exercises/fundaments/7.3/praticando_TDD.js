// PARTE 01

const assert = require('assert');
// escreva a função addOne aqui

const addOne = (array) => {
  const outArray = [];
  for (let index = 0; index < array.length; index += 1) {
    outArray.push(array[index] + 1);
  }
  return outArray;
};

const myArray01 = [31, 57, 12, 5];
const unchanged01 = [31, 57, 12, 5];
const expected01 = [32, 58, 13, 6];
const output01 = addOne(myArray01);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output01, expected01);
assert.deepStrictEqual(myArray01, unchanged01);

// PARTE 02

// escreva a função wordLengths aqui

const wordLengths = (word) => {
  const outArray = [];
  for (let index = 0; index < word.length; index += 1) {
    outArray.push(word[index].length);
  }
  return outArray;
};

const words02 = ['sun', 'potato', 'roundabout', 'pizza'];
const expected02 = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output02 = wordLengths(words02);
assert.deepStrictEqual(output02, expected02);

// PARTE 03

// escreva a função sumAllNumbers aqui

const sumAllNumbers = (number) => {
  let outSum = 0;
  for (let index = 0; index < number.length; index += 1) {
    outSum += number[index];
  }
  return outSum;
}

const numbers = [9, 23, 10, 3, 8];
const expected03 = 53;
const output03 = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output03, expected03);

// PARTE 04

// escreva a função findTheNeedle aqui

const findTheNeedle = (array, string) => {
  let number = -1;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === string) {
      number = index;
      return number
    }
  }
  return number;
};

let words04 = ['house', 'train', 'slide', 'needle', 'book'];
let expected04 = 3;
let output04 = findTheNeedle(words04, 'needle');
assert.strictEqual(output04, expected04);

words04 = ['plant', 'shelf', 'arrow', 'bird'];
expected04 = 0;
output04 = findTheNeedle(words04, 'plant');
assert.strictEqual(output04, expected04);

words04 = ['plant', 'shelf', 'arrow', 'bird'];
expected04 = -1;
output04 = findTheNeedle(words04, 'plat');
assert.strictEqual(output04, expected04);