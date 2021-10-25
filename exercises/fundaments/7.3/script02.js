// PARTE 01

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// Exercicio 01/05

assert.strictEqual(typeof(sum), 'function');

// Exercicio 02/05

let result = sum (4, 5);

assert.strictEqual(result, 9, '4 + 5 = 9');

// Exercicio 03/05

result = sum (0, 0);

assert.strictEqual(result, 0, '0 + 0 = 0');

// Exercicio 04/05

assert.throws(() => {
  sum(4, '5');
});

// Exercicio 05/05

assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);

// PARTE 02

const myArray02 = [1, 2, 3, 4];

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

// Exercicio 01/05

assert.strictEqual(typeof(myRemove), 'function');

// Exercicio 02/05

assert.deepStrictEqual(myRemove(myArray02, 3), [1, 2, 4]);

// Exercicio 03/05

assert.notDeepStrictEqual(myRemove(myArray02, 3), [1, 2, 3, 4]);

// Exercicio 04/05

myRemove(myArray02, 4);

assert.deepStrictEqual(myArray02, [1, 2, 3, 4]);

// Exercicio 05/05

assert.deepStrictEqual(myRemove(myArray02, 5), [1, 2, 3, 4]);

// PARTE 03

const myArray03 = [1, 2, 3, 4];

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

myArray03.splice()
// implemente seus testes aqui

// Exercicio 01/05

assert.strictEqual(typeof(myRemoveWithoutCopy), 'function');

// Exercicio 02/05

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// Exercicio 03/05

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Exercicio 04/05

myRemoveWithoutCopy(myArray03, 4)

assert.deepStrictEqual(myArray03, [1, 2, 3]);

// Exercicio 05/05

assert.deepStrictEqual(myRemoveWithoutCopy(myArray03, 5), [1, 2, 3]);

// PARTE 04

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// Exercicio 01/06

assert.strictEqual(typeof(myFizzBuzz), 'function');

// Exercicio 02/06

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

// Exercicio 03/06

assert.strictEqual(myFizzBuzz(3), 'fizz');

// Exercicio 04/06

assert.strictEqual(myFizzBuzz(5), 'buzz');

// Exercicio 05/06

assert.strictEqual(myFizzBuzz(2), 2);

// Exercicio 06/06

assert.strictEqual(myFizzBuzz('5'), false);

// PARTE 05

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

// Exercicio 01/01

assert.deepStrictEqual(obj1, obj2);