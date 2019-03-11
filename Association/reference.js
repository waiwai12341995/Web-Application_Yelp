//Object Referening
//=================

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_app_2",{useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");

// How it look?? (Now we will save by id)
// {
//     email:"abc@gmail.com",
//     name: "waigor",
//     post: [
//         1232343145,
//         3232423443 --> Corresponding to post
//         ]
// }

// {
//     id: 32432435,
//     title: "Hi"
// }



// Create new user
// User.create({
//     email: "TaoTaoChan@gmail.com",
//     name: "TaoChan"
// })

// Create new post
// Post.create({
//     title: "This post is after referencing",
//     content: "Here is the new post after referencing"
// }, function(err, post){
//     User.findOne({email: "TaoTaoChan@gmail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         }else{
//             foundUser.posts.push(post)
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err)
//                 }else{
//                     console.log(data)
//                 }
//             })
//         }
//     })
// });

//======================================================
// Find user and all post from user as well via id
// Populate -- Look Up all object id
// Exec -- Start the query
// User.findOne({email:"TaoTaoChan@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });


// newUser.posts.push({
//     title: "Post ah things sin",
//     content: "So difficult wo"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(user)
//     }
// })

// Create new post
// var newPost = new Post({
//     title: "Love",
//     content: "HaloWorld"
// })

// newPost.save(function(err, post){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(post)
//     }
// })

// Retirve User
