var router = require('express').Router();
var controller = require('./postController');
var Post = require('./postModel');

router.route('/')
    .get(function(req, res, next) {
        console.log('post router')
            // res.send({ ok: true })

        Post.find({})
            .populate('author categories')
            .exec()
            .then(function(posts) {
                res.json(posts);
            }, function(err) {
                next(err);
            })
    })
    .post(function(req, res, next) {
        var newpost = req.body;
        console.log('newPost', newpost)
        Post.create(newpost)
            .then(function(post) {
                console.log('post', post)
                res.json(post);
            }, function(err) {
                console.error(err)
                next(err);
            });
    })

module.exports = router;