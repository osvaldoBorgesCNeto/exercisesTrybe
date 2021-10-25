function techList(array, name) {
  if (array.length === 0) return 'Vazio!';

  const lista = array.sort().map(element => ({ tech: element, name, }));

  return lista;
}

module.exports = techList;
