var mongoose = require("mongoose");
//require user and routes schema

var ImageSchema = new mongoose.Schema({
  user: String,
  image: String,
  title: String,
  location: String, 
  routes: Array,
})

module.exports = mongoose.model("Image", ImageSchema);