function deleteUser(userId) {
  ajaxRequest("users/" + userId, "delete", null, function(res){
    console.log('delete success');
  });
}

function updateUser(userId, formInfo) {
  ajaxRequest("users/" + userId, "put", formInfo, function(res){
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
    $('#user-edit-form').prepend(compiledTemplate);

    $('.modal-content').find('input#submit').on('click', function() {
      event.preventDefault();
      console.log(userId)
      var $cardTitle = ($('#current-user-card'))
      console.log($cardTitle)
      var data = {
        email: $('#'+'local.email').val(),
        first_name: $('#'+'first_name').val(),
        last_name: $('#'+'last_name').val(),
        profile_pic: $('#'+'profile_pic').val(),
        type_of_cyclist: $('#'+'type_of_cyclist').val(),
        city: $('#'+'city').val()
      }
      $cardTitle.find('#local.email').text(data.email);
      $cardTitle.find('#first_name').text(data.first_name);
      $cardTitle.find('#last_name').text(data.last_name);
      $cardTitle.find('#profile_pic').text(data.profile_pic);
      $cardTitle.find('#type_of_cyclist').text(data.type_of_cyclist);
      $cardTitle.find('#city').text(data.city);

      ajaxRequest("users/" + userId, "PUT", data, function(){} )
      $('.lean-overlay').remove()
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