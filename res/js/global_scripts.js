populate_github_data = function() {

  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/ChoiceCoin/repos",
    success: function(response) {
      for(var i=0; i<response.length; i++){
        if(response[i].name == "Choice-V1"){
          $("#choice-v1-description").text(response[i].description);
          $("#choice-v1-language").text(response[i].language);
          $("#choice-v1-forks").text(response[i].forks_count);
          $("#choice-v1-stars").text(response[i].stargazers_count);
        }
        if(response[i].name == "ChoiceCoin.github.io"){
          $("#web-description").text(response[i].description);
          $("#web-language").text(response[i].language);
          $("#web-forks").text(response[i].forks_count);
          $("#web-stars").text(response[i].stargazers_count);
        }
        if(response[i].name == "Smart_Contracts"){
          $("#smart-contracts-description").text(response[i].description);
          $("#smart-contracts-language").text(response[i].language);
          $("#smart-contracts-forks").text(response[i].forks_count);
          $("#smart-contracts-stars").text(response[i].stargazers_count);
        }
        if(response[i].name == "Voting"){
          $("#voting-description").text(response[i].description);
          $("#voting-language").text(response[i].language);
          $("#voting-forks").text(response[i].forks_count);
          $("#voting-stars").text(response[i].stargazers_count);
        }
      }
    }
  });
}
