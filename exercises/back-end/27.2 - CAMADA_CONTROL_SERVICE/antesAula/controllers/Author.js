const express = require('express');
const Author = require('../services/Author');

const AuthorRouter = express.Router();

AuthorRouter.get('/', async (_req, res, _next) => {
  const allAuthors = await Author.getAll();

  return res.status(200).json(allAuthors);
});

AuthorRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (author.error) return next(author.error);

  return res.status(200).json(author);
});

AuthorRouter.post('/', async (req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;
  const newAuthor = await Author.create(first_name, middle_name,last_name);

  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);  
});

module.exports = AuthorRouter;
