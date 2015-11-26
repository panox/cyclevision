$(function(){

  var otherId = localStorage.getItem("otherUser");
  console.log(otherId)
  
  var url = "users/" + otherId;

  ajaxRequest(url, "GET", null, function(res){

    var user = res.user;
    var data = {
      email: user.local.email,
      first_name: user.first_name,
      last_name: user.last_name,
      profile_pic: user.profile_pic,
      type_of_cyclist: user.type_of_cyclist,
      about_me: user.about_me
    }
      source = {
        first_name: null,
        last_name: null,
        profile_pic: null, 
        type_of_cyclist: null,
        about_me: null, 
        city: null
      }
      data = _.extend(source, user)
      var underscoreTemplate = _.template($('#all-users').html());
      console.log(user)
      var compiledTemplate = underscoreTemplate(data);
      $('#users').append(compiledTemplate);

      _(user.images).each(function(item) {
        item.image = configKeys.bucketUrl + item.image;
        var underscoreTemplate = _.template($('#user-images').html());
        var compiledTemplate = underscoreTemplate(item);
        $('#images').append(compiledTemplate)
      });
      // localStorage.removeItem("otherUser");

      $('.materialboxed').materialbox();
    });



});