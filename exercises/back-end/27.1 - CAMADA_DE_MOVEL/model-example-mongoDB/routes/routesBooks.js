const express = require('express');

const route = express.Router();

const Books = require('../models/Books');

route.get('/', async (_req, res, _next) => {
  const books = await Books.getAll();

  return res.status(200).json(books);
});

route.get('/:authorId', async (req, res, _next) => {
  const { authorId } = req.params;
  const books = await Books.findByAuthorId(authorId);

  if (!books) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(books);
});

route.post('/', async (req, res, _next) => {
  const { title, author_id } = req.body;

  if (!title || !author_id) {
    return res.status(400).json({ message: 'Dados inválidos' })
  }

  await Books.createBook(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso!' })
});

module.exports = route;
