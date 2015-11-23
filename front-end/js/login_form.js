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

  function setToken(token){
    return window.localStorage.setItem("token", token);
  }

  function authenticationSuccessful(data){
    if (data.token) setToken(data.token);
  }

  function setRequestHeader(xhr, settings) {
    var token = getToken();
    if (token) return xhr.setRequestHeader('Authorization','Bearer ' + token);
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function ajaxRequest(method, url, data){
    return $.ajax({
    method: method,
    url: url,
    data: data,
    beforeSend: setRequestHeader,
    }).done(function(data){
      console.log(data);
      authenticationSuccessful(data);
    }).fail(function(data) {
      console.log(data.responseJSON.message);
    });
  }

  init()




})