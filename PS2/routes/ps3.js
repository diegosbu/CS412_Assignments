var express = require('express');
var router = express.Router();

//Part B soln.
router.get('/', function(req, res, next) {
  res.render('index', {string: 'string for part B'});
});

//Part C soln.
router.post('/', function (req, res, next) {
  bInput = req.body.input1
  res.render('index', {origStr: bInput, strLen: bInput.length});
});

//Part D soln.
router.get('/names/:name', function (req, res, next) {
  name1 = req.params.name
  res.render('index', {name: name1})
});

module.exports = router;