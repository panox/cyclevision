var Image = require('../models/image');

function imagesIndex(req, res) {
  Image.find(function(err, images){
    if (err) return res.status(404).json({ message: "no images found" });
    res.status(200).json({ images: images });
  });
}

function imageCreate(req, res){
  var image = new Image(req.body);

  image.save(function(err){
    if (err) return res.status(500).json({message: "problem saving image"})

    res.status(201).json({image: image});
  });
}

function imageShow(req, res) {

}

function imageUpdate(req, res) {

}

function imageDelete(req, res) {

}

module.exports = {
  imagesIndex: imagesIndex
}