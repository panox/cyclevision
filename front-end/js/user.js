$(function() {

  
  var userId = localStorage.getItem("userId");
  var url = "http://localhost:3000/api/users/" + userId;

  $.get(url)
  .done(function(res){
    var user = res.user;
    var data = {
      email: user.local.email
    }

    var template = _.template($( '#user-template' ).html());
    var underscoreTemplate = _.template($('#user-template').html());
    var compiledTemplate = underscoreTemplate(data);
    $('#current-user-name').append(compiledTemplate);

  })
  .fail(function(res){
    console.log("Error finding user")
  })


});