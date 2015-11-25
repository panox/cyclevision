function initMap() {
  var myLatLng = {lat: 51.5072, lng: 0.1275};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });
}

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


    initMap()
    //get current user images
    _(res.user.images).each(function(item) {

      item.image = configKeys.bucketUrl + item.image;
      var underscoreTemplate = _.template($('#user-images').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);

      $('.modal-trigger').leanModal();

      
      //delete images
      $('.card-image').on('click', "#delete-image", function(){
        event.preventDefault();

        var $image = $(event.target).parent('.card-image');
        ajaxRequest("images/" + item._id, "DELETE", null, function() {
          $image.remove();
        });
      })
      //Update images
      $('#'+item.title).find('#update-image').on('submit', function(){
        event.preventDefault();
        var cardTitle = '#card-' + item.title
        var data = {
          title: $('#'+item.title+'-update-title').val(),
          location: $('#'+item.title+'-update-location').val()
        }
        $(cardTitle).find('#title').text(data.title)
        $(cardTitle).find('#location').text(data.location)
        ajaxRequest("images/" + item._id, "PUT", data, function(){} )
        $('.lean-overlay').remove()
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

    ajaxRequest(url, method, data, function(res) {
      var image = res.image;
      image.image = configKeys.bucketUrl + image.image;
      var underscoreTemplate = _.template($('#user-images').html());
      var compiledTemplate = underscoreTemplate(image);
      $('#images').prepend(compiledTemplate);
    }, true); // true for isMultipart as we send a file
  }

});