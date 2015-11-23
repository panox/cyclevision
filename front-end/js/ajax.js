$(function() {

  // get images
  $.get("http://localhost:3000/api/images")
  .done(function(res){
    console.log(res)
  })
  .fail(function(res){
    console.log("Error getting values")
  })


});