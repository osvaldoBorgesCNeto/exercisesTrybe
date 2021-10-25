const regexLengthCep = /\d{5}-?\d{3}/;
const isLengthCep = (value) => (!regexLengthCep.test(value));

const validatorCepSearch = (cep) => {
  switch (true) {
    case isLengthCep(cep): return { error: { code: "invalidData", message: "CEP inválido" } }
    default: return {};
  };
};

const regexCreateCep = /\d{5}-\d{3}/;
const isLengthCepCreate = (value) => (!regexCreateCep.test(value));

const validatorCepCreate = (cep) => {
  if (isLengthCepCreate(cep)) return { error: { code: "invalidData", message: "O CEP deve ser composto por 9 dígitos com traço" } }

  return {};
}

module.exports = {
  validatorCepSearch,
  validatorCepCreate
};