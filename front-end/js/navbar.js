function addLogout() {
  $('.signup').hide();
  $('.login').hide();
  var underscoreTemplate = _.template($('#logout').html());
  var compiledTemplate = underscoreTemplate();
  $('.hide-on-med-and-down').append(compiledTemplate);
  $('#mobile-demo').append(compiledTemplate);
}
function pressLogout() {
  $('.signup').show();
  $('.login').show();
};

$(function(){ 

  if(getToken()) {
    addLogout()
  }

})