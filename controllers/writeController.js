var Story = require('../models/storyModel');
var bodyParser = require('body-parser');

module.exports = function(app){

  // TODO: CHECK LOGIN TO POST  STORIES

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  app.post('/api/write-story', function(req, res){
    var reqBody = req.body;

    var newStory = new Story(reqBody);

    newStory.save(function(err, story){
      if (err) throw err;

      res.send(story);
      
    })
  })

}
