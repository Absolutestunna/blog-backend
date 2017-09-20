var router = require('express').Router();
// var controller = require('./postController');
var Post = require('./postModel');

router.param('id', function(req, res, next, id) {
    Post.findById(id)
        .populate('author', 'username')
        .exec()
        .then(function(post) {
            if (!post) {
                next(new Error('No post with that id'));
            } else {
                req.post = post;
                next();
            }
        }, function(err) {
            next(err);
        });
})


router.route('/')
    .get(function(req, res, next) {
        Post.find({})
            .populate('author categories')
            .exec()
            .then(function(posts) {
                res.send(posts)
            }, function(err) {
                next(err)
            })


        // Post.find({})
        //     .exec()
        //     .then(function(posts) {
        //         console.log('posts', posts)
        //         res.json(posts);
        //     }, function(err) {
        //         next(err);
        //     })
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