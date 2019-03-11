var express = require("express")
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Campground Model in /models/campground directory
var Campground = require("./models/campground")
var seedDB = require("./seeds")
var Comment = require("./models/comment")

seedDB();

// Connect Mongoose with Yelp_Camp DB
mongoose.connect("mongodb://localhost:27017/yelp_camp_v3",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("landing")
});

// INDEX ROUTE - SHow all campground
// We are now retrieve campground from DB
app.get("/campgrounds", function(req, res){
    // Get all the campground from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});


// CREATE ROUTE -- Add campground to DB
// POST Request -- where we send POST request to add new one
// Create a new campground
app.post("/campgrounds", function(req, res){
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    
    // Create new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log("Error in Creating Campground")
            console.log(err)
        }else{
            // redirect back to campground (GET request route)
            res.redirect("/campgrounds");
        }
    })
});

// NEW ROUTE -- Show the form that send the data to the post route
app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new")
});

// SHOW ROUTE (must after /new route)
// Show info. about campground
app.get("/campgrounds/:id", function(req, res){
    //find thecampground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground)
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});


// ==========================================
// Comment Routes
//===========================================

app.get("/campgrounds/:id/comments/new", function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new", {campground: campground});
        }
    })
});

app.post("/campgrounds/:id/comments", function(req, res) {
    //lookup campground using id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }else{
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }else{
                    campground.comments.push(comment)
                    campground.save();
                    res.redirect("/campgrounds/"+campground._id);
                }
            })
        }
    })
});
            //connect new comment to campground
            //redirect to campground show page        }







// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Server Start");
});















