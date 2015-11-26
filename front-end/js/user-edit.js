function deleteUser(userId) {
  ajaxRequest("users/" + userId, "delete", null, function(res){
    console.log('delete success');
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

    var underscoreTemplate = _.template($('#user-edit-form-template').html());

    var compiledTemplate = underscoreTemplate(data);
    $('#user-edit-form').html(compiledTemplate);


    //update user
    $('#edit-user').on('submit', function() {
      event.preventDefault();
      var $cardTitle = ($('#current-user-card'))
      var data = {
        email: $('#'+'local.email').val(),
        first_name: $('#'+'first_name').val(),
        last_name: $('#'+'last_name').val(),
        profile_pic: $('#'+'profile_pic').val(),
        type_of_cyclist: $('#'+'type_of_cyclist').val(),
        about_me: $('#'+'about_me').val(),
        city: $('#'+'city').val()
      }
      $cardTitle.find('#-email').text(data.email);
      $cardTitle.find('#-cyclist-name').text(data.first_name + " " + data.last_name);
      $cardTitle.find('#-profile_pic').text(data.profile_pic);
      $cardTitle.find('#-about_me').text(data.about_me);
      $cardTitle.find('#-type_of_cyclist').text(data.type_of_cyclist);
      $cardTitle.find('#-city').text(data.city);

      ajaxRequest("users/" + userId, "PUT", data, function(){} )

    });


  });
}

$(function(){
  var userId = localStorage.getItem("userId");

  $("#user-edit-link").on("click", function(){
    populateUserData(localStorage.getItem("userId"))
  })


  $('#delete-user').on('click', function() {
    event.preventDefault();
    deleteUser(userId);
  });
  

});