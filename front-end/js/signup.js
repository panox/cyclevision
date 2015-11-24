$(init);

function init(){ 
  $('form').on('submit', submitForm);
}

function submitForm(){
  event.preventDefault();

  var method = $(this).attr('method');
  var url = 'signup';
  var data = $(this).serialize();
  console.log(data);

  ajaxRequest(url, method, data, function() {
    console.log('signed up')
  });
}









