var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

//import Endpoints
var setupSeedDataController = require('./controllers/setupController');
var readAPIController = require('./controllers/readController');
var writeAPIController = require('./controllers/writeController');



mongoose.connect(config.getDbConnectionString());

//   Endpoints   //
// setupSeedDataController(app);
readAPIController(app);
writeAPIController(app);


var port = process.env.PORT || 5000;
app.listen(port);
