$(init);

function init(){ 
  $('#modal2').on('submit', 'form', submitForm);
}

function submitForm(){
  event.preventDefault();

  var method = $(this).attr('method');
  var url = 'http://localhost:3000/api/signup';
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
    console.log(data);
  })
}









