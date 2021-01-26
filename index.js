const express = require('express');
const { login, google, logout, redirect } = require('./routes/auth');
const app = express();
const router = express.Router();
const passportSetup = require('./helpers/passport.js');
const passport = require('passport');
const cookieSession = require('cookie-session');
const key = require('./helpers/key');
//home route 
router.get('/',(req, res) => {
    res.status(200).send({ message: "server running...." });
});


router.get('/auth/login',login);
router.get('/auth/google',google);
router.get('/auth/logout',logout);
router.get('/auth/google/redirect',passport.authenticate('google'), redirect);


app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[key.session.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());


app.use('/', router);
app.listen(3000, function(){
    console.log('3000 port started');
})
