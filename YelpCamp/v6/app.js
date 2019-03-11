var express = require("express")
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var passport = require("passport");
var LocalStrategy = require("passport-local");

// Campground Model in /models/campground directory
var Campground = require("./models/campground")
var Comment = require("./models/comment")
var User = require("./models/user")

var seedDB = require("./seeds")


// Connect Mongoose with Yelp_Camp DB
mongoose.connect("mongodb://localhost:27017/yelp_camp_v6",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//_dirname directory name
app.use(express.static(__dirname+"/public"));

seedDB();

//Passport configuration
app.use(require("express-session")({
    secret: "Baby Win the champion",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//either empty or someone signin
//call this function in every single route
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

//============================================================
// ROOT ROUTE
//============================================================

app.get("/", function(req, res){
    res.render("landing")
});

//====================================================
//Campground Route
//====================================================


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

app.get("/campgrounds/:id/comments/new", isLogin, function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new", {campground: campground});
        }
    })
});

app.post("/campgrounds/:id/comments", isLogin, function(req, res) {
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
                    //connect new comment to campground
                    campground.comments.push(comment)
                    campground.save();
                    //redirect to campground show page       
                    res.redirect("/campgrounds/"+campground._id);
                }
            })
        }
    })
});

//============================================================
// AUTH ROUTE
//============================================================

//Show Register Form
app.get("/register", function(req, res) {
    res.render("register")
})

app.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    //Store password in cray hash !!!
    //Making a new User
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register")
        }
        //if above work, we let the user in 
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds")
        })
    })
});

//Show Login Form
app.get("/login", function(req, res) {
    res.render("login");
})

//Handling login logic
//app.post("/login", middleware, callback)
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

//Logout
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds")
});

function isLogin(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Server Start");
});















