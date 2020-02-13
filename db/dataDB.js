const { connection } = require('../services/database');

module.exports.getBoardList = (callback) => {
  connection.query('select * from tbl_board', (error, results) => {
    if (error) throw error;
    callback(results);
  });
};

module.exports.getBoardData = (seq, callback) => {
  connection.query(`select * from tbl_board where seq=${seq}`, (error, results) => {
    if (error) throw error;
    callback(results);
  });
};
