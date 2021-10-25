require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs')

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);

  return files.some(file => file.substring(14) === fileName);
}

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileFilter = true;

    cb(null, false);
  }

  if (fileExists(file.originalname)) {
    req.fileDuplicate = true;

    cb(null, false);
  }

  cb(null, true);
}

const upload = multer({ storage, fileFilter });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload', upload.single('file'), (req, res, next) => {
  if (req.fileFilter) {
    return res.status(403).json({ error: { message: 'Extension must be `png' } })
  }

  if (req.fileDuplicate) {
    return res.status(409).send({ error: { mesage: "File already exists" } })
  }
 
  return res.status(200).json({ message: "ok"});
});

const defaultStorage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads') }
})

const multiUpload = multer({ storage: defaultStorage })

app.post('/multiple', multiUpload.array('files'), (req, res, next) => {
  const map = req.files.map(file => ({ file: file.originalname, url: `http://localhost:3000/${file.path}` }));

  return res.status(200).json(map);
});

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
