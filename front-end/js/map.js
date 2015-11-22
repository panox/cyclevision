$(function() {

  var amphitheatreParkway = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA"

  $.get(amphitheatreParkway)
  .done(function(res){
    var location = res.results[0].geometry.location

    var myLatLng = {lat: -25.363, lng: 131.044};


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });



  })
  .fail(function(res){
    console.log("An error")
  })

});