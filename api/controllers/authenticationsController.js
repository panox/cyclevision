var passport = require("passport");
var User     = require('../models/user');
var secret   = require("../config/config").secret
var jwt      = require('jsonwebtoken')

function signup(req, res, next) {
  var localStrategy = passport.authenticate('local-signup', function(err, user, message) {
    if (err) return res.status(500).json({ message });
    if (!user) return res.status(401).json({ message });

    var token = jwt.sign(user, secret { expiresIn: 60*60*24 });

    return res.status(200).json({ 
      success: true,
      message: "Thank you for authenticating",
      user: user,
      token: token
    });
  });

  return localStrategy(req, res, next);

};

function login(req, res, next) {
  var loginStrategy = passport.authenticate('local-login', function(err, user) {
    if(err || !user) res.status(401).json({ message: 'An error occured' });
    var token = jwt.sign(user, secret { expiresIn 60*60*24});
    return res.status(200).json({ token: token, user: user });
  });
  return loginStrategy(req, res);
};


module.exports = {
  signup: signup,
  login: login
}