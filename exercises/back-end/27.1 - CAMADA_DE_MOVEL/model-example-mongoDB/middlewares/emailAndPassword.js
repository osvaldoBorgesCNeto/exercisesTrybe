const emailAndPassword = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" [e obrigatorio.' });
  }

  if (!password) {
    return res.status(400).json({ message: 'O campo "password" [e obrigatorio.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'O campo "password" deve ter pelo menos 6 caracteres' });
  }

  next();
}

module.exports = emailAndPassword;
