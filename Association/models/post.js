var mongoose = require("mongoose");

// POST - title, content (Create Model Post)
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

// Return value of file
// export the model
module.exports = mongoose.model("Post", postSchema);