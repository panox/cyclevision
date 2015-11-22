var passport = require("passport");

function signup(req, res) {
  return passport.authenticate('local-signup', function(err, user){
    if (err) return res.status(500).json({ message: err });
    res.status(200).json({ user:user})
  })(req, res);
}


module.exports = {
  signup: signup
}