var express = require("express");
var app = express();


// Tell express to surf the public dictorary
app.use(express.static("public"));
app.set("view engine", "ejs"); // no need to write ejs


// Route
app.get("/", function(req, res){
    res.render("home")
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing})
})

app.get("/posts", function(req, res){
    var posts = [
        {title: "Fish", role: "Student"},
        {title: "Yan", role: "WHV"},
        {title: "Small", role: "Dog"},
        ];
        
        res.render("posts", {posts: posts})
})


// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Start")
})