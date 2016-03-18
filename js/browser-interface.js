var apiRequest = require('./../js/github-request.js').apiRequest;

$(document).ready(function(){
  $('#user-search').submit(function(event){
    event.preventDefault();
    var githubUser = $('#search').val();
    apiRequest(githubUser);
  });
});
