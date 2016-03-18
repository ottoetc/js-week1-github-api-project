var apiRequest = require('./../js/github-request.js').apiRequest;

$(document).ready(function(){
  $('#user-search').submit(function(event){
    event.preventDefault();
    var githubUser = $('#search').val();
    var repoList = apiRequest(githubUser);
    output.forEach(function(element){
      $('#repo-list').append('<li>' + element + '</li>');
    });
  });
});
