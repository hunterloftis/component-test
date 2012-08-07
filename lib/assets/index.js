var express = require('express');
var stylus = require('stylus');
var path = require('path');

module.exports = function(app, config) {

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

  // Static files
  var staticFiles = express['static'](path.join(__dirname, '../../public'));

  app.use(styles);             // css
  app.use(staticFiles);        // 'public'

};