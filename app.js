var express = require('express');
var path = require('path');
var balance = require('./lib/balance');

var config = require('./package.json').publicConfig;

var logger = require('./lib/logger');
var balance = require('./lib/balance');
var delivery = require('./lib/delivery');
var assets = require('./lib/assets');
var middleware = require('./lib/globalMiddleware');
var users = require('./lib/users');
var dashboard = require('./lib/dashboard');
var flash = require('./lib/flash');

balance(function() {
    var app = express();

    logger(app, config);
    delivery(app, config);
    assets(app, config);
    middleware(app, config);
    flash(app);
    users(app);
    dashboard(app);

    app.listen(config.http_port);
    console.log("Listening on", config.http_port);
  }
);