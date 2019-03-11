var mongoose = require("mongoose");
 
var commentSchema = new mongoose.Schema({
    text: String,
    author: String
});
 
// Compiler to Model
module.exports = mongoose.model("Comment", commentSchema);