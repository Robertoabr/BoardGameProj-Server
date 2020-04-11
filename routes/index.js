const express = require('express');
const router = express.router();
// why did the above have a capital R in express.Router???

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
