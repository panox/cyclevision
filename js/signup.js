$(init);

function init(){ 
  $('#modal2 form').on('submit', submitForm);
}

function submitForm(){
  event.preventDefault();

  var method = $(this).attr('method');
  var url = 'signup';
  var data = $(this).serialize();
  console.log(data);

  ajaxRequest(url, method, data, function(res) {
    console.log(res)
    window.localStorage.setItem("token", res.token);
    window.localStorage.setItem("userId", res.user._id);
    addLogout();
  });
}









