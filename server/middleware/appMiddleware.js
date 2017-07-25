var bodyParser   = require('body-parser');
var morgan       = require('morgan');

module.exports = function(app){
    app.use(morgan('dev')); // log every request to the console
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}
