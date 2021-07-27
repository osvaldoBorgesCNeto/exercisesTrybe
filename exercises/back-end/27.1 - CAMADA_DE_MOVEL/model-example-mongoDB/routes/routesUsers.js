const express = require('express');
const middlewares = require('../middlewares');
const connection = require('../models/connection');

const router = express.Router();

const Users = require('../models/Users');

router.get('/', async (_req, res, _next) => {
  const result = await Users.getUsers();

  return res.status(200).json(result);
});

router.get('/:id', async (req, res, _next) => {
  const { id } = req.params;

  const user = await Users.findUserId(id);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  const userRead = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password
  }

  return res.status(200).json(userRead);
});

router.use(middlewares.emailAndPassword);
router.use(middlewares.firstAndLastName);

router.post('/', async (req, res, _next) => {
  const { firstName, lastName, email, password } = req.body;
  
  const newUser = await Users.createUsers(firstName, lastName, email, password);

  return res.status(201).json(newUser);
});

router.put('/:id', async (req, res, _next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const newUser = await Users.editUser(id, firstName, lastName, email, password);

  if (!newUser) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  const viewUser = {
    id: newUser._id,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
  } 

  return res.status(201).json(viewUser);
});

module.exports = router;
