var users = {
  'hunter@hunterloftis.com': 'password',
  'test@dummy.com': 'bacon'
};

module.exports = {
  authenticate: function(creds, done) {
    if (!(creds.email && creds.password)) {
      return done(new Error('Email and pass required'));
    }
    var password = users[creds.email];
    if (!password) {
      return done(new Error('No such user'));
    }
    if (password === creds.password) {
      return done(undefined, {
        email: creds.email
      });
    }
    return done(new Error('Invalid password'));
  }
};