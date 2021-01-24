const express = require('express');
const { login, google, logout } = require('./routes/auth');
const app = express();
const router = express.Router();


//home route 
router.get('/',(req, res) => {
    res.status(200).send({ message: "server running...." });
});


router.get('/auth/login',login);
router.get('/auth/google',google);
router.get('/auth/logout',logout);




app.use('/', router);
app.listen(3000, function(){
    console.log('3000 port started');
})
