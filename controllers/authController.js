
module.exports = function(app, passport){

  // process the signup form
  app.post('/api/signup', function(req, res, next) {

    passport.authenticate('local-signup', function(err, user, info) {

      if (err) {
        return next(err); // will generate a 500 error
      }

      // Generate a JSON response reflecting authentication status
      if (! user) {
        return res.send(401, { success : false, message : info.message });
      }
      req.login(user, function(err){
        if(err){
          return next(err);
        }
        return res.send({ success : true, message : 'New User created' });
      });
    })(req, res, next);
  });

  // process the login form
  app.post('/api/signin', function(req, res, next) {

    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }

      // Generate a JSON response reflecting authentication status
      if (! user) {
        return res.send(401, { success : false, message : info.message });
      }
      req.login(user, function(err){
        if(err){
          return next(err);
        }
        return res.send({ success : true, message : 'Authenticated' });
      });
    })(req, res, next);
  });


}
