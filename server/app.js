var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
mongoose.connect(config.getDbConnectionString());

var apis = require('./api/api');
var app = express();

require('./middleware/appMiddleware')(app);


//   Base Endpoint   //
app.use('/api', apis);


//Error-Handling middleware
require('./middleware/errorMiddleware')(app);

module.exports = app;