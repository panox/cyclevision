$(function() {

  $.get("http://localhost:3000/api/images/5652162845ace0f652a568a3")
  .done(function(res){
    var itemLocation = item.location
    var itemGoogle = "https://maps.googleapis.com/maps/api/geocode/json?address=" + itemLocation
    var picture = item.image

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: myLatLng
    });
    
    $.get(itemGoogle)
    .done(function(res){
      var location = res.results[0].geometry.location

      var myLatLng = {lat: location.lat, lng: location.lng};


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
  .fail(function(res){
    console.log("Error getting values")
  })

});