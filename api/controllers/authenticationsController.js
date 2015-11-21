function signup(req, res, next) {
  var localStrategy = passport.authenticate('local-signup', function(err, user, info) {
    if (err) return res.status(500).json({ message: 'Something went wrong!' });
    if (info) return res.status(401).json({ message: info.message });
    if (!user) return res.status(401).json({ message: 'User already exists!' });

    // User has authenticated so issue token 
    var token = jwt.sign(user, secret, { expiresIn: 60*60*24 });

    // Send back the token to the front-end to store
    return res.status(200).json({ 
      success: true,
      message: "Thank you for authenticating",
      token: token,
      user: user
    });
  });

  return localStrategy(req, res, next);
};

module.exports = {
  signup: signup
}