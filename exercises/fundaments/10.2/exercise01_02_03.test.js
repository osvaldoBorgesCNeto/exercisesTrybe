const { test } = require('@jest/globals');
const { describe } = require('yargs');
const uppercase = require('./exercise01');
const getUserName = require('./exercise02_03');

describe('Exercicio 01', () => {
  test('transforma as letras de uma palavra em letras maiúsculas', () =>{
    uppercase('osvaldo', (result) => {
      expect(result).toBe('OSVALDO');
    })
  })
})

describe('Exercicio 02', () => {
  test('usuário é encontrado', () => {
    expect.assertions(1);
    return getUserName('4').then(userName => {
      expect(userName).toEqual('Mark');
    })
  })

  test('usuario nao encontrado', () => {
    expect.assertions(1);
    return getUserName('6').catch(error => {
      expect(error.error).toBe('User with 6 not found.')
    })
  })
})

describe('Exercicio 03', () => {
  test('usuário é encontrado', async () => {
    expect.assertions(1);
    return await getUserName('4').then(userName => {
      expect(userName).toEqual('Mark');
    })
  })

  test('usuario nao encontrado', async () => {
    const id = '6'
    expect.assertions(1);
    return await expect(getUserName(id)).rejects.toEqual({ error: `User with ${id} not found.` });
  })
})
