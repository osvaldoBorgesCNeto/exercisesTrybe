// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

function flatten() {
  // escreva seu código aqui
  const newMatriz = arrays.reduce((acc, array) => acc.concat(array));
  return newMatriz;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);