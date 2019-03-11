var express = require("express")
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Lake", image: "https://pixabay.com/get/ea32b6062afc013ed1584d05fb1d4e97e07ee3d21cac104491f5c771a6e5bdbd_340.jpg"},
    {name: "Forest", image: "https://pixabay.com/get/e136b60d2af51c22d2524518b7444795ea76e5d004b0144590f6c978afe5b0_340.jpg"},
    {name: "CAT", image: "https://pixabay.com/get/ef30b10a2cf11c22d2524518b7444795ea76e5d004b0144590f6c978afe5b0_340.jpg"}
]

app.get("/", function(req, res){
    res.render("landing")
});


app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});


// POST Request -- where we send POST request to add new one
// Create a new campground
app.post("/campgrounds", function(req, res){
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campground (GET request route)
    res.redirect("/campgrounds");
});

// Show the form that send the data to the post route
app.get("/campgrounds/new", function(req, res){
    res.render("new")
});

// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Server Start")
})