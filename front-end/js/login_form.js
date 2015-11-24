$(function(){ 

  console.log("loaded")

  function init(){
  $("form").on("submit", submitForm);
  $("nav").on("click", '#logout', logOut)
  }

  function submitForm(req, res){
    event.preventDefault();
    console.log('clicked')

    var method = $(this).attr("method");
    var url    = "http://localhost:3000/api/login";
    var data   = $(this).serialize();

    return ajaxReq(method, url, data)
  }

  function setToken(token){
    return window.localStorage.setItem("token", token);
  }

  function authenticationSuccessful(data){
    if (data.token) setToken(data.token);
  }

  function logOut() {
    event.preventDefault();
    pressLogout();
    $(this).remove();
    return localStorage.clear();
  }

  function ajaxReq(method, url, data){
    return $.ajax({
    method: method,
    url: url,
    data: data,
    beforeSend: setHeaders,
    }).done(function(data){
      console.log(data);
      window.localStorage.setItem("userId", data.user._id);
      addLogout();
      authenticationSuccessful(data);
    }).fail(function(data) {
      console.log(data.responseJSON.message);
    });
  }

  init()




})