const express = require('express');

const router = express.Router();
const db = require('../db/dataDB');

router.get('/', (req, res) => {
  db.getBoardList((result) => {
    res.send(result);
  });
});
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const seq = req.params.id;
  db.getBoardData(seq, (result) => {
    res.send(result);
  });
});

module.exports = router;
