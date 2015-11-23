$(function() {

  
  var userId = localStorage.getItem("token");
  var url = "http://localhost:3000/api/users/" + userId
  console.log(userId)

  $.get(url)
  .done(function(res){
    console(res)
  })
  .fail(function(res){
    console.log("Error making map")
  })

});