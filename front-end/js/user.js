$(function() {

  
  var userId = localStorage.getItem("userId");
  var url = "http://localhost:3000/api/users/" + userId;

  $.get(url)
  .done(function(res){
    console.log(res.user.local.email)
    var userEmail = res.user.local.email
    var underscoreTemplate = _.template($('#current-user-template').html());
    var compiledTemplate = underscoreTemplate(userEmail);
    $('#current-user-name').append(compiledTemplate);
  })
  .fail(function(res){
    console.log("Error finding user")
  })


});