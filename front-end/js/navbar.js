function addLogout() {
  if(getToken()) {
    var underscoreTemplate = _.template($('#logout').html());
    var compiledTemplate = underscoreTemplate();
    console.log(compiledTemplate)
    $('.hide-on-med-and-down').append(compiledTemplate);
    $('#mobile-demo').append(compiledTemplate);
  }
}