var mongoose = require("mongoose");


let noteSchema = new mongoose.Schema({
    comment: {type: String, required: true}
})

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;