const express = require('express');
const CepService = require('../services/CepService');
const { validatorCep, validatorReq } = require('../middlewares/validadorCep');

const CepRouter = express.Router();

CepRouter.get('/:cep', validatorCep, async (req, res, next) => {
  const { cep } = req.params;

  const dataCep = await CepService.searchCep(cep);

  if (dataCep.error) return next(dataCep.error);

  return res.status(200).json(dataCep);
});

CepRouter.post('/', validatorReq, async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const dataCep = await CepService.create(cep, logradouro, bairro, localidade, uf);

  if (dataCep.error) return next(dataCep.error);

  return res.status(201).json({ cep, logradouro, bairro, localidade, uf });
})

module.exports = CepRouter;
