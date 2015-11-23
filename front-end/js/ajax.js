$(function() {

  // get images
  $.get("http://localhost:3000/api/images")
  .done(function(res){
    console.log(res.images)
    _(res.images).each(function(item) {
      var underscoreTemplate = _.template($('#images-template').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);
    })

  })
  .fail(function(res){
    console.log("Error getting values")
  })
  // get users
  $.get("http://localhost:3000/api/users")
  .done(function(res){
    console.log(res.users)
    _(res.users).each(function(item) {
      var underscoreTemplate = _.template($('#users-template').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#users').append(compiledTemplate);
    })
  })
  .fail(function(res){
    console.log("Error getting values")
  })


});