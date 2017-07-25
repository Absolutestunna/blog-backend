var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

require('./middleware/appMiddleware')(app)



var connection = mongoose.connect(config.getDbConnectionString(), function(err){
  console.log('Could not connect to mongodb on mlab. Please ensure you are using the correct uri and ports are configured appropriately')
});

//   Endpoints   //
app.use('/api', require('./api/api'))

module.exports = app;
