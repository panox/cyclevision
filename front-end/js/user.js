$(function() {

  
  var userId = localStorage.getItem("userId");
  var url = "http://localhost:3000/api/users/" + userId;

  $.get(url)
  .done(function(res){
    console.log(res.user._id)
    var item = _(res.user._id)
    console.log("Under " + item)
    var underscoreTemplate = _.template($('#user-template').html());

    // var compiledTemplate = underscoreTemplate(item);
    // console.log(compiledTemplate)
    // $('#current-user-name').append(compiledTemplate);
  })
  .fail(function(res){
    console.log("Error finding user")
  })


});