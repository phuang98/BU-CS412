const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../config/weatherAPI');

router.route('/current')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?lat=42.36&lon=-71.06&units=imperial&appid=' + CONFIG.key);
        let weather = await result.json();
        res.render('ps4', {title: 'Weather for the Next 3 Hours!', lat: weather.lat, lon: weather.lon,
            first: weather.hourly[0].temp, second: weather.hourly[1].temp, third: weather.hourly[2].temp});
    })
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?lat=' +  req.body.lat + '&lon=' + req.body.lon
            + '&units=imperial&appid=' + CONFIG.key);
        let weather = await result.json();
        res.render('ps4', {title: 'Weather for the Next 3 Hours!', lat: weather.lat, lon: weather.lon,
            first: weather.hourly[0].temp, second: weather.hourly[1].temp, third: weather.hourly[2].temp});
    })

module.exports = router;