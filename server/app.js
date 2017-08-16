var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

require('./middleware/appMiddleware')(app);


var connection = mongoose.connect(config.getDbConnectionString(), {
    useMongoClient: true
});

connection
    .then(function(db) {
        console.log('CONNECTION SUCCESSFUL')
    })
    .catch(function(err) {
        console.log('Could not connect to mongodb on mlab. Please ensure you are using the correct uri and ports are configured appropriately')
    })

// seed default data
require('./util/seedData');

//   Base Endpoint   //
// app.use('/api', require('./api/api'));


//Error-Handling middleware
require('./middleware/errorMiddleware')(app);

module.exports = app