const errorMiddleware = (err, _req, res, _next) => {
  if (err.isJoi) {
    // Logo, respondemos com o status 400 Bad Request
    return res.status(400)
      // E com a mensagem gerada pelo Joi
      .json({ error: { message: err.details[0].message } });
  }

  const typesError = {
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409
  };

  const status = typesError[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
}

module.exports = errorMiddleware;
