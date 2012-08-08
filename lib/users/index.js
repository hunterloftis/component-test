var path = require('path');

var UserModel = require('./userModel');

module.exports = function(app) {

  app.user = {
    loggedIn: function(req, res, next) {
      if (req.session.user) {
        return next();
      }
      req.session.redirect = req.url;
      return res.redirect('/404');
    },
    model: UserModel
  };

  app.get('/', function signIn(req, res) {
    if (req.session.user) {
      return res.redirect('/dashboard');
    }
    return res.render(path.join(__dirname, 'signin'));
  });

  app.post('/signin', function(req, res) {
    var creds = {
      email: req.body.email,
      password: req.body.password
    };
    UserModel.authenticate(creds, function(err, user) {
      if (user) {
        req.session.user = user;
        return res.redirect('/dashboard');
      }
      else {
        req.flash('Sorry, that username or password was not found.');
        return res.redirect('/');
      }
    });
  });

  app.all('/signout',
    function(req, res, next) {
      req.session.regenerate(next);
    },
    function(req, res, next) {
      req.flash("You have been signed out.");
      return res.redirect('/');
    }
  );
};