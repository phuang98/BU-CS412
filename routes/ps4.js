const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../config/weatherAPI');

//redis
const redis = require('redis');
const client = redis.createClient();


router.route('/current')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?lat=42.36&lon=-71.06&units=imperial&appid=' + CONFIG.key);
        let weather = await result.json();

        //redis
        const name = weather.lat + ' & ' + weather.lon;
        client.exists(name, (err, response) => {
            if(err) {throw new Error(err)}
            if(response == 1) { //key exists, grab value
                test = JSON.stringify('CACHED');
                client.get(name, (err, response) => {
                    console.log(JSON.stringify(name + ' cached'));
                })
            } else {
                test = JSON.stringify('NOT IN CACHE');
                client.set(name, name, (err, reponse) => { //name = key, reversedName = value
                    console.log(JSON.stringify(name + ' not in cache'));
                });
            }
        })
        client.expire(name, 30);

        res.render('ps4', {title: 'Weather for the Next 3 Hours!', lat: weather.lat, lon: weather.lon,
            first: weather.hourly[0].temp, second: weather.hourly[1].temp, third: weather.hourly[2].temp, info: test});
    })
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?lat=' +  req.body.lat + '&lon=' + req.body.lon
            + '&units=imperial&appid=' + CONFIG.key);
        let weather = await result.json();

        //redis
        const name = weather.lat + ' & ' + weather.lon;
        client.exists(name, (err, response) => {
            if(err) {throw new Error(err)}
            if(response == 1) { //key exists, grab value
                test = (JSON.stringify('CACHED'));
                client.get(name, (err, response) => {
                    console.log(JSON.stringify(name + ' cached'));
                })
            } else {
                test = (JSON.stringify('NOT IN CACHE'));
                client.set(name, name, (err, reponse) => { //name = key, reversedName = value
                    console.log(JSON.stringify(name + ' not in cache'));
                });
            }
        })
        client.expire(name, 30);

        res.render('ps4', {title: 'Weather for the Next 3 Hours!', lat: weather.lat, lon: weather.lon,
            first: weather.hourly[0].temp, second: weather.hourly[1].temp, third: weather.hourly[2].temp, info: test});
    })

module.exports = router;