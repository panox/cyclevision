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

  var map = new google.maps.Map($('#map')[0], {
    center: { lat: 51.5073249, lng: -0.1450596 },
    zoom: 12
  });

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


    var markers = [];
    var bounds = new google.maps.LatLngBounds();
    var Geocoder = new google.maps.Geocoder();

    //get current user images
    res.user.images.forEach(function(item) {

      Geocoder.geocode({ address: item.location }, function(results, status) {
        if(status === 'OK') {

          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });

          var infowindow = new google.maps.InfoWindow({
              content: '<img src='+ item.image +' height="80" width="80">'
          });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });


          markers.push(marker);

          bounds.extend(results[0].geometry.location);
          map.fitBounds(bounds);
        }
      });

      item.image = configKeys.bucketUrl + item.image;
      var underscoreTemplate = _.template($('#user-images').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);

      
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
    });
  

  $('.modal-trigger').leanModal();
  
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