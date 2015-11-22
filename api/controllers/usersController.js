var User   = require('../models/user');

function usersIndex(req, res) {
  User.find(function(err, users){
    if (err) return res.status(404).json({message: 'No users found'});
    res.status(200).json({ users: users });
  });
}

function userShow(req, res){
  User.findById(req.params.id, function(err, user){
    if (err) return res.status(404).json({message: 'No user found'});
    res.status(200).json({ user: user });
  });
}

//function userUpdate goes here

function userDelete(req, res){
  User.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Could not delete user'});
   res.status(200).json({message: 'User has been successfully deleted'});
  });
}

module.exports = {
  usersIndex:  usersIndex,
  userShow: userShow,
  userDelete: userDelete
}
