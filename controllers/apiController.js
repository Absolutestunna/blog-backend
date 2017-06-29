var Stories = require('../models/storyModel');
var bodyParser = require('body-parser');


module.exports = function(app){


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    /*LATER*/

    //GET STORIES BASED ON PROFILE LOGGED IN



    //GET ALL THE STORIES
    app.get('/api/stories/:uname', function(req, res){
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
    app.get('/api/category/:topic', function(req, res){
      Stories.find({ topic: req.params.topic }, function(err, stories){

        if(err) throw err;

        res.send(stories)
      })
    });






}
