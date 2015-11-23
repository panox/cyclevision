$(function(){

$.get("http://localhost:3000/api/users")
  .done(function(res){
  console.log(res.users)
  _(res.users).each(function(item) {
    var underscoreTemplate = _.template($('#all-users').html());
    var compiledTemplate = underscoreTemplate(item);
    $('#users').append(compiledTemplate);
    })
  })
  .fail(function(res){
  console.log("Error getting values")
  });

});