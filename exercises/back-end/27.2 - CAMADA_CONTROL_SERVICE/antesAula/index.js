const express = require('express');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');
const router = require('./routers/router');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use(router);

app.use(middlewares.error);

app.listen(PORT, () => console.log(`Servidor Ligado porta ${PORT}!!!`));

console.log(process.env.DB_URL)
