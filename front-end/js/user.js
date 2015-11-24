function setHeaders(xhr) {
  var token = localStorage.getItem('token');
  if(token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
}

function ajaxRequest(url, method, data, callback) {
  $.ajax({
    url: url,
    method: method,
    data: data,
    beforeSend: setHeaders
  }).done(function(res) {
    return callback(res);
  }).fail(function(err) {
    console.error(err);
  });
}

var apiURL = "http://localhost:3000/api/";

$(function() {

  
  var userId = localStorage.getItem("userId");
  var url = apiURL + "users/" + userId;

  ajaxRequest(url, "GET", null, function(res){
    var user = res.user;
    var data = {
      email: user.local.email,
      first_name: user.first_name,
      last_name: user.last_name,
      profile_pic: user.profile_pic,
      type_of_cyclist: user.type_of_cyclist,
      about_me: user.about_me
    }

    var template = _.template($( '#user-template' ).html());
    var underscoreTemplate = _.template($('#user-template').html());
    var compiledTemplate = underscoreTemplate(data);
    $('#current-user-name').append(compiledTemplate);

    console.log(res.user.images[0]);
    //get current user images
    _(res.user.images).each(function(item) {
      var underscoreTemplate = _.template($('#user-images').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);
      $('#images').on('click', "#delete-image", function(){
        event.preventDefault();
        var $image = $(event.target).parent('.image');
        console.log("click");
        console.log($image);
        ajaxRequest(apiURL + "images/" + item._id, "DELETE", null, function() {
          $image.remove();
        });
      })

      $('#images').on('click', '#update-image', function(){
        event.preventDefault();
        
      })
    })

  });

});