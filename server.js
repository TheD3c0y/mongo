//Dependencies
var express = require("express");
var mongojs = require("mongojs");
var axios = require("axios");
var logger = require("morgan");
var body = require("body-parser");
var PORT = process.env.PORT || 8080;

//Ini Express
var app = express();
var router = express.Router();

//DB Config
//Save URL for database and collection
var datbaseUrl = "hw";
var collections = ["articles"]

app.use(logger("dev"));
app.use(body.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(body.json());
//Use mongojs to hook database to the db variable
var database = mongojs(datbaseUrl, collections);

database.on("error", function(error){
    console.log("database error ", error);
})


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//////////////////////////////////////////////////////////////
///Routes

app.get("/scrape", function(req, res){
  var scraper = require("./scraper");
  
 
  
  
})

app.get("/", function(req, res){
  res.redirect("/index");
  
  console.log("hi");
})

app.get("/views/index", function(req, res) {
  res.redirect("/index");
})

app.get("/index", function(req, res) {
  
  console.log("hi");
    res.render("index");
});

  app.listen(PORT, function() {
    console.log("Server is on,", PORT);
})

var mongoose = require('mongoose');

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = /*process.env.MONGODB_URI ||*/ "mongodb://localhost/hw";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
//mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);