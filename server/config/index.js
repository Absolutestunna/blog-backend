var configCreds = require('./config.json');
module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configCreds.uname + ':' + configCreds.pwd + '@ds141242.mlab.com:41242/nodetodosample'
    }
}