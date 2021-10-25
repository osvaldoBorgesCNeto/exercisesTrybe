const express = require('express');
const AuthorController = require('../controllers/Author');

const router = express.Router();

router.use('/authors', AuthorController);

module.exports = router;