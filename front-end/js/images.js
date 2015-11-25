$(function(){

  ajaxRequest("images", "get", null, function(res) {
    _(res.images).each(function(item) {
      console.log(item._id)
      imageUrl = configKeys.bucketUrl + item.image;
      item["image"] = imageUrl;
      var underscoreTemplate = _.template($('#all-images').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);
    })

    $('.materialboxed').materialbox();
  })
  

})