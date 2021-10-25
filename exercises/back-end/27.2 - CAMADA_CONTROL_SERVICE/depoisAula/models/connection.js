const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  database: process.env.NAME
});

module.exports = connection;
