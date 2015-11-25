// function setHeaders(xhr) {
//   var token = localStorage.getItem('token');
//   if(token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
// }

// function ajaxRequest(url, method, data, callback) {
//   $.ajax({
//     url: url,
//     method: method,
//     data: data,
//     beforeSend: setHeaders
//   }).done(function(res) {
//     return callback(res);
//   }).fail(function(err) {
//     console.log(err);
//   });
// }

//var apiURL = "http://localhost:3000/api/";

$(function() {

  
  var userId = localStorage.getItem("userId");
  
  var url = "users/" + userId;

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

    //get current user images
    _(res.user.images).each(function(item) {
      console.log(item)
      item.image = configKeys.bucketUrl + item.image;
      console.log(item.image + "  2")
      var underscoreTemplate = _.template($('#user-images').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);
      //delete images
      $('#images').on('click', "#delete-image", function(){
        event.preventDefault();
        var $image = $(event.target).parent('.image');
        ajaxRequest("images/" + item._id, "DELETE", null, function() {
          $image.remove();
        });
      })
      //Update images
      $('#images').on('click', '#update-image', function(){
        event.preventDefault();
        var data = {
          title: $('#update-title').val(),
          image: $('#update-url').val(),
          location: $('#update-location').val(),
          user: userId
        }
        ajaxRequest("images/" + item._id, "PUT", data, function(){} )

      })
    })

  });
  //Create new image
  $('#new-image').on('submit', newImage);

  function newImage(){
    event.preventDefault();
    var method = $(this).attr("method");
    var url    = "images";
    // var data   = {
    //   title: $('#image-title').val(),
    //   image: $('#image-url').val(),
    //   location: $('#image-location').val(),
    //   user: userId
    // }

    var data = new FormData($(this)[0]);
    data.append("user", userId);
    ajaxRequest(url, method, data, function() {
      var underscoreTemplate = _.template($('#user-images').html());
      var compiledTemplate = underscoreTemplate(data);
      $('#images').append(compiledTemplate);
    }, true); // true for isMultipart as we send a file
  }

});