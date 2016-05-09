var express = require('express');
var router = express.Router();
var cats = require('../models/cats.js')

/* GET users listing. */

router.get('/', function(req, res, next) {
  console.log(cats)
  res.render(cats);
});

module.exports = router;
