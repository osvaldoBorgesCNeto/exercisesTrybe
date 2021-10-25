const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const Author = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (_req, res, _next) => {
  const authors = await Author.getAll();
  
  return res.status(200).json(authors);
});

app.get('/books', async (_req, res, _next) => {
  const books = await Books.getAll();

  return res.status(200).json(books);
});

app.get('/books/:authorId', async (req, res, _next) => {
  const { authorId } = req.params;
  const books = await Books.findByAuthorId(authorId);

  if (books.length === 0) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(books);
});

app.post('/books', async (req, res, _next) => {
  const { title, author_id } = req.body;

  if (!title || !author_id) {
    return res.status(400).json({ message: 'Dados inválidos' })
  }

  await Books.createBook(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso!' })
});

app.listen(PORT, () => console.log("Servidor Ligado!!!"));