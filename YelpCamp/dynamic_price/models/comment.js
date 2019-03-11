var mongoose = require("mongoose");
 
var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            // Model that going refer to ObjectId
            ref: "User"
        },
        username: String
    }
});
 
// Store the entire author so that we don't need type
// author ineach comment
// {
//     username: "Lee Bao Bao"
//     _id: 19951201
//     hash: 1242342145324534553
//     salt: 4234234532453453245
// }
 
// Compiler to Model
module.exports = mongoose.model("Comment", commentSchema);