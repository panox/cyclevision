var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_pic: String,
  type_of_cyclist: String,
  about_me: String,
  city: String,
  routes: Array //[RouteSchema]
});

module.exports = mongoose.model("User", UserSchema);