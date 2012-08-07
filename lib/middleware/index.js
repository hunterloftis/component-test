var logger = require('./logger');
var delivery = require('./delivery');
var assets = require('./assets');
var bodies = require('./bodies');

module.exports = function(app, config) {
  logger(app, config);
  delivery(app, config);
  assets(app, config);
  bodies(app, config);
};