var express = require('express');
var connectTimeout = require('connect-timeout');
var RedisStore = require('connect-redis')(express);
var path = require('path');
var stylus = require('stylus');

module.exports = function(app, config) {

  app.set('view engine', 'jade');

  // Timeouts
  var timeouts = connectTimeout({
    throwError: true,
    time: config.request_timeout
  });

  // Sessions
  var sessions = express.session({
    store: new RedisStore()
  });

  // Stylus
  function compile(str, path) {
    return stylus(str)
      .set('compress', config.stylus_compress)
      .set('filename', path);
  }
  var styles = stylus.middleware({
    src: path.join(__dirname, '..'),
    dest: path.join(__dirname, '../../public'),
    debug: config.stylus_debug,
    compile: compile,
    force: config.stylus_force
  });

  // Cookies
  var cookies = express.cookieParser(config.session_secret);

  // Static files
  var staticFiles = express['static'](path.join(__dirname, '../../public'));


  app.use(timeouts);                                      // request timeouts
  app.use(express.compress());                            // gzip
  app.use(styles);                                        // css
  app.use(staticFiles);                                   // 'public'
  app.use(cookies);                                       // req.cookies
  app.use(sessions);                                      // req.session
  app.use(express.bodyParser());                          // req.body & req.files
  app.use(express.methodOverride());                      // '_method' property in body (POST -> DELETE / PUT)
};