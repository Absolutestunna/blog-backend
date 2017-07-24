var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

var passport = require('passport');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
// var session      = require('express-session');
// var cookieSession = require('cookie-session');


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

// required for passport
// app.use(cookieSession({
//   name: 'scotchbonetsarethebest',
//   keys: ['key1', 'key2'],
//   // Cookie Options 
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours 
// }))
// app.use(session({ 
//   secret: 'scotchbonetsarethebest',
//    resave: true,
//    saveUninitialized: true
// })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./config/passport')(passport); // pass passport for configuration


//import Endpoints
var setupSeedDataController = require('./controllers/setupController');
var readAPIController = require('./controllers/readController');
var writeAPIController = require('./controllers/writeController');
var authAPIController = require('./controllers/authController');

//  require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


var connection = mongoose.connect(config.getDbConnectionString(), function(err){
  console.log('Could not connect to mongodb on mlab. Please ensure you are using the correct uri and ports are configured appropriately')
});

//   Endpoints   //
// setupSeedDataController(app);
readAPIController(app);
writeAPIController(app, passport);
authAPIController(app, passport);


var port = process.env.PORT || 8080;
app.listen(port);
