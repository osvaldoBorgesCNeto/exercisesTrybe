const connection = require('./connection');
const { fetchCEP } = require('../services/cepFetch');

const create = async ({ cep, uf, cidade, bairro, logradouro }) => {
  const query = 'INSERT INTO mvc_cep.cep (cep, uf, cidade, bairro, logradouro) VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [cep.replace("-", ""), uf, cidade, bairro, logradouro]);

  return null;
}

const getCep = async (cep) => {
  const query = 'SELECT cep, uf, cidade, bairro, logradouro FROM mvc_cep.cep WHERE cep = ?';
  const [result] = await connection.execute(query, [cep.replace("-", "")])

  if (!result.length) {
    const cepFetch = await fetchCEP(cep);
    await create(cepFetch);

    return cepFetch;
  }

  const { uf, cidade, bairro, logradouro } = result[0];

  return {
    cep,
    uf,
    cidade,
    bairro,
    logradouro,
  };
}

module.exports = {
  getCep,
};
