var express = require('express');
var path = require('path');
var balance = require('./lib/balance');

var config = require('./package.json').publicConfig;

var balance = require('./lib/balance');
var middleware = require('./lib/middleware');
var users = require('./lib/users');
var dashboard = require('./lib/dashboard');
var flash = require('./lib/flash');

balance(function() {
    var app = express();

    middleware(app, config);
    flash(app);
    users(app);
    dashboard(app);

    app.listen(config.http_port);
    console.log("Listening on", config.http_port);
  }
);