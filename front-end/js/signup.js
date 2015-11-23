$(init);

function init(){ 
  $('form').on('submit', submitForm);
}

function submitForm(){
  event.preventDefault();

  var method = $(this).attr('method');
  var url = 'http://localhost:3000/api/signup';
  var data = $(this).serialize();
  console.log(data);

  return ajaxRequest(method, url, data, authenticationSuccessful);
}

function ajaxRequest(method, url, data, callback) {
  return $.ajax({
    method: method,
    url: url,
    data: data,
    beforeSend: setRequestHeader
  }).done(function(data) {
    console.log(data);
    callback(data);
  })
}

function setRequestHeader(xhr, settings) {
  var token = getToken(); // get our token from local storage
  if(token) return xhr.setRequestHeader ('Authorization', 'Bearer ' + token);
}

function authenticationSuccessful(data) {
  if(data.token) return setToken(data.token);
}

function getToken() {
  return localStorage.getItem("token");
}

function setToken(token) {
  return localStorage.setItem("token", token);
}








