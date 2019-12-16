// express app,router and utility requires start

var express = require('express');
var router = express.Router();
var utility = require('../util/connectionDB.js');
// express app,router and utility requires end


// Routing for about connections start

router.all('/', async function (req, res) {
  res.render('login',{session:undefined,notValid:undefined,error:null});
});
module.exports = router;
