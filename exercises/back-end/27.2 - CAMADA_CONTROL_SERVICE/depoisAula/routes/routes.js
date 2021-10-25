const express = require('express');
const PingController = require('../controllers/PingController');
const CepController = require('../controllers/CepController');

const router = express.Router();

router.use('/ping', PingController);

router.use('/cep', CepController)

module.exports = router;