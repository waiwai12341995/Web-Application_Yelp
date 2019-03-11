var mongoose = require("mongoose")

// User -email, name (Create Model User)
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    // Connect with post ******
    posts: [
        {
            // Mongoose Object ID
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
        ]
})

// Return value of file
// export the model
module.exports =  mongoose.model("User", userSchema)