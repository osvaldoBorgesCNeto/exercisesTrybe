function encode(string) {
  let fraseEncode = '';

  for (let contador = 0; contador < string.length; contador += 1) {
    if (string[contador] === 'a') {
      fraseEncode += '1';
    } else if (string[contador] === 'e') {
      fraseEncode += '2';
    } else if (string[contador] === 'i') {
      fraseEncode += '3'
    } else if (string[contador] === 'o') {
      fraseEncode += '4';
    } else if (string[contador] === 'u') {
      fraseEncode += '5'
    } else {
      fraseEncode += string[contador];
    }
  }
  return fraseEncode;
}

function decode(string) {
  let fraseDecode = '';

  for (let contador = 0; contador < string.length; contador += 1) {
    if (string[contador] === '1') {
      fraseDecode += 'a';
    } else if (string[contador] === '2') {
      fraseDecode += 'e';
    } else if (string[contador] === '3') {
      fraseDecode += 'i'
    } else if (string[contador] === '4') {
      fraseDecode += 'o';
    } else if (string[contador] === '5') {
      fraseDecode += 'u'
    } else {
      fraseDecode += string[contador];
    }
  }
  return fraseDecode;
}

function techList(array, name) {
  let lista = [];
  array.sort()

  for (let contador = 0; contador < array.length; contador += 1) {
    lista.push({
      tech: array[contador],
      name,
    });
  }
  if (lista.length === 0) {
    return 'Vazio!'
  }
  return lista;
}

module.exports = {encode, decode};