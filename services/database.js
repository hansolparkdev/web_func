const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 's3tdev',
  database: 'board_db',
});

module.exports.connection = connection;
