var model = require('./models');
$(document).ready(function() {
    
    $(".scrape").on("submit", function(event) {
      event.preventDefault();
  
      var article_id = $(this).children(".articles").val();
      console.log(article_id);
      $.ajax({
        method: "PUT",
        url: "/mongo/" + article_id
      }).then(function(data) {


        location.reload();
      });
  
    });
  });