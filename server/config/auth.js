// expose our config directly to our application using module.exports

var config = require('./config');
module.exports = {

    'facebookAuth' : {
        'clientID'      : config.facebookAPP_ID, // your App ID
        'clientSecret'  : config.facebookClientSecret, // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },
    'googleAuth' : {
        'clientID'      : config.googleClientID,
        'clientSecret'  : config.googleClientSecret,
        'callbackURL'   : 'http://127.0.0.1:8080/auth/google/callback'
    },
    'twitterAuth' : {
        'clientID'      : config.twitterAPP_ID,
        'clientSecret'  : config.twitterClientSecret,
        'callbackURL'   : 'http://127.0.0.1:8080/auth/twitter/callback'
    }

};
