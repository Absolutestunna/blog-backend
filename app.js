var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

//import Endpoints
var setupSeedDataController = require('./controllers/setupController');
var apiController = require('./controllers/reading/readController');


var connection = mongoose.connect(config.getDbConnectionString());

// var db = mongoose.connection.db;
// console.log('db', db);

//check for populated collection

// var storiesCollection = mongoose.connection.db.collection('stories', function(err, stories){
//   console.log('stories', stories);
//   stories.find({}).toArray(function(err, data){
//             console.log('data', data); // it will print your collection data
//         })
// });
// .db.listCollections({name: 'stories'});
// console.log('storiesCollection', storiesCollection);
    // .next(function(err, collinfo) {
    //   console.log('collinfo', collinfo);
    //     // if (collinfo) {
    //     //     // The collection exists
    //     // }
    // });


// connection.db.collectionNames(function(err, collection){
//   console.log('collection', collection);
// });

//   Endpoints   //
setupSeedDataController(app);
apiController(app);


// var port = process.env.PORT || 2000;
var port = 5000;
app.listen(port);
