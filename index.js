const express = require('express');
const { login, google, logout, redirect } = require('./routes/auth');
const app = express();
const router = express.Router();
const passportSetup = require('./helpers/passport.js')

//home route 
router.get('/',(req, res) => {
    res.status(200).send({ message: "server running...." });
});


router.get('/auth/login',login);
router.get('/auth/google',google);
router.get('/auth/logout',logout);
router.get('/auth/google/redirect',redirect);




app.use('/', router);
app.listen(3000, function(){
    console.log('3000 port started');
})
