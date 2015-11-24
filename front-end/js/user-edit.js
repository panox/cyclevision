$(function(){

  var userId = localStorage.getItem("userId");
  console.log(userId);

  ajaxRequest("users/" + userId, "get", null, function(res) {
    console.log(res)
    var underscoreTemplate = _.template($('#user-edit-form').html());
    var compiledTemplate = underscoreTemplate();
    $('#user-edit').append(compiledTemplate);
  })

});