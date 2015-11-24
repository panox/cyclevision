$(function(){

  ajaxRequest("users", "GET", null, function(res){
  console.log(res.users)
  _(res.users).each(function(item) {
    source = {
      first_name: null,
      last_name: null,
      profile_pic: null, 
      type_of_cyclist: null,
      about_me: null, 
      city: null
    }
    data = _.extend(source, item)
    var underscoreTemplate = _.template($('#all-users').html());
    console.log(item)
    var compiledTemplate = underscoreTemplate(data);
    $('#users').append(compiledTemplate);
    })
  })

});