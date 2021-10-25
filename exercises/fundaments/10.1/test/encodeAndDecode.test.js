const { encode, decode} = require('../functions/encodeAndDecode');

describe('Encode and Decode', () => {
  test('Encode e uma funcao', () => {
    expect(typeof encode).toBe('function');
  })

  test('Decode e uma funcao', () => {
    expect(typeof decode).toBe('function');
  })
  
  test('Convertendo vogal em numero (encode)', () => {
    expect(encode('aeiou')).toBe('12345')
  })

  test('Convertendo vogal em numero (decode)', () => {
    expect(decode('12345')).toBe('aeiou')
  })

  test('Funcoes tem o mesmo numero de caracteres', () => {
    expect(decode('12345').length).toBe(('12345').length)
  })

})