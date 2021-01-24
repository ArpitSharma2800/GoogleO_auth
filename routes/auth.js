const passport = require("passport");

exports.login = async function(req,res,next){
    console.log('login'); 
}

exports.google = passport.authenticate('google',{
    scope:['profile']
})

exports.logout = async function(req,res,next){
    console.log('logout');
}

exports.redirect = async function(req,res,next){
    res.send({"message": "your eaches to callback"})
}