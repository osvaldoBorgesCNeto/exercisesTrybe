const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res, _next) => {
  return res.status(200).json({ message: 'Esta VIVO!!!' });
});

app.listen(PORT, () => console.log(`Servidor ligado port: ${PORT}`));
