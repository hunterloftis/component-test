var express = require('express');
var RedisStore = require('connect-redis')(express);

module.exports = function(app, config) {

  app.set('view engine', 'jade');

  // Sessions
  var sessions = express.session({
    store: new RedisStore()
  });

  // Cookies
  var cookies = express.cookieParser(config.session_secret);

  app.use(cookies);                                       // req.cookies
  app.use(sessions);                                      // req.session
  app.use(express.bodyParser());                          // req.body & req.files
  app.use(express.methodOverride());                      // '_method' property in body (POST -> DELETE / PUT)
  app.use(app.router);                                    // our route responses
};