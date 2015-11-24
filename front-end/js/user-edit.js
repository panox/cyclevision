$(function(){

  var userId = localStorage.getItem("userId");
  console.log(userId);

  ajaxRequest("users/" + userId, "get", null, function(res) {
    var user = res.user;
    console.log(user.local.email)
    var data = {
      email: user.local.email
    }
    var underscoreTemplate = _.template($('#user-edit-form').html());
    var compiledTemplate = underscoreTemplate(data);
    $('#user-edit').append(compiledTemplate);
  })

});