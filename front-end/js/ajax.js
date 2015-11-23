$(function() {

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

  


});