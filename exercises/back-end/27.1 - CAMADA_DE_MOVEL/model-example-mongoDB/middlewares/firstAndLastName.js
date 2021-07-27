const firstAndLastName = (req, res, next) => {
  const { firstName, lastName } = req.body;

  if (!firstName) {
    return res.status(400).json({ message: 'O campo "firstName" [e obrigatorio.' });
  }

  if (!lastName) {
    return res.status(400).json({ message: 'O campo "lastName" [e obrigatorio.' });
  }

  next();
};

module.exports = firstAndLastName;