module.exports = function(app, config) {

  app.use(function log(req, res, next) {
    if (config.log_requests) {
      console.log(req.method + ' ' + req.url);
    }
    return next();
  });
};