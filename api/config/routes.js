var express  = require('express');
var router   = express.Router();
var passport = require("passport");

var usersController = require('../controllers/usersController');
var imagesController = require('../controllers/imagesController');

router.route('/users')
  .get(usersController.usersIndex)
  .post(usersController.userCreate)


router.route('/users/:id')
  .get(usersController.userShow)
  .put(usersController.userUpdate)
  .delete(usersController.userDelete);

module.exports = router