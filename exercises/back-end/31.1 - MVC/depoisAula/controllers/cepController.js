const cepModel = require('../models/cepModel');

const getCep = async (req, res) => {
  const { cep } = req.query;

  if (!cep) return res.render('404');

  const cepData = await cepModel.getCep(cep);

  if (!cepData) return res.render('cep/index', { message: 'CEP não encontrado', cepData: null });

  return res.render('cep/index', { message: null, cepData });
};

const searchCep = (_req, res) => {
  res.render('cep/index', { message: null, cepData: null });
};

module.exports = {
  getCep,
  searchCep,
};
