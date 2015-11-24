$(function() {

  var underscoreTemplate = _.template($('#logout').html());
  var compiledTemplate = underscoreTemplate();
  $('#mobile-demo').append(compiledTemplate);

});