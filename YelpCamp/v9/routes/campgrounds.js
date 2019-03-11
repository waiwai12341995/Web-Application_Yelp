var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")


//====================================================
//Campground Route
//====================================================

// INDEX ROUTE - SHow all campground
// We are now retrieve campground from DB
router.get("/", function(req, res){
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
router.post("/", isLogin, function(req, res){
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    
    var newCampground = {name: name, image: image, description: desc, author: author};

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
router.get("/new", isLogin, function(req, res){
    res.render("campgrounds/new")
});

// SHOW ROUTE (must after /new route)
// Show info. about campground
router.get("/:id", function(req, res){
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

function isLogin(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router;

