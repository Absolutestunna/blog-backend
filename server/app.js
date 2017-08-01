var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

require('./middleware/appMiddleware')(app)



var connection = mongoose.connect(config.getDbConnectionString(), function(err) {
    console.log('Could not connect to mongodb on mlab. Please ensure you are using the correct uri and ports are configured appropriately')
});

//   Endpoints   //
app.use('/api', require('./api/api'));


//Error-Handling middleware

app.use(function(err, req, res, next) {
    console.error(err);
    /* configure specific errors */

    //jwt error
    if (err.name === "UnauthorizedError") {
        res.status(401).send('Invalid token');
        return;
    }


    //Default error message
    res.status(500).send("Error")
})

module.exports = app;