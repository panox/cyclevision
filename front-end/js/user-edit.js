$(function(){

  var underscoreTemplate = _.template($('#user-edit-form').html());
  var compiledTemplate = underscoreTemplate();
  $('#user-edit').append(compiledTemplate);

});