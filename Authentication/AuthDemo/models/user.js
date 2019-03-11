var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String
})

//hashing , sorting, storing in the database
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema)