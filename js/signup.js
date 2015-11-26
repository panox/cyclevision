$(init);

function init(){ 
  $('#modal2 form').on('submit', submitForm);
}

function submitForm(){
  event.preventDefault();

  var method = $(this).attr('method');
  var url = configKeys.url + 'signup';
  var data = $(this).serialize();
  console.log(data);

  return ajaxRequest(method, url, data);
}

function ajaxRequest(method, url, data) {
  return $.ajax({
    method: method,
    url: url,
    data: data
  }).done(function(data) {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("userId", data.user._id);
    addLogout();
  })
}









