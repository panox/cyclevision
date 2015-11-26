function addMessage() {
  $('nav').after('<h2>You need to log in to see the content</h2>')
};

$(function(){ 

  if(!getToken()) {
    addMessage();
  };

})