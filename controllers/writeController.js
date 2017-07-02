var Story = require('../models/storyModel');
var bodyParser = require('body-parser');

module.exports = function(app, passport){

  // TODO: CHECK LOGIN TO POST  STORIES

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  app.post('/api/write-story', isLoggedIn, function(req, res){
    var reqBody = req.body;

    var newStory = new Story(reqBody);

    newStory.save(function(err, story){
      if (err) throw err;

      res.send(story);

    })
  })

}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    // res.redirect('/');
}
