
module.exports = function(app, passport){
  
  // process the signup form
  app.post('/api/signup', function(req, res, next) {
    // console.log('req', req);
    // console.log('res', res);
    passport.authenticate('local-signup', function(err, user, info) {
      console.log('user', user);
      if (err) {
        return next(err); // will generate a 500 error
      }
      console.log('info', info);

      // Generate a JSON response reflecting authentication status
      if (! user) {
        return res.send(401,{ success : false, message : 'authentication failed' });
      }
      req.login(user, function(err){
        if(err){
          return next(err);
        }
        return res.send({ success : true, message : 'authentication succeeded' });
      });
    })(req, res, next);
  });
}
