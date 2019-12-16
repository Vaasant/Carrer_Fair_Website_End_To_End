// express app,router and utility requires start

var express = require('express');
var router = express.Router();
var utility = require('../util/connectionDB.js');
// express app,router and utility requires end


// Routing for savedConnection start

router.get('/',function(req,res){
  res.render('savedConnections');
})

// Routing for savedConnection end



module.exports = router;
