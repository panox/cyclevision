function getToken() {
  return localStorage.getItem("token");
}

function setHeaders(xhr) {
  var token = localStorage.getItem('token');
  if(token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
}

function ajaxRequest(url, method, data, callback) {
  $.ajax({
    url: 'http://localhost:3000/api/' + url,
    method: method,
    data: data,
    beforeSend: setHeaders
  }).done(function(res) {
    return callback(res);
  }).fail(function(err) {
    console.error(err);
  });
}