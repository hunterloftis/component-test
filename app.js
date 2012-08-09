var express = require('express');
var path = require('path');
var balance = require('./lib/balance');

// Require our components

var balance = require('./lib/balance');
var middleware = require('./lib/middleware');
var users = require('./lib/users');
var dashboard = require('./lib/dashboard');
var flash = require('./lib/flash');

// Expose the app

module.exports = main;

// Decorate express with our components
// Marry the app to its running configuration

function main(config) {
  var app = express();

  flash(app);
  middleware(app, config);
  users(app);
  dashboard(app);

  return app;
}

// Start listening if the app has been started directly

if (module === require.main) {
  balance(function() {
    var config = require('./package.json').publicConfig;
    var app = main(config);
    app.listen(config.http_port);
    console.log("Listening on", config.http_port);
  });
}