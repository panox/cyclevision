$(function() {

  
  var userId = localStorage.getItem("userId");
  var url = "http://localhost:3000/api/users/" + userId

  $.get(url)
  .done(function(res){
    console.log(res)
  })
  .fail(function(res){
    console.log("Error making map")
  })

});