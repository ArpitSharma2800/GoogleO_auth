const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const key = require('./key');

passport.serializeUser((user, done)=>{
    done(null, userId) //dummy user id from Mongodb or SQL id
})

passport.deserializeUser((id, done)=>{
    //function to find user in database

    done(null, user) //dummy user id from Mongodb or SQL id
})

passport.use(new GoogleStrategy({    
    callbackURL:'/auth/google/redirect',
    clientID: key.google.clientID,
    clientSecret: key.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('passport');
    console.log(accessToken);
    console.log(profile.id);
    done(null, profile);
})   
);