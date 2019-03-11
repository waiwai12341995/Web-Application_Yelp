// All middleware
var Campground = require("../models/campground")
var Comment = require("../models/comment")

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err || !foundCampground){
                req.flash("error", "Comment not found");
                res.redirect("back");
            } else {
                // does user own the comment?
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You dun have permission to do");
                    res.redirect("back")
                }
            }
        });
    } else {
        req.flash("error", "You need to be login");
        res.redirect("back")
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back");
            } else {
                // does user own the comment?
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You dun have permission");
                    res.redirect("back")
                }
            }
        });
    } else {
        req.flash("error", "You need login to do");
        res.redirect("back")
    }
}


middlewareObj.isLogin = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be login");
    res.redirect("/login")
}


module.exports = middlewareObj;