var Stories = require('../models/storyModel');
var bodyParser = require('body-parser');


module.exports = function(app){

    /*LATER*/
    //GET STORIES BASED ON PROFILE LOGGED IN

    //GET ALL THE STORIES
    app.get('/api/stories', function(req, res){
      Stories.find(function(err, stories){

        if(err) throw err;

        res.send(stories)
      })
    });

    //GET A SPECIFIC STORY
    app.get('/api/story/:id', function(req, res){
      Stories.findById({ _id: req.params.id }, function(err, story){

        if(err) throw err;

        res.send(story)
      })
    });

    //GET STORIES BY CATEGORY
    app.get('/api/category/:cat', function(req, res){
      Stories.find({ topic: req.params.cat }, function(err, stories){

        if(err) throw err;

        res.send(stories)
      })
    });

}
