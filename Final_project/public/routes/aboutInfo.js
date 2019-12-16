// express app,router and utility requires start

var express = require('express');
var router = express.Router();
var utility = require('../util/connectionDB.js');
// express app,router and utility requires end

// Routing for about start

router.get('/',function(req,res){
  res.render('about',{session:req.session.theUser});
})

// Routing for about end


// exporting router
module.exports = router;
