var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//============================================================
// Root ROUTE
//============================================================
 
router.get("/", function(req, res){
    res.render("landing")
});


//============================================================
// AUTH ROUTE
//============================================================

//Show Register Form
router.get("/register", function(req, res) {
    res.render("register")
})

router.post("/register", function(req, res) {
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
router.get("/login", function(req, res) {
    res.render("login");
})

//Handling login logic
//app.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

//Logout
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds")
});

function isLogin(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}


module.exports = router;
