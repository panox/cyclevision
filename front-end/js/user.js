$(function() {

  
  var userId = localStorage.getItem("userId");
  var url = "http://localhost:3000/api/users/" + userId

  $.get(url)
  .done(function(res){
    console.log(res)
    _(res.user.local.email)
  })
  .fail(function(res){
    console.log("Error finding user")
  })

  //   console.log(res.images)
  //   _(res.images).each(function(item) {
  //     var underscoreTemplate = _.template($('#images-template').html());
  //     var compiledTemplate = underscoreTemplate(item);
  //     $('#images').append(compiledTemplate);
  //   })

  // })

});