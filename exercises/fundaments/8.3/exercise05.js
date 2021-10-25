// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');
const { access } = require('fs');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const contatadorDeA = names.reduce((acc, curr) => acc + curr.split('').reduce((acc, curr) => curr === 'A' || curr === 'a' ? acc += 1 : acc, 0), 0);
  return contatadorDeA;
}

assert.deepStrictEqual(containsA(), 20);