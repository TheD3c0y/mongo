var mongoose = require("mongoose");


let articleSchema = new mongoose.Schema({
    
    title: {type: String, required: true, unique: true, sparse:true},
    //summary: {type: String, required: true},
    author:{type: String, require: true},
    url: {type: String, required: true},
    
  } )

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;