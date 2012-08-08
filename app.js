var express = require('express');
var path = require('path');
var balance = require('./lib/balance');

var balance = require('./lib/balance');
var middleware = require('./lib/middleware');
var users = require('./lib/users');
var dashboard = require('./lib/dashboard');
var flash = require('./lib/flash');

// Decorate express to build our app
module.exports = function main(config) {
  var app = express();

  middleware(app, config);
  flash(app);
  users(app);
  dashboard(app);

  return app;
};

// Start listening if the app has been started directly
if (require.main === module) {
  balance(function() {
    var config = require('./package.json').publicConfig;
    var app = main(config);
    app.listen(config.http_port);
    console.log("Listening on", config.http_port);
  });
}