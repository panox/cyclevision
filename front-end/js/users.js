$(function(){

$.get("http://localhost:3000/api/users")
  .done(function(res){
  console.log(res.users)
  _(res.users).each(function(item) {
    source = {first_name: null}
    data = _.extend(source, item)
    var underscoreTemplate = _.template($('#all-users').html());
    console.log(item)
    var compiledTemplate = underscoreTemplate(data);
    $('#users').append(compiledTemplate);
    })
  })
  .fail(function(res){
  console.log("Error getting values")
  });

});