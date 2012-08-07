var should = require('should');

var UserModel = require('../userModel');

describe('User model', function() {
  describe('authenticate', function() {
    it('should reject a request without an email', function(done) {
      UserModel.authenticate({ pass: 'bacon' }, onAuth);
      function onAuth(err, user) {
        should.exist(err);
        should.not.exist(user);
        err.message.should.equal('Email and pass required');
        return done();
      }
    });
    it('should reject a request without a password', function(done) {
      UserModel.authenticate({ email: 'test@dummy.com' }, onAuth);
      function onAuth(err, user) {
        should.exist(err);
        should.not.exist(user);
        err.message.should.equal('Email and pass required');
        return done();
      }
    });
    it('should reject a request with the wrong password', function(done) {
      UserModel.authenticate({ email: 'test@dummy.com', pass: 'wrong' }, onAuth);
      function onAuth(err, user) {
        should.exist(err);
        should.not.exist(user);
        err.message.should.equal('Invalid password');
        return done();
      }
    });
    it('should reject a request with a non-registered email', function(done) {
      UserModel.authenticate({ email: 'doesnt@exist.com', pass: 'bacon' }, onAuth);
      function onAuth(err, user) {
        should.exist(err);
        should.not.exist(user);
        err.message.should.equal('No such user');
        return done();
      }
    });
    it('should accept a valid email/password', function(done) {
      UserModel.authenticate({ email: 'test@dummy.com', pass: 'bacon' }, onAuth);
      function onAuth(err, user) {
        should.not.exist(err);
        should.exist(user);
        user.should.eql({ email: 'test@dummy.com' });
        return done();
      }
    });
  });
});