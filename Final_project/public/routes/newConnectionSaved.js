// express app,router and utility requires start

var express = require('express');
var router = express.Router();
var utility = require('../util/connectionDB.js');
// express app,router and utility requires end


// Routing for newConnection start


router.post('/',function(req,res){


    res.render('newConnection');


})

// Routing for newConnection end


module.exports = router;
