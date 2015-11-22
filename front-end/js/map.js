$(function() {

  var amphitheatreParkway = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA"
  var secondHome = "https://maps.googleapis.com/maps/api/geocode/json?address=68 Hanbury St London E1 5JL"

  $.get(secondHome)
  .done(function(res){
    var location = res.results[0].geometry.location

    var myLatLng = {lat: location.lat, lng: location.lng};


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
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