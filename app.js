var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');


var something = mongoose.createConnection(config.dbConfigurationString());
console.log('something', something);



var app = express();
var port = process.env.PORT || 2000;
app.listen(port);
