var users = {
  'hunter@hunterloftis.com': 'password',
  'test@dummy.com': 'bacon'
};

module.exports = {
  authenticate: function(creds, done) {
    if (!creds.email && creds.pass) {
      return done(new Error('Email and pass required'));
    }
    var pass = users[creds.email];
    if (!pass) {
      return done(new Error('No such user'));
    }
    if (pass === creds.pass) {
      return done(undefined, {
        email: creds.email
      });
    }
    return done('Invalid password');
  }
}