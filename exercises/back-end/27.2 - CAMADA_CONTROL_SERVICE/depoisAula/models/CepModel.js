const connection = require('./connection');
const fetch = require('node-fetch');

const getCep = async (cep) => {
  const query = `SELECT * FROM cep_lookup.ceps WHERE cep = ?`;
  const [result] = await connection.execute(query, [cep.replace("-", "")]);

  return result;
}

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [cep.replace("-", ""), logradouro, bairro, localidade, uf]);

  return null;
}

const verificAPI = async (cep) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const result = await response.json();

  return result;
}

module.exports = {
  getCep,
  create,
  verificAPI
}