const express = require('express');
const bodyParser = require('body-parser');
const booksController = require('./controllers/books');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/books', booksController.getAll);

app.get('/books/:id', booksController.getById);

app.post('/books', booksController.createBook);

app.put('/books/:id', booksController.editBook);

app.delete('/books/:id', booksController.deleteBook);

app.listen(PORT, () => console.log(`Servidor Ligado port ${PORT}`));

module.exports = app;