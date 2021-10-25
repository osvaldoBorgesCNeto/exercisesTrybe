const express = require('express');
const bodyParser = require('body-parser');
const routesUsers = require('./routes/routesUsers');
const routesBooks = require('./routes/routesBooks');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const Author = require('./models/Author');

app.get('/authors', async (_req, res, _next) => {
  const authors = await Author.getAll();
  
  return res.status(200).json(authors);
});

app.use('books', routesBooks);

app.use('/users', routesUsers);

app.listen(PORT, () => console.log("Servidor Ligado!"));
