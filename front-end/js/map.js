$(function() {

  $.get("http://localhost:3000/api/images/5652162845ace0f652a568a3")
  .done(function(res){
    var imageLocation = res.image.location
    var secondHome = "https://maps.googleapis.com/maps/api/geocode/json?address=" + imageLocation

    $.get(secondHome)
    .done(function(res){
      var location = res.results[0].geometry.location

      var myLatLng = {lat: location.lat, lng: location.lng};


      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng
      });

      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'SecondHome'
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

    })
    .fail(function(res){
      console.log("Error making map")
    })


  })
  .fail(function(res){
    console.log("Error getting values")
  })

});