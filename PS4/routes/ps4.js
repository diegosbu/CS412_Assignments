var express = require('express');
var router = express.Router();
const request = require('request');
const fetch = require('node-fetch');

require('dotenv').config();

const API_KEY = process.env.APIKEY;

// API used: themoviedb

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('the different routes are: /ps4/promise, /ps4/async, and /ps4/callback');
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
          throw new Error(err)
        } else {
          resolve(body)
        }
      })
    })
  }

  doReq()
    .then(body => {
      const response = JSON.parse(body)
      console.log(response)
      res.send(response)
    })
    .catch(err => {
      console.log(err)
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
      console.log(data)
      res.send(data)
    })
    .catch(err => {
      console.log(err)
    })
});


// router.post('/callback', (req, res, next) => {
//   const doReq = async() => {
//     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`, {method: 'GET'});
//     const data = await response.json();

//     return data;
//   }

//   constsendReq = operator => {
//     response = await doReq()
//     res.send(data)
//   }

// });

module.exports = router;
