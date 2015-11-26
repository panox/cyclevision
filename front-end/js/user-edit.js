function deleteUser(userId) {
  ajaxRequest("users/" + userId, "delete", null, function(res){
    console.log('delete success');
  });
}

function updateUser(userId, formInfo) {
  ajaxRequest("users/" + userId, "put", formInfo, function(res){
    console.log("after request")
    populateUserData(userId);
    console.log('update success');
  });
}

function populateUserData(userId) {
  ajaxRequest("users/" + userId, "get", null, function(res) {
    console.log("res", res)
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

    var underscoreTemplate = _.template($('#user-edit-form-template').html());

    var compiledTemplate = underscoreTemplate(data);

    console.log(compiledTemplate)
    $('#user-edit-form').prepend(compiledTemplate);

  });
}

$(function(){
  var userId = localStorage.getItem("userId");

  $("#user-edit-link").on("click", function(){
    console.log("ho")
    populateUserData(localStorage.getItem("userId"))
  })
  

  $('#user-edit').on('submit', 'form', function() {
    event.preventDefault();
    updateUser(userId, $(this).serialize());
  });

  $('#delete-user').on('click', function() {
    event.preventDefault();
    deleteUser(userId);
  });
  

});