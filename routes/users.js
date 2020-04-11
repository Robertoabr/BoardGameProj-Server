const express = require('express');
const router = express.router();
// why did the above have a capital R in express.Router???

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a roberto-source');
});

module.exports = router;
