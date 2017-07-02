var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

// required for passport
app.use(session({ secret: 'scotchbonetsarethebest' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./config/passport')(passport); // pass passport for configuration


//import Endpoints
var setupSeedDataController = require('./controllers/setupController');
var readAPIController = require('./controllers/readController');
var writeAPIController = require('./controllers/writeController');
var authAPIController = require('./controllers/authController');

//  require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


var connection = mongoose.connect(config.getDbConnectionString());

//   Endpoints   //
// setupSeedDataController(app);
readAPIController(app);
writeAPIController(app, passport);
authAPIController(app, passport);


var port = process.env.PORT || 5000;
app.listen(port);
