// PARTE 01

const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello';
  let outArray = [];

  for (const person in people) {
    outArray.push(`${greeting} ${people[person]}`);
  }
  return outArray;
};

const parameter01 = ['Irina', 'Ashleigh', 'Elsa'];
const result01 = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople), 'function');
assert.deepStrictEqual(greetPeople(parameter01), result01);

// PARTE 02

const removeVowels = (word) => {
  const characters = word;
  let results = '';
  let number = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      number += 1;
      results += number;
    } else {
      results += characters[i];
    }
  }
  return results;
};

const parameter02 = 'Dayane';
const result02 = 'D1y2n3';

assert.strictEqual(typeof(removeVowels), 'function');
assert.strictEqual(removeVowels(parameter02), result02);

// PARTE 03

const greaterThanTen = (array) => {
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameter03 = [4, 10, 32, 9, 21];
const result03 = [32, 21];

assert.strictEqual(typeof(greaterThanTen), 'function');
assert.deepStrictEqual(greaterThanTen(parameter03), result03);

// PARTE 04

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter04 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result04 = [5, 6];

assert.strictEqual(typeof(secondThirdSmallest), 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter04), result04);
