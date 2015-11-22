var passport = require("passport");
var User     = require('../models/user');

function signup(req, res) {
  return passport.authenticate('local-signup', function(err, user, message){
    if (err) return res.status(500).json({ message: "could not create user" });
    res.status(200).json({ message:message})
  })(req, res);
}

function signup(req, res, next) {
  var localStrategy = passport.authenticate('local-signup', function(err, user) {
    if (err) return res.status(500).json({ message: 'Something went wrong!' });
    if (!user) return res.status(401).json({ message: 'User already exists!' });

    return res.status(200).json({ 
      success: true,
      message: "Thank you for authenticating",
      user: user
    });
  });

  return localStrategy(req, res, next);
};


module.exports = {
  signup: signup
}