const { validatorCepSearch, validatorCepCreate } = require('../schemas/CepSchema');
const Joi = require('joi');

const validatorCep = (req, _res, next) => {
  const { cep } = req.params;

  const isValidCep = validatorCepSearch(cep);

  if (isValidCep.error) return next(isValidCep.error);

  next();
};

const validatorReq = (req, _res, next) => {
  const { error } = Joi.object({
    // Deve ser uma string (.string()) não vazia (.not().empty()) e é obrigatório (.required())
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  })
    // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
    .validate(req.body);
  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  const { cep } = req.body;
  const isValidCep = validatorCepCreate(cep);

  if (isValidCep.error) return next(isValidCep.error);

  next();
};

module.exports = {
  validatorCep,
  validatorReq
};
