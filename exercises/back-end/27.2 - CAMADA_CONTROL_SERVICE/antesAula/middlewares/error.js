const error = (err, req, res, _next) => {
  const statusByErrorCode = {
    notFound: 404, // Erros do tipo `notFound` retornam status 404 Not Found
    alreadyExists: 409, // Erros do tipo `alreadyExists` retornam status 409 Conflict
    // Podemos adicionar quantos códigos novos desejarmos
  };

  // Buscamos o status adequado para o erro que estamos tratando.
  // Caso não haja um status para esse código, assumimos que é
  // um erro desconhecido e utilizamos o status 500 Internal Server Error
  const status = statusByErrorCode[err.code] || 500;

  // Por último, retornamos o status e a mensagem de erro para o client
  res.status(status).json({ error: { message: err.message } });
};

module.exports = error;
