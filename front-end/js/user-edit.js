$(function(){

  var userId = localStorage.getItem("userId");
  console.log(userId);

  ajaxRequest("users/" + userId, "get", null, function(res) {
    var user = res.user;
    console.log(user.local.email)
    var data = {
      email: user.local.email,
      first_name: user.first_name,
      last_name: user.last_name,
      profile_pic: user.profile_pic,
      type_of_cyclist: user.type_of_cyclist, 
      about_me:  user.about_me,
      city: user.city
    }
    var underscoreTemplate = _.template($('#user-edit-form').html());
    var compiledTemplate = underscoreTemplate(data);
    $('#user-edit').append(compiledTemplate);
  })

  var formInfo = $('#user-edit-form').serialize();
  ajaxRequest("users/" + userId, "put", formInfo, function(res){
    console.log('form')
  })

});