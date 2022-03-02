var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {string: 'Huh'});
});

router.post('/', function (req, res, next) {
  bInput = req.body.input1
  res.render('index', {origStr: bInput, strLen: bInput.length});
});

router.get('/names/:name', function (req, res, next) {
  name1 = req.params.name
  res.render('index', {name: name1})
});

module.exports = router;
