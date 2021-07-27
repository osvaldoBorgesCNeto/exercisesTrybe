const mysql = require('mysql2/promise');

const connection = mysql.createPool({

});

module.exports = connection;
