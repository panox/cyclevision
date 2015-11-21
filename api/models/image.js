var mongoose = require("mongoose");
//require user and routes schema

var ImageSchema = new mongoose.Schema({
  user: ,
  image: String,
  title: String,
  location: String, 
  routes: //this is a reference to the routes schema
})

module.exports = mongoose.model("Image", ImageSchema);