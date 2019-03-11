var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Small","Mui","Lui"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriends", function(req, res){
    // console.log(req.body.newfd)
    var newFriend = req.body.newfd;
    friends.push(newFriend);
    
    // Redirect to /friends route
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});


// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Start")
})