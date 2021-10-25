const CepModel = require('../models/CepModel');

const searchCep = async (cep) => {
  const dataCep = await CepModel.getCep(cep);

  const cepAPI = await CepModel.verificAPI(cep);
  console.log(cepAPI);

  if (!dataCep || dataCep.length === 0) return { error: { code: "notFound", message: "CEP não encontrado" } };

  return dataCep;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const dataCep = await CepModel.getCep(cep);

  if (dataCep.length !== 0) return { error: { code: "alreadyExists", message: "CEP já existente" } };

  await CepModel.create(cep, logradouro, bairro, localidade, uf);

  return {};
}

module.exports = {
  searchCep,
  create
};
