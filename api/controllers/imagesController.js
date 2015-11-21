var Image = require('../models/image');

function imagesIndex(req, res) {
  Image.find(function(err, images){
    if err return res.status(404).json({ message: "no images found" });
    res.status(200).json({ users: users });
  });
}