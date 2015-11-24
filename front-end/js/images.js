$(function(){

  $.get("http://localhost:3000/api/images")
  .done(function(res){
    _(res.images).each(function(item) {
      var underscoreTemplate = _.template($('#all-images').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);
    })

    $('.materialboxed').materialbox();

  })
  .fail(function(res){
    console.log("Error getting values")
  })
  

})