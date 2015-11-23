$(function(){ 

  function init(){
  $("form").on("submit", submitForm);

  }

  function submitForm(req, res){
    event.preventDefault();

    var method = $(this).attr("method");
    var url    = "http://localhost:3000/api/login";
    var data   = $(this).serialize();

    return ajaxRequest(method, url, data)
  }

  function setToken(){
    return window.localStorage.setItem("token", token);
  }

  function authenticationSuccessful(){

  }

  function ajaxRequest(method, url, data){
    return $.ajax({
    method: method,
    url: url,
    data: data,
    }).done(function(data){
      console.log(data);
    }).fail(function(data) {
      console.log(data.responseJSON.message);
    });
  }

  init()




})