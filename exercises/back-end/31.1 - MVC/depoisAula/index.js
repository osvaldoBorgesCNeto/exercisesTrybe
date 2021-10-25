const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');
const app = express();

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/cep', router.routerCep);

app.get('/ping', (_req, res) => {
  res.status(200).json('PONG')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor ligador port ${PORT}`));
