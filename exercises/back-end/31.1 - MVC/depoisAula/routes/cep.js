const express = require('express');
const cepController = require('../controllers/cepController');
const { validatorCepSearch } = require('../middlewares/validateCEP');

const routerCep = express.Router();

routerCep.get('/', cepController.searchCep);

routerCep.get('/cep', validatorCepSearch,cepController.getCep)

module.exports = routerCep;
