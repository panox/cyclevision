$(function() {

  var navigation =     
     '<nav>' + 
       '<div class="nav-wrapper">' +
         '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>'+
         '<a href="/" class="brand-logo"> <img src="/images/logo1.png" width="100px"></a>' +

         '<ul class="right hide-on-med-and-down">' +
           '<li><a href="/pages/user.html" class="profile">Profile</a></li>' +
           '<li><a href="/pages/images.html">Images</a></li>'+
           '<li><a href="/pages/users.html">Cyclists</a></li>' +
           '<li><a href="#modal2" class="modal-trigger signup">Signup</a></li>' +
           '<li><a href="#modal1" class="modal-trigger login">Login</a> </li>' +
         '</ul>' +
         '<ul class="side-nav" id="mobile-demo">' +
          '<li><a href="/pages/user.html">Profile</a></li>' +
          '<li><a href="/pages/images.html">Images</a></li>' +
          '<li><a href="/pages/users.html">Cyclists</a></li>' +
          '<li><a href="#modal2" class="modal-trigger signup">Signup</a> </li>' +
          '<li><a href="#modal1" class="modal-trigger login">Login</a> </li>' +
        '</ul>' +
      '</div>' +
    '</nav>' 

  var modal1 = 
   '<div id="modal1" class="modal">' +
    '<div class="modal-content">' + 
      '<form method="post" action="http://localhost:3000/api/">' +
'        <input type="text" name="email" id="user-email" placeholder="email address"><br />' +
'        <input type="password" name="password" id="user-password" placeholder="password">' +
'        <input type="submit" value="Log in" id="submit" class=" modal-action modal-close">'+
      '</form>' +
    '</div>' +
  '</div>'


  $('body').prepend(navigation)
  $('.container').prepend(modal1)

});