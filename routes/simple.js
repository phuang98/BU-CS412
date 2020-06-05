const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('passing',
            {
                string: 'Hey now',
            });
    })

    .post((req, res, next) => {
        res.render('passing',
            {
                original: req.body.original,
                length: req.body.original.length
            });
    })

module.exports = router;