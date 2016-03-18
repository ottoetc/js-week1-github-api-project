var apiKey = require('./../.env').apiKey;

exports.apiRequest = function(userName){
  var user = userName;
  $('#repo-list').empty();
  $.get('https://api.github.com/users/' + user + '/repos' + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++){
      var repoName = response[i].name;
      var description = "";
      if(response[i].description === ""){
        description = "No description available"
      } else {
        description = response[i].description;
      };
      $('#repo-list').append('<h4>' + repoName + '</h4><p>Description: ' + description + '</p>');
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
