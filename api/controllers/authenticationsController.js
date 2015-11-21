var passport = require("passport");

function signup(req, res) {
  var signupStrategy = passport.authenticate('local-signup', function(err, user){
    if (err) return res.status(500).json({ message: 'Signup did not finish' });
    if (!user) return res.status(401).json({ message: 'User already exists!' });
  });
  return signupStrategy(req, res);
}


module.exports = {
  signup: signup
}