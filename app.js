var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');


mongoose.createConnection(config.dbConfigurationString());

var app = express();
var port = process.env.PORT || 2000;
app.listen(port);
