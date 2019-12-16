// express app,router and utility requires start

var express = require('express');
var router = express.Router();
var utility = require('../util/connectionDB.js');
// express app,router and utility requires end

// Routing for contact start

router.get('/',function(req,res){
  res.render('contact',{session:req.session.theUser});
})

// Routing for contact end


module.exports = router;
