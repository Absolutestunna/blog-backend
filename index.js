var config = require('./server/config/config');
var app = require('./server/app');

app.listen(config.port, function(){
    console.log('App listening on http://localhost:' + config.port)
})