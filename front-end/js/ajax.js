$(function() {

  // get images
  $.get("http://localhost:3000/api/images")
  .done(function(res){
    console.log(res.images)
  })
  .fail(function(res){
    console.log("Error getting values")
  })
  // get users
  $.get("http://localhost:3000/api/users")
  .done(function(res){
    console.log(res.users)
  })
  .fail(function(res){
    console.log("Error getting values")
  })


});