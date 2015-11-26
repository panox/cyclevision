function getToken() {
  return localStorage.getItem("token");
}

function setHeaders(xhr) {
  var token = localStorage.getItem('token');
  if(token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
}

function ajaxRequest(url, method, data, callback, isMultipart) {
  var options = {
    url: configKeys.url + url,
    method: method,
    data: data,
    beforeSend: setHeaders
  }

  if(isMultipart){
    options.cache = false;
    options.enctype = 'multipart/form-data';
    options.processData = false;
    options.contentType = false;
  }

  $.ajax(options).done(function(res) {
    return callback(res);
  }).fail(function(err) {
    console.error(err);
  });
}