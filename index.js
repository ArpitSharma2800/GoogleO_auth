const express = require('express');
const app = express();
const router = express.Router();


//home route 
router.get('/',(req, res) => {
    res.status(200).send({ message: "server running...." });
});




app.use('/api', router);
app.listen(3000, function(){
    console.log('3000 port started');
})
