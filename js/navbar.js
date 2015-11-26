function addLogout() {
  $('.signup').hide();
  $('.login').hide();
  var logout = '<li id="logout"><a href="#">Log out</a></li>'
  $('.hide-on-med-and-down').append(logout);
  $('#mobile-demo').append(logout);
}
function pressLogout() {
  $('.signup').show();
  $('.login').show();
};

$(function(){ 



  if(getToken()) {
    addLogout()
  };

  function init(){
    $('nav a').on('click', checkLoginState);
  };

  function checkLoginState(){
    var page = $(this).attr('href');
    if (!getToken() && page.match(/(users|user|images)/)){
      event.preventDefault();
      $('#modal1').openModal();
    }
  };

init()

})