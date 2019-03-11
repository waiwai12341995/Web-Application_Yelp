var express = require("express");
var app = express();

// +++++++++++++++
// Route
// +++++++++++++++

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!"); 
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    console.log("SOMEONE MADE A REQUEST TO /DOG!!!")
    res.send("MEOW!"); 
});

// Dynamic Content
app.get("/mood/:emotion", function(req, res){
    // console.log(req.params) //emotion = what i type in url
    var myemotion = req.params.emotion;
    res.send("Your emotion is "+ myemotion.toUpperCase())
    console.log(req.params)
});

app.get("/fishlist/:catergory/:dogs", function(req, res){
    res.send("Welcome to Fish's doglist!");
});

app.get("/fishlist/:catergory/:sport", function(req, res){
    res.send("Welcome to Fish's sportlist!");
});


// *
app.get("*", function(req, res){
    res.send("Page not found wo"); 
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});










