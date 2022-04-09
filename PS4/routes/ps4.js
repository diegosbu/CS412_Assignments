var express = require('express');
var router = express.Router();

require('dotenv').config()

const API_KEY = process.env.APIKEY

// API used: themoviedb

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('the different routes are: /ps4/promise, /ps4/async, and /ps4/callback');
});

router.post('/promise', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
