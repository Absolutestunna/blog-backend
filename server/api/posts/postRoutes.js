var router = require('express').Router();
var controller = require('./postController');
var Post = require('./postModel');


router.route('/')
    .get(function(req, res, next){
        Post.find({})
            .populate('author categories')
            .exec()
            .then(function(posts){
                res.json(posts);
            }, function(err){
                next(err);
        })
    })

module.exports = router;
