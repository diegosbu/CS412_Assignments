var express = require('express');
var router = express.Router();
const request = require('request');
const fetch = require('node-fetch');

require('dotenv').config();

const API_KEY = process.env.APIKEY;

// API used: themoviedb

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'PS4 Routes Page' });
});

router.post('/promise', (req, res, next) => {
  const doReq = () => {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        qs: {api_key: API_KEY}
      } 
  
      request(options, (err, res, body) => {
        if (err) {
          throw new Error(err);
        } else {
          resolve(body);
        }
      })
    })
  }

  doReq()
    .then(body => {
      const response = body
      console.log(response);
      res.render('index', { title: 'PS4 Part B page', data1: response });
    })
    .catch(err => {
      console.log(err);
    })
});


router.post('/async', (req, res, next) => {
  const doReq = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`, {method: 'GET'});
    const data = await response.json();

    return data;
  }

  doReq()
    .then(data => {
      console.log(data);
      res.render('index', { title: 'PS4 Part C page', data2: JSON.stringify(data) });
    })
    .catch(err => {
      console.log(err);
    })
});


router.post('/callback', (req, res, next) => {
  const doReq = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`, {method: 'GET'});
    const data = await response.json();

    return data;
  }

  const constsendReq = async (operator) => {
    response = await doReq();
    res.render('index', { title: 'PS4 Part D page', data3: JSON.stringify(response) });
  }

  constsendReq(doReq);
});

router.post('/formData', (req, res, next) => {
  query = req.body.input1;
  console.log(query)

  const doReq = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`, {method: 'GET'});
    const data = await response.json();

    return data;
  }

  doReq()
    .then(data => {
      console.log(data);
      res.render('index', { title: 'PS4 Part F page', data2: JSON.stringify(data) });
    })
    .catch(err => {
      console.log(err);
    })
});



module.exports = router;
