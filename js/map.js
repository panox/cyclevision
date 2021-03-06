$(function() {
  ajaxRequest('images/5656dda330136278059b9b5b', "get", false, function(res){
    var imageLocation = res.image.location
    var secondHome = "https://maps.googleapis.com/maps/api/geocode/json?address=" + imageLocation
    var picture = res.image.image

    $.get(secondHome)
    .done(function(res){
      var location = res.results[0].geometry.location

      var myLatLng = {lat: location.lat, lng: location.lng};


      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng
      });

      var infowindow = new google.maps.InfoWindow({
          content: '<img src='+ picture +' height="80" width="80">'
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

});