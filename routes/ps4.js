const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../config/weatherAPI');

//redis
const {promisify} = require('util');
const redis = require('redis');
const client = redis.createClient();
const existsAsync = promisify(client.exists).bind(client);
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


router.route('/current')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?lat=42.36&lon=-71.06&units=imperial&appid=' + CONFIG.key);
        let weather = await result.json();
        let test;

        //redis
        const name = weather.lat + ' & ' + weather.lon;
        let match = await existsAsync(name);
        if (match) { //key exists, grab value
            let data = await getAsync(name);
            data = JSON.parse(data);
            test = {
                first: weather.hourly[0].temp,
                second: weather.hourly[1].temp,
                third: weather.hourly[2].temp,
                cacheInfo: 'cached'
            }
        } else {
            let data = result.json();
            await setAsync(name, JSON.stringify(data));
            test = {
                first: weather.hourly[0].temp,
                second: weather.hourly[1].temp,
                third: weather.hourly[2].temp,
                cacheInfo: 'not in cache'
            }
        }
        client.expire(name, 30);
        res.send(test);
    })
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?lat=' + req.body.lat + '&lon=' + req.body.lon
            + '&units=imperial&appid=' + CONFIG.key);
        let weather = await result.json();

        //redis
        const name = weather.lat + ' & ' + weather.lon;
        let match = await existsAsync(name);
        if (match) { //key exists, grab value
            let data = await getAsync(name);
            data = JSON.parse(data);
            test = {
                first: weather.hourly[0].temp,
                second: weather.hourly[1].temp,
                third: weather.hourly[2].temp,
                cacheInfo: 'cached'
            }
        } else {
            let data = result.json();
            await setAsync(name, JSON.stringify(data));
            test = {
                first: weather.hourly[0].temp,
                second: weather.hourly[1].temp,
                third: weather.hourly[2].temp,
                cacheInfo: 'not in cache'
            }
        }
        client.expire(name, 30);
        res.send(test);
    })

module.exports = router;
