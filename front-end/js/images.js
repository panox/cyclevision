$(function(){

  ajaxRequest("images", "get", null, function(res) {
    _(res.images).each(function(item) {
      console.log(item._id)
      imageUrl = configKeys.bucketUrl + item.image;
      item["image"] = imageUrl;
      var underscoreTemplate = _.template($('#all-images').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);
    


      $('#'+ item._id).on('click', function(){
        event.preventDefault();
        data = item.user;
        console.log(data);
        ajaxRequest("images", "get", data, function(res){
          window.localStorage.setItem("otherUser", data._id);
          return window.location.assign("/pages/users.html")
        })
      })


  })

  $('.materialboxed').materialbox();



  });
  


});