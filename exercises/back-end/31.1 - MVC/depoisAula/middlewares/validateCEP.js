const regexLengthCep = /\d{5}-?\d{3}/;
const isLengthCep = (value) => (!regexLengthCep.test(value));

const validatorCepSearch = (req, res, next) => {
  const { cep } = req.query;

  if (isLengthCep(cep)) {
    return res.render('cep/index', { message: "CEP inválido" });
  };

  next();
};

module.exports = {
  validatorCepSearch,
};
