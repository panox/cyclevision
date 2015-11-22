var Image = require('../models/image');
var User   = require('../models/user');

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
  });

  user.images.push(image);

  user.save(function(err){
    if (err) return res.status(500).json({message: "problem adding image to this user"})
    res.status(201).json({image: image});
  });
  
}

function imageShow(req, res) {
  var id = req.params.id;

  Image.findById({_id: id}, function(err, image){
    if (err) return res.status(500).json({ message: "Something went wrong!" });
    if (!image) return res.status(404).json({message: "Sorry, we can't locate that image"});

    res.status(200).json({image: image});
    });
  }

function imageUpdate(req, res) {
  var id = req.params.id;

  Image.findById({_id: id}, function(err, image){
    if(err) return res.status(500).json({ message: "cannot update" });
    if(!image) return res.status(404).json({ message: "Sorry we cannot locate that image"});

    if (req.body.title) image.title = req.body.title;
    if (req.body.image) image.image = req.body.image;

  image.save(function(err) {
    if (err) return res.status(500).json({ message: "There is an error updating your image"})

    res.status(201).json({ message: "Image was successfully updated", image: image});
    })
  });
}

function imageDelete(req, res) {
  var id = req.params.id;
  Image.remove({_id: id}, function(err) {
    if (err) return res.status(500).json({message: 'There is a problem deleting this image'})

    res.status(200).json({message: 'Image has been successfully deleted'});
  });
}

module.exports = {
  imagesIndex: imagesIndex,
  imageCreate: imageCreate,
  imageShow  : imageShow,
  imageUpdate: imageUpdate,
  imageDelete: imageDelete
}