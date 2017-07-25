var router = require('express').Router();

router.route('/')
    .get(function(req, res, next){
        res.status(200).send('user route installed')
    })


module.exports = router;