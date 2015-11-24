function addLogout() {

  var underscoreTemplate = _.template($('#logout').html());
  var compiledTemplate = underscoreTemplate();
  $('.hide-on-med-and-down').append(compiledTemplate);
  $('#mobile-demo').append(compiledTemplate);
}

$(function(){ 

  if(getToken()) {
    addLogout()
  }

})