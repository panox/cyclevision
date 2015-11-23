$(init);

function init(){ 
  $('form').on('submit', submitForm);
  
}


function submitForm(){
  event.preventDefault();

  var method = $(this).attr('method');
  var url = 'http://localhost:3000/api/signup';
  var data = $(this).serialize(); //name="Mike"&email="m.hayden@ga.co" etc etc...

  return ajaxRequest(method, url, data);
}



function ajaxRequest(method, url, data) {
  return $.ajax({
      method: method,
      url: url,
      data: data
    })
    .done(function(data) {
      console.log(data);
      
    })
    .fail(function(data) {
      console.log(data.responseJSON.message);
    })
}










