const { test, expect } = require('@jest/globals');
const searchEmployee = require('../functions/bonus');

describe('BONUS', () => {
  it('a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  test('o nome do funcionario', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  test('o ultimo do funcionario', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  });

  test('o habilidades do funcionario', () => {
    expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
  });

  test('retornado quando a ID e detalhe não existir', () => {
    expect(() => { searchEmployee() }).toThrow();
  });

  test('retornado quando a ID não existir', () => {
    expect(() => { searchEmployee('8579-4', 'lastName') }).toThrowError(new Error('ID não identificada'));
  });

  test('retornado quando a detalhe não existir', () => {
    expect(() => { searchEmployee('1256-4', 'detail') }).toThrowError(new Error('Informação indisponível'));
  });

})