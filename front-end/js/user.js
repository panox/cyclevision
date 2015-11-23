$(function() {

  function getToken() {
    return localStorage.getItem("token");
  }

  console.log(getToken());

});