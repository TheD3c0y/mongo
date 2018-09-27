var cheerio = require("cheerio");
var request = require("axios");
var model = require("./models");
// First, tell the console what server2.js is doing

            
// Making a request for `dailywire`'s homepage


  request.get("https://www.dailywire.com/").then(function(response) {
    
  // Load the body of the HTML into cheerio
  var $ = cheerio.load(response.data);
  
  // Empty array to save our scraped data
  var results = [];

  // With cheerio, find each h3-tag with the specified class and loop through the results
  $("article").each(function(i, element) {

    // Save the text of the h3-tag as "title"

    if($(element).find("address").text().trim() !== undefined && typeof $(element).find("address").text() === 'string'){
      var author = $(element).find("address").text();
      
    }
    // Gets them titles
    if($(element).find("h2").children('a').text().trim() !== undefined && typeof $(element).find("h2").children('a').text() === 'string'){
      var title = $(element).find('a').text();

    }
    
    

    //var img = $(element).parents
    
    // Find the h4 tag's parent a-tag, and save it's href value as "link"
    
    
    if($(element).find('a').attr("href") !== undefined){
      
      var link = $(element).find('a').attr("href");
    }

    // Make an object with data we scraped for this h4 and push it to the results array
    if(title.length > 0 && link.length > 0 ){
     
      results.push({
        title: title,
        author: author,
        url: link
      });
    }
  });
  
  for(let i = 0; i < results.length; i++){
    model.Article.create(results[i])
    .then(function(dbArticle) {
      // View the added result in the console
      console.log("entry added");
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return console.log(err);
    });
  }

  return console.log("Scrape Complete");
    

});



