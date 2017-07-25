var _ = require('lodash');

var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  // 10 days in minutes
  expireTime: 24 * 60 * 10,
  secrets: {
    jwt: process.env.JWT || 'gumball'
  }
};

var envConfig;
// fallback to an empty object if file returns an error
try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};
} catch(e) {
  envConfig = {};
}

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object

module.exports = _.merge(config, envConfig);
