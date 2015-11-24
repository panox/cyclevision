function updateUser(userId, formInfo) {
  console.log(userId, formInfo);
  ajaxRequest("users/" + userId, "put", formInfo, function(res){
    console.log(res);
  });
}

function populateUserData(userId) {
  ajaxRequest("users/" + userId, "get", null, function(res) {
    var user = res.user;

    var data = {
      email: user.local.email,
      first_name: user.first_name,
      last_name: user.last_name,
      profile_pic: user.profile_pic,
      type_of_cyclist: user.type_of_cyclist, 
      about_me:  user.about_me,
      city: user.city
    };

    /*
    for(var name in data) {
      $('[name=' + name + ']').val(data[name]);
    }
    */

    var underscoreTemplate = _.template($('#user-edit-form').html());
    var compiledTemplate = underscoreTemplate(data);
    $('#user-edit').append(compiledTemplate);
  });
}

$(function(){
  console.log("USER EDIT LOADED");
  var userId = localStorage.getItem("userId");

  populateUserData(userId);

  $('#user-edit').on('submit', 'form', function() {
    event.preventDefault();
    updateUser(userId, $(this).serialize());
  });
  

});