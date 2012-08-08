var should = require('should');
var fetch = require('fetch');
var path = require('path');

var config = require('../../../package.json').publicConfig;

describe('User controller', function() {
  describe('landing page', function() {
    var app = startApp();

    //before(loginUser(app));

    it('should login', function(done) {
      var fetchUrl = fetch.fetchUrl;
      var jar = new fetch.CookieJar();
      var options = {
        disableRedirects: true,
        method: 'POST',
        cookieJar: jar
      };
      fetchUrl('http://localhost:3000/signin', options, onLogin);
      function onLogin(err, meta, body) {
        meta.status.should.equal(302);
        meta.responseHeaders.location.should.equal('//localhost:3000/dashboard');
        return done();
      }
    });

/*
    it('should redirect to dashboard if user is logged in', function(done) {
      request(app)
        .get('/')
        .end(onResponse);
      function onResponse(err, res) {
        res.should.have.status(302);
        res.headers.location.should.equal('//127.0.0.1:3000/dashboard');
        return done();
      }
    });
*/
    it('should render signin if user is not logged in', function(done) {
      return done();
    });
  });
  describe('signin', function() {
    describe('good credentials', function() {
      it('should create a user session', function(done) {
        return done();
      });
      it('should redirect to /', function(done) {
        return done();
      });
    });
    describe('bad credentials', function() {
      it('should flash an error', function(done) {
        return done();
      });
      it('should redirect to /', function(done) {
        return done();
      });
    });
  });
  describe('signout', function() {
    it('should destroy the user session', function(done) {
      return done();
    });
    it('should flash a signout message', function(done) {
      return done();
    });
  });
});

function startApp() {
  var app = require('../../../app')(config);
  var server = app.listen(3000);
  return server;
}

function loginUser(server) {
  return function(done) {
    request(server)
      .post('/signin')
      .send({ email: 'test@dummy.com', password: 'bacon' })
      .end(onResponse);
    function onResponse(err, res) {
      res.should.have.status(302);
      res.headers.location.should.equal('//127.0.0.1:3000/dashboard');
      return done();
    }
  };
}