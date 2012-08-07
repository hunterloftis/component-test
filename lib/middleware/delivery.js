var express = require('express');
var connectTimeout = require('connect-timeout');

module.exports = function(app, config) {

  // Timeouts
  var timeouts = connectTimeout({
    throwError: true,
    time: config.request_timeout
  });

  app.use(timeouts);                 // request timeouts
  app.use(express.compress());       // gzip
};