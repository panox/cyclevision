$(function(){

  ajaxRequest("images", "get", null, function(res) {
    _(res.images).each(function(item) {
      var underscoreTemplate = _.template($('#all-images').html());
      var compiledTemplate = underscoreTemplate(item);
      $('#images').append(compiledTemplate);
    })

    $('.materialboxed').materialbox();
  })
  

})