var router = require('express').Router();
var controller = require('./postController');
var Post = require('./postModel');

router.route('/')
    .get(function(req, res, next){
        console.log('post route')
        res.send({ok: true})
    })

module.exports = router;


// Post.find({})
//             .populate('author categories')
//             .exec()
//             .then(function(posts){
//                 res.json(posts);
//             }, function(err){
//                 next(err);
//         })