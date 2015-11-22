var passport = require("passport");
var User     = require('../models/user');

function signup(req, res, next) {
  var localStrategy = passport.authenticate('local-signup', function(err, user, message) {
    if (err) return res.status(500).json({ message });
    if (!user) return res.status(401).json({ message });

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