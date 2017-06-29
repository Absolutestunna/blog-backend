var Stories = require('../models/storyModel');

module.exports = function(app){

  app.get('/api/setupStories', function(req, res){

    var starterStories = [
      {
        author: "Joshua Abu",
        title: "Living legends",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        topic: "life",
        createdAt: new Date('03.12.2015')

      },
      {
        author: "Joseph Abu",
        title: "Living legends 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        topic: "sport",
        createdAt: new Date('09.04.2016')

      },
      {
        author: "Jonathan Abu",
        title: "Living legends 3",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        topic: "music",
        createdAt: new Date('01.02.2012')
      }
    ];

    Stories.create(starterStories, function(err, stories){
      if (err) throw err
      res.send(stories)
      // res.send('SEED DATA INSTALLED!!')
    });

  });
}
