
module.exports = function(app, passport){


// =====================================
// AUTHENTICATION
// =====================================



      // =====================================
      // LOCAL ROUTES =======================
      // =====================================
      // send to google to do the authentication
      // profile gets us their basic information including their name
      // email gets their emails

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

      // =====================================
      // GOOGLE ROUTES =======================
      // =====================================
      // send to google to do the authentication
      // profile gets us their basic information including their name
      // email gets their emails

      app.get('/auth/google', passport.authenticate('google', { session: false, scope : ['profile', 'email'] }));

      app.get('/auth/google/callback', function(req, res, next){
        passport.authenticate('google', function(err, user, info){
          // console.log('info', info)
          if (err) {
            return next(err); // will generate a 500 error
          }

          // Generate a JSON response reflecting authentication status
          if (! user) {
            return res.send(401, { success : false, message : info.message });
          }

          req.login(user, { session: false }, function(err){
            if(err){
              return next(err);
            }
              return res.send({ success : true, message : 'Authenticated' });
          });
        })(req, res, next);;
      });

      // =====================================
      // FACEBOOK ROUTES =======================
      // =====================================
      // send to facebook to do the authentication
      // profile gets us their basic information including their name
      // email gets their emails

      app.get('/auth/facebook',
        passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));

      app.get('/auth/facebook/callback', function(req, res, next){
        passport.authenticate('facebook', { session: false }, function(err, user, info){
          // console.log('req user', req)
        //   console.log('info', info)
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
              return res.send({ success : true, message : 'Facebook Authenticated',userInfo: { email: user.facebook.email, id: user.id} });
          }); 
          
        })(req, res, next)
      })


      // =====================================
      // TWITTER ROUTES =======================
      // =====================================
      // send to twitter to do the authentication
      // profile gets us their basic information including their name
      // email gets their emails

      app.get('/auth/twitter',
        passport.authenticate('twitter'));

      app.get('/auth/twitter/callback', function(req, res, next){
        passport.authenticate('twitter', function(err, user, info){

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
              return res.send({ success : true, message : 'Twitter Authenticated' });
          }); 
          
        })(req, res, next)
      })

      




// =================================================================================
// AUTHORIZATION (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =================================================================================

  app.get('/connect/local', function(req, res) {
      // res.render('connect-local.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/connect/local', function(req, res, next){
    passport.authorize('local-signup', function(err, user, info) {
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
            return res.send({ success : true, message : 'Local Account connected' });
          });
        })(req, res, next);
  });


  // send to google to do the authentication
  app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

  // the callback after google has authorized the user
  app.get('/connect/google/callback', function(req, res, next){
    passport.authorize('google', function(err, user, info){
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
          return res.send({ success : true, message : 'Google Account connected' });
      }); 
      
    })(req, res, next)
  })

  // send to facebook to do the authentication
  app.get('/connect/facebook', passport.authorize('facebook'));

  // the callback after google has authorized the user
  app.get('/connect/facebook/callback', function(req, res, next){
    passport.authorize('facebook', function(err, user, info){
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
          return res.send({ success : true, message : 'Facebook Account connected' });
      }); 
      
    })(req, res, next)
  })



}
