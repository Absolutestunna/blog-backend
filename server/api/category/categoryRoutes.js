var router = require('express').Router();

router.route('/')
    .get(function(req, res, next){
        console.log('category route installed')
        res.status(200).send("category installed")
    })

module.exports = router;