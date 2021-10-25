const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const errorMiddleware = require('./middlewares/error');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use(router);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Servidor Ligado ${PORT}`));