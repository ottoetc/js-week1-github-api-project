var apiKey = require('./../.env').apiKey;

exports.apiRequest = function(userName){
  var user = userName;
  $.get('https://api.github.com/users/' + user + '/repos' + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++){
      $('#repo-list').append('<li>' + response[i].name + '</li>');
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
