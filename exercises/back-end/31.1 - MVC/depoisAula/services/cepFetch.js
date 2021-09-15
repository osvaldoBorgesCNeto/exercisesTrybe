const fetch = require('node-fetch');

const headers = {
  Accept: 'application/json',
};

const fetchCEP = async (cep) => {
  const response = await fetch(`http://cep.la/${cep}`, { headers });
  const cepData = await response.json();

  if (Array.isArray(cepData) || cepData.length === 0) {
    return null;
  }

  return cepData;
};

module.exports = {
  fetchCEP,
};